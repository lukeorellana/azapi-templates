## Microsoft.Cache/redis@2023-08-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Cache/redis@2023-08-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
    {customized property} = "string"
  identity {
    type = "string"
    identity_ids = []
  }
  body = jsonencode({
    properties = {
      enableNonSslPort = bool
      minimumTlsVersion = "string"
      publicNetworkAccess = "string"
      redisConfiguration = {
        aad-enabled = "string"
        aof-backup-enabled = "string"
        aof-storage-connection-string-0 = "string"
        aof-storage-connection-string-1 = "string"
        authnotrequired = "string"
        maxfragmentationmemory-reserved = "string"
        maxmemory-delta = "string"
        maxmemory-policy = "string"
        maxmemory-reserved = "string"
        preferred-data-persistence-auth-method = "string"
        rdb-backup-enabled = "string"
        rdb-backup-frequency = "string"
        rdb-backup-max-snapshot-count = "string"
        rdb-storage-connection-string = "string"
        storage-subscription-id = "string"
      }
      redisVersion = "string"
      replicasPerMaster = int
      replicasPerPrimary = int
      shardCount = int
      sku = {
        capacity = int
        family = "string"
        name = "string"
      }
      staticIP = "string"
      subnetId = "string"
      tenantSettings = {
        {customized property} = "string"
      }
      updateChannel = "string"
    }
    zones = [
      "string"
    ]
  })
}

