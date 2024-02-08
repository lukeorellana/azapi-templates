```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/staticSites/databaseConnections@2022-09-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      connectionIdentity = "string"
      connectionString = "string"
      region = "string"
      resourceId = "string"
    }
    kind = "string"
  })
}

```

### staticSites/databaseConnections

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| kind | Kind of resource. | string |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:staticSites |
| properties | DatabaseConnection resource specific properties | DatabaseConnectionProperties |


### DatabaseConnectionProperties

| Name | Description | Value |
|-|-|-|
| connectionIdentity | If present, the identity is used in conjunction with connection string to connect to the database. Use of the system-assigned managed identity is indicated with the string 'SystemAssigned', while use of a user-assigned managed identity is indicated with the resource id of the managed identity resource. | string |
| connectionString | The connection string to use to connect to the database. | string |
| region | The region of the database resource. | string (required) |
| resourceId | The resource id of the database. | string (required) |


