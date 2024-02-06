## Microsoft.DocumentDB/cassandraClusters@2023-04-15

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DocumentDB/cassandraClusters@2023-04-15"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  identity {
    type =  "SystemAssigned"
  }
  body = jsonencode({
    properties = {
      authenticationMethod = "string"
      cassandraAuditLoggingEnabled = bool
      cassandraVersion = "string"
      clientCertificates = [
        {
          pem = "string"
        }
      ]
      clusterNameOverride = "string"
      deallocated = bool
      delegatedManagementSubnetId = "string"
      externalGossipCertificates = [
        {
          pem = "string"
        }
      ]
      externalSeedNodes = [
        {
          ipAddress = "string"
        }
      ]
      hoursBetweenBackups = int
      initialCassandraAdminPassword = "string"
      prometheusEndpoint = {
        ipAddress = "string"
      }
      provisionError = {
        additionalErrorInfo = "string"
        code = "string"
        message = "string"
        target = "string"
      }
      provisioningState = "string"
      repairEnabled = bool
      restoreFromBackupId = "string"
    }
  })
}

```

### cassandraClusters

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | The location of the resource group to which the resource belongs. | string |
| tags | Tags are a list of key-value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. For example, the default experience for a template type is set with "defaultExperience": "Cassandra". Current "defaultExperience" values also include "Table", "Graph", "DocumentDB", and "MongoDB". | Dictionary of tag names and values. SeeTags in templates |
| identity | Identity for the resource. | ManagedCassandraManagedServiceIdentity |
| properties | Properties of a managed Cassandra cluster. | ClusterResourceProperties |


### ManagedCassandraManagedServiceIdentity

| Name | Description | Value |
|-|-|-|
| type | The type of the resource. | 'None''SystemAssigned' |


### ClusterResourceProperties

| Name | Description | Value |
|-|-|-|
| authenticationMethod | Which authentication method Cassandra should use to authenticate clients. 'None' turns off authentication, so should not be used except in emergencies. 'Cassandra' is the default password based authentication. The default is 'Cassandra'. | 'Cassandra''Ldap''None' |
| cassandraAuditLoggingEnabled | Whether Cassandra audit logging is enabled | bool |
| cassandraVersion | Which version of Cassandra should this cluster converge to running (e.g., 3.11). When updated, the cluster may take some time to migrate to the new version. | string |
| clientCertificates | List of TLS certificates used to authorize clients connecting to the cluster. All connections are TLS encrypted whether clientCertificates is set or not, but if clientCertificates is set, the managed Cassandra cluster will reject all connections not bearing a TLS client certificate that can be validated from one or more of the public certificates in this property. | Certificate[] |
| clusterNameOverride | If you need to set the clusterName property in cassandra.yaml to something besides the resource name of the cluster, set the value to use on this property. | string |
| deallocated | Whether the cluster and associated data centers has been deallocated. | bool |
| delegatedManagementSubnetId | Resource id of a subnet that this cluster's management service should have its network interface attached to. The subnet must be routable to all subnets that will be delegated to data centers. The resource id must be of the form '/subscriptions/{subscription id}/resourceGroups/{resource group}/providers/Microsoft.Network/virtualNetworks/{virtual network}/subnets/{subnet}' | string |
| externalGossipCertificates | List of TLS certificates used to authorize gossip from unmanaged data centers. The TLS certificates of all nodes in unmanaged data centers must be verifiable using one of the certificates provided in this property. | Certificate[] |
| externalSeedNodes | List of IP addresses of seed nodes in unmanaged data centers. These will be added to the seed node lists of all managed nodes. | SeedNode[] |
| hoursBetweenBackups | (Deprecated) Number of hours to wait between taking a backup of the cluster. | int |
| initialCassandraAdminPassword | Initial password for clients connecting as admin to the cluster. Should be changed after cluster creation. Returns null on GET. This field only applies when the authenticationMethod field is 'Cassandra'. | string |
| prometheusEndpoint | Hostname or IP address where the Prometheus endpoint containing data about the managed Cassandra nodes can be reached. | SeedNode |
| provisionError | Error related to resource provisioning. | CassandraError |
| provisioningState | The status of the resource at the time the operation was called. | 'Canceled''Creating''Deleting''Failed''Succeeded''Updating' |
| repairEnabled | Should automatic repairs run on this cluster? If omitted, this is true, and should stay true unless you are running a hybrid cluster where you are already doing your own repairs. | bool |
| restoreFromBackupId | To create an empty cluster, omit this field or set it to null. To restore a backup into a new cluster, set this field to the resource id of the backup. | string |


### Certificate

| Name | Description | Value |
|-|-|-|
| pem | PEM formatted public key. | string |


### SeedNode

| Name | Description | Value |
|-|-|-|
| ipAddress | IP address of this seed node. | string |


### CassandraError

| Name | Description | Value |
|-|-|-|
| additionalErrorInfo | Additional information about the error. | string |
| code | The code of error that occurred. | string |
| message | The message of the error. | string |
| target | The target resource of the error. | string |
## Microsoft.DocumentDB/cassandraClusters/dataCenters@2023-04-15

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DocumentDB/cassandraClusters/dataCenters@2023-04-15"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      authenticationMethodLdapProperties = {
        connectionTimeoutInMs = int
        searchBaseDistinguishedName = "string"
        searchFilterTemplate = "string"
        serverCertificates = [
          {
            pem = "string"
          }
        ]
        serverHostname = "string"
        serverPort = int
        serviceUserDistinguishedName = "string"
        serviceUserPassword = "string"
      }
      availabilityZone = bool
      backupStorageCustomerKeyUri = "string"
      base64EncodedCassandraYamlFragment = "string"
      dataCenterLocation = "string"
      deallocated = bool
      delegatedSubnetId = "string"
      diskCapacity = int
      diskSku = "string"
      managedDiskCustomerKeyUri = "string"
      nodeCount = int
      provisionError = {
        additionalErrorInfo = "string"
        code = "string"
        message = "string"
        target = "string"
      }
      provisioningState = "string"
      sku = "string"
    }
  })
}

```

### cassandraClusters/dataCenters

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:cassandraClusters |
| properties | Properties of a managed Cassandra data center. | DataCenterResourceProperties |


### DataCenterResourceProperties

| Name | Description | Value |
|-|-|-|
| authenticationMethodLdapProperties | Ldap authentication method properties. This feature is in preview. | AuthenticationMethodLdapProperties |
| availabilityZone | If the data center has Availability Zone support, apply it to the Virtual Machine ScaleSet that host the cassandra data center virtual machines. | bool |
| backupStorageCustomerKeyUri | Indicates the Key Uri of the customer key to use for encryption of the backup storage account. | string |
| base64EncodedCassandraYamlFragment | A fragment of a cassandra.yaml configuration file to be included in the cassandra.yaml for all nodes in this data center. The fragment should be Base64 encoded, and only a subset of keys are allowed. | string |
| dataCenterLocation | The region this data center should be created in. | string |
| deallocated | Whether the data center has been deallocated. | bool |
| delegatedSubnetId | Resource id of a subnet the nodes in this data center should have their network interfaces connected to. The subnet must be in the same region specified in 'dataCenterLocation' and must be able to route to the subnet specified in the cluster's 'delegatedManagementSubnetId' property. This resource id will be of the form '/subscriptions/{subscription id}/resourceGroups/{resource group}/providers/Microsoft.Network/virtualNetworks/{virtual network}/subnets/{subnet}'. | string |
| diskCapacity | Number of disks attached to each node. Default is 4. | int |
| diskSku | Disk SKU used for data centers. Default value is P30. | string |
| managedDiskCustomerKeyUri | Key uri to use for encryption of managed disks. Ensure the system assigned identity of the cluster has been assigned appropriate permissions(key get/wrap/unwrap permissions) on the key. | string |
| nodeCount | The number of nodes the data center should have. This is the desired number. After it is set, it may take some time for the data center to be scaled to match. To monitor the number of nodes and their status, use the fetchNodeStatus method on the cluster. | int |
| provisionError | Error related to resource provisioning. | CassandraError |
| provisioningState | The status of the resource at the time the operation was called. | 'Canceled''Creating''Deleting''Failed''Succeeded''Updating' |
| sku | Virtual Machine SKU used for data centers. Default value is Standard_DS14_v2 | string |


### AuthenticationMethodLdapProperties

| Name | Description | Value |
|-|-|-|
| connectionTimeoutInMs | Timeout for connecting to the LDAP server in miliseconds. The default is 5000 ms. | int |
| searchBaseDistinguishedName | Distinguished name of the object to start the recursive search of users from. | string |
| searchFilterTemplate | Template to use for searching. Defaults to (cn=%s) where %s will be replaced by the username used to login. | string |
| serverCertificates |  | Certificate[] |
| serverHostname | Hostname of the LDAP server. | string |
| serverPort | Port of the LDAP server. | int |
| serviceUserDistinguishedName | Distinguished name of the look up user account, who can look up user details on authentication. | string |
| serviceUserPassword | Password of the look up user. | string |


### Certificate

| Name | Description | Value |
|-|-|-|
| pem | PEM formatted public key. | string |


### CassandraError

| Name | Description | Value |
|-|-|-|
| additionalErrorInfo | Additional information about the error. | string |
| code | The code of error that occurred. | string |
| message | The message of the error. | string |
| target | The target resource of the error. | string |
## Microsoft.DocumentDB/databaseAccounts@2023-04-15

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
## Microsoft.DocumentDB/databaseAccounts/apis/databases@2016-03-31

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DocumentDB/databaseAccounts/apis/databases@2016-03-31"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      options = {}
      resource = {
        id = "string"
      }
    }
  })
}

```

### databaseAccounts/apis/databases

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type: apis |
| properties | Properties to create and update Azure Cosmos DB SQL database. | SqlDatabaseCreateUpdatePropertiesOrSqlDatabaseProper...(required) |


### SqlDatabaseCreateUpdatePropertiesOrSqlDatabaseProper...

| Name | Description | Value |
|-|-|-|
| options | A key-value pair of options to be applied for the request. This corresponds to the headers sent with the request. | object (required) |
| resource | The standard JSON format of a SQL database | SqlDatabaseResource(required) |


### SqlDatabaseResource

| Name | Description | Value |
|-|-|-|
| id | Name of the Cosmos DB SQL database | string (required) |
## Microsoft.DocumentDB/databaseAccounts/apis/databases/collections@2016-03-31

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DocumentDB/databaseAccounts/apis/databases/collections@2016-03-31"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      options = {}
      resource = {
        id = "string"
        indexes = [
          {
            key = {
              keys = [
                "string"
              ]
            }
            options = {
              expireAfterSeconds = int
              unique = bool
            }
          }
        ]
        shardKey = {}
      }
    }
  })
}

```

### databaseAccounts/apis/databases/collections

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:databases |
| properties | Properties to create and update Azure Cosmos DB MongoDB collection. | MongoDBCollectionCreateUpdatePropertiesOrMongoDBColl...(required) |


### MongoDBCollectionCreateUpdatePropertiesOrMongoDBColl...

| Name | Description | Value |
|-|-|-|
| options | A key-value pair of options to be applied for the request. This corresponds to the headers sent with the request. | object (required) |
| resource | The standard JSON format of a MongoDB collection | MongoDBCollectionResource(required) |


### MongoDBCollectionResource

| Name | Description | Value |
|-|-|-|
| id | Name of the Cosmos DB MongoDB collection | string (required) |
| indexes | List of index keys | MongoIndex[] |
| shardKey | A key-value pair of shard keys to be applied for the request. | object |


### MongoIndex

| Name | Description | Value |
|-|-|-|
| key | Cosmos DB MongoDB collection index keys | MongoIndexKeys |
| options | Cosmos DB MongoDB collection index key options | MongoIndexOptions |


### MongoIndexKeys

| Name | Description | Value |
|-|-|-|
| keys | List of keys for each MongoDB collection in the Azure Cosmos DB service | string[] |


### MongoIndexOptions

| Name | Description | Value |
|-|-|-|
| expireAfterSeconds | Expire after seconds | int |
| unique | Is unique or not | bool |
## Microsoft.DocumentDB/databaseAccounts/apis/databases/collections/settings@2016-03-31

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DocumentDB/databaseAccounts/apis/databases/collections/settings@2016-03-31"
  name = "throughput"
  parent_id = "string"
  body = jsonencode({
    properties = {
      resource = {
        throughput = int
      }
    }
  })
}

```

### databaseAccounts/apis/databases/collections/settings

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'throughput' |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:collections |
| properties | Properties to update Azure Cosmos DB resource throughput. | ThroughputUpdatePropertiesOrThroughputProperties(required) |


### ThroughputUpdatePropertiesOrThroughputProperties

| Name | Description | Value |
|-|-|-|
| resource | The standard JSON format of a resource throughput | ThroughputResource(required) |


### ThroughputResource

| Name | Description | Value |
|-|-|-|
| throughput | Value of the Cosmos DB resource throughput | int (required) |
## Microsoft.DocumentDB/databaseAccounts/apis/databases/containers@2016-03-31

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DocumentDB/databaseAccounts/apis/databases/containers@2016-03-31"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      options = {}
      resource = {
        conflictResolutionPolicy = {
          conflictResolutionPath = "string"
          conflictResolutionProcedure = "string"
          mode = "string"
        }
        defaultTtl = int
        id = "string"
        indexingPolicy = {
          automatic = bool
          excludedPaths = [
            {
              path = "string"
            }
          ]
          includedPaths = [
            {
              indexes = [
                {
                  dataType = "string"
                  kind = "string"
                  precision = int
                }
              ]
              path = "string"
            }
          ]
          indexingMode = "string"
        }
        partitionKey = {
          kind = "string"
          paths = [
            "string"
          ]
        }
        uniqueKeyPolicy = {
          uniqueKeys = [
            {
              paths = [
                "string"
              ]
            }
          ]
        }
      }
    }
  })
}

```

