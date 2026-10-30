# StudentOS – DevOps Automation Project
## Jenkins CI/CD Pipeline with Docker and Infrastructure as Code using Terraform on AWS

**Project Repository:** https://github.com/Zoro2809/student-devops-project

---

# Table of Contents

1. Project Overview
2. Project Objectives
3. Technologies and Tools Used
4. Repository Structure
5. Practical 1 – Jenkins CI/CD Pipeline with Docker
   - Introduction
   - Objectives
   - Application Structure
   - Jenkins Installation and Setup
   - Jenkins Configuration
   - GitHub Integration
   - Jenkins Pipeline Configuration
   - Jenkinsfile Implementation
   - Pipeline Stages
   - Docker Implementation
   - Automatic Build Triggering
   - Pipeline Execution and Verification
   - Results
6. Practical 2 – Infrastructure as Code Using Terraform and AWS
   - Introduction
   - Objectives
   - Terraform Installation
   - AWS CLI Installation and Configuration
   - AWS Authentication
   - Terraform Project Structure
   - Terraform Configuration Files
   - Terraform Initialization
   - Formatting and Validation
   - Terraform Plan
   - Infrastructure Deployment
   - AWS Resource Verification
   - Infrastructure Destruction
   - Results
7. Project Architecture
8. GitHub Version Control
9. Security and Best Practices
10. Troubleshooting
11. Final Outcome
12. Conclusion
13. References

---

# 1. Project Overview

This project demonstrates the implementation of two important DevOps practices: Continuous Integration and Continuous Delivery (CI/CD), and Infrastructure as Code (IaC).

The project uses a Flask-based StudentOS web application and integrates multiple DevOps tools to automate application testing, containerization, and infrastructure provisioning.

The first practical implements a Jenkins CI/CD pipeline integrated with GitHub and Docker. Jenkins automatically retrieves the application source code, verifies the Python environment, executes unit tests, and builds a Docker image.

The second practical implements Infrastructure as Code using Terraform and Amazon Web Services (AWS). Terraform is used to define and provision cloud infrastructure, including an EC2 instance, VPC, public subnet, Internet Gateway, route table, route table association, and security group.

Both practicals are maintained in a single GitHub repository with separate configuration directories and execution evidence.

## 1.1 Project Scope

The project consists of two independent practical implementations:

**Practical 1: Jenkins CI/CD with Docker**

- Source code management using GitHub.
- Jenkins installation and configuration.
- Jenkins pipeline creation.
- Automated source code checkout.
- Python environment verification.
- Automated unit testing.
- Docker image building.
- Automatic build triggering using Poll SCM.

**Practical 2: Terraform Infrastructure as Code**

- Terraform installation and configuration.
- AWS CLI installation and configuration.
- AWS authentication.
- Infrastructure definition using Terraform.
- AWS networking configuration.
- EC2 instance provisioning.
- Infrastructure validation and planning.
- Infrastructure deployment.
- Infrastructure cleanup using Terraform Destroy.

---

# 2. Project Objectives

The main objectives are:

- Understand the fundamentals of DevOps and automation.
- Implement a CI/CD workflow using Jenkins.
- Integrate GitHub with Jenkins.
- Automate application testing and Docker image building.
- Understand Docker containerization.
- Learn Infrastructure as Code concepts.
- Configure AWS infrastructure using Terraform.
- Provision cloud resources through declarative configuration files.
- Understand Terraform initialization, validation, planning, application, and destruction.
- Maintain project files using Git and GitHub.
- Follow security practices for credentials and infrastructure state management.

---

# 3. Technologies and Tools Used

| Technology | Purpose |
|---|---|
| Python | Application programming language |
| Flask | Web application framework |
| Pytest | Unit testing framework |
| Git | Version control |
| GitHub | Source code hosting |
| Jenkins | CI/CD automation |
| Java 21 | Jenkins runtime environment |
| Docker | Application containerization |
| Terraform | Infrastructure as Code |
| AWS EC2 | Virtual machine provisioning |
| AWS VPC | Virtual private cloud networking |
| AWS Subnet | Network segmentation |
| AWS Internet Gateway | Internet connectivity |
| AWS Security Groups | Network access control |
| AWS CLI | AWS command-line management |
| Ubuntu 22.04 LTS | EC2 operating system |
| PowerShell | Command-line interface |
| Visual Studio Code | Code editor |

