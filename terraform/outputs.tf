output "instance_id" {
  description = "EC2 instance ID"
  value       = aws_instance.studentos.id
}

output "public_ip" {
  description = "EC2 instance public IP"
  value       = aws_instance.studentos.public_ip
}

output "vpc_id" {
  description = "VPC ID"
  value       = aws_vpc.main.id
}

output "subnet_id" {
  description = "Public subnet ID"
  value       = aws_subnet.public.id
}

output "aws_region" {
  description = "AWS region"
  value       = var.aws_region
}