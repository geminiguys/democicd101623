import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
// import {CodePipeline, CodepipelineSource, ShellStep } from 'aws-cdk-lib/pipelines';
import { CodePipeline, CodePipelineSource, ShellStep } from 'aws-cdk-lib/pipelines';


export class DemoawspipelineStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // AWS CI-CD Pipeline
    const democicdpipeline = new CodePipeline(this,'demopipeline',
    {
          synth: new ShellStep('Synth', {
            // Use a connection created using the AWS console to authenticate to GitHub
            // Other sources are available.
            input: CodePipelineSource.gitHub('geminiguys/democicd101623', 'main'),
            commands: [
              'npm ci',
              'npm run build',
              'npx cdk synth',
            ],
          }),
        });
  }
}
