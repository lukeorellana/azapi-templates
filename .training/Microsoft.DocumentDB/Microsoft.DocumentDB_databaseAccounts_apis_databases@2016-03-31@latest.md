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


