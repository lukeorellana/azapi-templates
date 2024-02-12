```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.StorSimple/managers/devices/iscsiservers@2016-10-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      backupScheduleGroupId = "string"
      chapId = "string"
      description = "string"
      reverseChapId = "string"
      storageDomainId = "string"
    }
  })
}

```

### managers/devices/iscsiservers

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type: devices |
| properties | The properties. | IscsiServerProperties(required) |


### IscsiServerProperties

| Name | Description | Value |
|-|-|-|
| backupScheduleGroupId | The backup policy id. | string (required) |
| chapId | The chap id. | string |
| description | The description. | string |
| reverseChapId | The reverse chap id. | string |
| storageDomainId | The storage domain id. | string (required) |


