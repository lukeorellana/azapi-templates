import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DevicesIothubsPrivateendpointconnectionsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:iotHubs;

/**
   * The private endpoint property of a private endpoint connection
   */
readonly privateEndpoint?: PrivateEndponumber;

/**
   * The current state of a private endpoint connection
   */
readonly privateLinkServiceConnectionState: PrivateLinkServiceConnectionState;

/**
   * Actions required for a private endpoint connection
   */
readonly actionsRequired?: string;

/**
   * The description for the current state of a private endpoint connection
   */
readonly description: string;

/**
   * The status of a private endpoint connection
   */
readonly status: 'Approved''Disconnected''Pending''Rejected';
}

/**
 * DevicesIothubsPrivateendpointconnections resource
 */
export class DevicesIothubsPrivateendpointconnections extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DevicesIothubsPrivateendpointconnectionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Devices/iotHubs/privateEndpointConnections@2022-04-30-preview";
  }

  protected getResourceBody(props: DevicesIothubsPrivateendpointconnectionsProps): string {
    return JSON.stringify(
        {properties: {privateEndpoint: {}, privateLinkServiceConnectionState: {actionsRequired: "string", description: "string", status: "string"}}}
    );
  }
}
