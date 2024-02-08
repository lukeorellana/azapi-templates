```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Sql/managedInstances/restorableDroppedDatabases/backupShortTermRetentionPolicies@2022-05-01-preview"
  name = "default"
  parent_id = "string"
  body = jsonencode({
    properties = {
      retentionDays = int
    }
  })
}

```

### managedInstances/restorableDroppedDatabases/backupSh...

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'default' |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type: restorableDroppedDatabases |
| properties | Resource properties. | ManagedBackupShortTermRetentionPolicyProperties |


### ManagedBackupShortTermRetentionPolicyProperties

| Name | Description | Value |
|-|-|-|
| retentionDays | The backup retention period in days. This is how many days Point-in-Time Restore will be supported. | int |

