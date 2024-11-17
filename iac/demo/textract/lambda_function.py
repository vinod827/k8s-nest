import boto3
import json
import os

s3_client = boto3.client('s3')
textract_client = boto3.client('textract')
sns_client = boto3.client('sns')

SNS_TOPIC_ARN = os.environ['SNS_TOPIC_ARN']  # Environment variable for SNS topic ARN

SUPPORTED_EXTENSIONS = ['.png', '.jpg', '.jpeg', '.pdf']  # Add more formats if necessary

def lambda_handler(event, context):
    try:
        print(f"Event: {json.dumps(event)}")

        # Get S3 bucket and object key from the S3 event
        bucket_name = event['Records'][0]['s3']['bucket']['name']
        object_key = event['Records'][0]['s3']['object']['key']

        print('bucket_name::', bucket_name, ' - object_key::', object_key)

        # Validate file extension
        if not any(object_key.lower().endswith(ext) for ext in SUPPORTED_EXTENSIONS):
            raise ValueError(f"Unsupported file extension for file: {object_key}")

        # Call Textract to extract text
        response = textract_client.detect_document_text(
            Document={'S3Object': {'Bucket': bucket_name, 'Name': object_key}}
        )

        print('response::', response)

        # Extract text blocks
        text_blocks = [block['Text'] for block in response['Blocks'] if block['BlockType'] == 'LINE']
        extracted_text = '\n'.join(text_blocks)

        # Send extracted text to SNS
        sns_client.publish(
            TopicArn=SNS_TOPIC_ARN,
            Message=json.dumps({
                'bucket': bucket_name,
                'key': object_key,
                'text': extracted_text
            }),
            Subject='Textract Extracted Text'
        )

        return {
            'statusCode': 200,
            'body': json.dumps('Text extracted and sent to SNS')
        }

    except textract_client.exceptions.UnsupportedDocumentException as e:
        print(f"Unsupported document format: {e}")
        return {
            'statusCode': 400,
            'body': json.dumps('Unsupported document format')
        }
    except Exception as e:
        print(f"Error processing file: {e}")
        return {
            'statusCode': 500,
            'body': json.dumps(f"Error processing file: {str(e)}")
        }
