```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ContainerRegistry/registries@2023-01-01-preview"
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
      adminUserEnabled = bool
      anonymousPullEnabled = bool
      dataEndpointEnabled = bool
      encryption = {
        keyVaultProperties = {
          identity = "string"
          keyIdentifier = "string"
        }
        status = "string"
      }
      networkRuleBypassOptions = "string"
      networkRuleSet = {
        defaultAction = "string"
        ipRules = [
          {
            action = "Allow"
            value = "string"
          }
        ]
      }
      policies = {
        azureADAuthenticationAsArmPolicy = {
          status = "string"
        }
        exportPolicy = {
          status = "string"
        }
        quarantinePolicy = {
          status = "string"
        }
        retentionPolicy = {
          days = int
          status = "string"
        }
        softDeletePolicy = {
          retentionDays = int
          status = "string"
        }
        trustPolicy = {
          status = "string"
          type = "Notary"
        }
      }
      publicNetworkAccess = "string"
      zoneRedundancy = "string"
    }
    sku = {
      name = "string"
    }
  })
}

```

### registries

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 5-50Valid characters:Alphanumerics.Resource name must be unique across Azure. |
| location | The location of the resource. This cannot be changed after the resource is created. | string (required) |
| tags | The tags of the resource. | Dictionary of tag names and values. SeeTags in templates |
| sku | The SKU of the container registry. | Sku(required) |
| identity | The identity of the container registry. | IdentityProperties |
| properties | The properties of the container registry. | RegistryProperties |


### IdentityProperties

| Name | Description | Value |
|-|-|-|
| principalId | The principal ID of resource identity. | string |
| tenantId | The tenant ID of resource. | string |
| type | The identity type. | 'None''SystemAssigned''SystemAssigned, UserAssigned''UserAssigned' |
| userAssignedIdentities | The list of user identities associated with the resource. The user identitydictionary key references will be ARM resource ids in the form:'/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'. | object |


### RegistryProperties

| Name | Description | Value |
|-|-|-|
| adminUserEnabled | The value that indicates whether the admin user is enabled. | bool |
| anonymousPullEnabled | Enables registry-wide pull from unauthenticated clients. | bool |
| dataEndpointEnabled | Enable a single data endpoint per region for serving data. | bool |
| encryption | The encryption settings of container registry. | EncryptionProperty |
| networkRuleBypassOptions | Whether to allow trusted Azure services to access a network restricted registry. | 'AzureServices''None' |
| networkRuleSet | The network rule set for a container registry. | NetworkRuleSet |
| policies | The policies for a container registry. | Policies |
| publicNetworkAccess | Whether or not public network access is allowed for the container registry. | 'Disabled''Enabled' |
| zoneRedundancy | Whether or not zone redundancy is enabled for this container registry | 'Disabled''Enabled' |


### EncryptionProperty

| Name | Description | Value |
|-|-|-|
| keyVaultProperties | Key vault properties. | KeyVaultProperties |
| status | Indicates whether or not the encryption is enabled for container registry. | 'disabled''enabled' |


### KeyVaultProperties

| Name | Description | Value |
|-|-|-|
| identity | The client id of the identity which will be used to access key vault. | string |
| keyIdentifier | Key vault uri to access the encryption key. | string |


### NetworkRuleSet

| Name | Description | Value |
|-|-|-|
| defaultAction | The default action of allow or deny when no other rules match. | 'Allow''Deny' (required) |
| ipRules | The IP ACL rules. | IPRule[] |


### IPRule

| Name | Description | Value |
|-|-|-|
| action | The action of IP ACL rule. | 'Allow' |
| value | Specifies the IP or IP range in CIDR format. Only IPV4 address is allowed. | string (required) |


### Policies

| Name | Description | Value |
|-|-|-|
| azureADAuthenticationAsArmPolicy | The policy for using ARM audience token for a container registry. | AzureADAuthenticationAsArmPolicy |
| exportPolicy | The export policy for a container registry. | ExportPolicy |
| quarantinePolicy | The quarantine policy for a container registry. | QuarantinePolicy |
| retentionPolicy | The retention policy for a container registry. | RetentionPolicy |
| softDeletePolicy | The soft delete policy for a container registry. | SoftDeletePolicy |
| trustPolicy | The content trust policy for a container registry. | TrustPolicy |


### AzureADAuthenticationAsArmPolicy

| Name | Description | Value |
|-|-|-|
| status | The value that indicates whether the policy is enabled or not. | 'disabled''enabled' |


### ExportPolicy

| Name | Description | Value |
|-|-|-|
| status | The value that indicates whether the policy is enabled or not. | 'disabled''enabled' |


### QuarantinePolicy

| Name | Description | Value |
|-|-|-|
| status | The value that indicates whether the policy is enabled or not. | 'disabled''enabled' |


### RetentionPolicy

| Name | Description | Value |
|-|-|-|
| days | The number of days to retain an untagged manifest after which it gets purged. | int |
| status | The value that indicates whether the policy is enabled or not. | 'disabled''enabled' |


### SoftDeletePolicy

| Name | Description | Value |
|-|-|-|
| retentionDays | The number of days after which a soft-deleted item is permanently deleted. | int |
| status | The value that indicates whether the policy is enabled or not. | 'disabled''enabled' |


### TrustPolicy

| Name | Description | Value |
|-|-|-|
| status | The value that indicates whether the policy is enabled or not. | 'disabled''enabled' |
| type | The type of trust policy. | 'Notary' |


### Sku

| Name | Description | Value |
|-|-|-|
| name | The SKU name of the container registry. Required for registry creation. | 'Basic''Classic''Premium''Standard' (required) |


