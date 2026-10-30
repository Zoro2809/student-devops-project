
variable "project_name" {
  description = "Project name"
  type        = string
  default     = "studentos"
}

variable "aws_region" {
  description = "AWS Mumbai region"
  type        = string
  default     = "ap-south-1"
}

variable "instance_type" {
  description = "EC2 instance type"
  type        = string
  default     = "t3.micro"
}

variable "allowed_ssh_cidr" {
  description = "Your public IP in CIDR format for SSH access"
  type        = string
}
