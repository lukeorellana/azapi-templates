import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface WebSitesSourcecontrolsProps extends IAzAPIBaseProps {
/**
   * Kind of resource.
   */
readonly kind?: string;

/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:sites;

/**
   * Name of branch to use for deployment.
   */
readonly branch?: string;

/**
   * trueto enable deployment rollback; otherwise,false.
   */
readonly deploymentRollbackEnabled?: bool;

/**
   * If GitHub Action is selected, than the associated configuration.
   */
readonly gitHubActionConfiguration?: GitHubActionConfiguration;

/**
   * trueif this is deployed via GitHub action.
   */
readonly isGitHubAction?: bool;

/**
   * trueto limit to manual integration;falseto enable continuous integration (which configures webhooks into online repos like GitHub).
   */
readonly isManualIntegration?: bool;

/**
   * truefor a Mercurial repository;falsefor a Git repository.
   */
readonly isMercurial?: bool;

/**
   * Repository or source control URL.
   */
readonly repoUrl?: string;

/**
   * GitHub Action code configuration.
   */
readonly codeConfiguration?: GitHubActionCodeConfiguration;

/**
   * GitHub Action container configuration.
   */
readonly containerConfiguration?: GitHubActionContainerConfiguration;

/**
   * Workflow option to determine whether the workflow file should be generated and written to the repository.
   */
readonly generateWorkflowFile?: bool;

/**
   * This will help determine the workflow configuration to select.
   */
readonly isLinux?: bool;

/**
   * Runtime stack is used to determine the workflow file content for code base apps.
   */
readonly runtimeStack?: string;

/**
   * Runtime version is used to determine what build version to set in the workflow file.
   */
readonly runtimeVersion?: string;

/**
   * The image name for the build.
   */
readonly imageName?: string;

/**
   * The password used to upload the image to the container registry.
   */
readonly password?: string;

/**
   * The server URL for the container registry where the build will be hosted.
   */
readonly serverUrl?: string;

/**
   * The username used to upload the image to the container registry.
   */
readonly username?: string;
}

/**
 * WebSitesSourcecontrols resource
 */
export class WebSitesSourcecontrols extends AzAPIBase {
  constructor(scope: Construct, id: string, props: WebSitesSourcecontrolsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Web/sites/sourcecontrols@2022-09-01";
  }

  protected getResourceBody(props: WebSitesSourcecontrolsProps): string {
    return JSON.stringify(
        {properties: {branch: "string", deploymentRollbackEnabled: "${bool}", gitHubActionConfiguration: {codeConfiguration: {runtimeStack: "string", runtimeVersion: "string"}, containerConfiguration: {imageName: "string", password: "string", serverUrl: "string", username: "string"}, generateWorkflowFile: "${bool}", isLinux: "${bool}"}, isGitHubAction: "${bool}", isManualIntegration: "${bool}", isMercurial: "${bool}", repoUrl: "string"}, kind: "string"}
    );
  }
}
