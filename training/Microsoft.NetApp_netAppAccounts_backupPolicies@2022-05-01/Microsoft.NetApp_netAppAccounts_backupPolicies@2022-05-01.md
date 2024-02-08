```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.NetApp/netAppAccounts/backupPolicies@2022-05-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      dailyBackupsToKeep = int
      enabled = bool
      monthlyBackupsToKeep = int
      weeklyBackupsToKeep = int
    }
  })
}

```

### netAppAccounts/backupPolicies

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-64Valid characters:Alphanumerics, underscores, and hyphens.Start with alphanumeric. |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:netAppAccounts |
| properties | Backup policy Properties | BackupPolicyProperties(required) |


### BackupPolicyProperties

| Name | Description | Value |
|-|-|-|
| dailyBackupsToKeep | Daily backups count to keep | int |
| enabled | The property to decide policy is enabled or not | bool |
| monthlyBackupsToKeep | Monthly backups count to keep | int |
| weeklyBackupsToKeep | Weekly backups count to keep | int |


