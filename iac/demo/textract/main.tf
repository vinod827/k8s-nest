provider "aws" {
  region  = var.region
  profile = var.aws_profile
}

# S3 Bucket
resource "aws_s3_bucket" "textract_bucket" {
  bucket_prefix = var.s3_bucket_name
  
  tags = {
    Name = "TextractBucket"
  }
  force_destroy = true
}

# SNS Topic
resource "aws_sns_topic" "textract_topic" {
  name = "textract-sns-topic"

  tags = {
    Name = "TextractSNSTopic"
  }
}

# Lambda Function
resource "aws_lambda_function" "textract_lambda" {
  filename         = "lambda_function.zip"
  function_name    = var.lambda_function_name
  role             = aws_iam_role.lambda_role.arn
  handler          = "lambda_function.lambda_handler"
  runtime          = "python3.11"
  source_code_hash = filebase64sha256("lambda_function.zip")
  timeout          = 60

  environment {
    variables = {
      SNS_TOPIC_ARN = aws_sns_topic.textract_topic.arn  # Pass SNS Topic ARN as an environment variable
    }
  }
}

# S3 Bucket Notification to Lambda
resource "aws_s3_bucket_notification" "bucket_notification" {
  bucket = aws_s3_bucket.textract_bucket.id

  lambda_function {
    lambda_function_arn = aws_lambda_function.textract_lambda.arn
    events              = ["s3:ObjectCreated:*"]
    filter_suffix       = ".pdf"
  }

  lambda_function {
    lambda_function_arn = aws_lambda_function.textract_lambda.arn
    events              = ["s3:ObjectCreated:*"]
    filter_suffix       = ".jpeg"
  }

  depends_on = [aws_lambda_permission.allow_s3]
}

# IAM Role for Lambda
resource "aws_iam_role" "lambda_role" {
  name = "lambda-textract-role"

  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Action    = "sts:AssumeRole"
        Effect    = "Allow"
        Principal = {
          Service = "lambda.amazonaws.com"
        }
      }
    ]
  })
}

# IAM Policy for Lambda to publish to SNS
resource "aws_iam_role_policy" "lambda_policy" {
  name   = "lambda-textract-policy"
  role   = aws_iam_role.lambda_role.id
  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Effect   = "Allow"
        Action   = ["s3:GetObject", "s3:PutObject"]
        Resource = "${aws_s3_bucket.textract_bucket.arn}/*"
      },
      {
        Effect   = "Allow"
        Action   = ["sns:Publish"]
        Resource = aws_sns_topic.textract_topic.arn
      },
      {
        Effect   = "Allow"
        Action   = ["textract:DetectDocumentText"]
        Resource = "*"
      },
      {
      "Effect": "Allow",
      "Action": "textract:AnalyzeDocument",
      "Resource": "*"
    },
      {
        Effect   = "Allow"
        Action   = [
          "logs:CreateLogGroup",
          "logs:CreateLogStream",
          "logs:PutLogEvents"
        ]
        Resource = "*"
      },
      {
        Effect   = "Allow"
        Action   = [
          "sqs:ReceiveMessage",
          "sqs:DeleteMessage",
          "sqs:GetQueueAttributes"
        ]
        Resource = aws_sqs_queue.textract_queue.arn
      }
    ]
  })
}




# Allow S3 to invoke Lambda
resource "aws_lambda_permission" "allow_s3" {
  statement_id  = "AllowS3Invoke"
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.textract_lambda.function_name
  principal     = "s3.amazonaws.com"
  source_arn    = aws_s3_bucket.textract_bucket.arn
}

# SQS Queue
resource "aws_sqs_queue" "textract_queue" {
  name = var.sqs_queue_name
  visibility_timeout_seconds = 60

  tags = {
    Name = "TextractQueue"
  }
}

# SQS Queue Policy to allow SNS to publish messages
resource "aws_sqs_queue_policy" "sns_publish_policy" {
  queue_url = aws_sqs_queue.textract_queue.id
  policy    = jsonencode({
    Version   = "2012-10-17"
    Statement = [
      {
        Effect    = "Allow"
        Principal = {
          Service = "sns.amazonaws.com"
        }
        Action    = "sqs:SendMessage"
        Resource  = aws_sqs_queue.textract_queue.arn
        Condition = {
          ArnEquals = {
            "aws:SourceArn" = aws_sns_topic.textract_topic.arn
          }
        }
      }
    ]
  })
}

# SNS Subscription for SQS
resource "aws_sns_topic_subscription" "sns_to_sqs" {
  topic_arn = aws_sns_topic.textract_topic.arn
  protocol  = "sqs"
  endpoint  = aws_sqs_queue.textract_queue.arn

  # Allow SNS to publish to SQS
  depends_on = [aws_sqs_queue_policy.sns_publish_policy]
}

resource "aws_lambda_function" "sqs_to_csv_lambda" {
  filename         = "sqs_to_csv_lambda.zip"  # Path to your Lambda zip file
  function_name    = var.lambda_function_name_2
  role             = aws_iam_role.lambda_role.arn  # IAM role for Lambda
  handler          = "sqs_to_csv_lambda.lambda_handler"  # Lambda function handler
  runtime          = "python3.11"  # Lambda runtime
  source_code_hash = filebase64sha256("sqs_to_csv_lambda.zip")  # Source code hash for validation
  timeout          = 60  # Timeout in seconds

  environment {
    variables = {
      CSV_S3_BUCKET = aws_s3_bucket.textract_bucket.bucket  # S3 bucket name
      CSV_S3_PREFIX = var.csv_s3_prefix  # Prefix for CSV files
    }
  }
}

resource "aws_lambda_event_source_mapping" "sqs_trigger" {
  event_source_arn = aws_sqs_queue.textract_queue.arn
  function_name    = aws_lambda_function.sqs_to_csv_lambda.arn
  batch_size       = 1
  enabled          = true
}

