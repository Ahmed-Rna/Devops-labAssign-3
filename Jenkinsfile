pipeline {
  agent any
  stages {
    stage('Install') {
      steps {
        sh 'npm ci'
      }
    }
    stage('Test') {
      steps {
        sh 'npm test'
      }
    }
    stage('Build Docker') {
      steps {
        sh 'docker build -t devops-lab:latest .'
      }
    }
  }
}
