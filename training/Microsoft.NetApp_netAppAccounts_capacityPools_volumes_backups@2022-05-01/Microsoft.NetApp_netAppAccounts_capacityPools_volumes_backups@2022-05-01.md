```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.NetApp/netAppAccounts/capacityPools/volumes/backups@2022-05-01"
  name = "string"
  location = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      label = "string"
      useExistingSnapshot = bool
    }
  })
}

```

### netAppAccounts/capacityPools/volumes/backups

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | Resource location | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:volumes |
| properties | Backup Properties | BackupProperties(required) |


### BackupProperties

| Name | Description | Value |
|-|-|-|
| label | Label for backup | string |
| useExistingSnapshot | Manual backup an already existing snapshot. This will always be false for scheduled backups and true/false for manual backups | bool |


