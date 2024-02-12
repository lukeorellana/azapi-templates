```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ContainerService/managedclustersnapshots@2023-10-02-preview"
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
      snapshotType = "string"
    }
  })
}

```

### managedclustersnapshots

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| properties | Properties of a managed cluster snapshot. | ManagedClusterSnapshotProperties |


### ManagedClusterSnapshotProperties

| Name | Description | Value |
|-|-|-|
| creationData | CreationData to be used to specify the source resource ID to create this snapshot. | CreationData |
| snapshotType | The type of a snapshot. The default is NodePool. | 'ManagedCluster''NodePool' |


### CreationData

| Name | Description | Value |
|-|-|-|
| sourceResourceId | This is the ARM ID of the source object to be used to create the target object. | string |


