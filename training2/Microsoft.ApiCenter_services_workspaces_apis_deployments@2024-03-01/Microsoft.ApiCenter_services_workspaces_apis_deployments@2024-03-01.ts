import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ApicenterServicesWorkspacesApisDeploymentsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:apis;

/**
   * The custom metadata defined for API catalog entities.
   */
readonly customProperties?: For Bicep, you can use theany()function.;

/**
   * API center-scoped definition resource ID.
   */
readonly definitionId?: string;

/**
   * Description of the deployment.
   */
readonly description?: stringConstranumbers:Max length = 500;

/**
   * API center-scoped environment resource ID.
   */
readonly environmentId?: string;

/**
   * Server
   */
readonly server?: DeploymentServer;

/**
   * State of API deployment.
   */
readonly state?: 'active''inactive';

/**
   * API deployment title
   */
readonly title?: stringConstranumbers:Min length = 1Max length = 50;

/**
   * Base runtime URLs for this deployment.
   */
readonly runtimeUri?: string[]Constranumbers:Max length = 200;
}

/**
 * ApicenterServicesWorkspacesApisDeployments resource
 */
export class ApicenterServicesWorkspacesApisDeployments extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ApicenterServicesWorkspacesApisDeploymentsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ApiCenter/services/workspaces/apis/deployments@2024-03-01";
  }

  protected getResourceBody(props: ApicenterServicesWorkspacesApisDeploymentsProps): string {
    return JSON.stringify(
        {properties: {definitionId: "string", description: "string", environmentId: "string", server: {runtimeUri: ["string"]}, state: "string", title: "string"}}
    );
  }
}