---

# PRACTICAL 1: JENKINS CI/CD PIPELINE WITH DOCKER

# 4. Introduction to Jenkins CI/CD

Continuous Integration and Continuous Delivery are software development practices that automate the process of integrating, testing, and preparing application code for delivery.

Jenkins is an open-source automation server that helps developers create and execute automated pipelines.

A Jenkins pipeline defines a sequence of stages that execute specific tasks during the software development process.

In this practical, Jenkins is configured to automate the CI workflow of a Flask-based StudentOS application.

The pipeline retrieves source code from GitHub, verifies the Python environment, executes unit tests, and builds a Docker image.

## 4.1 Objectives

- Install and configure Jenkins.
- Configure Java as the Jenkins runtime.
- Create a Jenkins pipeline job.
- Connect Jenkins to GitHub.
- Configure Pipeline Script from SCM.
- Define pipeline stages using a Jenkinsfile.
- Execute automated unit tests.
- Build a Docker image.
- Configure Poll SCM for automatic build triggering.
- Verify pipeline execution through the Jenkins dashboard.

## 4.2 Application Description

StudentOS is a Python Flask-based web application used to demonstrate the CI/CD workflow.

The application source code is maintained in the GitHub repository.

The project contains application code, test cases, Docker configuration, dependency definitions, and Jenkins pipeline configuration.

## 4.3 Application Directory Structure

```text
student-devops-project/
│
├── app/
│   └── app.py
│
├── tests/
│   └── test_app.py
│
├── Dockerfile
├── Jenkinsfile
├── requirements.txt
├── .dockerignore
├── .gitignore
└── README.md
```

### Description of Application Files

**app/app.py**

Contains the main Flask application and its routes.

**tests/test_app.py**

Contains automated test cases used to verify application functionality.

**requirements.txt**

Contains the Python dependencies required by the application.

The Flask dependency used in the project is:

```text
Flask==3.1.3
```

**Dockerfile**

Contains the instructions required to create a Docker image for the Flask application.

**Jenkinsfile**

Defines the Jenkins pipeline and the stages executed during the CI process.

**.dockerignore**

Specifies files and directories that should be excluded from the Docker build context.

**.gitignore**

Prevents unnecessary and sensitive files from being committed to GitHub.

---

# 5. Jenkins Installation and Setup

## 5.1 Java Installation

Jenkins requires Java to run.

Java 21 was installed and configured as the runtime environment.

The Java installation was verified using:

```powershell
java -version
```

The command displays the installed Java version.

## 5.2 Jenkins Installation

Jenkins was installed on the Windows development environment.

After installation, the Jenkins service was started.

The Jenkins web interface was accessed through the local browser.

The default local Jenkins address is:

```text
http://localhost:8080
```

The initial Jenkins setup process includes:

1. Starting the Jenkins service.
2. Opening the Jenkins web interface.
3. Unlocking Jenkins using the initial administrator password.
4. Installing the recommended plugins.
5. Creating the administrator account.
6. Completing the initial configuration.
7. Accessing the Jenkins dashboard.

## 5.3 Jenkins Dashboard

The Jenkins dashboard provides access to:

- Pipeline jobs.
- Build history.
- Build execution status.
- Console output.
- Pipeline configuration.
- Plugin management.
- Jenkins system settings.

The dashboard was used to create and manage the StudentOS CI/CD pipeline.

---

# 6. GitHub Integration with Jenkins

The application source code is maintained in GitHub.

**Repository:**

https://github.com/Zoro2809/student-devops-project

Jenkins was configured to retrieve the application source code directly from this repository.

## 6.1 Creating a Jenkins Pipeline Job

A new Jenkins job was created with the following configuration:

| Parameter | Configuration |
|---|---|
| Job Name | StudentOS-CI-CD |
| Job Type | Pipeline |
| Pipeline Definition | Pipeline script from SCM |
| Source Control | Git |
| Repository URL | https://github.com/Zoro2809/student-devops-project |
| Branch | */master |
| Script Path | Jenkinsfile |

## 6.2 Pipeline Script from SCM

The Pipeline script from SCM option allows Jenkins to retrieve the pipeline definition directly from the source code repository.

The following configuration was used:

