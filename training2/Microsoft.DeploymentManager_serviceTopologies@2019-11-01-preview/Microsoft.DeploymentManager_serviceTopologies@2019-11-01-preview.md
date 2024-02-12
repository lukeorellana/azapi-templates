```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DeploymentManager/serviceTopologies@2019-11-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      artifactSourceId = "string"
    }
  })
}

```

### serviceTopologies

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| properties | The properties that define the service topology. | ServiceTopologyResourceProperties(required) |


### ServiceTopologyResourceProperties

| Name | Description | Value |
|-|-|-|
| artifactSourceId | The resource Id of the artifact source that contains the artifacts that can be referenced in the service units. | string |


