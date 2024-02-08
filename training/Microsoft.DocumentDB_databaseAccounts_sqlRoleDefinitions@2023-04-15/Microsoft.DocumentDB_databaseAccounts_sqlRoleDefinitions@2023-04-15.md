```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DocumentDB/databaseAccounts/sqlRoleDefinitions@2023-04-15"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      assignableScopes = [
        "string"
      ]
      permissions = [
        {
          dataActions = [
            "string"
          ]
          notDataActions = [
            "string"
          ]
        }
      ]
      roleName = "string"
      type = "string"
    }
  })
}

```

### databaseAccounts/sqlRoleDefinitions

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:databaseAccounts |
| properties | Properties to create and update an Azure Cosmos DB SQL Role Definition. | SqlRoleDefinitionResource |


### SqlRoleDefinitionResource

| Name | Description | Value |
|-|-|-|
| assignableScopes | A set of fully qualified Scopes at or below which Role Assignments may be created using this Role Definition. This will allow application of this Role Definition on the entire database account or any underlying Database / Collection. Must have at least one element. Scopes higher than Database account are not enforceable as assignable Scopes. Note that resources referenced in assignable Scopes need not exist. | string[] |
| permissions | The set of operations allowed through this Role Definition. | Permission[] |
| roleName | A user-friendly name for the Role Definition. Must be unique for the database account. | string |
| type | Indicates whether the Role Definition was built-in or user created. | 'BuiltInRole''CustomRole' |


### Permission

| Name | Description | Value |
|-|-|-|
| dataActions | An array of data actions that are allowed. | string[] |
| notDataActions | An array of data actions that are denied. | string[] |


