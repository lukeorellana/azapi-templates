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


