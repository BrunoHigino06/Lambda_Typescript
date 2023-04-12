import { Duration, Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as apigw from 'aws-cdk-lib/aws-apigateway';

export class LambdaStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const LambdaFunction = new lambda.Function(this, 'LambdaFunction', {
      code: lambda.Code.fromAsset('./src'),
      functionName: "LambdaFunction",
      handler: 'lambda_function.lambda_handler',
      memorySize: 1024,
      runtime: lambda.Runtime.PYTHON_3_9,
    });

    new apigw.LambdaRestApi(this, 'LambdaRestApi', {
      handler: LambdaFunction
    });   
  }
}