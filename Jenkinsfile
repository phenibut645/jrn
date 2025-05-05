pipeline {
	agent any
	stages {
		stage('Install dependencies') {
			steps {
				sh 'npm install'
				}
			}
		stage('Jest tests'){
			steps {
				sh 'npm test'
				}
			}

		stage('Run app') {
			steps {
				sh 'npm run dev'
				}
			}
		}
}