1. Open the Jenkins dashboard.
2. Select New Item.
3. Enter the job name StudentOS-CI-CD.
4. Select Pipeline.
5. Open the job configuration.
6. Navigate to the Pipeline section.
7. Select Pipeline script from SCM.
8. Select Git as the source control system.
9. Enter the GitHub repository URL.
10. Specify the branch as `*/master`.
11. Set the script path to `Jenkinsfile`.
12. Save the configuration.

Jenkins then uses the Jenkinsfile stored in the repository to execute the pipeline.

---

# 7. Jenkinsfile Implementation

The Jenkinsfile defines the complete pipeline workflow.

It describes the stages and commands Jenkins executes during a build.

The pipeline implemented for StudentOS contains the following stages:

1. Checkout
2. Verify Python
3. Run Tests
4. Build Docker Image

## 7.1 Stage 1 – Checkout

The Checkout stage retrieves the latest source code from GitHub.

Purpose:

- Connect to the configured Git repository.
- Retrieve the selected branch.
- Download the application source code.
- Make the source code available to subsequent pipeline stages.

This ensures that the pipeline operates on the repository version being built.

## 7.2 Stage 2 – Verify Python

This stage checks the availability of Python in the Jenkins execution environment.

The environment verification helps ensure that the required runtime is available before executing application tests.

## 7.3 Stage 3 – Run Tests

This stage installs the application dependencies and executes automated unit tests.

The project uses Pytest for testing.

The following command is used to execute the test suite:

```powershell
python -m pytest -v
```

The test execution completed successfully.

**Test Result: 3 out of 3 tests passed.**

Automated testing helps identify application issues before creating the Docker image.

## 7.4 Stage 4 – Build Docker Image

The final pipeline stage builds a Docker image using the application's Dockerfile.

The image is created with the following name and tag:

```text
studentos:1.0
```

Docker packages the application and its required dependencies into a container image.

This image can subsequently be used to run the application in a Docker container.

---

# 8. Docker Implementation

## 8.1 Introduction to Docker

Docker is a containerization platform that allows applications to be packaged with their dependencies into portable containers.

Containers provide a consistent environment for running applications across different systems.

In this project, Docker is used to package the Flask-based StudentOS application.

## 8.2 Dockerfile Configuration

The Dockerfile defines the steps required to create the application image.

The project uses Python 3.11 slim as the base image.

The Docker build process includes:

1. Selecting the Python base image.
2. Setting the application working directory.
3. Copying dependency files.
4. Installing Python dependencies.
5. Copying application source code.
6. Defining the application startup command.

## 8.3 Building the Docker Image

The Docker image was built using:

```powershell
docker build -t studentos:1.0 .
```

Explanation:

- `docker build` creates a Docker image.
- `-t` assigns a name and tag.
- `studentos` is the image name.
- `1.0` is the image tag.
- `.` specifies the current directory as the build context.

## 8.4 Verifying the Docker Image

The following command displays the locally available Docker images:

```powershell
docker images
```

The generated image can be identified using:

```text
studentos:1.0
```

## 8.5 Running the Docker Container

The application container can be started using:

```powershell
docker run -d -p 5000:5000 --name student-app studentos:1.0
```

Explanation:

- `docker run` creates and starts a container.
- `-d` runs the container in detached mode.
- `-p 5000:5000` maps the host port to the container port.
- `--name student-app` assigns a container name.
- `studentos:1.0` specifies the image.

## 8.6 Verifying the Container

The following command displays running containers:

```powershell
docker ps
```

The application can be accessed locally through:

```text
http://localhost:5000
```

**Implementation note:** Jenkins automated the Docker image build. The container was started separately through a Docker command. An automated Jenkins deployment stage was not implemented.

---

# 9. Automatic Build Triggering Using Poll SCM

Poll SCM is a Jenkins feature that periodically checks a source code repository for changes.

In this practical, Poll SCM was configured to monitor the GitHub repository.

The configured schedule was:

```text
H/5 * * * *
```

This configuration instructs Jenkins to check for repository changes approximately every five minutes, using Jenkins' hashed scheduling.

## 9.1 Configuration Steps

1. Open the Jenkins dashboard.
2. Select the StudentOS-CI-CD job.
3. Open Configure.
4. Navigate to Build Triggers.
5. Enable Poll SCM.
6. Enter the schedule:

