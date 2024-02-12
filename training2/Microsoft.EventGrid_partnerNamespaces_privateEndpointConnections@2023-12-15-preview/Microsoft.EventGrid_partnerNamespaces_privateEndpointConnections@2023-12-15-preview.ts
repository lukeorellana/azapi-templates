import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface EventgridPartnernamespacesPrivateendpointconnectionsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:partnerNamespaces;

/**
   * GroupIds from the private link service resource.
   */
readonly groupIds?: string[];

/**
   * The Private Endpoint resource for this Connection.
   */
readonly privateEndpoint?: PrivateEndponumber;

/**
   * Details about the state of the connection.
   */
readonly privateLinkServiceConnectionState?: ConnectionState;

/**
   * Provisioning state of the Private Endpoint Connection.
   */
readonly provisioningState?: 'Canceled''Creating''Deleting''Failed''Succeeded''Updating';

/**
   * The ARM identifier for Private Endpoint.
   */
readonly id?: string;

/**
   * Actions required (if any).
   */
readonly actionsRequired?: string;

/**
   * Description of the connection state.
   */
readonly description?: string;

/**
   * Status of the connection.
   */
readonly status?: 'Approved''Disconnected''Pending''Rejected';
}

/**
 * EventgridPartnernamespacesPrivateendpointconnections resource
 */
export class EventgridPartnernamespacesPrivateendpointconnections extends AzAPIBase {
  constructor(scope: Construct, id: string, props: EventgridPartnernamespacesPrivateendpointconnectionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.EventGrid/partnerNamespaces/privateEndpointConnections@2023-12-15-preview";
  }

  protected getResourceBody(props: EventgridPartnernamespacesPrivateendpointconnectionsProps): string {
    return JSON.stringify(
        {properties: {groupIds: ["string"], privateEndpoint: {id: "string"}, privateLinkServiceConnectionState: {actionsRequired: "string", description: "string", status: "string"}, provisioningState: "string"}}
    );
  }
}
