```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Communication/emailServices@2023-04-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      dataLocation = "string"
    }
  })
}

```

### emailServices

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| properties | The properties of the service. | EmailServiceProperties |


### EmailServiceProperties

| Name | Description | Value |
|-|-|-|
| dataLocation | The location where the email service stores its data at rest. | string (required) |


