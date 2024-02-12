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


