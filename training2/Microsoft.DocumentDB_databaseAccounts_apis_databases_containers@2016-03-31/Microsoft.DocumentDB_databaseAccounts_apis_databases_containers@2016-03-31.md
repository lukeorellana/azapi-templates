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


