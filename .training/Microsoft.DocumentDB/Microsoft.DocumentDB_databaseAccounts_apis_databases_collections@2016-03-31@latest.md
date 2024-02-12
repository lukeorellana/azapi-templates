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