```

### redis

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 1-63Valid characters:Alphanumerics and hyphens.Start and end with alphanumeric. Consecutive hyphens not allowed.Resource name must be unique across Azure. |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| identity | The identity of the resource. | ManagedServiceIdentity |
| properties | Redis cache properties. | RedisCreatePropertiesOrRedisProperties(required) |
| zones | A list of availability zones denoting where the resource needs to come from. | string[] |


### ManagedServiceIdentity

| Name | Description | Value |
|-|-|-|
| type | Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed). | 'None''SystemAssigned''SystemAssigned, UserAssigned''UserAssigned' (required) |
| userAssignedIdentities | The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests. | UserAssignedIdentities |


### UserAssignedIdentities

| Name | Description | Value |
|-|-|-|
| {customized property} |  | UserAssignedIdentity |


### RedisCreatePropertiesOrRedisProperties

| Name | Description | Value |
|-|-|-|
| enableNonSslPort | Specifies whether the non-ssl Redis server port (6379) is enabled. | bool |
| minimumTlsVersion | Optional: requires clients to use a specified TLS version (or higher) to connect (e,g, '1.0', '1.1', '1.2') | '1.0''1.1''1.2' |
| publicNetworkAccess | Whether or not public endpoint access is allowed for this cache.  Value is optional but if passed in, must be 'Enabled' or 'Disabled'. If 'Disabled', private endpoints are the exclusive access method. Default value is 'Enabled' | 'Disabled''Enabled' |
| redisConfiguration | All Redis Settings. Few possible keys: rdb-backup-enabled,rdb-storage-connection-string,rdb-backup-frequency,maxmemory-delta,maxmemory-policy,notify-keyspace-events,maxmemory-samples,slowlog-log-slower-than,slowlog-max-len,list-max-ziplist-entries,list-max-ziplist-value,hash-max-ziplist-entries,hash-max-ziplist-value,set-max-intset-entries,zset-max-ziplist-entries,zset-max-ziplist-value etc. | RedisCommonPropertiesRedisConfiguration |
| redisVersion | Redis version. This should be in the form 'major[.minor]' (only 'major' is required) or the value 'latest' which refers to the latest stable Redis version that is available. Supported versions: 4.0, 6.0 (latest). Default value is 'latest'. | string |
| replicasPerMaster | The number of replicas to be created per primary. | int |
| replicasPerPrimary | The number of replicas to be created per primary. | int |
| shardCount | The number of shards to be created on a Premium Cluster Cache. | int |
| sku | The SKU of the Redis cache to deploy. | Sku(required) |
| staticIP | Static IP address. Optionally, may be specified when deploying a Redis cache inside an existing Azure Virtual Network; auto assigned by default. | stringConstraints:Pattern =^\d+\.\d+\.\d+\.\d+$ |
| subnetId | The full resource ID of a subnet in a virtual network to deploy the Redis cache in. Example format: /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/Microsoft.{Network,ClassicNetwork}/VirtualNetworks/vnet1/subnets/subnet1 | stringConstraints:Pattern =^/subscriptions/[^/]*/resourceGroups/[^/]*/providers/Microsoft.(ClassicNetwork|Network)/virtualNetworks/[^/]*/subnets/[^/]*$ |
| tenantSettings | A dictionary of tenant settings | RedisCommonPropertiesTenantSettings |
| updateChannel | Optional: Specifies the update channel for the monthly Redis updates your Redis Cache will receive. Caches using 'Preview' update channel get latest Redis updates at least 4 weeks ahead of 'Stable' channel caches. Default value is 'Stable'. | 'Preview''Stable' |


### RedisCommonPropertiesRedisConfiguration

| Name | Description | Value |
|-|-|-|
| aad-enabled | Specifies whether AAD based authentication has been enabled or disabled for the cache | string |
| aof-backup-enabled | Specifies whether the aof backup is enabled | string |
| aof-storage-connection-string-0 | First storage account connection string | string |
| aof-storage-connection-string-1 | Second storage account connection string | string |
| authnotrequired | Specifies whether the authentication is disabled. Setting this property is highly discouraged from security point of view. | string |
| maxfragmentationmemory-reserved | Value in megabytes reserved for fragmentation per shard | string |
| maxmemory-delta | Value in megabytes reserved for non-cache usage per shard e.g. failover. | string |
| maxmemory-policy | The eviction strategy used when your data won't fit within its memory limit. | string |
| maxmemory-reserved | Value in megabytes reserved for non-cache usage per shard e.g. failover. | string |
| preferred-data-persistence-auth-method | Preferred auth method to communicate to storage account used for data persistence, specify SAS or ManagedIdentity, default value is SAS | string |
| rdb-backup-enabled | Specifies whether the rdb backup is enabled | string |
| rdb-backup-frequency | Specifies the frequency for creating rdb backup in minutes. Valid values: (15, 30, 60, 360, 720, 1440) | string |
| rdb-backup-max-snapshot-count | Specifies the maximum number of snapshots for rdb backup | string |
| rdb-storage-connection-string | The storage account connection string for storing rdb file | string |
| storage-subscription-id | SubscriptionId of the storage account for persistence (aof/rdb) using ManagedIdentity. | string |
| {customized property} |  | For Bicep, you can use theany()function. |


### Sku

| Name | Description | Value |
|-|-|-|
| capacity | The size of the Redis cache to deploy. Valid values: for C (Basic/Standard) family (0, 1, 2, 3, 4, 5, 6), for P (Premium) family (1, 2, 3, 4). | int (required) |
| family | The SKU family to use. Valid values: (C, P). (C = Basic/Standard, P = Premium). | 'C''P' (required) |
| name | The type of Redis cache to deploy. Valid values: (Basic, Standard, Premium) | 'Basic''Premium''Standard' (required) |


### RedisCommonPropertiesTenantSettings

| Name | Description | Value |
|-|-|-|
| {customized property} |  | string |
## Microsoft.Cache/redis/accessPolicies@2023-08-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Cache/redis/accessPolicies@2023-08-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      permissions = "string"
    }
  })
}

```

### redis/accessPolicies

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:redis |
| properties | Properties of an access policy. | RedisCacheAccessPolicyProperties |


### RedisCacheAccessPolicyProperties

