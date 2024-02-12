import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface RelayNamespacesProps extends IAzAPIBaseProps {
/**
   * SKU of the namespace.
   */
readonly sku?: Sku;

/**
   * List of private endpoint connections.
   */
readonly privateEndpointConnections?: PrivateEndponumberConnection[];

/**
   * This determines if traffic is allowed over public network. By default it is enabled.
   */
readonly publicNetworkAccess?: 'Disabled''Enabled''SecuredByPerimeter';

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

/**
   * The tier of this SKU.
   */
readonly tier?: 'Standard';
}

/**
 * RelayNamespaces resource
 */
export class RelayNamespaces extends AzAPIBase {
  constructor(scope: Construct, id: string, props: RelayNamespacesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Relay/namespaces@2021-11-01";
  }

  protected getResourceBody(props: RelayNamespacesProps): string {
    return JSON.stringify(
        {properties: {privateEndpointConnections: [{properties: {privateEndpoint: {id: "string"}, privateLinkServiceConnectionState: {description: "string", status: "string"}, provisioningState: "string"}}], publicNetworkAccess: "string"}, sku: {name: "Standard", tier: "Standard"}}
    );
  }
}
