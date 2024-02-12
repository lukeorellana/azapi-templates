import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface PowerbiPrivatelinkservicesforpowerbiPrivateendpointconnectionsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:privateLinkServicesForPowerBI;

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
 * PowerbiPrivatelinkservicesforpowerbiPrivateendpointconnections resource
 */
export class PowerbiPrivatelinkservicesforpowerbiPrivateendpointconnections extends AzAPIBase {
  constructor(scope: Construct, id: string, props: PowerbiPrivatelinkservicesforpowerbiPrivateendpointconnectionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.PowerBI/privateLinkServicesForPowerBI/privateEndpointConnections@2020-06-01";
  }

  protected getResourceBody(props: PowerbiPrivatelinkservicesforpowerbiPrivateendpointconnectionsProps): string {
    return JSON.stringify(
        {properties: {privateEndpoint: {id: "string"}, privateLinkServiceConnectionState: {actionsRequired: "string", description: "string", status: "string"}, provisioningState: "string"}}
    );
  }
}
