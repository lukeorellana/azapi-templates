```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DBforPostgreSQL/flexibleServers/administrators@2023-03-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      principalName = "string"
      principalType = "string"
      tenantId = "string"
    }
  })
}

```

### flexibleServers/administrators

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:flexibleServers |
| properties | Properties of the active directory administrator. | AdministratorPropertiesForAddOrAdministratorProperti... |


### AdministratorPropertiesForAddOrAdministratorProperti...

| Name | Description | Value |
|-|-|-|
| principalName | Active Directory administrator principal name. | string |
| principalType | The principal type used to represent the type of Active Directory Administrator. | 'Group''ServicePrincipal''Unknown''User' |
| tenantId | The tenantId of the Active Directory administrator. | string |


