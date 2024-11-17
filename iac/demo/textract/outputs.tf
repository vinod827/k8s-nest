output "s3_bucket_name" {
  value = aws_s3_bucket.textract_bucket.id
}

output "lambda_function_arn" {
  value = aws_lambda_function.textract_lambda.arn
}

output "sqs_queue_url" {
  value = aws_sqs_queue.textract_queue.id
}

output "csv_lambda_function_arn" {
  value = aws_lambda_function.sqs_to_csv_lambda.arn
}

output "csv_s3_prefix" {
  value = var.csv_s3_prefix
}
