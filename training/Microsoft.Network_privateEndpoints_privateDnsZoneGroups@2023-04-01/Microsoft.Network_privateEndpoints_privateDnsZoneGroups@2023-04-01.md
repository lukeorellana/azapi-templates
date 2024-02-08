```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/privateEndpoints/privateDnsZoneGroups@2023-04-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      privateDnsZoneConfigs = [
        {
          name = "string"
          properties = {
            privateDnsZoneId = "string"
          }
        }
      ]
    }
  })
}

```

### privateEndpoints/privateDnsZoneGroups

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:privateEndpoints |
| properties | Properties of the private dns zone group. | PrivateDnsZoneGroupPropertiesFormat |


### PrivateDnsZoneGroupPropertiesFormat

| Name | Description | Value |
|-|-|-|
| privateDnsZoneConfigs | A collection of private dns zone configurations of the private dns zone group. | PrivateDnsZoneConfig[] |


### PrivateDnsZoneConfig

| Name | Description | Value |
|-|-|-|
| name | Name of the resource that is unique within a resource group. This name can be used to access the resource. | string |
| properties | Properties of the private dns zone configuration. | PrivateDnsZonePropertiesFormat |


### PrivateDnsZonePropertiesFormat

| Name | Description | Value |
|-|-|-|
| privateDnsZoneId | The resource id of the private dns zone. | string |


