```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.MachineLearningServices/registries@2023-10-01"
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
      discoveryUrl = "string"
      intellectualPropertyPublisher = "string"
      managedResourceGroup = {
        resourceId = "string"
      }
      mlFlowRegistryUri = "string"
      publicNetworkAccess = "string"
      regionDetails = [
        {
          acrDetails = [
            {
              systemCreatedAcrAccount = {
                acrAccountName = "string"
                acrAccountSku = "string"
                armResourceId = {
                  resourceId = "string"
                }
              }
              userCreatedAcrAccount = {
                armResourceId = {
                  resourceId = "string"
                }
              }
            }
          ]
          location = "string"
          storageAccountDetails = [
            {
              systemCreatedStorageAccount = {
                allowBlobPublicAccess = bool
                armResourceId = {
                  resourceId = "string"
                }
                storageAccountHnsEnabled = bool
                storageAccountName = "string"
                storageAccountType = "string"
              }
              userCreatedStorageAccount = {
                armResourceId = {
                  resourceId = "string"
                }
              }
            }
          ]
        }
      ]
      registryPrivateEndpointConnections = [
        {
          id = "string"
          location = "string"
          properties = {
            groupIds = [
              "string"
            ]
            privateEndpoint = {
              subnetArmId = "string"
            }
            provisioningState = "string"
            registryPrivateLinkServiceConnectionState = {
              actionsRequired = "string"
              description = "string"
              status = "string"
            }
          }
        }
      ]
    }
    sku = {
      capacity = int
      family = "string"
      name = "string"
      size = "string"
      tier = "string"
    }
    kind = "string"
  })
}

```

### registries

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| sku | Sku details required for ARM contract for Autoscaling. | Sku |
| kind | Metadata used by portal/tooling/etc to render different UX experiences for resources of the same type. | string |
| identity | Managed service identity (system assigned and/or user assigned identities) | ManagedServiceIdentity |
| properties | [Required] Additional attributes of the entity. | RegistryProperties(required) |


### ManagedServiceIdentity

| Name | Description | Value |
|-|-|-|
| type | Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed). | 'None''SystemAssigned''SystemAssigned,UserAssigned''UserAssigned' (required) |
| userAssignedIdentities | The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests. | UserAssignedIdentities |


### UserAssignedIdentities

| Name | Description | Value |
|-|-|-|
| {customized property} |  | UserAssignedIdentity |


### RegistryProperties

| Name | Description | Value |
|-|-|-|
| discoveryUrl | Discovery URL for the Registry | string |
| intellectualPropertyPublisher | IntellectualPropertyPublisher for the registry | string |
| managedResourceGroup | ResourceId of the managed RG if the registry has system created resources | ArmResourceId |
| mlFlowRegistryUri | MLFlow Registry URI for the Registry | string |
| publicNetworkAccess | Is the Registry accessible from the internet?Possible values: "Enabled" or "Disabled" | string |
| regionDetails | Details of each region the registry is in | RegistryRegionArmDetails[] |
| registryPrivateEndpointConnections | Private endpoint connections info used for pending connections in private link portal | RegistryPrivateEndpointConnection[] |


### ArmResourceId

| Name | Description | Value |
|-|-|-|
| resourceId | Arm ResourceId is in the format "/subscriptions/{SubscriptionId}/resourceGroups/{ResourceGroupName}/providers/Microsoft.Storage/storageAccounts/{StorageAccountName}"or "/subscriptions/{SubscriptionId}/resourceGroups/{ResourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{AcrName}" | string |


### RegistryRegionArmDetails

| Name | Description | Value |
|-|-|-|
| acrDetails | List of ACR accounts | AcrDetails[] |
| location | The location where the registry exists | string |
| storageAccountDetails | List of storage accounts | StorageAccountDetails[] |


### AcrDetails

| Name | Description | Value |
|-|-|-|
| systemCreatedAcrAccount | Details of system created ACR account to be used for the Registry | SystemCreatedAcrAccount |
| userCreatedAcrAccount | Details of user created ACR account to be used for the Registry | UserCreatedAcrAccount |


### SystemCreatedAcrAccount

| Name | Description | Value |
|-|-|-|
| acrAccountName | Name of the ACR account | string |
| acrAccountSku | SKU of the ACR account | string |
| armResourceId | This is populated once the ACR account is created. | ArmResourceId |


### UserCreatedAcrAccount

| Name | Description | Value |
|-|-|-|
| armResourceId | ARM ResourceId of a resource | ArmResourceId |


### StorageAccountDetails

| Name | Description | Value |
|-|-|-|
| systemCreatedStorageAccount | Details of system created storage account to be used for the registry | SystemCreatedStorageAccount |
| userCreatedStorageAccount | Details of user created storage account to be used for the registry | UserCreatedStorageAccount |


### SystemCreatedStorageAccount

| Name | Description | Value |
|-|-|-|
| allowBlobPublicAccess | Public blob access allowed | bool |
| armResourceId | This is populated once the storage account is created. | ArmResourceId |
| storageAccountHnsEnabled | HNS enabled for storage account | bool |
| storageAccountName | Name of the storage account | string |
| storageAccountType | Allowed values:"Standard_LRS","Standard_GRS","Standard_RAGRS","Standard_ZRS","Standard_GZRS","Standard_RAGZRS","Premium_LRS","Premium_ZRS" | string |


### UserCreatedStorageAccount

| Name | Description | Value |
|-|-|-|
| armResourceId | ARM ResourceId of a resource | ArmResourceId |


### RegistryPrivateEndpointConnection

| Name | Description | Value |
|-|-|-|
| id | This is the private endpoint connection name created on SRPFull resource id: /subscriptions/{subId}/resourceGroups/{rgName}/providers/Microsoft.MachineLearningServices/{resourceType}/{resourceName}/registryPrivateEndpointConnections/{peConnectionName} | string |
| location | Same as workspace location. | string |
| properties | Properties of the Private Endpoint Connection | RegistryPrivateEndpointConnectionProperties |


### RegistryPrivateEndpointConnectionProperties

| Name | Description | Value |
|-|-|-|
| groupIds | The group ids | string[] |
| privateEndpoint | The PE network resource that is linked to this PE connection. | PrivateEndpointResource |
| provisioningState | One of null, "Succeeded", "Provisioning", "Failed". While not approved, it's null. | string |
| registryPrivateLinkServiceConnectionState | The connection state. | RegistryPrivateLinkServiceConnectionState |


### PrivateEndpointResource

| Name | Description | Value |
|-|-|-|
| subnetArmId | The subnetId that the private endpoint is connected to. | string |


### RegistryPrivateLinkServiceConnectionState

| Name | Description | Value |
|-|-|-|
| actionsRequired | Some RP chose "None". Other RPs use this for region expansion. | string |
| description | User-defined message that, per NRP doc, may be used for approval-related message. | string |
| status | Connection status of the service consumer with the service provider | 'Approved''Disconnected''Pending''Rejected' |


### Sku

| Name | Description | Value |
|-|-|-|
| capacity | If the SKU supports scale out/in then the capacity integer should be included. If scale out/in is not possible for the resource this may be omitted. | int |
| family | If the service has different generations of hardware, for the same SKU, then that can be captured here. | string |
| name | The name of the SKU. Ex - P3. It is typically a letter+number code | string (required) |
| size | The SKU size. When the name field is the combination of tier and some other value, this would be the standalone code. | string |
| tier | This field is required to be implemented by the Resource Provider if the service has more than one tier, but is not required on a PUT. | 'Basic''Free''Premium''Standard' |


