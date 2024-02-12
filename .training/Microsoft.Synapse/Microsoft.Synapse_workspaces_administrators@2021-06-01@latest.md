```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Synapse/workspaces/administrators@2021-06-01"
  name = "activeDirectory"
  parent_id = "string"
  body = jsonencode({
    properties = {
      administratorType = "string"
      login = "string"
      sid = "string"
      tenantId = "string"
    }
  })
}

```

### workspaces/administrators

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'activeDirectory' |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:workspaces |
| properties | Workspace active directory administrator properties | AadAdminProperties |


### AadAdminProperties

| Name | Description | Value |
|-|-|-|
| administratorType | Workspace active directory administrator type | string |
| login | Login of the workspace active directory administrator | string |
| sid | Object ID of the workspace active directory administrator | string |
| tenantId | Tenant ID of the workspace active directory administrator | string |


