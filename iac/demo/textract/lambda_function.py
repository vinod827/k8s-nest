import boto3
import json
import os

s3_client = boto3.client('s3')
textract_client = boto3.client('textract')
sns_client = boto3.client('sns')

SNS_TOPIC_ARN = os.environ['SNS_TOPIC_ARN']  # Environment variable for SNS topic ARN

SUPPORTED_IMAGE_EXTENSIONS = ['.png', '.jpg', '.jpeg']
SUPPORTED_PDF_EXTENSION = '.pdf'

def lambda_handler(event, context):
    try:
        print(f"Event: {json.dumps(event)}")

        # Get S3 bucket and object key from the S3 event
        bucket_name = event['Records'][0]['s3']['bucket']['name']
        object_key = event['Records'][0]['s3']['object']['key']

        print('bucket_name::', bucket_name, ' - object_key::', object_key)

        # Validate file extension
        if any(object_key.lower().endswith(ext) for ext in SUPPORTED_IMAGE_EXTENSIONS):
            # Process image files
            response = textract_client.detect_document_text(
                Document={'S3Object': {'Bucket': bucket_name, 'Name': object_key}}
            )

            print('Textract detect_document_text response::', response)

            # Extract text blocks
            # text_blocks = [block['Text'] for block in response['Blocks'] if block['BlockType'] == 'LINE']
            # extracted_text = '\n'.join(text_blocks)
            # print('extracted_text::', extracted_text)


            # Extract text blocks with confidence scores
            text_blocks_with_confidence = []
            for block in response['Blocks']:
                if block['BlockType'] == 'LINE':
                    text_blocks_with_confidence.append((block['Text'], block['Confidence']))


            # Format the extracted text with confidence scores
            extracted_text_with_confidence = '\n'.join([f"{text} (Confidence: {confidence:.2f})" for text, confidence in text_blocks_with_confidence])
            print('extracted_text_with_confidence::', extracted_text_with_confidence)


            # Send extracted text to SNS
            sns_client.publish(
                TopicArn=SNS_TOPIC_ARN,
                Message=json.dumps({
                    'bucket': bucket_name,
                    'key': object_key,
                    'text': extracted_text_with_confidence
                }),
                Subject='Textract Extracted Text from Image'
            )

        elif object_key.lower().endswith(SUPPORTED_PDF_EXTENSION):
            # Process PDF files
            try:
                response = textract_client.analyze_document(
                    Document={'S3Object': {'Bucket': bucket_name, 'Name': object_key}},
                    FeatureTypes=['QUERIES'],
                    QueriesConfig={
                        'Queries': [
                            {'Text': 'What is the event name?', 'Alias': 'EventName'},
                            {'Text': 'What is the Location?', 'Alias': 'Location'}
                        ]
                    }
                )

                print('Textract analyze_document response::', response)

                # # Extract key-value pairs from QUERY_RESULT blocks
                # query_results = {
                #     block['QueryResult']['Alias']: block['Text']
                #     for block in response['Blocks']
                #     if block['BlockType'] == 'QUERY_RESULT'
                # }

                
                query_results = {}
                for block in response['Blocks']:
                    if block['BlockType'] == 'QUERY_RESULT':
                        for relationship in block['Relationships']:
                            if relationship['Type'] == 'ANSWER':
                                query_id = relationship['Ids'][0]
                                for query_block in response['Blocks']:
                                    if query_block['Id'] == query_id:
                                        query_alias = query_block['Query']['Alias']
                                        query_results[query_alias] = {
                                            'Text': block['Text'],
                                            'Confidence': block['Confidence']
                                        }

                print('query_results::', query_results)


                # Send key-value pairs to SNS
                sns_client.publish(
                    TopicArn=SNS_TOPIC_ARN,
                    Message=json.dumps({
                        'bucket': bucket_name,
                        'key': object_key,
                        'key_value_pairs': query_results
                    }),
                    Subject='Textract Extracted Key-Value Pairs from PDF'
                )

            except Exception as e:
                print(f"Error processing file: {e}")

        else:
            raise ValueError(f"Unsupported file extension for file: {object_key}")

        return {
            'statusCode': 200,
            'body': json.dumps('File processed successfully and data sent to SNS')
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