| Name | Description | Value |
|-|-|-|
| permissions | Permissions for the access policy. Learn how to configure permissions athttps://aka.ms/redis/AADPreRequisites | string (required) |
## Microsoft.Cache/redis/accessPolicyAssignments@2023-08-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Cache/redis/accessPolicyAssignments@2023-08-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      accessPolicyName = "string"
      objectId = "string"
      objectIdAlias = "string"
    }
  })
}

```

### redis/accessPolicyAssignments

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:redis |
| properties | Properties of an access policy assignment | RedisCacheAccessPolicyAssignmentProperties |


### RedisCacheAccessPolicyAssignmentProperties

| Name | Description | Value |
|-|-|-|
| accessPolicyName | The name of the access policy that is being assigned | string (required)Constraints:Pattern =^([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]|[a-zA-Z0-9])$ |
| objectId | Object Id to assign access policy to | string (required) |
| objectIdAlias | User friendly name for object id. Also represents username for token based authentication | string (required) |
## Microsoft.Cache/redis/firewallRules@2023-08-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Cache/redis/firewallRules@2023-08-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      endIP = "string"
      startIP = "string"
    }
  })
}

```

### redis/firewallRules

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-256Valid characters:Alphanumerics |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:redis |
| properties | redis cache firewall rule properties | RedisFirewallRuleProperties(required) |


### RedisFirewallRuleProperties

| Name | Description | Value |
|-|-|-|
| endIP | highest IP address included in the range | string (required) |
| startIP | lowest IP address included in the range | string (required) |
## Microsoft.Cache/redis/linkedServers@2023-08-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Cache/redis/linkedServers@2023-08-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      linkedRedisCacheId = "string"
      linkedRedisCacheLocation = "string"
      serverRole = "string"
    }
  })
}

```

### redis/linkedServers

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:redis |
| properties | Properties required to create a linked server. | RedisLinkedServerCreatePropertiesOrRedisLinkedServer...(required) |


### RedisLinkedServerCreatePropertiesOrRedisLinkedServer...

| Name | Description | Value |
|-|-|-|
| linkedRedisCacheId | Fully qualified resourceId of the linked redis cache. | string (required) |
| linkedRedisCacheLocation | Location of the linked redis cache. | string (required) |
| serverRole | Role of the linked server. | 'Primary''Secondary' (required) |
## Microsoft.Cache/redis/patchSchedules@2023-08-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Cache/redis/patchSchedules@2023-08-01"
  name = "default"
  parent_id = "string"
  body = jsonencode({
    properties = {
      scheduleEntries = [
        {
          dayOfWeek = "string"
          maintenanceWindow = "string"
          startHourUtc = int
        }
      ]
    }
  })
}

```

### redis/patchSchedules

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'default' |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:redis |
| properties | List of patch schedules for a Redis cache. | ScheduleEntries(required) |


### ScheduleEntries

| Name | Description | Value |
|-|-|-|
| scheduleEntries | List of patch schedules for a Redis cache. | ScheduleEntry[] (required) |


### ScheduleEntry

| Name | Description | Value |
|-|-|-|
| dayOfWeek | Day of the week when a cache can be patched. | 'Everyday''Friday''Monday''Saturday''Sunday''Thursday''Tuesday''Wednesday''Weekend' (required) |
| maintenanceWindow | ISO8601 timespan specifying how much time cache patching can take. | string |
| startHourUtc | Start hour after which cache patching can start. | int (required) |
## Microsoft.Cache/redis/privateEndpointConnections@2023-08-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Cache/redis/privateEndpointConnections@2023-08-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      privateEndpoint = {}
      privateLinkServiceConnectionState = {
        actionsRequired = "string"
        description = "string"
        status = "string"
      }
    }
  })
}

