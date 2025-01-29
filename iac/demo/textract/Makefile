# Python Lambda files
LAMBDA1_FILE = lambda_function.py
LAMBDA2_FILE = sqs_to_csv_lambda.py

# Output zip files
LAMBDA1_ZIP = lambda_function.zip
LAMBDA2_ZIP = sqs_to_csv_lambda.zip

# Default target
all: zip-lambdas

# Zip the Lambda functions
zip-lambdas: $(LAMBDA1_ZIP) $(LAMBDA2_ZIP)

$(LAMBDA1_ZIP): $(LAMBDA1_FILE)
	@echo "Zipping $(LAMBDA1_FILE) into $(LAMBDA1_ZIP)..."
	zip $(LAMBDA1_ZIP) $(LAMBDA1_FILE)

$(LAMBDA2_ZIP): $(LAMBDA2_FILE)
	@echo "Zipping $(LAMBDA2_FILE) into $(LAMBDA2_ZIP)..."
	zip $(LAMBDA2_ZIP) $(LAMBDA2_FILE)

# Clean the zip files
clean:
	rm -f $(LAMBDA1_ZIP) $(LAMBDA2_ZIP)
	@echo "Cleaned up old zip files!"

