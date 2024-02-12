```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Security/standards@2021-08-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      category = "string"
      components = [
        {
          key = "string"
        }
      ]
      description = "string"
      displayName = "string"
      supportedClouds = [
        "string"
      ]
    }
    kind = "string"
    etag = "string"
  })
}

```

### standards

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | Location where the resource is stored | string |
| tags | A list of key value pairs that describe the resource. | Dictionary of tag names and values. SeeTags in templates |
| kind | Kind of the resource | string |
| etag | Entity tag is used for comparing two or more entities from the same requested resource. | string |
| properties | Properties of a security standard | StandardProperties |


### StandardProperties

| Name | Description | Value |
|-|-|-|
| category | category of the standard provided | string |
| components | List of component objects containing component unique keys (such as assessment keys) to apply to standard scope.  Currently only supports assessment keys. | StandardComponentProperties[] |
| description | description of the standard | string |
| displayName | display name of the standard, equivalent to the standardId | string |
| supportedClouds | List of all standard supported clouds. | String array containing any of:'AWS''GCP' |


### StandardComponentProperties

| Name | Description | Value |
|-|-|-|
| key | Component Key matching componentMetadata | string |


