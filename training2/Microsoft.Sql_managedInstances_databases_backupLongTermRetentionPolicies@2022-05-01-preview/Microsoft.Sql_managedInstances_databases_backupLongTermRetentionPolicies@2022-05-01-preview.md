```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Sql/managedInstances/databases/backupLongTermRetentionPolicies@2022-05-01-preview"
  name = "default"
  parent_id = "string"
  body = jsonencode({
    properties = {
      monthlyRetention = "string"
      weeklyRetention = "string"
      weekOfYear = int
      yearlyRetention = "string"
    }
  })
}

```

### managedInstances/databases/backupLongTermRetentionPo...

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'default' |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:databases |
| properties | Resource properties. | BaseLongTermRetentionPolicyProperties |


### BaseLongTermRetentionPolicyProperties

| Name | Description | Value |
|-|-|-|
| monthlyRetention | The monthly retention policy for an LTR backup in an ISO 8601 format. | string |
| weeklyRetention | The weekly retention policy for an LTR backup in an ISO 8601 format. | string |
| weekOfYear | The week of year to take the yearly backup in an ISO 8601 format. | int |
| yearlyRetention | The yearly retention policy for an LTR backup in an ISO 8601 format. | string |


