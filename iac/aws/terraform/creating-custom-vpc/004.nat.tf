
resource "aws_eip" "nat" {
  vpc = true

  tags = {
    "Name" = "EIP"
    "Owner" = "Vinod"
  }
  
}

resource "aws_nat_gateway" "nat" {
  allocation_id = aws_eip.nat.id
  subnet_id     = aws_subnet.public-us-east-1a.id

  tags = {
    "Name" = "NAT Gateway"
    "Owner" = "Vinod"
  }

  # To ensure proper ordering, it is recommended to add an explicit dependency
  # on the Internet Gateway for the VPC.
  depends_on = [aws_internet_gateway.igw]
}