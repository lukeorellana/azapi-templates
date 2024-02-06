## Microsoft.FluidRelay/fluidRelayServers@2022-06-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.FluidRelay/fluidRelayServers@2022-06-01"
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
        customerManagedKeyEncryption = {
          keyEncryptionKeyIdentity = {
            identityType = "string"
            userAssignedIdentityResourceId = "string"
          }
          keyEncryptionKeyUrl = "string"
        }
      }
      provisioningState = "string"
      storagesku = "string"
    }
  })
}

```

### fluidRelayServers

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| identity | The type of identity used for the resource. | Identity |
| properties | The resource-specific properties for this resource. | FluidRelayServerProperties |


### Identity

| Name | Description | Value |
|-|-|-|
| type | The identity type. | 'None''SystemAssigned''SystemAssigned, UserAssigned''UserAssigned' |
| userAssignedIdentities | The list of user identities associated with the resource. | object |


### FluidRelayServerProperties

| Name | Description | Value |
|-|-|-|
| encryption | All encryption configuration for a resource. | EncryptionProperties |
| provisioningState | Provision states for FluidRelay RP | 'Canceled''Failed''Succeeded' |
| storagesku | Sku of the storage associated with the resource | 'basic''standard' |


### EncryptionProperties

| Name | Description | Value |
|-|-|-|
| customerManagedKeyEncryption | All Customer-managed key encryption properties for the resource. | CustomerManagedKeyEncryptionProperties |


### CustomerManagedKeyEncryptionProperties

| Name | Description | Value |
|-|-|-|
| keyEncryptionKeyIdentity | All identity configuration for Customer-managed key settings defining which identity should be used to auth to Key Vault. | CustomerManagedKeyEncryptionPropertiesKeyEncryptionK... |
| keyEncryptionKeyUrl | key encryption key Url, with or without a version. Ex:https://contosovault.vault.azure.net/keys/contosokek/562a4bb76b524a1493a6afe8e536ee78orhttps://contosovault.vault.azure.net/keys/contosokek. Key auto rotation is enabled by providing a key uri without version. Otherwise, customer is responsible for rotating the key. The keyEncryptionKeyIdentity(either SystemAssigned or UserAssigned) should have permission to access this key url. | string |


### CustomerManagedKeyEncryptionPropertiesKeyEncryptionK...

| Name | Description | Value |
|-|-|-|
| identityType | Values can be SystemAssigned or UserAssigned | 'SystemAssigned''UserAssigned' |
| userAssignedIdentityResourceId | user assigned identity to use for accessing key encryption key Url. Ex: /subscriptions/fa5fc227-a624-475e-b696-cdd604c735bc/resourceGroups/{resource group}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/myId. Mutually exclusive with identityType systemAssignedIdentity. | string |
