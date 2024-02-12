```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AzureData/sqlServerRegistrations@2019-07-24-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      propertyBag = "string"
      resourceGroup = "string"
      subscriptionId = "string"
    }
  })
}

```

### sqlServerRegistrations

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| properties | Resource properties. | SqlServerRegistrationProperties |


### SqlServerRegistrationProperties

| Name | Description | Value |
|-|-|-|
| propertyBag | Optional Properties as JSON string | string |
| resourceGroup | Resource Group Name | string |
| subscriptionId | Subscription Id | string |


