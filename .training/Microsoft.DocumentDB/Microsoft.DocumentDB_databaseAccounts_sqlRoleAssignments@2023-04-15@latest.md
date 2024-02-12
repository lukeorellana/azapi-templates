```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DocumentDB/databaseAccounts/sqlRoleAssignments@2023-04-15"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      principalId = "string"
      roleDefinitionId = "string"
      scope = "string"
    }
  })
}

```

### databaseAccounts/sqlRoleAssignments

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:databaseAccounts |
| properties | Properties to create and update an Azure Cosmos DB SQL Role Assignment. | SqlRoleAssignmentResource |


### SqlRoleAssignmentResource

| Name | Description | Value |
|-|-|-|
| principalId | The unique identifier for the associated AAD principal in the AAD graph to which access is being granted through this Role Assignment. Tenant ID for the principal is inferred using the tenant associated with the subscription. | string |
| roleDefinitionId | The unique identifier for the associated Role Definition. | string |
| scope | The data plane resource path for which access is being granted through this Role Assignment. | string |


