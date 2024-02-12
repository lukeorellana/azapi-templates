```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/networkManagerConnections@2023-04-01"
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

### networkManagerConnections

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| scope | Use when creating an extension resource at a scope that is different than the deployment scope. | Target resourceFor Bicep, set this property to the symbolic name of the resource to apply theextension resource. |
| properties | The scope connection properties | NetworkManagerConnectionProperties |


### NetworkManagerConnectionProperties

| Name | Description | Value |
|-|-|-|
| description | A description of the network manager connection. | string |
| networkManagerId | Network Manager Id. | string |


