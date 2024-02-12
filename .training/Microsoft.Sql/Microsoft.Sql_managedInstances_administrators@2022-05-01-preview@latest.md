```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Sql/managedInstances/administrators@2022-05-01-preview"
  name = "ActiveDirectory"
  parent_id = "string"
  body = jsonencode({
    properties = {
      administratorType = "ActiveDirectory"
      login = "string"
      sid = "string"
      tenantId = "string"
    }
  })
}

```

### managedInstances/administrators

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'ActiveDirectory' |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:managedInstances |
| properties | Resource properties. | ManagedInstanceAdministratorProperties |


### ManagedInstanceAdministratorProperties

| Name | Description | Value |
|-|-|-|
| administratorType | Type of the managed instance administrator. | 'ActiveDirectory' (required) |
| login | Login name of the managed instance administrator. | string (required) |
| sid | SID (object ID) of the managed instance administrator. | string (required) |
| tenantId | Tenant ID of the managed instance administrator. | string |


