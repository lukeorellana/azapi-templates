```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ElasticSan/elasticSans/volumegroups@2023-01-01"
  name = "string"
  parent_id = "string"
  identity {
    type = "string"
    identity_ids = []
  }
  body = jsonencode({
    properties = {
      encryption = "string"
      encryptionProperties = {
        identity = {
          userAssignedIdentity = "string"
        }
        keyVaultProperties = {
          keyName = "string"
          keyVaultUri = "string"
          keyVersion = "string"
        }
      }
      networkAcls = {
        virtualNetworkRules = [
          {
            action = "Allow"
            id = "string"
          }
        ]
      }
      protocolType = "string"
    }
  })
}

```

### elasticSans/volumegroups

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:elasticSans |
| identity | The identity of the resource. | Identity |
| properties | Properties of VolumeGroup. | VolumeGroupProperties |


### Identity

| Name | Description | Value |
|-|-|-|
| type | The identity type. | 'None''SystemAssigned''UserAssigned' (required) |
| userAssignedIdentities | Gets or sets a list of key value pairs that describe the set of User Assigned identities that will be used with this volume group. The key is the ARM resource identifier of the identity. | IdentityUserAssignedIdentities |


### IdentityUserAssignedIdentities

| Name | Description | Value |
|-|-|-|
| {customized property} |  | UserAssignedIdentity |


### VolumeGroupProperties

| Name | Description | Value |
|-|-|-|
| encryption | Type of encryption | 'EncryptionAtRestWithCustomerManagedKey''EncryptionAtRestWithPlatformKey' |
| encryptionProperties | Encryption Properties describing Key Vault and Identity information | EncryptionProperties |
| networkAcls | A collection of rules governing the accessibility from specific network locations. | NetworkRuleSet |
| protocolType | Type of storage target | 'Iscsi''None' |


### EncryptionProperties

| Name | Description | Value |
|-|-|-|
| identity | The identity to be used with service-side encryption at rest. | EncryptionIdentity |
| keyVaultProperties | Properties provided by key vault. | KeyVaultProperties |


### EncryptionIdentity

| Name | Description | Value |
|-|-|-|
| userAssignedIdentity | Resource identifier of the UserAssigned identity to be associated with server-side encryption on the volume group. | string |


### KeyVaultProperties

| Name | Description | Value |
|-|-|-|
| keyName | The name of KeyVault key. | string |
| keyVaultUri | The Uri of KeyVault. | string |
| keyVersion | The version of KeyVault key. | string |


### NetworkRuleSet

| Name | Description | Value |
|-|-|-|
| virtualNetworkRules | The list of virtual network rules. | VirtualNetworkRule[] |


### VirtualNetworkRule

| Name | Description | Value |
|-|-|-|
| action | The action of virtual network rule. | 'Allow' |
| id | Resource ID of a subnet, for example: /subscriptions/{subscriptionId}/resourceGroups/{groupName}/providers/Microsoft.Network/virtualNetworks/{vnetName}/subnets/{subnetName}. | string (required) |


