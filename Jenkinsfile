pipeline {
	agent any
	stages {
		stage('Install dependencies') {
			steps {
				sh 'npm install’
				}
			}

		stage('Run app') {
			steps {
				sh 'npm run dev’
				}
			}
		}
}