```

### redis/privateEndpointConnections

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:redis |
| properties | Resource properties. | PrivateEndpointConnectionProperties |


### PrivateEndpointConnectionProperties

| Name | Description | Value |
|-|-|-|
| privateEndpoint | The resource of private end point. | PrivateEndpoint |
| privateLinkServiceConnectionState | A collection of information about the state of the connection between service consumer and provider. | PrivateLinkServiceConnectionState(required) |


### PrivateLinkServiceConnectionState

| Name | Description | Value |
|-|-|-|
| actionsRequired | A message indicating if changes on the service provider require any updates on the consumer. | string |
| description | The reason for approval/rejection of the connection. | string |
| status | Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service. | 'Approved''Pending''Rejected' |
## Microsoft.Cache/redisEnterprise@2023-11-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Cache/redisEnterprise@2023-11-01"
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
      encryption = {
        customerManagedKeyEncryption = {
          keyEncryptionKeyIdentity = {
            identityType = "string"
            userAssignedIdentityResourceId = "string"
          }
          keyEncryptionKeyUrl = "string"
        }
      }
      minimumTlsVersion = "string"
    }
    zones = [
      "string"
    ]
    sku = {
      capacity = int
      name = "string"
    }
  })
}

```

### redisEnterprise

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| sku | The SKU to create, which affects price, performance, and features. | Sku(required) |
| identity | The identity of the resource. | ManagedServiceIdentity |
| properties | Other properties of the cluster. | ClusterProperties |
| zones | The Availability Zones where this cluster will be deployed. | string[] |


### ManagedServiceIdentity

| Name | Description | Value |
|-|-|-|
| type | Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed). | 'None''SystemAssigned''SystemAssigned, UserAssigned''UserAssigned' (required) |
| userAssignedIdentities | The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests. | UserAssignedIdentities |


### UserAssignedIdentities

| Name | Description | Value |
|-|-|-|
| {customized property} |  | UserAssignedIdentity |


### ClusterProperties

| Name | Description | Value |
|-|-|-|
| encryption | Encryption-at-rest configuration for the cluster. | ClusterPropertiesEncryption |
| minimumTlsVersion | The minimum TLS version for the cluster to support, e.g. '1.2' | '1.0''1.1''1.2' |


### ClusterPropertiesEncryption

| Name | Description | Value |
|-|-|-|
| customerManagedKeyEncryption | All Customer-managed key encryption properties for the resource. Set this to an empty object to use Microsoft-managed key encryption. | ClusterPropertiesEncryptionCustomerManagedKeyEncrypt... |


### ClusterPropertiesEncryptionCustomerManagedKeyEncrypt...

| Name | Description | Value |
|-|-|-|
| keyEncryptionKeyIdentity | All identity configuration for Customer-managed key settings defining which identity should be used to auth to Key Vault. | ClusterPropertiesEncryptionCustomerManagedKeyEncrypt... |
| keyEncryptionKeyUrl | Key encryption key Url, versioned only. Ex:https://contosovault.vault.azure.net/keys/contosokek/562a4bb76b524a1493a6afe8e536ee78 | string |


### ClusterPropertiesEncryptionCustomerManagedKeyEncrypt...

| Name | Description | Value |
|-|-|-|
| identityType | Only userAssignedIdentity is supported in this API version; other types may be supported in the future | 'systemAssignedIdentity''userAssignedIdentity' |
| userAssignedIdentityResourceId | User assigned identity to use for accessing key encryption key Url. Ex: /subscriptions/{sub uuid}/resourceGroups/{resource group}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/myId. | string |


### Sku

