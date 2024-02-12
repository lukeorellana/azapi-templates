```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.StorSimple/managers/devices/fileservers@2016-10-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      backupScheduleGroupId = "string"
      description = "string"
      domainName = "string"
      storageDomainId = "string"
    }
  })
}

```

### managers/devices/fileservers

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type: devices |
| properties | The properties. | FileServerProperties(required) |


### FileServerProperties

| Name | Description | Value |
|-|-|-|
| backupScheduleGroupId | The backup policy id. | string (required) |
| description | The description of the file server | string |
| domainName | Domain of the file server | string (required) |
| storageDomainId | The storage domain id. | string (required) |


