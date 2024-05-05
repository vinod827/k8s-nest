resource "aws_vpc" "mycustomvpc" {
    cidr_block = "10.0.0.0/16"
    enable_dns_support = true
    enable_dns_hostnames = true

    tags = {
        "owner" = "vinod"
        "Name" = "my custom VPC"
    }
}