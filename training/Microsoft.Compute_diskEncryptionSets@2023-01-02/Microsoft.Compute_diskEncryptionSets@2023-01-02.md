```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Compute/diskEncryptionSets@2023-01-02"
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
      activeKey = {
        keyUrl = "string"
        sourceVault = {
          id = "string"
        }
      }
      encryptionType = "string"
      federatedClientId = "string"
      rotationToLatestKeyVersionEnabled = bool
    }
  })
}

```

### diskEncryptionSets

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 1-80Valid characters:Alphanumerics, underscores, and hyphens. |
| location | Resource location | string (required) |
| tags | Resource tags | Dictionary of tag names and values. SeeTags in templates |
| identity | The managed identity for the disk encryption set. It should be given permission on the key vault before it can be used to encrypt disks. | EncryptionSetIdentity |
| properties |  | EncryptionSetProperties |


### EncryptionSetIdentity

| Name | Description | Value |
|-|-|-|
| type | The type of Managed Identity used by the DiskEncryptionSet. Only SystemAssigned is supported for new creations. Disk Encryption Sets can be updated with Identity type None during migration of subscription to a new Azure Active Directory tenant; it will cause the encrypted resources to lose access to the keys. | 'None''SystemAssigned''SystemAssigned, UserAssigned''UserAssigned' |
| userAssignedIdentities | The list of user identities associated with the disk encryption set. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'. | object |


### EncryptionSetProperties

| Name | Description | Value |
|-|-|-|
| activeKey | The key vault key which is currently used by this disk encryption set. | KeyForDiskEncryptionSet |
| encryptionType | The type of key used to encrypt the data of the disk. | 'ConfidentialVmEncryptedWithCustomerKey''EncryptionAtRestWithCustomerKey''EncryptionAtRestWithPlatformAndCustomerKeys' |
| federatedClientId | Multi-tenant application client id to access key vault in a different tenant. Setting the value to 'None' will clear the property. | string |
| rotationToLatestKeyVersionEnabled | Set this flag to true to enable auto-updating of this disk encryption set to the latest key version. | bool |


### KeyForDiskEncryptionSet

| Name | Description | Value |
|-|-|-|
| keyUrl | Fully versioned Key Url pointing to a key in KeyVault. Version segment of the Url is required regardless of rotationToLatestKeyVersionEnabled value. | string (required) |
| sourceVault | Resource id of the KeyVault containing the key or secret. This property is optional and cannot be used if the KeyVault subscription is not the same as the Disk Encryption Set subscription. | SourceVault |


### SourceVault

| Name | Description | Value |
|-|-|-|
| id | Resource Id | string |


