import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DatabricksWorkspacesPrivateendpointconnectionsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:workspaces;

/**
   * GroupIds from the private link service resource.
   */
readonly groupIds?: string[];

/**
   * Private endpoint
   */
readonly privateEndpoint?: PrivateEndponumber;

/**
   * Private endpoint connection state
   */
readonly privateLinkServiceConnectionState: PrivateLinkServiceConnectionState;

/**
   * Actions required for a private endpoint connection
   */
readonly actionsRequired?: string;

/**
   * The description for the current state of a private endpoint connection
   */
readonly description?: string;

/**
   * The status of a private endpoint connection
   */
readonly status: 'Approved''Disconnected''Pending''Rejected';
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
