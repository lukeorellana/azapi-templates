```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DocumentDB/databaseAccounts@2023-04-15"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  identity {
    type = "string"
    identity_ids = []
  }
  body = jsonencode({
    properties = {
      analyticalStorageConfiguration = {
        schemaType = "string"
      }
      apiProperties = {
        serverVersion = "string"
      }
      backupPolicy = {
        migrationState = {
          startTime = "string"
          status = "string"
          targetType = "string"
        }
        type = "string"
        // For remaining properties, see BackupPolicy objects
      }
      capabilities = [
        {
          name = "string"
        }
      ]
      capacity = {
        totalThroughputLimit = int
      }
      connectorOffer = "Small"
      consistencyPolicy = {
        defaultConsistencyLevel = "string"
        maxIntervalInSeconds = int
        maxStalenessPrefix = int
      }
      cors = [
        {
          allowedHeaders = "string"
          allowedMethods = "string"
          allowedOrigins = "string"
          exposedHeaders = "string"
          maxAgeInSeconds = int
        }
      ]
      createMode = "string"
      databaseAccountOfferType = "Standard"
      defaultIdentity = "string"
      disableKeyBasedMetadataWriteAccess = bool
      disableLocalAuth = bool
      enableAnalyticalStorage = bool
      enableAutomaticFailover = bool
      enableCassandraConnector = bool
      enableFreeTier = bool
      enableMultipleWriteLocations = bool
      enablePartitionMerge = bool
      ipRules = [
        {
          ipAddressOrRange = "string"
        }
      ]
      isVirtualNetworkFilterEnabled = bool
      keyVaultKeyUri = "string"
      locations = [
        {
          failoverPriority = int
          isZoneRedundant = bool
          locationName = "string"
        }
      ]
      minimalTlsVersion = "string"
      networkAclBypass = "string"
      networkAclBypassResourceIds = [
        "string"
      ]
      publicNetworkAccess = "string"
      restoreParameters = {
        databasesToRestore = [
          {
            collectionNames = [
              "string"
            ]
            databaseName = "string"
          }
        ]
        gremlinDatabasesToRestore = [
          {
            databaseName = "string"
            graphNames = [
              "string"
            ]
          }
        ]
        restoreMode = "PointInTime"
        restoreSource = "string"
        restoreTimestampInUtc = "string"
        tablesToRestore = [
          "string"
        ]
      }
      virtualNetworkRules = [
        {
          id = "string"
          ignoreMissingVNetServiceEndpoint = bool
        }
      ]
    }
    kind = "string"
  })
}

```

### databaseAccounts

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 3-44Valid characters:Lowercase letters, numbers, and hyphens.Start with lowercase letter or number.Resource name must be unique across Azure. |
| location | The location of the resource group to which the resource belongs. | string |
| tags | Tags are a list of key-value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. For example, the default experience for a template type is set with "defaultExperience": "Cassandra". Current "defaultExperience" values also include "Table", "Graph", "DocumentDB", and "MongoDB". | Dictionary of tag names and values. SeeTags in templates |
| kind | Indicates the type of database account. This can only be set at database account creation. | 'GlobalDocumentDB''MongoDB''Parse' |
| identity | Identity for the resource. | ManagedServiceIdentity |
| properties | Properties to create and update Azure Cosmos DB database accounts. | DatabaseAccountCreateUpdatePropertiesOrDatabaseAccou...(required) |


### ManagedServiceIdentity

| Name | Description | Value |
|-|-|-|
| type | The type of identity used for the resource. The type 'SystemAssigned,UserAssigned' includes both an implicitly created identity and a set of user assigned identities. The type 'None' will remove any identities from the service. | 'None''SystemAssigned''SystemAssigned,UserAssigned''UserAssigned' |
| userAssignedIdentities | The list of user identities associated with resource. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'. | object |


### DatabaseAccountCreateUpdatePropertiesOrDatabaseAccou...

