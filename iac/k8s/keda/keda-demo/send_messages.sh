#!/bin/bash

# Set your AWS profile name
AWS_PROFILE="myaws"

# Set your SQS queue URL
SQS_QUEUE_URL="https://sqs.us-east-1.amazonaws.com/458419607076/MySQSQueue-ForKEDA-Demo"

# Set the number of messages to push
NUM_MESSAGES=50

# Loop to send messages
for ((i=1; i<=$NUM_MESSAGES; i++)); do
    MESSAGE_BODY="Message $i"
    aws sqs send-message \
        --queue-url "$SQS_QUEUE_URL" \
        --message-body "$MESSAGE_BODY" \
        --profile "$AWS_PROFILE" \
        > /dev/null 2>&1  # Suppress output
    echo "Sent message $i"
done

echo "All messages sent"
