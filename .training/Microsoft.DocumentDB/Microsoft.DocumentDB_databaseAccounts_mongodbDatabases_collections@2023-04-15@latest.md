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