| Name | Description | Value |
|-|-|-|
| analyticalStorageConfiguration | Analytical storage specific properties. | AnalyticalStorageConfiguration |
| apiProperties | API specific properties. Currently, supported only for MongoDB API. | ApiProperties |
| backupPolicy | The object representing the policy for taking backups on an account. | BackupPolicy |
| capabilities | List of Cosmos DB capabilities for the account | Capability[] |
| capacity | The object that represents all properties related to capacity enforcement on an account. | Capacity |
| connectorOffer | The cassandra connector offer type for the Cosmos DB database C* account. | 'Small' |
| consistencyPolicy | The consistency policy for the Cosmos DB account. | ConsistencyPolicy |
| cors | The CORS policy for the Cosmos DB database account. | CorsPolicy[] |
| createMode | Enum to indicate the mode of account creation. | 'Default''Restore' |
| databaseAccountOfferType | The offer type for the database | 'Standard' (required) |
| defaultIdentity | The default identity for accessing key vault used in features like customer managed keys. The default identity needs to be explicitly set by the users. It can be "FirstPartyIdentity", "SystemAssignedIdentity" and more. | string |
| disableKeyBasedMetadataWriteAccess | Disable write operations on metadata resources (databases, containers, throughput) via account keys | bool |
| disableLocalAuth | Opt-out of local authentication and ensure only MSI and AAD can be used exclusively for authentication. | bool |
| enableAnalyticalStorage | Flag to indicate whether to enable storage analytics. | bool |
| enableAutomaticFailover | Enables automatic failover of the write region in the rare event that the region is unavailable due to an outage. Automatic failover will result in a new write region for the account and is chosen based on the failover priorities configured for the account. | bool |
| enableCassandraConnector | Enables the cassandra connector on the Cosmos DB C* account | bool |
| enableFreeTier | Flag to indicate whether Free Tier is enabled. | bool |
| enableMultipleWriteLocations | Enables the account to write in multiple locations | bool |
| enablePartitionMerge | Flag to indicate enabling/disabling of Partition Merge feature on the account | bool |
| ipRules | List of IpRules. | IpAddressOrRange[] |
| isVirtualNetworkFilterEnabled | Flag to indicate whether to enable/disable Virtual Network ACL rules. | bool |
| keyVaultKeyUri | The URI of the key vault | string |
| locations | An array that contains the georeplication locations enabled for the Cosmos DB account. | Location[] (required) |
| minimalTlsVersion | Indicates the minimum allowed Tls version. The default is Tls 1.0, except for Cassandra and Mongo API's, which only work with Tls 1.2. | 'Tls''Tls11''Tls12' |
| networkAclBypass | Indicates what services are allowed to bypass firewall checks. | 'AzureServices''None' |
| networkAclBypassResourceIds | An array that contains the Resource Ids for Network Acl Bypass for the Cosmos DB account. | string[] |
| publicNetworkAccess | Whether requests from Public Network are allowed | 'Disabled''Enabled''SecuredByPerimeter' |
| restoreParameters | Parameters to indicate the information about the restore. | RestoreParameters |
| virtualNetworkRules | List of Virtual Network ACL rules configured for the Cosmos DB account. | VirtualNetworkRule[] |


### AnalyticalStorageConfiguration

| Name | Description | Value |
|-|-|-|
| schemaType | Describes the types of schema for analytical storage. | 'FullFidelity''WellDefined' |


### ApiProperties

| Name | Description | Value |
|-|-|-|
| serverVersion | Describes the ServerVersion of an a MongoDB account. | '3.2''3.6''4.0''4.2' |


### BackupPolicy

| Name | Description | Value |
|-|-|-|
| migrationState | The object representing the state of the migration between the backup policies. | BackupPolicyMigrationState |
| type | Set the object type | ContinuousPeriodic(required) |


### BackupPolicyMigrationState

| Name | Description | Value |
|-|-|-|
| startTime | Time at which the backup policy migration started (ISO-8601 format). | string |
| status | Describes the status of migration between backup policy types. | 'Completed''Failed''InProgress''Invalid' |
| targetType | Describes the target backup policy type of the backup policy migration. | 'Continuous''Periodic' |


### ContinuousModeBackupPolicy

| Name | Description | Value |
|-|-|-|
| type | Describes the mode of backups. | 'Continuous' (required) |
| continuousModeProperties | Configuration values for continuous mode backup | ContinuousModeProperties |


### ContinuousModeProperties

| Name | Description | Value |
|-|-|-|
| tier | Enum to indicate type of Continuous backup mode | 'Continuous30Days''Continuous7Days' |


### PeriodicModeBackupPolicy

| Name | Description | Value |
|-|-|-|
| type | Describes the mode of backups. | 'Periodic' (required) |
| periodicModeProperties | Configuration values for periodic mode backup | PeriodicModeProperties |


### PeriodicModeProperties

| Name | Description | Value |
|-|-|-|
| backupIntervalInMinutes | An integer representing the interval in minutes between two backups | int |
| backupRetentionIntervalInHours | An integer representing the time (in hours) that each backup is retained | int |
| backupStorageRedundancy | Enum to indicate type of backup residency | 'Geo''Local''Zone' |


