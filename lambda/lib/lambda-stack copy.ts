import { Duration, Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as apigw from 'aws-cdk-lib/aws-apigateway';

export class LambdaStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const PipefyFunction = new lambda.Function(this, 'PipefyFunction', {
      code: lambda.Code.fromAsset('./src'),
      functionName: "PipefyFunction",
      handler: 'index.handler',
      memorySize: 1024,
      runtime: lambda.Runtime.NODEJS_14_X,
    });

    new apigw.LambdaRestApi(this, 'Pipefy', {
      handler: PipefyFunction
    });

  }
}