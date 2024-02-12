```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DataLakeStore/accounts@2016-11-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  identity {
    type = "SystemAssigned"
  }
  body = jsonencode({
    properties = {
      defaultGroup = "string"
      encryptionConfig = {
        keyVaultMetaInfo = {
          encryptionKeyName = "string"
          encryptionKeyVersion = "string"
          keyVaultResourceId = "string"
        }
        type = "string"
      }
      encryptionState = "string"
      firewallAllowAzureIps = "string"
      firewallRules = [
        {
          name = "string"
          properties = {
            endIpAddress = "string"
            startIpAddress = "string"
          }
        }
      ]
      firewallState = "string"
      newTier = "string"
      trustedIdProviders = [
        {
          name = "string"
          properties = {
            idProvider = "string"
          }
        }
      ]
      trustedIdProviderState = "string"
      virtualNetworkRules = [
        {
          name = "string"
          properties = {
            subnetId = "string"
          }
        }
      ]
    }
  })
}

```

### accounts

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 3-24Valid characters:Lowercase letters and numbers.Resource name must be unique across Azure. |
| location | The resource location. | string (required) |
| tags | The resource tags. | Dictionary of tag names and values. SeeTags in templates |
| identity | The Key Vault encryption identity, if any. | EncryptionIdentity |
| properties | The Data Lake Store account properties to use for creating. | CreateDataLakeStoreAccountPropertiesOrDataLakeStoreA... |


### EncryptionIdentity

| Name | Description | Value |
|-|-|-|
| type | The type of encryption being used. Currently the only supported type is 'SystemAssigned'. | 'SystemAssigned' (required) |


### CreateDataLakeStoreAccountPropertiesOrDataLakeStoreA...

| Name | Description | Value |
|-|-|-|
| defaultGroup | The default owner group for all new folders and files created in the Data Lake Store account. | string |
| encryptionConfig | The Key Vault encryption configuration. | EncryptionConfig |
| encryptionState | The current state of encryption for this Data Lake Store account. | 'Disabled''Enabled' |
| firewallAllowAzureIps | The current state of allowing or disallowing IPs originating within Azure through the firewall. If the firewall is disabled, this is not enforced. | 'Disabled''Enabled' |
| firewallRules | The list of firewall rules associated with this Data Lake Store account. | CreateFirewallRuleWithAccountParametersOrFirewallRul...[] |
| firewallState | The current state of the IP address firewall for this Data Lake Store account. | 'Disabled''Enabled' |
| newTier | The commitment tier to use for next month. | 'Commitment_100TB''Commitment_10TB''Commitment_1PB''Commitment_1TB''Commitment_500TB''Commitment_5PB''Consumption' |
| trustedIdProviders | The list of trusted identity providers associated with this Data Lake Store account. | CreateTrustedIdProviderWithAccountParametersOrTruste...[] |
| trustedIdProviderState | The current state of the trusted identity provider feature for this Data Lake Store account. | 'Disabled''Enabled' |
| virtualNetworkRules | The list of virtual network rules associated with this Data Lake Store account. | CreateVirtualNetworkRuleWithAccountParametersOrVirtu...[] |


### EncryptionConfig

| Name | Description | Value |
|-|-|-|
| keyVaultMetaInfo | The Key Vault information for connecting to user managed encryption keys. | KeyVaultMetaInfo |
| type | The type of encryption configuration being used. Currently the only supported types are 'UserManaged' and 'ServiceManaged'. | 'ServiceManaged''UserManaged' (required) |


### KeyVaultMetaInfo

| Name | Description | Value |
|-|-|-|
| encryptionKeyName | The name of the user managed encryption key. | string (required) |
| encryptionKeyVersion | The version of the user managed encryption key. | string (required) |
| keyVaultResourceId | The resource identifier for the user managed Key Vault being used to encrypt. | string (required) |


### CreateFirewallRuleWithAccountParametersOrFirewallRul...

| Name | Description | Value |
|-|-|-|
| name | The unique name of the firewall rule to create. | string (required) |
| properties | The firewall rule properties to use when creating a new firewall rule. | CreateOrUpdateFirewallRulePropertiesOrFirewallRulePr...(required) |


### CreateOrUpdateFirewallRulePropertiesOrFirewallRulePr...

| Name | Description | Value |
|-|-|-|
| endIpAddress | The end IP address for the firewall rule. This can be either ipv4 or ipv6. Start and End should be in the same protocol. | string (required) |
| startIpAddress | The start IP address for the firewall rule. This can be either ipv4 or ipv6. Start and End should be in the same protocol. | string (required) |


### CreateTrustedIdProviderWithAccountParametersOrTruste...

| Name | Description | Value |
|-|-|-|
| name | The unique name of the trusted identity provider to create. | string (required) |
| properties | The trusted identity provider properties to use when creating a new trusted identity provider. | CreateOrUpdateTrustedIdProviderPropertiesOrTrustedId...(required) |


### CreateOrUpdateTrustedIdProviderPropertiesOrTrustedId...

| Name | Description | Value |
|-|-|-|
| idProvider | The URL of this trusted identity provider. | string (required) |


### CreateVirtualNetworkRuleWithAccountParametersOrVirtu...

| Name | Description | Value |
|-|-|-|
| name | The unique name of the virtual network rule to create. | string (required) |
| properties | The virtual network rule properties to use when creating a new virtual network rule. | CreateOrUpdateVirtualNetworkRulePropertiesOrVirtualN...(required) |


### CreateOrUpdateVirtualNetworkRulePropertiesOrVirtualN...

| Name | Description | Value |
|-|-|-|
| subnetId | The resource identifier for the subnet. | string (required) |