```text
H/5 * * * *
```

7. Save the configuration.

When Jenkins detects a new repository change, it can automatically trigger a pipeline execution.

## 9.2 Advantages of Poll SCM

- Reduces manual build triggering.
- Periodically checks repository changes.
- Helps automate continuous integration.
- Ensures that new source code changes can initiate pipeline execution.

---

# 10. Jenkins Pipeline Execution and Verification

After configuring the pipeline, Jenkins was used to execute the StudentOS CI workflow.

The following activities were verified:

- Successful GitHub checkout.
- Python environment verification.
- Successful unit test execution.
- Successful Docker image build.
- Automatic triggering through Poll SCM.

The Jenkins console output was used to inspect the execution logs and identify the status of each stage.

## 10.1 Jenkins Practical Result

The Jenkins CI/CD practical successfully demonstrated the automation of source code retrieval, environment verification, testing, and Docker image creation.

The application test suite completed with all three tests passing, and the Docker image was successfully built.

---

# 11. Jenkins Execution Evidence

The Jenkins screenshots and execution evidence are maintained separately in the repository.

**Evidence directory:**

```text
screenshots/Jenkins/
```

This directory contains the Jenkins setup, job configuration, pipeline execution, test results, Docker build output, and automatic triggering evidence.

The screenshots provide visual proof of the implementation and execution of the Jenkins practical.

---

# PRACTICAL 2: INFRASTRUCTURE AS CODE USING TERRAFORM AND AWS

# 12. Introduction to Infrastructure as Code

Infrastructure as Code is a method of managing and provisioning infrastructure through configuration files instead of manually creating and configuring resources.

Terraform is an Infrastructure as Code tool developed by HashiCorp.

Terraform uses declarative configuration files to describe the desired infrastructure.

It compares the configuration with the current infrastructure state and determines which resources need to be created, modified, or destroyed.

In this practical, Terraform is used to provision AWS infrastructure in the Mumbai region.

## 12.1 Objectives

- Understand Infrastructure as Code concepts.
- Install Terraform.
- Install and configure AWS CLI.
- Configure AWS authentication.
- Define AWS resources through Terraform.
- Create VPC and networking components.
- Provision an EC2 instance.
- Validate Terraform configuration.
- Generate an execution plan.
- Apply infrastructure configuration.
- Verify AWS resources.
- Destroy infrastructure after practical completion.

---

# 13. AWS Environment Configuration

The practical uses Amazon Web Services as the cloud infrastructure provider.

The AWS Mumbai region was selected for resource provisioning.

## 13.1 AWS Configuration Details

| Parameter | Configuration |
|---|---|
| Cloud Provider | Amazon Web Services |
| Region | ap-south-1 |
| Region Name | Asia Pacific (Mumbai) |
| Operating System | Ubuntu 22.04 LTS |
| EC2 Instance Type | t3.micro |
| Project Name | studentos |
| VPC CIDR | 10.0.0.0/16 |
| Public Subnet CIDR | 10.0.1.0/24 |

## 13.2 Infrastructure Resources

The Terraform configuration provisions the following seven AWS resources:

1. VPC
2. Public Subnet
3. Internet Gateway
4. Route Table
5. Route Table Association
6. Security Group
7. EC2 Instance

AWS Availability Zones and the Ubuntu AMI are retrieved through Terraform data sources.

---

# 14. Terraform Installation and Setup

Terraform was installed on the Windows development environment.

The installed version was:

```text
Terraform v1.15.4
```

## 14.1 Verifying Terraform Installation

The installation was verified using:

```powershell
terraform version
```

This command displays the installed Terraform version and platform information.

Terraform was then made available through the system PATH so it could be executed from PowerShell and the VS Code terminal.

---

# 15. AWS CLI Installation and Configuration

AWS CLI is a command-line tool used to interact with Amazon Web Services.

It allows users to configure authentication and execute AWS-related commands from the terminal.

AWS CLI was installed on the Windows environment.

The installation was verified using:

```powershell
aws --version
```

## 15.1 AWS Credentials Configuration

AWS credentials were configured locally using:

```powershell
aws configure
```

The command requests:

- AWS Access Key ID
- AWS Secret Access Key
- Default AWS Region
- Default Output Format

The selected region was:

```text
ap-south-1
```

The output format was configured as:

```text
json
```

