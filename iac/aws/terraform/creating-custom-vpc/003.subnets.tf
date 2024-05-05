resource "aws_subnet" "private-us-east-1a" {
  vpc_id     = aws_vpc.mycustomvpc.id
  cidr_block = "10.0.1.0/24"
  availability_zone = "us-east-1a"
  
  tags = {
    "subnet" = "private-us-east-1a"
    "Name" = "Private Subnet"
  }
}

resource "aws_subnet" "private-us-east-1b" {
  vpc_id     = aws_vpc.mycustomvpc.id
  cidr_block = "10.0.2.0/24"
  availability_zone = "us-east-1b"

  tags = {
    "subnet" = "private-us-east-1b"
    "Name" = "Private Subnet"
  }
}

resource "aws_subnet" "public-us-east-1a" {
  vpc_id     = aws_vpc.mycustomvpc.id
  cidr_block = "10.0.3.0/24"
  availability_zone = "us-east-1a"
  map_public_ip_on_launch = true

  tags = {
    "subnet" = "public-us-east-1a"
    "Name" = "Public Subnet"
  }
}

resource "aws_subnet" "public-us-east-1b" {
  vpc_id     = aws_vpc.mycustomvpc.id
  cidr_block = "10.0.4.0/24"
  availability_zone = "us-east-1b"
  map_public_ip_on_launch = true

  tags = {
    "subnet" = "public-us-east-1b"
    "Name" = "Public Subnet"
  }
}