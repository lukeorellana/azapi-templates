```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Synapse/workspaces/kustoPools/principalAssignments@2021-06-01-preview"
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

### workspaces/kustoPools/principalAssignments

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:kustoPools |
| properties | The cluster principal. | ClusterPrincipalProperties |


### ClusterPrincipalProperties

| Name | Description | Value |
|-|-|-|
| principalId | The principal ID assigned to the cluster principal. It can be a user email, application ID, or security group name. | string (required) |
| principalType | Principal type. | 'App''Group''User' (required) |
| role | Cluster principal role. | 'AllDatabasesAdmin''AllDatabasesViewer' (required) |
| tenantId | The tenant id of the principal | string |


