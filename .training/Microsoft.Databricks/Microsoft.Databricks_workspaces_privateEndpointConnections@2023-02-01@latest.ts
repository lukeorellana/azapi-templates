import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DatabricksWorkspacesPrivateendpointconnectionsProps extends IAzAPIBaseProps {

}

/**
 * DatabricksWorkspacesPrivateendpointconnections resource
 */
export class DatabricksWorkspacesPrivateendpointconnections extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DatabricksWorkspacesPrivateendpointconnectionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Databricks/workspaces/privateEndpointConnections@2023-02-01";
  }

  protected getResourceBody(props: DatabricksWorkspacesPrivateendpointconnectionsProps): string {
    return JSON.stringify(
        {properties: {groupIds: ["string"], privateEndpoint: {}, privateLinkServiceConnectionState: {actionsRequired: "string", description: "string", status: "string"}}}
    );
  }
}
