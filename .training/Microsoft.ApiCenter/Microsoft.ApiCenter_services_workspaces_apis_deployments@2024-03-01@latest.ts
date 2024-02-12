import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ApicenterServicesWorkspacesApisDeploymentsProps extends IAzAPIBaseProps {

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
