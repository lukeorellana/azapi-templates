```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Synapse/privateLinkHubs@2021-06-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      provisioningState = "string"
    }
  })
}

```

### privateLinkHubs

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| properties | PrivateLinkHub resource properties | PrivateLinkHubProperties |


### PrivateLinkHubProperties

| Name | Description | Value |
|-|-|-|
| provisioningState | PrivateLinkHub provisioning state | string |