AWS credentials were maintained locally and were not added to the GitHub repository.

## 15.2 AWS Authentication Verification

The configured AWS identity was verified using:

```powershell
aws sts get-caller-identity
```

This command returns information about the AWS identity associated with the configured credentials.

It helps confirm that AWS authentication is working correctly.

---

# 16. Terraform Project Structure

The Terraform configuration files are maintained inside the `terraform` directory.

```text
terraform/
│
├── main.tf
├── networking.tf
├── outputs.tf
├── provider.tf
├── variables.tf
├── versions.tf
└── .terraform.lock.hcl
```

Each file is responsible for a separate part of the infrastructure configuration.

Separating the configuration into multiple files improves readability, organization, and maintainability.

---

# 17. Terraform Configuration Files – Detailed Explanation

## 17.1 versions.tf

The versions.tf file defines the Terraform version requirement and the required provider.

The AWS provider is obtained from the Terraform Registry.

Provider source:

```text
hashicorp/aws
```

Version constraint:

```text
~> 6.0
```

This ensures that Terraform uses a compatible AWS provider version.

## 17.2 provider.tf

The provider.tf file configures the AWS provider.

The region is obtained through the Terraform variable `aws_region`.

The configuration is:

```hcl
provider "aws" {
  region = var.aws_region
}
```

This allows the AWS region to be configured without hardcoding it throughout the resource definitions.

## 17.3 variables.tf

The variables.tf file defines reusable input variables.

The project uses the following variables:

| Variable | Purpose | Default |
|---|---|---|
| project_name | Project identification | studentos |
| aws_region | AWS deployment region | ap-south-1 |
| instance_type | EC2 instance type | t3.micro |
| allowed_ssh_cidr | SSH access CIDR | Supplied locally |

The `allowed_ssh_cidr` variable is provided through a local Terraform variable file.

The local `terraform.tfvars` file is excluded from GitHub because it contains the configured public IP CIDR.

## 17.4 main.tf

The main.tf file defines the EC2 instance and the data sources required by the infrastructure.

### AWS Availability Zones Data Source

Terraform retrieves the available AWS Availability Zones dynamically.

This avoids hardcoding the Availability Zone.

### Ubuntu AMI Data Source

Terraform retrieves the latest matching Ubuntu 22.04 LTS AMI using:

- Canonical as the AMI owner.
- Ubuntu Jammy 22.04 image naming pattern.
- HVM virtualization type.

### EC2 Instance Resource

The EC2 instance is configured with:

- Dynamically retrieved Ubuntu AMI.
- Configured instance type.
- Public subnet.
- Configured security group.
- Public IP association.
- Resource tags.

The instance is tagged using the project name.

The resulting EC2 instance name is:

```text
studentos-server
```

## 17.5 networking.tf

The networking.tf file defines the AWS network infrastructure.

### A. Virtual Private Cloud (VPC)

A VPC provides a logically isolated virtual network within AWS.

The configured VPC CIDR is:

```text
10.0.0.0/16
```

DNS support and DNS hostnames are enabled.

### B. Public Subnet

A public subnet is created inside the VPC.

Configured subnet CIDR:

```text
10.0.1.0/24
```

The subnet uses the first available Availability Zone returned by the data source.

Public IP assignment on launch is enabled.

### C. Internet Gateway

An Internet Gateway is attached to the VPC.

It allows resources with suitable routing and security configuration to communicate with the internet.

### D. Route Table

A public route table is created.

It contains a default route:

```text
0.0.0.0/0
```

The route directs external traffic through the Internet Gateway.

### E. Route Table Association

The public subnet is associated with the public route table.

This association allows resources in the subnet to use the configured public route.

### F. Security Group

A security group controls inbound and outbound network traffic for the EC2 instance.

The following inbound rules are configured:

| Protocol | Port | Source | Purpose |
|---|---|---|---|
| TCP | 22 | Configured personal IP CIDR | SSH access |
| TCP | 80 | 0.0.0.0/0 | HTTP access |

Outbound traffic is allowed.

Restricting SSH access to a specific IP CIDR helps reduce unnecessary external access.

## 17.6 outputs.tf

The outputs.tf file defines the values Terraform displays after successful infrastructure creation.

The project defines the following outputs:

- EC2 Instance ID.
- EC2 Public IP.
- VPC ID.
- Public Subnet ID.
- AWS Region.

