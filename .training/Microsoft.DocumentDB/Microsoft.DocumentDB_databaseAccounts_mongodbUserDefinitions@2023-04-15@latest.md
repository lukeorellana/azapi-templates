```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DocumentDB/databaseAccounts/mongodbUserDefinitions@2023-04-15"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      customData = "string"
      databaseName = "string"
      mechanisms = "string"
      password = "string"
      roles = [
        {
          db = "string"
          role = "string"
        }
      ]
      userName = "string"
    }
  })
}

```

### databaseAccounts/mongodbUserDefinitions

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:databaseAccounts |
| properties | Properties to create and update an Azure Cosmos DB Mongo User Definition. | MongoUserDefinitionResource |


### MongoUserDefinitionResource

| Name | Description | Value |
|-|-|-|
| customData | A custom definition for the USer Definition. | string |
| databaseName | The database name for which access is being granted for this User Definition. | string |
| mechanisms | The Mongo Auth mechanism. For now, we only support auth mechanism SCRAM-SHA-256. | string |
| password | The password for User Definition. Response does not contain user password. | string |
| roles | The set of roles inherited by the User Definition. | Role[] |
| userName | The user name for User Definition. | string |


### Role

| Name | Description | Value |
|-|-|-|
| db | The database name the role is applied. | string |
| role | The role name. | string |


