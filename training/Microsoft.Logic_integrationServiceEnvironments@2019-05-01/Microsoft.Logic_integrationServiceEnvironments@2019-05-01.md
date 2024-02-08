```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Logic/integrationServiceEnvironments@2019-05-01"
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
      encryptionConfiguration = {
        encryptionKeyReference = {
          keyName = "string"
          keyVault = {
            id = "string"
          }
          keyVersion = "string"
        }
      }
      endpointsConfiguration = {
        connector = {
          accessEndpointIpAddresses = [
            {
              address = "string"
            }
          ]
          outgoingIpAddresses = [
            {
              address = "string"
            }
          ]
        }
        workflow = {
          accessEndpointIpAddresses = [
            {
              address = "string"
            }
          ]
          outgoingIpAddresses = [
            {
              address = "string"
            }
          ]
        }
      }
      integrationServiceEnvironmentId = "string"
      networkConfiguration = {
        accessEndpoint = {
          type = "string"
        }
        subnets = [
          {
            id = "string"
          }
        ]
        virtualNetworkAddressSpace = "string"
      }
      provisioningState = "string"
      state = "string"
    }
    sku = {
      capacity = int
      name = "string"
    }
  })
}

```

### integrationServiceEnvironments

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 1-80Valid characters:Alphanumerics, hyphens, periods, and underscores. |
| location | The resource location. | string |
| tags | The resource tags. | Dictionary of tag names and values. SeeTags in templates |
| sku | The sku. | IntegrationServiceEnvironmentSku |
| identity | Managed service identity properties. | ManagedServiceIdentity |
| properties | The integration service environment properties. | IntegrationServiceEnvironmentProperties |


### ManagedServiceIdentity

| Name | Description | Value |
|-|-|-|
| type | Type of managed service identity. The type 'SystemAssigned' includes an implicitly created identity. The type 'None' will remove any identities from the resource. | 'None''SystemAssigned''UserAssigned' (required) |
| userAssignedIdentities | The list of user assigned identities associated with the resource. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName} | object |


### IntegrationServiceEnvironmentProperties

| Name | Description | Value |
|-|-|-|
| encryptionConfiguration | The encryption configuration. | IntegrationServiceEnvironmenEncryptionConfiguration |
| endpointsConfiguration | The endpoints configuration. | FlowEndpointsConfiguration |
| integrationServiceEnvironmentId | Gets the tracking id. | string |
| networkConfiguration | The network configuration. | NetworkConfiguration |
| provisioningState | The provisioning state. | 'Accepted''Canceled''Completed''Created''Creating''Deleted''Deleting''Failed''InProgress''Moving''NotSpecified''Pending''Ready''Registered''Registering''Renewing''Running''Succeeded''Unregistered''Unregistering''Updating''Waiting' |
| state | The integration service environment state. | 'Completed''Deleted''Disabled''Enabled''NotSpecified''Suspended' |


### IntegrationServiceEnvironmenEncryptionConfiguration

| Name | Description | Value |
|-|-|-|
| encryptionKeyReference | The encryption key reference. | IntegrationServiceEnvironmenEncryptionKeyReference |


### IntegrationServiceEnvironmenEncryptionKeyReference

| Name | Description | Value |
|-|-|-|
| keyName | Gets the key name in the Key Vault. | string |
| keyVault | The key vault reference. | ResourceReference |
| keyVersion | Gets the version of the key specified in the keyName property. | string |


### ResourceReference

| Name | Description | Value |
|-|-|-|
| id | The resource id. | string |


### FlowEndpointsConfiguration

| Name | Description | Value |
|-|-|-|
| connector | The connector endpoints. | FlowEndpoints |
| workflow | The workflow endpoints. | FlowEndpoints |


### FlowEndpoints

| Name | Description | Value |
|-|-|-|
| accessEndpointIpAddresses | The access endpoint ip address. | IpAddress[] |
| outgoingIpAddresses | The outgoing ip address. | IpAddress[] |


### IpAddress

| Name | Description | Value |
|-|-|-|
| address | The address. | string |


### NetworkConfiguration

| Name | Description | Value |
|-|-|-|
| accessEndpoint | The access endpoint. | IntegrationServiceEnvironmentAccessEndpoint |
| subnets | The subnets. | ResourceReference[] |
| virtualNetworkAddressSpace | Gets the virtual network address space. | string |


### IntegrationServiceEnvironmentAccessEndpoint

| Name | Description | Value |
|-|-|-|
| type | The access endpoint type. | 'External''Internal''NotSpecified' |


### IntegrationServiceEnvironmentSku

| Name | Description | Value |
|-|-|-|
| capacity | The sku capacity. | int |
| name | The sku name. | 'Developer''NotSpecified''Premium' |


