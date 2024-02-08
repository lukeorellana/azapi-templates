```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.PowerPlatform/enterprisePolicies@2020-10-30-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  identity {
    type =  "SystemAssigned"
  }
  body = jsonencode({
    properties = {
      encryption = {
        keyVault = {
          id = "string"
          key = {
            name = "string"
            version = "string"
          }
        }
        state = "string"
      }
      lockbox = {
        state = "string"
      }
      networkInjection = {
        virtualNetworks = {
          nextLink = "string"
          value = [
            {
              id = "string"
              subnet = {
                name = "string"
              }
            }
          ]
        }
      }
    }
    kind = "string"
  })
}

```

### enterprisePolicies

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| kind | The kind (type) of Enterprise Policy. | 'Encryption''Identity''Lockbox''NetworkInjection''PrivateEndpoint' (required) |
| identity | The identity of the EnterprisePolicy. | EnterprisePolicyIdentity |
| properties | The properties that define configuration for the enterprise policy | Properties |


### EnterprisePolicyIdentity

| Name | Description | Value |
|-|-|-|
| type | The type of identity used for the EnterprisePolicy. Currently, the only supported type is 'SystemAssigned', which implicitly creates an identity. | 'None''SystemAssigned' |


### Properties

| Name | Description | Value |
|-|-|-|
| encryption | The encryption settings for a configuration store. | PropertiesEncryption |
| lockbox | Settings concerning lockbox. | PropertiesLockbox |
| networkInjection | Settings concerning network injection. | PropertiesNetworkInjection |


### PropertiesEncryption

| Name | Description | Value |
|-|-|-|
| keyVault | Key vault properties. | KeyVaultProperties |
| state | The state of onboarding, which only appears in the response. | 'Disabled''Enabled''NotConfigured' |


### KeyVaultProperties

| Name | Description | Value |
|-|-|-|
| id | Uri of KeyVault | string |
| key | Identity of the secret that includes name and version. | KeyProperties |


### KeyProperties

| Name | Description | Value |
|-|-|-|
| name | The identifier of the key vault key used to encrypt data. | string |
| version | The version of the identity which will be used to access key vault. | string |


### PropertiesLockbox

| Name | Description | Value |
|-|-|-|
| state | lockbox configuration | 'Disabled''Enabled''NotConfigured' |


### PropertiesNetworkInjection

| Name | Description | Value |
|-|-|-|
| virtualNetworks | Network injection configuration | VirtualNetworkPropertiesList |


### VirtualNetworkPropertiesList

| Name | Description | Value |
|-|-|-|
| nextLink | Next page link if any. | string |
| value | Array of virtual networks. | VirtualNetworkProperties[] |


### VirtualNetworkProperties

| Name | Description | Value |
|-|-|-|
| id | Uri of the virtual network. | string |
| subnet | Properties of a subnet. | SubnetProperties |


### SubnetProperties

| Name | Description | Value |
|-|-|-|
| name | Subnet name. | string |


