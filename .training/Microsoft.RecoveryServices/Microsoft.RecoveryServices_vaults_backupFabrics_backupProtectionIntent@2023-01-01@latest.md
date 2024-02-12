```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.RecoveryServices/vaults/backupFabrics/backupProtectionIntent@2023-01-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      backupManagementType = "string"
      itemId = "string"
      policyId = "string"
      protectionState = "string"
      sourceResourceId = "string"
      protectionIntentItemType = "string"
      // For remaining properties, see ProtectionIntent objects
    }
    eTag = "string"
  })
}

```

### vaults/backupFabrics/backupProtectionIntent

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | Resource location. | string |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type: backupFabrics |
| eTag | Optional ETag. | string |
| properties | ProtectionIntentResource properties | ProtectionIntent |


### ProtectionIntent

| Name | Description | Value |
|-|-|-|
| backupManagementType | Type of backup management for the backed up item. | 'AzureBackupServer''AzureIaasVM''AzureSql''AzureStorage''AzureWorkload''DPM''DefaultBackup''Invalid''MAB' |
| itemId | ID of the item which is getting protected, In case of Azure Vm , it is ProtectedItemId | string |
| policyId | ID of the backup policy with which this item is backed up. | string |
| protectionState | Backup state of this backup item. | 'Invalid''NotProtected''Protected''Protecting''ProtectionFailed' |
| sourceResourceId | ARM ID of the resource to be backed up. | string |
| protectionIntentItemType | Set the object type | AzureResourceItemAzureWorkloadContainerAutoProtectionIntentAzureWorkloadSQLAutoProtectionIntent(required) |


### AzureResourceProtectionIntent

| Name | Description | Value |
|-|-|-|
| protectionIntentItemType | backup protectionIntent type. | 'AzureResourceItem' (required) |
| friendlyName | Friendly name of the VM represented by this backup item. | string |


### AzureWorkloadContainerAutoProtectionIntent

| Name | Description | Value |
|-|-|-|
| protectionIntentItemType | backup protectionIntent type. | 'AzureWorkloadContainerAutoProtectionIntent' (required) |


### AzureWorkloadSQLAutoProtectionIntent

| Name | Description | Value |
|-|-|-|
| protectionIntentItemType | backup protectionIntent type. | 'AzureWorkloadSQLAutoProtectionIntent' (required) |
| workloadItemType | Workload item type of the item for which intent is to be set | 'Invalid''SAPAseDatabase''SAPAseSystem''SAPHanaDBInstance''SAPHanaDatabase''SAPHanaSystem''SQLDataBase''SQLInstance' |


