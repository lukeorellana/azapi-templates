```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DataProtection/backupVaults@2022-11-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  identity {
    type = "string"
  }
  body = jsonencode({
    properties = {
      monitoringSettings = {
        azureMonitorAlertSettings = {
          alertsForAllJobFailures = "string"
        }
      }
      securitySettings = {
        immutabilitySettings = {
          state = "string"
        }
        softDeleteSettings = {
          retentionDurationInDays = int
          state = "string"
        }
      }
      storageSettings = [
        {
          datastoreType = "string"
          type = "string"
        }
      ]
    }
    eTag = "string"
  })
}

```

### backupVaults

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | Resource location. | string |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| eTag | Optional ETag. | string |
| identity | Input Managed Identity Details | DppIdentityDetails |
| properties | BackupVaultResource properties | BackupVault(required) |


### DppIdentityDetails

| Name | Description | Value |
|-|-|-|
| type | The identityType which can be either SystemAssigned or None | string |


### BackupVault

| Name | Description | Value |
|-|-|-|
| monitoringSettings | Monitoring Settings | MonitoringSettings |
| securitySettings | Security Settings | SecuritySettings |
| storageSettings | Storage Settings | StorageSetting[] (required) |


### MonitoringSettings

| Name | Description | Value |
|-|-|-|
| azureMonitorAlertSettings | Settings for Azure Monitor based alerts | AzureMonitorAlertSettings |


### AzureMonitorAlertSettings

| Name | Description | Value |
|-|-|-|
| alertsForAllJobFailures |  | 'Disabled''Enabled' |


### SecuritySettings

| Name | Description | Value |
|-|-|-|
| immutabilitySettings | Immutability Settings at vault level | ImmutabilitySettings |
| softDeleteSettings | Soft delete related settings | SoftDeleteSettings |


### ImmutabilitySettings

| Name | Description | Value |
|-|-|-|
| state | Immutability state | 'Disabled''Locked''Unlocked' |


### SoftDeleteSettings

| Name | Description | Value |
|-|-|-|
| retentionDurationInDays | Soft delete retention duration | int |
| state | State of soft delete | 'AlwaysOn''Off''On' |


### StorageSetting

| Name | Description | Value |
|-|-|-|
| datastoreType | Gets or sets the type of the datastore. | 'ArchiveStore''SnapshotStore''VaultStore' |
| type | Gets or sets the type. | 'GeoRedundant''LocallyRedundant''ZoneRedundant' |


