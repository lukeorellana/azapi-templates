```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.StorSimple/managers/devices/backupPolicies@2017-06-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      volumeIds = [
        "string"
      ]
    }
    kind = "Series8000"
  })
}

```

### managers/devices/backupPolicies

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| kind | The Kind of the object. Currently only Series8000 is supported | 'Series8000' |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type: devices |
| properties | The properties of the backup policy. | BackupPolicyProperties(required) |


### BackupPolicyProperties

| Name | Description | Value |
|-|-|-|
| volumeIds | The path IDs of the volumes which are part of the backup policy. | string[] (required) |