### databaseAccounts/apis/databases/containers

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:databases |
| properties | Properties to create and update Azure Cosmos DB container. | SqlContainerCreateUpdatePropertiesOrSqlContainerProp...(required) |


### SqlContainerCreateUpdatePropertiesOrSqlContainerProp...

| Name | Description | Value |
|-|-|-|
| options | A key-value pair of options to be applied for the request. This corresponds to the headers sent with the request. | object (required) |
| resource | The standard JSON format of a container | SqlContainerResource(required) |


### SqlContainerResource

| Name | Description | Value |
|-|-|-|
| conflictResolutionPolicy | The conflict resolution policy for the container. | ConflictResolutionPolicy |
| defaultTtl | Default time to live | int |
| id | Name of the Cosmos DB SQL container | string (required) |
| indexingPolicy | The configuration of the indexing policy. By default, the indexing is automatic for all document paths within the container | IndexingPolicy |
| partitionKey | The configuration of the partition key to be used for partitioning data into multiple partitions | ContainerPartitionKey |
| uniqueKeyPolicy | The unique key policy configuration for specifying uniqueness constraints on documents in the collection in the Azure Cosmos DB service. | UniqueKeyPolicy |


### ConflictResolutionPolicy

| Name | Description | Value |
|-|-|-|
| conflictResolutionPath | The conflict resolution path in the case of LastWriterWins mode. | string |
| conflictResolutionProcedure | The procedure to resolve conflicts in the case of custom mode. | string |
| mode | Indicates the conflict resolution mode. | 'Custom''LastWriterWins' |


### IndexingPolicy

| Name | Description | Value |
|-|-|-|
| automatic | Indicates if the indexing policy is automatic | bool |
| excludedPaths | List of paths to exclude from indexing | ExcludedPath[] |
| includedPaths | List of paths to include in the indexing | IncludedPath[] |
| indexingMode | Indicates the indexing mode. | 'Consistent''Lazy''None' |


### ExcludedPath

