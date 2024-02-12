import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DocumentdbDatabaseaccountsProps extends IAzAPIBaseProps {
/**
   * Indicates the type of database account. This can only be set at database account creation.
   */
readonly kind?: 'GlobalDocumentDB''MongoDB''Parse';

/**
   * Identity for the resource.
   */
readonly identity?: ManagedServiceIdentity;

/**
   * The type of identity used for the resource. The type 'SystemAssigned,UserAssigned' includes both an implicitly created identity and a set of user assigned identities. The type 'None' will remove any identities from the service.
   */
readonly type?: 'None''SystemAssigned''SystemAssigned,UserAssigned''UserAssigned';

/**
   * The list of user identities associated with resource. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.
   */
readonly userAssignedIdentities?: object;

/**
   * Analytical storage specific properties.
   */
readonly analyticalStorageConfiguration?: AnalyticalStorageConfiguration;

/**
   * API specific properties. Currently, supported only for MongoDB API.
   */
readonly apiProperties?: ApiProperties;

/**
   * The object representing the policy for taking backups on an account.
   */
readonly backupPolicy?: BackupPolicy;

/**
   * List of Cosmos DB capabilities for the account
   */
readonly capabilities?: Capability[];

/**
   * The object that represents all properties related to capacity enforcement on an account.
   */
readonly capacity?: Capacity;

/**
   * The cassandra connector offer type for the Cosmos DB database C* account.
   */
readonly connectorOffer?: 'Small';

/**
   * The consistency policy for the Cosmos DB account.
   */
readonly consistencyPolicy?: ConsistencyPolicy;

/**
   * The CORS policy for the Cosmos DB database account.
   */
readonly cors?: CorsPolicy[];

/**
   * Enum to indicate the mode of account creation.
   */
readonly createMode?: 'Default''Restore';

/**
   * The offer type for the database
   */
readonly databaseAccountOfferType: 'Standard';

/**
   * The default identity for accessing key vault used in features like customer managed keys. The default identity needs to be explicitly set by the users. It can be "FirstPartyIdentity", "SystemAssignedIdentity" and more.
   */
readonly defaultIdentity?: string;

/**
   * Disable write operations on metadata resources (databases, containers, throughput) via account keys
   */
readonly disableKeyBasedMetadataWriteAccess?: bool;

/**
   * Opt-out of local authentication and ensure only MSI and AAD can be used exclusively for authentication.
   */
readonly disableLocalAuth?: bool;

/**
   * Flag to indicate whether to enable storage analytics.
   */
readonly enableAnalyticalStorage?: bool;

/**
   * Enables automatic failover of the write region in the rare event that the region is unavailable due to an outage. Automatic failover will result in a new write region for the account and is chosen based on the failover priorities configured for the account.
   */
readonly enableAutomaticFailover?: bool;

/**
   * Enables the cassandra connector on the Cosmos DB C* account
   */
readonly enableCassandraConnector?: bool;

/**
   * Flag to indicate whether Free Tier is enabled.
   */
readonly enableFreeTier?: bool;

/**
   * Enables the account to write in multiple locations
   */
readonly enableMultipleWriteLocations?: bool;

/**
   * Flag to indicate enabling/disabling of Partition Merge feature on the account
   */
readonly enablePartitionMerge?: bool;

/**
   * List of IpRules.
   */
readonly ipRules?: IpAddressOrRange[];

/**
   * Flag to indicate whether to enable/disable Virtual Network ACL rules.
   */
readonly isVirtualNetworkFilterEnabled?: bool;

/**
   * The URI of the key vault
   */
readonly keyVaultKeyUri?: string;

/**
   * An array that contains the georeplication locations enabled for the Cosmos DB account.
   */
readonly locations: Location[];

/**
   * Indicates the minimum allowed Tls version. The default is Tls 1.0, except for Cassandra and Mongo API's, which only work with Tls 1.2.
   */
readonly minimalTlsVersion?: 'Tls''Tls11''Tls12';

/**
   * Indicates what services are allowed to bypass firewall checks.
   */
readonly networkAclBypass?: 'AzureServices''None';

/**
   * An array that contains the Resource Ids for Network Acl Bypass for the Cosmos DB account.
   */
readonly networkAclBypassResourceIds?: string[];

/**
   * Whether requests from Public Network are allowed
   */
readonly publicNetworkAccess?: 'Disabled''Enabled''SecuredByPerimeter';

/**
   * Parameters to indicate the information about the restore.
   */
readonly restoreParameters?: RestoreParameters;

/**
   * List of Virtual Network ACL rules configured for the Cosmos DB account.
   */
readonly virtualNetworkRules?: VirtualNetworkRule[];

/**
   * Describes the types of schema for analytical storage.
   */
readonly schemaType?: 'FullFidelity''WellDefined';

/**
   * Describes the ServerVersion of an a MongoDB account.
   */
readonly serverVersion?: '3.2''3.6''4.0''4.2';

/**
   * The object representing the state of the migration between the backup policies.
   */
readonly migrationState?: BackupPolicyMigrationState;

/**
   * Set the object type
   */
readonly type: ContinuousPeriodic;

/**
   * Time at which the backup policy migration started (ISO-8601 format).
   */
readonly startTime?: string;

/**
   * Describes the status of migration between backup policy types.
   */
readonly status?: 'Completed''Failed''InProgress''Invalid';

/**
   * Describes the target backup policy type of the backup policy migration.
   */
readonly targetType?: 'Continuous''Periodic';

/**
   * Describes the mode of backups.
   */
readonly type: 'Continuous';

/**
   * Configuration values for continuous mode backup
   */
readonly continuousModeProperties?: ContinuousModeProperties;

/**
   * Enum to indicate type of Continuous backup mode
   */
readonly tier?: 'Continuous30Days''Continuous7Days';

/**
   * Describes the mode of backups.
   */
readonly type: 'Periodic';

/**
   * Configuration values for periodic mode backup
   */
readonly periodicModeProperties?: PeriodicModeProperties;

/**
   * An integer representing the interval in minutes between two backups
   */
readonly backupIntervalInMinutes?: number;

/**
   * An integer representing the time (in hours) that each backup is retained
   */
readonly backupRetentionIntervalInHours?: number;

/**
   * Enum to indicate type of backup residency
   */
readonly backupStorageRedundancy?: 'Geo''Local''Zone';

/**
   * The total throughput limit imposed on the account. A totalThroughputLimit of 2000 imposes a strict limit of max throughput that can be provisioned on that account to be 2000. A totalThroughputLimit of -1 indicates no limits on provisioning of throughput.
   */
readonly totalThroughputLimit?: number;

/**
   * The default consistency level and configuration settings of the Cosmos DB account.
   */
readonly defaultConsistencyLevel: 'BoundedStaleness''ConsistentPrefix''Eventual''Session''Strong';

/**
   * When used with the Bounded Staleness consistency level, this value represents the time amount of staleness (in seconds) tolerated. Accepted range for this value is 5 - 86400. Required when defaultConsistencyPolicy is set to 'BoundedStaleness'.
   */
readonly maxIntervalInSeconds?: number;

/**
   * When used with the Bounded Staleness consistency level, this value represents the number of stale requests tolerated. Accepted range for this value is 1 â 2,147,483,647. Required when defaultConsistencyPolicy is set to 'BoundedStaleness'.
   */
readonly maxStalenessPrefix?: number;

/**
   * The request headers that the origin domain may specify on the CORS request.
   */
readonly allowedHeaders?: string;

/**
   * The methods (HTTP request verbs) that the origin domain may use for a CORS request.
   */
readonly allowedMethods?: string;

/**
   * The origin domains that are permitted to make a request against the service via CORS.
   */
readonly allowedOrigins: string;

/**
   * The response headers that may be sent in the response to the CORS request and exposed by the browser to the request issuer.
   */
readonly exposedHeaders?: string;

/**
   * The maximum amount time that a browser should cache the preflight OPTIONS request.
   */
readonly maxAgeInSeconds?: number;

/**
   * A single IPv4 address or a single IPv4 address range in CIDR format. Provided IPs must be well-formatted and cannot be contained in one of the following ranges: 10.0.0.0/8, 100.64.0.0/10, 172.16.0.0/12, 192.168.0.0/16, since these are not enforceable by the IP address filter. Example of valid inputs: â23.40.210.245â or â23.40.210.0/8â.
   */
readonly ipAddressOrRange?: string;

/**
   * The failover priority of the region. A failover priority of 0 indicates a write region. The maximum value for a failover priority = (total number of regions - 1). Failover priority values must be unique for each of the regions in which the database account exists.
   */
readonly failoverPriority?: number;

/**
   * Flag to indicate whether or not this region is an AvailabilityZone region
   */
readonly isZoneRedundant?: bool;

/**
   * The name of the region.
   */
readonly locationName?: string;

/**
   * List of specific databases available for restore.
   */
readonly databasesToRestore?: DatabaseRestoreResource[];

/**
   * List of specific gremlin databases available for restore.
   */
readonly gremlinDatabasesToRestore?: GremlinDatabaseRestoreResource[];

/**
   * Describes the mode of the restore.
   */
readonly restoreMode?: 'PonumberInTime';

/**
   * The id of the restorable database account from which the restore has to be initiated. For example: /subscriptions/{subscriptionId}/providers/Microsoft.DocumentDB/locations/{location}/restorableDatabaseAccounts/{restorableDatabaseAccountName}
   */
readonly restoreSource?: string;

/**
   * Time to which the account has to be restored (ISO-8601 format).
   */
readonly restoreTimestampInUtc?: string;

/**
   * List of specific tables available for restore.
   */
readonly tablesToRestore?: string[];

/**
   * The names of the collections available for restore.
   */
readonly collectionNames?: string[];

/**
   * The name of the database available for restore.
   */
readonly databaseName?: string;

/**
   * The name of the gremlin database available for restore.
   */
readonly databaseName?: string;

/**
   * The names of the graphs available for restore.
   */
readonly graphNames?: string[];

/**
   * Resource ID of a subnet, for example: /subscriptions/{subscriptionId}/resourceGroups/{groupName}/providers/Microsoft.Network/virtualNetworks/{virtualNetworkName}/subnets/{subnetName}.
   */
readonly id?: string;

/**
   * Create firewall rule before the virtual network has vnet service endpoint enabled.
   */
readonly ignoreMissingVNetServiceEndpoint?: bool;
}

