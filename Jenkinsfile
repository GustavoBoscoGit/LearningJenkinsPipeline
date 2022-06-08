pipeline{

    agent any

    parameters{
        string(name: 'SPEC', defaultValue: "cypress/e2e/**/**", description: "Enter the scripts that you want to execute")
        choice(name: 'BROWSER', choices: ['chrome','edge','firefox'], description: "Chose the browser where you want to execute you script")
    }

    stages{
        stage('Building'){
            steps{
                echo "Building aplication"
            }
        }
        stage('Testing'){
            steps{
                bat "npm install"
                bat "npx cypress run --browser ${BROWSER} --spec ${SPEC}"
            }
        }
        stage('Deploying'){
            steps{
                 echo "Deploy the application"
            }
        }
    }

    post{
        always{
            publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: true, reportDir: 'cypress/report', reportFiles: 'index.html', reportName: 'HTML Report', reportTitles: ''])
        }
    }
}