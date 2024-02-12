import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SecurityinsightsSourcecontrolsProps extends IAzAPIBaseProps {

}

/**
 * SecurityinsightsSourcecontrols resource
 */
export class SecurityinsightsSourcecontrols extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SecurityinsightsSourcecontrolsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.SecurityInsights/sourcecontrols@2023-02-01-preview";
  }

  protected getResourceBody(props: SecurityinsightsSourcecontrolsProps): string {
    return JSON.stringify(
        {properties: {contentTypes: ["string"], description: "string", displayName: "string", id: "string", lastDeploymentInfo: {deployment: {deploymentId: "string", deploymentLogsUrl: "string", deploymentResult: "string", deploymentState: "string", deploymentTime: "string"}, deploymentFetchStatus: "string", message: "string"}, repository: {branch: "string", deploymentLogsUrl: "string", displayUrl: "string", pathMapping: [{contentType: "string", path: "string"}], url: "string"}, repositoryResourceInfo: {azureDevOpsResourceInfo: {pipelineId: "string", serviceConnectionId: "string"}, gitHubResourceInfo: {appInstallationId: "string"}, webhook: {rotateWebhookSecret: "${bool}", webhookId: "string", webhookSecretUpdateTime: "string", webhookUrl: "string"}}, repoType: "string", version: "string"}, etag: "string"}
    );
  }
}
