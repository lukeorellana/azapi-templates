```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ElasticSan/elasticSans/volumegroups/snapshots@2023-01-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      creationData = {
        sourceId = "string"
      }
    }
  })
}

```

### elasticSans/volumegroups/snapshots

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:volumegroups |
| properties | Properties of Volume Snapshot. | SnapshotProperties(required) |


### SnapshotProperties

| Name | Description | Value |
|-|-|-|
| creationData | Data used when creating a volume snapshot. | SnapshotCreationData(required) |


### SnapshotCreationData

| Name | Description | Value |
|-|-|-|
| sourceId | Fully qualified resource ID of the volume. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ElasticSan/elasticSans/{elasticSanName}/volumegroups/{volumeGroupName}/volumes/{volumeName}" | string (required) |


