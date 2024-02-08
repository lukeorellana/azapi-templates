```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Cache/redisEnterprise@2023-11-01"
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
      minimumTlsVersion = "string"
    }
    zones = [
      "string"
    ]
    sku = {
      capacity = int
      name = "string"
    }
  })
}

```

### redisEnterprise

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| sku | The SKU to create, which affects price, performance, and features. | Sku(required) |
| identity | The identity of the resource. | ManagedServiceIdentity |
| properties | Other properties of the cluster. | ClusterProperties |
| zones | The Availability Zones where this cluster will be deployed. | string[] |


### ManagedServiceIdentity

| Name | Description | Value |
|-|-|-|
| type | Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed). | 'None''SystemAssigned''SystemAssigned, UserAssigned''UserAssigned' (required) |
| userAssignedIdentities | The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests. | UserAssignedIdentities |


### UserAssignedIdentities

| Name | Description | Value |
|-|-|-|
| {customized property} |  | UserAssignedIdentity |


### ClusterProperties

| Name | Description | Value |
|-|-|-|
| encryption | Encryption-at-rest configuration for the cluster. | ClusterPropertiesEncryption |
| minimumTlsVersion | The minimum TLS version for the cluster to support, e.g. '1.2' | '1.0''1.1''1.2' |


### ClusterPropertiesEncryption

| Name | Description | Value |
|-|-|-|
| customerManagedKeyEncryption | All Customer-managed key encryption properties for the resource. Set this to an empty object to use Microsoft-managed key encryption. | ClusterPropertiesEncryptionCustomerManagedKeyEncrypt... |


### ClusterPropertiesEncryptionCustomerManagedKeyEncrypt...

| Name | Description | Value |
|-|-|-|
| keyEncryptionKeyIdentity | All identity configuration for Customer-managed key settings defining which identity should be used to auth to Key Vault. | ClusterPropertiesEncryptionCustomerManagedKeyEncrypt... |
| keyEncryptionKeyUrl | Key encryption key Url, versioned only. Ex:https://contosovault.vault.azure.net/keys/contosokek/562a4bb76b524a1493a6afe8e536ee78 | string |


### ClusterPropertiesEncryptionCustomerManagedKeyEncrypt...

| Name | Description | Value |
|-|-|-|
| identityType | Only userAssignedIdentity is supported in this API version; other types may be supported in the future | 'systemAssignedIdentity''userAssignedIdentity' |
| userAssignedIdentityResourceId | User assigned identity to use for accessing key encryption key Url. Ex: /subscriptions/{sub uuid}/resourceGroups/{resource group}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/myId. | string |


### Sku

| Name | Description | Value |
|-|-|-|
| capacity | The size of the RedisEnterprise cluster. Defaults to 2 or 3 depending on SKU. Valid values are (2, 4, 6, ...) for Enterprise SKUs and (3, 9, 15, ...) for Flash SKUs. | int |
| name | The type of RedisEnterprise cluster to deploy. Possible values: (Enterprise_E10, EnterpriseFlash_F300 etc.) | 'EnterpriseFlash_F1500''EnterpriseFlash_F300''EnterpriseFlash_F700''Enterprise_E10''Enterprise_E100''Enterprise_E20''Enterprise_E50' (required) |


