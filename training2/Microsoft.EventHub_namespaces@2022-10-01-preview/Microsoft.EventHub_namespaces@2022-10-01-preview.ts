import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface EventhubNamespacesProps extends IAzAPIBaseProps {
/**
   * Properties of sku resource
   */
readonly sku?: Sku;

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
   * Alternate name specified when alias and namespace names are same.
   */
readonly alternateName?: string;

/**
   * Cluster ARM ID of the Namespace.
   */
readonly clusterArmId?: string;

/**
   * This property disables SAS authentication for the Event Hubs namespace.
   */
readonly disableLocalAuth?: bool;

/**
   * Properties of BYOK Encryption description
   */
readonly encryption?: Encryption;

/**
   * Value that indicates whether AutoInflate is enabled for eventhub namespace.
   */
readonly isAutoInflateEnabled?: bool;

/**
   * Value that indicates whether Kafka is enabled for eventhub namespace.
   */
readonly kafkaEnabled?: bool;

/**
   * Upper limit of throughput units when AutoInflate is enabled, value should be within 0 to 20 throughput units. ( '0' if AutoInflateEnabled = true)
   */
readonly maximumThroughputUnits?: number;

/**
   * The minimum TLS version for the cluster to support, e.g. '1.2'
   */
readonly minimumTlsVersion?: '1.0''1.1''1.2';

/**
   * List of private endpoint connections.
   */
readonly privateEndpointConnections?: PrivateEndponumberConnection[];

/**
   * This determines if traffic is allowed over public network. By default it is enabled.
   */
readonly publicNetworkAccess?: 'Disabled''Enabled''SecuredByPerimeter';

/**
   * Enabling this property creates a Standard Event Hubs Namespace in regions supported availability zones.
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
   * Key Version
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
   * The Event Hubs throughput units for Basic or Standard tiers, where value should be 0 to 20 throughput units. The Event Hubs premium units for Premium tier, where value should be 0 to 10 premium units.
   */
readonly capacity?: number;

/**
   * The billing tier of this particular SKU.
   */
readonly tier?: 'Basic''Premium''Standard';
}

/**
 * EventhubNamespaces resource
 */
export class EventhubNamespaces extends AzAPIBase {
  constructor(scope: Construct, id: string, props: EventhubNamespacesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.EventHub/namespaces@2022-10-01-preview";
  }

  protected getResourceBody(props: EventhubNamespacesProps): string {
    return JSON.stringify(
        {properties: {alternateName: "string", clusterArmId: "string", disableLocalAuth: "${bool}", encryption: {keySource: "Microsoft.KeyVault", keyVaultProperties: [{identity: {userAssignedIdentity: "string"}, keyName: "string", keyVaultUri: "string", keyVersion: "string"}], requireInfrastructureEncryption: "${bool}"}, isAutoInflateEnabled: "${bool}", kafkaEnabled: "${bool}", maximumThroughputUnits: "${int}", minimumTlsVersion: "string", privateEndpointConnections: [{properties: {privateEndpoint: {id: "string"}, privateLinkServiceConnectionState: {description: "string", status: "string"}, provisioningState: "string"}}], publicNetworkAccess: "string", zoneRedundant: "${bool}"}, sku: {capacity: "${int}", name: "string", tier: "string"}}
    );
  }
}