Outputs make important infrastructure information available after deployment.

## 17.7 .terraform.lock.hcl

The `.terraform.lock.hcl` file is automatically maintained by Terraform.

It records:

- Selected provider version.
- Provider source.
- Provider checksums.

This helps ensure consistent provider installation across different Terraform executions.

The lock file is committed to GitHub, while the local Terraform working directory is excluded.

---

# 18. Terraform Initialization

Terraform initialization prepares the working directory for infrastructure operations.

The command used was:

```powershell
terraform init
```

During initialization, Terraform:

1. Reads the Terraform configuration.
2. Identifies the required providers.
3. Downloads the AWS provider.
4. Creates the local `.terraform` working directory.
5. Generates or updates the provider lock file.

After successful initialization, Terraform is ready for validation and planning.

---

# 19. Terraform Formatting

Terraform configuration files were formatted using:

```powershell
terraform fmt
```

This command automatically formats Terraform files according to standard formatting conventions.

Benefits:

- Consistent indentation.
- Improved readability.
- Standardized configuration formatting.
- Easier maintenance.

---

# 20. Terraform Validation

Terraform configuration was checked using:

```powershell
terraform validate
```

The validation process checks the configuration for syntax errors and internal consistency.

Successful validation indicates that Terraform can interpret the configuration correctly.

It does not independently guarantee that AWS will permit every resource operation; provider authentication, permissions, and cloud-side constraints must also be satisfied.

---

# 21. Terraform Plan

Before provisioning infrastructure, Terraform was used to generate an execution plan.

Command:

```powershell
terraform plan
```

The plan command compares the Terraform configuration with the current state and determines which resources need to be created, modified, or destroyed.

The execution plan showed:

```text
Plan: 7 to add, 0 to change, 0 to destroy.
```

### Resources Planned for Creation

| Resource | Description |
|---|---|
| aws_vpc.main | Creates the VPC |
| aws_subnet.public | Creates the public subnet |
| aws_internet_gateway.main | Creates the Internet Gateway |
| aws_route_table.public | Creates the public route table |
| aws_route_table_association.public | Associates the subnet with the route table |
| aws_security_group.web | Creates the security group |
| aws_instance.studentos | Creates the EC2 instance |

The plan was reviewed before applying the configuration.

---

# 22. Terraform Apply – Infrastructure Deployment

Terraform Apply is used to create or modify infrastructure based on the Terraform configuration.

Command:

```powershell
terraform apply
```

Terraform displays the execution plan and asks for confirmation before proceeding.

After reviewing the plan, the operation was confirmed.

Terraform then provisioned the AWS infrastructure.

The deployment successfully created all seven planned AWS resources.

### Infrastructure Created

- VPC.
- Public subnet.
- Internet Gateway.
- Route table.
- Route table association.
- Security group.
- EC2 instance.

The EC2 instance was configured using Ubuntu 22.04 LTS and the t3.micro instance type.

---

# 23. AWS Infrastructure Verification

After Terraform Apply completed successfully, the AWS Management Console was used to verify the deployed resources.

## 23.1 EC2 Instance Verification

The Amazon EC2 dashboard was opened.

The EC2 instance was located using its configured name:

```text
studentos-server
```

The instance status was verified as:

```text
Running
```

The instance details were checked to confirm that the EC2 resource had been provisioned successfully.

## 23.2 Networking Verification

The AWS VPC dashboard was used to inspect the networking resources.

The following components were configured:

- VPC.
- Public subnet.
- Internet Gateway.
- Route table.
- Route table association.
- Security group.

These resources form the network infrastructure required by the EC2 instance.

---

# 24. Terraform Destroy – Infrastructure Cleanup

After verifying the infrastructure, all Terraform-managed AWS resources were destroyed.

This step is important because AWS resources can incur charges while they exist.

The command used was:

```powershell
terraform destroy
```

Terraform displayed the resources scheduled for deletion and requested confirmation.

After confirmation, Terraform removed the infrastructure.

The final execution output was:

```text
Destroy complete! Resources: 7 destroyed.
```

## 24.1 Terraform State Verification

The Terraform state was checked using:

```powershell
terraform state list
```

No managed resources remained in the Terraform state after destruction.

This confirmed that the Terraform-managed infrastructure had been removed.

