resource "aws_internet_gateway" "igw" { 
    vpc_id = aws_vpc.mycustomvpc.id
    tags = {
        "owner" = "vinod"
        "Name" = "IGW"
    }
}