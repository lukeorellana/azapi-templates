import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface PowerbiPrivatelinkservicesforpowerbiProps extends IAzAPIBaseProps {
/**
   * Specifies the private endpoint connections of the resource.
   */
readonly privateEndpointConnections?: PrivateEndponumberConnection[];

/**
   * Specifies the tenant id of the resource.
   */
readonly tenantId?: string;

/**
   * Specifies the private endpoint.
   */
readonly privateEndpoint?: PrivateEndponumber;

/**
   * Specifies the connection state.
   */
readonly privateLinkServiceConnectionState?: ConnectionState;

/**
   * Provisioning state of the Private Endpoint Connection.
   */
readonly provisioningState?: 'Canceled''Creating''Deleting''Failed''Succeeded''Updating';

/**
   * Specifies the id of private endpoint.
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
 * PowerbiPrivatelinkservicesforpowerbi resource
 */
export class PowerbiPrivatelinkservicesforpowerbi extends AzAPIBase {
  constructor(scope: Construct, id: string, props: PowerbiPrivatelinkservicesforpowerbiProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.PowerBI/privateLinkServicesForPowerBI@2020-06-01";
  }

  protected getResourceBody(props: PowerbiPrivatelinkservicesforpowerbiProps): string {
    return JSON.stringify(
        {properties: {privateEndpointConnections: [{properties: {privateEndpoint: {id: "string"}, privateLinkServiceConnectionState: {actionsRequired: "string", description: "string", status: "string"}, provisioningState: "string"}}], tenantId: "string"}}
    );
  }
}
