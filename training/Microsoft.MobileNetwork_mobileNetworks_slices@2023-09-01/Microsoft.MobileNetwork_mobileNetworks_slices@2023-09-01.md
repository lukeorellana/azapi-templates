```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.MobileNetwork/mobileNetworks/slices@2023-09-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      description = "string"
      snssai = {
        sd = "string"
        sst = int
      }
    }
  })
}

```

### mobileNetworks/slices

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-64Valid characters:Alphanumerics and hyphens.Start with alphanumeric. |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:mobileNetworks |
| properties | Slice properties. | SlicePropertiesFormat(required) |


### SlicePropertiesFormat

| Name | Description | Value |
|-|-|-|
| description | An optional description for this network slice. | string |
| snssai | Single-network slice selection assistance information (S-NSSAI). Unique at the scope of a mobile network. | Snssai(required) |


### Snssai

| Name | Description | Value |
|-|-|-|
| sd | Slice differentiator (SD). | stringConstraints:Pattern =^[A-Fa-f0-9]{6}$ |
| sst | Slice/service type (SST). | int (required)Constraints:Min value = 0Max value = 255 |


