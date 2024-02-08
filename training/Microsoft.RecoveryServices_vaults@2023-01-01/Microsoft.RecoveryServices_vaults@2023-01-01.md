```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.RecoveryServices/vaults@2023-01-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  identity {
    type = "string"
    identity_ids = []
  }
  body = jsonencode({
    properties = {
      encryption = {
        infrastructureEncryption = "string"
        kekIdentity = {
          userAssignedIdentity = "string"
          useSystemAssignedIdentity = bool
        }
        keyVaultProperties = {
          keyUri = "string"
        }
      }
      monitoringSettings = {
        azureMonitorAlertSettings = {
          alertsForAllJobFailures = "string"
        }
        classicAlertSettings = {
          alertsForCriticalOperations = "string"
        }
      }
      moveDetails = {}
      publicNetworkAccess = "string"
      redundancySettings = {}
      securitySettings = {
        immutabilitySettings = {
          state = "string"
        }
      }
      upgradeDetails = {}
    }
    sku = {
      capacity = "string"
      family = "string"
      name = "string"
      size = "string"
      tier = "string"
    }
    etag = "string"
  })
}

```

### vaults

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 2-50Valid characters:Alphanumerics and hyphens.Start with letter. |
| location | Resource location. | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| sku | Identifies the unique system identifier for each Azure resource. | Sku |
| etag | Optional ETag. | string |
| identity | Identity for the resource. | IdentityData |
| properties | Properties of the vault. | VaultProperties |


### IdentityData

| Name | Description | Value |
|-|-|-|
| type | The type of managed identity used. The type 'SystemAssigned, UserAssigned' includes both an implicitly created identity and a set of user-assigned identities. The type 'None' will remove any identities. | 'None''SystemAssigned''SystemAssigned, UserAssigned''UserAssigned' (required) |
| userAssignedIdentities | The list of user-assigned identities associated with the resource. The user-assigned identity dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'. | object |


### VaultProperties

| Name | Description | Value |
|-|-|-|
| encryption | Customer Managed Key details of the resource. | VaultPropertiesEncryption |
| monitoringSettings | Monitoring Settings of the vault | MonitoringSettings |
| moveDetails | The details of the latest move operation performed on the Azure Resource | VaultPropertiesMoveDetails |
| publicNetworkAccess | property to enable or disable resource provider inbound network traffic from public clients | 'Disabled''Enabled' |
| redundancySettings | The redundancy Settings of a Vault | VaultPropertiesRedundancySettings |
| securitySettings | Security Settings of the vault | SecuritySettings |
| upgradeDetails | Details for upgrading vault. | UpgradeDetails |


### VaultPropertiesEncryption

| Name | Description | Value |
|-|-|-|
| infrastructureEncryption | Enabling/Disabling the Double Encryption state | 'Disabled''Enabled' |
| kekIdentity | The details of the identity used for CMK | CmkKekIdentity |
| keyVaultProperties | The properties of the Key Vault which hosts CMK | CmkKeyVaultProperties |


### CmkKekIdentity

| Name | Description | Value |
|-|-|-|
| userAssignedIdentity | The user assigned identity to be used to grant permissions in case the type of identity used is UserAssigned | string |
| useSystemAssignedIdentity | Indicate that system assigned identity should be used. Mutually exclusive with 'userAssignedIdentity' field | bool |


### CmkKeyVaultProperties

| Name | Description | Value |
|-|-|-|
| keyUri | The key uri of the Customer Managed Key | string |


### MonitoringSettings

| Name | Description | Value |
|-|-|-|
| azureMonitorAlertSettings | Settings for Azure Monitor based alerts | AzureMonitorAlertSettings |
| classicAlertSettings | Settings for classic alerts | ClassicAlertSettings |


### AzureMonitorAlertSettings

| Name | Description | Value |
|-|-|-|
| alertsForAllJobFailures |  | 'Disabled''Enabled' |


### ClassicAlertSettings

| Name | Description | Value |
|-|-|-|
| alertsForCriticalOperations |  | 'Disabled''Enabled' |


### SecuritySettings

| Name | Description | Value |
|-|-|-|
| immutabilitySettings | Immutability Settings of a vault | ImmutabilitySettings |


### ImmutabilitySettings

| Name | Description | Value |
|-|-|-|
| state |  | 'Disabled''Locked''Unlocked' |


### Sku

| Name | Description | Value |
|-|-|-|
| capacity | The sku capacity | string |
| family | The sku family | string |
| name | Name of SKU is RS0 (Recovery Services 0th version) and the tier is standard tier. They do not have affect on backend storage redundancy or any other vault settings. To manage storage redundancy, use the backupstorageconfig | 'RS0''Standard' (required) |
| size | The sku size | string |
| tier | The Sku tier. | string |


