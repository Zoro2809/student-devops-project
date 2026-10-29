
pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git branch: 'master',
                    url: 'https://github.com/Zoro2809/student-devops-project.git'
            }
        }

        stage('Verify Python') {
            steps {
                bat 'python --version'
                bat 'docker --version'
            }
        }

        stage('Run Tests') {
            steps {
                bat 'python -m unittest discover -s tests -v'
            }
        }

        stage('Build Docker Image') {
            steps {
                bat 'docker build -t studentos:1.0 .'
            }
        }
    }
}