**Resource management note:** Terraform Destroy removes resources managed by the current Terraform state. It does not guarantee that unrelated AWS resources or all account-level charges have been removed.

---

# 25. Terraform Practical Result

The Terraform practical successfully demonstrated Infrastructure as Code using AWS.

The following operations were completed:

- Terraform installation.
- AWS CLI installation.
- AWS authentication configuration.
- AWS provider configuration.
- Terraform variable definition.
- VPC and networking configuration.
- EC2 instance configuration.
- Terraform initialization.
- Terraform formatting.
- Terraform validation.
- Terraform planning.
- Successful creation of seven AWS resources.
- EC2 instance verification.
- Successful destruction of all seven Terraform-managed resources.

---

# 26. Terraform Execution Evidence

Terraform configuration and execution screenshots are maintained in:

```text
screenshots/Terraform/
```

This directory contains evidence of the Terraform project structure, configuration files, initialization, validation, planning, infrastructure deployment, AWS resource verification, and infrastructure cleanup.

---

# 27. Overall Project Architecture

The two practicals demonstrate different stages of the DevOps workflow.

They are maintained in the same repository but executed as separate workflows.

## 27.1 Jenkins CI/CD Architecture

```text
Developer
    |
    v
GitHub Repository
    |
    v
Jenkins Poll SCM
    |
    v
Source Code Checkout
    |
    v
Python Environment Verification
    |
    v
Install Dependencies
    |
    v
Unit Testing using Pytest
    |
    v
Docker Image Build
    |
    v
StudentOS Docker Image
```

### Workflow Explanation

1. The developer maintains application code in GitHub.
2. Jenkins periodically checks the repository using Poll SCM.
3. Jenkins retrieves the source code.
4. The Python environment is verified.
5. Application dependencies are installed.
6. Unit tests are executed.
7. A Docker image is built after the testing stage succeeds.

## 27.2 Terraform Infrastructure Architecture

```text
Developer
    |
    v
Terraform Configuration
    |
    v
AWS Provider
    |
    v
Terraform Init
    |
    v
Terraform Validate
    |
    v
Terraform Plan
    |
    v
Terraform Apply
    |
    v
AWS Infrastructure
    |
    v
Terraform Destroy
```

### Workflow Explanation

1. The developer defines infrastructure in Terraform files.
2. Terraform initializes the working directory.
3. The configuration is formatted and validated.
4. Terraform generates an execution plan.
5. The plan is reviewed.
6. Terraform creates AWS resources.
7. Resources are verified in the AWS Console.
8. Terraform Destroy removes the managed resources after practical completion.

**Integration clarification:** Jenkins CI/CD and Terraform were implemented as separate practical workflows. Terraform was executed manually using the Terraform CLI and was not configured as an automated Jenkins pipeline stage.

---

# 28. GitHub Repository and Version Control

GitHub is used to maintain the project source code and infrastructure configuration.

Repository:

https://github.com/Zoro2809/student-devops-project

Git provides version control and allows changes to be tracked through commits.

The project was maintained on the `master` branch.

## 28.1 Git Commands Used

Check repository status:

```powershell
git status
```

Stage project files:

```powershell
git add .
```

Commit changes:

```powershell
git commit -m "Update project files"
```

Retrieve remote changes:

```powershell
git fetch origin
```

Push changes:

```powershell
git push origin master
```

These operations maintain synchronization between the local development environment and the GitHub repository.

## 28.2 Repository Structure

```text
student-devops-project/
│
├── app/
│   └── app.py
│
├── tests/
│   └── test_app.py
│
├── terraform/
│   ├── main.tf
│   ├── networking.tf
│   ├── outputs.tf
│   ├── provider.tf
│   ├── variables.tf
│   ├── versions.tf
│   └── .terraform.lock.hcl
│
├── screenshots/
│   ├── Jenkins/
│   └── Terraform/
│
├── Dockerfile
├── Jenkinsfile
├── requirements.txt
├── .dockerignore
├── .gitignore
└── README.md
```

The screenshots directory contains the practical execution evidence for Jenkins and Terraform.

---

# 29. Security and Best Practices

Security was considered during application development and infrastructure provisioning.

## 29.1 Jenkins and Docker Security

