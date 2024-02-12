```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Maps/accounts@2023-06-01"
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
      cors = {
        corsRules = [
          {
            allowedOrigins = [
              "string"
            ]
          }
        ]
      }
      disableLocalAuth = bool
      encryption = {
        customerManagedKeyEncryption = {
          keyEncryptionKeyIdentity = {
            delegatedIdentityClientId = "string"
            identityType = "string"
            userAssignedIdentityResourceId = "string"
          }
          keyEncryptionKeyUrl = "string"
        }
        infrastructureEncryption = "string"
      }
      linkedResources = [
        {
          id = "string"
          uniqueName = "string"
        }
      ]
    }
    sku = {
      name = "string"
    }
    kind = "string"
  })
}

```

### accounts

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 1-98 (for resource group name and account name)Valid characters:Alphanumerics, underscores, periods, and hyphens.Start with alphanumeric. |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| sku | The SKU of this account. | Sku(required) |
| kind | Get or Set Kind property. | 'Gen1''Gen2' |
| identity | Managed service identity (system assigned and/or user assigned identities) | ManagedServiceIdentity |
| properties | The map account properties. | MapsAccountProperties |


### ManagedServiceIdentity

| Name | Description | Value |
|-|-|-|
| type | Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed). | 'None''SystemAssigned''SystemAssigned, UserAssigned''UserAssigned' (required) |
| userAssignedIdentities | The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests. | object |


### MapsAccountProperties

| Name | Description | Value |
|-|-|-|
| cors | Specifies CORS rules for the Blob service. You can include up to five CorsRule elements in the request. If no CorsRule elements are included in the request body, all CORS rules will be deleted, and CORS will be disabled for the Blob service. | CorsRules |
| disableLocalAuth | Allows toggle functionality on Azure Policy to disable Azure Maps local authentication support. This will disable Shared Keys and Shared Access Signature Token authentication from any usage. | bool |
| encryption | (Optional) Discouraged to include in resource definition. Only needed where it is possible to disable platform (AKA infrastructure) encryption. Azure SQL TDE is an example of this. Values are enabled and disabled. | Encryption |
| linkedResources | The array of associated resources to the Map account. Linked resource in the array cannot individually update, you must update all linked resources in the array together. These resources may be used on operations on the Azure Maps REST API. Access is controlled by the Map Account Managed Identity(s) permissions to those resource(s). | LinkedResource[]Constraints:Max length = 10 |


### CorsRules

| Name | Description | Value |
|-|-|-|
| corsRules | The list of CORS rules. You can include up to five CorsRule elements in the request. | CorsRule[]Constraints:Max length = 5 |


### CorsRule

| Name | Description | Value |
|-|-|-|
| allowedOrigins | Required if CorsRule element is present. A list of origin domains that will be allowed via CORS, or "*" to allow all domains | string[] (required) |


### Encryption

| Name | Description | Value |
|-|-|-|
| customerManagedKeyEncryption | All Customer-managed key encryption properties for the resource. | CustomerManagedKeyEncryption |
| infrastructureEncryption | Values are enabled and disabled. | 'disabled''enabled' |


### CustomerManagedKeyEncryption

| Name | Description | Value |
|-|-|-|
| keyEncryptionKeyIdentity | All identity configuration for Customer-managed key settings defining which identity should be used to auth to Key Vault. | CustomerManagedKeyEncryptionKeyIdentity |
| keyEncryptionKeyUrl | key encryption key Url, versioned or non-versioned. Ex:https://contosovault.vault.azure.net/keys/contosokek/562a4bb76b524a1493a6afe8e536ee78orhttps://contosovault.vault.azure.net/keys/contosokek. | string |


### CustomerManagedKeyEncryptionKeyIdentity

| Name | Description | Value |
|-|-|-|
| delegatedIdentityClientId | delegated identity to use for accessing key encryption key Url. Ex: /subscriptions/fa5fc227-a624-475e-b696-cdd604c735bc/resourceGroups/{resource group}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/myId. Mutually exclusive with identityType systemAssignedIdentity and userAssignedIdentity - internal use only. | stringConstraints:Min length = 36Max length = 36Pattern = "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$" |
| identityType | Values can be systemAssignedIdentity or userAssignedIdentity | 'delegatedResourceIdentity''systemAssignedIdentity''userAssignedIdentity' |
| userAssignedIdentityResourceId | user assigned identity to use for accessing key encryption key Url. Ex: /subscriptions/fa5fc227-a624-475e-b696-cdd604c735bc/resourceGroups/{resource group}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/myId. Mutually exclusive with identityType systemAssignedIdentity and delegatedResourceIdentity. | string |


### LinkedResource

| Name | Description | Value |
|-|-|-|
| id | ARM resource id in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/accounts/{storageName}'. | string (required) |
| uniqueName | A provided name which uniquely identifies the linked resource. | string (required) |


### Sku

| Name | Description | Value |
|-|-|-|
| name | The name of the SKU, in standard format (such as S0). | 'G2''S0''S1' (required) |


