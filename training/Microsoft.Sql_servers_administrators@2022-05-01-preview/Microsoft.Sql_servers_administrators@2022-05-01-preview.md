```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Sql/servers/administrators@2022-05-01-preview"
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

### servers/administrators

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'ActiveDirectory' |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:servers |
| properties | Resource properties. | AdministratorProperties |


### AdministratorProperties

| Name | Description | Value |
|-|-|-|
| administratorType | Type of the sever administrator. | 'ActiveDirectory' (required) |
| login | Login name of the server administrator. | string (required) |
| sid | SID (object ID) of the server administrator. | string (required) |
| tenantId | Tenant ID of the administrator. | string |


