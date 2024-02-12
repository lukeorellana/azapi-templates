```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.TestBase/testBaseAccounts@2022-04-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      sku = {
        locations = [
          "string"
        ]
        name = "string"
        resourceType = "string"
        tier = "Standard"
      }
    }
  })
}

```

### testBaseAccounts

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | The geo-location where the resource lives | string (required) |
| tags | The tags of the resource. | Dictionary of tag names and values. SeeTags in templates |
| properties | Properties of a Test Base Account. | TestBaseAccountResourceProperties |


### TestBaseAccountResourceProperties

| Name | Description | Value |
|-|-|-|
| sku | The SKU of the Test Base Account. | TestBaseAccountSKU(required) |


### TestBaseAccountSKU

| Name | Description | Value |
|-|-|-|
| locations | The locations that the SKU is available. | string[] |
| name | The name of the SKU. This is typically a letter + number code, such as B0 or S0. | string (required) |
| resourceType | The type of resource the SKU applies to. | string |
| tier | The tier of this particular SKU. | 'Standard' (required) |


