```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.StorSimple/managers/devices/volumeContainers/volumes@2017-06-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      accessControlRecordIds = [
        "string"
      ]
      monitoringStatus = "string"
      sizeInBytes = int
      volumeStatus = "string"
      volumeType = "string"
    }
    kind = "Series8000"
  })
}

```

### managers/devices/volumeContainers/volumes

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| kind | The Kind of the object. Currently only Series8000 is supported | 'Series8000' |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:volumeContainers |
| properties | The properties of the volume. | VolumeProperties(required) |


### VolumeProperties

| Name | Description | Value |
|-|-|-|
| accessControlRecordIds | The IDs of the access control records, associated with the volume. | string[] (required) |
| monitoringStatus | The monitoring status of the volume. | 'Disabled''Enabled' (required) |
| sizeInBytes | The size of the volume in bytes. | int (required) |
| volumeStatus | The volume status. | 'Offline''Online' (required) |
| volumeType | The type of the volume. | 'Archival''LocallyPinned''Tiered' (required) |


