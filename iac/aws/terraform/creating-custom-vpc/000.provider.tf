variable aws_region {
    default = "us-east-1"
    description = "AWS region where the resources will be provisioned"
}

# Configure the AWS Provider
terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
    # helm = {
    #     source = "hashicorp/aws"
    #     version = "~> 2.6"
    # }
  }
}

# Configure region and profile
provider "aws" {
  region = var.aws_region
  profile = "myaws"
}