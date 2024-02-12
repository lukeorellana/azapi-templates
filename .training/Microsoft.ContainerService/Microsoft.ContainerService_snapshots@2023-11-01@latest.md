```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ContainerService/snapshots@2023-11-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      creationData = {
        sourceResourceId = "string"
      }
      snapshotType = "NodePool"
    }
  })
}

```

### snapshots

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| properties | Properties of a snapshot. | SnapshotProperties |


### SnapshotProperties

| Name | Description | Value |
|-|-|-|
| creationData | CreationData to be used to specify the source agent pool resource ID to create this snapshot. | CreationData |
| snapshotType | The type of a snapshot. The default is NodePool. | 'NodePool' |


### CreationData

| Name | Description | Value |
|-|-|-|
| sourceResourceId | This is the ARM ID of the source object to be used to create the target object. | string |


