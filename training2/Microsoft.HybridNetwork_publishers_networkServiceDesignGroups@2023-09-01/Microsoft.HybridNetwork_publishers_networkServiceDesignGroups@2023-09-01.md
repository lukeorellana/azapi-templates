```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.HybridNetwork/publishers/networkServiceDesignGroups@2023-09-01"
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

### publishers/networkServiceDesignGroups

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:publishers |
| properties | network service design group properties. | NetworkServiceDesignGroupPropertiesFormat |


### NetworkServiceDesignGroupPropertiesFormat

| Name | Description | Value |
|-|-|-|
| description | The network service design group description. | string |

