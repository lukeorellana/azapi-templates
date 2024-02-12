```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DBforMySQL/flexibleServers/administrators@2023-06-30"
  name = "ActiveDirectory"
  parent_id = "string"
  body = jsonencode({
    properties = {
      administratorType = "ActiveDirectory"
      identityResourceId = "string"
      login = "string"
      sid = "string"
      tenantId = "string"
    }
  })
}

```

### flexibleServers/administrators

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'ActiveDirectory' |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:flexibleServers |
| properties | The properties of an administrator. | AdministratorProperties |


### AdministratorProperties

| Name | Description | Value |
|-|-|-|
| administratorType | Type of the sever administrator. | 'ActiveDirectory' |
| identityResourceId | The resource id of the identity used for AAD Authentication. | string |
| login | Login name of the server administrator. | string |
| sid | SID (object ID) of the server administrator. | string |
| tenantId | Tenant ID of the administrator. | string |


