import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface EventhubNamespacesPrivateendpointconnectionsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:namespaces;

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
   * Description of the connection state.
   */
readonly description?: string;

/**
   * Status of the connection.
   */
readonly status?: 'Approved''Disconnected''Pending''Rejected';
}

/**
 * EventhubNamespacesPrivateendpointconnections resource
 */
export class EventhubNamespacesPrivateendpointconnections extends AzAPIBase {
  constructor(scope: Construct, id: string, props: EventhubNamespacesPrivateendpointconnectionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.EventHub/namespaces/privateEndpointConnections@2022-10-01-preview";
  }

  protected getResourceBody(props: EventhubNamespacesPrivateendpointconnectionsProps): string {
    return JSON.stringify(
        {properties: {privateEndpoint: {id: "string"}, privateLinkServiceConnectionState: {description: "string", status: "string"}, provisioningState: "string"}}
    );
  }
}