- Source code was maintained in GitHub.
- Application dependencies were defined in requirements.txt.
- Automated tests were executed before Docker image creation.
- Docker build exclusions were managed using `.dockerignore`.
- Sensitive and unnecessary files were excluded from Git using `.gitignore`.

## 29.2 Terraform and AWS Security

- AWS credentials were configured locally.
- AWS credentials were not committed to GitHub.
- Terraform state files were excluded from version control.
- Terraform variable files were excluded from version control.
- SSH access was restricted to the configured IP CIDR.
- HTTP access was configured through the security group.
- The AWS Mumbai region was used consistently.
- All Terraform-managed resources were destroyed after practical execution.
- The provider lock file was committed to maintain provider consistency.

## 29.3 Important Git Ignore Rules

The `.gitignore` file excludes files such as:

```gitignore
.terraform/
*.tfstate
*.tfstate.*
*.plan
*.tfvars
*.tfvars.json
.env
.env.*
.aws/
.venv/
venv/
__pycache__/
```

The local `terraform.tfvars` file is not uploaded because it contains the SSH access CIDR configuration.

---

# 30. Troubleshooting and Important Commands

The following commands were useful during implementation.

## Jenkins and Python

Verify Java:

```powershell
java -version
```

Verify Python:

```powershell
python --version
```

Run unit tests:

```powershell
python -m pytest -v
```

## Docker

Verify Docker:

```powershell
docker --version
```

Build an image:

```powershell
docker build -t studentos:1.0 .
```

List images:

```powershell
docker images
```

List running containers:

```powershell
docker ps
```

Run a container:

```powershell
docker run -d -p 5000:5000 --name student-app studentos:1.0
```

## Terraform

Verify Terraform:

```powershell
terraform version
```

Initialize:

```powershell
terraform init
```

Format:

```powershell
terraform fmt
```

Validate:

```powershell
terraform validate
```

Generate plan:

```powershell
terraform plan
```

Create infrastructure:

```powershell
terraform apply
```

Inspect Terraform state:

```powershell
terraform state list
```

Destroy infrastructure:

```powershell
terraform destroy
```

## AWS CLI

Verify AWS CLI:

```powershell
aws --version
```

Configure AWS credentials:

```powershell
aws configure
```

Verify AWS identity:

```powershell
aws sts get-caller-identity
```

---

# 31. Final Project Outcome

Both practical implementations were successfully completed.

### Practical 1 – Jenkins CI/CD

The Jenkins practical demonstrated:

- Jenkins installation and configuration.
- GitHub source code integration.
- Pipeline creation using Jenkinsfile.
- Automated checkout.
- Python environment verification.
- Automated unit testing.
- Successful execution of all three application tests.
- Docker image creation.
- Poll SCM-based automatic triggering.

### Practical 2 – Terraform Infrastructure as Code

The Terraform practical demonstrated:

- Terraform installation and setup.
- AWS CLI configuration.
- AWS authentication.
- Terraform provider and variable configuration.
- AWS networking resource definitions.
- EC2 instance provisioning.
- Terraform initialization.
- Terraform formatting and validation.
- Terraform planning.
- Successful deployment of seven AWS resources.
- AWS EC2 instance verification.
- Successful infrastructure destruction.

---

# 32. Conclusion

This project provided practical experience in implementing DevOps automation and Infrastructure as Code.

The Jenkins practical demonstrated how source code management, automated testing, and Docker image creation can be integrated into a CI/CD workflow.

The Terraform practical demonstrated how cloud infrastructure can be defined, provisioned, verified, and destroyed using declarative configuration files.

The project also provided hands-on experience with GitHub, Jenkins, Docker, Terraform, AWS, Python, and PowerShell.

By completing these two practicals, the project demonstrates the importance of automation, version control, containerization, infrastructure management, security, and resource cleanup in modern DevOps workflows.

---

# 33. References

1. Jenkins Documentation – https://www.jenkins.io/doc/
2. Docker Documentation – https://docs.docker.com/
3. Terraform Documentation – https://developer.hashicorp.com/terraform/docs
4. AWS Documentation – https://docs.aws.amazon.com/
5. AWS CLI Documentation – https://docs.aws.amazon.com/cli/
6. Git Documentation – https://git-scm.com/doc
7. Flask Documentation – https://flask.palletsprojects.com/
8. Pytest Documentation – https://docs.pytest.org/