| Name | Description | Value |
|-|-|-|
| capacity | The size of the RedisEnterprise cluster. Defaults to 2 or 3 depending on SKU. Valid values are (2, 4, 6, ...) for Enterprise SKUs and (3, 9, 15, ...) for Flash SKUs. | int |
| name | The type of RedisEnterprise cluster to deploy. Possible values: (Enterprise_E10, EnterpriseFlash_F300 etc.) | 'EnterpriseFlash_F1500''EnterpriseFlash_F300''EnterpriseFlash_F700''Enterprise_E10''Enterprise_E100''Enterprise_E20''Enterprise_E50' (required) |
## Microsoft.Cache/redisEnterprise/databases@2023-11-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Cache/redisEnterprise/databases@2023-11-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      clientProtocol = "string"
      clusteringPolicy = "string"
      evictionPolicy = "string"
      geoReplication = {
        groupNickname = "string"
        linkedDatabases = [
          {
            id = "string"
          }
        ]
      }
      modules = [
        {
          args = "string"
          name = "string"
        }
      ]
      persistence = {
        aofEnabled = bool
        aofFrequency = "string"
        rdbEnabled = bool
        rdbFrequency = "string"
      }
      port = int
    }
  })
}

```

### redisEnterprise/databases

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:redisEnterprise |
| properties | Other properties of the database. | DatabaseProperties |


### DatabaseProperties

| Name | Description | Value |
|-|-|-|
| clientProtocol | Specifies whether redis clients can connect using TLS-encrypted or plaintext redis protocols. Default is TLS-encrypted. | 'Encrypted''Plaintext' |
| clusteringPolicy | Clustering policy - default is OSSCluster. Specified at create time. | 'EnterpriseCluster''OSSCluster' |
| evictionPolicy | Redis eviction policy - default is VolatileLRU | 'AllKeysLFU''AllKeysLRU''AllKeysRandom''NoEviction''VolatileLFU''VolatileLRU''VolatileRandom''VolatileTTL' |
| geoReplication | Optional set of properties to configure geo replication for this database. | DatabasePropertiesGeoReplication |
| modules | Optional set of redis modules to enable in this database - modules can only be added at creation time. | Module[] |
| persistence | Persistence settings | Persistence |
| port | TCP port of the database endpoint. Specified at create time. Defaults to an available port. | int |


### DatabasePropertiesGeoReplication

| Name | Description | Value |
|-|-|-|
| groupNickname | Name for the group of linked database resources | string |
| linkedDatabases | List of database resources to link with this database | LinkedDatabase[] |


### LinkedDatabase

| Name | Description | Value |
|-|-|-|
| id | Resource ID of a database resource to link with this database. | string |


### Module

| Name | Description | Value |
|-|-|-|
| args | Configuration options for the module, e.g. 'ERROR_RATE 0.01 INITIAL_SIZE 400'. | string |
| name | The name of the module, e.g. 'RedisBloom', 'RediSearch', 'RedisTimeSeries' | string (required) |


### Persistence

| Name | Description | Value |
|-|-|-|
| aofEnabled | Sets whether AOF is enabled. | bool |
| aofFrequency | Sets the frequency at which data is written to disk. | '1s''always' |
| rdbEnabled | Sets whether RDB is enabled. | bool |
| rdbFrequency | Sets the frequency at which a snapshot of the database is created. | '12h''1h''6h' |
## Microsoft.Cache/redisEnterprise/privateEndpointConnections@2023-11-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Cache/redisEnterprise/privateEndpointConnections@2023-11-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      privateEndpoint = {}
      privateLinkServiceConnectionState = {
        actionsRequired = "string"
        description = "string"
        status = "string"
      }
    }
  })
}

```

### redisEnterprise/privateEndpointConnections

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:redisEnterprise |
| properties | Resource properties. | PrivateEndpointConnectionProperties |


### PrivateEndpointConnectionProperties

| Name | Description | Value |
|-|-|-|
| privateEndpoint | The resource of private end point. | PrivateEndpoint |
| privateLinkServiceConnectionState | A collection of information about the state of the connection between service consumer and provider. | PrivateLinkServiceConnectionState(required) |


### PrivateLinkServiceConnectionState

| Name | Description | Value |
|-|-|-|
| actionsRequired | A message indicating if changes on the service provider require any updates on the consumer. | string |
| description | The reason for approval/rejection of the connection. | string |
| status | Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service. | 'Approved''Pending''Rejected' |
