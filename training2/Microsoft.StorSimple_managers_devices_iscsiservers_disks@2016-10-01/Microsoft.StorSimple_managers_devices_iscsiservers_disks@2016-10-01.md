```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.StorSimple/managers/devices/iscsiservers/disks@2016-10-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      accessControlRecords = [
        "string"
      ]
      dataPolicy = "string"
      description = "string"
      diskStatus = "string"
      monitoringStatus = "string"
      provisionedCapacityInBytes = int
    }
  })
}

```

### managers/devices/iscsiservers/disks

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:iscsiservers |
| properties | The properties. | IscsiDiskProperties(required) |


### IscsiDiskProperties

| Name | Description | Value |
|-|-|-|
| accessControlRecords | The access control records. | string[] (required) |
| dataPolicy | The data policy. | 'Cloud''Invalid''Local''Tiered' (required) |
| description | The description. | string |
| diskStatus | The disk status. | 'Offline''Online' (required) |
| monitoringStatus | The monitoring. | 'Disabled''Enabled' (required) |
| provisionedCapacityInBytes | The provisioned capacity in bytes. | int (required) |


