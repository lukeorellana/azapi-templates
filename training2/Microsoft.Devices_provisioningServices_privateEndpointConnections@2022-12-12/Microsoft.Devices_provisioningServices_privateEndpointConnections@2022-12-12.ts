import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DevicesProvisioningservicesPrivateendpointconnectionsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:provisioningServices;

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
 * DevicesProvisioningservicesPrivateendpointconnections resource
 */
export class DevicesProvisioningservicesPrivateendpointconnections extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DevicesProvisioningservicesPrivateendpointconnectionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Devices/provisioningServices/privateEndpointConnections@2022-12-12";
  }

  protected getResourceBody(props: DevicesProvisioningservicesPrivateendpointconnectionsProps): string {
    return JSON.stringify(
        {properties: {privateEndpoint: {}, privateLinkServiceConnectionState: {actionsRequired: "string", description: "string", status: "string"}}}
    );
  }
}
