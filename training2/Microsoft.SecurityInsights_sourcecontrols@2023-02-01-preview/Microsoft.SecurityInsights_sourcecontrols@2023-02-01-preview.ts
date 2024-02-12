import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SecurityinsightsSourcecontrolsProps extends IAzAPIBaseProps {
/**
   * Use when creating an extension resource at a scope that is different than the deployment scope.
   */
readonly scope?: Target resourceFor Bicep, set this property to the symbolic name of the resource to apply theextension resource.;

/**
   * Etag of the azure resource
   */
readonly etag?: string;

/**
   * Array of source control content types.
   */
readonly contentTypes: String array containing any of:'AnalyticRule''Workbook';

/**
   * A description of the source control
   */
readonly description?: string;

/**
   * The display name of the source control
   */
readonly displayName: string;

/**
   * The id (a Guid) of the source control
   */
readonly id?: string;

/**
   * Information regarding the latest deployment for the source control.
   */
readonly lastDeploymentInfo?: DeploymentInfo;

/**
   * Repository metadata.
   */
readonly repository: Repository;

/**
   * Information regarding the resources created in user's repository.
   */
readonly repositoryResourceInfo?: RepositoryResourceInfo;

/**
   * The repository type of the source control
   */
readonly repoType: 'DevOps''Github';

/**
   * The version number associated with the source control
   */
readonly version?: 'V1''V2';

/**
   * Deployment information.
   */
readonly deployment?: Deployment;

/**
   * Status while fetching the last deployment.
   */
readonly deploymentFetchStatus?: 'NotFound''Success''Unauthorized';

/**
   * Additional details about the deployment that can be shown to the user.
   */
readonly message?: string;

/**
   * Deployment identifier.
   */
readonly deploymentId?: string;

/**
   * Url to access repository action logs.
   */
readonly deploymentLogsUrl?: string;

/**
   * The outcome of the deployment.
   */
readonly deploymentResult?: 'Canceled''Failed''Success';

/**
   * Current status of the deployment.
   */
readonly deploymentState?: 'Canceling''Completed''In_Progress''Queued';

/**
   * The time when the deployment finished.
   */
readonly deploymentTime?: string;

/**
   * Branch name of repository.
   */
readonly branch?: string;

/**
   * Url to access repository action logs.
   */
readonly deploymentLogsUrl?: string;

/**
   * Display url of repository.
   */
readonly displayUrl?: string;

/**
   * Dictionary of source control content type and path mapping.
   */
readonly pathMapping?: ContentPathMap[];

/**
   * Url of repository.
   */
readonly url?: string;

/**
   * Content type.
   */
readonly contentType?: 'AnalyticRule''Workbook';

/**
   * The path to the content.
   */
readonly path?: string;

/**
   * Resources created in Azure DevOps for this source-control.
   */
readonly azureDevOpsResourceInfo?: AzureDevOpsResourceInfo;

/**
   * Resources created in GitHub for this source-control.
   */
readonly gitHubResourceInfo?: GitHubResourceInfo;

/**
   * The webhook object created for the source-control.
   */
readonly webhook?: Webhook;

/**
   * Id of the pipeline created for the source-control.
   */
readonly pipelineId?: string;

/**
   * Id of the service-connection created for the source-control.
   */
readonly serviceConnectionId?: string;

/**
   * GitHub application installation id.
   */
readonly appInstallationId?: string;

/**
   * A flag to instruct the backend service to rotate webhook secret.
   */
readonly rotateWebhookSecret?: bool;

/**
   * Unique identifier for the webhook.
   */
readonly webhookId?: string;

/**
   * Time when the webhook secret was updated.
   */
readonly webhookSecretUpdateTime?: string;

/**
   * URL that gets invoked by the webhook.
   */
readonly webhookUrl?: string;
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
