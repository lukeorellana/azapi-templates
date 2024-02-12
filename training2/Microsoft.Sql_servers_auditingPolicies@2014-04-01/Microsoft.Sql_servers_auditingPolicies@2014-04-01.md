```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Sql/servers/auditingPolicies@2014-04-01"
  name = "default"
  parent_id = "string"
  body = jsonencode({
    properties = {
      auditingState = "string"
      auditLogsTableName = "string"
      eventTypesToAudit = "string"
      fullAuditLogsTableName = "string"
      retentionDays = "string"
      storageAccountKey = "string"
      storageAccountName = "string"
      storageAccountResourceGroupName = "string"
      storageAccountSecondaryKey = "string"
      storageAccountSubscriptionId = "string"
      storageTableEndpoint = "string"
    }
  })
}

```

### servers/auditingPolicies

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'default' |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:servers |
| properties | Resource properties. | ServerTableAuditingPolicyProperties |


### ServerTableAuditingPolicyProperties

| Name | Description | Value |
|-|-|-|
| auditingState | The state of the policy. | string |
| auditLogsTableName | The audit logs table name. | string |
| eventTypesToAudit | Comma-separated list of event types to audit. | string |
| fullAuditLogsTableName | The full audit logs table name. | string |
| retentionDays | The number of days to keep in the audit logs. | string |
| storageAccountKey | The key of the auditing storage account. | string |
| storageAccountName | The table storage account name | string |
| storageAccountResourceGroupName | The table storage account resource group name | string |
| storageAccountSecondaryKey | The secondary key of the auditing storage account. | string |
| storageAccountSubscriptionId | The table storage subscription Id. | string |
| storageTableEndpoint | The storage table endpoint. | string |


