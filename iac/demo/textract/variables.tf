variable "region" {
  description = "AWS region to deploy resources"
  default     = "us-east-1"

  validation {
    condition     = contains(["us-east-1"], var.region)
    error_message = "Only us-east-1 is allowed for deployment."
  }
}


variable "lambda_function_name" {
  description = "Lambda function name"
  default     = "textract-lambda"
}

variable "s3_bucket_name" {
  description = "Name of the S3 bucket"
  default     = "acdkochi2024-textract-s3-bucket-demo-"
}

variable "sqs_queue_name" {
  description = "Name of the SQS queue"
  default     = "textract-sqs-queue"
}

variable "csv_s3_prefix" {
  description = "S3 prefix for storing CSV files"
  default     = "processed/csv/"
}

variable "lambda_function_name_2" {
  description = "Name for the second Lambda function"
  default     = "sqs-to-csv-lambda"
}

variable "aws_profile" {
  description = "AWS credentials profile to use"
  default     = "dev"
}