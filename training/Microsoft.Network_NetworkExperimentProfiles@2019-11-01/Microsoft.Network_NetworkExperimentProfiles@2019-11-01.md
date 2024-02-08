```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/NetworkExperimentProfiles@2019-11-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      enabledState = "string"
    }
    etag = "string"
  })
}

```

### NetworkExperimentProfiles

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | Resource location. | string |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| etag | Gets a unique read-only string that changes whenever the resource is updated. | string |
| properties | The properties of a Profile | ProfileProperties |


### ProfileProperties

| Name | Description | Value |
|-|-|-|
| enabledState | The state of the Experiment | 'Disabled''Enabled' |


