import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SignalrserviceWebpubsubPrivateendpointconnectionsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:webPubSub;

/**
   * Private endpoint
   */
readonly privateEndpoint?: PrivateEndponumber;

/**
   * Connection state of the private endpoint connection
   */
readonly privateLinkServiceConnectionState?: PrivateLinkServiceConnectionState;

/**
   * Full qualified Id of the private endpoint
   */
readonly id?: string;

/**
   * A message indicating if changes on the service provider require any updates on the consumer.
   */
readonly actionsRequired?: string;

/**
   * The reason for approval/rejection of the connection.
   */
readonly description?: string;

/**
   * Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service.
   */
readonly status?: 'Approved''Disconnected''Pending''Rejected';
}

/**
 * SignalrserviceWebpubsubPrivateendpointconnections resource
 */
export class SignalrserviceWebpubsubPrivateendpointconnections extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SignalrserviceWebpubsubPrivateendpointconnectionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.SignalRService/webPubSub/privateEndpointConnections@2023-08-01-preview";
  }

  protected getResourceBody(props: SignalrserviceWebpubsubPrivateendpointconnectionsProps): string {
    return JSON.stringify(
        {properties: {privateEndpoint: {id: "string"}, privateLinkServiceConnectionState: {actionsRequired: "string", description: "string", status: "string"}}}
    );
  }
}
