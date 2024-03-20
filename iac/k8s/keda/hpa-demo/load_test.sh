#!/bin/bash

# Variables
URL="http://a97793fc7ae0048b997070a54aa2d099-2026190512.us-east-1.elb.amazonaws.com/"
DURATION=60  # Duration of load test in seconds
CONCURRENCY=50  # Number of concurrent requests

# Start load test
ab -n $((DURATION * CONCURRENCY)) -c $CONCURRENCY $URL
