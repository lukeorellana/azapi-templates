import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AppContainerappsSourcecontrolsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:containerApps;

/**
   * The branch which will trigger the auto deployment
   */
readonly branch?: string;

/**
   * Container App Revision Template with all possible settings and thedefaults if user did not provide them. The defaults are populatedas they were at the creation time
   */
readonly githubActionConfiguration?: GithubActionConfiguration;

/**
   * The repo url which will be integrated to ContainerApp.
   */
readonly repoUrl?: string;

/**
   * AzureCredentials configurations.
   */
readonly azureCredentials?: AzureCredentials;

/**
   * Context path
   */
readonly contextPath?: string;

/**
   * One time Github PAT to configure github environment
   */
readonly githubPersonalAccessToken?: string;

/**
   * Image name
   */
readonly image?: string;

/**
   * Operation system
   */
readonly os?: string;

/**
   * Code or Image
   */
readonly publishType?: string;

/**
   * Registry configurations.
   */
readonly registryInfo?: RegistryInfo;

/**
   * Runtime stack
   */
readonly runtimeStack?: string;

/**
   * Runtime version
   */
readonly runtimeVersion?: string;

/**
   * Client Id.
   */
readonly clientId?: string;

/**
   * Client Secret.
   */
readonly clientSecret?: string;

/**
   * Kind of auth github does for deploying the template
   */
readonly kind?: string;

/**
   * Subscription Id.
   */
readonly subscriptionId?: string;

/**
   * Tenant Id.
   */
readonly tenantId?: string;

/**
   * registry secret.
   */
readonly registryPassword?: string;

/**
   * registry server Url.
   */
readonly registryUrl?: string;

/**
   * registry username.
   */
readonly registryUserName?: string;
}

/**
 * AppContainerappsSourcecontrols resource
 */
export class AppContainerappsSourcecontrols extends AzAPIBase {
  constructor(scope: Construct, id: string, props: AppContainerappsSourcecontrolsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.App/containerApps/sourcecontrols@2023-05-01";
  }

  protected getResourceBody(props: AppContainerappsSourcecontrolsProps): string {
    return JSON.stringify(
        {properties: {branch: "string", githubActionConfiguration: {azureCredentials: {clientId: "string", clientSecret: "string", kind: "string", subscriptionId: "string", tenantId: "string"}, contextPath: "string", githubPersonalAccessToken: "string", image: "string", os: "string", publishType: "string", registryInfo: {registryPassword: "string", registryUrl: "string", registryUserName: "string"}, runtimeStack: "string", runtimeVersion: "string"}, repoUrl: "string"}}
    );
  }
}
