import { Duration, Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as apigw from 'aws-cdk-lib/aws-apigateway';

export class LambdaStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const LmabdaFunction = new lambda.Function(this, 'LmabdaFunction', {
      code: lambda.Code.fromAsset('./src'),
      functionName: "Mapfre-Awsfn-Pipefy-Relatorio-Export-Tech-Process",
      handler: 'lambda_function.lambda_handler',
      memorySize: 1024,
      runtime: lambda.Runtime.PYTHON_3_9,
    });

    new apigw.LambdaRestApi(this, 'LambdaRestApi', {
      handler: LmabdaFunction
    });   
  }
}