```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Kusto/clusters/databases/principalAssignments@2023-08-15"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      principalId = "string"
      principalType = "string"
      role = "string"
      tenantId = "string"
    }
  })
}

```

### clusters/databases/principalAssignments

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:databases |
| properties | The database principal. | DatabasePrincipalProperties |


### DatabasePrincipalProperties

| Name | Description | Value |
|-|-|-|
| principalId | The principal ID assigned to the database principal. It can be a user email, application ID, or security group name. | string (required) |
| principalType | Principal type. | 'App''Group''User' (required) |
| role | Database principal role. | 'Admin''Ingestor''Monitor''UnrestrictedViewer''User''Viewer' (required) |
| tenantId | The tenant id of the principal | string |