/**
 * DocumentdbDatabaseaccounts resource
 */
export class DocumentdbDatabaseaccounts extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DocumentdbDatabaseaccountsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DocumentDB/databaseAccounts@2023-04-15";
  }

  protected getResourceBody(props: DocumentdbDatabaseaccountsProps): string {
    return JSON.stringify(
        {properties: {analyticalStorageConfiguration: {schemaType: "string"}, apiProperties: {serverVersion: "string"}, backupPolicy: {migrationState: {startTime: "string", status: "string", targetType: "string"}, type: "string"}, capabilities: [{name: "string"}], capacity: {totalThroughputLimit: "${int}"}, connectorOffer: "Small", consistencyPolicy: {defaultConsistencyLevel: "string", maxIntervalInSeconds: "${int}", maxStalenessPrefix: "${int}"}, cors: [{allowedHeaders: "string", allowedMethods: "string", allowedOrigins: "string", exposedHeaders: "string", maxAgeInSeconds: "${int}"}], createMode: "string", databaseAccountOfferType: "Standard", defaultIdentity: "string", disableKeyBasedMetadataWriteAccess: "${bool}", disableLocalAuth: "${bool}", enableAnalyticalStorage: "${bool}", enableAutomaticFailover: "${bool}", enableCassandraConnector: "${bool}", enableFreeTier: "${bool}", enableMultipleWriteLocations: "${bool}", enablePartitionMerge: "${bool}", ipRules: [{ipAddressOrRange: "string"}], isVirtualNetworkFilterEnabled: "${bool}", keyVaultKeyUri: "string", locations: [{failoverPriority: "${int}", isZoneRedundant: "${bool}", locationName: "string"}], minimalTlsVersion: "string", networkAclBypass: "string", networkAclBypassResourceIds: ["string"], publicNetworkAccess: "string", restoreParameters: {databasesToRestore: [{collectionNames: ["string"], databaseName: "string"}], gremlinDatabasesToRestore: [{databaseName: "string", graphNames: ["string"]}], restoreMode: "PointInTime", restoreSource: "string", restoreTimestampInUtc: "string", tablesToRestore: ["string"]}, virtualNetworkRules: [{id: "string", ignoreMissingVNetServiceEndpoint: "${bool}"}]}, kind: "string"}
    );
  }
}
