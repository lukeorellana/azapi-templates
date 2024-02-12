```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.MobileNetwork/mobileNetworks/dataNetworks@2023-09-01"
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
    }
  })
}

```

### mobileNetworks/dataNetworks

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-64Valid characters:Alphanumeric, hyphens and a period/dot (.)Start and end with alphanumeric.Note: A period/dot (.) must be followed by an alphanumeric character. |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:mobileNetworks |
| properties | Data network properties. | DataNetworkPropertiesFormat |


### DataNetworkPropertiesFormat

| Name | Description | Value |
|-|-|-|
| description | An optional description for this data network. | string |


