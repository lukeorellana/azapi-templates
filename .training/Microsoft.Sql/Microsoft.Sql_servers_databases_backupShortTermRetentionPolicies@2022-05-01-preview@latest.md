```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Sql/servers/databases/backupShortTermRetentionPolicies@2022-05-01-preview"
  name = "default"
  parent_id = "string"
  body = jsonencode({
    properties = {
      diffBackupIntervalInHours = int
      retentionDays = int
    }
  })
}

```

### servers/databases/backupShortTermRetentionPolicies

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'default' |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:databases |
| properties | Resource properties. | BackupShortTermRetentionPolicyProperties |


### BackupShortTermRetentionPolicyProperties

| Name | Description | Value |
|-|-|-|
| diffBackupIntervalInHours | The differential backup interval in hours. This is how many interval hours between each differential backup will be supported. This is only applicable to live databases but not dropped databases. | int |
| retentionDays | The backup retention period in days. This is how many days Point-in-Time Restore will be supported. | int |