### Capability

| Name | Description | Value |
|-|-|-|
| name | Name of the Cosmos DB capability. For example, "name": "EnableCassandra". Current values also include "EnableTable" and "EnableGremlin". | string |


### Capacity

| Name | Description | Value |
|-|-|-|
| totalThroughputLimit | The total throughput limit imposed on the account. A totalThroughputLimit of 2000 imposes a strict limit of max throughput that can be provisioned on that account to be 2000. A totalThroughputLimit of -1 indicates no limits on provisioning of throughput. | int |


### ConsistencyPolicy

| Name | Description | Value |
|-|-|-|
| defaultConsistencyLevel | The default consistency level and configuration settings of the Cosmos DB account. | 'BoundedStaleness''ConsistentPrefix''Eventual''Session''Strong' (required) |
| maxIntervalInSeconds | When used with the Bounded Staleness consistency level, this value represents the time amount of staleness (in seconds) tolerated. Accepted range for this value is 5 - 86400. Required when defaultConsistencyPolicy is set to 'BoundedStaleness'. | int |
| maxStalenessPrefix | When used with the Bounded Staleness consistency level, this value represents the number of stale requests tolerated. Accepted range for this value is 1 â 2,147,483,647. Required when defaultConsistencyPolicy is set to 'BoundedStaleness'. | int |


### CorsPolicy

| Name | Description | Value |
|-|-|-|
| allowedHeaders | The request headers that the origin domain may specify on the CORS request. | string |
| allowedMethods | The methods (HTTP request verbs) that the origin domain may use for a CORS request. | string |
| allowedOrigins | The origin domains that are permitted to make a request against the service via CORS. | string (required) |
| exposedHeaders | The response headers that may be sent in the response to the CORS request and exposed by the browser to the request issuer. | string |
| maxAgeInSeconds | The maximum amount time that a browser should cache the preflight OPTIONS request. | int |


### IpAddressOrRange

| Name | Description | Value |
|-|-|-|
| ipAddressOrRange | A single IPv4 address or a single IPv4 address range in CIDR format. Provided IPs must be well-formatted and cannot be contained in one of the following ranges: 10.0.0.0/8, 100.64.0.0/10, 172.16.0.0/12, 192.168.0.0/16, since these are not enforceable by the IP address filter. Example of valid inputs: â23.40.210.245â or â23.40.210.0/8â. | string |


### Location

| Name | Description | Value |
|-|-|-|
| failoverPriority | The failover priority of the region. A failover priority of 0 indicates a write region. The maximum value for a failover priority = (total number of regions - 1). Failover priority values must be unique for each of the regions in which the database account exists. | int |
| isZoneRedundant | Flag to indicate whether or not this region is an AvailabilityZone region | bool |
| locationName | The name of the region. | string |


### RestoreParameters

| Name | Description | Value |
|-|-|-|
| databasesToRestore | List of specific databases available for restore. | DatabaseRestoreResource[] |
| gremlinDatabasesToRestore | List of specific gremlin databases available for restore. | GremlinDatabaseRestoreResource[] |
| restoreMode | Describes the mode of the restore. | 'PointInTime' |
| restoreSource | The id of the restorable database account from which the restore has to be initiated. For example: /subscriptions/{subscriptionId}/providers/Microsoft.DocumentDB/locations/{location}/restorableDatabaseAccounts/{restorableDatabaseAccountName} | string |
| restoreTimestampInUtc | Time to which the account has to be restored (ISO-8601 format). | string |
| tablesToRestore | List of specific tables available for restore. | string[] |


### DatabaseRestoreResource

| Name | Description | Value |
|-|-|-|
| collectionNames | The names of the collections available for restore. | string[] |
| databaseName | The name of the database available for restore. | string |


### GremlinDatabaseRestoreResource

| Name | Description | Value |
|-|-|-|
| databaseName | The name of the gremlin database available for restore. | string |
| graphNames | The names of the graphs available for restore. | string[] |


### VirtualNetworkRule

| Name | Description | Value |
|-|-|-|
| id | Resource ID of a subnet, for example: /subscriptions/{subscriptionId}/resourceGroups/{groupName}/providers/Microsoft.Network/virtualNetworks/{virtualNetworkName}/subnets/{subnetName}. | string |
| ignoreMissingVNetServiceEndpoint | Create firewall rule before the virtual network has vnet service endpoint enabled. | bool |


