```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/privateDnsZones/virtualNetworkLinks@2020-06-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      registrationEnabled = bool
      virtualNetwork = {
        id = "string"
      }
    }
    etag = "string"
  })
}

```

### privateDnsZones/virtualNetworkLinks

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-80Valid characters:Alphanumerics, underscores, periods, and hyphens.Start with alphanumeric. End alphanumeric or underscore. |
| location | The Azure Region where the resource lives | string |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:privateDnsZones |
| etag | The ETag of the virtual network link. | string |
| properties | Properties of the virtual network link to the Private DNS zone. | VirtualNetworkLinkProperties |


### VirtualNetworkLinkProperties

| Name | Description | Value |
|-|-|-|
| registrationEnabled | Is auto-registration of virtual machine records in the virtual network in the Private DNS zone enabled? | bool |
| virtualNetwork | The reference of the virtual network. | SubResource |


### SubResource

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |


