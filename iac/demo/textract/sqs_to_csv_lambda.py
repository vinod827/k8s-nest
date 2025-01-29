import boto3
import csv
import os
import json
from io import StringIO
import datetime

# Initialize clients
s3_client = boto3.client('s3')
sqs_client = boto3.client('sqs')

# Environment variables
CSV_S3_BUCKET = os.environ['CSV_S3_BUCKET']
CSV_S3_PREFIX = os.environ['CSV_S3_PREFIX']

def lambda_handler(event, context):
    try:
        for record in event['Records']:
            # Parse the SQS message
            message_body = json.loads(record['body'])
            print(f"Received message body: {json.dumps(message_body)}")  # Log the message for inspection

            # Access the nested data within "Message" key
            message_data = json.loads(message_body['Message'])  # This assumes the entire message is valid JSON

            # Extract required fields
            bucket = message_data.get('bucket')
            key = message_data.get('key')
            extracted_text = message_data.get('text')

            # Validate message structure (optional)
            if not all([bucket, key, extracted_text]):
                raise ValueError("Missing required fields in message body")


            # Prepare CSV data
            csv_buffer = StringIO()
            csv_writer = csv.writer(csv_buffer)
            csv_writer.writerow(['Extracted Text'])

            # Extract and filter text lines with confidence scores
            extracted_text_lines = extracted_text.splitlines()
            filtered_text = []
            for line in extracted_text_lines:
                text, confidence = line.split(' (Confidence: ', 1)
                confidence = float(confidence.rstrip(')'))
                if confidence >= 70:
                    filtered_text.append(f"{text.rstrip()} ({confidence:.2f})")

            # Join the filtered text lines into a single string
            final_text = '\n'.join(filtered_text)

            print('final_text::', final_text)

            # Write the final text to CSV
            csv_writer.writerow([final_text])


            # # Extract and filter text lines with confidence scores
            # extracted_text_lines = extracted_text.splitlines()
            # filtered_text = []
            # text_without_confidence = []
            # for line in extracted_text_lines:
            #     text, confidence = line.split(' (Confidence: ', 1)
            #     confidence = float(confidence.rstrip(')'))
            #     if confidence >= 70:
            #         filtered_text.append(f"{text.rstrip()} ({confidence:.2f})")
            #         text_without_confidence.append(text.rstrip())  # Extract only text

            # # Join the filtered text lines into a single string
            # final_text = '\n'.join(filtered_text)

            # # Write the final text to CSV, including extracted text without confidence
            # csv_writer.writerow([bucket, key, final_text, ', '.join(text_without_confidence)])


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

        # Return a success response
        return {
            'statusCode': 200,
            'body': 'CSV files created and saved to S3'
        }
    
    except Exception as e:
        print(f"Error processing the SQS message: {str(e)}")
        return {
            'statusCode': 500,
            'body': f"Error processing file: {str(e)}"
        }
