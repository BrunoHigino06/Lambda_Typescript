import { Duration, Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as apigw from 'aws-cdk-lib/aws-apigateway';

export class LambdaStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const MapfreAwsfnPipefyRelatorioExportTechProcess = new lambda.Function(this, 'MapfreAwsfnPipefyRelatorioExportTechProcess', {
      code: lambda.Code.fromAsset('./src'),
      functionName: "Mapfre-Awsfn-Pipefy-Relatorio-Export-Tech-Process",
      handler: 'MapfreAwsfnPipefyRelatorioExportTechProcess.handler',
      memorySize: 1024,
      runtime: lambda.Runtime.PYTHON_3_9,
    });

    new apigw.LambdaRestApi(this, 'MapfreAwsfnPipefyRelatorioExportTechProcessApi', {
      handler: MapfreAwsfnPipefyRelatorioExportTechProcess
    });

    const MapfreAwsfnPipefyValFatAuxCargaAsIs = new lambda.Function(this, 'MapfreAwsfnPipefyValFatAuxCargaAsIs', {
      code: lambda.Code.fromAsset('./src'),
      functionName: "Mapfre-Awsfn-Pipefy-Val-Fat-Aux-Carga-As-Is",
      handler: 'MapfreAwsfnPipefyValFatAuxCargaAsIs.handler',
      memorySize: 1024,
      runtime: lambda.Runtime.PYTHON_3_9,
    });

    new apigw.LambdaRestApi(this, 'MapfreAwsfnPipefyValFatAuxCargaAsIsApi', {
      handler: MapfreAwsfnPipefyValFatAuxCargaAsIs
    });

    const MapfreAwsfnPipefyValFatStatusSap = new lambda.Function(this, 'MapfreAwsfnPipefyValFatStatusSap', {
      code: lambda.Code.fromAsset('./src'),
      functionName: "Mapfre-Awsfn-Pipefy-Val-Fat-Status-Sap",
      handler: 'MapfreAwsfnPipefyValFatStatusSap.handler',
      memorySize: 1024,
      runtime: lambda.Runtime.PYTHON_3_9,
    });

    new apigw.LambdaRestApi(this, 'MapfreAwsfnPipefyValFatStatusSapApi', {
      handler: MapfreAwsfnPipefyValFatStatusSap
    });

    const MapfreAwsfnPipefyValFaturamentoChecagemAuto = new lambda.Function(this, 'MapfreAwsfnPipefyValFaturamentoChecagemAuto', {
      code: lambda.Code.fromAsset('./src'),
      functionName: "Mapfre-Awsfn-Pipefy-Val-Faturamento-Checagem-Auto",
      handler: 'MapfreAwsfnPipefyValFaturamentoChecagemAuto.handler',
      memorySize: 1024,
      runtime: lambda.Runtime.PYTHON_3_9,
    });

    new apigw.LambdaRestApi(this, 'MapfreAwsfnPipefyValFaturamentoChecagemAutoApi', {
      handler: MapfreAwsfnPipefyValFaturamentoChecagemAuto
    });

    const MapfreAwsfnPipefyValFaturamentoGeralKitCsn = new lambda.Function(this, 'MapfreAwsfnPipefyValFaturamentoGeralKitCsn', {
      code: lambda.Code.fromAsset('./src'),
      functionName: "Mapfre-Awsfn-Pipefy-Val-Faturamento-Geral-Kit-Csn",
      handler: 'MapfreAwsfnPipefyValFaturamentoGeralKitCsn.handler',
      memorySize: 1024,
      runtime: lambda.Runtime.PYTHON_3_9,
    });

    new apigw.LambdaRestApi(this, 'MapfreAwsfnPipefyValFaturamentoGeralKitCsnApi', {
      handler: MapfreAwsfnPipefyValFaturamentoGeralKitCsn
    });

    const MapfreAwsfnPipefyValFaturamentoTratativaCsn = new lambda.Function(this, 'MapfreAwsfnPipefyValFaturamentoTratativaCsn', {
      code: lambda.Code.fromAsset('./src'),
      functionName: "Mapfre-Awsfn-Pipefy-Val-Faturamento-Tratativa-Csn",
      handler: 'MapfreAwsfnPipefyValFaturamentoTratativaCsn.handler',
      memorySize: 1024,
      runtime: lambda.Runtime.PYTHON_3_9,
    });

    new apigw.LambdaRestApi(this, 'MapfreAwsfnPipefyValFaturamentoTratativaCsnApi', {
      handler: MapfreAwsfnPipefyValFaturamentoTratativaCsn
    });
    
  }
}