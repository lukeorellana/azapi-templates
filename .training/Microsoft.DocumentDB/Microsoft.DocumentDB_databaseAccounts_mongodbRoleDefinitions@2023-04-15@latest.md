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


