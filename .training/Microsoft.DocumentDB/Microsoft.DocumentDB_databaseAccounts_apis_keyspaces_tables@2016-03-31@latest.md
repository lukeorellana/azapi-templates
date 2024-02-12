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


