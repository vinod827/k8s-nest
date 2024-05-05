resource "aws_route_table" "privateroute" {
  vpc_id = aws_vpc.mycustomvpc.id

  route {
    cidr_block = "0.0.0.0/0"
    nat_gateway_id = aws_nat_gateway.nat.id
  }

  tags = {
    Name = "private"
  }
}

resource "aws_route_table" "publicroute" {
  vpc_id = aws_vpc.mycustomvpc.id

  route {
    cidr_block = "0.0.0.0/0"
    gateway_id = aws_internet_gateway.igw.id
  }

  tags = {
    Name = "public"
  }
}

resource "aws_route_table_association" "privateassociation_a" {
  subnet_id      = aws_subnet.private-us-east-1a.id
  route_table_id = aws_route_table.privateroute.id
}
resource "aws_route_table_association" "privateassociation_b" {
  subnet_id      = aws_subnet.private-us-east-1b.id
  route_table_id = aws_route_table.privateroute.id
}
resource "aws_route_table_association" "publicassociation_a" {
  subnet_id      = aws_subnet.public-us-east-1a.id
  route_table_id = aws_route_table.publicroute.id
}
resource "aws_route_table_association" "publicassociation_b" {
  subnet_id      = aws_subnet.public-us-east-1b.id
  route_table_id = aws_route_table.publicroute.id
}