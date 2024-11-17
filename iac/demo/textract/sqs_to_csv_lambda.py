import boto3
import csv
import os
import json
from io import StringIO
import datetime

s3_client = boto3.client('s3')
sqs_client = boto3.client('sqs')

CSV_S3_BUCKET = os.environ['CSV_S3_BUCKET']
CSV_S3_PREFIX = os.environ['CSV_S3_PREFIX']

def lambda_handler(event, context):
    for record in event['Records']:
        # Parse the SQS message
        message_body = json.loads(record['body'])
        bucket = message_body['bucket']
        key = message_body['key']
        extracted_text = message_body['text']

        # Prepare CSV data
        csv_buffer = StringIO()
        csv_writer = csv.writer(csv_buffer)
        csv_writer.writerow(['Bucket', 'Key', 'ExtractedText'])
        csv_writer.writerow([bucket, key, extracted_text])

        # Define the CSV file path and name
        timestamp = datetime.datetime.now().strftime("%Y%m%d%H%M%S")
        csv_filename = f"{CSV_S3_PREFIX}{key.replace('/', '_')}_{timestamp}.csv"

        # Upload CSV to S3
        s3_client.put_object(
            Bucket=CSV_S3_BUCKET,
            Key=csv_filename,
            Body=csv_buffer.getvalue()
        )

        print(f"CSV file saved to S3: {csv_filename}")

    return {
        'statusCode': 200,
        'body': 'CSV files created and saved to S3'
    }
