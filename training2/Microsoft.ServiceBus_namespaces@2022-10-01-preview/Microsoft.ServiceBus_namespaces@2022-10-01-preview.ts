import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ServicebusNamespacesProps extends IAzAPIBaseProps {
/**
   * Properties of SKU
   */
readonly sku?: SBSku;

/**
   * Properties of BYOK Identity description
   */
readonly identity?: Identity;

/**
   * Type of managed service identity.
   */
readonly type?: 'None''SystemAssigned''SystemAssigned, UserAssigned''UserAssigned';

/**
   * Properties for User Assigned Identities
   */
readonly userAssignedIdentities?: object;

/**
   * Alternate name for namespace
   */
readonly alternateName?: string;

/**
   * This property disables SAS authentication for the Service Bus namespace.
   */
readonly disableLocalAuth?: bool;

/**
   * Properties of BYOK Encryption description
   */
readonly encryption?: Encryption;

/**
   * The minimum TLS version for the cluster to support, e.g. '1.2'
   */
readonly minimumTlsVersion?: '1.0''1.1''1.2';

/**
   * The number of partitions of a Service Bus namespace. This property is only applicable to Premium SKU namespaces. The default value is 1 and possible values are 1, 2 and 4
   */
readonly premiumMessagingPartitions?: number;

/**
   * List of private endpoint connections.
   */
readonly privateEndpointConnections?: PrivateEndponumberConnection[];

/**
   * This determines if traffic is allowed over public network. By default it is enabled.
   */
readonly publicNetworkAccess?: 'Disabled''Enabled''SecuredByPerimeter';

/**
   * Enabling this property creates a Premium Service Bus Namespace in regions supported availability zones.
   */
readonly zoneRedundant?: bool;

/**
   * Enumerates the possible value of keySource for Encryption
   */
readonly keySource?: 'Microsoft.KeyVault';

/**
   * Properties of KeyVault
   */
readonly keyVaultProperties?: KeyVaultProperties[];

/**
   * Enable Infrastructure Encryption (Double Encryption)
   */
readonly requireInfrastructureEncryption?: bool;

/**
   * 
   */
readonly identity?: UserAssignedIdentityProperties;

/**
   * Name of the Key from KeyVault
   */
readonly keyName?: string;

/**
   * Uri of KeyVault
   */
readonly keyVaultUri?: string;

/**
   * Version of KeyVault
   */
readonly keyVersion?: string;

/**
   * ARM ID of user Identity selected for encryption
   */
readonly userAssignedIdentity?: string;

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
   * Messaging units for your service bus premium namespace. Valid capacities are {1, 2, 4, 8, 16} multiples of your properties.premiumMessagingPartitions setting. For example, If properties.premiumMessagingPartitions is 1 then possible capacity values are 1, 2, 4, 8, and 16. If properties.premiumMessagingPartitions is 4 then possible capacity values are 4, 8, 16, 32 and 64
   */
readonly capacity?: number;

/**
   * The billing tier of this particular SKU.
   */
readonly tier?: 'Basic''Premium''Standard';
}

/**
 * ServicebusNamespaces resource
 */
export class ServicebusNamespaces extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ServicebusNamespacesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ServiceBus/namespaces@2022-10-01-preview";
  }

  protected getResourceBody(props: ServicebusNamespacesProps): string {
    return JSON.stringify(
        {properties: {alternateName: "string", disableLocalAuth: "${bool}", encryption: {keySource: "Microsoft.KeyVault", keyVaultProperties: [{identity: {userAssignedIdentity: "string"}, keyName: "string", keyVaultUri: "string", keyVersion: "string"}], requireInfrastructureEncryption: "${bool}"}, minimumTlsVersion: "string", premiumMessagingPartitions: "${int}", privateEndpointConnections: [{properties: {privateEndpoint: {id: "string"}, privateLinkServiceConnectionState: {description: "string", status: "string"}, provisioningState: "string"}}], publicNetworkAccess: "string", zoneRedundant: "${bool}"}, sku: {capacity: "${int}", name: "string", tier: "string"}}
    );
  }
}
