```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.LabServices/labaccounts@2018-10-15"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      enabledRegionSelection = bool
      provisioningState = "string"
      uniqueIdentifier = "string"
    }
  })
}

```

### labaccounts

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | The location of the resource. | string |
| tags | The tags of the resource. | Dictionary of tag names and values. SeeTags in templates |
| properties | The properties of the resource. | LabAccountProperties |


### LabAccountProperties

| Name | Description | Value |
|-|-|-|
| enabledRegionSelection | Represents if region selection is enabled | bool |
| provisioningState | The provisioning status of the resource. | string |
| uniqueIdentifier | The unique immutable identifier of a resource (Guid). | string |


