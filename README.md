# AWS-SNS-SQS-Lambda-Trigger-Template
SQS Lambda Trigger Template with SNS, node js, typescript

## How to Use?

0. Must install [Severless][serverless], [Node js][nodejs] and have [AWS][aws] account

1. Clone this project or Download this project

2. Move this project directory

3. ```npm install```

4. Edit function part at serverless.yml file 
Add your SQS Arn and set batch size

5. ```sls deploy -v```

6. Set sqs lambda trigger at AWS SQS console

7. Set Subscribe SNS Topic at same SQS queue

8. send SNS message (No Raw Message, if you want to use raw message, edit handler.ts file)

9. Check your lambda log, Done

[serverless]:[https://serverless.com/]
[nodejs]:[https://nodejs.org/]
[aws]:[https://aws.amazon.com]