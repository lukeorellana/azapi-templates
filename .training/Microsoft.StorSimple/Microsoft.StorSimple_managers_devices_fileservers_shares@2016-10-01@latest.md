```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.StorSimple/managers/devices/fileservers/shares@2016-10-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      adminUser = "string"
      dataPolicy = "string"
      description = "string"
      monitoringStatus = "string"
      provisionedCapacityInBytes = int
      shareStatus = "string"
    }
  })
}

```

### managers/devices/fileservers/shares

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:fileservers |
| properties | The properties. | FileShareProperties(required) |


### FileShareProperties

| Name | Description | Value |
|-|-|-|
| adminUser | The user/group who will have full permission in this share. Active directory email address. Example: xyz@contoso.com or Contoso\xyz. | string (required) |
| dataPolicy | The data policy | 'Cloud''Invalid''Local''Tiered' (required) |
| description | Description for file share | string |
| monitoringStatus | The monitoring status | 'Disabled''Enabled' (required) |
| provisionedCapacityInBytes | The total provisioned capacity in Bytes | int (required) |
| shareStatus | The Share Status | 'Offline''Online' (required) |


