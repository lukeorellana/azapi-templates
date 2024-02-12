```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Automation/automationAccounts@2023-11-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
    {customized property} = "string"
  identity {
    type = "string"
    identity_ids = []
  }
  body = jsonencode({
    properties = {
      disableLocalAuth = bool
      encryption = {
        identity = {}
        keySource = "string"
        keyVaultProperties = {
          keyName = "string"
          keyvaultUri = "string"
          keyVersion = "string"
        }
      }
      publicNetworkAccess = bool
      sku = {
        capacity = int
        family = "string"
        name = "string"
      }
    }
  })
}

```

### automationAccounts

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 6-50Valid characters:Alphanumerics and hyphens.Start with letter and end with alphanumeric. |
| location | Gets or sets the location of the resource. | string |
| tags | Gets or sets the tags attached to the resource. | Dictionary of tag names and values. SeeTags in templates |
| identity | Sets the identity property for automation account | Identity |
| properties | Gets or sets account create or update properties. | AutomationAccountCreateOrUpdatePropertiesOrAutomatio... |


### Identity

| Name | Description | Value |
|-|-|-|
| type | The identity type. | 'None''SystemAssigned''SystemAssigned, UserAssigned''UserAssigned' |
| userAssignedIdentities | The list of user identities associated with the resource. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'. | IdentityUserAssignedIdentities |


### IdentityUserAssignedIdentities

| Name | Description | Value |
|-|-|-|
| {customized property} |  | UserAssignedIdentitiesProperties |


### AutomationAccountCreateOrUpdatePropertiesOrAutomatio...

| Name | Description | Value |
|-|-|-|
| disableLocalAuth | Indicates whether requests using non-AAD authentication are blocked | bool |
| encryption | Set the encryption properties for the automation account | EncryptionProperties |
| publicNetworkAccess | Indicates whether traffic on the non-ARM endpoint (Webhook/Agent) is allowed from the public internet | bool |
| sku | Gets or sets account SKU. | Sku |


### EncryptionProperties

| Name | Description | Value |
|-|-|-|
| identity | User identity used for CMK. | EncryptionPropertiesIdentity |
| keySource | Encryption Key Source | 'Microsoft.Automation''Microsoft.Keyvault' |
| keyVaultProperties | Key vault properties. | KeyVaultProperties |


### EncryptionPropertiesIdentity

| Name | Description | Value |
|-|-|-|
| userAssignedIdentity | The user identity used for CMK. It will be an ARM resource id in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'. | For Bicep, you can use theany()function. |


### KeyVaultProperties

| Name | Description | Value |
|-|-|-|
| keyName | The name of key used to encrypt data. | string |
| keyvaultUri | The URI of the key vault key used to encrypt data. | string |
| keyVersion | The key version of the key used to encrypt data. | string |


### Sku

| Name | Description | Value |
|-|-|-|
| capacity | Gets or sets the SKU capacity. | int |
| family | Gets or sets the SKU family. | string |
| name | Gets or sets the SKU name of the account. | 'Basic''Free' (required) |


