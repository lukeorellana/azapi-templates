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


