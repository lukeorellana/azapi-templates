```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/networkManagers/scopeConnections@2023-04-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      description = "string"
      resourceId = "string"
      tenantId = "string"
    }
  })
}

```

### networkManagers/scopeConnections

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:networkManagers |
| properties | The scope connection properties | ScopeConnectionProperties |


### ScopeConnectionProperties

| Name | Description | Value |
|-|-|-|
| description | A description of the scope connection. | string |
| resourceId | Resource ID. | string |
| tenantId | Tenant ID. | string |


