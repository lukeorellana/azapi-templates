```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/managementGroups/networkManagerConnections@2021-05-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      description = "string"
      networkManagerId = "string"
    }
  })
}

```

### managementGroups/networkManagerConnections

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type: managementGroups |
| properties | The scope connection properties | NetworkManagerConnectionProperties |


### NetworkManagerConnectionProperties

| Name | Description | Value |
|-|-|-|
| description | A description of the scope connection. | string |
| networkManagerId | Network Manager Id. | string |