| Name | Description | Value |
|-|-|-|
| path | The path for which the indexing behavior applies to. Index paths typically start with root and end with wildcard (/path/*) | string |


### IncludedPath

| Name | Description | Value |
|-|-|-|
| indexes | List of indexes for this path | Indexes[] |
| path | The path for which the indexing behavior applies to. Index paths typically start with root and end with wildcard (/path/*) | string |


### Indexes

| Name | Description | Value |
|-|-|-|
| dataType | The datatype for which the indexing behavior is applied to. | 'LineString''MultiPolygon''Number''Point''Polygon''String' |
| kind | Indicates the type of index. | 'Hash''Range''Spatial' |
| precision | The precision of the index. -1 is maximum precision. | int |


### ContainerPartitionKey

| Name | Description | Value |
|-|-|-|
| kind | Indicates the kind of algorithm used for partitioning | 'Hash''Range' |
| paths | List of paths using which data within the container can be partitioned | string[] |


### UniqueKeyPolicy

| Name | Description | Value |
|-|-|-|
| uniqueKeys | List of unique keys on that enforces uniqueness constraint on documents in the collection in the Azure Cosmos DB service. | UniqueKey[] |


### UniqueKey

| Name | Description | Value |
|-|-|-|
| paths | List of paths must be unique for each document in the Azure Cosmos DB service | string[] |
## Microsoft.DocumentDB/databaseAccounts/apis/databases/containers/settings@2016-03-31

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DocumentDB/databaseAccounts/apis/databases/containers/settings@2016-03-31"
  name = "throughput"
  parent_id = "string"
  body = jsonencode({
    properties = {
      resource = {
        throughput = int
      }
    }
  })
}

```

### databaseAccounts/apis/databases/containers/settings

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'throughput' |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:containers |
| properties | Properties to update Azure Cosmos DB resource throughput. | ThroughputUpdatePropertiesOrThroughputProperties(required) |


### ThroughputUpdatePropertiesOrThroughputProperties

| Name | Description | Value |
|-|-|-|
| resource | The standard JSON format of a resource throughput | ThroughputResource(required) |


### ThroughputResource

| Name | Description | Value |
|-|-|-|
| throughput | Value of the Cosmos DB resource throughput | int (required) |
## Microsoft.DocumentDB/databaseAccounts/apis/databases/graphs@2016-03-31

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DocumentDB/databaseAccounts/apis/databases/graphs@2016-03-31"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      options = {}
      resource = {
        conflictResolutionPolicy = {
          conflictResolutionPath = "string"
          conflictResolutionProcedure = "string"
          mode = "string"
        }
        defaultTtl = int
        id = "string"
        indexingPolicy = {
          automatic = bool
          excludedPaths = [
            {
              path = "string"
            }
          ]
          includedPaths = [
            {
              indexes = [
                {
                  dataType = "string"
                  kind = "string"
                  precision = int
                }
              ]
              path = "string"
            }
          ]
          indexingMode = "string"
        }
        partitionKey = {
          kind = "string"
          paths = [
            "string"
          ]
        }
        uniqueKeyPolicy = {
          uniqueKeys = [
            {
              paths = [
                "string"
              ]
            }
          ]
        }
      }
    }
  })
}

```

### databaseAccounts/apis/databases/graphs

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:databases |
| properties | Properties to create and update Azure Cosmos DB Gremlin graph. | GremlinGraphCreateUpdatePropertiesOrGremlinGraphProp...(required) |


### GremlinGraphCreateUpdatePropertiesOrGremlinGraphProp...

| Name | Description | Value |
|-|-|-|
| options | A key-value pair of options to be applied for the request. This corresponds to the headers sent with the request. | object (required) |
| resource | The standard JSON format of a Gremlin graph | GremlinGraphResource(required) |


### GremlinGraphResource

| Name | Description | Value |
|-|-|-|
| conflictResolutionPolicy | The conflict resolution policy for the graph. | ConflictResolutionPolicy |
| defaultTtl | Default time to live | int |
| id | Name of the Cosmos DB Gremlin graph | string (required) |
| indexingPolicy | The configuration of the indexing policy. By default, the indexing is automatic for all document paths within the graph | IndexingPolicy |
| partitionKey | The configuration of the partition key to be used for partitioning data into multiple partitions | ContainerPartitionKey |
| uniqueKeyPolicy | The unique key policy configuration for specifying uniqueness constraints on documents in the collection in the Azure Cosmos DB service. | UniqueKeyPolicy |


### ConflictResolutionPolicy

| Name | Description | Value |
|-|-|-|
| conflictResolutionPath | The conflict resolution path in the case of LastWriterWins mode. | string |
| conflictResolutionProcedure | The procedure to resolve conflicts in the case of custom mode. | string |
| mode | Indicates the conflict resolution mode. | 'Custom''LastWriterWins' |


### IndexingPolicy

| Name | Description | Value |
|-|-|-|
| automatic | Indicates if the indexing policy is automatic | bool |
| excludedPaths | List of paths to exclude from indexing | ExcludedPath[] |
| includedPaths | List of paths to include in the indexing | IncludedPath[] |
| indexingMode | Indicates the indexing mode. | 'Consistent''Lazy''None' |


### ExcludedPath

| Name | Description | Value |
|-|-|-|
| path | The path for which the indexing behavior applies to. Index paths typically start with root and end with wildcard (/path/*) | string |


### IncludedPath

| Name | Description | Value |
|-|-|-|
| indexes | List of indexes for this path | Indexes[] |
| path | The path for which the indexing behavior applies to. Index paths typically start with root and end with wildcard (/path/*) | string |


### Indexes

| Name | Description | Value |
|-|-|-|
| dataType | The datatype for which the indexing behavior is applied to. | 'LineString''MultiPolygon''Number''Point''Polygon''String' |
| kind | Indicates the type of index. | 'Hash''Range''Spatial' |
| precision | The precision of the index. -1 is maximum precision. | int |


### ContainerPartitionKey

| Name | Description | Value |
|-|-|-|
| kind | Indicates the kind of algorithm used for partitioning | 'Hash''Range' |
| paths | List of paths using which data within the container can be partitioned | string[] |


### UniqueKeyPolicy

| Name | Description | Value |
|-|-|-|
| uniqueKeys | List of unique keys on that enforces uniqueness constraint on documents in the collection in the Azure Cosmos DB service. | UniqueKey[] |


### UniqueKey

| Name | Description | Value |
|-|-|-|
| paths | List of paths must be unique for each document in the Azure Cosmos DB service | string[] |
## Microsoft.DocumentDB/databaseAccounts/apis/databases/graphs/settings@2016-03-31

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DocumentDB/databaseAccounts/apis/databases/graphs/settings@2016-03-31"
  name = "throughput"
  parent_id = "string"
  body = jsonencode({
    properties = {
      resource = {
        throughput = int
      }
    }
  })
}

```

### databaseAccounts/apis/databases/graphs/settings

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'throughput' |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:graphs |
| properties | Properties to update Azure Cosmos DB resource throughput. | ThroughputUpdatePropertiesOrThroughputProperties(required) |


### ThroughputUpdatePropertiesOrThroughputProperties

| Name | Description | Value |
|-|-|-|
| resource | The standard JSON format of a resource throughput | ThroughputResource(required) |


### ThroughputResource

| Name | Description | Value |
|-|-|-|
| throughput | Value of the Cosmos DB resource throughput | int (required) |
## Microsoft.DocumentDB/databaseAccounts/apis/databases/settings@2016-03-31

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DocumentDB/databaseAccounts/apis/databases/settings@2016-03-31"
  name = "throughput"
  parent_id = "string"
  body = jsonencode({
    properties = {
      resource = {
        throughput = int
      }
    }
  })
}

```

### databaseAccounts/apis/databases/settings

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'throughput' |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:databases |
| properties | Properties to update Azure Cosmos DB resource throughput. | ThroughputUpdatePropertiesOrThroughputProperties(required) |


### ThroughputUpdatePropertiesOrThroughputProperties

| Name | Description | Value |
|-|-|-|
| resource | The standard JSON format of a resource throughput | ThroughputResource(required) |


### ThroughputResource

| Name | Description | Value |
|-|-|-|
| throughput | Value of the Cosmos DB resource throughput | int (required) |
## Microsoft.DocumentDB/databaseAccounts/apis/keyspaces@2016-03-31

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DocumentDB/databaseAccounts/apis/keyspaces@2016-03-31"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      options = {}
      resource = {
        id = "string"
      }
    }
  })
}

```

### databaseAccounts/apis/keyspaces

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type: apis |
| properties | Properties to create and update Azure Cosmos DB Cassandra keyspace. | CassandraKeyspaceCreateUpdatePropertiesOrCassandraKe...(required) |


### CassandraKeyspaceCreateUpdatePropertiesOrCassandraKe...

| Name | Description | Value |
|-|-|-|
| options | A key-value pair of options to be applied for the request. This corresponds to the headers sent with the request. | object (required) |
| resource | The standard JSON format of a Cassandra keyspace | CassandraKeyspaceResource(required) |


### CassandraKeyspaceResource

| Name | Description | Value |
|-|-|-|
| id | Name of the Cosmos DB Cassandra keyspace | string (required) |
## Microsoft.DocumentDB/databaseAccounts/apis/keyspaces/settings@2016-03-31

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DocumentDB/databaseAccounts/apis/keyspaces/settings@2016-03-31"
  name = "throughput"
  parent_id = "string"
  body = jsonencode({
    properties = {
      resource = {
        throughput = int
      }
    }
  })
}

```

### databaseAccounts/apis/keyspaces/settings

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'throughput' |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:keyspaces |
| properties | Properties to update Azure Cosmos DB resource throughput. | ThroughputUpdatePropertiesOrThroughputProperties(required) |


### ThroughputUpdatePropertiesOrThroughputProperties

| Name | Description | Value |
|-|-|-|
| resource | The standard JSON format of a resource throughput | ThroughputResource(required) |


### ThroughputResource

| Name | Description | Value |
|-|-|-|
| throughput | Value of the Cosmos DB resource throughput | int (required) |
## Microsoft.DocumentDB/databaseAccounts/apis/keyspaces/tables@2016-03-31

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DocumentDB/databaseAccounts/apis/keyspaces/tables@2016-03-31"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      options = {}
      resource = {
        defaultTtl = int
        id = "string"
        schema = {
          clusterKeys = [
            {
              name = "string"
              orderBy = "string"
            }
          ]
          columns = [
            {
              name = "string"
              type = "string"
            }
          ]
          partitionKeys = [
            {
              name = "string"
            }
          ]
        }
      }
    }
  })
}

```

### databaseAccounts/apis/keyspaces/tables

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:keyspaces |
| properties | Properties to create and update Azure Cosmos DB Cassandra table. | CassandraTableCreateUpdatePropertiesOrCassandraTable...(required) |


### CassandraTableCreateUpdatePropertiesOrCassandraTable...

| Name | Description | Value |
|-|-|-|
| options | A key-value pair of options to be applied for the request. This corresponds to the headers sent with the request. | object (required) |
| resource | The standard JSON format of a Cassandra table | CassandraTableResource(required) |


### CassandraTableResource

| Name | Description | Value |
|-|-|-|
| defaultTtl | Time to live of the Cosmos DB Cassandra table | int |
| id | Name of the Cosmos DB Cassandra table | string (required) |
| schema | Schema of the Cosmos DB Cassandra table | CassandraSchema |


### CassandraSchema

| Name | Description | Value |
|-|-|-|
| clusterKeys | List of cluster key. | ClusterKey[] |
| columns | List of Cassandra table columns. | Column[] |
| partitionKeys | List of partition key. | CassandraPartitionKey[] |


### ClusterKey

| Name | Description | Value |
|-|-|-|
| name | Name of the Cosmos DB Cassandra table cluster key | string |
| orderBy | Order of the Cosmos DB Cassandra table cluster key, only support "Asc" and "Desc" | string |


### Column

| Name | Description | Value |
|-|-|-|
| name | Name of the Cosmos DB Cassandra table column | string |
| type | Type of the Cosmos DB Cassandra table column | string |


### CassandraPartitionKey

| Name | Description | Value |
|-|-|-|
| name | Name of the Cosmos DB Cassandra table partition key | string |
## Microsoft.DocumentDB/databaseAccounts/apis/keyspaces/tables/settings@2016-03-31

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DocumentDB/databaseAccounts/apis/keyspaces/tables/settings@2016-03-31"
  name = "throughput"
  parent_id = "string"
  body = jsonencode({
    properties = {
      resource = {
        throughput = int
      }
    }
  })
}

```

### databaseAccounts/apis/keyspaces/tables/settings

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'throughput' |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:tables |
| properties | Properties to update Azure Cosmos DB resource throughput. | ThroughputUpdatePropertiesOrThroughputProperties(required) |


### ThroughputUpdatePropertiesOrThroughputProperties

| Name | Description | Value |
|-|-|-|
| resource | The standard JSON format of a resource throughput | ThroughputResource(required) |


### ThroughputResource

| Name | Description | Value |
|-|-|-|
| throughput | Value of the Cosmos DB resource throughput | int (required) |
## Microsoft.DocumentDB/databaseAccounts/apis/tables@2016-03-31

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DocumentDB/databaseAccounts/apis/tables@2016-03-31"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      options = {}
      resource = {
        id = "string"
      }
    }
  })
}

```

### databaseAccounts/apis/tables

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type: apis |
| properties | Properties to create and update Azure Cosmos DB Table. | TableCreateUpdatePropertiesOrTableProperties(required) |


### TableCreateUpdatePropertiesOrTableProperties

| Name | Description | Value |
|-|-|-|
| options | A key-value pair of options to be applied for the request. This corresponds to the headers sent with the request. | object (required) |
| resource | The standard JSON format of a Table | TableResource(required) |


### TableResource

| Name | Description | Value |
|-|-|-|
| id | Name of the Cosmos DB table | string (required) |
## Microsoft.DocumentDB/databaseAccounts/apis/tables/settings@2016-03-31

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DocumentDB/databaseAccounts/apis/tables/settings@2016-03-31"
  name = "throughput"
  parent_id = "string"
  body = jsonencode({
    properties = {
      resource = {
        throughput = int
      }
    }
  })
}

```

### databaseAccounts/apis/tables/settings

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'throughput' |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:tables |
| properties | Properties to update Azure Cosmos DB resource throughput. | ThroughputUpdatePropertiesOrThroughputProperties(required) |


### ThroughputUpdatePropertiesOrThroughputProperties

| Name | Description | Value |
|-|-|-|
| resource | The standard JSON format of a resource throughput | ThroughputResource(required) |


### ThroughputResource

| Name | Description | Value |
|-|-|-|
| throughput | Value of the Cosmos DB resource throughput | int (required) |
## Microsoft.DocumentDB/databaseAccounts/cassandraKeyspaces@2023-04-15

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DocumentDB/databaseAccounts/cassandraKeyspaces@2023-04-15"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      options = {
        autoscaleSettings = {
          maxThroughput = int
        }
        throughput = int
      }
      resource = {
        id = "string"
      }
    }
  })
}

```

### databaseAccounts/cassandraKeyspaces

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | The location of the resource group to which the resource belongs. | string |
| tags | Tags are a list of key-value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. For example, the default experience for a template type is set with "defaultExperience": "Cassandra". Current "defaultExperience" values also include "Table", "Graph", "DocumentDB", and "MongoDB". | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:databaseAccounts |
| properties | Properties to create and update Azure Cosmos DB Cassandra keyspace. | CassandraKeyspaceCreateUpdatePropertiesOrCassandraKe...(required) |


### CassandraKeyspaceCreateUpdatePropertiesOrCassandraKe...

| Name | Description | Value |
|-|-|-|
| options | A key-value pair of options to be applied for the request. This corresponds to the headers sent with the request. | CreateUpdateOptionsOrCassandraKeyspaceGetPropertiesO... |
| resource | The standard JSON format of a Cassandra keyspace | CassandraKeyspaceResourceOrCassandraKeyspaceGetPrope...(required) |


### CreateUpdateOptionsOrCassandraKeyspaceGetPropertiesO...

| Name | Description | Value |
|-|-|-|
| autoscaleSettings | Specifies the Autoscale settings. | AutoscaleSettings |
| throughput | Request Units per second. For example, "throughput": 10000. | int |


### AutoscaleSettings

| Name | Description | Value |
|-|-|-|
| maxThroughput | Represents maximum throughput, the resource can scale up to. | int |


### CassandraKeyspaceResourceOrCassandraKeyspaceGetPrope...

| Name | Description | Value |
|-|-|-|
| id | Name of the Cosmos DB Cassandra keyspace | string (required) |
## Microsoft.DocumentDB/databaseAccounts/cassandraKeyspaces/tables@2023-04-15

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DocumentDB/databaseAccounts/cassandraKeyspaces/tables@2023-04-15"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      options = {
        autoscaleSettings = {
          maxThroughput = int
        }
        throughput = int
      }
      resource = {
        analyticalStorageTtl = int
        defaultTtl = int
        id = "string"
        schema = {
          clusterKeys = [
            {
              name = "string"
              orderBy = "string"
            }
          ]
          columns = [
            {
              name = "string"
              type = "string"
            }
          ]
          partitionKeys = [
            {
              name = "string"
            }
          ]
        }
      }
    }
  })
}

```

### databaseAccounts/cassandraKeyspaces/tables

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | The location of the resource group to which the resource belongs. | string |
| tags | Tags are a list of key-value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. For example, the default experience for a template type is set with "defaultExperience": "Cassandra". Current "defaultExperience" values also include "Table", "Graph", "DocumentDB", and "MongoDB". | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:cassandraKeyspaces |
| properties | Properties to create and update Azure Cosmos DB Cassandra table. | CassandraTableCreateUpdatePropertiesOrCassandraTable...(required) |


### CassandraTableCreateUpdatePropertiesOrCassandraTable...

| Name | Description | Value |
|-|-|-|
| options | A key-value pair of options to be applied for the request. This corresponds to the headers sent with the request. | CreateUpdateOptionsOrCassandraTableGetPropertiesOpti... |
| resource | The standard JSON format of a Cassandra table | CassandraTableResourceOrCassandraTableGetPropertiesR...(required) |


### CreateUpdateOptionsOrCassandraTableGetPropertiesOpti...

| Name | Description | Value |
|-|-|-|
| autoscaleSettings | Specifies the Autoscale settings. | AutoscaleSettings |
| throughput | Request Units per second. For example, "throughput": 10000. | int |


### AutoscaleSettings

| Name | Description | Value |
|-|-|-|
| maxThroughput | Represents maximum throughput, the resource can scale up to. | int |


### CassandraTableResourceOrCassandraTableGetPropertiesR...

| Name | Description | Value |
|-|-|-|
| analyticalStorageTtl | Analytical TTL. | int |
| defaultTtl | Time to live of the Cosmos DB Cassandra table | int |
| id | Name of the Cosmos DB Cassandra table | string (required) |
| schema | Schema of the Cosmos DB Cassandra table | CassandraSchema |


### CassandraSchema

| Name | Description | Value |
|-|-|-|
| clusterKeys | List of cluster key. | ClusterKey[] |
| columns | List of Cassandra table columns. | Column[] |
| partitionKeys | List of partition key. | CassandraPartitionKey[] |


### ClusterKey

| Name | Description | Value |
|-|-|-|
| name | Name of the Cosmos DB Cassandra table cluster key | string |
| orderBy | Order of the Cosmos DB Cassandra table cluster key, only support "Asc" and "Desc" | string |


### Column

| Name | Description | Value |
|-|-|-|
| name | Name of the Cosmos DB Cassandra table column | string |
| type | Type of the Cosmos DB Cassandra table column | string |


### CassandraPartitionKey

| Name | Description | Value |
|-|-|-|
| name | Name of the Cosmos DB Cassandra table partition key | string |
## Microsoft.DocumentDB/databaseAccounts/cassandraKeyspaces/tables/throughputSettings@2023-04-15

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DocumentDB/databaseAccounts/cassandraKeyspaces/tables/throughputSettings@2023-04-15"
  name = "default"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      resource = {
        autoscaleSettings = {
          autoUpgradePolicy = {
            throughputPolicy = {
              incrementPercent = int
              isEnabled = bool
            }
          }
          maxThroughput = int
        }
        throughput = int
      }
    }
  })
}

```

### databaseAccounts/cassandraKeyspaces/tables/throughpu...

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'default' |
| location | The location of the resource group to which the resource belongs. | string |
| tags | Tags are a list of key-value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. For example, the default experience for a template type is set with "defaultExperience": "Cassandra". Current "defaultExperience" values also include "Table", "Graph", "DocumentDB", and "MongoDB". | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:tables |
| properties | Properties to update Azure Cosmos DB resource throughput. | ThroughputSettingsUpdatePropertiesOrThroughputSettin...(required) |


### ThroughputSettingsUpdatePropertiesOrThroughputSettin...

| Name | Description | Value |
|-|-|-|
| resource | The standard JSON format of a resource throughput | ThroughputSettingsResourceOrThroughputSettingsGetPro...(required) |


### ThroughputSettingsResourceOrThroughputSettingsGetPro...

| Name | Description | Value |
|-|-|-|
| autoscaleSettings | Cosmos DB resource for autoscale settings. Either throughput is required or autoscaleSettings is required, but not both. | AutoscaleSettingsResource |
| throughput | Value of the Cosmos DB resource throughput. Either throughput is required or autoscaleSettings is required, but not both. | int |


### AutoscaleSettingsResource

| Name | Description | Value |
|-|-|-|
| autoUpgradePolicy | Cosmos DB resource auto-upgrade policy | AutoUpgradePolicyResource |
| maxThroughput | Represents maximum throughput container can scale up to. | int (required) |


### AutoUpgradePolicyResource

| Name | Description | Value |
|-|-|-|
| throughputPolicy | Represents throughput policy which service must adhere to for auto-upgrade | ThroughputPolicyResource |


### ThroughputPolicyResource

| Name | Description | Value |
|-|-|-|
| incrementPercent | Represents the percentage by which throughput can increase every time throughput policy kicks in. | int |
| isEnabled | Determines whether the ThroughputPolicy is active or not | bool |
## Microsoft.DocumentDB/databaseAccounts/cassandraKeyspaces/throughputSettings@2023-04-15

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DocumentDB/databaseAccounts/cassandraKeyspaces/throughputSettings@2023-04-15"
  name = "default"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      resource = {
        autoscaleSettings = {
          autoUpgradePolicy = {
            throughputPolicy = {
              incrementPercent = int
              isEnabled = bool
            }
          }
          maxThroughput = int
        }
        throughput = int
      }
    }
  })
}

```

### databaseAccounts/cassandraKeyspaces/throughputSettin...

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'default' |
| location | The location of the resource group to which the resource belongs. | string |
| tags | Tags are a list of key-value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. For example, the default experience for a template type is set with "defaultExperience": "Cassandra". Current "defaultExperience" values also include "Table", "Graph", "DocumentDB", and "MongoDB". | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:cassandraKeyspaces |
| properties | Properties to update Azure Cosmos DB resource throughput. | ThroughputSettingsUpdatePropertiesOrThroughputSettin...(required) |


### ThroughputSettingsUpdatePropertiesOrThroughputSettin...

| Name | Description | Value |
|-|-|-|
| resource | The standard JSON format of a resource throughput | ThroughputSettingsResourceOrThroughputSettingsGetPro...(required) |


### ThroughputSettingsResourceOrThroughputSettingsGetPro...

| Name | Description | Value |
|-|-|-|
| autoscaleSettings | Cosmos DB resource for autoscale settings. Either throughput is required or autoscaleSettings is required, but not both. | AutoscaleSettingsResource |
| throughput | Value of the Cosmos DB resource throughput. Either throughput is required or autoscaleSettings is required, but not both. | int |


### AutoscaleSettingsResource

| Name | Description | Value |
|-|-|-|
| autoUpgradePolicy | Cosmos DB resource auto-upgrade policy | AutoUpgradePolicyResource |
| maxThroughput | Represents maximum throughput container can scale up to. | int (required) |


### AutoUpgradePolicyResource

| Name | Description | Value |
|-|-|-|
| throughputPolicy | Represents throughput policy which service must adhere to for auto-upgrade | ThroughputPolicyResource |


### ThroughputPolicyResource

| Name | Description | Value |
|-|-|-|
| incrementPercent | Represents the percentage by which throughput can increase every time throughput policy kicks in. | int |
| isEnabled | Determines whether the ThroughputPolicy is active or not | bool |
## Microsoft.DocumentDB/databaseAccounts/cassandraKeyspaces/views@2023-03-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DocumentDB/databaseAccounts/cassandraKeyspaces/views@2023-03-01-preview"
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
      options = {
        autoscaleSettings = {
          maxThroughput = int
        }
        throughput = int
      }
      resource = {
        id = "string"
        viewDefinition = "string"
      }
    }
  })
}

```

### databaseAccounts/cassandraKeyspaces/views

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | The location of the resource group to which the resource belongs. | string |
| tags | Tags are a list of key-value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. For example, the default experience for a template type is set with "defaultExperience": "Cassandra". Current "defaultExperience" values also include "Table", "Graph", "DocumentDB", and "MongoDB". | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:cassandraKeyspaces |
| identity | Identity for the resource. | ManagedServiceIdentity |
| properties | Properties to create and update Azure Cosmos DB Cassandra view. | CassandraViewCreateUpdatePropertiesOrCassandraViewGe...(required) |


### ManagedServiceIdentity

| Name | Description | Value |
|-|-|-|
| type | The type of identity used for the resource. The type 'SystemAssigned,UserAssigned' includes both an implicitly created identity and a set of user assigned identities. The type 'None' will remove any identities from the service. | 'None''SystemAssigned''SystemAssigned,UserAssigned''UserAssigned' |
| userAssignedIdentities | The list of user identities associated with resource. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'. | object |


### CassandraViewCreateUpdatePropertiesOrCassandraViewGe...

| Name | Description | Value |
|-|-|-|
| options | A key-value pair of options to be applied for the request. This corresponds to the headers sent with the request. | CreateUpdateOptionsOrCassandraViewGetPropertiesOptio... |
| resource | The standard JSON format of a Cassandra view | CassandraViewResourceOrCassandraViewGetPropertiesRes...(required) |


### CreateUpdateOptionsOrCassandraViewGetPropertiesOptio...

| Name | Description | Value |
|-|-|-|
| autoscaleSettings | Specifies the Autoscale settings. | AutoscaleSettings |
| throughput | Request Units per second. For example, "throughput": 10000. | int |


### AutoscaleSettings

| Name | Description | Value |
|-|-|-|
| maxThroughput | Represents maximum throughput, the resource can scale up to. | int |


### CassandraViewResourceOrCassandraViewGetPropertiesRes...

| Name | Description | Value |
|-|-|-|
| id | Name of the Cosmos DB Cassandra view | string (required) |
| viewDefinition | View Definition of the Cosmos DB Cassandra view | string (required) |
## Microsoft.DocumentDB/databaseAccounts/cassandraKeyspaces/views/throughputSettings@2023-03-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DocumentDB/databaseAccounts/cassandraKeyspaces/views/throughputSettings@2023-03-01-preview"
  name = "default"
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
      resource = {
        autoscaleSettings = {
          autoUpgradePolicy = {
            throughputPolicy = {
              incrementPercent = int
              isEnabled = bool
            }
          }
          maxThroughput = int
        }
        throughput = int
      }
    }
  })
}

```

### databaseAccounts/cassandraKeyspaces/views/throughput...

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'default' |
| location | The location of the resource group to which the resource belongs. | string |
| tags | Tags are a list of key-value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. For example, the default experience for a template type is set with "defaultExperience": "Cassandra". Current "defaultExperience" values also include "Table", "Graph", "DocumentDB", and "MongoDB". | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:views |
| identity | Identity for the resource. | ManagedServiceIdentity |
| properties | Properties to update Azure Cosmos DB resource throughput. | ThroughputSettingsUpdatePropertiesOrThroughputSettin...(required) |


### ManagedServiceIdentity

| Name | Description | Value |
|-|-|-|
| type | The type of identity used for the resource. The type 'SystemAssigned,UserAssigned' includes both an implicitly created identity and a set of user assigned identities. The type 'None' will remove any identities from the service. | 'None''SystemAssigned''SystemAssigned,UserAssigned''UserAssigned' |
| userAssignedIdentities | The list of user identities associated with resource. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'. | object |


### ThroughputSettingsUpdatePropertiesOrThroughputSettin...

| Name | Description | Value |
|-|-|-|
| resource | The standard JSON format of a resource throughput | ThroughputSettingsResourceOrThroughputSettingsGetPro...(required) |


### ThroughputSettingsResourceOrThroughputSettingsGetPro...

| Name | Description | Value |
|-|-|-|
| autoscaleSettings | Cosmos DB resource for autoscale settings. Either throughput is required or autoscaleSettings is required, but not both. | AutoscaleSettingsResource |
| throughput | Value of the Cosmos DB resource throughput. Either throughput is required or autoscaleSettings is required, but not both. | int |


### AutoscaleSettingsResource

| Name | Description | Value |
|-|-|-|
| autoUpgradePolicy | Cosmos DB resource auto-upgrade policy | AutoUpgradePolicyResource |
| maxThroughput | Represents maximum throughput container can scale up to. | int (required) |


### AutoUpgradePolicyResource

| Name | Description | Value |
|-|-|-|
| throughputPolicy | Represents throughput policy which service must adhere to for auto-upgrade | ThroughputPolicyResource |


### ThroughputPolicyResource

| Name | Description | Value |
|-|-|-|
| incrementPercent | Represents the percentage by which throughput can increase every time throughput policy kicks in. | int |
| isEnabled | Determines whether the ThroughputPolicy is active or not | bool |
## Microsoft.DocumentDB/databaseAccounts/dataTransferJobs@2023-03-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DocumentDB/databaseAccounts/dataTransferJobs@2023-03-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      destination = {
        component = "string"
        // For remaining properties, see DataTransferDataSourceSink objects
      }
      source = {
        component = "string"
        // For remaining properties, see DataTransferDataSourceSink objects
      }
      workerCount = int
    }
  })
}

```

### databaseAccounts/dataTransferJobs

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:databaseAccounts |
| properties | Data Transfer Create Job Properties | DataTransferJobProperties(required) |


### DataTransferJobProperties

| Name | Description | Value |
|-|-|-|
| destination | Destination DataStore details | DataTransferDataSourceSink(required) |
| source | Source DataStore details | DataTransferDataSourceSink(required) |
| workerCount | Worker count | int |


### DataTransferDataSourceSink

| Name | Description | Value |
|-|-|-|
| component | Set the object type | AzureBlobStorageCosmosDBCassandraCosmosDBMongoCosmosDBSql(required) |


### AzureBlobDataTransferDataSourceSink

| Name | Description | Value |
|-|-|-|
| component |  | 'AzureBlobStorage' (required) |
| containerName |  | string (required) |
| endpointUrl |  | string |


### CosmosCassandraDataTransferDataSourceSink

| Name | Description | Value |
|-|-|-|
| component |  | 'CosmosDBCassandra' (required) |
| keyspaceName |  | string (required) |
| tableName |  | string (required) |


### CosmosMongoDataTransferDataSourceSink

| Name | Description | Value |
|-|-|-|
| component |  | 'CosmosDBMongo' (required) |
| collectionName |  | string (required) |
| databaseName |  | string (required) |


### CosmosSqlDataTransferDataSourceSink

| Name | Description | Value |
|-|-|-|
| component |  | 'CosmosDBSql' (required) |
| containerName |  | string (required) |
| databaseName |  | string (required) |
## Microsoft.DocumentDB/databaseAccounts/graphs@2023-03-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DocumentDB/databaseAccounts/graphs@2023-03-01-preview"
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
      options = {
        autoscaleSettings = {
          maxThroughput = int
        }
        throughput = int
      }
      resource = {
        id = "string"
      }
    }
  })
}

```

### databaseAccounts/graphs

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | The location of the resource group to which the resource belongs. | string |
| tags | Tags are a list of key-value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. For example, the default experience for a template type is set with "defaultExperience": "Cassandra". Current "defaultExperience" values also include "Table", "Graph", "DocumentDB", and "MongoDB". | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:databaseAccounts |
| identity | Identity for the resource. | ManagedServiceIdentity |
| properties | Properties to create and update Azure Cosmos DB Graph resource. | GraphResourceCreateUpdatePropertiesOrGraphResourceGe...(required) |


### ManagedServiceIdentity

| Name | Description | Value |
|-|-|-|
| type | The type of identity used for the resource. The type 'SystemAssigned,UserAssigned' includes both an implicitly created identity and a set of user assigned identities. The type 'None' will remove any identities from the service. | 'None''SystemAssigned''SystemAssigned,UserAssigned''UserAssigned' |
| userAssignedIdentities | The list of user identities associated with resource. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'. | object |


### GraphResourceCreateUpdatePropertiesOrGraphResourceGe...

| Name | Description | Value |
|-|-|-|
| options | A key-value pair of options to be applied for the request. This corresponds to the headers sent with the request. | CreateUpdateOptionsOrGraphResourceGetPropertiesOptio... |
| resource | The standard JSON format of a Graph resource | GraphResourceOrGraphResourceGetPropertiesResource(required) |


### CreateUpdateOptionsOrGraphResourceGetPropertiesOptio...

| Name | Description | Value |
|-|-|-|
| autoscaleSettings | Specifies the Autoscale settings. | AutoscaleSettings |
| throughput | Request Units per second. For example, "throughput": 10000. | int |


### AutoscaleSettings

| Name | Description | Value |
|-|-|-|
| maxThroughput | Represents maximum throughput, the resource can scale up to. | int |


### GraphResourceOrGraphResourceGetPropertiesResource

| Name | Description | Value |
|-|-|-|
| id | Name of the Cosmos DB Graph | string (required) |
## Microsoft.DocumentDB/databaseAccounts/gremlinDatabases@2023-04-15

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DocumentDB/databaseAccounts/gremlinDatabases@2023-04-15"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      options = {
        autoscaleSettings = {
          maxThroughput = int
        }
        throughput = int
      }
      resource = {
        id = "string"
      }
    }
  })
}

```

### databaseAccounts/gremlinDatabases

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | The location of the resource group to which the resource belongs. | string |
| tags | Tags are a list of key-value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. For example, the default experience for a template type is set with "defaultExperience": "Cassandra". Current "defaultExperience" values also include "Table", "Graph", "DocumentDB", and "MongoDB". | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:databaseAccounts |
| properties | Properties to create and update Azure Cosmos DB Gremlin database. | GremlinDatabaseCreateUpdatePropertiesOrGremlinDataba...(required) |


### GremlinDatabaseCreateUpdatePropertiesOrGremlinDataba...

| Name | Description | Value |
|-|-|-|
| options | A key-value pair of options to be applied for the request. This corresponds to the headers sent with the request. | CreateUpdateOptionsOrGremlinDatabaseGetPropertiesOpt... |
| resource | The standard JSON format of a Gremlin database | GremlinDatabaseResourceOrGremlinDatabaseGetPropertie...(required) |


### CreateUpdateOptionsOrGremlinDatabaseGetPropertiesOpt...

| Name | Description | Value |
|-|-|-|
| autoscaleSettings | Specifies the Autoscale settings. | AutoscaleSettings |
| throughput | Request Units per second. For example, "throughput": 10000. | int |


### AutoscaleSettings

| Name | Description | Value |
|-|-|-|
| maxThroughput | Represents maximum throughput, the resource can scale up to. | int |


### GremlinDatabaseResourceOrGremlinDatabaseGetPropertie...

| Name | Description | Value |
|-|-|-|
| id | Name of the Cosmos DB Gremlin database | string (required) |
## Microsoft.DocumentDB/databaseAccounts/gremlinDatabases/graphs@2023-04-15

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DocumentDB/databaseAccounts/gremlinDatabases/graphs@2023-04-15"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      options = {
        autoscaleSettings = {
          maxThroughput = int
        }
        throughput = int
      }
      resource = {
        analyticalStorageTtl = int
        conflictResolutionPolicy = {
          conflictResolutionPath = "string"
          conflictResolutionProcedure = "string"
          mode = "string"
        }
        defaultTtl = int
        id = "string"
        indexingPolicy = {
          automatic = bool
          compositeIndexes = [
            {
              order = "string"
              path = "string"
            }
          ]
          excludedPaths = [
            {
              path = "string"
            }
          ]
          includedPaths = [
            {
              indexes = [
                {
                  dataType = "string"
                  kind = "string"
                  precision = int
                }
              ]
              path = "string"
            }
          ]
          indexingMode = "string"
          spatialIndexes = [
            {
              path = "string"
              types = [
                "string"
              ]
            }
          ]
        }
        partitionKey = {
          kind = "string"
          paths = [
            "string"
          ]
          version = int
        }
        uniqueKeyPolicy = {
          uniqueKeys = [
            {
              paths = [
                "string"
              ]
            }
          ]
        }
      }
    }
  })
}

```

### databaseAccounts/gremlinDatabases/graphs

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | The location of the resource group to which the resource belongs. | string |
| tags | Tags are a list of key-value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. For example, the default experience for a template type is set with "defaultExperience": "Cassandra". Current "defaultExperience" values also include "Table", "Graph", "DocumentDB", and "MongoDB". | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:gremlinDatabases |
| properties | Properties to create and update Azure Cosmos DB Gremlin graph. | GremlinGraphCreateUpdatePropertiesOrGremlinGraphGetP...(required) |


### GremlinGraphCreateUpdatePropertiesOrGremlinGraphGetP...

| Name | Description | Value |
|-|-|-|
| options | A key-value pair of options to be applied for the request. This corresponds to the headers sent with the request. | CreateUpdateOptionsOrGremlinGraphGetPropertiesOption... |
| resource | The standard JSON format of a Gremlin graph | GremlinGraphResourceOrGremlinGraphGetPropertiesResou...(required) |


### CreateUpdateOptionsOrGremlinGraphGetPropertiesOption...

| Name | Description | Value |
|-|-|-|
| autoscaleSettings | Specifies the Autoscale settings. | AutoscaleSettings |
| throughput | Request Units per second. For example, "throughput": 10000. | int |


### AutoscaleSettings

| Name | Description | Value |
|-|-|-|
| maxThroughput | Represents maximum throughput, the resource can scale up to. | int |


### GremlinGraphResourceOrGremlinGraphGetPropertiesResou...

| Name | Description | Value |
|-|-|-|
| analyticalStorageTtl | Analytical TTL. | int |
| conflictResolutionPolicy | The conflict resolution policy for the graph. | ConflictResolutionPolicy |
| defaultTtl | Default time to live | int |
| id | Name of the Cosmos DB Gremlin graph | string (required) |
| indexingPolicy | The configuration of the indexing policy. By default, the indexing is automatic for all document paths within the graph | IndexingPolicy |
| partitionKey | The configuration of the partition key to be used for partitioning data into multiple partitions | ContainerPartitionKey |
| uniqueKeyPolicy | The unique key policy configuration for specifying uniqueness constraints on documents in the collection in the Azure Cosmos DB service. | UniqueKeyPolicy |


### ConflictResolutionPolicy

| Name | Description | Value |
|-|-|-|
| conflictResolutionPath | The conflict resolution path in the case of LastWriterWins mode. | string |
| conflictResolutionProcedure | The procedure to resolve conflicts in the case of custom mode. | string |
| mode | Indicates the conflict resolution mode. | 'Custom''LastWriterWins' |


### IndexingPolicy

| Name | Description | Value |
|-|-|-|
| automatic | Indicates if the indexing policy is automatic | bool |
| compositeIndexes | List of composite path list | CompositePath[] |
| excludedPaths | List of paths to exclude from indexing | ExcludedPath[] |
| includedPaths | List of paths to include in the indexing | IncludedPath[] |
| indexingMode | Indicates the indexing mode. | 'consistent''lazy''none' |
| spatialIndexes | List of spatial specifics | SpatialSpec[] |


### CompositePath

| Name | Description | Value |
|-|-|-|
| order | Sort order for composite paths. | 'ascending''descending' |
| path | The path for which the indexing behavior applies to. Index paths typically start with root and end with wildcard (/path/*) | string |


### ExcludedPath

| Name | Description | Value |
|-|-|-|
| path | The path for which the indexing behavior applies to. Index paths typically start with root and end with wildcard (/path/*) | string |


### IncludedPath

| Name | Description | Value |
|-|-|-|
| indexes | List of indexes for this path | Indexes[] |
| path | The path for which the indexing behavior applies to. Index paths typically start with root and end with wildcard (/path/*) | string |


### Indexes

| Name | Description | Value |
|-|-|-|
| dataType | The datatype for which the indexing behavior is applied to. | 'LineString''MultiPolygon''Number''Point''Polygon''String' |
| kind | Indicates the type of index. | 'Hash''Range''Spatial' |
| precision | The precision of the index. -1 is maximum precision. | int |


### SpatialSpec

| Name | Description | Value |
|-|-|-|
| path | The path for which the indexing behavior applies to. Index paths typically start with root and end with wildcard (/path/*) | string |
| types | List of path's spatial type | String array containing any of:'LineString''MultiPolygon''Point''Polygon' |


### ContainerPartitionKey

| Name | Description | Value |
|-|-|-|
| kind | Indicates the kind of algorithm used for partitioning. For MultiHash, multiple partition keys (upto three maximum) are supported for container create | 'Hash''MultiHash''Range' |
| paths | List of paths using which data within the container can be partitioned | string[] |
| version | Indicates the version of the partition key definition | int |


### UniqueKeyPolicy

| Name | Description | Value |
|-|-|-|
| uniqueKeys | List of unique keys on that enforces uniqueness constraint on documents in the collection in the Azure Cosmos DB service. | UniqueKey[] |


### UniqueKey

| Name | Description | Value |
|-|-|-|
| paths | List of paths must be unique for each document in the Azure Cosmos DB service | string[] |
## Microsoft.DocumentDB/databaseAccounts/gremlinDatabases/graphs/throughputSettings@2023-04-15

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DocumentDB/databaseAccounts/gremlinDatabases/graphs/throughputSettings@2023-04-15"
  name = "default"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      resource = {
        autoscaleSettings = {
          autoUpgradePolicy = {
            throughputPolicy = {
              incrementPercent = int
              isEnabled = bool
            }
          }
          maxThroughput = int
        }
        throughput = int
      }
    }
  })
}

```

### databaseAccounts/gremlinDatabases/graphs/throughputS...

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'default' |
| location | The location of the resource group to which the resource belongs. | string |
| tags | Tags are a list of key-value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. For example, the default experience for a template type is set with "defaultExperience": "Cassandra". Current "defaultExperience" values also include "Table", "Graph", "DocumentDB", and "MongoDB". | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:graphs |
| properties | Properties to update Azure Cosmos DB resource throughput. | ThroughputSettingsUpdatePropertiesOrThroughputSettin...(required) |


### ThroughputSettingsUpdatePropertiesOrThroughputSettin...

| Name | Description | Value |
|-|-|-|
| resource | The standard JSON format of a resource throughput | ThroughputSettingsResourceOrThroughputSettingsGetPro...(required) |


### ThroughputSettingsResourceOrThroughputSettingsGetPro...

| Name | Description | Value |
|-|-|-|
| autoscaleSettings | Cosmos DB resource for autoscale settings. Either throughput is required or autoscaleSettings is required, but not both. | AutoscaleSettingsResource |
| throughput | Value of the Cosmos DB resource throughput. Either throughput is required or autoscaleSettings is required, but not both. | int |


### AutoscaleSettingsResource

| Name | Description | Value |
|-|-|-|
| autoUpgradePolicy | Cosmos DB resource auto-upgrade policy | AutoUpgradePolicyResource |
| maxThroughput | Represents maximum throughput container can scale up to. | int (required) |


### AutoUpgradePolicyResource

| Name | Description | Value |
|-|-|-|
| throughputPolicy | Represents throughput policy which service must adhere to for auto-upgrade | ThroughputPolicyResource |


### ThroughputPolicyResource

| Name | Description | Value |
|-|-|-|
| incrementPercent | Represents the percentage by which throughput can increase every time throughput policy kicks in. | int |
| isEnabled | Determines whether the ThroughputPolicy is active or not | bool |
## Microsoft.DocumentDB/databaseAccounts/gremlinDatabases/throughputSettings@2023-04-15

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DocumentDB/databaseAccounts/gremlinDatabases/throughputSettings@2023-04-15"
  name = "default"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      resource = {
        autoscaleSettings = {
          autoUpgradePolicy = {
            throughputPolicy = {
              incrementPercent = int
              isEnabled = bool
            }
          }
          maxThroughput = int
        }
        throughput = int
      }
    }
  })
}

```

### databaseAccounts/gremlinDatabases/throughputSettings

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'default' |
| location | The location of the resource group to which the resource belongs. | string |
| tags | Tags are a list of key-value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. For example, the default experience for a template type is set with "defaultExperience": "Cassandra". Current "defaultExperience" values also include "Table", "Graph", "DocumentDB", and "MongoDB". | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:gremlinDatabases |
| properties | Properties to update Azure Cosmos DB resource throughput. | ThroughputSettingsUpdatePropertiesOrThroughputSettin...(required) |


### ThroughputSettingsUpdatePropertiesOrThroughputSettin...

| Name | Description | Value |
|-|-|-|
| resource | The standard JSON format of a resource throughput | ThroughputSettingsResourceOrThroughputSettingsGetPro...(required) |


### ThroughputSettingsResourceOrThroughputSettingsGetPro...

| Name | Description | Value |
|-|-|-|
| autoscaleSettings | Cosmos DB resource for autoscale settings. Either throughput is required or autoscaleSettings is required, but not both. | AutoscaleSettingsResource |
| throughput | Value of the Cosmos DB resource throughput. Either throughput is required or autoscaleSettings is required, but not both. | int |


### AutoscaleSettingsResource

| Name | Description | Value |
|-|-|-|
| autoUpgradePolicy | Cosmos DB resource auto-upgrade policy | AutoUpgradePolicyResource |
| maxThroughput | Represents maximum throughput container can scale up to. | int (required) |


### AutoUpgradePolicyResource

| Name | Description | Value |
|-|-|-|
| throughputPolicy | Represents throughput policy which service must adhere to for auto-upgrade | ThroughputPolicyResource |


### ThroughputPolicyResource

| Name | Description | Value |
|-|-|-|
| incrementPercent | Represents the percentage by which throughput can increase every time throughput policy kicks in. | int |
| isEnabled | Determines whether the ThroughputPolicy is active or not | bool |
## Microsoft.DocumentDB/databaseAccounts/mongodbDatabases@2023-04-15

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DocumentDB/databaseAccounts/mongodbDatabases@2023-04-15"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      options = {
        autoscaleSettings = {
          maxThroughput = int
        }
        throughput = int
      }
      resource = {
        id = "string"
      }
    }
  })
}

```

### databaseAccounts/mongodbDatabases

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | The location of the resource group to which the resource belongs. | string |
| tags | Tags are a list of key-value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. For example, the default experience for a template type is set with "defaultExperience": "Cassandra". Current "defaultExperience" values also include "Table", "Graph", "DocumentDB", and "MongoDB". | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:databaseAccounts |
| properties | Properties to create and update Azure Cosmos DB MongoDB database. | MongoDBDatabaseCreateUpdatePropertiesOrMongoDBDataba...(required) |


### MongoDBDatabaseCreateUpdatePropertiesOrMongoDBDataba...

| Name | Description | Value |
|-|-|-|
| options | A key-value pair of options to be applied for the request. This corresponds to the headers sent with the request. | CreateUpdateOptionsOrMongoDBDatabaseGetPropertiesOpt... |
| resource | The standard JSON format of a MongoDB database | MongoDBDatabaseResourceOrMongoDBDatabaseGetPropertie...(required) |


### CreateUpdateOptionsOrMongoDBDatabaseGetPropertiesOpt...

| Name | Description | Value |
|-|-|-|
| autoscaleSettings | Specifies the Autoscale settings. | AutoscaleSettings |
| throughput | Request Units per second. For example, "throughput": 10000. | int |


### AutoscaleSettings

| Name | Description | Value |
|-|-|-|
| maxThroughput | Represents maximum throughput, the resource can scale up to. | int |


### MongoDBDatabaseResourceOrMongoDBDatabaseGetPropertie...

| Name | Description | Value |
|-|-|-|
| id | Name of the Cosmos DB MongoDB database | string (required) |
## Microsoft.DocumentDB/databaseAccounts/mongodbDatabases/collections@2023-04-15

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DocumentDB/databaseAccounts/mongodbDatabases/collections@2023-04-15"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      options = {
        autoscaleSettings = {
          maxThroughput = int
        }
        throughput = int
      }
      resource = {
        analyticalStorageTtl = int
        id = "string"
        indexes = [
          {
            key = {
              keys = [
                "string"
              ]
            }
            options = {
              expireAfterSeconds = int
              unique = bool
            }
          }
        ]
        shardKey = {}
      }
    }
  })
}

```

### databaseAccounts/mongodbDatabases/collections

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | The location of the resource group to which the resource belongs. | string |
| tags | Tags are a list of key-value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. For example, the default experience for a template type is set with "defaultExperience": "Cassandra". Current "defaultExperience" values also include "Table", "Graph", "DocumentDB", and "MongoDB". | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:mongodbDatabases |
| properties | Properties to create and update Azure Cosmos DB MongoDB collection. | MongoDBCollectionCreateUpdatePropertiesOrMongoDBColl...(required) |


### MongoDBCollectionCreateUpdatePropertiesOrMongoDBColl...

| Name | Description | Value |
|-|-|-|
| options | A key-value pair of options to be applied for the request. This corresponds to the headers sent with the request. | CreateUpdateOptionsOrMongoDBCollectionGetPropertiesO... |
| resource | The standard JSON format of a MongoDB collection | MongoDBCollectionResourceOrMongoDBCollectionGetPrope...(required) |


### CreateUpdateOptionsOrMongoDBCollectionGetPropertiesO...

| Name | Description | Value |
|-|-|-|
| autoscaleSettings | Specifies the Autoscale settings. | AutoscaleSettings |
| throughput | Request Units per second. For example, "throughput": 10000. | int |


### AutoscaleSettings

| Name | Description | Value |
|-|-|-|
| maxThroughput | Represents maximum throughput, the resource can scale up to. | int |


### MongoDBCollectionResourceOrMongoDBCollectionGetPrope...

| Name | Description | Value |
|-|-|-|
| analyticalStorageTtl | Analytical TTL. | int |
| id | Name of the Cosmos DB MongoDB collection | string (required) |
| indexes | List of index keys | MongoIndex[] |
| shardKey | A key-value pair of shard keys to be applied for the request. | object |


### MongoIndex

| Name | Description | Value |
|-|-|-|
| key | Cosmos DB MongoDB collection index keys | MongoIndexKeys |
| options | Cosmos DB MongoDB collection index key options | MongoIndexOptions |


### MongoIndexKeys

| Name | Description | Value |
|-|-|-|
| keys | List of keys for each MongoDB collection in the Azure Cosmos DB service | string[] |


### MongoIndexOptions

| Name | Description | Value |
|-|-|-|
| expireAfterSeconds | Expire after seconds | int |
| unique | Is unique or not | bool |
## Microsoft.DocumentDB/databaseAccounts/mongodbDatabases/collections/throughputSettings@2023-04-15

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DocumentDB/databaseAccounts/mongodbDatabases/collections/throughputSettings@2023-04-15"
  name = "default"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      resource = {
        autoscaleSettings = {
          autoUpgradePolicy = {
            throughputPolicy = {
              incrementPercent = int
              isEnabled = bool
            }
          }
          maxThroughput = int
        }
        throughput = int
      }
    }
  })
}

```

### databaseAccounts/mongodbDatabases/collections/throug...

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'default' |
| location | The location of the resource group to which the resource belongs. | string |
| tags | Tags are a list of key-value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. For example, the default experience for a template type is set with "defaultExperience": "Cassandra". Current "defaultExperience" values also include "Table", "Graph", "DocumentDB", and "MongoDB". | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:collections |
| properties | Properties to update Azure Cosmos DB resource throughput. | ThroughputSettingsUpdatePropertiesOrThroughputSettin...(required) |


### ThroughputSettingsUpdatePropertiesOrThroughputSettin...

| Name | Description | Value |
|-|-|-|
| resource | The standard JSON format of a resource throughput | ThroughputSettingsResourceOrThroughputSettingsGetPro...(required) |


### ThroughputSettingsResourceOrThroughputSettingsGetPro...

| Name | Description | Value |
|-|-|-|
| autoscaleSettings | Cosmos DB resource for autoscale settings. Either throughput is required or autoscaleSettings is required, but not both. | AutoscaleSettingsResource |
| throughput | Value of the Cosmos DB resource throughput. Either throughput is required or autoscaleSettings is required, but not both. | int |


### AutoscaleSettingsResource

| Name | Description | Value |
|-|-|-|
| autoUpgradePolicy | Cosmos DB resource auto-upgrade policy | AutoUpgradePolicyResource |
| maxThroughput | Represents maximum throughput container can scale up to. | int (required) |


### AutoUpgradePolicyResource

| Name | Description | Value |
|-|-|-|
| throughputPolicy | Represents throughput policy which service must adhere to for auto-upgrade | ThroughputPolicyResource |


### ThroughputPolicyResource

| Name | Description | Value |
|-|-|-|
| incrementPercent | Represents the percentage by which throughput can increase every time throughput policy kicks in. | int |
| isEnabled | Determines whether the ThroughputPolicy is active or not | bool |
## Microsoft.DocumentDB/databaseAccounts/mongodbDatabases/throughputSettings@2023-04-15

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DocumentDB/databaseAccounts/mongodbDatabases/throughputSettings@2023-04-15"
  name = "default"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      resource = {
        autoscaleSettings = {
          autoUpgradePolicy = {
            throughputPolicy = {
              incrementPercent = int
              isEnabled = bool
            }
          }
          maxThroughput = int
        }
        throughput = int
      }
    }
  })
}

```

### databaseAccounts/mongodbDatabases/throughputSettings

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'default' |
| location | The location of the resource group to which the resource belongs. | string |
| tags | Tags are a list of key-value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. For example, the default experience for a template type is set with "defaultExperience": "Cassandra". Current "defaultExperience" values also include "Table", "Graph", "DocumentDB", and "MongoDB". | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:mongodbDatabases |
| properties | Properties to update Azure Cosmos DB resource throughput. | ThroughputSettingsUpdatePropertiesOrThroughputSettin...(required) |


### ThroughputSettingsUpdatePropertiesOrThroughputSettin...

| Name | Description | Value |
|-|-|-|
| resource | The standard JSON format of a resource throughput | ThroughputSettingsResourceOrThroughputSettingsGetPro...(required) |


### ThroughputSettingsResourceOrThroughputSettingsGetPro...

| Name | Description | Value |
|-|-|-|
| autoscaleSettings | Cosmos DB resource for autoscale settings. Either throughput is required or autoscaleSettings is required, but not both. | AutoscaleSettingsResource |
| throughput | Value of the Cosmos DB resource throughput. Either throughput is required or autoscaleSettings is required, but not both. | int |


### AutoscaleSettingsResource

| Name | Description | Value |
|-|-|-|
| autoUpgradePolicy | Cosmos DB resource auto-upgrade policy | AutoUpgradePolicyResource |
| maxThroughput | Represents maximum throughput container can scale up to. | int (required) |


### AutoUpgradePolicyResource

| Name | Description | Value |
|-|-|-|
| throughputPolicy | Represents throughput policy which service must adhere to for auto-upgrade | ThroughputPolicyResource |


### ThroughputPolicyResource

| Name | Description | Value |
|-|-|-|
| incrementPercent | Represents the percentage by which throughput can increase every time throughput policy kicks in. | int |
| isEnabled | Determines whether the ThroughputPolicy is active or not | bool |
## Microsoft.DocumentDB/databaseAccounts/mongodbRoleDefinitions@2023-04-15

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DocumentDB/databaseAccounts/mongodbRoleDefinitions@2023-04-15"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      databaseName = "string"
      privileges = [
        {
          actions = [
            "string"
          ]
          resource = {
            collection = "string"
            db = "string"
          }
        }
      ]
      roleName = "string"
      roles = [
        {
          db = "string"
          role = "string"
        }
      ]
      type = "string"
    }
  })
}

```

### databaseAccounts/mongodbRoleDefinitions

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:databaseAccounts |
| properties | Properties to create and update an Azure Cosmos DB Mongo Role Definition. | MongoRoleDefinitionResource |


### MongoRoleDefinitionResource

| Name | Description | Value |
|-|-|-|
| databaseName | The database name for which access is being granted for this Role Definition. | string |
| privileges | A set of privileges contained by the Role Definition. This will allow application of this Role Definition on the entire database account or any underlying Database / Collection. Scopes higher than Database are not enforceable as privilege. | Privilege[] |
| roleName | A user-friendly name for the Role Definition. Must be unique for the database account. | string |
| roles | The set of roles inherited by this Role Definition. | Role[] |
| type | Indicates whether the Role Definition was built-in or user created. | 'BuiltInRole''CustomRole' |


### Privilege

| Name | Description | Value |
|-|-|-|
| actions | An array of actions that are allowed. | string[] |
| resource | An Azure Cosmos DB Mongo DB Resource. | PrivilegeResource |


### PrivilegeResource

| Name | Description | Value |
|-|-|-|
| collection | The collection name the role is applied. | string |
| db | The database name the role is applied. | string |


### Role

| Name | Description | Value |
|-|-|-|
| db | The database name the role is applied. | string |
| role | The role name. | string |
## Microsoft.DocumentDB/databaseAccounts/mongodbUserDefinitions@2023-04-15

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DocumentDB/databaseAccounts/mongodbUserDefinitions@2023-04-15"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      customData = "string"
      databaseName = "string"
      mechanisms = "string"
      password = "string"
      roles = [
        {
          db = "string"
          role = "string"
        }
      ]
      userName = "string"
    }
  })
}

```

### databaseAccounts/mongodbUserDefinitions

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:databaseAccounts |
| properties | Properties to create and update an Azure Cosmos DB Mongo User Definition. | MongoUserDefinitionResource |


### MongoUserDefinitionResource

| Name | Description | Value |
|-|-|-|
| customData | A custom definition for the USer Definition. | string |
| databaseName | The database name for which access is being granted for this User Definition. | string |
| mechanisms | The Mongo Auth mechanism. For now, we only support auth mechanism SCRAM-SHA-256. | string |
| password | The password for User Definition. Response does not contain user password. | string |
| roles | The set of roles inherited by the User Definition. | Role[] |
| userName | The user name for User Definition. | string |


### Role

| Name | Description | Value |
|-|-|-|
| db | The database name the role is applied. | string |
| role | The role name. | string |
## Microsoft.DocumentDB/databaseAccounts/notebookWorkspaces@2023-04-15

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DocumentDB/databaseAccounts/notebookWorkspaces@2023-04-15"
  name = "default"
  parent_id = "string"
}

```

### databaseAccounts/notebookWorkspaces

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'default' |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:databaseAccounts |
## Microsoft.DocumentDB/databaseAccounts/privateEndpointConnections@2023-04-15

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DocumentDB/databaseAccounts/privateEndpointConnections@2023-04-15"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      groupId = "string"
      privateEndpoint = {
        id = "string"
      }
      privateLinkServiceConnectionState = {
        description = "string"
        status = "string"
      }
      provisioningState = "string"
    }
  })
}

```

### databaseAccounts/privateEndpointConnections

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:databaseAccounts |
| properties | Resource properties. | PrivateEndpointConnectionProperties |


### PrivateEndpointConnectionProperties

| Name | Description | Value |
|-|-|-|
| groupId | Group id of the private endpoint. | string |
| privateEndpoint | Private endpoint which the connection belongs to. | PrivateEndpointProperty |
| privateLinkServiceConnectionState | Connection State of the Private Endpoint Connection. | PrivateLinkServiceConnectionStateProperty |
| provisioningState | Provisioning state of the private endpoint. | string |


### PrivateEndpointProperty

| Name | Description | Value |
|-|-|-|
| id | Resource id of the private endpoint. | string |


### PrivateLinkServiceConnectionStateProperty

| Name | Description | Value |
|-|-|-|
| description | The private link service connection description. | string |
| status | The private link service connection status. | string |
## Microsoft.DocumentDB/databaseAccounts/services@2023-04-15

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DocumentDB/databaseAccounts/services@2023-04-15"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      instanceCount = int
      instanceSize = "string"
    }
  })
}

```

### databaseAccounts/services

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:databaseAccounts |
| properties | Properties in ServiceResourceCreateUpdateParameters. | ServiceResourceCreateUpdatePropertiesOrServiceResour... |


### ServiceResourceCreateUpdatePropertiesOrServiceResour...

| Name | Description | Value |
|-|-|-|
| instanceCount | Instance count for the service. | int |
| instanceSize | Instance type for the service. | 'Cosmos.D16s''Cosmos.D4s''Cosmos.D8s' |
## Microsoft.DocumentDB/databaseAccounts/sqlDatabases@2023-04-15

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DocumentDB/databaseAccounts/sqlDatabases@2023-04-15"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      options = {
        autoscaleSettings = {
          maxThroughput = int
        }
        throughput = int
      }
      resource = {
        id = "string"
      }
    }
  })
}

```

### databaseAccounts/sqlDatabases

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | The location of the resource group to which the resource belongs. | string |
| tags | Tags are a list of key-value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. For example, the default experience for a template type is set with "defaultExperience": "Cassandra". Current "defaultExperience" values also include "Table", "Graph", "DocumentDB", and "MongoDB". | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:databaseAccounts |
| properties | Properties to create and update Azure Cosmos DB SQL database. | SqlDatabaseCreateUpdatePropertiesOrSqlDatabaseGetPro...(required) |


### SqlDatabaseCreateUpdatePropertiesOrSqlDatabaseGetPro...

| Name | Description | Value |
|-|-|-|
| options | A key-value pair of options to be applied for the request. This corresponds to the headers sent with the request. | CreateUpdateOptionsOrSqlDatabaseGetPropertiesOptions |
| resource | The standard JSON format of a SQL database | SqlDatabaseResourceOrSqlDatabaseGetPropertiesResourc...(required) |


### CreateUpdateOptionsOrSqlDatabaseGetPropertiesOptions

| Name | Description | Value |
|-|-|-|
| autoscaleSettings | Specifies the Autoscale settings. | AutoscaleSettings |
| throughput | Request Units per second. For example, "throughput": 10000. | int |


### AutoscaleSettings

| Name | Description | Value |
|-|-|-|
| maxThroughput | Represents maximum throughput, the resource can scale up to. | int |


### SqlDatabaseResourceOrSqlDatabaseGetPropertiesResourc...

| Name | Description | Value |
|-|-|-|
| id | Name of the Cosmos DB SQL database | string (required) |
## Microsoft.DocumentDB/databaseAccounts/sqlDatabases/clientEncryptionKeys@2023-04-15

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DocumentDB/databaseAccounts/sqlDatabases/clientEncryptionKeys@2023-04-15"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      resource = {
        encryptionAlgorithm = "string"
        id = "string"
        keyWrapMetadata = {
          algorithm = "string"
          name = "string"
          type = "string"
          value = "string"
        }
      }
    }
  })
}

```

### databaseAccounts/sqlDatabases/clientEncryptionKeys

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:sqlDatabases |
| properties | Properties to create and update ClientEncryptionKey. | ClientEncryptionKeyCreateUpdatePropertiesOrClientEnc...(required) |


### ClientEncryptionKeyCreateUpdatePropertiesOrClientEnc...

| Name | Description | Value |
|-|-|-|
| resource | The standard JSON format of a ClientEncryptionKey | ClientEncryptionKeyResourceOrClientEncryptionKeyGetP...(required) |


### ClientEncryptionKeyResourceOrClientEncryptionKeyGetP...

| Name | Description | Value |
|-|-|-|
| encryptionAlgorithm | Encryption algorithm that will be used along with this client encryption key to encrypt/decrypt data. | string |
| id | Name of the ClientEncryptionKey | string |
| keyWrapMetadata | Metadata for the wrapping provider that can be used to unwrap the wrapped client encryption key. | KeyWrapMetadata |
| wrappedDataEncryptionKey | Wrapped (encrypted) form of the key represented as a byte array. | For Bicep, you can use theany()function. |


### KeyWrapMetadata

| Name | Description | Value |
|-|-|-|
| algorithm | Algorithm used in wrapping and unwrapping of the data encryption key. | string |
| name | The name of associated KeyEncryptionKey (aka CustomerManagedKey). | string |
| type | ProviderName of KeyStoreProvider. | string |
| value | Reference / link to the KeyEncryptionKey. | string |
## Microsoft.DocumentDB/databaseAccounts/sqlDatabases/containers@2023-04-15

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DocumentDB/databaseAccounts/sqlDatabases/containers@2023-04-15"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      options = {
        autoscaleSettings = {
          maxThroughput = int
        }
        throughput = int
      }
      resource = {
        analyticalStorageTtl = int
        clientEncryptionPolicy = {
          includedPaths = [
            {
              clientEncryptionKeyId = "string"
              encryptionAlgorithm = "string"
              encryptionType = "string"
              path = "string"
            }
          ]
          policyFormatVersion = int
        }
        conflictResolutionPolicy = {
          conflictResolutionPath = "string"
          conflictResolutionProcedure = "string"
          mode = "string"
        }
        defaultTtl = int
        id = "string"
        indexingPolicy = {
          automatic = bool
          compositeIndexes = [
            {
              order = "string"
              path = "string"
            }
          ]
          excludedPaths = [
            {
              path = "string"
            }
          ]
          includedPaths = [
            {
              indexes = [
                {
                  dataType = "string"
                  kind = "string"
                  precision = int
                }
              ]
              path = "string"
            }
          ]
          indexingMode = "string"
          spatialIndexes = [
            {
              path = "string"
              types = [
                "string"
              ]
            }
          ]
        }
        partitionKey = {
          kind = "string"
          paths = [
            "string"
          ]
          version = int
        }
        uniqueKeyPolicy = {
          uniqueKeys = [
            {
              paths = [
                "string"
              ]
            }
          ]
        }
      }
    }
  })
}

```

### databaseAccounts/sqlDatabases/containers

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | The location of the resource group to which the resource belongs. | string |
| tags | Tags are a list of key-value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. For example, the default experience for a template type is set with "defaultExperience": "Cassandra". Current "defaultExperience" values also include "Table", "Graph", "DocumentDB", and "MongoDB". | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:sqlDatabases |
| properties | Properties to create and update Azure Cosmos DB container. | SqlContainerCreateUpdatePropertiesOrSqlContainerGetP...(required) |


### SqlContainerCreateUpdatePropertiesOrSqlContainerGetP...

| Name | Description | Value |
|-|-|-|
| options | A key-value pair of options to be applied for the request. This corresponds to the headers sent with the request. | CreateUpdateOptionsOrSqlContainerGetPropertiesOption... |
| resource | The standard JSON format of a container | SqlContainerResourceOrSqlContainerGetPropertiesResou...(required) |


### CreateUpdateOptionsOrSqlContainerGetPropertiesOption...

| Name | Description | Value |
|-|-|-|
| autoscaleSettings | Specifies the Autoscale settings. | AutoscaleSettings |
| throughput | Request Units per second. For example, "throughput": 10000. | int |


### AutoscaleSettings

| Name | Description | Value |
|-|-|-|
| maxThroughput | Represents maximum throughput, the resource can scale up to. | int |


### SqlContainerResourceOrSqlContainerGetPropertiesResou...

| Name | Description | Value |
|-|-|-|
| analyticalStorageTtl | Analytical TTL. | int |
| clientEncryptionPolicy | The client encryption policy for the container. | ClientEncryptionPolicy |
| conflictResolutionPolicy | The conflict resolution policy for the container. | ConflictResolutionPolicy |
| defaultTtl | Default time to live | int |
| id | Name of the Cosmos DB SQL container | string (required) |
| indexingPolicy | The configuration of the indexing policy. By default, the indexing is automatic for all document paths within the container | IndexingPolicy |
| partitionKey | The configuration of the partition key to be used for partitioning data into multiple partitions | ContainerPartitionKey |
| uniqueKeyPolicy | The unique key policy configuration for specifying uniqueness constraints on documents in the collection in the Azure Cosmos DB service. | UniqueKeyPolicy |


### ClientEncryptionPolicy

| Name | Description | Value |
|-|-|-|
| includedPaths | Paths of the item that need encryption along with path-specific settings. | ClientEncryptionIncludedPath[] (required) |
| policyFormatVersion | Version of the client encryption policy definition. Supported versions are 1 and 2. Version 2 supports id and partition key path encryption. | int (required) |


### ClientEncryptionIncludedPath

| Name | Description | Value |
|-|-|-|
| clientEncryptionKeyId | The identifier of the Client Encryption Key to be used to encrypt the path. | string (required) |
| encryptionAlgorithm | The encryption algorithm which will be used. Eg - AEAD_AES_256_CBC_HMAC_SHA256. | string (required) |
| encryptionType | The type of encryption to be performed. Eg - Deterministic, Randomized. | string (required) |
| path | Path that needs to be encrypted. | string (required) |


### ConflictResolutionPolicy

| Name | Description | Value |
|-|-|-|
| conflictResolutionPath | The conflict resolution path in the case of LastWriterWins mode. | string |
| conflictResolutionProcedure | The procedure to resolve conflicts in the case of custom mode. | string |
| mode | Indicates the conflict resolution mode. | 'Custom''LastWriterWins' |


### IndexingPolicy

| Name | Description | Value |
|-|-|-|
| automatic | Indicates if the indexing policy is automatic | bool |
| compositeIndexes | List of composite path list | CompositePath[] |
| excludedPaths | List of paths to exclude from indexing | ExcludedPath[] |
| includedPaths | List of paths to include in the indexing | IncludedPath[] |
| indexingMode | Indicates the indexing mode. | 'consistent''lazy''none' |
| spatialIndexes | List of spatial specifics | SpatialSpec[] |


### CompositePath

| Name | Description | Value |
|-|-|-|
| order | Sort order for composite paths. | 'ascending''descending' |
| path | The path for which the indexing behavior applies to. Index paths typically start with root and end with wildcard (/path/*) | string |


### ExcludedPath

| Name | Description | Value |
|-|-|-|
| path | The path for which the indexing behavior applies to. Index paths typically start with root and end with wildcard (/path/*) | string |


### IncludedPath

| Name | Description | Value |
|-|-|-|
| indexes | List of indexes for this path | Indexes[] |
| path | The path for which the indexing behavior applies to. Index paths typically start with root and end with wildcard (/path/*) | string |


### Indexes

| Name | Description | Value |
|-|-|-|
| dataType | The datatype for which the indexing behavior is applied to. | 'LineString''MultiPolygon''Number''Point''Polygon''String' |
| kind | Indicates the type of index. | 'Hash''Range''Spatial' |
| precision | The precision of the index. -1 is maximum precision. | int |


### SpatialSpec

| Name | Description | Value |
|-|-|-|
| path | The path for which the indexing behavior applies to. Index paths typically start with root and end with wildcard (/path/*) | string |
| types | List of path's spatial type | String array containing any of:'LineString''MultiPolygon''Point''Polygon' |


### ContainerPartitionKey

| Name | Description | Value |
|-|-|-|
| kind | Indicates the kind of algorithm used for partitioning. For MultiHash, multiple partition keys (upto three maximum) are supported for container create | 'Hash''MultiHash''Range' |
| paths | List of paths using which data within the container can be partitioned | string[] |
| version | Indicates the version of the partition key definition | int |


### UniqueKeyPolicy

| Name | Description | Value |
|-|-|-|
| uniqueKeys | List of unique keys on that enforces uniqueness constraint on documents in the collection in the Azure Cosmos DB service. | UniqueKey[] |


### UniqueKey

| Name | Description | Value |
|-|-|-|
| paths | List of paths must be unique for each document in the Azure Cosmos DB service | string[] |
## Microsoft.DocumentDB/databaseAccounts/sqlDatabases/containers/storedProcedures@2023-04-15

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DocumentDB/databaseAccounts/sqlDatabases/containers/storedProcedures@2023-04-15"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      options = {
        autoscaleSettings = {
          maxThroughput = int
        }
        throughput = int
      }
      resource = {
        body = "string"
        id = "string"
      }
    }
  })
}

```

### databaseAccounts/sqlDatabases/containers/storedProce...

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | The location of the resource group to which the resource belongs. | string |
| tags | Tags are a list of key-value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. For example, the default experience for a template type is set with "defaultExperience": "Cassandra". Current "defaultExperience" values also include "Table", "Graph", "DocumentDB", and "MongoDB". | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:containers |
| properties | Properties to create and update Azure Cosmos DB storedProcedure. | SqlStoredProcedureCreateUpdatePropertiesOrSqlStoredP...(required) |


### SqlStoredProcedureCreateUpdatePropertiesOrSqlStoredP...

| Name | Description | Value |
|-|-|-|
| options | A key-value pair of options to be applied for the request. This corresponds to the headers sent with the request. | CreateUpdateOptions |
| resource | The standard JSON format of a storedProcedure | SqlStoredProcedureResourceOrSqlStoredProcedureGetPro...(required) |


### CreateUpdateOptions

| Name | Description | Value |
|-|-|-|
| autoscaleSettings | Specifies the Autoscale settings. | AutoscaleSettings |
| throughput | Request Units per second. For example, "throughput": 10000. | int |


### AutoscaleSettings

| Name | Description | Value |
|-|-|-|
| maxThroughput | Represents maximum throughput, the resource can scale up to. | int |


### SqlStoredProcedureResourceOrSqlStoredProcedureGetPro...

| Name | Description | Value |
|-|-|-|
| body | Body of the Stored Procedure | string |
| id | Name of the Cosmos DB SQL storedProcedure | string (required) |
## Microsoft.DocumentDB/databaseAccounts/sqlDatabases/containers/throughputSettings@2023-04-15

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DocumentDB/databaseAccounts/sqlDatabases/containers/throughputSettings@2023-04-15"
  name = "default"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      resource = {
        autoscaleSettings = {
          autoUpgradePolicy = {
            throughputPolicy = {
              incrementPercent = int
              isEnabled = bool
            }
          }
          maxThroughput = int
        }
        throughput = int
      }
    }
  })
}

```

### databaseAccounts/sqlDatabases/containers/throughputS...

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'default' |
| location | The location of the resource group to which the resource belongs. | string |
| tags | Tags are a list of key-value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. For example, the default experience for a template type is set with "defaultExperience": "Cassandra". Current "defaultExperience" values also include "Table", "Graph", "DocumentDB", and "MongoDB". | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:containers |
| properties | Properties to update Azure Cosmos DB resource throughput. | ThroughputSettingsUpdatePropertiesOrThroughputSettin...(required) |


### ThroughputSettingsUpdatePropertiesOrThroughputSettin...

| Name | Description | Value |
|-|-|-|
| resource | The standard JSON format of a resource throughput | ThroughputSettingsResourceOrThroughputSettingsGetPro...(required) |


### ThroughputSettingsResourceOrThroughputSettingsGetPro...

| Name | Description | Value |
|-|-|-|
| autoscaleSettings | Cosmos DB resource for autoscale settings. Either throughput is required or autoscaleSettings is required, but not both. | AutoscaleSettingsResource |
| throughput | Value of the Cosmos DB resource throughput. Either throughput is required or autoscaleSettings is required, but not both. | int |


### AutoscaleSettingsResource

| Name | Description | Value |
|-|-|-|
| autoUpgradePolicy | Cosmos DB resource auto-upgrade policy | AutoUpgradePolicyResource |
| maxThroughput | Represents maximum throughput container can scale up to. | int (required) |


### AutoUpgradePolicyResource

| Name | Description | Value |
|-|-|-|
| throughputPolicy | Represents throughput policy which service must adhere to for auto-upgrade | ThroughputPolicyResource |


### ThroughputPolicyResource

| Name | Description | Value |
|-|-|-|
| incrementPercent | Represents the percentage by which throughput can increase every time throughput policy kicks in. | int |
| isEnabled | Determines whether the ThroughputPolicy is active or not | bool |
## Microsoft.DocumentDB/databaseAccounts/sqlDatabases/containers/triggers@2023-04-15

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DocumentDB/databaseAccounts/sqlDatabases/containers/triggers@2023-04-15"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      options = {
        autoscaleSettings = {
          maxThroughput = int
        }
        throughput = int
      }
      resource = {
        body = "string"
        id = "string"
        triggerOperation = "string"
        triggerType = "string"
      }
    }
  })
}

```

### databaseAccounts/sqlDatabases/containers/triggers

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | The location of the resource group to which the resource belongs. | string |
| tags | Tags are a list of key-value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. For example, the default experience for a template type is set with "defaultExperience": "Cassandra". Current "defaultExperience" values also include "Table", "Graph", "DocumentDB", and "MongoDB". | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:containers |
| properties | Properties to create and update Azure Cosmos DB trigger. | SqlTriggerCreateUpdatePropertiesOrSqlTriggerGetPrope...(required) |


### SqlTriggerCreateUpdatePropertiesOrSqlTriggerGetPrope...

| Name | Description | Value |
|-|-|-|
| options | A key-value pair of options to be applied for the request. This corresponds to the headers sent with the request. | CreateUpdateOptions |
| resource | The standard JSON format of a trigger | SqlTriggerResourceOrSqlTriggerGetPropertiesResource(required) |


### CreateUpdateOptions

| Name | Description | Value |
|-|-|-|
| autoscaleSettings | Specifies the Autoscale settings. | AutoscaleSettings |
| throughput | Request Units per second. For example, "throughput": 10000. | int |


### AutoscaleSettings

| Name | Description | Value |
|-|-|-|
| maxThroughput | Represents maximum throughput, the resource can scale up to. | int |


### SqlTriggerResourceOrSqlTriggerGetPropertiesResource

| Name | Description | Value |
|-|-|-|
| body | Body of the Trigger | string |
| id | Name of the Cosmos DB SQL trigger | string (required) |
| triggerOperation | The operation the trigger is associated with | 'All''Create''Delete''Replace''Update' |
| triggerType | Type of the Trigger | 'Post''Pre' |
## Microsoft.DocumentDB/databaseAccounts/sqlDatabases/containers/userDefinedFunctions@2023-04-15

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DocumentDB/databaseAccounts/sqlDatabases/containers/userDefinedFunctions@2023-04-15"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      options = {
        autoscaleSettings = {
          maxThroughput = int
        }
        throughput = int
      }
      resource = {
        body = "string"
        id = "string"
      }
    }
  })
}

```

### databaseAccounts/sqlDatabases/containers/userDefined...

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | The location of the resource group to which the resource belongs. | string |
| tags | Tags are a list of key-value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. For example, the default experience for a template type is set with "defaultExperience": "Cassandra". Current "defaultExperience" values also include "Table", "Graph", "DocumentDB", and "MongoDB". | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:containers |
| properties | Properties to create and update Azure Cosmos DB userDefinedFunction. | SqlUserDefinedFunctionCreateUpdatePropertiesOrSqlUse...(required) |


### SqlUserDefinedFunctionCreateUpdatePropertiesOrSqlUse...

| Name | Description | Value |
|-|-|-|
| options | A key-value pair of options to be applied for the request. This corresponds to the headers sent with the request. | CreateUpdateOptions |
| resource | The standard JSON format of a userDefinedFunction | SqlUserDefinedFunctionResourceOrSqlUserDefinedFuncti...(required) |


### CreateUpdateOptions

| Name | Description | Value |
|-|-|-|
| autoscaleSettings | Specifies the Autoscale settings. | AutoscaleSettings |
| throughput | Request Units per second. For example, "throughput": 10000. | int |


### AutoscaleSettings

| Name | Description | Value |
|-|-|-|
| maxThroughput | Represents maximum throughput, the resource can scale up to. | int |


### SqlUserDefinedFunctionResourceOrSqlUserDefinedFuncti...

| Name | Description | Value |
|-|-|-|
| body | Body of the User Defined Function | string |
| id | Name of the Cosmos DB SQL userDefinedFunction | string (required) |
## Microsoft.DocumentDB/databaseAccounts/sqlDatabases/throughputSettings@2023-04-15

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DocumentDB/databaseAccounts/sqlDatabases/throughputSettings@2023-04-15"
  name = "default"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      resource = {
        autoscaleSettings = {
          autoUpgradePolicy = {
            throughputPolicy = {
              incrementPercent = int
              isEnabled = bool
            }
          }
          maxThroughput = int
        }
        throughput = int
      }
    }
  })
}

```

### databaseAccounts/sqlDatabases/throughputSettings

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'default' |
| location | The location of the resource group to which the resource belongs. | string |
| tags | Tags are a list of key-value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. For example, the default experience for a template type is set with "defaultExperience": "Cassandra". Current "defaultExperience" values also include "Table", "Graph", "DocumentDB", and "MongoDB". | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:sqlDatabases |
| properties | Properties to update Azure Cosmos DB resource throughput. | ThroughputSettingsUpdatePropertiesOrThroughputSettin...(required) |


### ThroughputSettingsUpdatePropertiesOrThroughputSettin...

| Name | Description | Value |
|-|-|-|
| resource | The standard JSON format of a resource throughput | ThroughputSettingsResourceOrThroughputSettingsGetPro...(required) |


### ThroughputSettingsResourceOrThroughputSettingsGetPro...

| Name | Description | Value |
|-|-|-|
| autoscaleSettings | Cosmos DB resource for autoscale settings. Either throughput is required or autoscaleSettings is required, but not both. | AutoscaleSettingsResource |
| throughput | Value of the Cosmos DB resource throughput. Either throughput is required or autoscaleSettings is required, but not both. | int |


### AutoscaleSettingsResource

| Name | Description | Value |
|-|-|-|
| autoUpgradePolicy | Cosmos DB resource auto-upgrade policy | AutoUpgradePolicyResource |
| maxThroughput | Represents maximum throughput container can scale up to. | int (required) |


### AutoUpgradePolicyResource

| Name | Description | Value |
|-|-|-|
| throughputPolicy | Represents throughput policy which service must adhere to for auto-upgrade | ThroughputPolicyResource |


### ThroughputPolicyResource

| Name | Description | Value |
|-|-|-|
| incrementPercent | Represents the percentage by which throughput can increase every time throughput policy kicks in. | int |
| isEnabled | Determines whether the ThroughputPolicy is active or not | bool |
## Microsoft.DocumentDB/databaseAccounts/sqlRoleAssignments@2023-04-15

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DocumentDB/databaseAccounts/sqlRoleAssignments@2023-04-15"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      principalId = "string"
      roleDefinitionId = "string"
      scope = "string"
    }
  })
}

```

### databaseAccounts/sqlRoleAssignments

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:databaseAccounts |
| properties | Properties to create and update an Azure Cosmos DB SQL Role Assignment. | SqlRoleAssignmentResource |


### SqlRoleAssignmentResource

| Name | Description | Value |
|-|-|-|
| principalId | The unique identifier for the associated AAD principal in the AAD graph to which access is being granted through this Role Assignment. Tenant ID for the principal is inferred using the tenant associated with the subscription. | string |
| roleDefinitionId | The unique identifier for the associated Role Definition. | string |
| scope | The data plane resource path for which access is being granted through this Role Assignment. | string |
## Microsoft.DocumentDB/databaseAccounts/sqlRoleDefinitions@2023-04-15

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DocumentDB/databaseAccounts/sqlRoleDefinitions@2023-04-15"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      assignableScopes = [
        "string"
      ]
      permissions = [
        {
          dataActions = [
            "string"
          ]
          notDataActions = [
            "string"
          ]
        }
      ]
      roleName = "string"
      type = "string"
    }
  })
}

```

### databaseAccounts/sqlRoleDefinitions

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:databaseAccounts |
| properties | Properties to create and update an Azure Cosmos DB SQL Role Definition. | SqlRoleDefinitionResource |


### SqlRoleDefinitionResource

| Name | Description | Value |
|-|-|-|
| assignableScopes | A set of fully qualified Scopes at or below which Role Assignments may be created using this Role Definition. This will allow application of this Role Definition on the entire database account or any underlying Database / Collection. Must have at least one element. Scopes higher than Database account are not enforceable as assignable Scopes. Note that resources referenced in assignable Scopes need not exist. | string[] |
| permissions | The set of operations allowed through this Role Definition. | Permission[] |
| roleName | A user-friendly name for the Role Definition. Must be unique for the database account. | string |
| type | Indicates whether the Role Definition was built-in or user created. | 'BuiltInRole''CustomRole' |


### Permission

| Name | Description | Value |
|-|-|-|
| dataActions | An array of data actions that are allowed. | string[] |
| notDataActions | An array of data actions that are denied. | string[] |
## Microsoft.DocumentDB/databaseAccounts/tables@2023-04-15

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DocumentDB/databaseAccounts/tables@2023-04-15"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      options = {
        autoscaleSettings = {
          maxThroughput = int
        }
        throughput = int
      }
      resource = {
        id = "string"
      }
    }
  })
}

```

### databaseAccounts/tables

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | The location of the resource group to which the resource belongs. | string |
| tags | Tags are a list of key-value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. For example, the default experience for a template type is set with "defaultExperience": "Cassandra". Current "defaultExperience" values also include "Table", "Graph", "DocumentDB", and "MongoDB". | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:databaseAccounts |
| properties | Properties to create and update Azure Cosmos DB Table. | TableCreateUpdatePropertiesOrTableGetProperties(required) |


### TableCreateUpdatePropertiesOrTableGetProperties

| Name | Description | Value |
|-|-|-|
| options | A key-value pair of options to be applied for the request. This corresponds to the headers sent with the request. | CreateUpdateOptionsOrTableGetPropertiesOptions |
| resource | The standard JSON format of a Table | TableResourceOrTableGetPropertiesResource(required) |


### CreateUpdateOptionsOrTableGetPropertiesOptions

| Name | Description | Value |
|-|-|-|
| autoscaleSettings | Specifies the Autoscale settings. | AutoscaleSettings |
| throughput | Request Units per second. For example, "throughput": 10000. | int |


### AutoscaleSettings

| Name | Description | Value |
|-|-|-|
| maxThroughput | Represents maximum throughput, the resource can scale up to. | int |


### TableResourceOrTableGetPropertiesResource

| Name | Description | Value |
|-|-|-|
| id | Name of the Cosmos DB table | string (required) |
## Microsoft.DocumentDB/databaseAccounts/tables/throughputSettings@2023-04-15

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DocumentDB/databaseAccounts/tables/throughputSettings@2023-04-15"
  name = "default"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      resource = {
        autoscaleSettings = {
          autoUpgradePolicy = {
            throughputPolicy = {
              incrementPercent = int
              isEnabled = bool
            }
          }
          maxThroughput = int
        }
        throughput = int
      }
    }
  })
}

```

### databaseAccounts/tables/throughputSettings

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'default' |
| location | The location of the resource group to which the resource belongs. | string |
| tags | Tags are a list of key-value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. For example, the default experience for a template type is set with "defaultExperience": "Cassandra". Current "defaultExperience" values also include "Table", "Graph", "DocumentDB", and "MongoDB". | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:tables |
| properties | Properties to update Azure Cosmos DB resource throughput. | ThroughputSettingsUpdatePropertiesOrThroughputSettin...(required) |


### ThroughputSettingsUpdatePropertiesOrThroughputSettin...

| Name | Description | Value |
|-|-|-|
| resource | The standard JSON format of a resource throughput | ThroughputSettingsResourceOrThroughputSettingsGetPro...(required) |


### ThroughputSettingsResourceOrThroughputSettingsGetPro...

| Name | Description | Value |
|-|-|-|
| autoscaleSettings | Cosmos DB resource for autoscale settings. Either throughput is required or autoscaleSettings is required, but not both. | AutoscaleSettingsResource |
| throughput | Value of the Cosmos DB resource throughput. Either throughput is required or autoscaleSettings is required, but not both. | int |


### AutoscaleSettingsResource

| Name | Description | Value |
|-|-|-|
| autoUpgradePolicy | Cosmos DB resource auto-upgrade policy | AutoUpgradePolicyResource |
| maxThroughput | Represents maximum throughput container can scale up to. | int (required) |


### AutoUpgradePolicyResource

| Name | Description | Value |
|-|-|-|
| throughputPolicy | Represents throughput policy which service must adhere to for auto-upgrade | ThroughputPolicyResource |


### ThroughputPolicyResource

| Name | Description | Value |
|-|-|-|
| incrementPercent | Represents the percentage by which throughput can increase every time throughput policy kicks in. | int |
| isEnabled | Determines whether the ThroughputPolicy is active or not | bool |
## Microsoft.DocumentDB/mongoClusters@2023-03-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DocumentDB/mongoClusters@2023-03-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      administratorLogin = "string"
      administratorLoginPassword = "string"
      createMode = "string"
      nodeGroupSpecs = [
        {
          diskSizeGB = int
          enableHa = bool
          kind = "Shard"
          nodeCount = int
          sku = "string"
        }
      ]
      restoreParameters = {
        pointInTimeUTC = "string"
        sourceResourceId = "string"
      }
      serverVersion = "string"
    }
  })
}

```

### mongoClusters

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| properties | Properties of the mongo cluster. | MongoClusterProperties |


### MongoClusterProperties

| Name | Description | Value |
|-|-|-|
| administratorLogin | The administrator's login for the mongo cluster. | string |
| administratorLoginPassword | The password of the administrator login. | string |
| createMode | The mode to create a mongo cluster. | 'Default''PointInTimeRestore''Restore' |
| nodeGroupSpecs | The list of node group specs in the cluster. | NodeGroupSpec[] |
| restoreParameters | Parameters used for restore operations | MongoClusterRestoreParameters |
| serverVersion | The Mongo DB server version. Defaults to the latest available version if not specified. | string |


### NodeGroupSpec

| Name | Description | Value |
|-|-|-|
| diskSizeGB | The disk storage size for the node group in GB. Example values: 128, 256, 512, 1024. | int |
| enableHa | Whether high availability is enabled on the node group. | bool |
| kind | The node type deployed in the node group. | 'Shard' |
| nodeCount | The number of nodes in the node group. | int |
| sku | The resource sku for the node group. This defines the size of CPU and memory that is provisioned for each node. Example values: 'M30', 'M40'. | string |


### MongoClusterRestoreParameters

| Name | Description | Value |
|-|-|-|
| pointInTimeUTC | UTC point in time to restore a mongo cluster | string |
| sourceResourceId | Resource ID to locate the source cluster to restore | string |
## Microsoft.DocumentDB/mongoClusters/firewallRules@2023-03-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DocumentDB/mongoClusters/firewallRules@2023-03-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      endIpAddress = "string"
      startIpAddress = "string"
    }
  })
}

```

### mongoClusters/firewallRules

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:mongoClusters |
| properties | The properties of a firewall rule. | FirewallRuleProperties(required) |


### FirewallRuleProperties

| Name | Description | Value |
|-|-|-|
| endIpAddress | The end IP address of the mongo cluster firewall rule. Must be IPv4 format. | string (required) |
| startIpAddress | The start IP address of the mongo cluster firewall rule. Must be IPv4 format. | string (required) |
