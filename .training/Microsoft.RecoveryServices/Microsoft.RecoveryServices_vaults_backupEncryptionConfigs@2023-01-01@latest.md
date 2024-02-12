```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.RecoveryServices/vaults/backupEncryptionConfigs@2023-01-01"
  name = "backupResourceEncryptionConfig"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      encryptionAtRestType = "string"
      infrastructureEncryptionState = "string"
      keyUri = "string"
      lastUpdateStatus = "string"
      subscriptionId = "string"
    }
    eTag = "string"
  })
}

```

### vaults/backupEncryptionConfigs

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'backupResourceEncryptionConfig' |
| location | Resource location. | string |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:vaults |
| eTag | Optional ETag. | string |
| properties | BackupResourceEncryptionConfigResource properties | BackupResourceEncryptionConfigOrBackupResourceEncryp... |


### BackupResourceEncryptionConfigOrBackupResourceEncryp...

| Name | Description | Value |
|-|-|-|
| encryptionAtRestType | Encryption At Rest Type | 'CustomerManaged''Invalid''MicrosoftManaged' |
| infrastructureEncryptionState |  | 'Disabled''Enabled''Invalid' |
| keyUri | Key Vault Key URI | string |
| lastUpdateStatus |  | 'Failed''FirstInitialization''Initialized''Invalid''NotEnabled''PartiallyFailed''PartiallySucceeded''Succeeded' |
| subscriptionId | Key Vault Subscription Id | string |


