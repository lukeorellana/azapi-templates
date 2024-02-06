## Microsoft.MachineLearningServices/capacityReserverationGroups@2023-08-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.MachineLearningServices/capacityReserverationGroups@2023-08-01-preview"
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
      offer = {
        offerName = "string"
        publisher = "string"
      }
      reservedCapacity = int
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

### capacityReserverationGroups

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| sku | Sku details required for ARM contract for Autoscaling. | Sku |
| kind | Metadata used by portal/tooling/etc to render different UX experiences for resources of the same type. | string |
| identity | Managed service identity (system assigned and/or user assigned identities) | ManagedServiceIdentity |
| properties | [Required] Additional attributes of the entity. | CapacityReservationGroupProperties(required) |


### ManagedServiceIdentity

| Name | Description | Value |
|-|-|-|
| type | Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed). | 'None''SystemAssigned''SystemAssigned,UserAssigned''UserAssigned' (required) |
| userAssignedIdentities | The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests. | UserAssignedIdentities |


### UserAssignedIdentities

| Name | Description | Value |
|-|-|-|
| {customized property} |  | UserAssignedIdentity |


### CapacityReservationGroupProperties

| Name | Description | Value |
|-|-|-|
| offer | Offer used by this capacity reservation group. | ServerlessOffer |
| reservedCapacity | [Required] Specifies the amount of capacity to reserve. | int (required) |


### ServerlessOffer

| Name | Description | Value |
|-|-|-|
| offerName | [Required] The name of the Serverless Offer | string (required)Constraints:Min length = 1Pattern =[a-zA-Z0-9_] |
| publisher | [Required] Publisher name of the Serverless Offer | string (required)Constraints:Min length = 1Pattern =[a-zA-Z0-9_] |


### Sku

| Name | Description | Value |
|-|-|-|
| capacity | If the SKU supports scale out/in then the capacity integer should be included. If scale out/in is not possible for the resource this may be omitted. | int |
| family | If the service has different generations of hardware, for the same SKU, then that can be captured here. | string |
| name | The name of the SKU. Ex - P3. It is typically a letter+number code | string (required) |
| size | The SKU size. When the name field is the combination of tier and some other value, this would be the standalone code. | string |
| tier | This field is required to be implemented by the Resource Provider if the service has more than one tier, but is not required on a PUT. | 'Basic''Free''Premium''Standard' |
## Microsoft.MachineLearningServices/registries@2023-10-01

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
## Microsoft.MachineLearningServices/registries/codes@2023-10-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.MachineLearningServices/registries/codes@2023-10-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      description = "string"
      isArchived = bool
      properties = {
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
      }
      tags = {
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
      }
    }
  })
}

```

### registries/codes

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:registries |
| properties | [Required] Additional attributes of the entity. | CodeContainerProperties(required) |


### CodeContainerProperties

| Name | Description | Value |
|-|-|-|
| description | The asset description text. | string |
| isArchived | Is the asset archived? | bool |
| properties | The asset property dictionary. | ResourceBaseProperties |
| tags | Tag dictionary. Tags can be added, removed, and updated. | object |


### ResourceBaseProperties

| Name | Description | Value |
|-|-|-|
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
## Microsoft.MachineLearningServices/registries/codes/versions@2023-10-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.MachineLearningServices/registries/codes/versions@2023-10-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      codeUri = "string"
      description = "string"
      isAnonymous = bool
      isArchived = bool
      properties = {
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
      }
      tags = {
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
      }
    }
  })
}

```

### registries/codes/versions

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:codes |
| properties | [Required] Additional attributes of the entity. | CodeVersionProperties(required) |


### CodeVersionProperties

| Name | Description | Value |
|-|-|-|
| codeUri | Uri where code is located | string |
| description | The asset description text. | string |
| isAnonymous | If the name version are system generated (anonymous registration). | bool |
| isArchived | Is the asset archived? | bool |
| properties | The asset property dictionary. | ResourceBaseProperties |
| tags | Tag dictionary. Tags can be added, removed, and updated. | object |


### ResourceBaseProperties

| Name | Description | Value |
|-|-|-|
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
## Microsoft.MachineLearningServices/registries/components@2023-10-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.MachineLearningServices/registries/components@2023-10-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      description = "string"
      isArchived = bool
      properties = {
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
      }
      tags = {
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
      }
    }
  })
}

```

### registries/components

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:registries |
| properties | [Required] Additional attributes of the entity. | ComponentContainerProperties(required) |


### ComponentContainerProperties

| Name | Description | Value |
|-|-|-|
| description | The asset description text. | string |
| isArchived | Is the asset archived? | bool |
| properties | The asset property dictionary. | ResourceBaseProperties |
| tags | Tag dictionary. Tags can be added, removed, and updated. | object |


### ResourceBaseProperties

| Name | Description | Value |
|-|-|-|
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
## Microsoft.MachineLearningServices/registries/components/versions@2023-10-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.MachineLearningServices/registries/components/versions@2023-10-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      description = "string"
      isAnonymous = bool
      isArchived = bool
      properties = {
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
      }
      tags = {
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
      }
    }
  })
}

```

### registries/components/versions

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:components |
| properties | [Required] Additional attributes of the entity. | ComponentVersionProperties(required) |


### ComponentVersionProperties

| Name | Description | Value |
|-|-|-|
| componentSpec | Defines Component definition details.{see href="https://docs.microsoft.com/azure/machine-learning/reference-yaml-component-command" /} | For Bicep, you can use theany()function. |
| description | The asset description text. | string |
| isAnonymous | If the name version are system generated (anonymous registration). | bool |
| isArchived | Is the asset archived? | bool |
| properties | The asset property dictionary. | ResourceBaseProperties |
| tags | Tag dictionary. Tags can be added, removed, and updated. | object |


### ResourceBaseProperties

| Name | Description | Value |
|-|-|-|
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
## Microsoft.MachineLearningServices/registries/data@2023-10-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.MachineLearningServices/registries/data@2023-10-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      dataType = "string"
      description = "string"
      isArchived = bool
      properties = {
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
      }
      tags = {
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
      }
    }
  })
}

```

### registries/data

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:registries |
| properties | [Required] Additional attributes of the entity. | DataContainerProperties(required) |


### DataContainerProperties

| Name | Description | Value |
|-|-|-|
| dataType | [Required] Specifies the type of data. | 'mltable''uri_file''uri_folder' (required) |
| description | The asset description text. | string |
| isArchived | Is the asset archived? | bool |
| properties | The asset property dictionary. | ResourceBaseProperties |
| tags | Tag dictionary. Tags can be added, removed, and updated. | object |


### ResourceBaseProperties

| Name | Description | Value |
|-|-|-|
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
## Microsoft.MachineLearningServices/registries/data/versions@2023-10-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.MachineLearningServices/registries/data/versions@2023-10-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      dataUri = "string"
      description = "string"
      isAnonymous = bool
      isArchived = bool
      properties = {
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
      }
      tags = {
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
      }
      dataType = "string"
      // For remaining properties, see DataVersionBaseProperties objects
    }
  })
}

```

### registries/data/versions

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:data |
| properties | [Required] Additional attributes of the entity. | DataVersionBaseProperties(required) |


### DataVersionBaseProperties

| Name | Description | Value |
|-|-|-|
| dataUri | [Required] Uri of the data. Example:https://go.microsoft.com/fwlink/?linkid=2202330 | string (required)Constraints:Min length = 1Pattern =[a-zA-Z0-9_] |
| description | The asset description text. | string |
| isAnonymous | If the name version are system generated (anonymous registration). | bool |
| isArchived | Is the asset archived? | bool |
| properties | The asset property dictionary. | ResourceBaseProperties |
| tags | Tag dictionary. Tags can be added, removed, and updated. | object |
| dataType | Set the object type | mltableuri_fileuri_folder(required) |


### ResourceBaseProperties

| Name | Description | Value |
|-|-|-|
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |


### MLTableData

| Name | Description | Value |
|-|-|-|
| dataType | [Required] Specifies the type of data. | 'mltable' (required) |
| referencedUris | Uris referenced in the MLTable definition (required for lineage) | string[] |


### UriFileDataVersion

| Name | Description | Value |
|-|-|-|
| dataType | [Required] Specifies the type of data. | 'uri_file' (required) |


### UriFolderDataVersion

| Name | Description | Value |
|-|-|-|
| dataType | [Required] Specifies the type of data. | 'uri_folder' (required) |
## Microsoft.MachineLearningServices/registries/environments@2023-10-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.MachineLearningServices/registries/environments@2023-10-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      description = "string"
      isArchived = bool
      properties = {
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
      }
      tags = {
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
      }
    }
  })
}

```

### registries/environments

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:registries |
| properties | [Required] Additional attributes of the entity. | EnvironmentContainerProperties(required) |


### EnvironmentContainerProperties

| Name | Description | Value |
|-|-|-|
| description | The asset description text. | string |
| isArchived | Is the asset archived? | bool |
| properties | The asset property dictionary. | ResourceBaseProperties |
| tags | Tag dictionary. Tags can be added, removed, and updated. | object |


### ResourceBaseProperties

| Name | Description | Value |
|-|-|-|
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
## Microsoft.MachineLearningServices/registries/environments/versions@2023-10-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.MachineLearningServices/registries/environments/versions@2023-10-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      autoRebuild = "string"
      build = {
        contextUri = "string"
        dockerfilePath = "string"
      }
      condaFile = "string"
      description = "string"
      image = "string"
      inferenceConfig = {
        livenessRoute = {
          path = "string"
          port = int
        }
        readinessRoute = {
          path = "string"
          port = int
        }
        scoringRoute = {
          path = "string"
          port = int
        }
      }
      isAnonymous = bool
      isArchived = bool
      osType = "string"
      properties = {
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
      }
      stage = "string"
      tags = {
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
      }
    }
  })
}

```

### registries/environments/versions

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:environments |
| properties | [Required] Additional attributes of the entity. | EnvironmentVersionProperties(required) |


### EnvironmentVersionProperties

| Name | Description | Value |
|-|-|-|
| autoRebuild | Defines if image needs to be rebuilt based on base image changes. | 'Disabled''OnBaseImageUpdate' |
| build | Configuration settings for Docker build context. | BuildContext |
| condaFile | Standard configuration file used by Conda that lets you install any kind of package, including Python, R, and C/C++ packages.{see href="https://repo2docker.readthedocs.io/en/latest/config_files.html#environment-yml-install-a-conda-environment" /} | string |
| description | The asset description text. | string |
| image | Name of the image that will be used for the environment.{seealso href="https://docs.microsoft.com/azure/machine-learning/how-to-deploy-custom-docker-image#use-a-custom-base-image" /} | string |
| inferenceConfig | Defines configuration specific to inference. | InferenceContainerProperties |
| isAnonymous | If the name version are system generated (anonymous registration). | bool |
| isArchived | Is the asset archived? | bool |
| osType | The OS type of the environment. | 'Linux''Windows' |
| properties | The asset property dictionary. | ResourceBaseProperties |
| stage | Stage in the environment lifecycle assigned to this environment | string |
| tags | Tag dictionary. Tags can be added, removed, and updated. | object |


### BuildContext

| Name | Description | Value |
|-|-|-|
| contextUri | [Required] URI of the Docker build context used to build the image. Supports blob URIs on environment creation and may return blob or Git URIs.{seealso href="https://docs.docker.com/engine/reference/commandline/build/#extended-description" /} | string (required)Constraints:Min length = 1Pattern =[a-zA-Z0-9_] |
| dockerfilePath | Path to the Dockerfile in the build context.{seealso href="https://docs.docker.com/engine/reference/builder/" /} | string |


### InferenceContainerProperties

| Name | Description | Value |
|-|-|-|
| livenessRoute | The route to check the liveness of the inference server container. | Route |
| readinessRoute | The route to check the readiness of the inference server container. | Route |
| scoringRoute | The port to send the scoring requests to, within the inference server container. | Route |


### Route

| Name | Description | Value |
|-|-|-|
| path | [Required] The path for the route. | string (required)Constraints:Min length = 1Pattern =[a-zA-Z0-9_] |
| port | [Required] The port for the route. | int (required) |


### ResourceBaseProperties

| Name | Description | Value |
|-|-|-|
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
## Microsoft.MachineLearningServices/registries/models@2023-10-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.MachineLearningServices/registries/models@2023-10-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      description = "string"
      isArchived = bool
      properties = {
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
      }
      tags = {
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
      }
    }
  })
}

```

### registries/models

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:registries |
| properties | [Required] Additional attributes of the entity. | ModelContainerProperties(required) |


### ModelContainerProperties

| Name | Description | Value |
|-|-|-|
| description | The asset description text. | string |
| isArchived | Is the asset archived? | bool |
| properties | The asset property dictionary. | ResourceBaseProperties |
| tags | Tag dictionary. Tags can be added, removed, and updated. | object |


### ResourceBaseProperties

| Name | Description | Value |
|-|-|-|
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
## Microsoft.MachineLearningServices/registries/models/versions@2023-10-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.MachineLearningServices/registries/models/versions@2023-10-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      description = "string"
      flavors = {
        {customized property} = {
          data = {
          {customized property} = "string"
        }
      }
      isAnonymous = bool
      isArchived = bool
      jobName = "string"
      modelType = "string"
      modelUri = "string"
      properties = {
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
      }
      stage = "string"
      tags = {
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
      }
    }
  })
}

```

### registries/models/versions

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:models |
| properties | [Required] Additional attributes of the entity. | ModelVersionProperties(required) |


### ModelVersionProperties

| Name | Description | Value |
|-|-|-|
| description | The asset description text. | string |
| flavors | Mapping of model flavors to their properties. | ModelVersionFlavors |
| isAnonymous | If the name version are system generated (anonymous registration). | bool |
| isArchived | Is the asset archived? | bool |
| jobName | Name of the training job which produced this model | string |
| modelType | The storage format for this entity. Used for NCD. | string |
| modelUri | The URI path to the model contents. | string |
| properties | The asset property dictionary. | ResourceBaseProperties |
| stage | Stage in the model lifecycle assigned to this model | string |
| tags | Tag dictionary. Tags can be added, removed, and updated. | object |


### ModelVersionFlavors

| Name | Description | Value |
|-|-|-|
| {customized property} |  | FlavorData |


### FlavorData

| Name | Description | Value |
|-|-|-|
| data | Model flavor-specific data. | FlavorData |
| {customized property} |  | string |


### ResourceBaseProperties

| Name | Description | Value |
|-|-|-|
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
## Microsoft.MachineLearningServices/workspaces@2023-10-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.MachineLearningServices/workspaces@2023-10-01"
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
      allowPublicAccessWhenBehindVnet = bool
      applicationInsights = "string"
      containerRegistry = "string"
      description = "string"
      discoveryUrl = "string"
      encryption = {
        identity = {
          userAssignedIdentity = "string"
        }
        keyVaultProperties = {
          identityClientId = "string"
          keyIdentifier = "string"
          keyVaultArmId = "string"
        }
        status = "string"
      }
      featureStoreSettings = {
        computeRuntime = {
          sparkRuntimeVersion = "string"
        }
        offlineStoreConnectionName = "string"
        onlineStoreConnectionName = "string"
      }
      friendlyName = "string"
      hbiWorkspace = bool
      imageBuildCompute = "string"
      keyVault = "string"
      managedNetwork = {
        isolationMode = "string"
        outboundRules = {
          {customized property} = {
            category = "string"
            status = "string"
            type = "string"
            // For remaining properties, see OutboundRule objects
          }
        }
        status = {
          sparkReady = bool
          status = "string"
        }
      }
      primaryUserAssignedIdentity = "string"
      publicNetworkAccess = "string"
      serverlessComputeSettings = {
        serverlessComputeCustomSubnet = "string"
        serverlessComputeNoPublicIP = bool
      }
      serviceManagedResourcesSettings = {
        cosmosDb = {
          collectionsThroughput = int
        }
      }
      sharedPrivateLinkResources = [
        {
          name = "string"
          properties = {
            groupId = "string"
            privateLinkResourceId = "string"
            requestMessage = "string"
            status = "string"
          }
        }
      ]
      storageAccount = "string"
      v1LegacyMode = bool
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

### workspaces

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 3-33Valid characters:Alphanumerics, hyphens, and underscores. |
| location | Specifies the location of the resource. | string |
| tags | Contains resource tags defined as key/value pairs. | Dictionary of tag names and values. SeeTags in templates |
| sku | The sku of the workspace. | Sku |
| kind |  | string |
| identity | The identity of the resource. | ManagedServiceIdentity |
| properties | The properties of the machine learning workspace. | WorkspaceProperties |


### ManagedServiceIdentity

| Name | Description | Value |
|-|-|-|
| type | Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed). | 'None''SystemAssigned''SystemAssigned,UserAssigned''UserAssigned' (required) |
| userAssignedIdentities | The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests. | UserAssignedIdentities |


### UserAssignedIdentities

| Name | Description | Value |
|-|-|-|
| {customized property} |  | UserAssignedIdentity |


### WorkspaceProperties

| Name | Description | Value |
|-|-|-|
| allowPublicAccessWhenBehindVnet | The flag to indicate whether to allow public access when behind VNet. | bool |
| applicationInsights | ARM id of the application insights associated with this workspace. | string |
| containerRegistry | ARM id of the container registry associated with this workspace. | string |
| description | The description of this workspace. | string |
| discoveryUrl | Url for the discovery service to identify regional endpoints for machine learning experimentation services | string |
| encryption | The encryption settings of Azure ML workspace. | EncryptionProperty |
| featureStoreSettings | Settings for feature store type workspace. | FeatureStoreSettings |
| friendlyName | The friendly name for this workspace. This name in mutable | string |
| hbiWorkspace | The flag to signal HBI data in the workspace and reduce diagnostic data collected by the service | bool |
| imageBuildCompute | The compute name for image build | string |
| keyVault | ARM id of the key vault associated with this workspace. This cannot be changed once the workspace has been created | string |
| managedNetwork | Managed Network settings for a machine learning workspace. | ManagedNetworkSettings |
| primaryUserAssignedIdentity | The user assigned identity resource id that represents the workspace identity. | string |
| publicNetworkAccess | Whether requests from Public Network are allowed. | 'Disabled''Enabled' |
| serverlessComputeSettings | Settings for serverless compute created in the workspace | ServerlessComputeSettings |
| serviceManagedResourcesSettings | The service managed resource settings. | ServiceManagedResourcesSettings |
| sharedPrivateLinkResources | The list of shared private link resources in this workspace. | SharedPrivateLinkResource[] |
| storageAccount | ARM id of the storage account associated with this workspace. This cannot be changed once the workspace has been created | string |
| v1LegacyMode | Enabling v1_legacy_mode may prevent you from using features provided by the v2 API. | bool |


### EncryptionProperty

| Name | Description | Value |
|-|-|-|
| identity | The identity that will be used to access the key vault for encryption at rest. | IdentityForCmk |
| keyVaultProperties | Customer Key vault properties. | EncryptionKeyVaultProperties(required) |
| status | Indicates whether or not the encryption is enabled for the workspace. | 'Disabled''Enabled' (required) |


### IdentityForCmk

| Name | Description | Value |
|-|-|-|
| userAssignedIdentity | The ArmId of the user assigned identity that will be used to access the customer managed key vault | string |


### EncryptionKeyVaultProperties

| Name | Description | Value |
|-|-|-|
| identityClientId | For future use - The client id of the identity which will be used to access key vault. | string |
| keyIdentifier | Key vault uri to access the encryption key. | string (required) |
| keyVaultArmId | The ArmId of the keyVault where the customer owned encryption key is present. | string (required) |


### FeatureStoreSettings

| Name | Description | Value |
|-|-|-|
| computeRuntime | Compute runtime config for feature store type workspace. | ComputeRuntimeDto |
| offlineStoreConnectionName |  | string |
| onlineStoreConnectionName |  | string |


### ComputeRuntimeDto

| Name | Description | Value |
|-|-|-|
| sparkRuntimeVersion |  | string |


### ManagedNetworkSettings

| Name | Description | Value |
|-|-|-|
| isolationMode | Isolation mode for the managed network of a machine learning workspace. | 'AllowInternetOutbound''AllowOnlyApprovedOutbound''Disabled' |
| outboundRules | Dictionary of {OutboundRule} | ManagedNetworkSettingsOutboundRules |
| status | Status of the Provisioning for the managed network of a machine learning workspace. | ManagedNetworkProvisionStatus |


### ManagedNetworkSettingsOutboundRules

| Name | Description | Value |
|-|-|-|
| {customized property} |  | OutboundRule |


### OutboundRule

| Name | Description | Value |
|-|-|-|
| category | Category of a managed network Outbound Rule of a machine learning workspace. | 'Recommended''Required''UserDefined' |
| status | Type of a managed network Outbound Rule of a machine learning workspace. | 'Active''Inactive' |
| type | Set the object type | FQDNPrivateEndpointServiceTag(required) |


### FqdnOutboundRule

| Name | Description | Value |
|-|-|-|
| type | Type of a managed network Outbound Rule of a machine learning workspace. | 'FQDN' (required) |
| destination |  | string |


### PrivateEndpointOutboundRule

| Name | Description | Value |
|-|-|-|
| type | Type of a managed network Outbound Rule of a machine learning workspace. | 'PrivateEndpoint' (required) |
| destination | Private Endpoint destination for a Private Endpoint Outbound Rule for the managed network of a machine learning workspace. | PrivateEndpointDestination |


### PrivateEndpointDestination

| Name | Description | Value |
|-|-|-|
| serviceResourceId |  | string |
| sparkEnabled |  | bool |
| sparkStatus | Type of a managed network Outbound Rule of a machine learning workspace. | 'Active''Inactive' |
| subresourceTarget |  | string |


### ServiceTagOutboundRule

| Name | Description | Value |
|-|-|-|
| type | Type of a managed network Outbound Rule of a machine learning workspace. | 'ServiceTag' (required) |
| destination | Service Tag destination for a Service Tag Outbound Rule for the managed network of a machine learning workspace. | ServiceTagDestination |


### ServiceTagDestination

| Name | Description | Value |
|-|-|-|
| action | The action enum for networking rule. | 'Allow''Deny' |
| portRanges |  | string |
| protocol |  | string |
| serviceTag |  | string |


### ManagedNetworkProvisionStatus

| Name | Description | Value |
|-|-|-|
| sparkReady |  | bool |
| status | Status for the managed network of a machine learning workspace. | 'Active''Inactive' |


### ServerlessComputeSettings

| Name | Description | Value |
|-|-|-|
| serverlessComputeCustomSubnet | The resource ID of an existing virtual network subnet in which serverless compute nodes should be deployed | string |
| serverlessComputeNoPublicIP | The flag to signal if serverless compute nodes deployed in custom vNet would have no public IP addresses for a workspace with private endpoint | bool |


### ServiceManagedResourcesSettings

| Name | Description | Value |
|-|-|-|
| cosmosDb | The settings for the service managed cosmosdb account. | CosmosDbSettings |


### CosmosDbSettings

| Name | Description | Value |
|-|-|-|
| collectionsThroughput | The throughput of the collections in cosmosdb database | int |


### SharedPrivateLinkResource

| Name | Description | Value |
|-|-|-|
| name | Unique name of the private link. | string |
| properties | Resource properties. | SharedPrivateLinkResourceProperty |


### SharedPrivateLinkResourceProperty

| Name | Description | Value |
|-|-|-|
| groupId | The private link resource group id. | string |
| privateLinkResourceId | The resource id that private link links to. | string |
| requestMessage | Request message. | string |
| status | Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service. | 'Approved''Disconnected''Pending''Rejected''Timeout' |


### Sku

| Name | Description | Value |
|-|-|-|
| capacity | If the SKU supports scale out/in then the capacity integer should be included. If scale out/in is not possible for the resource this may be omitted. | int |
| family | If the service has different generations of hardware, for the same SKU, then that can be captured here. | string |
| name | The name of the SKU. Ex - P3. It is typically a letter+number code | string (required) |
| size | The SKU size. When the name field is the combination of tier and some other value, this would be the standalone code. | string |
| tier | This field is required to be implemented by the Resource Provider if the service has more than one tier, but is not required on a PUT. | 'Basic''Free''Premium''Standard' |
## Microsoft.MachineLearningServices/workspaces/batchEndpoints@2023-10-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.MachineLearningServices/workspaces/batchEndpoints@2023-10-01"
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
      authMode = "string"
      defaults = {
        deploymentName = "string"
      }
      description = "string"
      keys = {
        primaryKey = "string"
        secondaryKey = "string"
        primaryKey = "string"
        secondaryKey = "string"
        primaryKey = "string"
        secondaryKey = "string"
      }
      properties = {
        {customized property} = "string"
        {customized property} = "string"
      }
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

### workspaces/batchEndpoints

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| sku | Sku details required for ARM contract for Autoscaling. | Sku |
| kind | Metadata used by portal/tooling/etc to render different UX experiences for resources of the same type. | string |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:workspaces |
| identity | Managed service identity (system assigned and/or user assigned identities) | ManagedServiceIdentity |
| properties | [Required] Additional attributes of the entity. | BatchEndpointProperties(required) |


### ManagedServiceIdentity

| Name | Description | Value |
|-|-|-|
| type | Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed). | 'None''SystemAssigned''SystemAssigned,UserAssigned''UserAssigned' (required) |
| userAssignedIdentities | The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests. | UserAssignedIdentities |


### UserAssignedIdentities

| Name | Description | Value |
|-|-|-|
| {customized property} |  | UserAssignedIdentity |


### BatchEndpointProperties

| Name | Description | Value |
|-|-|-|
| authMode | [Required] Use 'Key' for key based authentication and 'AMLToken' for Azure Machine Learning token-based authentication. 'Key' doesn't expire but 'AMLToken' does. | 'AADToken''AMLToken''Key' (required) |
| defaults | Default values for Batch Endpoint | BatchEndpointDefaults |
| description | Description of the inference endpoint. | string |
| keys | EndpointAuthKeys to set initially on an Endpoint.This property will always be returned as null. AuthKey values must be retrieved using the ListKeys API. | EndpointAuthKeys |
| properties | Property dictionary. Properties can be added, but not removed or altered. | EndpointPropertiesBaseProperties |


### BatchEndpointDefaults

| Name | Description | Value |
|-|-|-|
| deploymentName | Name of the deployment that will be default for the endpoint.This deployment will end up getting 100% traffic when the endpoint scoring URL is invoked. | string |


### EndpointAuthKeys

| Name | Description | Value |
|-|-|-|
| primaryKey | The primary key. | string |
| secondaryKey | The secondary key. | string |
| primaryKey | The primary key. | string |
| secondaryKey | The secondary key. | string |
| primaryKey | The primary key. | string |
| secondaryKey | The secondary key. | string |


### EndpointPropertiesBaseProperties

| Name | Description | Value |
|-|-|-|
| {customized property} |  | string |
| {customized property} |  | string |


### Sku

| Name | Description | Value |
|-|-|-|
| capacity | If the SKU supports scale out/in then the capacity integer should be included. If scale out/in is not possible for the resource this may be omitted. | int |
| family | If the service has different generations of hardware, for the same SKU, then that can be captured here. | string |
| name | The name of the SKU. Ex - P3. It is typically a letter+number code | string (required) |
| size | The SKU size. When the name field is the combination of tier and some other value, this would be the standalone code. | string |
| tier | This field is required to be implemented by the Resource Provider if the service has more than one tier, but is not required on a PUT. | 'Basic''Free''Premium''Standard' |
## Microsoft.MachineLearningServices/workspaces/batchEndpoints/deployments@2023-10-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.MachineLearningServices/workspaces/batchEndpoints/deployments@2023-10-01"
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
      codeConfiguration = {
        codeId = "string"
        scoringScript = "string"
      }
      compute = "string"
      description = "string"
      environmentId = "string"
      environmentVariables = {
        {customized property} = "string"
        {customized property} = "string"
      }
      errorThreshold = int
      loggingLevel = "string"
      maxConcurrencyPerInstance = int
      miniBatchSize = int
      model = {
        referenceType = "string"
        // For remaining properties, see AssetReferenceBase objects
      }
      outputAction = "string"
      outputFileName = "string"
      properties = {
        {customized property} = "string"
        {customized property} = "string"
      }
      resources = {
        instanceCount = int
        instanceType = "string"
        properties = {}
      }
      retrySettings = {
        maxRetries = int
        timeout = "string"
      }
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

### workspaces/batchEndpoints/deployments

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| sku | Sku details required for ARM contract for Autoscaling. | Sku |
| kind | Metadata used by portal/tooling/etc to render different UX experiences for resources of the same type. | string |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:batchEndpoints |
| identity | Managed service identity (system assigned and/or user assigned identities) | ManagedServiceIdentity |
| properties | [Required] Additional attributes of the entity. | BatchDeploymentProperties(required) |


### ManagedServiceIdentity

| Name | Description | Value |
|-|-|-|
| type | Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed). | 'None''SystemAssigned''SystemAssigned,UserAssigned''UserAssigned' (required) |
| userAssignedIdentities | The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests. | UserAssignedIdentities |


### UserAssignedIdentities

| Name | Description | Value |
|-|-|-|
| {customized property} |  | UserAssignedIdentity |


### BatchDeploymentProperties

| Name | Description | Value |
|-|-|-|
| codeConfiguration | Code configuration for the endpoint deployment. | CodeConfiguration |
| compute | Compute target for batch inference operation. | string |
| description | Description of the endpoint deployment. | string |
| environmentId | ARM resource ID or AssetId of the environment specification for the endpoint deployment. | string |
| environmentVariables | Environment variables configuration for the deployment. | EndpointDeploymentPropertiesBaseEnvironmentVariables |
| errorThreshold | Error threshold, if the error count for the entire input goes above this value,the batch inference will be aborted. Range is [-1, int.MaxValue].For FileDataset, this value is the count of file failures.For TabularDataset, this value is the count of record failures.If set to -1 (the lower bound), all failures during batch inference will be ignored. | int |
| loggingLevel | Logging level for batch inference operation. | 'Debug''Info''Warning' |
| maxConcurrencyPerInstance | Indicates maximum number of parallelism per instance. | int |
| miniBatchSize | Size of the mini-batch passed to each batch invocation.For FileDataset, this is the number of files per mini-batch.For TabularDataset, this is the size of the records in bytes, per mini-batch. | int |
| model | Reference to the model asset for the endpoint deployment. | AssetReferenceBase |
| outputAction | Indicates how the output will be organized. | 'AppendRow''SummaryOnly' |
| outputFileName | Customized output file name for append_row output action. | string |
| properties | Property dictionary. Properties can be added, but not removed or altered. | EndpointDeploymentPropertiesBaseProperties |
| resources | Indicates compute configuration for the job.If not provided, will default to the defaults defined in ResourceConfiguration. | DeploymentResourceConfiguration |
| retrySettings | Retry Settings for the batch inference operation.If not provided, will default to the defaults defined in BatchRetrySettings. | BatchRetrySettings |


### CodeConfiguration

| Name | Description | Value |
|-|-|-|
| codeId | ARM resource ID of the code asset. | string |
| scoringScript | [Required] The script to execute on startup. eg. "score.py" | string (required)Constraints:Min length = 1Pattern =[a-zA-Z0-9_] |


### EndpointDeploymentPropertiesBaseEnvironmentVariables

| Name | Description | Value |
|-|-|-|
| {customized property} |  | string |
| {customized property} |  | string |


### AssetReferenceBase

| Name | Description | Value |
|-|-|-|
| referenceType | Set the object type | DataPathIdOutputPath(required) |


### DataPathAssetReference

| Name | Description | Value |
|-|-|-|
| referenceType | [Required] Specifies the type of asset reference. | 'DataPath' (required) |
| datastoreId | ARM resource ID of the datastore where the asset is located. | string |
| path | The path of the file/directory in the datastore. | string |


### IdAssetReference

| Name | Description | Value |
|-|-|-|
| referenceType | [Required] Specifies the type of asset reference. | 'Id' (required) |
| assetId | [Required] ARM resource ID of the asset. | string (required)Constraints:Min length = 1Pattern =[a-zA-Z0-9_] |


### OutputPathAssetReference

| Name | Description | Value |
|-|-|-|
| referenceType | [Required] Specifies the type of asset reference. | 'OutputPath' (required) |
| jobId | ARM resource ID of the job. | string |
| path | The path of the file/directory in the job output. | string |


### EndpointDeploymentPropertiesBaseProperties

| Name | Description | Value |
|-|-|-|
| {customized property} |  | string |
| {customized property} |  | string |


### DeploymentResourceConfiguration

| Name | Description | Value |
|-|-|-|
| instanceCount | Optional number of instances or nodes used by the compute target. | int |
| instanceType | Optional type of VM used as supported by the compute target. | string |
| properties | Additional properties bag. | ResourceConfigurationProperties |


### ResourceConfigurationProperties

| Name | Description | Value |
|-|-|-|
| {customized property} |  | For Bicep, you can use theany()function. |
| {customized property} |  | For Bicep, you can use theany()function. |


### BatchRetrySettings

| Name | Description | Value |
|-|-|-|
| maxRetries | Maximum retry count for a mini-batch | int |
| timeout | Invocation timeout for a mini-batch, in ISO 8601 format. | string |


### Sku

| Name | Description | Value |
|-|-|-|
| capacity | If the SKU supports scale out/in then the capacity integer should be included. If scale out/in is not possible for the resource this may be omitted. | int |
| family | If the service has different generations of hardware, for the same SKU, then that can be captured here. | string |
| name | The name of the SKU. Ex - P3. It is typically a letter+number code | string (required) |
| size | The SKU size. When the name field is the combination of tier and some other value, this would be the standalone code. | string |
| tier | This field is required to be implemented by the Resource Provider if the service has more than one tier, but is not required on a PUT. | 'Basic''Free''Premium''Standard' |
## Microsoft.MachineLearningServices/workspaces/codes@2023-10-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.MachineLearningServices/workspaces/codes@2023-10-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      description = "string"
      isArchived = bool
      properties = {
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
      }
      tags = {
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
      }
    }
  })
}

```

### workspaces/codes

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:workspaces |
| properties | [Required] Additional attributes of the entity. | CodeContainerProperties(required) |


### CodeContainerProperties

| Name | Description | Value |
|-|-|-|
| description | The asset description text. | string |
| isArchived | Is the asset archived? | bool |
| properties | The asset property dictionary. | ResourceBaseProperties |
| tags | Tag dictionary. Tags can be added, removed, and updated. | object |


### ResourceBaseProperties

| Name | Description | Value |
|-|-|-|
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
## Microsoft.MachineLearningServices/workspaces/codes/versions@2023-10-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.MachineLearningServices/workspaces/codes/versions@2023-10-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      codeUri = "string"
      description = "string"
      isAnonymous = bool
      isArchived = bool
      properties = {
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
      }
      tags = {
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
      }
    }
  })
}

```

### workspaces/codes/versions

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:codes |
| properties | [Required] Additional attributes of the entity. | CodeVersionProperties(required) |


### CodeVersionProperties

| Name | Description | Value |
|-|-|-|
| codeUri | Uri where code is located | string |
| description | The asset description text. | string |
| isAnonymous | If the name version are system generated (anonymous registration). | bool |
| isArchived | Is the asset archived? | bool |
| properties | The asset property dictionary. | ResourceBaseProperties |
| tags | Tag dictionary. Tags can be added, removed, and updated. | object |


### ResourceBaseProperties

| Name | Description | Value |
|-|-|-|
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
## Microsoft.MachineLearningServices/workspaces/components@2023-10-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.MachineLearningServices/workspaces/components@2023-10-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      description = "string"
      isArchived = bool
      properties = {
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
      }
      tags = {
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
      }
    }
  })
}

```

### workspaces/components

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:workspaces |
| properties | [Required] Additional attributes of the entity. | ComponentContainerProperties(required) |


### ComponentContainerProperties

| Name | Description | Value |
|-|-|-|
| description | The asset description text. | string |
| isArchived | Is the asset archived? | bool |
| properties | The asset property dictionary. | ResourceBaseProperties |
| tags | Tag dictionary. Tags can be added, removed, and updated. | object |


### ResourceBaseProperties

| Name | Description | Value |
|-|-|-|
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
## Microsoft.MachineLearningServices/workspaces/components/versions@2023-10-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.MachineLearningServices/workspaces/components/versions@2023-10-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      description = "string"
      isAnonymous = bool
      isArchived = bool
      properties = {
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
      }
      tags = {
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
      }
    }
  })
}

```

### workspaces/components/versions

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:components |
| properties | [Required] Additional attributes of the entity. | ComponentVersionProperties(required) |


### ComponentVersionProperties

| Name | Description | Value |
|-|-|-|
| componentSpec | Defines Component definition details.{see href="https://docs.microsoft.com/azure/machine-learning/reference-yaml-component-command" /} | For Bicep, you can use theany()function. |
| description | The asset description text. | string |
| isAnonymous | If the name version are system generated (anonymous registration). | bool |
| isArchived | Is the asset archived? | bool |
| properties | The asset property dictionary. | ResourceBaseProperties |
| tags | Tag dictionary. Tags can be added, removed, and updated. | object |


### ResourceBaseProperties

| Name | Description | Value |
|-|-|-|
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
## Microsoft.MachineLearningServices/workspaces/computes@2023-10-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.MachineLearningServices/workspaces/computes@2023-10-01"
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
      computeLocation = "string"
      description = "string"
      disableLocalAuth = bool
      resourceId = "string"
      computeType = "string"
      // For remaining properties, see Compute objects
    }
    sku = {
      capacity = int
      family = "string"
      name = "string"
      size = "string"
      tier = "string"
    }
  })
}

```

### workspaces/computes

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 3-24 for compute instance3-32 for AML compute2-16 for other compute typesValid characters:Alphanumerics and hyphens. |
| location | Specifies the location of the resource. | string |
| tags | Contains resource tags defined as key/value pairs. | Dictionary of tag names and values. SeeTags in templates |
| sku | The sku of the workspace. | Sku |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:workspaces |
| identity | The identity of the resource. | ManagedServiceIdentity |
| properties | Compute properties | Compute |


### ManagedServiceIdentity

| Name | Description | Value |
|-|-|-|
| type | Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed). | 'None''SystemAssigned''SystemAssigned,UserAssigned''UserAssigned' (required) |
| userAssignedIdentities | The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests. | UserAssignedIdentities |


### UserAssignedIdentities

| Name | Description | Value |
|-|-|-|
| {customized property} |  | UserAssignedIdentity |


### Compute

| Name | Description | Value |
|-|-|-|
| computeLocation | Location for the underlying compute | string |
| description | The description of the Machine Learning compute. | string |
| disableLocalAuth | Opt-out of local authentication and ensure customers can use only MSI and AAD exclusively for authentication. | bool |
| resourceId | ARM resource id of the underlying compute | string |
| computeType | Set the object type | AKSAmlComputeComputeInstanceDatabricksDataFactoryDataLakeAnalyticsHDInsightKubernetesSynapseSparkVirtualMachine(required) |


### AKS

| Name | Description | Value |
|-|-|-|
| computeType | The type of compute | 'AKS' (required) |
| properties | AKS properties | AKSSchemaProperties |


### AKSSchemaProperties

| Name | Description | Value |
|-|-|-|
| agentCount | Number of agents | intConstraints:Min value = 0 |
| agentVmSize | Agent virtual machine size | string |
| aksNetworkingConfiguration | AKS networking configuration for vnet | AksNetworkingConfiguration |
| clusterFqdn | Cluster full qualified domain name | string |
| clusterPurpose | Intended usage of the cluster | 'DenseProd''DevTest''FastProd' |
| loadBalancerSubnet | Load Balancer Subnet | string |
| loadBalancerType | Load Balancer Type | 'InternalLoadBalancer''PublicIp' |
| sslConfiguration | SSL configuration | SslConfiguration |


### AksNetworkingConfiguration

| Name | Description | Value |
|-|-|-|
| dnsServiceIP | An IP address assigned to the Kubernetes DNS service. It must be within the Kubernetes service address range specified in serviceCidr. | stringConstraints:Pattern =^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$ |
| dockerBridgeCidr | A CIDR notation IP range assigned to the Docker bridge network. It must not overlap with any Subnet IP ranges or the Kubernetes service address range. | stringConstraints:Pattern =^([0-9]{1,3}\.){3}[0-9]{1,3}(\/([0-9]|[1-2][0-9]|3[0-2]))?$ |
| serviceCidr | A CIDR notation IP range from which to assign service cluster IPs. It must not overlap with any Subnet IP ranges. | stringConstraints:Pattern =^([0-9]{1,3}\.){3}[0-9]{1,3}(\/([0-9]|[1-2][0-9]|3[0-2]))?$ |
| subnetId | Virtual network subnet resource ID the compute nodes belong to | string |


### SslConfiguration

| Name | Description | Value |
|-|-|-|
| cert | Cert data | stringConstraints:Sensitive value. Pass in as a secure parameter. |
| cname | CNAME of the cert | string |
| key | Key data | stringConstraints:Sensitive value. Pass in as a secure parameter. |
| leafDomainLabel | Leaf domain label of public endpoint | string |
| overwriteExistingDomain | Indicates whether to overwrite existing domain label. | bool |
| status | Enable or disable ssl for scoring | 'Auto''Disabled''Enabled' |


### AmlCompute

| Name | Description | Value |
|-|-|-|
| computeType | The type of compute | 'AmlCompute' (required) |
| properties | Properties of AmlCompute | AmlComputeProperties |


### AmlComputeProperties

| Name | Description | Value |
|-|-|-|
| enableNodePublicIp | Enable or disable node public IP address provisioning. Possible values are: Possible values are: true - Indicates that the compute nodes will have public IPs provisioned. false - Indicates that the compute nodes will have a private endpoint and no public IPs. | bool |
| isolatedNetwork | Network is isolated or not | bool |
| osType | Compute OS Type | 'Linux''Windows' |
| propertyBag | A property bag containing additional properties. | For Bicep, you can use theany()function. |
| remoteLoginPortPublicAccess | State of the public SSH port. Possible values are: Disabled - Indicates that the public ssh port is closed on all nodes of the cluster. Enabled - Indicates that the public ssh port is open on all nodes of the cluster. NotSpecified - Indicates that the public ssh port is closed on all nodes of the cluster if VNet is defined, else is open all public nodes. It can be default only during cluster creation time, after creation it will be either enabled or disabled. | 'Disabled''Enabled''NotSpecified' |
| scaleSettings | Scale settings for AML Compute | ScaleSettings |
| subnet | Virtual network subnet resource ID the compute nodes belong to. | ResourceId |
| userAccountCredentials | Credentials for an administrator user account that will be created on each compute node. | UserAccountCredentials |
| virtualMachineImage | Virtual Machine image for AML Compute - windows only | VirtualMachineImage |
| vmPriority | Virtual Machine priority | 'Dedicated''LowPriority' |
| vmSize | Virtual Machine Size | string |


### ScaleSettings

| Name | Description | Value |
|-|-|-|
| maxNodeCount | Max number of nodes to use | int (required) |
| minNodeCount | Min number of nodes to use | int |
| nodeIdleTimeBeforeScaleDown | Node Idle Time before scaling down amlCompute. This string needs to be in the RFC Format. | string |


### ResourceId

| Name | Description | Value |
|-|-|-|
| id | The ID of the resource | string (required) |


### UserAccountCredentials

| Name | Description | Value |
|-|-|-|
| adminUserName | Name of the administrator user account which can be used to SSH to nodes. | string (required) |
| adminUserPassword | Password of the administrator user account. | stringConstraints:Sensitive value. Pass in as a secure parameter. |
| adminUserSshPublicKey | SSH public key of the administrator user account. | stringConstraints:Sensitive value. Pass in as a secure parameter. |


### VirtualMachineImage

| Name | Description | Value |
|-|-|-|
| id | Virtual Machine image path | string (required) |


### ComputeInstance

| Name | Description | Value |
|-|-|-|
| computeType | The type of compute | 'ComputeInstance' (required) |
| properties | Properties of ComputeInstance | ComputeInstanceProperties |


### ComputeInstanceProperties

| Name | Description | Value |
|-|-|-|
| applicationSharingPolicy | Policy for sharing applications on this compute instance among users of parent workspace. If Personal, only the creator can access applications on this compute instance. When Shared, any workspace user can access applications on this instance depending on his/her assigned role. | 'Personal''Shared' |
| computeInstanceAuthorizationType | The Compute Instance Authorization type. Available values are personal (default). | 'personal' |
| customServices | List of Custom Services added to the compute. | CustomService[] |
| enableNodePublicIp | Enable or disable node public IP address provisioning. Possible values are: Possible values are: true - Indicates that the compute nodes will have public IPs provisioned. false - Indicates that the compute nodes will have a private endpoint and no public IPs. | bool |
| personalComputeInstanceSettings | Settings for a personal compute instance. | PersonalComputeInstanceSettings |
| schedules | The list of schedules to be applied on the computes. | ComputeSchedules |
| setupScripts | Details of customized scripts to execute for setting up the cluster. | SetupScripts |
| sshSettings | Specifies policy and settings for SSH access. | ComputeInstanceSshSettings |
| subnet | Virtual network subnet resource ID the compute nodes belong to. | ResourceId |
| vmSize | Virtual Machine Size | string |


### CustomService

| Name | Description | Value |
|-|-|-|
| docker | Describes the docker settings for the image | Docker |
| endpoints | Configuring the endpoints for the container | Endpoint[] |
| environmentVariables | Environment Variable for the container | CustomServiceEnvironmentVariables |
| image | Describes the Image Specifications | Image |
| name | Name of the Custom Service | string |
| volumes | Configuring the volumes for the container | VolumeDefinition[] |
| {customized property} |  | For Bicep, you can use theany()function. |


### Docker

| Name | Description | Value |
|-|-|-|
| privileged | Indicate whether container shall run in privileged or non-privileged mode. | bool |
| {customized property} |  | For Bicep, you can use theany()function. |


### Endpoint

| Name | Description | Value |
|-|-|-|
| hostIp | Host IP over which the application is exposed from the container | string |
| name | Name of the Endpoint | string |
| protocol | Protocol over which communication will happen over this endpoint | 'http''tcp''udp' |
| published | Port over which the application is exposed from container. | int |
| target | Application port inside the container. | int |


### CustomServiceEnvironmentVariables

| Name | Description | Value |
|-|-|-|
| {customized property} |  | EnvironmentVariable |


### EnvironmentVariable

| Name | Description | Value |
|-|-|-|
| type | Type of the Environment Variable. Possible values are: local - For local variable | 'local' |
| value | Value of the Environment variable | string |
| {customized property} |  | For Bicep, you can use theany()function. |


### Image

| Name | Description | Value |
|-|-|-|
| reference | Image reference | string |
| type | Type of the image. Possible values are: docker - For docker images. azureml - For AzureML images | 'azureml''docker' |
| {customized property} |  | For Bicep, you can use theany()function. |


### VolumeDefinition

| Name | Description | Value |
|-|-|-|
| bind | Bind Options of the mount | BindOptions |
| consistency | Consistency of the volume | string |
| readOnly | Indicate whether to mount volume as readOnly. Default value for this is false. | bool |
| source | Source of the mount. For bind mounts this is the host path. | string |
| target | Target of the mount. For bind mounts this is the path in the container. | string |
| tmpfs | tmpfs option of the mount | TmpfsOptions |
| type | Type of Volume Definition. Possible Values: bind,volume,tmpfs,npipe | 'bind''npipe''tmpfs''volume' |
| volume | Volume Options of the mount | VolumeOptions |


### BindOptions

| Name | Description | Value |
|-|-|-|
| createHostPath | Indicate whether to create host path. | bool |
| propagation | Type of Bind Option | string |
| selinux | Mention the selinux options. | string |


### TmpfsOptions

| Name | Description | Value |
|-|-|-|
| size | Mention the Tmpfs size | int |


### VolumeOptions

| Name | Description | Value |
|-|-|-|
| nocopy | Indicate whether volume is nocopy | bool |


### PersonalComputeInstanceSettings

| Name | Description | Value |
|-|-|-|
| assignedUser | A user explicitly assigned to a personal compute instance. | AssignedUser |


### AssignedUser

| Name | Description | Value |
|-|-|-|
| objectId | Userâs AAD Object Id. | string (required) |
| tenantId | Userâs AAD Tenant Id. | string (required) |


### ComputeSchedules

| Name | Description | Value |
|-|-|-|
| computeStartStop | The list of compute start stop schedules to be applied. | ComputeStartStopSchedule[] |


### ComputeStartStopSchedule

| Name | Description | Value |
|-|-|-|
| action | [Required] The compute power action. | 'Start''Stop' |
| cron | Required if triggerType is Cron. | Cron |
| recurrence | Required if triggerType is Recurrence. | Recurrence |
| schedule | [Deprecated] Not used any more. | ScheduleBase |
| status | Is the schedule enabled or disabled? | 'Disabled''Enabled' |
| triggerType | [Required] The schedule trigger type. | 'Cron''Recurrence' |


### Cron

| Name | Description | Value |
|-|-|-|
| expression | [Required] Specifies cron expression of schedule.The expression should follow NCronTab format. | string |
| startTime | The start time in yyyy-MM-ddTHH:mm:ss format. | string |
| timeZone | Specifies time zone in which the schedule runs.TimeZone should follow Windows time zone format. Refer:https://docs.microsoft.com/windows-hardware/manufacture/desktop/default-time-zones/> | string |


### Recurrence

| Name | Description | Value |
|-|-|-|
| frequency | [Required] The frequency to trigger schedule. | 'Day''Hour''Minute''Month''Week' |
| interval | [Required] Specifies schedule interval in conjunction with frequency | int |
| schedule | [Required] The recurrence schedule. | ComputeRecurrenceSchedule |
| startTime | The start time in yyyy-MM-ddTHH:mm:ss format. | string |
| timeZone | Specifies time zone in which the schedule runs.TimeZone should follow Windows time zone format. Refer:https://docs.microsoft.com/windows-hardware/manufacture/desktop/default-time-zones/> | string |


### ComputeRecurrenceSchedule

| Name | Description | Value |
|-|-|-|
| hours | [Required] List of hours for the schedule. | int[] (required) |
| minutes | [Required] List of minutes for the schedule. | int[] (required) |
| monthDays | List of month days for the schedule | int[] |
| weekDays | List of days for the schedule. | String array containing any of:'Friday''Monday''Saturday''Sunday''Thursday''Tuesday''Wednesday' |


### ScheduleBase

| Name | Description | Value |
|-|-|-|
| id | A system assigned id for the schedule. | string |
| provisioningStatus | The current deployment state of schedule. | 'Completed''Failed''Provisioning' |
| status | Is the schedule enabled or disabled? | 'Disabled''Enabled' |


### SetupScripts

| Name | Description | Value |
|-|-|-|
| scripts | Customized setup scripts | ScriptsToExecute |


### ScriptsToExecute

| Name | Description | Value |
|-|-|-|
| creationScript | Script that's run only once during provision of the compute. | ScriptReference |
| startupScript | Script that's run every time the machine starts. | ScriptReference |


### ScriptReference

| Name | Description | Value |
|-|-|-|
| scriptArguments | Optional command line arguments passed to the script to run. | string |
| scriptData | The location of scripts in the mounted volume. | string |
| scriptSource | The storage source of the script: workspace. | string |
| timeout | Optional time period passed to timeout command. | string |


### ComputeInstanceSshSettings

| Name | Description | Value |
|-|-|-|
| adminPublicKey | Specifies the SSH rsa public key file as a string. Use "ssh-keygen -t rsa -b 2048" to generate your SSH key pairs. | string |
| sshPublicAccess | State of the public SSH port. Possible values are: Disabled - Indicates that the public ssh port is closed on this instance. Enabled - Indicates that the public ssh port is open and accessible according to the VNet/subnet policy if applicable. | 'Disabled''Enabled' |


### Databricks

| Name | Description | Value |
|-|-|-|
| computeType | The type of compute | 'Databricks' (required) |
| properties | Properties of Databricks | DatabricksProperties |


### DatabricksProperties

| Name | Description | Value |
|-|-|-|
| databricksAccessToken | Databricks access token | string |
| workspaceUrl | Workspace Url | string |


### DataFactory

| Name | Description | Value |
|-|-|-|
| computeType | The type of compute | 'DataFactory' (required) |


### DataLakeAnalytics

| Name | Description | Value |
|-|-|-|
| computeType | The type of compute | 'DataLakeAnalytics' (required) |
| properties |  | DataLakeAnalyticsSchemaProperties |


### DataLakeAnalyticsSchemaProperties

| Name | Description | Value |
|-|-|-|
| dataLakeStoreAccountName | DataLake Store Account Name | string |


### HDInsight

| Name | Description | Value |
|-|-|-|
| computeType | The type of compute | 'HDInsight' (required) |
| properties | HDInsight compute properties | HDInsightProperties |


### HDInsightProperties

| Name | Description | Value |
|-|-|-|
| address | Public IP address of the master node of the cluster. | string |
| administratorAccount | Admin credentials for master node of the cluster | VirtualMachineSshCredentials |
| sshPort | Port open for ssh connections on the master node of the cluster. | int |


### VirtualMachineSshCredentials

| Name | Description | Value |
|-|-|-|
| password | Password of admin account | string |
| privateKeyData | Private key data | stringConstraints:Sensitive value. Pass in as a secure parameter. |
| publicKeyData | Public key data | stringConstraints:Sensitive value. Pass in as a secure parameter. |
| username | Username of admin account | string |


### Kubernetes

| Name | Description | Value |
|-|-|-|
| computeType | The type of compute | 'Kubernetes' (required) |
| properties | Properties of Kubernetes | KubernetesProperties |


### KubernetesProperties

| Name | Description | Value |
|-|-|-|
| defaultInstanceType | Default instance type | string |
| extensionInstanceReleaseTrain | Extension instance release train. | string |
| extensionPrincipalId | Extension principal-id. | string |
| instanceTypes | Instance Type Schema | KubernetesPropertiesInstanceTypes |
| namespace | Compute namespace | string |
| relayConnectionString | Relay connection string. | stringConstraints:Sensitive value. Pass in as a secure parameter. |
| serviceBusConnectionString | ServiceBus connection string. | stringConstraints:Sensitive value. Pass in as a secure parameter. |
| vcName | VC name. | string |


### KubernetesPropertiesInstanceTypes

| Name | Description | Value |
|-|-|-|
| {customized property} |  | InstanceTypeSchema |


### InstanceTypeSchema

| Name | Description | Value |
|-|-|-|
| nodeSelector | Node Selector | InstanceTypeSchemaNodeSelector |
| resources | Resource requests/limits for this instance type | InstanceTypeSchemaResources |


### InstanceTypeSchemaNodeSelector

| Name | Description | Value |
|-|-|-|
| {customized property} |  | string |


### InstanceTypeSchemaResources

| Name | Description | Value |
|-|-|-|
| limits | Resource limits for this instance type | InstanceResourceSchema |
| requests | Resource requests for this instance type | InstanceResourceSchema |


### InstanceResourceSchema

| Name | Description | Value |
|-|-|-|
| {customized property} |  | string |
| {customized property} |  | string |


### SynapseSpark

| Name | Description | Value |
|-|-|-|
| computeType | The type of compute | 'SynapseSpark' (required) |
| properties |  | SynapseSparkProperties |


### SynapseSparkProperties

| Name | Description | Value |
|-|-|-|
| autoPauseProperties | Auto pause properties. | AutoPauseProperties |
| autoScaleProperties | Auto scale properties. | AutoScaleProperties |
| nodeCount | The number of compute nodes currently assigned to the compute. | int |
| nodeSize | Node size. | string |
| nodeSizeFamily | Node size family. | string |
| poolName | Pool name. | string |
| resourceGroup | Name of the resource group in which workspace is located. | string |
| sparkVersion | Spark version. | string |
| subscriptionId | Azure subscription identifier. | string |
| workspaceName | Name of Azure Machine Learning workspace. | string |


### AutoPauseProperties

| Name | Description | Value |
|-|-|-|
| delayInMinutes |  | int |
| enabled |  | bool |


### AutoScaleProperties

| Name | Description | Value |
|-|-|-|
| enabled |  | bool |
| maxNodeCount |  | int |
| minNodeCount |  | int |


### VirtualMachine

| Name | Description | Value |
|-|-|-|
| computeType | The type of compute | 'VirtualMachine' (required) |
| properties |  | VirtualMachineSchemaProperties |


### VirtualMachineSchemaProperties

| Name | Description | Value |
|-|-|-|
| address | Public IP address of the virtual machine. | string |
| administratorAccount | Admin credentials for virtual machine | VirtualMachineSshCredentials |
| isNotebookInstanceCompute | Indicates whether this compute will be used for running notebooks. | bool |
| notebookServerPort | Notebook server port open for ssh connections. | int |
| sshPort | Port open for ssh connections. | int |
| virtualMachineSize | Virtual Machine size | string |


### Sku

| Name | Description | Value |
|-|-|-|
| capacity | If the SKU supports scale out/in then the capacity integer should be included. If scale out/in is not possible for the resource this may be omitted. | int |
| family | If the service has different generations of hardware, for the same SKU, then that can be captured here. | string |
| name | The name of the SKU. Ex - P3. It is typically a letter+number code | string (required) |
| size | The SKU size. When the name field is the combination of tier and some other value, this would be the standalone code. | string |
| tier | This field is required to be implemented by the Resource Provider if the service has more than one tier, but is not required on a PUT. | 'Basic''Free''Premium''Standard' |
## Microsoft.MachineLearningServices/workspaces/connections@2023-10-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.MachineLearningServices/workspaces/connections@2023-10-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      category = "string"
      target = "string"
      value = "string"
      valueFormat = "JSON"
      authType = "string"
      // For remaining properties, see WorkspaceConnectionPropertiesV2 objects
    }
  })
}

```

### workspaces/connections

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:workspaces |
| properties |  | WorkspaceConnectionPropertiesV2(required) |


### WorkspaceConnectionPropertiesV2

| Name | Description | Value |
|-|-|-|
| category | Category of the connection | 'ContainerRegistry''Git''PythonFeed' |
| target |  | string |
| value | Value details of the workspace connection. | string |
| valueFormat | format for the workspace connection value | 'JSON' |
| authType | Set the object type | ManagedIdentityNonePATSASUsernamePassword(required) |


### ManagedIdentityAuthTypeWorkspaceConnectionProperties

| Name | Description | Value |
|-|-|-|
| authType | Authentication type of the connection target | 'ManagedIdentity' (required) |
| credentials |  | WorkspaceConnectionManagedIdentity |


### WorkspaceConnectionManagedIdentity

| Name | Description | Value |
|-|-|-|
| clientId |  | string |
| resourceId |  | string |


### NoneAuthTypeWorkspaceConnectionProperties

| Name | Description | Value |
|-|-|-|
| authType | Authentication type of the connection target | 'None' (required) |


### PATAuthTypeWorkspaceConnectionProperties

| Name | Description | Value |
|-|-|-|
| authType | Authentication type of the connection target | 'PAT' (required) |
| credentials |  | WorkspaceConnectionPersonalAccessToken |


### WorkspaceConnectionPersonalAccessToken

| Name | Description | Value |
|-|-|-|
| pat |  | string |


### SASAuthTypeWorkspaceConnectionProperties

| Name | Description | Value |
|-|-|-|
| authType | Authentication type of the connection target | 'SAS' (required) |
| credentials |  | WorkspaceConnectionSharedAccessSignature |


### WorkspaceConnectionSharedAccessSignature

| Name | Description | Value |
|-|-|-|
| sas |  | string |


### UsernamePasswordAuthTypeWorkspaceConnectionPropertie...

| Name | Description | Value |
|-|-|-|
| authType | Authentication type of the connection target | 'UsernamePassword' (required) |
| credentials |  | WorkspaceConnectionUsernamePassword |


### WorkspaceConnectionUsernamePassword

| Name | Description | Value |
|-|-|-|
| password |  | string |
| username |  | string |
## Microsoft.MachineLearningServices/workspaces/data@2023-10-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.MachineLearningServices/workspaces/data@2023-10-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      dataType = "string"
      description = "string"
      isArchived = bool
      properties = {
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
      }
      tags = {
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
      }
    }
  })
}

```

### workspaces/data

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:workspaces |
| properties | [Required] Additional attributes of the entity. | DataContainerProperties(required) |


### DataContainerProperties

| Name | Description | Value |
|-|-|-|
| dataType | [Required] Specifies the type of data. | 'mltable''uri_file''uri_folder' (required) |
| description | The asset description text. | string |
| isArchived | Is the asset archived? | bool |
| properties | The asset property dictionary. | ResourceBaseProperties |
| tags | Tag dictionary. Tags can be added, removed, and updated. | object |


### ResourceBaseProperties

| Name | Description | Value |
|-|-|-|
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
## Microsoft.MachineLearningServices/workspaces/data/versions@2023-10-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.MachineLearningServices/workspaces/data/versions@2023-10-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      dataUri = "string"
      description = "string"
      isAnonymous = bool
      isArchived = bool
      properties = {
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
      }
      tags = {
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
      }
      dataType = "string"
      // For remaining properties, see DataVersionBaseProperties objects
    }
  })
}

```

### workspaces/data/versions

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:data |
| properties | [Required] Additional attributes of the entity. | DataVersionBaseProperties(required) |


### DataVersionBaseProperties

| Name | Description | Value |
|-|-|-|
| dataUri | [Required] Uri of the data. Example:https://go.microsoft.com/fwlink/?linkid=2202330 | string (required)Constraints:Min length = 1Pattern =[a-zA-Z0-9_] |
| description | The asset description text. | string |
| isAnonymous | If the name version are system generated (anonymous registration). | bool |
| isArchived | Is the asset archived? | bool |
| properties | The asset property dictionary. | ResourceBaseProperties |
| tags | Tag dictionary. Tags can be added, removed, and updated. | object |
| dataType | Set the object type | mltableuri_fileuri_folder(required) |


### ResourceBaseProperties

| Name | Description | Value |
|-|-|-|
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |


### MLTableData

| Name | Description | Value |
|-|-|-|
| dataType | [Required] Specifies the type of data. | 'mltable' (required) |
| referencedUris | Uris referenced in the MLTable definition (required for lineage) | string[] |


### UriFileDataVersion

| Name | Description | Value |
|-|-|-|
| dataType | [Required] Specifies the type of data. | 'uri_file' (required) |


### UriFolderDataVersion

| Name | Description | Value |
|-|-|-|
| dataType | [Required] Specifies the type of data. | 'uri_folder' (required) |
## Microsoft.MachineLearningServices/workspaces/datasets@2020-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.MachineLearningServices/workspaces/datasets@2020-05-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    datasetType = "string"
    parameters = {
      header = "string"
      includePath = bool
      partitionFormat = "string"
      path = {
        dataPath = {
          datastoreName = "string"
          relativePath = "string"
        }
        httpUrl = "string"
      }
      query = {
        datastoreName = "string"
        query = "string"
      }
      separator = "string"
      sourceType = "string"
    }
    registration = {
      description = "string"
      name = "string"
      tags = {
        {customized property} = "string"
      }
    }
    skipValidation = bool
    timeSeries = {
      coarseGrainTimestamp = "string"
      fineGrainTimestamp = "string"
    }
  })
}

```

### workspaces/datasets

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:workspaces |
| datasetType | Specifies dataset type. | 'file''tabular' (required) |
| parameters |  | DatasetCreateRequestParameters(required) |
| registration |  | DatasetCreateRequestRegistration(required) |
| skipValidation | Skip validation that ensures data can be loaded from the dataset before registration. | bool |
| timeSeries |  | DatasetCreateRequestTimeSeries |


### DatasetCreateRequestParameters

| Name | Description | Value |
|-|-|-|
| header | Header type. | 'all_files_have_same_headers''combine_all_files_headers''no_headers''only_first_file_has_headers' |
| includePath | Boolean to keep path information as column in the dataset. Defaults to False. This is useful when reading multiple files, and want to know which file a particular record originated from, or to keep useful information in file path. | bool |
| partitionFormat | The partition information of each path will be extracted into columns based on the specified format. Format part '{column_name}' creates string column, and '{column_name:yyyy/MM/dd/HH/mm/ss}' creates datetime column, where 'yyyy', 'MM', 'dd', 'HH', 'mm' and 'ss' are used to extract year, month, day, hour, minute and second for the datetime type. The format should start from the position of first partition key until the end of file path. For example, given the path '../USA/2019/01/01/data.parquet' where the partition is by country/region and time, partition_format='/{CountryOrRegion}/{PartitionDate:yyyy/MM/dd}/data.csv' creates a string column 'CountryOrRegion' with the value 'USA' and a datetime column 'PartitionDate' with the value '2019-01-01 | string |
| path |  | DatasetCreateRequestParametersPath |
| query |  | DatasetCreateRequestParametersQuery |
| separator | The separator used to split columns for 'delimited_files' sourceType. | string |
| sourceType | Data source type. | 'delimited_files''json_lines_files''parquet_files' |


### DatasetCreateRequestParametersPath

| Name | Description | Value |
|-|-|-|
| dataPath |  | DatasetCreateRequestParametersPathDataPath |
| httpUrl | The Http URL. | string |


### DatasetCreateRequestParametersPathDataPath

| Name | Description | Value |
|-|-|-|
| datastoreName | The datastore name. | string |
| relativePath | Path within the datastore. | string |


### DatasetCreateRequestParametersQuery

| Name | Description | Value |
|-|-|-|
| datastoreName | The SQL/PostgreSQL/MySQL datastore name. | string |
| query | SQL Quey. | string |


### DatasetCreateRequestRegistration

| Name | Description | Value |
|-|-|-|
| description | The description for the dataset. | string |
| name | The name of the dataset. | string |
| tags | Tags associated with the dataset. | object |


### DatasetCreateRequestTimeSeries

| Name | Description | Value |
|-|-|-|
| coarseGrainTimestamp | Column name to be used as CoarseGrainTimestamp. Can only be used if 'fineGrainTimestamp' is specified and cannot be same as 'fineGrainTimestamp'. | string |
| fineGrainTimestamp | Column name to be used as FineGrainTimestamp | string |
## Microsoft.MachineLearningServices/workspaces/datastores@2023-10-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.MachineLearningServices/workspaces/datastores@2023-10-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      credentials = {
        credentialsType = "string"
        // For remaining properties, see DatastoreCredentials objects
      }
      description = "string"
      properties = {
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
      }
      tags = {
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
      }
      datastoreType = "string"
      // For remaining properties, see DatastoreProperties objects
    }
  })
}

```

### workspaces/datastores

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: Maximum 255 characters for datastore nameValid characters:Datastore name consists only of lowercase letters, digits, and underscores. |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:workspaces |
| properties | [Required] Additional attributes of the entity. | DatastoreProperties(required) |


### DatastoreProperties

| Name | Description | Value |
|-|-|-|
| credentials | [Required] Account credentials. | DatastoreCredentials(required) |
| description | The asset description text. | string |
| properties | The asset property dictionary. | ResourceBaseProperties |
| tags | Tag dictionary. Tags can be added, removed, and updated. | object |
| datastoreType | Set the object type | AzureBlobAzureDataLakeGen1AzureDataLakeGen2AzureFile(required) |


### DatastoreCredentials

| Name | Description | Value |
|-|-|-|
| credentialsType | Set the object type | AccountKeyCertificateNoneSasServicePrincipal(required) |


### AccountKeyDatastoreCredentials

| Name | Description | Value |
|-|-|-|
| credentialsType | [Required] Credential type used to authentication with storage. | 'AccountKey' (required) |
| secrets | [Required] Storage account secrets. | AccountKeyDatastoreSecrets(required) |


### AccountKeyDatastoreSecrets

| Name | Description | Value |
|-|-|-|
| key | Storage account key. | string |
| secretsType | [Required] Credential type used to authentication with storage. | 'AccountKey''Certificate''Sas''ServicePrincipal' (required) |


### CertificateDatastoreCredentials

| Name | Description | Value |
|-|-|-|
| credentialsType | [Required] Credential type used to authentication with storage. | 'Certificate' (required) |
| authorityUrl | Authority URL used for authentication. | string |
| clientId | [Required] Service principal client ID. | string (required)Constraints:Min length = 36Max length = 36Pattern =^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$ |
| resourceUrl | Resource the service principal has access to. | string |
| secrets | [Required] Service principal secrets. | CertificateDatastoreSecrets(required) |
| tenantId | [Required] ID of the tenant to which the service principal belongs. | string (required)Constraints:Min length = 36Max length = 36Pattern =^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$ |
| thumbprint | [Required] Thumbprint of the certificate used for authentication. | string (required)Constraints:Min length = 1Pattern =[a-zA-Z0-9_] |


### CertificateDatastoreSecrets

| Name | Description | Value |
|-|-|-|
| certificate | Service principal certificate. | string |
| secretsType | [Required] Credential type used to authentication with storage. | 'AccountKey''Certificate''Sas''ServicePrincipal' (required) |


### NoneDatastoreCredentials

| Name | Description | Value |
|-|-|-|
| credentialsType | [Required] Credential type used to authentication with storage. | 'None' (required) |


### SasDatastoreCredentials

| Name | Description | Value |
|-|-|-|
| credentialsType | [Required] Credential type used to authentication with storage. | 'Sas' (required) |
| secrets | [Required] Storage container secrets. | SasDatastoreSecrets(required) |


### SasDatastoreSecrets

| Name | Description | Value |
|-|-|-|
| sasToken | Storage container SAS token. | string |
| secretsType | [Required] Credential type used to authentication with storage. | 'AccountKey''Certificate''Sas''ServicePrincipal' (required) |


### ServicePrincipalDatastoreCredentials

| Name | Description | Value |
|-|-|-|
| credentialsType | [Required] Credential type used to authentication with storage. | 'ServicePrincipal' (required) |
| authorityUrl | Authority URL used for authentication. | string |
| clientId | [Required] Service principal client ID. | string (required)Constraints:Min length = 36Max length = 36Pattern =^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$ |
| resourceUrl | Resource the service principal has access to. | string |
| secrets | [Required] Service principal secrets. | ServicePrincipalDatastoreSecrets(required) |
| tenantId | [Required] ID of the tenant to which the service principal belongs. | string (required)Constraints:Min length = 36Max length = 36Pattern =^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$ |


### ServicePrincipalDatastoreSecrets

| Name | Description | Value |
|-|-|-|
| clientSecret | Service principal secret. | string |
| secretsType | [Required] Credential type used to authentication with storage. | 'AccountKey''Certificate''Sas''ServicePrincipal' (required) |


### ResourceBaseProperties

| Name | Description | Value |
|-|-|-|
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |


### AzureBlobDatastore

| Name | Description | Value |
|-|-|-|
| datastoreType | [Required] Storage type backing the datastore. | 'AzureBlob' (required) |
| accountName | Storage account name. | string |
| containerName | Storage account container name. | string |
| endpoint | Azure cloud endpoint for the storage account. | string |
| protocol | Protocol used to communicate with the storage account. | string |
| resourceGroup | Azure Resource Group name | string |
| serviceDataAccessAuthIdentity | Indicates which identity to use to authenticate service data access to customer's storage. | 'None''WorkspaceSystemAssignedIdentity''WorkspaceUserAssignedIdentity' |
| subscriptionId | Azure Subscription Id | string |


### AzureDataLakeGen1Datastore

| Name | Description | Value |
|-|-|-|
| datastoreType | [Required] Storage type backing the datastore. | 'AzureDataLakeGen1' (required) |
| resourceGroup | Azure Resource Group name | string |
| serviceDataAccessAuthIdentity | Indicates which identity to use to authenticate service data access to customer's storage. | 'None''WorkspaceSystemAssignedIdentity''WorkspaceUserAssignedIdentity' |
| storeName | [Required] Azure Data Lake store name. | string (required)Constraints:Min length = 1Pattern =[a-zA-Z0-9_] |
| subscriptionId | Azure Subscription Id | string |


### AzureDataLakeGen2Datastore

| Name | Description | Value |
|-|-|-|
| datastoreType | [Required] Storage type backing the datastore. | 'AzureDataLakeGen2' (required) |
| accountName | [Required] Storage account name. | string (required)Constraints:Min length = 1Pattern =[a-zA-Z0-9_] |
| endpoint | Azure cloud endpoint for the storage account. | string |
| filesystem | [Required] The name of the Data Lake Gen2 filesystem. | string (required)Constraints:Min length = 1Pattern =[a-zA-Z0-9_] |
| protocol | Protocol used to communicate with the storage account. | string |
| resourceGroup | Azure Resource Group name | string |
| serviceDataAccessAuthIdentity | Indicates which identity to use to authenticate service data access to customer's storage. | 'None''WorkspaceSystemAssignedIdentity''WorkspaceUserAssignedIdentity' |
| subscriptionId | Azure Subscription Id | string |


### AzureFileDatastore

| Name | Description | Value |
|-|-|-|
| datastoreType | [Required] Storage type backing the datastore. | 'AzureFile' (required) |
| accountName | [Required] Storage account name. | string (required)Constraints:Min length = 1Pattern =[a-zA-Z0-9_] |
| endpoint | Azure cloud endpoint for the storage account. | string |
| fileShareName | [Required] The name of the Azure file share that the datastore points to. | string (required)Constraints:Min length = 1Pattern =[a-zA-Z0-9_] |
| protocol | Protocol used to communicate with the storage account. | string |
| resourceGroup | Azure Resource Group name | string |
| serviceDataAccessAuthIdentity | Indicates which identity to use to authenticate service data access to customer's storage. | 'None''WorkspaceSystemAssignedIdentity''WorkspaceUserAssignedIdentity' |
| subscriptionId | Azure Subscription Id | string |
## Microsoft.MachineLearningServices/workspaces/environments@2023-10-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.MachineLearningServices/workspaces/environments@2023-10-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      description = "string"
      isArchived = bool
      properties = {
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
      }
      tags = {
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
      }
    }
  })
}

```

### workspaces/environments

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:workspaces |
| properties | [Required] Additional attributes of the entity. | EnvironmentContainerProperties(required) |


### EnvironmentContainerProperties

| Name | Description | Value |
|-|-|-|
| description | The asset description text. | string |
| isArchived | Is the asset archived? | bool |
| properties | The asset property dictionary. | ResourceBaseProperties |
| tags | Tag dictionary. Tags can be added, removed, and updated. | object |


### ResourceBaseProperties

| Name | Description | Value |
|-|-|-|
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
## Microsoft.MachineLearningServices/workspaces/environments/versions@2023-10-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.MachineLearningServices/workspaces/environments/versions@2023-10-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      autoRebuild = "string"
      build = {
        contextUri = "string"
        dockerfilePath = "string"
      }
      condaFile = "string"
      description = "string"
      image = "string"
      inferenceConfig = {
        livenessRoute = {
          path = "string"
          port = int
        }
        readinessRoute = {
          path = "string"
          port = int
        }
        scoringRoute = {
          path = "string"
          port = int
        }
      }
      isAnonymous = bool
      isArchived = bool
      osType = "string"
      properties = {
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
      }
      stage = "string"
      tags = {
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
      }
    }
  })
}

```

### workspaces/environments/versions

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:environments |
| properties | [Required] Additional attributes of the entity. | EnvironmentVersionProperties(required) |


### EnvironmentVersionProperties

| Name | Description | Value |
|-|-|-|
| autoRebuild | Defines if image needs to be rebuilt based on base image changes. | 'Disabled''OnBaseImageUpdate' |
| build | Configuration settings for Docker build context. | BuildContext |
| condaFile | Standard configuration file used by Conda that lets you install any kind of package, including Python, R, and C/C++ packages.{see href="https://repo2docker.readthedocs.io/en/latest/config_files.html#environment-yml-install-a-conda-environment" /} | string |
| description | The asset description text. | string |
| image | Name of the image that will be used for the environment.{seealso href="https://docs.microsoft.com/azure/machine-learning/how-to-deploy-custom-docker-image#use-a-custom-base-image" /} | string |
| inferenceConfig | Defines configuration specific to inference. | InferenceContainerProperties |
| isAnonymous | If the name version are system generated (anonymous registration). | bool |
| isArchived | Is the asset archived? | bool |
| osType | The OS type of the environment. | 'Linux''Windows' |
| properties | The asset property dictionary. | ResourceBaseProperties |
| stage | Stage in the environment lifecycle assigned to this environment | string |
| tags | Tag dictionary. Tags can be added, removed, and updated. | object |


### BuildContext

| Name | Description | Value |
|-|-|-|
| contextUri | [Required] URI of the Docker build context used to build the image. Supports blob URIs on environment creation and may return blob or Git URIs.{seealso href="https://docs.docker.com/engine/reference/commandline/build/#extended-description" /} | string (required)Constraints:Min length = 1Pattern =[a-zA-Z0-9_] |
| dockerfilePath | Path to the Dockerfile in the build context.{seealso href="https://docs.docker.com/engine/reference/builder/" /} | string |


### InferenceContainerProperties

| Name | Description | Value |
|-|-|-|
| livenessRoute | The route to check the liveness of the inference server container. | Route |
| readinessRoute | The route to check the readiness of the inference server container. | Route |
| scoringRoute | The port to send the scoring requests to, within the inference server container. | Route |


### Route

| Name | Description | Value |
|-|-|-|
| path | [Required] The path for the route. | string (required)Constraints:Min length = 1Pattern =[a-zA-Z0-9_] |
| port | [Required] The port for the route. | int (required) |


### ResourceBaseProperties

| Name | Description | Value |
|-|-|-|
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
## Microsoft.MachineLearningServices/workspaces/featuresets@2023-10-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.MachineLearningServices/workspaces/featuresets@2023-10-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      description = "string"
      isArchived = bool
      properties = {
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
      }
      tags = {
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
      }
    }
  })
}

```

### workspaces/featuresets

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:workspaces |
| properties | [Required] Additional attributes of the entity. | FeaturesetContainerProperties(required) |


### FeaturesetContainerProperties

| Name | Description | Value |
|-|-|-|
| description | The asset description text. | string |
| isArchived | Is the asset archived? | bool |
| properties | The asset property dictionary. | ResourceBaseProperties |
| tags | Tag dictionary. Tags can be added, removed, and updated. | object |


### ResourceBaseProperties

| Name | Description | Value |
|-|-|-|
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
## Microsoft.MachineLearningServices/workspaces/featuresets/versions@2023-10-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.MachineLearningServices/workspaces/featuresets/versions@2023-10-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      description = "string"
      entities = [
        "string"
      ]
      isAnonymous = bool
      isArchived = bool
      materializationSettings = {
        notification = {
          emailOn = [
            "string"
          ]
          emails = [
            "string"
          ]
          webhooks = {
            {customized property} = {
              eventType = "string"
              webhookType = "string"
              // For remaining properties, see Webhook objects
            }
          }
        }
        resource = {
          instanceType = "string"
        }
        schedule = {
          endTime = "string"
          frequency = "string"
          interval = int
          schedule = {
            hours = [
              int
            ]
            minutes = [
              int
            ]
            monthDays = [
              int
            ]
            weekDays = [
              "string"
            ]
          }
          startTime = "string"
          timeZone = "string"
          triggerType = "string"
        }
        sparkConfiguration = {
          {customized property} = "string"
        }
        storeType = "string"
      }
      properties = {
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
      }
      specification = {
        path = "string"
      }
      stage = "string"
      tags = {
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
      }
    }
  })
}

```

### workspaces/featuresets/versions

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:featuresets |
| properties | [Required] Additional attributes of the entity. | FeaturesetVersionProperties(required) |


### FeaturesetVersionProperties

| Name | Description | Value |
|-|-|-|
| description | The asset description text. | string |
| entities | Specifies list of entities | string[] |
| isAnonymous | If the name version are system generated (anonymous registration). | bool |
| isArchived | Is the asset archived? | bool |
| materializationSettings | Specifies the materialization settings | MaterializationSettings |
| properties | The asset property dictionary. | ResourceBaseProperties |
| specification | Specifies the feature spec details | FeaturesetSpecification |
| stage | Specifies the asset stage | string |
| tags | Tag dictionary. Tags can be added, removed, and updated. | object |


### MaterializationSettings

| Name | Description | Value |
|-|-|-|
| notification | Specifies the notification details | NotificationSetting |
| resource | Specifies the compute resource settings | MaterializationComputeResource |
| schedule | Specifies the schedule details | RecurrenceTrigger |
| sparkConfiguration | Specifies the spark compute settings | MaterializationSettingsSparkConfiguration |
| storeType | Specifies the stores to which materialization should happen | 'None''Offline''Online''OnlineAndOffline' |


### NotificationSetting

| Name | Description | Value |
|-|-|-|
| emailOn | Send email notification to user on specified notification type | String array containing any of:'JobCancelled''JobCompleted''JobFailed' |
| emails | This is the email recipient list which has a limitation of 499 characters in total concat with comma separator | string[] |
| webhooks | Send webhook callback to a service. Key is a user-provided name for the webhook. | NotificationSettingWebhooks |


### NotificationSettingWebhooks

| Name | Description | Value |
|-|-|-|
| {customized property} |  | Webhook |


### Webhook

| Name | Description | Value |
|-|-|-|
| eventType | Send callback on a specified notification event | string |
| webhookType | Set the object type | AzureDevOps(required) |


### AzureDevOpsWebhook

| Name | Description | Value |
|-|-|-|
| webhookType | [Required] Specifies the type of service to send a callback | 'AzureDevOps' (required) |


### MaterializationComputeResource

| Name | Description | Value |
|-|-|-|
| instanceType | Specifies the instance type | string |


### RecurrenceTrigger

| Name | Description | Value |
|-|-|-|
| endTime | Specifies end time of schedule in ISO 8601, but without a UTC offset. Referhttps://en.wikipedia.org/wiki/ISO_8601.Recommented format would be "2022-06-01T00:00:01"If not present, the schedule will run indefinitely | string |
| frequency | [Required] The frequency to trigger schedule. | 'Day''Hour''Minute''Month''Week' (required) |
| interval | [Required] Specifies schedule interval in conjunction with frequency | int (required) |
| schedule | The recurrence schedule. | RecurrenceSchedule |
| startTime | Specifies start time of schedule in ISO 8601 format, but without a UTC offset. | string |
| timeZone | Specifies time zone in which the schedule runs.TimeZone should follow Windows time zone format. Refer:https://docs.microsoft.com/windows-hardware/manufacture/desktop/default-time-zones | string |
| triggerType | [Required] | 'Cron''Recurrence' (required) |


### RecurrenceSchedule

| Name | Description | Value |
|-|-|-|
| hours | [Required] List of hours for the schedule. | int[] (required) |
| minutes | [Required] List of minutes for the schedule. | int[] (required) |
| monthDays | List of month days for the schedule | int[] |
| weekDays | List of days for the schedule. | String array containing any of:'Friday''Monday''Saturday''Sunday''Thursday''Tuesday''Wednesday' |


### MaterializationSettingsSparkConfiguration

| Name | Description | Value |
|-|-|-|
| {customized property} |  | string |


### ResourceBaseProperties

| Name | Description | Value |
|-|-|-|
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |


### FeaturesetSpecification

| Name | Description | Value |
|-|-|-|
| path | Specifies the spec path | string |
## Microsoft.MachineLearningServices/workspaces/featurestoreEntities@2023-10-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.MachineLearningServices/workspaces/featurestoreEntities@2023-10-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      description = "string"
      isArchived = bool
      properties = {
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
      }
      tags = {
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
      }
    }
  })
}

```

### workspaces/featurestoreEntities

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:workspaces |
| properties | [Required] Additional attributes of the entity. | FeaturestoreEntityContainerProperties(required) |


### FeaturestoreEntityContainerProperties

| Name | Description | Value |
|-|-|-|
| description | The asset description text. | string |
| isArchived | Is the asset archived? | bool |
| properties | The asset property dictionary. | ResourceBaseProperties |
| tags | Tag dictionary. Tags can be added, removed, and updated. | object |


### ResourceBaseProperties

| Name | Description | Value |
|-|-|-|
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
## Microsoft.MachineLearningServices/workspaces/featurestoreEntities/versions@2023-10-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.MachineLearningServices/workspaces/featurestoreEntities/versions@2023-10-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      description = "string"
      indexColumns = [
        {
          columnName = "string"
          dataType = "string"
        }
      ]
      isAnonymous = bool
      isArchived = bool
      properties = {
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
      }
      stage = "string"
      tags = {
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
      }
    }
  })
}

```

### workspaces/featurestoreEntities/versions

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:featurestoreEntities |
| properties | [Required] Additional attributes of the entity. | FeaturestoreEntityVersionProperties(required) |


### FeaturestoreEntityVersionProperties

| Name | Description | Value |
|-|-|-|
| description | The asset description text. | string |
| indexColumns | Specifies index columns | IndexColumn[] |
| isAnonymous | If the name version are system generated (anonymous registration). | bool |
| isArchived | Is the asset archived? | bool |
| properties | The asset property dictionary. | ResourceBaseProperties |
| stage | Specifies the asset stage | string |
| tags | Tag dictionary. Tags can be added, removed, and updated. | object |


### IndexColumn

| Name | Description | Value |
|-|-|-|
| columnName | Specifies the column name | string |
| dataType | Specifies the data type | 'Binary''Boolean''Datetime''Double''Float''Integer''Long''String' |


### ResourceBaseProperties

| Name | Description | Value |
|-|-|-|
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
## Microsoft.MachineLearningServices/workspaces/inferencePools@2023-08-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.MachineLearningServices/workspaces/inferencePools@2023-08-01-preview"
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
      codeConfiguration = {
        codeId = "string"
        scoringScript = "string"
      }
      description = "string"
      environmentConfiguration = {
        environmentId = "string"
        environmentVariables = {
          {customized property} = "string"
        }
        livenessProbe = {
          failureThreshold = int
          initialDelay = "string"
          period = "string"
          successThreshold = int
          timeout = "string"
        }
        readinessProbe = {
          failureThreshold = int
          initialDelay = "string"
          period = "string"
          successThreshold = int
          timeout = "string"
        }
        startupProbe = {
          failureThreshold = int
          initialDelay = "string"
          period = "string"
          successThreshold = int
          timeout = "string"
        }
      }
      modelConfiguration = {
        modelId = "string"
      }
      nodeSkuType = "string"
      properties = {
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
      }
      requestConfiguration = {
        maxConcurrentRequestsPerInstance = int
        requestTimeout = "string"
      }
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

### workspaces/inferencePools

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| sku | Sku details required for ARM contract for Autoscaling. | Sku |
| kind | Metadata used by portal/tooling/etc to render different UX experiences for resources of the same type. | string |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:workspaces |
| identity | Managed service identity (system assigned and/or user assigned identities) | ManagedServiceIdentity |
| properties | [Required] Additional attributes of the entity. | InferencePoolProperties(required) |


### ManagedServiceIdentity

| Name | Description | Value |
|-|-|-|
| type | Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed). | 'None''SystemAssigned''SystemAssigned,UserAssigned''UserAssigned' (required) |
| userAssignedIdentities | The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests. | UserAssignedIdentities |


### UserAssignedIdentities

| Name | Description | Value |
|-|-|-|
| {customized property} |  | UserAssignedIdentity |


### InferencePoolProperties

| Name | Description | Value |
|-|-|-|
| codeConfiguration | Code configuration for the inference pool. | CodeConfiguration |
| description | Description of the resource. | string |
| environmentConfiguration | EnvironmentConfiguration for the inference pool. | PoolEnvironmentConfiguration |
| modelConfiguration | ModelConfiguration for the inference pool. | PoolModelConfiguration |
| nodeSkuType | [Required] Compute instance type. | string (required)Constraints:Min length = 1Pattern =[a-zA-Z0-9_] |
| properties | Property dictionary. Properties can be added, but not removed or altered. | PropertiesBaseProperties |
| requestConfiguration | Request configuration for the inference pool. | RequestConfiguration |


### CodeConfiguration

| Name | Description | Value |
|-|-|-|
| codeId | ARM resource ID of the code asset. | string |
| scoringScript | [Required] The script to execute on startup. eg. "score.py" | string (required)Constraints:Min length = 1Pattern =[a-zA-Z0-9_] |


### PoolEnvironmentConfiguration

| Name | Description | Value |
|-|-|-|
| environmentId | ARM resource ID of the environment specification for the inference pool. | string |
| environmentVariables | Environment variables configuration for the inference pool. | PoolEnvironmentConfigurationEnvironmentVariables |
| livenessProbe | Liveness probe monitors the health of the container regularly. | ProbeSettings |
| readinessProbe | Readiness probe validates if the container is ready to serve traffic. The properties and defaults are the same as liveness probe. | ProbeSettings |
| startupProbe | This verifies whether the application within a container is started. Startup probes run before any other probe, and, unless it finishes successfully, disables other probes. | ProbeSettings |


### PoolEnvironmentConfigurationEnvironmentVariables

| Name | Description | Value |
|-|-|-|
| {customized property} |  | string |


### ProbeSettings

| Name | Description | Value |
|-|-|-|
| failureThreshold | The number of failures to allow before returning an unhealthy status. | int |
| initialDelay | The delay before the first probe in ISO 8601 format. | string |
| period | The length of time between probes in ISO 8601 format. | string |
| successThreshold | The number of successful probes before returning a healthy status. | int |
| timeout | The probe timeout in ISO 8601 format. | string |


### PoolModelConfiguration

| Name | Description | Value |
|-|-|-|
| modelId | The URI path to the model. | string |


### PropertiesBaseProperties

| Name | Description | Value |
|-|-|-|
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |


### RequestConfiguration

| Name | Description | Value |
|-|-|-|
| maxConcurrentRequestsPerInstance | The number of maximum concurrent requests per node allowed per deployment. Defaults to 1. | int |
| requestTimeout | The scoring timeout in ISO 8601 format.Defaults to 5000ms. | string |


### Sku

| Name | Description | Value |
|-|-|-|
| capacity | If the SKU supports scale out/in then the capacity integer should be included. If scale out/in is not possible for the resource this may be omitted. | int |
| family | If the service has different generations of hardware, for the same SKU, then that can be captured here. | string |
| name | The name of the SKU. Ex - P3. It is typically a letter+number code | string (required) |
| size | The SKU size. When the name field is the combination of tier and some other value, this would be the standalone code. | string |
| tier | This field is required to be implemented by the Resource Provider if the service has more than one tier, but is not required on a PUT. | 'Basic''Free''Premium''Standard' |
## Microsoft.MachineLearningServices/workspaces/inferencePools/endpoints@2023-08-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.MachineLearningServices/workspaces/inferencePools/endpoints@2023-08-01-preview"
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
      authMode = "AAD"
      description = "string"
      groupId = "string"
      properties = {
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
      }
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

### workspaces/inferencePools/endpoints

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| sku | Sku details required for ARM contract for Autoscaling. | Sku |
| kind | Metadata used by portal/tooling/etc to render different UX experiences for resources of the same type. | string |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:inferencePools |
| identity | Managed service identity (system assigned and/or user assigned identities) | ManagedServiceIdentity |
| properties | [Required] Additional attributes of the entity. | InferenceEndpointProperties(required) |


### ManagedServiceIdentity

| Name | Description | Value |
|-|-|-|
| type | Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed). | 'None''SystemAssigned''SystemAssigned,UserAssigned''UserAssigned' (required) |
| userAssignedIdentities | The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests. | UserAssignedIdentities |


### UserAssignedIdentities

| Name | Description | Value |
|-|-|-|
| {customized property} |  | UserAssignedIdentity |


### InferenceEndpointProperties

| Name | Description | Value |
|-|-|-|
| authMode | [Required] Authentication mode for the endpoint. | 'AAD' (required) |
| description | Description of the resource. | string |
| groupId | [Required] Group within the same pool with which this endpoint needs to be associated with. | string (required)Constraints:Min length = 1Pattern =[a-zA-Z0-9_] |
| properties | Property dictionary. Properties can be added, but not removed or altered. | PropertiesBaseProperties |


### PropertiesBaseProperties

| Name | Description | Value |
|-|-|-|
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |


### Sku

| Name | Description | Value |
|-|-|-|
| capacity | If the SKU supports scale out/in then the capacity integer should be included. If scale out/in is not possible for the resource this may be omitted. | int |
| family | If the service has different generations of hardware, for the same SKU, then that can be captured here. | string |
| name | The name of the SKU. Ex - P3. It is typically a letter+number code | string (required) |
| size | The SKU size. When the name field is the combination of tier and some other value, this would be the standalone code. | string |
| tier | This field is required to be implemented by the Resource Provider if the service has more than one tier, but is not required on a PUT. | 'Basic''Free''Premium''Standard' |
## Microsoft.MachineLearningServices/workspaces/inferencePools/groups@2023-08-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.MachineLearningServices/workspaces/inferencePools/groups@2023-08-01-preview"
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
      bonusExtraCapacity = int
      description = "string"
      metadata = "string"
      priority = int
      properties = {
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
      }
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

### workspaces/inferencePools/groups

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| sku | Sku details required for ARM contract for Autoscaling. | Sku |
| kind | Metadata used by portal/tooling/etc to render different UX experiences for resources of the same type. | string |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:inferencePools |
| identity | Managed service identity (system assigned and/or user assigned identities) | ManagedServiceIdentity |
| properties | [Required] Additional attributes of the entity. | InferenceGroupProperties(required) |


### ManagedServiceIdentity

| Name | Description | Value |
|-|-|-|
| type | Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed). | 'None''SystemAssigned''SystemAssigned,UserAssigned''UserAssigned' (required) |
| userAssignedIdentities | The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests. | UserAssignedIdentities |


### UserAssignedIdentities

| Name | Description | Value |
|-|-|-|
| {customized property} |  | UserAssignedIdentity |


### InferenceGroupProperties

| Name | Description | Value |
|-|-|-|
| bonusExtraCapacity | Capacity to be used from the pool's reserved capacity.optional | int |
| description | Description of the resource. | string |
| metadata | Metadata for the inference group. | string |
| priority | Priority of the group within the N:Microsoft.MachineLearning.ManagementFrontEnd.Contracts.V20230801Preview.Pools.InferencePools. | int |
| properties | Property dictionary. Properties can be added, but not removed or altered. | PropertiesBaseProperties |


### PropertiesBaseProperties

| Name | Description | Value |
|-|-|-|
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |


### Sku

| Name | Description | Value |
|-|-|-|
| capacity | If the SKU supports scale out/in then the capacity integer should be included. If scale out/in is not possible for the resource this may be omitted. | int |
| family | If the service has different generations of hardware, for the same SKU, then that can be captured here. | string |
| name | The name of the SKU. Ex - P3. It is typically a letter+number code | string (required) |
| size | The SKU size. When the name field is the combination of tier and some other value, this would be the standalone code. | string |
| tier | This field is required to be implemented by the Resource Provider if the service has more than one tier, but is not required on a PUT. | 'Basic''Free''Premium''Standard' |
## Microsoft.MachineLearningServices/workspaces/jobs@2023-10-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.MachineLearningServices/workspaces/jobs@2023-10-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      componentId = "string"
      computeId = "string"
      description = "string"
      displayName = "string"
      experimentName = "string"
      identity = {
        identityType = "string"
        // For remaining properties, see IdentityConfiguration objects
      }
      isArchived = bool
      properties = {
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
      }
      services = {
        {customized property} = {
          endpoint = "string"
          jobServiceType = "string"
          nodes = {
            nodesValueType = "string"
            // For remaining properties, see Nodes objects
          }
          port = int
          properties = {
            {customized property} = "string"
          }
        }
      }
      tags = {
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
      }
      jobType = "string"
      // For remaining properties, see JobBaseProperties objects
    }
  })
}

```

### workspaces/jobs

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:workspaces |
| properties | [Required] Additional attributes of the entity. | JobBaseProperties(required) |


### JobBaseProperties

| Name | Description | Value |
|-|-|-|
| componentId | ARM resource ID of the component resource. | string |
| computeId | ARM resource ID of the compute resource. | string |
| description | The asset description text. | string |
| displayName | Display name of job. | string |
| experimentName | The name of the experiment the job belongs to. If not set, the job is placed in the "Default" experiment. | string |
| identity | Identity configuration. If set, this should be one of AmlToken, ManagedIdentity, UserIdentity or null.Defaults to AmlToken if null. | IdentityConfiguration |
| isArchived | Is the asset archived? | bool |
| properties | The asset property dictionary. | ResourceBaseProperties |
| services | List of JobEndpoints.For local jobs, a job endpoint will have an endpoint value of FileStreamObject. | JobBaseServices |
| tags | Tag dictionary. Tags can be added, removed, and updated. | object |
| jobType | Set the object type | AutoMLCommandPipelineSweep(required) |


### IdentityConfiguration

| Name | Description | Value |
|-|-|-|
| identityType | Set the object type | AMLTokenManagedUserIdentity(required) |


### AmlToken

| Name | Description | Value |
|-|-|-|
| identityType | [Required] Specifies the type of identity framework. | 'AMLToken' (required) |


### ManagedIdentity

| Name | Description | Value |
|-|-|-|
| identityType | [Required] Specifies the type of identity framework. | 'Managed' (required) |
| clientId | Specifies a user-assigned identity by client ID. For system-assigned, do not set this field. | stringConstraints:Min length = 36Max length = 36Pattern =^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$ |
| objectId | Specifies a user-assigned identity by object ID. For system-assigned, do not set this field. | stringConstraints:Min length = 36Max length = 36Pattern =^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$ |
| resourceId | Specifies a user-assigned identity by ARM resource ID. For system-assigned, do not set this field. | string |


### UserIdentity

| Name | Description | Value |
|-|-|-|
| identityType | [Required] Specifies the type of identity framework. | 'UserIdentity' (required) |


### ResourceBaseProperties

| Name | Description | Value |
|-|-|-|
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |


### JobBaseServices

| Name | Description | Value |
|-|-|-|
| {customized property} |  | JobService |


### JobService

| Name | Description | Value |
|-|-|-|
| endpoint | Url for endpoint. | string |
| jobServiceType | Endpoint type. | string |
| nodes | Nodes that user would like to start the service on.If Nodes is not set or set to null, the service will only be started on leader node. | Nodes |
| port | Port for endpoint. | int |
| properties | Additional properties to set on the endpoint. | JobServiceProperties |


### Nodes

| Name | Description | Value |
|-|-|-|
| nodesValueType | Set the object type | All(required) |


### AllNodes

| Name | Description | Value |
|-|-|-|
| nodesValueType | [Required] Type of the Nodes value | 'All' (required) |


### JobServiceProperties

| Name | Description | Value |
|-|-|-|
| {customized property} |  | string |


### AutoMLJob

| Name | Description | Value |
|-|-|-|
| jobType | [Required] Specifies the type of job. | 'AutoML' (required) |
| environmentId | The ARM resource ID of the Environment specification for the job.This is optional value to provide, if not provided, AutoML will default this to Production AutoML curated environment version when running the job. | string |
| environmentVariables | Environment variables included in the job. | AutoMLJobEnvironmentVariables |
| outputs | Mapping of output data bindings used in the job. | AutoMLJobOutputs |
| queueSettings | Queue settings for the job | QueueSettings |
| resources | Compute Resource configuration for the job. | JobResourceConfiguration |
| taskDetails | [Required] This represents scenario which can be one of Tables/NLP/Image | AutoMLVertical(required) |


### AutoMLJobEnvironmentVariables

| Name | Description | Value |
|-|-|-|
| {customized property} |  | string |


### AutoMLJobOutputs

| Name | Description | Value |
|-|-|-|
| {customized property} |  | JobOutput |


### JobOutput

| Name | Description | Value |
|-|-|-|
| description | Description for the output. | string |
| jobOutputType | Set the object type | custom_modelmlflow_modelmltabletriton_modeluri_fileuri_folder(required) |


### CustomModelJobOutput

| Name | Description | Value |
|-|-|-|
| jobOutputType | [Required] Specifies the type of job. | 'custom_model' (required) |
| mode | Output Asset Delivery Mode. | 'ReadWriteMount''Upload' |
| uri | Output Asset URI. | string |


### MLFlowModelJobOutput

| Name | Description | Value |
|-|-|-|
| jobOutputType | [Required] Specifies the type of job. | 'mlflow_model' (required) |
| mode | Output Asset Delivery Mode. | 'ReadWriteMount''Upload' |
| uri | Output Asset URI. | string |


### MLTableJobOutput

| Name | Description | Value |
|-|-|-|
| jobOutputType | [Required] Specifies the type of job. | 'mltable' (required) |
| mode | Output Asset Delivery Mode. | 'ReadWriteMount''Upload' |
| uri | Output Asset URI. | string |


### TritonModelJobOutput

| Name | Description | Value |
|-|-|-|
| jobOutputType | [Required] Specifies the type of job. | 'triton_model' (required) |
| mode | Output Asset Delivery Mode. | 'ReadWriteMount''Upload' |
| uri | Output Asset URI. | string |


### UriFileJobOutput

| Name | Description | Value |
|-|-|-|
| jobOutputType | [Required] Specifies the type of job. | 'uri_file' (required) |
| mode | Output Asset Delivery Mode. | 'ReadWriteMount''Upload' |
| uri | Output Asset URI. | string |


### UriFolderJobOutput

| Name | Description | Value |
|-|-|-|
| jobOutputType | [Required] Specifies the type of job. | 'uri_folder' (required) |
| mode | Output Asset Delivery Mode. | 'ReadWriteMount''Upload' |
| uri | Output Asset URI. | string |


### QueueSettings

| Name | Description | Value |
|-|-|-|
| jobTier | Controls the compute job tier | 'Basic''Null''Premium''Spot''Standard' |


### JobResourceConfiguration

| Name | Description | Value |
|-|-|-|
| dockerArgs | Extra arguments to pass to the Docker run command. This would override any parameters that have already been set by the system, or in this section. This parameter is only supported for Azure ML compute types. | string |
| instanceCount | Optional number of instances or nodes used by the compute target. | int |
| instanceType | Optional type of VM used as supported by the compute target. | string |
| properties | Additional properties bag. | ResourceConfigurationProperties |
| shmSize | Size of the docker container's shared memory block. This should be in the format of (number)(unit) where number as to be greater than 0 and the unit can be one of b(bytes), k(kilobytes), m(megabytes), or g(gigabytes). | stringConstraints:Pattern =\d+[bBkKmMgG] |


### ResourceConfigurationProperties

| Name | Description | Value |
|-|-|-|
| {customized property} |  | For Bicep, you can use theany()function. |
| {customized property} |  | For Bicep, you can use theany()function. |


### AutoMLVertical

| Name | Description | Value |
|-|-|-|
| logVerbosity | Log verbosity for the job. | 'Critical''Debug''Error''Info''NotSet''Warning' |
| targetColumnName | Target column name: This is prediction values column.Also known as label column name in context of classification tasks. | string |
| trainingData | [Required] Training data input. | MLTableJobInput(required) |
| taskType | Set the object type | ClassificationForecastingImageClassificationImageClassificationMultilabelImageInstanceSegmentationImageObjectDetectionRegressionTextClassificationTextClassificationMultilabelTextNER(required) |


### MLTableJobInput

| Name | Description | Value |
|-|-|-|
| description | Description for the input. | string |
| jobInputType | [Required] Specifies the type of job. | 'custom_model''literal''mlflow_model''mltable''triton_model''uri_file''uri_folder' (required) |
| mode | Input Asset Delivery Mode. | 'Direct''Download''EvalDownload''EvalMount''ReadOnlyMount''ReadWriteMount' |
| uri | [Required] Input Asset URI. | string (required)Constraints:Min length = 1Pattern =[a-zA-Z0-9_] |


### Classification

| Name | Description | Value |
|-|-|-|
| taskType | [Required] Task type for AutoMLJob. | 'Classification' (required) |
| cvSplitColumnNames | Columns to use for CVSplit data. | string[] |
| featurizationSettings | Featurization inputs needed for AutoML job. | TableVerticalFeaturizationSettings |
| limitSettings | Execution constraints for AutoMLJob. | TableVerticalLimitSettings |
| nCrossValidations | Number of cross validation folds to be applied on training datasetwhen validation dataset is not provided. | NCrossValidations |
| positiveLabel | Positive label for binary metrics calculation. | string |
| primaryMetric | Primary metric for the task. | 'AUCWeighted''Accuracy''AveragePrecisionScoreWeighted''NormMacroRecall''PrecisionScoreWeighted' |
| testData | Test data input. | MLTableJobInput |
| testDataSize | The fraction of test dataset that needs to be set aside for validation purpose.Values between (0.0 , 1.0)Applied when validation dataset is not provided. | int |
| trainingSettings | Inputs for training phase for an AutoML Job. | ClassificationTrainingSettings |
| validationData | Validation data inputs. | MLTableJobInput |
| validationDataSize | The fraction of training dataset that needs to be set aside for validation purpose.Values between (0.0 , 1.0)Applied when validation dataset is not provided. | int |
| weightColumnName | The name of the sample weight column. Automated ML supports a weighted column as an input, causing rows in the data to be weighted up or down. | string |


### TableVerticalFeaturizationSettings

| Name | Description | Value |
|-|-|-|
| blockedTransformers | These transformers shall not be used in featurization. | String array containing any of:'CatTargetEncoder''CountVectorizer''HashOneHotEncoder''LabelEncoder''NaiveBayes''OneHotEncoder''TextTargetEncoder''TfIdf''WoETargetEncoder''WordEmbedding' |
| columnNameAndTypes | Dictionary of column name and its type (int, float, string, datetime etc). | TableVerticalFeaturizationSettingsColumnNameAndTypes |
| datasetLanguage | Dataset language, useful for the text data. | string |
| enableDnnFeaturization | Determines whether to use Dnn based featurizers for data featurization. | bool |
| mode | Featurization mode - User can keep the default 'Auto' mode and AutoML will take care of necessary transformation of the data in featurization phase.If 'Off' is selected then no featurization is done.If 'Custom' is selected then user can specify additional inputs to customize how featurization is done. | 'Auto''Custom''Off' |
| transformerParams | User can specify additional transformers to be used along with the columns to which it would be applied and parameters for the transformer constructor. | TableVerticalFeaturizationSettingsTransformerParams |


### TableVerticalFeaturizationSettingsColumnNameAndTypes

| Name | Description | Value |
|-|-|-|
| {customized property} |  | string |


### TableVerticalFeaturizationSettingsTransformerParams

| Name | Description | Value |
|-|-|-|
| {customized property} |  | ColumnTransformer[] |


### ColumnTransformer

| Name | Description | Value |
|-|-|-|
| fields | Fields to apply transformer logic on. | string[] |
| parameters | Different properties to be passed to transformer.Input expected is dictionary of key,value pairs in JSON format. | For Bicep, you can use theany()function. |


### TableVerticalLimitSettings

| Name | Description | Value |
|-|-|-|
| enableEarlyTermination | Enable early termination, determines whether or not if AutoMLJob will terminate early if there is no score improvement in last 20 iterations. | bool |
| exitScore | Exit score for the AutoML job. | int |
| maxConcurrentTrials | Maximum Concurrent iterations. | int |
| maxCoresPerTrial | Max cores per iteration. | int |
| maxTrials | Number of iterations. | int |
| timeout | AutoML job timeout. | string |
| trialTimeout | Iteration timeout. | string |


### NCrossValidations

| Name | Description | Value |
|-|-|-|
| mode | Set the object type | AutoCustom(required) |


### AutoNCrossValidations

| Name | Description | Value |
|-|-|-|
| mode | [Required] Mode for determining N-Cross validations. | 'Auto' (required) |


### CustomNCrossValidations

| Name | Description | Value |
|-|-|-|
| mode | [Required] Mode for determining N-Cross validations. | 'Custom' (required) |
| value | [Required] N-Cross validations value. | int (required) |


### ClassificationTrainingSettings

| Name | Description | Value |
|-|-|-|
| allowedTrainingAlgorithms | Allowed models for classification task. | String array containing any of:'BernoulliNaiveBayes''DecisionTree''ExtremeRandomTrees''GradientBoosting''KNN''LightGBM''LinearSVM''LogisticRegression''MultinomialNaiveBayes''RandomForest''SGD''SVM''XGBoostClassifier' |
| blockedTrainingAlgorithms | Blocked models for classification task. | String array containing any of:'BernoulliNaiveBayes''DecisionTree''ExtremeRandomTrees''GradientBoosting''KNN''LightGBM''LinearSVM''LogisticRegression''MultinomialNaiveBayes''RandomForest''SGD''SVM''XGBoostClassifier' |
| enableDnnTraining | Enable recommendation of DNN models. | bool |
| enableModelExplainability | Flag to turn on explainability on best model. | bool |
| enableOnnxCompatibleModels | Flag for enabling onnx compatible models. | bool |
| enableStackEnsemble | Enable stack ensemble run. | bool |
| enableVoteEnsemble | Enable voting ensemble run. | bool |
| ensembleModelDownloadTimeout | During VotingEnsemble and StackEnsemble model generation, multiple fitted models from the previous child runs are downloaded.Configure this parameter with a higher value than 300 secs, if more time is needed. | string |
| stackEnsembleSettings | Stack ensemble settings for stack ensemble run. | StackEnsembleSettings |


### StackEnsembleSettings

| Name | Description | Value |
|-|-|-|
| stackMetaLearnerKWargs | Optional parameters to pass to the initializer of the meta-learner. | For Bicep, you can use theany()function. |
| stackMetaLearnerTrainPercentage | Specifies the proportion of the training set (when choosing train and validation type of training) to be reserved for training the meta-learner. Default value is 0.2. | int |
| stackMetaLearnerType | The meta-learner is a model trained on the output of the individual heterogeneous models. | 'ElasticNet''ElasticNetCV''LightGBMClassifier''LightGBMRegressor''LinearRegression''LogisticRegression''LogisticRegressionCV''None' |


### Forecasting

| Name | Description | Value |
|-|-|-|
| taskType | [Required] Task type for AutoMLJob. | 'Forecasting' (required) |
| cvSplitColumnNames | Columns to use for CVSplit data. | string[] |
| featurizationSettings | Featurization inputs needed for AutoML job. | TableVerticalFeaturizationSettings |
| forecastingSettings | Forecasting task specific inputs. | ForecastingSettings |
| limitSettings | Execution constraints for AutoMLJob. | TableVerticalLimitSettings |
| nCrossValidations | Number of cross validation folds to be applied on training datasetwhen validation dataset is not provided. | NCrossValidations |
| primaryMetric | Primary metric for forecasting task. | 'NormalizedMeanAbsoluteError''NormalizedRootMeanSquaredError''R2Score''SpearmanCorrelation' |
| testData | Test data input. | MLTableJobInput |
| testDataSize | The fraction of test dataset that needs to be set aside for validation purpose.Values between (0.0 , 1.0)Applied when validation dataset is not provided. | int |
| trainingSettings | Inputs for training phase for an AutoML Job. | ForecastingTrainingSettings |
| validationData | Validation data inputs. | MLTableJobInput |
| validationDataSize | The fraction of training dataset that needs to be set aside for validation purpose.Values between (0.0 , 1.0)Applied when validation dataset is not provided. | int |
| weightColumnName | The name of the sample weight column. Automated ML supports a weighted column as an input, causing rows in the data to be weighted up or down. | string |


### ForecastingSettings

| Name | Description | Value |
|-|-|-|
| countryOrRegionForHolidays | Country or region for holidays for forecasting tasks.These should be ISO 3166 two-letter country/region codes, for example 'US' or 'GB'. | string |
| cvStepSize | Number of periods between the origin time of one CV fold and the next fold. Forexample, ifCVStepSize= 3 for daily data, the origin time for each fold will bethree days apart. | int |
| featureLags | Flag for generating lags for the numeric features with 'auto' or null. | 'Auto''None' |
| forecastHorizon | The desired maximum forecast horizon in units of time-series frequency. | ForecastHorizon |
| frequency | When forecasting, this parameter represents the period with which the forecast is desired, for example daily, weekly, yearly, etc. The forecast frequency is dataset frequency by default. | string |
| seasonality | Set time series seasonality as an integer multiple of the series frequency.If seasonality is set to 'auto', it will be inferred. | Seasonality |
| shortSeriesHandlingConfig | The parameter defining how if AutoML should handle short time series. | 'Auto''Drop''None''Pad' |
| targetAggregateFunction | The function to be used to aggregate the time series target column to conform to a user specified frequency.If the TargetAggregateFunction is set i.e. not 'None', but the freq parameter is not set, the error is raised. The possible target aggregation functions are: "sum", "max", "min" and "mean". | 'Max''Mean''Min''None''Sum' |
| targetLags | The number of past periods to lag from the target column. | TargetLags |
| targetRollingWindowSize | The number of past periods used to create a rolling window average of the target column. | TargetRollingWindowSize |
| timeColumnName | The name of the time column. This parameter is required when forecasting to specify the datetime column in the input data used for building the time series and inferring its frequency. | string |
| timeSeriesIdColumnNames | The names of columns used to group a timeseries. It can be used to create multiple series.If grain is not defined, the data set is assumed to be one time-series. This parameter is used with task type forecasting. | string[] |
| useStl | Configure STL Decomposition of the time-series target column. | 'None''Season''SeasonTrend' |


### ForecastHorizon

| Name | Description | Value |
|-|-|-|
| mode | Set the object type | AutoCustom(required) |


### AutoForecastHorizon

| Name | Description | Value |
|-|-|-|
| mode | [Required] Set forecast horizon value selection mode. | 'Auto' (required) |


### CustomForecastHorizon

| Name | Description | Value |
|-|-|-|
| mode | [Required] Set forecast horizon value selection mode. | 'Custom' (required) |
| value | [Required] Forecast horizon value. | int (required) |


### Seasonality

| Name | Description | Value |
|-|-|-|
| mode | Set the object type | AutoCustom(required) |


### AutoSeasonality

| Name | Description | Value |
|-|-|-|
| mode | [Required] Seasonality mode. | 'Auto' (required) |


### CustomSeasonality

| Name | Description | Value |
|-|-|-|
| mode | [Required] Seasonality mode. | 'Custom' (required) |
| value | [Required] Seasonality value. | int (required) |


### TargetLags

| Name | Description | Value |
|-|-|-|
| mode | Set the object type | AutoCustom(required) |


### AutoTargetLags

| Name | Description | Value |
|-|-|-|
| mode | [Required] Set target lags mode - Auto/Custom | 'Auto' (required) |


### CustomTargetLags

| Name | Description | Value |
|-|-|-|
| mode | [Required] Set target lags mode - Auto/Custom | 'Custom' (required) |
| values | [Required] Set target lags values. | int[] (required) |


### TargetRollingWindowSize

| Name | Description | Value |
|-|-|-|
| mode | Set the object type | AutoCustom(required) |


### AutoTargetRollingWindowSize

| Name | Description | Value |
|-|-|-|
| mode | [Required] TargetRollingWindowSiz detection mode. | 'Auto' (required) |


### CustomTargetRollingWindowSize

| Name | Description | Value |
|-|-|-|
| mode | [Required] TargetRollingWindowSiz detection mode. | 'Custom' (required) |
| value | [Required] TargetRollingWindowSize value. | int (required) |


### ForecastingTrainingSettings

| Name | Description | Value |
|-|-|-|
| allowedTrainingAlgorithms | Allowed models for forecasting task. | String array containing any of:'Arimax''AutoArima''Average''DecisionTree''ElasticNet''ExponentialSmoothing''ExtremeRandomTrees''GradientBoosting''KNN''LassoLars''LightGBM''Naive''Prophet''RandomForest''SGD''SeasonalAverage''SeasonalNaive''TCNForecaster''XGBoostRegressor' |
| blockedTrainingAlgorithms | Blocked models for forecasting task. | String array containing any of:'Arimax''AutoArima''Average''DecisionTree''ElasticNet''ExponentialSmoothing''ExtremeRandomTrees''GradientBoosting''KNN''LassoLars''LightGBM''Naive''Prophet''RandomForest''SGD''SeasonalAverage''SeasonalNaive''TCNForecaster''XGBoostRegressor' |
| enableDnnTraining | Enable recommendation of DNN models. | bool |
| enableModelExplainability | Flag to turn on explainability on best model. | bool |
| enableOnnxCompatibleModels | Flag for enabling onnx compatible models. | bool |
| enableStackEnsemble | Enable stack ensemble run. | bool |
| enableVoteEnsemble | Enable voting ensemble run. | bool |
| ensembleModelDownloadTimeout | During VotingEnsemble and StackEnsemble model generation, multiple fitted models from the previous child runs are downloaded.Configure this parameter with a higher value than 300 secs, if more time is needed. | string |
| stackEnsembleSettings | Stack ensemble settings for stack ensemble run. | StackEnsembleSettings |


### ImageClassification

| Name | Description | Value |
|-|-|-|
| taskType | [Required] Task type for AutoMLJob. | 'ImageClassification' (required) |
| limitSettings | [Required] Limit settings for the AutoML job. | ImageLimitSettings(required) |
| modelSettings | Settings used for training the model. | ImageModelSettingsClassification |
| primaryMetric | Primary metric to optimize for this task. | 'AUCWeighted''Accuracy''AveragePrecisionScoreWeighted''NormMacroRecall''PrecisionScoreWeighted' |
| searchSpace | Search space for sampling different combinations of models and their hyperparameters. | ImageModelDistributionSettingsClassification[] |
| sweepSettings | Model sweeping and hyperparameter sweeping related settings. | ImageSweepSettings |
| validationData | Validation data inputs. | MLTableJobInput |
| validationDataSize | The fraction of training dataset that needs to be set aside for validation purpose.Values between (0.0 , 1.0)Applied when validation dataset is not provided. | int |


### ImageLimitSettings

| Name | Description | Value |
|-|-|-|
| maxConcurrentTrials | Maximum number of concurrent AutoML iterations. | int |
| maxTrials | Maximum number of AutoML iterations. | int |
| timeout | AutoML job timeout. | string |


### ImageModelSettingsClassification

| Name | Description | Value |
|-|-|-|
| advancedSettings | Settings for advanced scenarios. | string |
| amsGradient | Enable AMSGrad when optimizer is 'adam' or 'adamw'. | bool |
| augmentations | Settings for using Augmentations. | string |
| beta1 | Value of 'beta1' when optimizer is 'adam' or 'adamw'. Must be a float in the range [0, 1]. | int |
| beta2 | Value of 'beta2' when optimizer is 'adam' or 'adamw'. Must be a float in the range [0, 1]. | int |
| checkpointFrequency | Frequency to store model checkpoints. Must be a positive integer. | int |
| checkpointModel | The pretrained checkpoint model for incremental training. | MLFlowModelJobInput |
| checkpointRunId | The id of a previous run that has a pretrained checkpoint for incremental training. | string |
| distributed | Whether to use distributed training. | bool |
| earlyStopping | Enable early stopping logic during training. | bool |
| earlyStoppingDelay | Minimum number of epochs or validation evaluations to wait before primary metric improvementis tracked for early stopping. Must be a positive integer. | int |
| earlyStoppingPatience | Minimum number of epochs or validation evaluations with no primary metric improvement beforethe run is stopped. Must be a positive integer. | int |
| enableOnnxNormalization | Enable normalization when exporting ONNX model. | bool |
| evaluationFrequency | Frequency to evaluate validation dataset to get metric scores. Must be a positive integer. | int |
| gradientAccumulationStep | Gradient accumulation means running a configured number of "GradAccumulationStep" steps withoutupdating the model weights while accumulating the gradients of those steps, and then usingthe accumulated gradients to compute the weight updates. Must be a positive integer. | int |
| layersToFreeze | Number of layers to freeze for the model. Must be a positive integer.For instance, passing 2 as value for 'seresnext' meansfreezing layer0 and layer1. For a full list of models supported and details on layer freeze, pleasesee:https://docs.microsoft.com/azure/machine-learning/how-to-auto-train-image-models. | int |
| learningRate | Initial learning rate. Must be a float in the range [0, 1]. | int |
| learningRateScheduler | Type of learning rate scheduler. Must be 'warmup_cosine' or 'step'. | 'None''Step''WarmupCosine' |
| modelName | Name of the model to use for training.For more information on the available models please visit the official documentation:https://docs.microsoft.com/azure/machine-learning/how-to-auto-train-image-models. | string |
| momentum | Value of momentum when optimizer is 'sgd'. Must be a float in the range [0, 1]. | int |
| nesterov | Enable nesterov when optimizer is 'sgd'. | bool |
| numberOfEpochs | Number of training epochs. Must be a positive integer. | int |
| numberOfWorkers | Number of data loader workers. Must be a non-negative integer. | int |
| optimizer | Type of optimizer. | 'Adam''Adamw''None''Sgd' |
| randomSeed | Random seed to be used when using deterministic training. | int |
| stepLRGamma | Value of gamma when learning rate scheduler is 'step'. Must be a float in the range [0, 1]. | int |
| stepLRStepSize | Value of step size when learning rate scheduler is 'step'. Must be a positive integer. | int |
| trainingBatchSize | Training batch size. Must be a positive integer. | int |
| trainingCropSize | Image crop size that is input to the neural network for the training dataset. Must be a positive integer. | int |
| validationBatchSize | Validation batch size. Must be a positive integer. | int |
| validationCropSize | Image crop size that is input to the neural network for the validation dataset. Must be a positive integer. | int |
| validationResizeSize | Image size to which to resize before cropping for validation dataset. Must be a positive integer. | int |
| warmupCosineLRCycles | Value of cosine cycle when learning rate scheduler is 'warmup_cosine'. Must be a float in the range [0, 1]. | int |
| warmupCosineLRWarmupEpochs | Value of warmup epochs when learning rate scheduler is 'warmup_cosine'. Must be a positive integer. | int |
| weightDecay | Value of weight decay when optimizer is 'sgd', 'adam', or 'adamw'. Must be a float in the range[0, 1]. | int |
| weightedLoss | Weighted loss. The accepted values are 0 for no weighted loss.1 for weighted loss with sqrt.(class_weights). 2 for weighted loss with class_weights. Must be 0 or 1 or 2. | int |


### MLFlowModelJobInput

| Name | Description | Value |
|-|-|-|
| description | Description for the input. | string |
| jobInputType | [Required] Specifies the type of job. | 'custom_model''literal''mlflow_model''mltable''triton_model''uri_file''uri_folder' (required) |
| mode | Input Asset Delivery Mode. | 'Direct''Download''EvalDownload''EvalMount''ReadOnlyMount''ReadWriteMount' |
| uri | [Required] Input Asset URI. | string (required)Constraints:Min length = 1Pattern =[a-zA-Z0-9_] |


### ImageModelDistributionSettingsClassification

| Name | Description | Value |
|-|-|-|
| amsGradient | Enable AMSGrad when optimizer is 'adam' or 'adamw'. | string |
| augmentations | Settings for using Augmentations. | string |
| beta1 | Value of 'beta1' when optimizer is 'adam' or 'adamw'. Must be a float in the range [0, 1]. | string |
| beta2 | Value of 'beta2' when optimizer is 'adam' or 'adamw'. Must be a float in the range [0, 1]. | string |
| distributed | Whether to use distributer training. | string |
| earlyStopping | Enable early stopping logic during training. | string |
| earlyStoppingDelay | Minimum number of epochs or validation evaluations to wait before primary metric improvementis tracked for early stopping. Must be a positive integer. | string |
| earlyStoppingPatience | Minimum number of epochs or validation evaluations with no primary metric improvement beforethe run is stopped. Must be a positive integer. | string |
| enableOnnxNormalization | Enable normalization when exporting ONNX model. | string |
| evaluationFrequency | Frequency to evaluate validation dataset to get metric scores. Must be a positive integer. | string |
| gradientAccumulationStep | Gradient accumulation means running a configured number of "GradAccumulationStep" steps withoutupdating the model weights while accumulating the gradients of those steps, and then usingthe accumulated gradients to compute the weight updates. Must be a positive integer. | string |
| layersToFreeze | Number of layers to freeze for the model. Must be a positive integer.For instance, passing 2 as value for 'seresnext' meansfreezing layer0 and layer1. For a full list of models supported and details on layer freeze, pleasesee:https://docs.microsoft.com/azure/machine-learning/how-to-auto-train-image-models. | string |
| learningRate | Initial learning rate. Must be a float in the range [0, 1]. | string |
| learningRateScheduler | Type of learning rate scheduler. Must be 'warmup_cosine' or 'step'. | string |
| modelName | Name of the model to use for training.For more information on the available models please visit the official documentation:https://docs.microsoft.com/azure/machine-learning/how-to-auto-train-image-models. | string |
| momentum | Value of momentum when optimizer is 'sgd'. Must be a float in the range [0, 1]. | string |
| nesterov | Enable nesterov when optimizer is 'sgd'. | string |
| numberOfEpochs | Number of training epochs. Must be a positive integer. | string |
| numberOfWorkers | Number of data loader workers. Must be a non-negative integer. | string |
| optimizer | Type of optimizer. Must be either 'sgd', 'adam', or 'adamw'. | string |
| randomSeed | Random seed to be used when using deterministic training. | string |
| stepLRGamma | Value of gamma when learning rate scheduler is 'step'. Must be a float in the range [0, 1]. | string |
| stepLRStepSize | Value of step size when learning rate scheduler is 'step'. Must be a positive integer. | string |
| trainingBatchSize | Training batch size. Must be a positive integer. | string |
| trainingCropSize | Image crop size that is input to the neural network for the training dataset. Must be a positive integer. | string |
| validationBatchSize | Validation batch size. Must be a positive integer. | string |
| validationCropSize | Image crop size that is input to the neural network for the validation dataset. Must be a positive integer. | string |
| validationResizeSize | Image size to which to resize before cropping for validation dataset. Must be a positive integer. | string |
| warmupCosineLRCycles | Value of cosine cycle when learning rate scheduler is 'warmup_cosine'. Must be a float in the range [0, 1]. | string |
| warmupCosineLRWarmupEpochs | Value of warmup epochs when learning rate scheduler is 'warmup_cosine'. Must be a positive integer. | string |
| weightDecay | Value of weight decay when optimizer is 'sgd', 'adam', or 'adamw'. Must be a float in the range[0, 1]. | string |
| weightedLoss | Weighted loss. The accepted values are 0 for no weighted loss.1 for weighted loss with sqrt.(class_weights). 2 for weighted loss with class_weights. Must be 0 or 1 or 2. | string |


### ImageSweepSettings

| Name | Description | Value |
|-|-|-|
| earlyTermination | Type of early termination policy. | EarlyTerminationPolicy |
| samplingAlgorithm | [Required] Type of the hyperparameter sampling algorithms. | 'Bayesian''Grid''Random' (required) |


### EarlyTerminationPolicy

| Name | Description | Value |
|-|-|-|
| delayEvaluation | Number of intervals by which to delay the first evaluation. | int |
| evaluationInterval | Interval (number of runs) between policy evaluations. | int |
| policyType | Set the object type | BanditMedianStoppingTruncationSelection(required) |


### BanditPolicy

| Name | Description | Value |
|-|-|-|
| policyType | [Required] Name of policy configuration | 'Bandit' (required) |
| slackAmount | Absolute distance allowed from the best performing run. | int |
| slackFactor | Ratio of the allowed distance from the best performing run. | int |


### MedianStoppingPolicy

| Name | Description | Value |
|-|-|-|
| policyType | [Required] Name of policy configuration | 'MedianStopping' (required) |


### TruncationSelectionPolicy

| Name | Description | Value |
|-|-|-|
| policyType | [Required] Name of policy configuration | 'TruncationSelection' (required) |
| truncationPercentage | The percentage of runs to cancel at each evaluation interval. | int |


### ImageClassificationMultilabel

| Name | Description | Value |
|-|-|-|
| taskType | [Required] Task type for AutoMLJob. | 'ImageClassificationMultilabel' (required) |
| limitSettings | [Required] Limit settings for the AutoML job. | ImageLimitSettings(required) |
| modelSettings | Settings used for training the model. | ImageModelSettingsClassification |
| primaryMetric | Primary metric to optimize for this task. | 'AUCWeighted''Accuracy''AveragePrecisionScoreWeighted''IOU''NormMacroRecall''PrecisionScoreWeighted' |
| searchSpace | Search space for sampling different combinations of models and their hyperparameters. | ImageModelDistributionSettingsClassification[] |
| sweepSettings | Model sweeping and hyperparameter sweeping related settings. | ImageSweepSettings |
| validationData | Validation data inputs. | MLTableJobInput |
| validationDataSize | The fraction of training dataset that needs to be set aside for validation purpose.Values between (0.0 , 1.0)Applied when validation dataset is not provided. | int |


### ImageInstanceSegmentation

| Name | Description | Value |
|-|-|-|
| taskType | [Required] Task type for AutoMLJob. | 'ImageInstanceSegmentation' (required) |
| limitSettings | [Required] Limit settings for the AutoML job. | ImageLimitSettings(required) |
| modelSettings | Settings used for training the model. | ImageModelSettingsObjectDetection |
| primaryMetric | Primary metric to optimize for this task. | 'MeanAveragePrecision' |
| searchSpace | Search space for sampling different combinations of models and their hyperparameters. | ImageModelDistributionSettingsObjectDetection[] |
| sweepSettings | Model sweeping and hyperparameter sweeping related settings. | ImageSweepSettings |
| validationData | Validation data inputs. | MLTableJobInput |
| validationDataSize | The fraction of training dataset that needs to be set aside for validation purpose.Values between (0.0 , 1.0)Applied when validation dataset is not provided. | int |


### ImageModelSettingsObjectDetection

| Name | Description | Value |
|-|-|-|
| advancedSettings | Settings for advanced scenarios. | string |
| amsGradient | Enable AMSGrad when optimizer is 'adam' or 'adamw'. | bool |
| augmentations | Settings for using Augmentations. | string |
| beta1 | Value of 'beta1' when optimizer is 'adam' or 'adamw'. Must be a float in the range [0, 1]. | int |
| beta2 | Value of 'beta2' when optimizer is 'adam' or 'adamw'. Must be a float in the range [0, 1]. | int |
| boxDetectionsPerImage | Maximum number of detections per image, for all classes. Must be a positive integer.Note: This settings is not supported for the 'yolov5' algorithm. | int |
| boxScoreThreshold | During inference, only return proposals with a classification score greater thanBoxScoreThreshold. Must be a float in the range[0, 1]. | int |
| checkpointFrequency | Frequency to store model checkpoints. Must be a positive integer. | int |
| checkpointModel | The pretrained checkpoint model for incremental training. | MLFlowModelJobInput |
| checkpointRunId | The id of a previous run that has a pretrained checkpoint for incremental training. | string |
| distributed | Whether to use distributed training. | bool |
| earlyStopping | Enable early stopping logic during training. | bool |
| earlyStoppingDelay | Minimum number of epochs or validation evaluations to wait before primary metric improvementis tracked for early stopping. Must be a positive integer. | int |
| earlyStoppingPatience | Minimum number of epochs or validation evaluations with no primary metric improvement beforethe run is stopped. Must be a positive integer. | int |
| enableOnnxNormalization | Enable normalization when exporting ONNX model. | bool |
| evaluationFrequency | Frequency to evaluate validation dataset to get metric scores. Must be a positive integer. | int |
| gradientAccumulationStep | Gradient accumulation means running a configured number of "GradAccumulationStep" steps withoutupdating the model weights while accumulating the gradients of those steps, and then usingthe accumulated gradients to compute the weight updates. Must be a positive integer. | int |
| imageSize | Image size for train and validation. Must be a positive integer.Note: The training run may get into CUDA OOM if the size is too big.Note: This settings is only supported for the 'yolov5' algorithm. | int |
| layersToFreeze | Number of layers to freeze for the model. Must be a positive integer.For instance, passing 2 as value for 'seresnext' meansfreezing layer0 and layer1. For a full list of models supported and details on layer freeze, pleasesee:https://docs.microsoft.com/azure/machine-learning/how-to-auto-train-image-models. | int |
| learningRate | Initial learning rate. Must be a float in the range [0, 1]. | int |
| learningRateScheduler | Type of learning rate scheduler. Must be 'warmup_cosine' or 'step'. | 'None''Step''WarmupCosine' |
| maxSize | Maximum size of the image to be rescaled before feeding it to the backbone.Must be a positive integer. Note: training run may get into CUDA OOM if the size is too big.Note: This settings is not supported for the 'yolov5' algorithm. | int |
| minSize | Minimum size of the image to be rescaled before feeding it to the backbone.Must be a positive integer. Note: training run may get into CUDA OOM if the size is too big.Note: This settings is not supported for the 'yolov5' algorithm. | int |
| modelName | Name of the model to use for training.For more information on the available models please visit the official documentation:https://docs.microsoft.com/azure/machine-learning/how-to-auto-train-image-models. | string |
| modelSize | Model size. Must be 'small', 'medium', 'large', or 'xlarge'.Note: training run may get into CUDA OOM if the model size is too big.Note: This settings is only supported for the 'yolov5' algorithm. | 'ExtraLarge''Large''Medium''None''Small' |
| momentum | Value of momentum when optimizer is 'sgd'. Must be a float in the range [0, 1]. | int |
| multiScale | Enable multi-scale image by varying image size by +/- 50%.Note: training run may get into CUDA OOM if no sufficient GPU memory.Note: This settings is only supported for the 'yolov5' algorithm. | bool |
| nesterov | Enable nesterov when optimizer is 'sgd'. | bool |
| nmsIouThreshold | IOU threshold used during inference in NMS post processing. Must be a float in the range [0, 1]. | int |
| numberOfEpochs | Number of training epochs. Must be a positive integer. | int |
| numberOfWorkers | Number of data loader workers. Must be a non-negative integer. | int |
| optimizer | Type of optimizer. | 'Adam''Adamw''None''Sgd' |
| randomSeed | Random seed to be used when using deterministic training. | int |
| stepLRGamma | Value of gamma when learning rate scheduler is 'step'. Must be a float in the range [0, 1]. | int |
| stepLRStepSize | Value of step size when learning rate scheduler is 'step'. Must be a positive integer. | int |
| tileGridSize | The grid size to use for tiling each image. Note: TileGridSize must not beNone to enable small object detection logic. A string containing two integers in mxn format.Note: This settings is not supported for the 'yolov5' algorithm. | string |
| tileOverlapRatio | Overlap ratio between adjacent tiles in each dimension. Must be float in the range [0, 1).Note: This settings is not supported for the 'yolov5' algorithm. | int |
| tilePredictionsNmsThreshold | The IOU threshold to use to perform NMS while merging predictions from tiles and image.Used in validation/ inference. Must be float in the range [0, 1].Note: This settings is not supported for the 'yolov5' algorithm. | int |
| trainingBatchSize | Training batch size. Must be a positive integer. | int |
| validationBatchSize | Validation batch size. Must be a positive integer. | int |
| validationIouThreshold | IOU threshold to use when computing validation metric. Must be float in the range [0, 1]. | int |
| validationMetricType | Metric computation method to use for validation metrics. | 'Coco''CocoVoc''None''Voc' |
| warmupCosineLRCycles | Value of cosine cycle when learning rate scheduler is 'warmup_cosine'. Must be a float in the range [0, 1]. | int |
| warmupCosineLRWarmupEpochs | Value of warmup epochs when learning rate scheduler is 'warmup_cosine'. Must be a positive integer. | int |
| weightDecay | Value of weight decay when optimizer is 'sgd', 'adam', or 'adamw'. Must be a float in the range[0, 1]. | int |


### ImageModelDistributionSettingsObjectDetection

| Name | Description | Value |
|-|-|-|
| amsGradient | Enable AMSGrad when optimizer is 'adam' or 'adamw'. | string |
| augmentations | Settings for using Augmentations. | string |
| beta1 | Value of 'beta1' when optimizer is 'adam' or 'adamw'. Must be a float in the range [0, 1]. | string |
| beta2 | Value of 'beta2' when optimizer is 'adam' or 'adamw'. Must be a float in the range [0, 1]. | string |
| boxDetectionsPerImage | Maximum number of detections per image, for all classes. Must be a positive integer.Note: This settings is not supported for the 'yolov5' algorithm. | string |
| boxScoreThreshold | During inference, only return proposals with a classification score greater thanBoxScoreThreshold. Must be a float in the range[0, 1]. | string |
| distributed | Whether to use distributer training. | string |
| earlyStopping | Enable early stopping logic during training. | string |
| earlyStoppingDelay | Minimum number of epochs or validation evaluations to wait before primary metric improvementis tracked for early stopping. Must be a positive integer. | string |
| earlyStoppingPatience | Minimum number of epochs or validation evaluations with no primary metric improvement beforethe run is stopped. Must be a positive integer. | string |
| enableOnnxNormalization | Enable normalization when exporting ONNX model. | string |
| evaluationFrequency | Frequency to evaluate validation dataset to get metric scores. Must be a positive integer. | string |
| gradientAccumulationStep | Gradient accumulation means running a configured number of "GradAccumulationStep" steps withoutupdating the model weights while accumulating the gradients of those steps, and then usingthe accumulated gradients to compute the weight updates. Must be a positive integer. | string |
| imageSize | Image size for train and validation. Must be a positive integer.Note: The training run may get into CUDA OOM if the size is too big.Note: This settings is only supported for the 'yolov5' algorithm. | string |
| layersToFreeze | Number of layers to freeze for the model. Must be a positive integer.For instance, passing 2 as value for 'seresnext' meansfreezing layer0 and layer1. For a full list of models supported and details on layer freeze, pleasesee:https://docs.microsoft.com/azure/machine-learning/how-to-auto-train-image-models. | string |
| learningRate | Initial learning rate. Must be a float in the range [0, 1]. | string |
| learningRateScheduler | Type of learning rate scheduler. Must be 'warmup_cosine' or 'step'. | string |
| maxSize | Maximum size of the image to be rescaled before feeding it to the backbone.Must be a positive integer. Note: training run may get into CUDA OOM if the size is too big.Note: This settings is not supported for the 'yolov5' algorithm. | string |
| minSize | Minimum size of the image to be rescaled before feeding it to the backbone.Must be a positive integer. Note: training run may get into CUDA OOM if the size is too big.Note: This settings is not supported for the 'yolov5' algorithm. | string |
| modelName | Name of the model to use for training.For more information on the available models please visit the official documentation:https://docs.microsoft.com/azure/machine-learning/how-to-auto-train-image-models. | string |
| modelSize | Model size. Must be 'small', 'medium', 'large', or 'xlarge'.Note: training run may get into CUDA OOM if the model size is too big.Note: This settings is only supported for the 'yolov5' algorithm. | string |
| momentum | Value of momentum when optimizer is 'sgd'. Must be a float in the range [0, 1]. | string |
| multiScale | Enable multi-scale image by varying image size by +/- 50%.Note: training run may get into CUDA OOM if no sufficient GPU memory.Note: This settings is only supported for the 'yolov5' algorithm. | string |
| nesterov | Enable nesterov when optimizer is 'sgd'. | string |
| nmsIouThreshold | IOU threshold used during inference in NMS post processing. Must be float in the range [0, 1]. | string |
| numberOfEpochs | Number of training epochs. Must be a positive integer. | string |
| numberOfWorkers | Number of data loader workers. Must be a non-negative integer. | string |
| optimizer | Type of optimizer. Must be either 'sgd', 'adam', or 'adamw'. | string |
| randomSeed | Random seed to be used when using deterministic training. | string |
| stepLRGamma | Value of gamma when learning rate scheduler is 'step'. Must be a float in the range [0, 1]. | string |
| stepLRStepSize | Value of step size when learning rate scheduler is 'step'. Must be a positive integer. | string |
| tileGridSize | The grid size to use for tiling each image. Note: TileGridSize must not beNone to enable small object detection logic. A string containing two integers in mxn format.Note: This settings is not supported for the 'yolov5' algorithm. | string |
| tileOverlapRatio | Overlap ratio between adjacent tiles in each dimension. Must be float in the range [0, 1).Note: This settings is not supported for the 'yolov5' algorithm. | string |
| tilePredictionsNmsThreshold | The IOU threshold to use to perform NMS while merging predictions from tiles and image.Used in validation/ inference. Must be float in the range [0, 1].Note: This settings is not supported for the 'yolov5' algorithm.NMS: Non-maximum suppression | string |
| trainingBatchSize | Training batch size. Must be a positive integer. | string |
| validationBatchSize | Validation batch size. Must be a positive integer. | string |
| validationIouThreshold | IOU threshold to use when computing validation metric. Must be float in the range [0, 1]. | string |
| validationMetricType | Metric computation method to use for validation metrics. Must be 'none', 'coco', 'voc', or 'coco_voc'. | string |
| warmupCosineLRCycles | Value of cosine cycle when learning rate scheduler is 'warmup_cosine'. Must be a float in the range [0, 1]. | string |
| warmupCosineLRWarmupEpochs | Value of warmup epochs when learning rate scheduler is 'warmup_cosine'. Must be a positive integer. | string |
| weightDecay | Value of weight decay when optimizer is 'sgd', 'adam', or 'adamw'. Must be a float in the range[0, 1]. | string |


### ImageObjectDetection

| Name | Description | Value |
|-|-|-|
| taskType | [Required] Task type for AutoMLJob. | 'ImageObjectDetection' (required) |
| limitSettings | [Required] Limit settings for the AutoML job. | ImageLimitSettings(required) |
| modelSettings | Settings used for training the model. | ImageModelSettingsObjectDetection |
| primaryMetric | Primary metric to optimize for this task. | 'MeanAveragePrecision' |
| searchSpace | Search space for sampling different combinations of models and their hyperparameters. | ImageModelDistributionSettingsObjectDetection[] |
| sweepSettings | Model sweeping and hyperparameter sweeping related settings. | ImageSweepSettings |
| validationData | Validation data inputs. | MLTableJobInput |
| validationDataSize | The fraction of training dataset that needs to be set aside for validation purpose.Values between (0.0 , 1.0)Applied when validation dataset is not provided. | int |


### Regression

| Name | Description | Value |
|-|-|-|
| taskType | [Required] Task type for AutoMLJob. | 'Regression' (required) |
| cvSplitColumnNames | Columns to use for CVSplit data. | string[] |
| featurizationSettings | Featurization inputs needed for AutoML job. | TableVerticalFeaturizationSettings |
| limitSettings | Execution constraints for AutoMLJob. | TableVerticalLimitSettings |
| nCrossValidations | Number of cross validation folds to be applied on training datasetwhen validation dataset is not provided. | NCrossValidations |
| primaryMetric | Primary metric for regression task. | 'NormalizedMeanAbsoluteError''NormalizedRootMeanSquaredError''R2Score''SpearmanCorrelation' |
| testData | Test data input. | MLTableJobInput |
| testDataSize | The fraction of test dataset that needs to be set aside for validation purpose.Values between (0.0 , 1.0)Applied when validation dataset is not provided. | int |
| trainingSettings | Inputs for training phase for an AutoML Job. | RegressionTrainingSettings |
| validationData | Validation data inputs. | MLTableJobInput |
| validationDataSize | The fraction of training dataset that needs to be set aside for validation purpose.Values between (0.0 , 1.0)Applied when validation dataset is not provided. | int |
| weightColumnName | The name of the sample weight column. Automated ML supports a weighted column as an input, causing rows in the data to be weighted up or down. | string |


### RegressionTrainingSettings

| Name | Description | Value |
|-|-|-|
| allowedTrainingAlgorithms | Allowed models for regression task. | String array containing any of:'DecisionTree''ElasticNet''ExtremeRandomTrees''GradientBoosting''KNN''LassoLars''LightGBM''RandomForest''SGD''XGBoostRegressor' |
| blockedTrainingAlgorithms | Blocked models for regression task. | String array containing any of:'DecisionTree''ElasticNet''ExtremeRandomTrees''GradientBoosting''KNN''LassoLars''LightGBM''RandomForest''SGD''XGBoostRegressor' |
| enableDnnTraining | Enable recommendation of DNN models. | bool |
| enableModelExplainability | Flag to turn on explainability on best model. | bool |
| enableOnnxCompatibleModels | Flag for enabling onnx compatible models. | bool |
| enableStackEnsemble | Enable stack ensemble run. | bool |
| enableVoteEnsemble | Enable voting ensemble run. | bool |
| ensembleModelDownloadTimeout | During VotingEnsemble and StackEnsemble model generation, multiple fitted models from the previous child runs are downloaded.Configure this parameter with a higher value than 300 secs, if more time is needed. | string |
| stackEnsembleSettings | Stack ensemble settings for stack ensemble run. | StackEnsembleSettings |


### TextClassification

| Name | Description | Value |
|-|-|-|
| taskType | [Required] Task type for AutoMLJob. | 'TextClassification' (required) |
| featurizationSettings | Featurization inputs needed for AutoML job. | NlpVerticalFeaturizationSettings |
| limitSettings | Execution constraints for AutoMLJob. | NlpVerticalLimitSettings |
| primaryMetric | Primary metric for Text-Classification task. | 'AUCWeighted''Accuracy''AveragePrecisionScoreWeighted''NormMacroRecall''PrecisionScoreWeighted' |
| validationData | Validation data inputs. | MLTableJobInput |


### NlpVerticalFeaturizationSettings

| Name | Description | Value |
|-|-|-|
| datasetLanguage | Dataset language, useful for the text data. | string |


### NlpVerticalLimitSettings

| Name | Description | Value |
|-|-|-|
| maxConcurrentTrials | Maximum Concurrent AutoML iterations. | int |
| maxTrials | Number of AutoML iterations. | int |
| timeout | AutoML job timeout. | string |


### TextClassificationMultilabel

| Name | Description | Value |
|-|-|-|
| taskType | [Required] Task type for AutoMLJob. | 'TextClassificationMultilabel' (required) |
| featurizationSettings | Featurization inputs needed for AutoML job. | NlpVerticalFeaturizationSettings |
| limitSettings | Execution constraints for AutoMLJob. | NlpVerticalLimitSettings |
| validationData | Validation data inputs. | MLTableJobInput |


### TextNer

| Name | Description | Value |
|-|-|-|
| taskType | [Required] Task type for AutoMLJob. | 'TextNER' (required) |
| featurizationSettings | Featurization inputs needed for AutoML job. | NlpVerticalFeaturizationSettings |
| limitSettings | Execution constraints for AutoMLJob. | NlpVerticalLimitSettings |
| validationData | Validation data inputs. | MLTableJobInput |


### CommandJob

| Name | Description | Value |
|-|-|-|
| jobType | [Required] Specifies the type of job. | 'Command' (required) |
| codeId | ARM resource ID of the code asset. | string |
| command | [Required] The command to execute on startup of the job. eg. "python train.py" | string (required)Constraints:Min length = 1Pattern =[a-zA-Z0-9_] |
| distribution | Distribution configuration of the job. If set, this should be one of Mpi, Tensorflow, PyTorch, or null. | DistributionConfiguration |
| environmentId | [Required] The ARM resource ID of the Environment specification for the job. | string (required)Constraints:Min length = 1Pattern =[a-zA-Z0-9_] |
| environmentVariables | Environment variables included in the job. | CommandJobEnvironmentVariables |
| inputs | Mapping of input data bindings used in the job. | CommandJobInputs |
| limits | Command Job limit. | CommandJobLimits |
| outputs | Mapping of output data bindings used in the job. | CommandJobOutputs |
| queueSettings | Queue settings for the job | QueueSettings |
| resources | Compute Resource configuration for the job. | JobResourceConfiguration |


### DistributionConfiguration

| Name | Description | Value |
|-|-|-|
| distributionType | Set the object type | MpiPyTorchTensorFlow(required) |


### Mpi

| Name | Description | Value |
|-|-|-|
| distributionType | [Required] Specifies the type of distribution framework. | 'Mpi' (required) |
| processCountPerInstance | Number of processes per MPI node. | int |


### PyTorch

| Name | Description | Value |
|-|-|-|
| distributionType | [Required] Specifies the type of distribution framework. | 'PyTorch' (required) |
| processCountPerInstance | Number of processes per node. | int |


### TensorFlow

| Name | Description | Value |
|-|-|-|
| distributionType | [Required] Specifies the type of distribution framework. | 'TensorFlow' (required) |
| parameterServerCount | Number of parameter server tasks. | int |
| workerCount | Number of workers. If not specified, will default to the instance count. | int |


### CommandJobEnvironmentVariables

| Name | Description | Value |
|-|-|-|
| {customized property} |  | string |


### CommandJobInputs

| Name | Description | Value |
|-|-|-|
| {customized property} |  | JobInput |


### JobInput

| Name | Description | Value |
|-|-|-|
| description | Description for the input. | string |
| jobInputType | Set the object type | custom_modelliteralmlflow_modelmltabletriton_modeluri_fileuri_folder(required) |


### CustomModelJobInput

| Name | Description | Value |
|-|-|-|
| jobInputType | [Required] Specifies the type of job. | 'custom_model' (required) |
| mode | Input Asset Delivery Mode. | 'Direct''Download''EvalDownload''EvalMount''ReadOnlyMount''ReadWriteMount' |
| uri | [Required] Input Asset URI. | string (required)Constraints:Min length = 1Pattern =[a-zA-Z0-9_] |


### LiteralJobInput

| Name | Description | Value |
|-|-|-|
| jobInputType | [Required] Specifies the type of job. | 'literal' (required) |
| value | [Required] Literal value for the input. | string (required)Constraints:Min length = 1Pattern =[a-zA-Z0-9_] |


### TritonModelJobInput

| Name | Description | Value |
|-|-|-|
| jobInputType | [Required] Specifies the type of job. | 'triton_model' (required) |
| mode | Input Asset Delivery Mode. | 'Direct''Download''EvalDownload''EvalMount''ReadOnlyMount''ReadWriteMount' |
| uri | [Required] Input Asset URI. | string (required)Constraints:Min length = 1Pattern =[a-zA-Z0-9_] |


### UriFileJobInput

| Name | Description | Value |
|-|-|-|
| jobInputType | [Required] Specifies the type of job. | 'uri_file' (required) |
| mode | Input Asset Delivery Mode. | 'Direct''Download''EvalDownload''EvalMount''ReadOnlyMount''ReadWriteMount' |
| uri | [Required] Input Asset URI. | string (required)Constraints:Min length = 1Pattern =[a-zA-Z0-9_] |


### UriFolderJobInput

| Name | Description | Value |
|-|-|-|
| jobInputType | [Required] Specifies the type of job. | 'uri_folder' (required) |
| mode | Input Asset Delivery Mode. | 'Direct''Download''EvalDownload''EvalMount''ReadOnlyMount''ReadWriteMount' |
| uri | [Required] Input Asset URI. | string (required)Constraints:Min length = 1Pattern =[a-zA-Z0-9_] |


### CommandJobLimits

| Name | Description | Value |
|-|-|-|
| jobLimitsType | [Required] JobLimit type. | 'Command''Sweep' (required) |
| timeout | The max run duration in ISO 8601 format, after which the job will be cancelled. Only supports duration with precision as low as Seconds. | string |


### CommandJobOutputs

| Name | Description | Value |
|-|-|-|
| {customized property} |  | JobOutput |


### PipelineJob

| Name | Description | Value |
|-|-|-|
| jobType | [Required] Specifies the type of job. | 'Pipeline' (required) |
| inputs | Inputs for the pipeline job. | PipelineJobInputs |
| jobs | Jobs construct the Pipeline Job. | PipelineJobJobs |
| outputs | Outputs for the pipeline job | PipelineJobOutputs |
| settings | Pipeline settings, for things like ContinueRunOnStepFailure etc. | For Bicep, you can use theany()function. |
| sourceJobId | ARM resource ID of source job. | string |


### PipelineJobInputs

| Name | Description | Value |
|-|-|-|
| {customized property} |  | JobInput |


### PipelineJobJobs

| Name | Description | Value |
|-|-|-|
| {customized property} |  | For Bicep, you can use theany()function. |


### PipelineJobOutputs

| Name | Description | Value |
|-|-|-|
| {customized property} |  | JobOutput |


### SweepJob

| Name | Description | Value |
|-|-|-|
| jobType | [Required] Specifies the type of job. | 'Sweep' (required) |
| earlyTermination | Early termination policies enable canceling poor-performing runs before they complete | EarlyTerminationPolicy |
| inputs | Mapping of input data bindings used in the job. | SweepJobInputs |
| limits | Sweep Job limit. | SweepJobLimits |
| objective | [Required] Optimization objective. | Objective(required) |
| outputs | Mapping of output data bindings used in the job. | SweepJobOutputs |
| queueSettings | Queue settings for the job | QueueSettings |
| samplingAlgorithm | [Required] The hyperparameter sampling algorithm | SamplingAlgorithm(required) |
| searchSpace | [Required] A dictionary containing each parameter and its distribution. The dictionary key is the name of the parameter | For Bicep, you can use theany()function.(required) |
| trial | [Required] Trial component definition. | TrialComponent(required) |


### SweepJobInputs

| Name | Description | Value |
|-|-|-|
| {customized property} |  | JobInput |


### SweepJobLimits

| Name | Description | Value |
|-|-|-|
| jobLimitsType | [Required] JobLimit type. | 'Command''Sweep' (required) |
| maxConcurrentTrials | Sweep Job max concurrent trials. | int |
| maxTotalTrials | Sweep Job max total trials. | int |
| timeout | The max run duration in ISO 8601 format, after which the job will be cancelled. Only supports duration with precision as low as Seconds. | string |
| trialTimeout | Sweep Job Trial timeout value. | string |


### Objective

| Name | Description | Value |
|-|-|-|
| goal | [Required] Defines supported metric goals for hyperparameter tuning | 'Maximize''Minimize' (required) |
| primaryMetric | [Required] Name of the metric to optimize. | string (required)Constraints:Min length = 1Pattern =[a-zA-Z0-9_] |


### SweepJobOutputs

| Name | Description | Value |
|-|-|-|
| {customized property} |  | JobOutput |


### SamplingAlgorithm

| Name | Description | Value |
|-|-|-|
| samplingAlgorithmType | Set the object type | BayesianGridRandom(required) |


### BayesianSamplingAlgorithm

| Name | Description | Value |
|-|-|-|
| samplingAlgorithmType | [Required] The algorithm used for generating hyperparameter values, along with configuration properties | 'Bayesian' (required) |


### GridSamplingAlgorithm

| Name | Description | Value |
|-|-|-|
| samplingAlgorithmType | [Required] The algorithm used for generating hyperparameter values, along with configuration properties | 'Grid' (required) |


### RandomSamplingAlgorithm

| Name | Description | Value |
|-|-|-|
| samplingAlgorithmType | [Required] The algorithm used for generating hyperparameter values, along with configuration properties | 'Random' (required) |
| rule | The specific type of random algorithm | 'Random''Sobol' |
| seed | An optional integer to use as the seed for random number generation | int |


### TrialComponent

| Name | Description | Value |
|-|-|-|
| codeId | ARM resource ID of the code asset. | string |
| command | [Required] The command to execute on startup of the job. eg. "python train.py" | string (required)Constraints:Min length = 1Pattern =[a-zA-Z0-9_] |
| distribution | Distribution configuration of the job. If set, this should be one of Mpi, Tensorflow, PyTorch, or null. | DistributionConfiguration |
| environmentId | [Required] The ARM resource ID of the Environment specification for the job. | string (required)Constraints:Min length = 1Pattern =[a-zA-Z0-9_] |
| environmentVariables | Environment variables included in the job. | TrialComponentEnvironmentVariables |
| resources | Compute Resource configuration for the job. | JobResourceConfiguration |


### TrialComponentEnvironmentVariables

| Name | Description | Value |
|-|-|-|
| {customized property} |  | string |
## Microsoft.MachineLearningServices/workspaces/labelingJobs@2023-08-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.MachineLearningServices/workspaces/labelingJobs@2023-08-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      componentId = "string"
      computeId = "string"
      dataConfiguration = {
        dataId = "string"
        incrementalDataRefresh = "string"
      }
      description = "string"
      displayName = "string"
      experimentName = "string"
      identity = {
        identityType = "string"
        // For remaining properties, see IdentityConfiguration objects
      }
      isArchived = bool
      jobInstructions = {
        uri = "string"
      }
      jobType = "string"
      labelCategories = {
        {customized property} = {
          classes = {
            {customized property} = {
              displayName = "string"
              subclasses = {
                {customized property} = {}
            }
          }
          displayName = "string"
          multiSelect = "string"
        }
        {customized property} = {
          classes = {
            {customized property} = {
              displayName = "string"
              subclasses = {
                {customized property} = {}
            }
          }
          displayName = "string"
          multiSelect = "string"
        }
      }
      labelingJobMediaProperties = {
        mediaType = "string"
        // For remaining properties, see LabelingJobMediaProperties objects
      }
      mlAssistConfiguration = {
        mlAssist = "string"
        // For remaining properties, see MLAssistConfiguration objects
      }
      notificationSetting = {
        emailOn = [
          "string"
        ]
        emails = [
          "string"
        ]
        webhooks = {
          {customized property} = {
            eventType = "string"
            webhookType = "string"
            // For remaining properties, see Webhook objects
          }
        }
      }
      properties = {
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
      }
      secretsConfiguration = {
        {customized property} = {
          uri = "string"
          workspaceSecretName = "string"
        }
        {customized property} = {
          uri = "string"
          workspaceSecretName = "string"
        }
      }
      services = {
        {customized property} = {
          endpoint = "string"
          jobServiceType = "string"
          nodes = {
            nodesValueType = "string"
            // For remaining properties, see Nodes objects
          }
          port = int
          properties = {
            {customized property} = "string"
          }
        }
        {customized property} = {
          endpoint = "string"
          jobServiceType = "string"
          nodes = {
            nodesValueType = "string"
            // For remaining properties, see Nodes objects
          }
          port = int
          properties = {
            {customized property} = "string"
          }
        }
      }
      tags = {
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
      }
    }
  })
}

```

### workspaces/labelingJobs

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:workspaces |
| properties | [Required] Additional attributes of the entity. | LabelingJobProperties(required) |


### LabelingJobProperties

| Name | Description | Value |
|-|-|-|
| componentId | ARM resource ID of the component resource. | string |
| computeId | ARM resource ID of the compute resource. | string |
| dataConfiguration | Configuration of data used in the job. | LabelingDataConfiguration |
| description | The asset description text. | string |
| displayName | Display name of job. | string |
| experimentName | The name of the experiment the job belongs to. If not set, the job is placed in the "Default" experiment. | string |
| identity | Identity configuration. If set, this should be one of AmlToken, ManagedIdentity, UserIdentity or null.Defaults to AmlToken if null. | IdentityConfiguration |
| isArchived | Is the asset archived? | bool |
| jobInstructions | Labeling instructions of the job. | LabelingJobInstructions |
| jobType | [Required] Specifies the type of job. | 'AutoML''Command''Labeling''Pipeline''Spark''Sweep' (required) |
| labelCategories | Label categories of the job. | LabelingJobLabelCategories |
| labelingJobMediaProperties | Media type specific properties in the job. | LabelingJobMediaProperties |
| mlAssistConfiguration | Configuration of MLAssist feature in the job. | MLAssistConfiguration |
| notificationSetting | Notification setting for the job | NotificationSetting |
| properties | The asset property dictionary. | ResourceBaseProperties |
| secretsConfiguration | Configuration for secrets to be made available during runtime. | JobBaseSecretsConfiguration |
| services | List of JobEndpoints.For local jobs, a job endpoint will have an endpoint value of FileStreamObject. | JobBaseServices |
| tags | Tag dictionary. Tags can be added, removed, and updated. | object |


### LabelingDataConfiguration

| Name | Description | Value |
|-|-|-|
| dataId | Resource Id of the data asset to perform labeling. | string |
| incrementalDataRefresh | Indicates whether to enable incremental data refresh. | 'Disabled''Enabled' |


### IdentityConfiguration

| Name | Description | Value |
|-|-|-|
| identityType | Set the object type | AMLTokenManagedUserIdentity(required) |


### AmlToken

| Name | Description | Value |
|-|-|-|
| identityType | [Required] Specifies the type of identity framework. | 'AMLToken' (required) |


### ManagedIdentity

| Name | Description | Value |
|-|-|-|
| identityType | [Required] Specifies the type of identity framework. | 'Managed' (required) |
| clientId | Specifies a user-assigned identity by client ID. For system-assigned, do not set this field. | stringConstraints:Min length = 36Max length = 36Pattern =^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$ |
| objectId | Specifies a user-assigned identity by object ID. For system-assigned, do not set this field. | stringConstraints:Min length = 36Max length = 36Pattern =^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$ |
| resourceId | Specifies a user-assigned identity by ARM resource ID. For system-assigned, do not set this field. | string |


### UserIdentity

| Name | Description | Value |
|-|-|-|
| identityType | [Required] Specifies the type of identity framework. | 'UserIdentity' (required) |


### LabelingJobInstructions

| Name | Description | Value |
|-|-|-|
| uri | The link to a page with detailed labeling instructions for labelers. | string |


### LabelingJobLabelCategories

| Name | Description | Value |
|-|-|-|
| {customized property} |  | LabelCategory |
| {customized property} |  | LabelCategory |


### LabelCategory

| Name | Description | Value |
|-|-|-|
| classes | Dictionary of label classes in this category. | LabelCategoryClasses |
| displayName | Display name of the label category. | string |
| multiSelect | Indicates whether it is allowed to select multiple classes in this category. | 'Disabled''Enabled' |


### LabelCategoryClasses

| Name | Description | Value |
|-|-|-|
| {customized property} |  | LabelClass |


### LabelClass

| Name | Description | Value |
|-|-|-|
| displayName | Display name of the label class. | string |
| subclasses | Dictionary of subclasses of the label class. | LabelClassSubclasses |


### LabelClassSubclasses

| Name | Description | Value |
|-|-|-|
| {customized property} |  | LabelClass |


### LabelingJobMediaProperties

| Name | Description | Value |
|-|-|-|
| mediaType | Set the object type | ImageText(required) |


### LabelingJobImageProperties

| Name | Description | Value |
|-|-|-|
| mediaType | [Required] Media type of the job. | 'Image' (required) |
| annotationType | Annotation type of image labeling job. | 'BoundingBox''Classification''InstanceSegmentation' |


### LabelingJobTextProperties

| Name | Description | Value |
|-|-|-|
| mediaType | [Required] Media type of the job. | 'Text' (required) |
| annotationType | Annotation type of text labeling job. | 'Classification''NamedEntityRecognition' |


### MLAssistConfiguration

| Name | Description | Value |
|-|-|-|
| mlAssist | Set the object type | DisabledEnabled(required) |


### MLAssistConfigurationDisabled

| Name | Description | Value |
|-|-|-|
| mlAssist | [Required] Indicates whether MLAssist feature is enabled. | 'Disabled' (required) |


### MLAssistConfigurationEnabled

| Name | Description | Value |
|-|-|-|
| mlAssist | [Required] Indicates whether MLAssist feature is enabled. | 'Enabled' (required) |
| inferencingComputeBinding | [Required] AML compute binding used in inferencing. | string (required)Constraints:Min length = 1Pattern =[a-zA-Z0-9_] |
| trainingComputeBinding | [Required] AML compute binding used in training. | string (required)Constraints:Min length = 1Pattern =[a-zA-Z0-9_] |


### NotificationSetting

| Name | Description | Value |
|-|-|-|
| emailOn | Send email notification to user on specified notification type | String array containing any of:'JobCancelled''JobCompleted''JobFailed' |
| emails | This is the email recipient list which has a limitation of 499 characters in total concat with comma separator | string[] |
| webhooks | Send webhook callback to a service. Key is a user-provided name for the webhook. | NotificationSettingWebhooks |


### NotificationSettingWebhooks

| Name | Description | Value |
|-|-|-|
| {customized property} |  | Webhook |


### Webhook

| Name | Description | Value |
|-|-|-|
| eventType | Send callback on a specified notification event | string |
| webhookType | Set the object type | AzureDevOps(required) |


### AzureDevOpsWebhook

| Name | Description | Value |
|-|-|-|
| webhookType | [Required] Specifies the type of service to send a callback | 'AzureDevOps' (required) |


### ResourceBaseProperties

| Name | Description | Value |
|-|-|-|
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |


### JobBaseSecretsConfiguration

| Name | Description | Value |
|-|-|-|
| {customized property} |  | SecretConfiguration |
| {customized property} |  | SecretConfiguration |


### SecretConfiguration

| Name | Description | Value |
|-|-|-|
| uri | Secret Uri.Sample Uri :https://myvault.vault.azure.net/secrets/mysecretname/secretversion | string |
| workspaceSecretName | Name of secret in workspace key vault. | string |


### JobBaseServices

| Name | Description | Value |
|-|-|-|
| {customized property} |  | JobService |
| {customized property} |  | JobService |


### JobService

| Name | Description | Value |
|-|-|-|
| endpoint | Url for endpoint. | string |
| jobServiceType | Endpoint type. | string |
| nodes | Nodes that user would like to start the service on.If Nodes is not set or set to null, the service will only be started on leader node. | Nodes |
| port | Port for endpoint set by user. | int |
| properties | Additional properties to set on the endpoint. | JobServiceProperties |


### Nodes

| Name | Description | Value |
|-|-|-|
| nodesValueType | Set the object type | All(required) |


### AllNodes

| Name | Description | Value |
|-|-|-|
| nodesValueType | [Required] Type of the Nodes value | 'All' (required) |


### JobServiceProperties

| Name | Description | Value |
|-|-|-|
| {customized property} |  | string |
## Microsoft.MachineLearningServices/workspaces/linkedServices@2020-09-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.MachineLearningServices/workspaces/linkedServices@2020-09-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  identity {
    type = "string"
    identity_ids = []
  }
  body = jsonencode({
    properties = {
      createdTime = "string"
      linkedServiceResourceId = "string"
      linkType = "Synapse"
      modifiedTime = "string"
    }
  })
}

```

### workspaces/linkedServices

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | location of the linked service. | string |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:workspaces |
| identity | Identity for the resource. | Identity |
| properties | LinkedService specific properties. | LinkedServiceProps |


### Identity

| Name | Description | Value |
|-|-|-|
| type | The identity type. | 'None''SystemAssigned''SystemAssigned,UserAssigned''UserAssigned' |
| userAssignedIdentities | The user assigned identities associated with the resource. | UserAssignedIdentities |


### UserAssignedIdentities

| Name | Description | Value |
|-|-|-|
| {customized property} |  | UserAssignedIdentity |


### LinkedServiceProps

| Name | Description | Value |
|-|-|-|
| createdTime | The creation time of the linked service. | string |
| linkedServiceResourceId | ResourceId of the link target of the linked service. | string (required) |
| linkType | Type of the link target. | 'Synapse' |
| modifiedTime | The last modified time of the linked service. | string |
## Microsoft.MachineLearningServices/workspaces/linkedWorkspaces@2020-05-15-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.MachineLearningServices/workspaces/linkedWorkspaces@2020-05-15-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      linkedWorkspaceResourceId = "string"
      userAssignedIdentityResourceId = "string"
    }
  })
}

```

### workspaces/linkedWorkspaces

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:workspaces |
| properties | LinkedWorkspace specific properties. | LinkedWorkspaceProps |


### LinkedWorkspaceProps

| Name | Description | Value |
|-|-|-|
| linkedWorkspaceResourceId | ResourceId of the link target of the linked workspace. | string |
| userAssignedIdentityResourceId | ResourceId of the user assigned identity for the linked workspace. | string |
## Microsoft.MachineLearningServices/workspaces/models@2023-10-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.MachineLearningServices/workspaces/models@2023-10-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      description = "string"
      isArchived = bool
      properties = {
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
      }
      tags = {
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
      }
    }
  })
}

```

### workspaces/models

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:workspaces |
| properties | [Required] Additional attributes of the entity. | ModelContainerProperties(required) |


### ModelContainerProperties

| Name | Description | Value |
|-|-|-|
| description | The asset description text. | string |
| isArchived | Is the asset archived? | bool |
| properties | The asset property dictionary. | ResourceBaseProperties |
| tags | Tag dictionary. Tags can be added, removed, and updated. | object |


### ResourceBaseProperties

| Name | Description | Value |
|-|-|-|
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
## Microsoft.MachineLearningServices/workspaces/models/versions@2023-10-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.MachineLearningServices/workspaces/models/versions@2023-10-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      description = "string"
      flavors = {
        {customized property} = {
          data = {
          {customized property} = "string"
        }
      }
      isAnonymous = bool
      isArchived = bool
      jobName = "string"
      modelType = "string"
      modelUri = "string"
      properties = {
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
      }
      stage = "string"
      tags = {
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
      }
    }
  })
}

```

### workspaces/models/versions

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:models |
| properties | [Required] Additional attributes of the entity. | ModelVersionProperties(required) |


### ModelVersionProperties

| Name | Description | Value |
|-|-|-|
| description | The asset description text. | string |
| flavors | Mapping of model flavors to their properties. | ModelVersionFlavors |
| isAnonymous | If the name version are system generated (anonymous registration). | bool |
| isArchived | Is the asset archived? | bool |
| jobName | Name of the training job which produced this model | string |
| modelType | The storage format for this entity. Used for NCD. | string |
| modelUri | The URI path to the model contents. | string |
| properties | The asset property dictionary. | ResourceBaseProperties |
| stage | Stage in the model lifecycle assigned to this model | string |
| tags | Tag dictionary. Tags can be added, removed, and updated. | object |


### ModelVersionFlavors

| Name | Description | Value |
|-|-|-|
| {customized property} |  | FlavorData |


### FlavorData

| Name | Description | Value |
|-|-|-|
| data | Model flavor-specific data. | FlavorData |
| {customized property} |  | string |


### ResourceBaseProperties

| Name | Description | Value |
|-|-|-|
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
## Microsoft.MachineLearningServices/workspaces/onlineEndpoints@2023-10-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.MachineLearningServices/workspaces/onlineEndpoints@2023-10-01"
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
      authMode = "string"
      compute = "string"
      description = "string"
      keys = {
        primaryKey = "string"
        secondaryKey = "string"
        primaryKey = "string"
        secondaryKey = "string"
        primaryKey = "string"
        secondaryKey = "string"
      }
      mirrorTraffic = {
        {customized property} = int
      }
      properties = {
        {customized property} = "string"
        {customized property} = "string"
      }
      publicNetworkAccess = "string"
      traffic = {
        {customized property} = int
      }
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

### workspaces/onlineEndpoints

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| sku | Sku details required for ARM contract for Autoscaling. | Sku |
| kind | Metadata used by portal/tooling/etc to render different UX experiences for resources of the same type. | string |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:workspaces |
| identity | Managed service identity (system assigned and/or user assigned identities) | ManagedServiceIdentity |
| properties | [Required] Additional attributes of the entity. | OnlineEndpointProperties(required) |


### ManagedServiceIdentity

| Name | Description | Value |
|-|-|-|
| type | Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed). | 'None''SystemAssigned''SystemAssigned,UserAssigned''UserAssigned' (required) |
| userAssignedIdentities | The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests. | UserAssignedIdentities |


### UserAssignedIdentities

| Name | Description | Value |
|-|-|-|
| {customized property} |  | UserAssignedIdentity |


### OnlineEndpointProperties

| Name | Description | Value |
|-|-|-|
| authMode | [Required] Use 'Key' for key based authentication and 'AMLToken' for Azure Machine Learning token-based authentication. 'Key' doesn't expire but 'AMLToken' does. | 'AADToken''AMLToken''Key' (required) |
| compute | ARM resource ID of the compute if it exists.optional | string |
| description | Description of the inference endpoint. | string |
| keys | EndpointAuthKeys to set initially on an Endpoint.This property will always be returned as null. AuthKey values must be retrieved using the ListKeys API. | EndpointAuthKeys |
| mirrorTraffic | Percentage of traffic to be mirrored to each deployment without using returned scoring. Traffic values need to sum to utmost 50. | OnlineEndpointMirrorTraffic |
| properties | Property dictionary. Properties can be added, but not removed or altered. | EndpointPropertiesBaseProperties |
| publicNetworkAccess | Set to "Enabled" for endpoints that should allow public access when Private Link is enabled. | 'Disabled''Enabled' |
| traffic | Percentage of traffic from endpoint to divert to each deployment. Traffic values need to sum to 100. | OnlineEndpointTraffic |


### EndpointAuthKeys

| Name | Description | Value |
|-|-|-|
| primaryKey | The primary key. | string |
| secondaryKey | The secondary key. | string |
| primaryKey | The primary key. | string |
| secondaryKey | The secondary key. | string |
| primaryKey | The primary key. | string |
| secondaryKey | The secondary key. | string |


### OnlineEndpointMirrorTraffic

| Name | Description | Value |
|-|-|-|
| {customized property} |  | int |


### EndpointPropertiesBaseProperties

| Name | Description | Value |
|-|-|-|
| {customized property} |  | string |
| {customized property} |  | string |


### OnlineEndpointTraffic

| Name | Description | Value |
|-|-|-|
| {customized property} |  | int |


### Sku

| Name | Description | Value |
|-|-|-|
| capacity | If the SKU supports scale out/in then the capacity integer should be included. If scale out/in is not possible for the resource this may be omitted. | int |
| family | If the service has different generations of hardware, for the same SKU, then that can be captured here. | string |
| name | The name of the SKU. Ex - P3. It is typically a letter+number code | string (required) |
| size | The SKU size. When the name field is the combination of tier and some other value, this would be the standalone code. | string |
| tier | This field is required to be implemented by the Resource Provider if the service has more than one tier, but is not required on a PUT. | 'Basic''Free''Premium''Standard' |
## Microsoft.MachineLearningServices/workspaces/onlineEndpoints/deployments@2023-10-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.MachineLearningServices/workspaces/onlineEndpoints/deployments@2023-10-01"
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
      appInsightsEnabled = bool
      codeConfiguration = {
        codeId = "string"
        scoringScript = "string"
      }
      description = "string"
      egressPublicNetworkAccess = "string"
      environmentId = "string"
      environmentVariables = {
        {customized property} = "string"
        {customized property} = "string"
      }
      instanceType = "string"
      livenessProbe = {
        failureThreshold = int
        initialDelay = "string"
        period = "string"
        successThreshold = int
        timeout = "string"
      }
      model = "string"
      modelMountPath = "string"
      properties = {
        {customized property} = "string"
        {customized property} = "string"
      }
      readinessProbe = {
        failureThreshold = int
        initialDelay = "string"
        period = "string"
        successThreshold = int
        timeout = "string"
      }
      requestSettings = {
        maxConcurrentRequestsPerInstance = int
        maxQueueWait = "string"
        requestTimeout = "string"
      }
      scaleSettings = {
        scaleType = "string"
        // For remaining properties, see OnlineScaleSettings objects
      }
      endpointComputeType = "string"
      // For remaining properties, see OnlineDeploymentProperties objects
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

### workspaces/onlineEndpoints/deployments

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| sku | Sku details required for ARM contract for Autoscaling. | Sku |
| kind | Metadata used by portal/tooling/etc to render different UX experiences for resources of the same type. | string |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:onlineEndpoints |
| identity | Managed service identity (system assigned and/or user assigned identities) | ManagedServiceIdentity |
| properties | [Required] Additional attributes of the entity. | OnlineDeploymentProperties(required) |


### ManagedServiceIdentity

| Name | Description | Value |
|-|-|-|
| type | Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed). | 'None''SystemAssigned''SystemAssigned,UserAssigned''UserAssigned' (required) |
| userAssignedIdentities | The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests. | UserAssignedIdentities |


### UserAssignedIdentities

| Name | Description | Value |
|-|-|-|
| {customized property} |  | UserAssignedIdentity |


### OnlineDeploymentProperties

| Name | Description | Value |
|-|-|-|
| appInsightsEnabled | If true, enables Application Insights logging. | bool |
| codeConfiguration | Code configuration for the endpoint deployment. | CodeConfiguration |
| description | Description of the endpoint deployment. | string |
| egressPublicNetworkAccess | If Enabled, allow egress public network access. If Disabled, this will create secure egress. Default: Enabled. | 'Disabled''Enabled' |
| environmentId | ARM resource ID or AssetId of the environment specification for the endpoint deployment. | string |
| environmentVariables | Environment variables configuration for the deployment. | EndpointDeploymentPropertiesBaseEnvironmentVariables |
| instanceType | Compute instance type. | string |
| livenessProbe | Liveness probe monitors the health of the container regularly. | ProbeSettings |
| model | The URI path to the model. | string |
| modelMountPath | The path to mount the model in custom container. | string |
| properties | Property dictionary. Properties can be added, but not removed or altered. | EndpointDeploymentPropertiesBaseProperties |
| readinessProbe | Readiness probe validates if the container is ready to serve traffic. The properties and defaults are the same as liveness probe. | ProbeSettings |
| requestSettings | Request settings for the deployment. | OnlineRequestSettings |
| scaleSettings | Scale settings for the deployment.If it is null or not provided,it defaults to TargetUtilizationScaleSettings for KubernetesOnlineDeploymentand to DefaultScaleSettings for ManagedOnlineDeployment. | OnlineScaleSettings |
| endpointComputeType | Set the object type | KubernetesManaged(required) |


### CodeConfiguration

| Name | Description | Value |
|-|-|-|
| codeId | ARM resource ID of the code asset. | string |
| scoringScript | [Required] The script to execute on startup. eg. "score.py" | string (required)Constraints:Min length = 1Pattern =[a-zA-Z0-9_] |


### EndpointDeploymentPropertiesBaseEnvironmentVariables

| Name | Description | Value |
|-|-|-|
| {customized property} |  | string |
| {customized property} |  | string |


### ProbeSettings

| Name | Description | Value |
|-|-|-|
| failureThreshold | The number of failures to allow before returning an unhealthy status. | int |
| initialDelay | The delay before the first probe in ISO 8601 format. | string |
| period | The length of time between probes in ISO 8601 format. | string |
| successThreshold | The number of successful probes before returning a healthy status. | int |
| timeout | The probe timeout in ISO 8601 format. | string |


### EndpointDeploymentPropertiesBaseProperties

| Name | Description | Value |
|-|-|-|
| {customized property} |  | string |
| {customized property} |  | string |


### OnlineRequestSettings

| Name | Description | Value |
|-|-|-|
| maxConcurrentRequestsPerInstance | The number of maximum concurrent requests per node allowed per deployment. Defaults to 1. | int |
| maxQueueWait | The maximum amount of time a request will stay in the queue in ISO 8601 format.Defaults to 500ms. | string |
| requestTimeout | The scoring timeout in ISO 8601 format.Defaults to 5000ms. | string |


### OnlineScaleSettings

| Name | Description | Value |
|-|-|-|
| scaleType | Set the object type | DefaultTargetUtilization(required) |


### DefaultScaleSettings

| Name | Description | Value |
|-|-|-|
| scaleType | [Required] Type of deployment scaling algorithm | 'Default' (required) |


### TargetUtilizationScaleSettings

| Name | Description | Value |
|-|-|-|
| scaleType | [Required] Type of deployment scaling algorithm | 'TargetUtilization' (required) |
| maxInstances | The maximum number of instances that the deployment can scale to. The quota will be reserved for max_instances. | int |
| minInstances | The minimum number of instances to always be present. | int |
| pollingInterval | The polling interval in ISO 8691 format. Only supports duration with precision as low as Seconds. | string |
| targetUtilizationPercentage | Target CPU usage for the autoscaler. | int |


### KubernetesOnlineDeployment

| Name | Description | Value |
|-|-|-|
| endpointComputeType | [Required] The compute type of the endpoint. | 'Kubernetes' (required) |
| containerResourceRequirements | The resource requirements for the container (cpu and memory). | ContainerResourceRequirements |


### ContainerResourceRequirements

| Name | Description | Value |
|-|-|-|
| containerResourceLimits | Container resource limit info: | ContainerResourceSettings |
| containerResourceRequests | Container resource request info: | ContainerResourceSettings |


### ContainerResourceSettings

| Name | Description | Value |
|-|-|-|
| cpu | Number of vCPUs request/limit for container. More info:https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/ | string |
| gpu | Number of Nvidia GPU cards request/limit for container. More info:https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/ | string |
| memory | Memory size request/limit for container. More info:https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/ | string |


### ManagedOnlineDeployment

| Name | Description | Value |
|-|-|-|
| endpointComputeType | [Required] The compute type of the endpoint. | 'Managed' (required) |


### Sku

| Name | Description | Value |
|-|-|-|
| capacity | If the SKU supports scale out/in then the capacity integer should be included. If scale out/in is not possible for the resource this may be omitted. | int |
| family | If the service has different generations of hardware, for the same SKU, then that can be captured here. | string |
| name | The name of the SKU. Ex - P3. It is typically a letter+number code | string (required) |
| size | The SKU size. When the name field is the combination of tier and some other value, this would be the standalone code. | string |
| tier | This field is required to be implemented by the Resource Provider if the service has more than one tier, but is not required on a PUT. | 'Basic''Free''Premium''Standard' |
## Microsoft.MachineLearningServices/workspaces/outboundRules@2023-10-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.MachineLearningServices/workspaces/outboundRules@2023-10-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      category = "string"
      status = "string"
      type = "string"
      // For remaining properties, see OutboundRule objects
    }
  })
}

```

### workspaces/outboundRules

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:workspaces |
| properties | Outbound Rule for the managed network of a machine learning workspace. | OutboundRule(required) |


### OutboundRule

| Name | Description | Value |
|-|-|-|
| category | Category of a managed network Outbound Rule of a machine learning workspace. | 'Recommended''Required''UserDefined' |
| status | Type of a managed network Outbound Rule of a machine learning workspace. | 'Active''Inactive' |
| type | Set the object type | FQDNPrivateEndpointServiceTag(required) |


### FqdnOutboundRule

| Name | Description | Value |
|-|-|-|
| type | Type of a managed network Outbound Rule of a machine learning workspace. | 'FQDN' (required) |
| destination |  | string |


### PrivateEndpointOutboundRule

| Name | Description | Value |
|-|-|-|
| type | Type of a managed network Outbound Rule of a machine learning workspace. | 'PrivateEndpoint' (required) |
| destination | Private Endpoint destination for a Private Endpoint Outbound Rule for the managed network of a machine learning workspace. | PrivateEndpointDestination |


### PrivateEndpointDestination

| Name | Description | Value |
|-|-|-|
| serviceResourceId |  | string |
| sparkEnabled |  | bool |
| sparkStatus | Type of a managed network Outbound Rule of a machine learning workspace. | 'Active''Inactive' |
| subresourceTarget |  | string |


### ServiceTagOutboundRule

| Name | Description | Value |
|-|-|-|
| type | Type of a managed network Outbound Rule of a machine learning workspace. | 'ServiceTag' (required) |
| destination | Service Tag destination for a Service Tag Outbound Rule for the managed network of a machine learning workspace. | ServiceTagDestination |


### ServiceTagDestination

| Name | Description | Value |
|-|-|-|
| action | The action enum for networking rule. | 'Allow''Deny' |
| portRanges |  | string |
| protocol |  | string |
| serviceTag |  | string |
## Microsoft.MachineLearningServices/workspaces/privateEndpointConnections@2023-10-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.MachineLearningServices/workspaces/privateEndpointConnections@2023-10-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
    {customized property} = "string"
    {customized property} = "string"
  identity {
    type = "string"
    identity_ids = []
  }
  body = jsonencode({
    properties = {
      privateEndpoint = {}
      privateLinkServiceConnectionState = {
        actionsRequired = "string"
        description = "string"
        status = "string"
      }
    }
    sku = {
      capacity = int
      family = "string"
      name = "string"
      size = "string"
      tier = "string"
    }
  })
}

```

### workspaces/privateEndpointConnections

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | Specifies the location of the resource. | string |
| tags | Contains resource tags defined as key/value pairs. | Dictionary of tag names and values. SeeTags in templates |
| sku | The sku of the workspace. | Sku |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:workspaces |
| identity | The identity of the resource. | ManagedServiceIdentity |
| properties | Resource properties. | PrivateEndpointConnectionProperties |


### ManagedServiceIdentity

| Name | Description | Value |
|-|-|-|
| type | Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed). | 'None''SystemAssigned''SystemAssigned,UserAssigned''UserAssigned' (required) |
| userAssignedIdentities | The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests. | UserAssignedIdentities |


### UserAssignedIdentities

| Name | Description | Value |
|-|-|-|
| {customized property} |  | UserAssignedIdentity |


### PrivateEndpointConnectionProperties

| Name | Description | Value |
|-|-|-|
| privateEndpoint | The resource of private end point. | PrivateEndpoint |
| privateLinkServiceConnectionState | A collection of information about the state of the connection between service consumer and provider. | PrivateLinkServiceConnectionState(required) |


### PrivateLinkServiceConnectionState

| Name | Description | Value |
|-|-|-|
| actionsRequired | A message indicating if changes on the service provider require any updates on the consumer. | string |
| description | The reason for approval/rejection of the connection. | string |
| status | Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service. | 'Approved''Disconnected''Pending''Rejected''Timeout' |


### Sku

| Name | Description | Value |
|-|-|-|
| capacity | If the SKU supports scale out/in then the capacity integer should be included. If scale out/in is not possible for the resource this may be omitted. | int |
| family | If the service has different generations of hardware, for the same SKU, then that can be captured here. | string |
| name | The name of the SKU. Ex - P3. It is typically a letter+number code | string (required) |
| size | The SKU size. When the name field is the combination of tier and some other value, this would be the standalone code. | string |
| tier | This field is required to be implemented by the Resource Provider if the service has more than one tier, but is not required on a PUT. | 'Basic''Free''Premium''Standard' |
## Microsoft.MachineLearningServices/workspaces/schedules@2023-10-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.MachineLearningServices/workspaces/schedules@2023-10-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      action = {
        actionType = "string"
        // For remaining properties, see ScheduleActionBase objects
      }
      description = "string"
      displayName = "string"
      isEnabled = bool
      properties = {
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
      }
      tags = {
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
      }
      trigger = {
        endTime = "string"
        startTime = "string"
        timeZone = "string"
        triggerType = "string"
        // For remaining properties, see TriggerBase objects
      }
    }
  })
}

```

### workspaces/schedules

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:workspaces |
| properties | [Required] Additional attributes of the entity. | ScheduleProperties(required) |


### ScheduleProperties

| Name | Description | Value |
|-|-|-|
| action | [Required] Specifies the action of the schedule | ScheduleActionBase(required) |
| description | The asset description text. | string |
| displayName | Display name of schedule. | string |
| isEnabled | Is the schedule enabled? | bool |
| properties | The asset property dictionary. | ResourceBaseProperties |
| tags | Tag dictionary. Tags can be added, removed, and updated. | object |
| trigger | [Required] Specifies the trigger details | TriggerBase(required) |


### ScheduleActionBase

| Name | Description | Value |
|-|-|-|
| actionType | Set the object type | CreateJobCreateMonitorInvokeBatchEndpoint(required) |


### JobScheduleAction

| Name | Description | Value |
|-|-|-|
| actionType | [Required] Specifies the action type of the schedule | 'CreateJob' (required) |
| jobDefinition | [Required] Defines Schedule action definition details. | JobBaseProperties(required) |


### JobBaseProperties

| Name | Description | Value |
|-|-|-|
| componentId | ARM resource ID of the component resource. | string |
| computeId | ARM resource ID of the compute resource. | string |
| description | The asset description text. | string |
| displayName | Display name of job. | string |
| experimentName | The name of the experiment the job belongs to. If not set, the job is placed in the "Default" experiment. | string |
| identity | Identity configuration. If set, this should be one of AmlToken, ManagedIdentity, UserIdentity or null.Defaults to AmlToken if null. | IdentityConfiguration |
| isArchived | Is the asset archived? | bool |
| properties | The asset property dictionary. | ResourceBaseProperties |
| services | List of JobEndpoints.For local jobs, a job endpoint will have an endpoint value of FileStreamObject. | JobBaseServices |
| tags | Tag dictionary. Tags can be added, removed, and updated. | object |
| jobType | Set the object type | AutoMLCommandPipelineSweep(required) |


### IdentityConfiguration

| Name | Description | Value |
|-|-|-|
| identityType | Set the object type | AMLTokenManagedUserIdentity(required) |


### AmlToken

| Name | Description | Value |
|-|-|-|
| identityType | [Required] Specifies the type of identity framework. | 'AMLToken' (required) |


### ManagedIdentity

| Name | Description | Value |
|-|-|-|
| identityType | [Required] Specifies the type of identity framework. | 'Managed' (required) |
| clientId | Specifies a user-assigned identity by client ID. For system-assigned, do not set this field. | stringConstraints:Min length = 36Max length = 36Pattern =^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$ |
| objectId | Specifies a user-assigned identity by object ID. For system-assigned, do not set this field. | stringConstraints:Min length = 36Max length = 36Pattern =^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$ |
| resourceId | Specifies a user-assigned identity by ARM resource ID. For system-assigned, do not set this field. | string |


### UserIdentity

| Name | Description | Value |
|-|-|-|
| identityType | [Required] Specifies the type of identity framework. | 'UserIdentity' (required) |


### ResourceBaseProperties

| Name | Description | Value |
|-|-|-|
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |


### JobBaseServices

| Name | Description | Value |
|-|-|-|
| {customized property} |  | JobService |


### JobService

| Name | Description | Value |
|-|-|-|
| endpoint | Url for endpoint. | string |
| jobServiceType | Endpoint type. | string |
| nodes | Nodes that user would like to start the service on.If Nodes is not set or set to null, the service will only be started on leader node. | Nodes |
| port | Port for endpoint. | int |
| properties | Additional properties to set on the endpoint. | JobServiceProperties |


### Nodes

| Name | Description | Value |
|-|-|-|
| nodesValueType | Set the object type | All(required) |


### AllNodes

| Name | Description | Value |
|-|-|-|
| nodesValueType | [Required] Type of the Nodes value | 'All' (required) |


### JobServiceProperties

| Name | Description | Value |
|-|-|-|
| {customized property} |  | string |


### AutoMLJob

| Name | Description | Value |
|-|-|-|
| jobType | [Required] Specifies the type of job. | 'AutoML' (required) |
| environmentId | The ARM resource ID of the Environment specification for the job.This is optional value to provide, if not provided, AutoML will default this to Production AutoML curated environment version when running the job. | string |
| environmentVariables | Environment variables included in the job. | AutoMLJobEnvironmentVariables |
| outputs | Mapping of output data bindings used in the job. | AutoMLJobOutputs |
| queueSettings | Queue settings for the job | QueueSettings |
| resources | Compute Resource configuration for the job. | JobResourceConfiguration |
| taskDetails | [Required] This represents scenario which can be one of Tables/NLP/Image | AutoMLVertical(required) |


### AutoMLJobEnvironmentVariables

| Name | Description | Value |
|-|-|-|
| {customized property} |  | string |


### AutoMLJobOutputs

| Name | Description | Value |
|-|-|-|
| {customized property} |  | JobOutput |


### JobOutput

| Name | Description | Value |
|-|-|-|
| description | Description for the output. | string |
| jobOutputType | Set the object type | custom_modelmlflow_modelmltabletriton_modeluri_fileuri_folder(required) |


### CustomModelJobOutput

| Name | Description | Value |
|-|-|-|
| jobOutputType | [Required] Specifies the type of job. | 'custom_model' (required) |
| mode | Output Asset Delivery Mode. | 'ReadWriteMount''Upload' |
| uri | Output Asset URI. | string |


### MLFlowModelJobOutput

| Name | Description | Value |
|-|-|-|
| jobOutputType | [Required] Specifies the type of job. | 'mlflow_model' (required) |
| mode | Output Asset Delivery Mode. | 'ReadWriteMount''Upload' |
| uri | Output Asset URI. | string |


### MLTableJobOutput

| Name | Description | Value |
|-|-|-|
| jobOutputType | [Required] Specifies the type of job. | 'mltable' (required) |
| mode | Output Asset Delivery Mode. | 'ReadWriteMount''Upload' |
| uri | Output Asset URI. | string |


### TritonModelJobOutput

| Name | Description | Value |
|-|-|-|
| jobOutputType | [Required] Specifies the type of job. | 'triton_model' (required) |
| mode | Output Asset Delivery Mode. | 'ReadWriteMount''Upload' |
| uri | Output Asset URI. | string |


### UriFileJobOutput

| Name | Description | Value |
|-|-|-|
| jobOutputType | [Required] Specifies the type of job. | 'uri_file' (required) |
| mode | Output Asset Delivery Mode. | 'ReadWriteMount''Upload' |
| uri | Output Asset URI. | string |


### UriFolderJobOutput

| Name | Description | Value |
|-|-|-|
| jobOutputType | [Required] Specifies the type of job. | 'uri_folder' (required) |
| mode | Output Asset Delivery Mode. | 'ReadWriteMount''Upload' |
| uri | Output Asset URI. | string |


### QueueSettings

| Name | Description | Value |
|-|-|-|
| jobTier | Controls the compute job tier | 'Basic''Null''Premium''Spot''Standard' |


### JobResourceConfiguration

| Name | Description | Value |
|-|-|-|
| dockerArgs | Extra arguments to pass to the Docker run command. This would override any parameters that have already been set by the system, or in this section. This parameter is only supported for Azure ML compute types. | string |
| instanceCount | Optional number of instances or nodes used by the compute target. | int |
| instanceType | Optional type of VM used as supported by the compute target. | string |
| properties | Additional properties bag. | ResourceConfigurationProperties |
| shmSize | Size of the docker container's shared memory block. This should be in the format of (number)(unit) where number as to be greater than 0 and the unit can be one of b(bytes), k(kilobytes), m(megabytes), or g(gigabytes). | stringConstraints:Pattern =\d+[bBkKmMgG] |


### ResourceConfigurationProperties

| Name | Description | Value |
|-|-|-|
| {customized property} |  | For Bicep, you can use theany()function. |
| {customized property} |  | For Bicep, you can use theany()function. |


### AutoMLVertical

| Name | Description | Value |
|-|-|-|
| logVerbosity | Log verbosity for the job. | 'Critical''Debug''Error''Info''NotSet''Warning' |
| targetColumnName | Target column name: This is prediction values column.Also known as label column name in context of classification tasks. | string |
| trainingData | [Required] Training data input. | MLTableJobInput(required) |
| taskType | Set the object type | ClassificationForecastingImageClassificationImageClassificationMultilabelImageInstanceSegmentationImageObjectDetectionRegressionTextClassificationTextClassificationMultilabelTextNER(required) |


### MLTableJobInput

| Name | Description | Value |
|-|-|-|
| description | Description for the input. | string |
| jobInputType | [Required] Specifies the type of job. | 'custom_model''literal''mlflow_model''mltable''triton_model''uri_file''uri_folder' (required) |
| mode | Input Asset Delivery Mode. | 'Direct''Download''EvalDownload''EvalMount''ReadOnlyMount''ReadWriteMount' |
| uri | [Required] Input Asset URI. | string (required)Constraints:Min length = 1Pattern =[a-zA-Z0-9_] |


### Classification

| Name | Description | Value |
|-|-|-|
| taskType | [Required] Task type for AutoMLJob. | 'Classification' (required) |
| cvSplitColumnNames | Columns to use for CVSplit data. | string[] |
| featurizationSettings | Featurization inputs needed for AutoML job. | TableVerticalFeaturizationSettings |
| limitSettings | Execution constraints for AutoMLJob. | TableVerticalLimitSettings |
| nCrossValidations | Number of cross validation folds to be applied on training datasetwhen validation dataset is not provided. | NCrossValidations |
| positiveLabel | Positive label for binary metrics calculation. | string |
| primaryMetric | Primary metric for the task. | 'AUCWeighted''Accuracy''AveragePrecisionScoreWeighted''NormMacroRecall''PrecisionScoreWeighted' |
| testData | Test data input. | MLTableJobInput |
| testDataSize | The fraction of test dataset that needs to be set aside for validation purpose.Values between (0.0 , 1.0)Applied when validation dataset is not provided. | int |
| trainingSettings | Inputs for training phase for an AutoML Job. | ClassificationTrainingSettings |
| validationData | Validation data inputs. | MLTableJobInput |
| validationDataSize | The fraction of training dataset that needs to be set aside for validation purpose.Values between (0.0 , 1.0)Applied when validation dataset is not provided. | int |
| weightColumnName | The name of the sample weight column. Automated ML supports a weighted column as an input, causing rows in the data to be weighted up or down. | string |


### TableVerticalFeaturizationSettings

| Name | Description | Value |
|-|-|-|
| blockedTransformers | These transformers shall not be used in featurization. | String array containing any of:'CatTargetEncoder''CountVectorizer''HashOneHotEncoder''LabelEncoder''NaiveBayes''OneHotEncoder''TextTargetEncoder''TfIdf''WoETargetEncoder''WordEmbedding' |
| columnNameAndTypes | Dictionary of column name and its type (int, float, string, datetime etc). | TableVerticalFeaturizationSettingsColumnNameAndTypes |
| datasetLanguage | Dataset language, useful for the text data. | string |
| enableDnnFeaturization | Determines whether to use Dnn based featurizers for data featurization. | bool |
| mode | Featurization mode - User can keep the default 'Auto' mode and AutoML will take care of necessary transformation of the data in featurization phase.If 'Off' is selected then no featurization is done.If 'Custom' is selected then user can specify additional inputs to customize how featurization is done. | 'Auto''Custom''Off' |
| transformerParams | User can specify additional transformers to be used along with the columns to which it would be applied and parameters for the transformer constructor. | TableVerticalFeaturizationSettingsTransformerParams |


### TableVerticalFeaturizationSettingsColumnNameAndTypes

| Name | Description | Value |
|-|-|-|
| {customized property} |  | string |


### TableVerticalFeaturizationSettingsTransformerParams

| Name | Description | Value |
|-|-|-|
| {customized property} |  | ColumnTransformer[] |


### ColumnTransformer

| Name | Description | Value |
|-|-|-|
| fields | Fields to apply transformer logic on. | string[] |
| parameters | Different properties to be passed to transformer.Input expected is dictionary of key,value pairs in JSON format. | For Bicep, you can use theany()function. |


### TableVerticalLimitSettings

| Name | Description | Value |
|-|-|-|
| enableEarlyTermination | Enable early termination, determines whether or not if AutoMLJob will terminate early if there is no score improvement in last 20 iterations. | bool |
| exitScore | Exit score for the AutoML job. | int |
| maxConcurrentTrials | Maximum Concurrent iterations. | int |
| maxCoresPerTrial | Max cores per iteration. | int |
| maxTrials | Number of iterations. | int |
| timeout | AutoML job timeout. | string |
| trialTimeout | Iteration timeout. | string |


### NCrossValidations

| Name | Description | Value |
|-|-|-|
| mode | Set the object type | AutoCustom(required) |


### AutoNCrossValidations

| Name | Description | Value |
|-|-|-|
| mode | [Required] Mode for determining N-Cross validations. | 'Auto' (required) |


### CustomNCrossValidations

| Name | Description | Value |
|-|-|-|
| mode | [Required] Mode for determining N-Cross validations. | 'Custom' (required) |
| value | [Required] N-Cross validations value. | int (required) |


### ClassificationTrainingSettings

| Name | Description | Value |
|-|-|-|
| allowedTrainingAlgorithms | Allowed models for classification task. | String array containing any of:'BernoulliNaiveBayes''DecisionTree''ExtremeRandomTrees''GradientBoosting''KNN''LightGBM''LinearSVM''LogisticRegression''MultinomialNaiveBayes''RandomForest''SGD''SVM''XGBoostClassifier' |
| blockedTrainingAlgorithms | Blocked models for classification task. | String array containing any of:'BernoulliNaiveBayes''DecisionTree''ExtremeRandomTrees''GradientBoosting''KNN''LightGBM''LinearSVM''LogisticRegression''MultinomialNaiveBayes''RandomForest''SGD''SVM''XGBoostClassifier' |
| enableDnnTraining | Enable recommendation of DNN models. | bool |
| enableModelExplainability | Flag to turn on explainability on best model. | bool |
| enableOnnxCompatibleModels | Flag for enabling onnx compatible models. | bool |
| enableStackEnsemble | Enable stack ensemble run. | bool |
| enableVoteEnsemble | Enable voting ensemble run. | bool |
| ensembleModelDownloadTimeout | During VotingEnsemble and StackEnsemble model generation, multiple fitted models from the previous child runs are downloaded.Configure this parameter with a higher value than 300 secs, if more time is needed. | string |
| stackEnsembleSettings | Stack ensemble settings for stack ensemble run. | StackEnsembleSettings |


### StackEnsembleSettings

| Name | Description | Value |
|-|-|-|
| stackMetaLearnerKWargs | Optional parameters to pass to the initializer of the meta-learner. | For Bicep, you can use theany()function. |
| stackMetaLearnerTrainPercentage | Specifies the proportion of the training set (when choosing train and validation type of training) to be reserved for training the meta-learner. Default value is 0.2. | int |
| stackMetaLearnerType | The meta-learner is a model trained on the output of the individual heterogeneous models. | 'ElasticNet''ElasticNetCV''LightGBMClassifier''LightGBMRegressor''LinearRegression''LogisticRegression''LogisticRegressionCV''None' |


### Forecasting

| Name | Description | Value |
|-|-|-|
| taskType | [Required] Task type for AutoMLJob. | 'Forecasting' (required) |
| cvSplitColumnNames | Columns to use for CVSplit data. | string[] |
| featurizationSettings | Featurization inputs needed for AutoML job. | TableVerticalFeaturizationSettings |
| forecastingSettings | Forecasting task specific inputs. | ForecastingSettings |
| limitSettings | Execution constraints for AutoMLJob. | TableVerticalLimitSettings |
| nCrossValidations | Number of cross validation folds to be applied on training datasetwhen validation dataset is not provided. | NCrossValidations |
| primaryMetric | Primary metric for forecasting task. | 'NormalizedMeanAbsoluteError''NormalizedRootMeanSquaredError''R2Score''SpearmanCorrelation' |
| testData | Test data input. | MLTableJobInput |
| testDataSize | The fraction of test dataset that needs to be set aside for validation purpose.Values between (0.0 , 1.0)Applied when validation dataset is not provided. | int |
| trainingSettings | Inputs for training phase for an AutoML Job. | ForecastingTrainingSettings |
| validationData | Validation data inputs. | MLTableJobInput |
| validationDataSize | The fraction of training dataset that needs to be set aside for validation purpose.Values between (0.0 , 1.0)Applied when validation dataset is not provided. | int |
| weightColumnName | The name of the sample weight column. Automated ML supports a weighted column as an input, causing rows in the data to be weighted up or down. | string |


### ForecastingSettings

| Name | Description | Value |
|-|-|-|
| countryOrRegionForHolidays | Country or region for holidays for forecasting tasks.These should be ISO 3166 two-letter country/region codes, for example 'US' or 'GB'. | string |
| cvStepSize | Number of periods between the origin time of one CV fold and the next fold. Forexample, ifCVStepSize= 3 for daily data, the origin time for each fold will bethree days apart. | int |
| featureLags | Flag for generating lags for the numeric features with 'auto' or null. | 'Auto''None' |
| forecastHorizon | The desired maximum forecast horizon in units of time-series frequency. | ForecastHorizon |
| frequency | When forecasting, this parameter represents the period with which the forecast is desired, for example daily, weekly, yearly, etc. The forecast frequency is dataset frequency by default. | string |
| seasonality | Set time series seasonality as an integer multiple of the series frequency.If seasonality is set to 'auto', it will be inferred. | Seasonality |
| shortSeriesHandlingConfig | The parameter defining how if AutoML should handle short time series. | 'Auto''Drop''None''Pad' |
| targetAggregateFunction | The function to be used to aggregate the time series target column to conform to a user specified frequency.If the TargetAggregateFunction is set i.e. not 'None', but the freq parameter is not set, the error is raised. The possible target aggregation functions are: "sum", "max", "min" and "mean". | 'Max''Mean''Min''None''Sum' |
| targetLags | The number of past periods to lag from the target column. | TargetLags |
| targetRollingWindowSize | The number of past periods used to create a rolling window average of the target column. | TargetRollingWindowSize |
| timeColumnName | The name of the time column. This parameter is required when forecasting to specify the datetime column in the input data used for building the time series and inferring its frequency. | string |
| timeSeriesIdColumnNames | The names of columns used to group a timeseries. It can be used to create multiple series.If grain is not defined, the data set is assumed to be one time-series. This parameter is used with task type forecasting. | string[] |
| useStl | Configure STL Decomposition of the time-series target column. | 'None''Season''SeasonTrend' |


### ForecastHorizon

| Name | Description | Value |
|-|-|-|
| mode | Set the object type | AutoCustom(required) |


### AutoForecastHorizon

| Name | Description | Value |
|-|-|-|
| mode | [Required] Set forecast horizon value selection mode. | 'Auto' (required) |


### CustomForecastHorizon

| Name | Description | Value |
|-|-|-|
| mode | [Required] Set forecast horizon value selection mode. | 'Custom' (required) |
| value | [Required] Forecast horizon value. | int (required) |


### Seasonality

| Name | Description | Value |
|-|-|-|
| mode | Set the object type | AutoCustom(required) |


### AutoSeasonality

| Name | Description | Value |
|-|-|-|
| mode | [Required] Seasonality mode. | 'Auto' (required) |


### CustomSeasonality

| Name | Description | Value |
|-|-|-|
| mode | [Required] Seasonality mode. | 'Custom' (required) |
| value | [Required] Seasonality value. | int (required) |


### TargetLags

| Name | Description | Value |
|-|-|-|
| mode | Set the object type | AutoCustom(required) |


### AutoTargetLags

| Name | Description | Value |
|-|-|-|
| mode | [Required] Set target lags mode - Auto/Custom | 'Auto' (required) |


### CustomTargetLags

| Name | Description | Value |
|-|-|-|
| mode | [Required] Set target lags mode - Auto/Custom | 'Custom' (required) |
| values | [Required] Set target lags values. | int[] (required) |


### TargetRollingWindowSize

| Name | Description | Value |
|-|-|-|
| mode | Set the object type | AutoCustom(required) |


### AutoTargetRollingWindowSize

| Name | Description | Value |
|-|-|-|
| mode | [Required] TargetRollingWindowSiz detection mode. | 'Auto' (required) |


### CustomTargetRollingWindowSize

| Name | Description | Value |
|-|-|-|
| mode | [Required] TargetRollingWindowSiz detection mode. | 'Custom' (required) |
| value | [Required] TargetRollingWindowSize value. | int (required) |


### ForecastingTrainingSettings

| Name | Description | Value |
|-|-|-|
| allowedTrainingAlgorithms | Allowed models for forecasting task. | String array containing any of:'Arimax''AutoArima''Average''DecisionTree''ElasticNet''ExponentialSmoothing''ExtremeRandomTrees''GradientBoosting''KNN''LassoLars''LightGBM''Naive''Prophet''RandomForest''SGD''SeasonalAverage''SeasonalNaive''TCNForecaster''XGBoostRegressor' |
| blockedTrainingAlgorithms | Blocked models for forecasting task. | String array containing any of:'Arimax''AutoArima''Average''DecisionTree''ElasticNet''ExponentialSmoothing''ExtremeRandomTrees''GradientBoosting''KNN''LassoLars''LightGBM''Naive''Prophet''RandomForest''SGD''SeasonalAverage''SeasonalNaive''TCNForecaster''XGBoostRegressor' |
| enableDnnTraining | Enable recommendation of DNN models. | bool |
| enableModelExplainability | Flag to turn on explainability on best model. | bool |
| enableOnnxCompatibleModels | Flag for enabling onnx compatible models. | bool |
| enableStackEnsemble | Enable stack ensemble run. | bool |
| enableVoteEnsemble | Enable voting ensemble run. | bool |
| ensembleModelDownloadTimeout | During VotingEnsemble and StackEnsemble model generation, multiple fitted models from the previous child runs are downloaded.Configure this parameter with a higher value than 300 secs, if more time is needed. | string |
| stackEnsembleSettings | Stack ensemble settings for stack ensemble run. | StackEnsembleSettings |


### ImageClassification

| Name | Description | Value |
|-|-|-|
| taskType | [Required] Task type for AutoMLJob. | 'ImageClassification' (required) |
| limitSettings | [Required] Limit settings for the AutoML job. | ImageLimitSettings(required) |
| modelSettings | Settings used for training the model. | ImageModelSettingsClassification |
| primaryMetric | Primary metric to optimize for this task. | 'AUCWeighted''Accuracy''AveragePrecisionScoreWeighted''NormMacroRecall''PrecisionScoreWeighted' |
| searchSpace | Search space for sampling different combinations of models and their hyperparameters. | ImageModelDistributionSettingsClassification[] |
| sweepSettings | Model sweeping and hyperparameter sweeping related settings. | ImageSweepSettings |
| validationData | Validation data inputs. | MLTableJobInput |
| validationDataSize | The fraction of training dataset that needs to be set aside for validation purpose.Values between (0.0 , 1.0)Applied when validation dataset is not provided. | int |


### ImageLimitSettings

| Name | Description | Value |
|-|-|-|
| maxConcurrentTrials | Maximum number of concurrent AutoML iterations. | int |
| maxTrials | Maximum number of AutoML iterations. | int |
| timeout | AutoML job timeout. | string |


### ImageModelSettingsClassification

| Name | Description | Value |
|-|-|-|
| advancedSettings | Settings for advanced scenarios. | string |
| amsGradient | Enable AMSGrad when optimizer is 'adam' or 'adamw'. | bool |
| augmentations | Settings for using Augmentations. | string |
| beta1 | Value of 'beta1' when optimizer is 'adam' or 'adamw'. Must be a float in the range [0, 1]. | int |
| beta2 | Value of 'beta2' when optimizer is 'adam' or 'adamw'. Must be a float in the range [0, 1]. | int |
| checkpointFrequency | Frequency to store model checkpoints. Must be a positive integer. | int |
| checkpointModel | The pretrained checkpoint model for incremental training. | MLFlowModelJobInput |
| checkpointRunId | The id of a previous run that has a pretrained checkpoint for incremental training. | string |
| distributed | Whether to use distributed training. | bool |
| earlyStopping | Enable early stopping logic during training. | bool |
| earlyStoppingDelay | Minimum number of epochs or validation evaluations to wait before primary metric improvementis tracked for early stopping. Must be a positive integer. | int |
| earlyStoppingPatience | Minimum number of epochs or validation evaluations with no primary metric improvement beforethe run is stopped. Must be a positive integer. | int |
| enableOnnxNormalization | Enable normalization when exporting ONNX model. | bool |
| evaluationFrequency | Frequency to evaluate validation dataset to get metric scores. Must be a positive integer. | int |
| gradientAccumulationStep | Gradient accumulation means running a configured number of "GradAccumulationStep" steps withoutupdating the model weights while accumulating the gradients of those steps, and then usingthe accumulated gradients to compute the weight updates. Must be a positive integer. | int |
| layersToFreeze | Number of layers to freeze for the model. Must be a positive integer.For instance, passing 2 as value for 'seresnext' meansfreezing layer0 and layer1. For a full list of models supported and details on layer freeze, pleasesee:https://docs.microsoft.com/azure/machine-learning/how-to-auto-train-image-models. | int |
| learningRate | Initial learning rate. Must be a float in the range [0, 1]. | int |
| learningRateScheduler | Type of learning rate scheduler. Must be 'warmup_cosine' or 'step'. | 'None''Step''WarmupCosine' |
| modelName | Name of the model to use for training.For more information on the available models please visit the official documentation:https://docs.microsoft.com/azure/machine-learning/how-to-auto-train-image-models. | string |
| momentum | Value of momentum when optimizer is 'sgd'. Must be a float in the range [0, 1]. | int |
| nesterov | Enable nesterov when optimizer is 'sgd'. | bool |
| numberOfEpochs | Number of training epochs. Must be a positive integer. | int |
| numberOfWorkers | Number of data loader workers. Must be a non-negative integer. | int |
| optimizer | Type of optimizer. | 'Adam''Adamw''None''Sgd' |
| randomSeed | Random seed to be used when using deterministic training. | int |
| stepLRGamma | Value of gamma when learning rate scheduler is 'step'. Must be a float in the range [0, 1]. | int |
| stepLRStepSize | Value of step size when learning rate scheduler is 'step'. Must be a positive integer. | int |
| trainingBatchSize | Training batch size. Must be a positive integer. | int |
| trainingCropSize | Image crop size that is input to the neural network for the training dataset. Must be a positive integer. | int |
| validationBatchSize | Validation batch size. Must be a positive integer. | int |
| validationCropSize | Image crop size that is input to the neural network for the validation dataset. Must be a positive integer. | int |
| validationResizeSize | Image size to which to resize before cropping for validation dataset. Must be a positive integer. | int |
| warmupCosineLRCycles | Value of cosine cycle when learning rate scheduler is 'warmup_cosine'. Must be a float in the range [0, 1]. | int |
| warmupCosineLRWarmupEpochs | Value of warmup epochs when learning rate scheduler is 'warmup_cosine'. Must be a positive integer. | int |
| weightDecay | Value of weight decay when optimizer is 'sgd', 'adam', or 'adamw'. Must be a float in the range[0, 1]. | int |
| weightedLoss | Weighted loss. The accepted values are 0 for no weighted loss.1 for weighted loss with sqrt.(class_weights). 2 for weighted loss with class_weights. Must be 0 or 1 or 2. | int |


### MLFlowModelJobInput

| Name | Description | Value |
|-|-|-|
| description | Description for the input. | string |
| jobInputType | [Required] Specifies the type of job. | 'custom_model''literal''mlflow_model''mltable''triton_model''uri_file''uri_folder' (required) |
| mode | Input Asset Delivery Mode. | 'Direct''Download''EvalDownload''EvalMount''ReadOnlyMount''ReadWriteMount' |
| uri | [Required] Input Asset URI. | string (required)Constraints:Min length = 1Pattern =[a-zA-Z0-9_] |


### ImageModelDistributionSettingsClassification

| Name | Description | Value |
|-|-|-|
| amsGradient | Enable AMSGrad when optimizer is 'adam' or 'adamw'. | string |
| augmentations | Settings for using Augmentations. | string |
| beta1 | Value of 'beta1' when optimizer is 'adam' or 'adamw'. Must be a float in the range [0, 1]. | string |
| beta2 | Value of 'beta2' when optimizer is 'adam' or 'adamw'. Must be a float in the range [0, 1]. | string |
| distributed | Whether to use distributer training. | string |
| earlyStopping | Enable early stopping logic during training. | string |
| earlyStoppingDelay | Minimum number of epochs or validation evaluations to wait before primary metric improvementis tracked for early stopping. Must be a positive integer. | string |
| earlyStoppingPatience | Minimum number of epochs or validation evaluations with no primary metric improvement beforethe run is stopped. Must be a positive integer. | string |
| enableOnnxNormalization | Enable normalization when exporting ONNX model. | string |
| evaluationFrequency | Frequency to evaluate validation dataset to get metric scores. Must be a positive integer. | string |
| gradientAccumulationStep | Gradient accumulation means running a configured number of "GradAccumulationStep" steps withoutupdating the model weights while accumulating the gradients of those steps, and then usingthe accumulated gradients to compute the weight updates. Must be a positive integer. | string |
| layersToFreeze | Number of layers to freeze for the model. Must be a positive integer.For instance, passing 2 as value for 'seresnext' meansfreezing layer0 and layer1. For a full list of models supported and details on layer freeze, pleasesee:https://docs.microsoft.com/azure/machine-learning/how-to-auto-train-image-models. | string |
| learningRate | Initial learning rate. Must be a float in the range [0, 1]. | string |
| learningRateScheduler | Type of learning rate scheduler. Must be 'warmup_cosine' or 'step'. | string |
| modelName | Name of the model to use for training.For more information on the available models please visit the official documentation:https://docs.microsoft.com/azure/machine-learning/how-to-auto-train-image-models. | string |
| momentum | Value of momentum when optimizer is 'sgd'. Must be a float in the range [0, 1]. | string |
| nesterov | Enable nesterov when optimizer is 'sgd'. | string |
| numberOfEpochs | Number of training epochs. Must be a positive integer. | string |
| numberOfWorkers | Number of data loader workers. Must be a non-negative integer. | string |
| optimizer | Type of optimizer. Must be either 'sgd', 'adam', or 'adamw'. | string |
| randomSeed | Random seed to be used when using deterministic training. | string |
| stepLRGamma | Value of gamma when learning rate scheduler is 'step'. Must be a float in the range [0, 1]. | string |
| stepLRStepSize | Value of step size when learning rate scheduler is 'step'. Must be a positive integer. | string |
| trainingBatchSize | Training batch size. Must be a positive integer. | string |
| trainingCropSize | Image crop size that is input to the neural network for the training dataset. Must be a positive integer. | string |
| validationBatchSize | Validation batch size. Must be a positive integer. | string |
| validationCropSize | Image crop size that is input to the neural network for the validation dataset. Must be a positive integer. | string |
| validationResizeSize | Image size to which to resize before cropping for validation dataset. Must be a positive integer. | string |
| warmupCosineLRCycles | Value of cosine cycle when learning rate scheduler is 'warmup_cosine'. Must be a float in the range [0, 1]. | string |
| warmupCosineLRWarmupEpochs | Value of warmup epochs when learning rate scheduler is 'warmup_cosine'. Must be a positive integer. | string |
| weightDecay | Value of weight decay when optimizer is 'sgd', 'adam', or 'adamw'. Must be a float in the range[0, 1]. | string |
| weightedLoss | Weighted loss. The accepted values are 0 for no weighted loss.1 for weighted loss with sqrt.(class_weights). 2 for weighted loss with class_weights. Must be 0 or 1 or 2. | string |


### ImageSweepSettings

| Name | Description | Value |
|-|-|-|
| earlyTermination | Type of early termination policy. | EarlyTerminationPolicy |
| samplingAlgorithm | [Required] Type of the hyperparameter sampling algorithms. | 'Bayesian''Grid''Random' (required) |


### EarlyTerminationPolicy

| Name | Description | Value |
|-|-|-|
| delayEvaluation | Number of intervals by which to delay the first evaluation. | int |
| evaluationInterval | Interval (number of runs) between policy evaluations. | int |
| policyType | Set the object type | BanditMedianStoppingTruncationSelection(required) |


### BanditPolicy

| Name | Description | Value |
|-|-|-|
| policyType | [Required] Name of policy configuration | 'Bandit' (required) |
| slackAmount | Absolute distance allowed from the best performing run. | int |
| slackFactor | Ratio of the allowed distance from the best performing run. | int |


### MedianStoppingPolicy

| Name | Description | Value |
|-|-|-|
| policyType | [Required] Name of policy configuration | 'MedianStopping' (required) |


### TruncationSelectionPolicy

| Name | Description | Value |
|-|-|-|
| policyType | [Required] Name of policy configuration | 'TruncationSelection' (required) |
| truncationPercentage | The percentage of runs to cancel at each evaluation interval. | int |


### ImageClassificationMultilabel

| Name | Description | Value |
|-|-|-|
| taskType | [Required] Task type for AutoMLJob. | 'ImageClassificationMultilabel' (required) |
| limitSettings | [Required] Limit settings for the AutoML job. | ImageLimitSettings(required) |
| modelSettings | Settings used for training the model. | ImageModelSettingsClassification |
| primaryMetric | Primary metric to optimize for this task. | 'AUCWeighted''Accuracy''AveragePrecisionScoreWeighted''IOU''NormMacroRecall''PrecisionScoreWeighted' |
| searchSpace | Search space for sampling different combinations of models and their hyperparameters. | ImageModelDistributionSettingsClassification[] |
| sweepSettings | Model sweeping and hyperparameter sweeping related settings. | ImageSweepSettings |
| validationData | Validation data inputs. | MLTableJobInput |
| validationDataSize | The fraction of training dataset that needs to be set aside for validation purpose.Values between (0.0 , 1.0)Applied when validation dataset is not provided. | int |


### ImageInstanceSegmentation

| Name | Description | Value |
|-|-|-|
| taskType | [Required] Task type for AutoMLJob. | 'ImageInstanceSegmentation' (required) |
| limitSettings | [Required] Limit settings for the AutoML job. | ImageLimitSettings(required) |
| modelSettings | Settings used for training the model. | ImageModelSettingsObjectDetection |
| primaryMetric | Primary metric to optimize for this task. | 'MeanAveragePrecision' |
| searchSpace | Search space for sampling different combinations of models and their hyperparameters. | ImageModelDistributionSettingsObjectDetection[] |
| sweepSettings | Model sweeping and hyperparameter sweeping related settings. | ImageSweepSettings |
| validationData | Validation data inputs. | MLTableJobInput |
| validationDataSize | The fraction of training dataset that needs to be set aside for validation purpose.Values between (0.0 , 1.0)Applied when validation dataset is not provided. | int |


### ImageModelSettingsObjectDetection

| Name | Description | Value |
|-|-|-|
| advancedSettings | Settings for advanced scenarios. | string |
| amsGradient | Enable AMSGrad when optimizer is 'adam' or 'adamw'. | bool |
| augmentations | Settings for using Augmentations. | string |
| beta1 | Value of 'beta1' when optimizer is 'adam' or 'adamw'. Must be a float in the range [0, 1]. | int |
| beta2 | Value of 'beta2' when optimizer is 'adam' or 'adamw'. Must be a float in the range [0, 1]. | int |
| boxDetectionsPerImage | Maximum number of detections per image, for all classes. Must be a positive integer.Note: This settings is not supported for the 'yolov5' algorithm. | int |
| boxScoreThreshold | During inference, only return proposals with a classification score greater thanBoxScoreThreshold. Must be a float in the range[0, 1]. | int |
| checkpointFrequency | Frequency to store model checkpoints. Must be a positive integer. | int |
| checkpointModel | The pretrained checkpoint model for incremental training. | MLFlowModelJobInput |
| checkpointRunId | The id of a previous run that has a pretrained checkpoint for incremental training. | string |
| distributed | Whether to use distributed training. | bool |
| earlyStopping | Enable early stopping logic during training. | bool |
| earlyStoppingDelay | Minimum number of epochs or validation evaluations to wait before primary metric improvementis tracked for early stopping. Must be a positive integer. | int |
| earlyStoppingPatience | Minimum number of epochs or validation evaluations with no primary metric improvement beforethe run is stopped. Must be a positive integer. | int |
| enableOnnxNormalization | Enable normalization when exporting ONNX model. | bool |
| evaluationFrequency | Frequency to evaluate validation dataset to get metric scores. Must be a positive integer. | int |
| gradientAccumulationStep | Gradient accumulation means running a configured number of "GradAccumulationStep" steps withoutupdating the model weights while accumulating the gradients of those steps, and then usingthe accumulated gradients to compute the weight updates. Must be a positive integer. | int |
| imageSize | Image size for train and validation. Must be a positive integer.Note: The training run may get into CUDA OOM if the size is too big.Note: This settings is only supported for the 'yolov5' algorithm. | int |
| layersToFreeze | Number of layers to freeze for the model. Must be a positive integer.For instance, passing 2 as value for 'seresnext' meansfreezing layer0 and layer1. For a full list of models supported and details on layer freeze, pleasesee:https://docs.microsoft.com/azure/machine-learning/how-to-auto-train-image-models. | int |
| learningRate | Initial learning rate. Must be a float in the range [0, 1]. | int |
| learningRateScheduler | Type of learning rate scheduler. Must be 'warmup_cosine' or 'step'. | 'None''Step''WarmupCosine' |
| maxSize | Maximum size of the image to be rescaled before feeding it to the backbone.Must be a positive integer. Note: training run may get into CUDA OOM if the size is too big.Note: This settings is not supported for the 'yolov5' algorithm. | int |
| minSize | Minimum size of the image to be rescaled before feeding it to the backbone.Must be a positive integer. Note: training run may get into CUDA OOM if the size is too big.Note: This settings is not supported for the 'yolov5' algorithm. | int |
| modelName | Name of the model to use for training.For more information on the available models please visit the official documentation:https://docs.microsoft.com/azure/machine-learning/how-to-auto-train-image-models. | string |
| modelSize | Model size. Must be 'small', 'medium', 'large', or 'xlarge'.Note: training run may get into CUDA OOM if the model size is too big.Note: This settings is only supported for the 'yolov5' algorithm. | 'ExtraLarge''Large''Medium''None''Small' |
| momentum | Value of momentum when optimizer is 'sgd'. Must be a float in the range [0, 1]. | int |
| multiScale | Enable multi-scale image by varying image size by +/- 50%.Note: training run may get into CUDA OOM if no sufficient GPU memory.Note: This settings is only supported for the 'yolov5' algorithm. | bool |
| nesterov | Enable nesterov when optimizer is 'sgd'. | bool |
| nmsIouThreshold | IOU threshold used during inference in NMS post processing. Must be a float in the range [0, 1]. | int |
| numberOfEpochs | Number of training epochs. Must be a positive integer. | int |
| numberOfWorkers | Number of data loader workers. Must be a non-negative integer. | int |
| optimizer | Type of optimizer. | 'Adam''Adamw''None''Sgd' |
| randomSeed | Random seed to be used when using deterministic training. | int |
| stepLRGamma | Value of gamma when learning rate scheduler is 'step'. Must be a float in the range [0, 1]. | int |
| stepLRStepSize | Value of step size when learning rate scheduler is 'step'. Must be a positive integer. | int |
| tileGridSize | The grid size to use for tiling each image. Note: TileGridSize must not beNone to enable small object detection logic. A string containing two integers in mxn format.Note: This settings is not supported for the 'yolov5' algorithm. | string |
| tileOverlapRatio | Overlap ratio between adjacent tiles in each dimension. Must be float in the range [0, 1).Note: This settings is not supported for the 'yolov5' algorithm. | int |
| tilePredictionsNmsThreshold | The IOU threshold to use to perform NMS while merging predictions from tiles and image.Used in validation/ inference. Must be float in the range [0, 1].Note: This settings is not supported for the 'yolov5' algorithm. | int |
| trainingBatchSize | Training batch size. Must be a positive integer. | int |
| validationBatchSize | Validation batch size. Must be a positive integer. | int |
| validationIouThreshold | IOU threshold to use when computing validation metric. Must be float in the range [0, 1]. | int |
| validationMetricType | Metric computation method to use for validation metrics. | 'Coco''CocoVoc''None''Voc' |
| warmupCosineLRCycles | Value of cosine cycle when learning rate scheduler is 'warmup_cosine'. Must be a float in the range [0, 1]. | int |
| warmupCosineLRWarmupEpochs | Value of warmup epochs when learning rate scheduler is 'warmup_cosine'. Must be a positive integer. | int |
| weightDecay | Value of weight decay when optimizer is 'sgd', 'adam', or 'adamw'. Must be a float in the range[0, 1]. | int |


### ImageModelDistributionSettingsObjectDetection

| Name | Description | Value |
|-|-|-|
| amsGradient | Enable AMSGrad when optimizer is 'adam' or 'adamw'. | string |
| augmentations | Settings for using Augmentations. | string |
| beta1 | Value of 'beta1' when optimizer is 'adam' or 'adamw'. Must be a float in the range [0, 1]. | string |
| beta2 | Value of 'beta2' when optimizer is 'adam' or 'adamw'. Must be a float in the range [0, 1]. | string |
| boxDetectionsPerImage | Maximum number of detections per image, for all classes. Must be a positive integer.Note: This settings is not supported for the 'yolov5' algorithm. | string |
| boxScoreThreshold | During inference, only return proposals with a classification score greater thanBoxScoreThreshold. Must be a float in the range[0, 1]. | string |
| distributed | Whether to use distributer training. | string |
| earlyStopping | Enable early stopping logic during training. | string |
| earlyStoppingDelay | Minimum number of epochs or validation evaluations to wait before primary metric improvementis tracked for early stopping. Must be a positive integer. | string |
| earlyStoppingPatience | Minimum number of epochs or validation evaluations with no primary metric improvement beforethe run is stopped. Must be a positive integer. | string |
| enableOnnxNormalization | Enable normalization when exporting ONNX model. | string |
| evaluationFrequency | Frequency to evaluate validation dataset to get metric scores. Must be a positive integer. | string |
| gradientAccumulationStep | Gradient accumulation means running a configured number of "GradAccumulationStep" steps withoutupdating the model weights while accumulating the gradients of those steps, and then usingthe accumulated gradients to compute the weight updates. Must be a positive integer. | string |
| imageSize | Image size for train and validation. Must be a positive integer.Note: The training run may get into CUDA OOM if the size is too big.Note: This settings is only supported for the 'yolov5' algorithm. | string |
| layersToFreeze | Number of layers to freeze for the model. Must be a positive integer.For instance, passing 2 as value for 'seresnext' meansfreezing layer0 and layer1. For a full list of models supported and details on layer freeze, pleasesee:https://docs.microsoft.com/azure/machine-learning/how-to-auto-train-image-models. | string |
| learningRate | Initial learning rate. Must be a float in the range [0, 1]. | string |
| learningRateScheduler | Type of learning rate scheduler. Must be 'warmup_cosine' or 'step'. | string |
| maxSize | Maximum size of the image to be rescaled before feeding it to the backbone.Must be a positive integer. Note: training run may get into CUDA OOM if the size is too big.Note: This settings is not supported for the 'yolov5' algorithm. | string |
| minSize | Minimum size of the image to be rescaled before feeding it to the backbone.Must be a positive integer. Note: training run may get into CUDA OOM if the size is too big.Note: This settings is not supported for the 'yolov5' algorithm. | string |
| modelName | Name of the model to use for training.For more information on the available models please visit the official documentation:https://docs.microsoft.com/azure/machine-learning/how-to-auto-train-image-models. | string |
| modelSize | Model size. Must be 'small', 'medium', 'large', or 'xlarge'.Note: training run may get into CUDA OOM if the model size is too big.Note: This settings is only supported for the 'yolov5' algorithm. | string |
| momentum | Value of momentum when optimizer is 'sgd'. Must be a float in the range [0, 1]. | string |
| multiScale | Enable multi-scale image by varying image size by +/- 50%.Note: training run may get into CUDA OOM if no sufficient GPU memory.Note: This settings is only supported for the 'yolov5' algorithm. | string |
| nesterov | Enable nesterov when optimizer is 'sgd'. | string |
| nmsIouThreshold | IOU threshold used during inference in NMS post processing. Must be float in the range [0, 1]. | string |
| numberOfEpochs | Number of training epochs. Must be a positive integer. | string |
| numberOfWorkers | Number of data loader workers. Must be a non-negative integer. | string |
| optimizer | Type of optimizer. Must be either 'sgd', 'adam', or 'adamw'. | string |
| randomSeed | Random seed to be used when using deterministic training. | string |
| stepLRGamma | Value of gamma when learning rate scheduler is 'step'. Must be a float in the range [0, 1]. | string |
| stepLRStepSize | Value of step size when learning rate scheduler is 'step'. Must be a positive integer. | string |
| tileGridSize | The grid size to use for tiling each image. Note: TileGridSize must not beNone to enable small object detection logic. A string containing two integers in mxn format.Note: This settings is not supported for the 'yolov5' algorithm. | string |
| tileOverlapRatio | Overlap ratio between adjacent tiles in each dimension. Must be float in the range [0, 1).Note: This settings is not supported for the 'yolov5' algorithm. | string |
| tilePredictionsNmsThreshold | The IOU threshold to use to perform NMS while merging predictions from tiles and image.Used in validation/ inference. Must be float in the range [0, 1].Note: This settings is not supported for the 'yolov5' algorithm.NMS: Non-maximum suppression | string |
| trainingBatchSize | Training batch size. Must be a positive integer. | string |
| validationBatchSize | Validation batch size. Must be a positive integer. | string |
| validationIouThreshold | IOU threshold to use when computing validation metric. Must be float in the range [0, 1]. | string |
| validationMetricType | Metric computation method to use for validation metrics. Must be 'none', 'coco', 'voc', or 'coco_voc'. | string |
| warmupCosineLRCycles | Value of cosine cycle when learning rate scheduler is 'warmup_cosine'. Must be a float in the range [0, 1]. | string |
| warmupCosineLRWarmupEpochs | Value of warmup epochs when learning rate scheduler is 'warmup_cosine'. Must be a positive integer. | string |
| weightDecay | Value of weight decay when optimizer is 'sgd', 'adam', or 'adamw'. Must be a float in the range[0, 1]. | string |


### ImageObjectDetection

| Name | Description | Value |
|-|-|-|
| taskType | [Required] Task type for AutoMLJob. | 'ImageObjectDetection' (required) |
| limitSettings | [Required] Limit settings for the AutoML job. | ImageLimitSettings(required) |
| modelSettings | Settings used for training the model. | ImageModelSettingsObjectDetection |
| primaryMetric | Primary metric to optimize for this task. | 'MeanAveragePrecision' |
| searchSpace | Search space for sampling different combinations of models and their hyperparameters. | ImageModelDistributionSettingsObjectDetection[] |
| sweepSettings | Model sweeping and hyperparameter sweeping related settings. | ImageSweepSettings |
| validationData | Validation data inputs. | MLTableJobInput |
| validationDataSize | The fraction of training dataset that needs to be set aside for validation purpose.Values between (0.0 , 1.0)Applied when validation dataset is not provided. | int |


### Regression

| Name | Description | Value |
|-|-|-|
| taskType | [Required] Task type for AutoMLJob. | 'Regression' (required) |
| cvSplitColumnNames | Columns to use for CVSplit data. | string[] |
| featurizationSettings | Featurization inputs needed for AutoML job. | TableVerticalFeaturizationSettings |
| limitSettings | Execution constraints for AutoMLJob. | TableVerticalLimitSettings |
| nCrossValidations | Number of cross validation folds to be applied on training datasetwhen validation dataset is not provided. | NCrossValidations |
| primaryMetric | Primary metric for regression task. | 'NormalizedMeanAbsoluteError''NormalizedRootMeanSquaredError''R2Score''SpearmanCorrelation' |
| testData | Test data input. | MLTableJobInput |
| testDataSize | The fraction of test dataset that needs to be set aside for validation purpose.Values between (0.0 , 1.0)Applied when validation dataset is not provided. | int |
| trainingSettings | Inputs for training phase for an AutoML Job. | RegressionTrainingSettings |
| validationData | Validation data inputs. | MLTableJobInput |
| validationDataSize | The fraction of training dataset that needs to be set aside for validation purpose.Values between (0.0 , 1.0)Applied when validation dataset is not provided. | int |
| weightColumnName | The name of the sample weight column. Automated ML supports a weighted column as an input, causing rows in the data to be weighted up or down. | string |


### RegressionTrainingSettings

| Name | Description | Value |
|-|-|-|
| allowedTrainingAlgorithms | Allowed models for regression task. | String array containing any of:'DecisionTree''ElasticNet''ExtremeRandomTrees''GradientBoosting''KNN''LassoLars''LightGBM''RandomForest''SGD''XGBoostRegressor' |
| blockedTrainingAlgorithms | Blocked models for regression task. | String array containing any of:'DecisionTree''ElasticNet''ExtremeRandomTrees''GradientBoosting''KNN''LassoLars''LightGBM''RandomForest''SGD''XGBoostRegressor' |
| enableDnnTraining | Enable recommendation of DNN models. | bool |
| enableModelExplainability | Flag to turn on explainability on best model. | bool |
| enableOnnxCompatibleModels | Flag for enabling onnx compatible models. | bool |
| enableStackEnsemble | Enable stack ensemble run. | bool |
| enableVoteEnsemble | Enable voting ensemble run. | bool |
| ensembleModelDownloadTimeout | During VotingEnsemble and StackEnsemble model generation, multiple fitted models from the previous child runs are downloaded.Configure this parameter with a higher value than 300 secs, if more time is needed. | string |
| stackEnsembleSettings | Stack ensemble settings for stack ensemble run. | StackEnsembleSettings |


### TextClassification

| Name | Description | Value |
|-|-|-|
| taskType | [Required] Task type for AutoMLJob. | 'TextClassification' (required) |
| featurizationSettings | Featurization inputs needed for AutoML job. | NlpVerticalFeaturizationSettings |
| limitSettings | Execution constraints for AutoMLJob. | NlpVerticalLimitSettings |
| primaryMetric | Primary metric for Text-Classification task. | 'AUCWeighted''Accuracy''AveragePrecisionScoreWeighted''NormMacroRecall''PrecisionScoreWeighted' |
| validationData | Validation data inputs. | MLTableJobInput |


### NlpVerticalFeaturizationSettings

| Name | Description | Value |
|-|-|-|
| datasetLanguage | Dataset language, useful for the text data. | string |


### NlpVerticalLimitSettings

| Name | Description | Value |
|-|-|-|
| maxConcurrentTrials | Maximum Concurrent AutoML iterations. | int |
| maxTrials | Number of AutoML iterations. | int |
| timeout | AutoML job timeout. | string |


### TextClassificationMultilabel

| Name | Description | Value |
|-|-|-|
| taskType | [Required] Task type for AutoMLJob. | 'TextClassificationMultilabel' (required) |
| featurizationSettings | Featurization inputs needed for AutoML job. | NlpVerticalFeaturizationSettings |
| limitSettings | Execution constraints for AutoMLJob. | NlpVerticalLimitSettings |
| validationData | Validation data inputs. | MLTableJobInput |


### TextNer

| Name | Description | Value |
|-|-|-|
| taskType | [Required] Task type for AutoMLJob. | 'TextNER' (required) |
| featurizationSettings | Featurization inputs needed for AutoML job. | NlpVerticalFeaturizationSettings |
| limitSettings | Execution constraints for AutoMLJob. | NlpVerticalLimitSettings |
| validationData | Validation data inputs. | MLTableJobInput |


### CommandJob

| Name | Description | Value |
|-|-|-|
| jobType | [Required] Specifies the type of job. | 'Command' (required) |
| codeId | ARM resource ID of the code asset. | string |
| command | [Required] The command to execute on startup of the job. eg. "python train.py" | string (required)Constraints:Min length = 1Pattern =[a-zA-Z0-9_] |
| distribution | Distribution configuration of the job. If set, this should be one of Mpi, Tensorflow, PyTorch, or null. | DistributionConfiguration |
| environmentId | [Required] The ARM resource ID of the Environment specification for the job. | string (required)Constraints:Min length = 1Pattern =[a-zA-Z0-9_] |
| environmentVariables | Environment variables included in the job. | CommandJobEnvironmentVariables |
| inputs | Mapping of input data bindings used in the job. | CommandJobInputs |
| limits | Command Job limit. | CommandJobLimits |
| outputs | Mapping of output data bindings used in the job. | CommandJobOutputs |
| queueSettings | Queue settings for the job | QueueSettings |
| resources | Compute Resource configuration for the job. | JobResourceConfiguration |


### DistributionConfiguration

| Name | Description | Value |
|-|-|-|
| distributionType | Set the object type | MpiPyTorchTensorFlow(required) |


### Mpi

| Name | Description | Value |
|-|-|-|
| distributionType | [Required] Specifies the type of distribution framework. | 'Mpi' (required) |
| processCountPerInstance | Number of processes per MPI node. | int |


### PyTorch

| Name | Description | Value |
|-|-|-|
| distributionType | [Required] Specifies the type of distribution framework. | 'PyTorch' (required) |
| processCountPerInstance | Number of processes per node. | int |


### TensorFlow

| Name | Description | Value |
|-|-|-|
| distributionType | [Required] Specifies the type of distribution framework. | 'TensorFlow' (required) |
| parameterServerCount | Number of parameter server tasks. | int |
| workerCount | Number of workers. If not specified, will default to the instance count. | int |


### CommandJobEnvironmentVariables

| Name | Description | Value |
|-|-|-|
| {customized property} |  | string |


### CommandJobInputs

| Name | Description | Value |
|-|-|-|
| {customized property} |  | JobInput |


### JobInput

| Name | Description | Value |
|-|-|-|
| description | Description for the input. | string |
| jobInputType | Set the object type | custom_modelliteralmlflow_modelmltabletriton_modeluri_fileuri_folder(required) |


### CustomModelJobInput

| Name | Description | Value |
|-|-|-|
| jobInputType | [Required] Specifies the type of job. | 'custom_model' (required) |
| mode | Input Asset Delivery Mode. | 'Direct''Download''EvalDownload''EvalMount''ReadOnlyMount''ReadWriteMount' |
| uri | [Required] Input Asset URI. | string (required)Constraints:Min length = 1Pattern =[a-zA-Z0-9_] |


### LiteralJobInput

| Name | Description | Value |
|-|-|-|
| jobInputType | [Required] Specifies the type of job. | 'literal' (required) |
| value | [Required] Literal value for the input. | string (required)Constraints:Min length = 1Pattern =[a-zA-Z0-9_] |


### TritonModelJobInput

| Name | Description | Value |
|-|-|-|
| jobInputType | [Required] Specifies the type of job. | 'triton_model' (required) |
| mode | Input Asset Delivery Mode. | 'Direct''Download''EvalDownload''EvalMount''ReadOnlyMount''ReadWriteMount' |
| uri | [Required] Input Asset URI. | string (required)Constraints:Min length = 1Pattern =[a-zA-Z0-9_] |


### UriFileJobInput

| Name | Description | Value |
|-|-|-|
| jobInputType | [Required] Specifies the type of job. | 'uri_file' (required) |
| mode | Input Asset Delivery Mode. | 'Direct''Download''EvalDownload''EvalMount''ReadOnlyMount''ReadWriteMount' |
| uri | [Required] Input Asset URI. | string (required)Constraints:Min length = 1Pattern =[a-zA-Z0-9_] |


### UriFolderJobInput

| Name | Description | Value |
|-|-|-|
| jobInputType | [Required] Specifies the type of job. | 'uri_folder' (required) |
| mode | Input Asset Delivery Mode. | 'Direct''Download''EvalDownload''EvalMount''ReadOnlyMount''ReadWriteMount' |
| uri | [Required] Input Asset URI. | string (required)Constraints:Min length = 1Pattern =[a-zA-Z0-9_] |


### CommandJobLimits

| Name | Description | Value |
|-|-|-|
| jobLimitsType | [Required] JobLimit type. | 'Command''Sweep' (required) |
| timeout | The max run duration in ISO 8601 format, after which the job will be cancelled. Only supports duration with precision as low as Seconds. | string |


### CommandJobOutputs

| Name | Description | Value |
|-|-|-|
| {customized property} |  | JobOutput |


### PipelineJob

| Name | Description | Value |
|-|-|-|
| jobType | [Required] Specifies the type of job. | 'Pipeline' (required) |
| inputs | Inputs for the pipeline job. | PipelineJobInputs |
| jobs | Jobs construct the Pipeline Job. | PipelineJobJobs |
| outputs | Outputs for the pipeline job | PipelineJobOutputs |
| settings | Pipeline settings, for things like ContinueRunOnStepFailure etc. | For Bicep, you can use theany()function. |
| sourceJobId | ARM resource ID of source job. | string |


### PipelineJobInputs

| Name | Description | Value |
|-|-|-|
| {customized property} |  | JobInput |


### PipelineJobJobs

| Name | Description | Value |
|-|-|-|
| {customized property} |  | For Bicep, you can use theany()function. |


### PipelineJobOutputs

| Name | Description | Value |
|-|-|-|
| {customized property} |  | JobOutput |


### SweepJob

| Name | Description | Value |
|-|-|-|
| jobType | [Required] Specifies the type of job. | 'Sweep' (required) |
| earlyTermination | Early termination policies enable canceling poor-performing runs before they complete | EarlyTerminationPolicy |
| inputs | Mapping of input data bindings used in the job. | SweepJobInputs |
| limits | Sweep Job limit. | SweepJobLimits |
| objective | [Required] Optimization objective. | Objective(required) |
| outputs | Mapping of output data bindings used in the job. | SweepJobOutputs |
| queueSettings | Queue settings for the job | QueueSettings |
| samplingAlgorithm | [Required] The hyperparameter sampling algorithm | SamplingAlgorithm(required) |
| searchSpace | [Required] A dictionary containing each parameter and its distribution. The dictionary key is the name of the parameter | For Bicep, you can use theany()function.(required) |
| trial | [Required] Trial component definition. | TrialComponent(required) |


### SweepJobInputs

| Name | Description | Value |
|-|-|-|
| {customized property} |  | JobInput |


### SweepJobLimits

| Name | Description | Value |
|-|-|-|
| jobLimitsType | [Required] JobLimit type. | 'Command''Sweep' (required) |
| maxConcurrentTrials | Sweep Job max concurrent trials. | int |
| maxTotalTrials | Sweep Job max total trials. | int |
| timeout | The max run duration in ISO 8601 format, after which the job will be cancelled. Only supports duration with precision as low as Seconds. | string |
| trialTimeout | Sweep Job Trial timeout value. | string |


### Objective

| Name | Description | Value |
|-|-|-|
| goal | [Required] Defines supported metric goals for hyperparameter tuning | 'Maximize''Minimize' (required) |
| primaryMetric | [Required] Name of the metric to optimize. | string (required)Constraints:Min length = 1Pattern =[a-zA-Z0-9_] |


### SweepJobOutputs

| Name | Description | Value |
|-|-|-|
| {customized property} |  | JobOutput |


### SamplingAlgorithm

| Name | Description | Value |
|-|-|-|
| samplingAlgorithmType | Set the object type | BayesianGridRandom(required) |


### BayesianSamplingAlgorithm

| Name | Description | Value |
|-|-|-|
| samplingAlgorithmType | [Required] The algorithm used for generating hyperparameter values, along with configuration properties | 'Bayesian' (required) |


### GridSamplingAlgorithm

| Name | Description | Value |
|-|-|-|
| samplingAlgorithmType | [Required] The algorithm used for generating hyperparameter values, along with configuration properties | 'Grid' (required) |


### RandomSamplingAlgorithm

| Name | Description | Value |
|-|-|-|
| samplingAlgorithmType | [Required] The algorithm used for generating hyperparameter values, along with configuration properties | 'Random' (required) |
| rule | The specific type of random algorithm | 'Random''Sobol' |
| seed | An optional integer to use as the seed for random number generation | int |


### TrialComponent

| Name | Description | Value |
|-|-|-|
| codeId | ARM resource ID of the code asset. | string |
| command | [Required] The command to execute on startup of the job. eg. "python train.py" | string (required)Constraints:Min length = 1Pattern =[a-zA-Z0-9_] |
| distribution | Distribution configuration of the job. If set, this should be one of Mpi, Tensorflow, PyTorch, or null. | DistributionConfiguration |
| environmentId | [Required] The ARM resource ID of the Environment specification for the job. | string (required)Constraints:Min length = 1Pattern =[a-zA-Z0-9_] |
| environmentVariables | Environment variables included in the job. | TrialComponentEnvironmentVariables |
| resources | Compute Resource configuration for the job. | JobResourceConfiguration |


### TrialComponentEnvironmentVariables

| Name | Description | Value |
|-|-|-|
| {customized property} |  | string |


### CreateMonitorAction

| Name | Description | Value |
|-|-|-|
| actionType | [Required] Specifies the action type of the schedule | 'CreateMonitor' (required) |
| monitorDefinition | [Required] Defines the monitor. | MonitorDefinition(required) |


### MonitorDefinition

| Name | Description | Value |
|-|-|-|
| alertNotificationSettings | The monitor's notification settings. | MonitorNotificationSettings |
| computeConfiguration | [Required] The ARM resource ID of the compute resource to run the monitoring job on. | MonitorComputeConfigurationBase(required) |
| monitoringTarget | The entities targeted by the monitor. | MonitoringTarget |
| signals | [Required] The signals to monitor. | MonitorDefinitionSignals(required) |


### MonitorNotificationSettings

| Name | Description | Value |
|-|-|-|
| emailNotificationSettings | The AML notification email settings. | MonitorEmailNotificationSettings |


### MonitorEmailNotificationSettings

| Name | Description | Value |
|-|-|-|
| emails | The email recipient list which has a limitation of 499 characters in total. | string[] |


### MonitorComputeConfigurationBase

| Name | Description | Value |
|-|-|-|
| computeType | Set the object type | ServerlessSpark(required) |


### MonitorServerlessSparkCompute

| Name | Description | Value |
|-|-|-|
| computeType | [Required] Specifies the type of signal to monitor. | 'ServerlessSpark' (required) |
| computeIdentity | [Required] The identity scheme leveraged to by the spark jobs running on serverless Spark. | MonitorComputeIdentityBase(required) |
| instanceType | [Required] The instance type running the Spark job. | string (required)Constraints:Min length = 1Pattern =[a-zA-Z0-9_] |
| runtimeVersion | [Required] The Spark runtime version. | string (required)Constraints:Min length = 1Pattern =^[0-9]+\.[0-9]+$ |


### MonitorComputeIdentityBase

| Name | Description | Value |
|-|-|-|
| computeIdentityType | Set the object type | AmlTokenManagedIdentity(required) |


### AmlTokenComputeIdentity

| Name | Description | Value |
|-|-|-|
| computeIdentityType | [Required] Specifies the type of identity to use within the monitoring jobs. | 'AmlToken' (required) |


### ManagedComputeIdentity

| Name | Description | Value |
|-|-|-|
| computeIdentityType | [Required] Specifies the type of identity to use within the monitoring jobs. | 'ManagedIdentity' (required) |
| identity | The identity which will be leveraged by the monitoring jobs. | ManagedServiceIdentity |


### ManagedServiceIdentity

| Name | Description | Value |
|-|-|-|
| type | Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed). | 'None''SystemAssigned''SystemAssigned,UserAssigned''UserAssigned' (required) |
| userAssignedIdentities | The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests. | UserAssignedIdentities |


### UserAssignedIdentities

| Name | Description | Value |
|-|-|-|
| {customized property} |  | UserAssignedIdentity |


### MonitoringTarget

| Name | Description | Value |
|-|-|-|
| deploymentId | Reference to the deployment asset targeted by this monitor. | string |
| modelId | Reference to the model asset targeted by this monitor. | string |
| taskType | [Required] The machine learning task type of the monitored model. | 'Classification''Regression' (required) |


### MonitorDefinitionSignals

| Name | Description | Value |
|-|-|-|
| {customized property} |  | MonitoringSignalBase |


### MonitoringSignalBase

| Name | Description | Value |
|-|-|-|
| notificationTypes | The current notification mode for this signal. | String array containing any of:'AmlNotification' |
| properties | Property dictionary. Properties can be added, but not removed or altered. | MonitoringSignalBaseProperties |
| signalType | Set the object type | CustomDataDriftDataQualityFeatureAttributionDriftPredictionDrift(required) |


### MonitoringSignalBaseProperties

| Name | Description | Value |
|-|-|-|
| {customized property} |  | string |


### CustomMonitoringSignal

| Name | Description | Value |
|-|-|-|
| signalType | [Required] Specifies the type of signal to monitor. | 'Custom' (required) |
| componentId | [Required] Reference to the component asset used to calculate the custom metrics. | string (required)Constraints:Min length = 1Pattern =[a-zA-Z0-9_] |
| inputAssets | Monitoring assets to take as input. Key is the component input port name, value is the data asset. | CustomMonitoringSignalInputAssets |
| inputs | Extra component parameters to take as input. Key is the component literal input port name, value is the parameter value. | CustomMonitoringSignalInputs |
| metricThresholds | [Required] A list of metrics to calculate and their associated thresholds. | CustomMetricThreshold[] (required) |


### CustomMonitoringSignalInputAssets

| Name | Description | Value |
|-|-|-|
| {customized property} |  | MonitoringInputDataBase |


### MonitoringInputDataBase

| Name | Description | Value |
|-|-|-|
| columns | Mapping of column names to special uses. | MonitoringInputDataBaseColumns |
| dataContext | The context metadata of the data source. | string |
| jobInputType | [Required] Specifies the type of job. | 'custom_model''literal''mlflow_model''mltable''triton_model''uri_file''uri_folder' (required) |
| uri | [Required] Input Asset URI. | string (required)Constraints:Min length = 1Pattern =[a-zA-Z0-9_] |
| inputDataType | Set the object type | FixedRollingStatic(required) |


### MonitoringInputDataBaseColumns

| Name | Description | Value |
|-|-|-|
| {customized property} |  | string |


### FixedInputData

| Name | Description | Value |
|-|-|-|
| inputDataType | [Required] Specifies the type of signal to monitor. | 'Fixed' (required) |


### RollingInputData

| Name | Description | Value |
|-|-|-|
| inputDataType | [Required] Specifies the type of signal to monitor. | 'Rolling' (required) |
| preprocessingComponentId | Reference to the component asset used to preprocess the data. | string |
| windowOffset | [Required] The time offset between the end of the data window and the monitor's current run time. | string (required) |
| windowSize | [Required] The size of the rolling data window. | string (required) |


### StaticInputData

| Name | Description | Value |
|-|-|-|
| inputDataType | [Required] Specifies the type of signal to monitor. | 'Static' (required) |
| preprocessingComponentId | Reference to the component asset used to preprocess the data. | string |
| windowEnd | [Required] The end date of the data window. | string (required) |
| windowStart | [Required] The start date of the data window. | string (required) |


### CustomMonitoringSignalInputs

| Name | Description | Value |
|-|-|-|
| {customized property} |  | JobInput |


### CustomMetricThreshold

| Name | Description | Value |
|-|-|-|
| metric | [Required] The user-defined metric to calculate. | string (required)Constraints:Min length = 1Pattern =[a-zA-Z0-9_] |
| threshold | The threshold value. If null, a default value will be set depending on the selected metric. | MonitoringThreshold |


### MonitoringThreshold

| Name | Description | Value |
|-|-|-|
| value | The threshold value. If null, the set default is dependent on the metric type. | int |


### DataDriftMonitoringSignal

| Name | Description | Value |
|-|-|-|
| signalType | [Required] Specifies the type of signal to monitor. | 'DataDrift' (required) |
| featureDataTypeOverride | A dictionary that maps feature names to their respective data types. | DataDriftMonitoringSignalFeatureDataTypeOverride |
| featureImportanceSettings | The settings for computing feature importance. | FeatureImportanceSettings |
| features | The feature filter which identifies which feature to calculate drift over. | MonitoringFeatureFilterBase |
| metricThresholds | [Required] A list of metrics to calculate and their associated thresholds. | DataDriftMetricThresholdBase[] (required) |
| productionData | [Required] The data which drift will be calculated for. | MonitoringInputDataBase(required) |
| referenceData | [Required] The data to calculate drift against. | MonitoringInputDataBase(required) |


### DataDriftMonitoringSignalFeatureDataTypeOverride

| Name | Description | Value |
|-|-|-|
| {customized property} |  | 'Categorical''Numerical' |


### FeatureImportanceSettings

| Name | Description | Value |
|-|-|-|
| mode | The mode of operation for computing feature importance. | 'Disabled''Enabled' |
| targetColumn | The name of the target column within the input data asset. | string |


### MonitoringFeatureFilterBase

| Name | Description | Value |
|-|-|-|
| filterType | Set the object type | AllFeaturesFeatureSubsetTopNByAttribution(required) |


### AllFeatures

| Name | Description | Value |
|-|-|-|
| filterType | [Required] Specifies the feature filter to leverage when selecting features to calculate metrics over. | 'AllFeatures' (required) |


### FeatureSubset

| Name | Description | Value |
|-|-|-|
| filterType | [Required] Specifies the feature filter to leverage when selecting features to calculate metrics over. | 'FeatureSubset' (required) |
| features | [Required] The list of features to include. | string[] (required) |


### TopNFeaturesByAttribution

| Name | Description | Value |
|-|-|-|
| filterType | [Required] Specifies the feature filter to leverage when selecting features to calculate metrics over. | 'TopNByAttribution' (required) |
| top | The number of top features to include. | int |


### DataDriftMetricThresholdBase

| Name | Description | Value |
|-|-|-|
| threshold | The threshold value. If null, a default value will be set depending on the selected metric. | MonitoringThreshold |
| dataType | Set the object type | CategoricalNumerical(required) |


### CategoricalDataDriftMetricThreshold

| Name | Description | Value |
|-|-|-|
| dataType | [Required] Specifies the data type of the metric threshold. | 'Categorical' (required) |
| metric | [Required] The categorical data drift metric to calculate. | 'JensenShannonDistance''PearsonsChiSquaredTest''PopulationStabilityIndex' (required) |


### NumericalDataDriftMetricThreshold

| Name | Description | Value |
|-|-|-|
| dataType | [Required] Specifies the data type of the metric threshold. | 'Numerical' (required) |
| metric | [Required] The numerical data drift metric to calculate. | 'JensenShannonDistance''NormalizedWassersteinDistance''PopulationStabilityIndex''TwoSampleKolmogorovSmirnovTest' (required) |


### DataQualityMonitoringSignal

| Name | Description | Value |
|-|-|-|
| signalType | [Required] Specifies the type of signal to monitor. | 'DataQuality' (required) |
| featureDataTypeOverride | A dictionary that maps feature names to their respective data types. | DataQualityMonitoringSignalFeatureDataTypeOverride |
| featureImportanceSettings | The settings for computing feature importance. | FeatureImportanceSettings |
| features | The features to calculate drift over. | MonitoringFeatureFilterBase |
| metricThresholds | [Required] A list of metrics to calculate and their associated thresholds. | DataQualityMetricThresholdBase[] (required) |
| productionData | [Required] The data produced by the production service which drift will be calculated for. | MonitoringInputDataBase(required) |
| referenceData | [Required] The data to calculate drift against. | MonitoringInputDataBase(required) |


### DataQualityMonitoringSignalFeatureDataTypeOverride

| Name | Description | Value |
|-|-|-|
| {customized property} |  | 'Categorical''Numerical' |


### DataQualityMetricThresholdBase

| Name | Description | Value |
|-|-|-|
| threshold | The threshold value. If null, a default value will be set depending on the selected metric. | MonitoringThreshold |
| dataType | Set the object type | CategoricalNumerical(required) |


### CategoricalDataQualityMetricThreshold

| Name | Description | Value |
|-|-|-|
| dataType | [Required] Specifies the data type of the metric threshold. | 'Categorical' (required) |
| metric | [Required] The categorical data quality metric to calculate. | 'DataTypeErrorRate''NullValueRate''OutOfBoundsRate' (required) |


### NumericalDataQualityMetricThreshold

| Name | Description | Value |
|-|-|-|
| dataType | [Required] Specifies the data type of the metric threshold. | 'Numerical' (required) |
| metric | [Required] The numerical data quality metric to calculate. | 'DataTypeErrorRate''NullValueRate''OutOfBoundsRate' (required) |


### FeatureAttributionDriftMonitoringSignal

| Name | Description | Value |
|-|-|-|
| signalType | [Required] Specifies the type of signal to monitor. | 'FeatureAttributionDrift' (required) |
| featureDataTypeOverride | A dictionary that maps feature names to their respective data types. | FeatureAttributionDriftMonitoringSignalFeatureDataTy... |
| featureImportanceSettings | [Required] The settings for computing feature importance. | FeatureImportanceSettings(required) |
| metricThreshold | [Required] A list of metrics to calculate and their associated thresholds. | FeatureAttributionMetricThreshold(required) |
| productionData | [Required] The data which drift will be calculated for. | MonitoringInputDataBase[] (required) |
| referenceData | [Required] The data to calculate drift against. | MonitoringInputDataBase(required) |


### FeatureAttributionDriftMonitoringSignalFeatureDataTy...

| Name | Description | Value |
|-|-|-|
| {customized property} |  | 'Categorical''Numerical' |


### FeatureAttributionMetricThreshold

| Name | Description | Value |
|-|-|-|
| metric | [Required] The feature attribution metric to calculate. | 'NormalizedDiscountedCumulativeGain' (required) |
| threshold | The threshold value. If null, a default value will be set depending on the selected metric. | MonitoringThreshold |


### PredictionDriftMonitoringSignal

| Name | Description | Value |
|-|-|-|
| signalType | [Required] Specifies the type of signal to monitor. | 'PredictionDrift' (required) |
| featureDataTypeOverride | A dictionary that maps feature names to their respective data types. | PredictionDriftMonitoringSignalFeatureDataTypeOverri... |
| metricThresholds | [Required] A list of metrics to calculate and their associated thresholds. | PredictionDriftMetricThresholdBase[] (required) |
| productionData | [Required] The data which drift will be calculated for. | MonitoringInputDataBase(required) |
| referenceData | [Required] The data to calculate drift against. | MonitoringInputDataBase(required) |


### PredictionDriftMonitoringSignalFeatureDataTypeOverri...

| Name | Description | Value |
|-|-|-|
| {customized property} |  | 'Categorical''Numerical' |


### PredictionDriftMetricThresholdBase

| Name | Description | Value |
|-|-|-|
| threshold | The threshold value. If null, a default value will be set depending on the selected metric. | MonitoringThreshold |
| dataType | Set the object type | CategoricalNumerical(required) |


### CategoricalPredictionDriftMetricThreshold

| Name | Description | Value |
|-|-|-|
| dataType | [Required] Specifies the data type of the metric threshold. | 'Categorical' (required) |
| metric | [Required] The categorical prediction drift metric to calculate. | 'JensenShannonDistance''PearsonsChiSquaredTest''PopulationStabilityIndex' (required) |


### NumericalPredictionDriftMetricThreshold

| Name | Description | Value |
|-|-|-|
| dataType | [Required] Specifies the data type of the metric threshold. | 'Numerical' (required) |
| metric | [Required] The numerical prediction drift metric to calculate. | 'JensenShannonDistance''NormalizedWassersteinDistance''PopulationStabilityIndex''TwoSampleKolmogorovSmirnovTest' (required) |


### EndpointScheduleAction

| Name | Description | Value |
|-|-|-|
| actionType | [Required] Specifies the action type of the schedule | 'InvokeBatchEndpoint' (required) |
| endpointInvocationDefinition | [Required] Defines Schedule action definition details.{see href="TBD" /} | For Bicep, you can use theany()function.(required) |


### TriggerBase

| Name | Description | Value |
|-|-|-|
| endTime | Specifies end time of schedule in ISO 8601, but without a UTC offset. Referhttps://en.wikipedia.org/wiki/ISO_8601.Recommented format would be "2022-06-01T00:00:01"If not present, the schedule will run indefinitely | string |
| startTime | Specifies start time of schedule in ISO 8601 format, but without a UTC offset. | string |
| timeZone | Specifies time zone in which the schedule runs.TimeZone should follow Windows time zone format. Refer:https://docs.microsoft.com/windows-hardware/manufacture/desktop/default-time-zones/> | string |
| triggerType | Set the object type | CronRecurrence(required) |


### CronTrigger

| Name | Description | Value |
|-|-|-|
| triggerType | [Required] | 'Cron' (required) |
| expression | [Required] Specifies cron expression of schedule.The expression should follow NCronTab format. | string (required)Constraints:Min length = 1Pattern =[a-zA-Z0-9_] |


### RecurrenceTrigger

| Name | Description | Value |
|-|-|-|
| endTime | Specifies end time of schedule in ISO 8601, but without a UTC offset. Referhttps://en.wikipedia.org/wiki/ISO_8601.Recommented format would be "2022-06-01T00:00:01"If not present, the schedule will run indefinitely | string |
| frequency | [Required] The frequency to trigger schedule. | 'Day''Hour''Minute''Month''Week' (required) |
| interval | [Required] Specifies schedule interval in conjunction with frequency | int (required) |
| schedule | The recurrence schedule. | RecurrenceSchedule |
| startTime | Specifies start time of schedule in ISO 8601 format, but without a UTC offset. | string |
| timeZone | Specifies time zone in which the schedule runs.TimeZone should follow Windows time zone format. Refer:https://docs.microsoft.com/windows-hardware/manufacture/desktop/default-time-zones | string |
| triggerType | [Required] | 'Cron''Recurrence' (required) |


### RecurrenceSchedule

| Name | Description | Value |
|-|-|-|
| hours | [Required] List of hours for the schedule. | int[] (required) |
| minutes | [Required] List of minutes for the schedule. | int[] (required) |
| monthDays | List of month days for the schedule | int[] |
| weekDays | List of days for the schedule. | String array containing any of:'Friday''Monday''Saturday''Sunday''Thursday''Tuesday''Wednesday' |
## Microsoft.MachineLearningServices/workspaces/serverlessEndpoints@2023-08-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.MachineLearningServices/workspaces/serverlessEndpoints@2023-08-01-preview"
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
      authMode = "string"
      capacityReservation = {
        capacityReservationGroupId = "string"
        endpointReservedCapacity = int
      }
      offer = {
        offerName = "string"
        publisher = "string"
      }
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

### workspaces/serverlessEndpoints

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| sku | Sku details required for ARM contract for Autoscaling. | Sku |
| kind | Metadata used by portal/tooling/etc to render different UX experiences for resources of the same type. | string |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:workspaces |
| identity | Managed service identity (system assigned and/or user assigned identities) | ManagedServiceIdentity |
| properties | [Required] Additional attributes of the entity. | ServerlessEndpointProperties(required) |


### ManagedServiceIdentity

| Name | Description | Value |
|-|-|-|
| type | Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed). | 'None''SystemAssigned''SystemAssigned,UserAssigned''UserAssigned' (required) |
| userAssignedIdentities | The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests. | UserAssignedIdentities |


### UserAssignedIdentities

| Name | Description | Value |
|-|-|-|
| {customized property} |  | UserAssignedIdentity |


### ServerlessEndpointProperties

| Name | Description | Value |
|-|-|-|
| authMode | Specifies the authentication mode for the Serverless endpoint. | 'AAD''Key' |
| capacityReservation | Optional capacity reservation information for the endpoint. When specified, the Serverless Endpointwill be allocated capacity from the specified capacity reservation group. | ServerlessEndpointCapacityReservation |
| offer | [Required] The publisher-defined Serverless Offer to provision the endpoint with. | ServerlessOffer(required) |


### ServerlessEndpointCapacityReservation

| Name | Description | Value |
|-|-|-|
| capacityReservationGroupId | [Required] Specifies a capacity reservation group ID to allocate capacity from. | string (required)Constraints:Min length = 1Pattern =[a-zA-Z0-9_] |
| endpointReservedCapacity | Specifies a capacity amount to reserve for this endpoint within the parent capacity reservation group. | int |


### ServerlessOffer

| Name | Description | Value |
|-|-|-|
| offerName | [Required] The name of the Serverless Offer | string (required)Constraints:Min length = 1Pattern =[a-zA-Z0-9_] |
| publisher | [Required] Publisher name of the Serverless Offer | string (required)Constraints:Min length = 1Pattern =[a-zA-Z0-9_] |


### Sku

| Name | Description | Value |
|-|-|-|
| capacity | If the SKU supports scale out/in then the capacity integer should be included. If scale out/in is not possible for the resource this may be omitted. | int |
| family | If the service has different generations of hardware, for the same SKU, then that can be captured here. | string |
| name | The name of the SKU. Ex - P3. It is typically a letter+number code | string (required) |
| size | The SKU size. When the name field is the combination of tier and some other value, this would be the standalone code. | string |
| tier | This field is required to be implemented by the Resource Provider if the service has more than one tier, but is not required on a PUT. | 'Basic''Free''Premium''Standard' |
## Microsoft.MachineLearningServices/workspaces/services@2021-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.MachineLearningServices/workspaces/services@2021-04-01"
  name = "string"
  location = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      {customized property} = "string"
    }
    computeType = "string"
    // For remaining properties, see workspaces/services objects
    description = "string"
    environmentImageRequest = {
      assets = [
        {
          id = "string"
          mimeType = "string"
          unpack = bool
          url = "string"
        }
      ]
      driverProgram = "string"
      environment = {
        docker = {
          baseDockerfile = "string"
          baseImage = "string"
          baseImageRegistry = {
            address = "string"
            password = "string"
            username = "string"
          }
        }
        environmentVariables = {
          {customized property} = "string"
        }
        inferencingStackVersion = "string"
        name = "string"
        python = {
          baseCondaEnvironment = "string"
          interpreterPath = "string"
          userManagedDependencies = bool
        }
        r = {
          bioConductorPackages = [
            "string"
          ]
          cranPackages = [
            {
              name = "string"
              repository = "string"
            }
          ]
          customUrlPackages = [
            "string"
          ]
          gitHubPackages = [
            {
              authToken = "string"
              repository = "string"
            }
          ]
          rscriptPath = "string"
          rVersion = "string"
          snapshotDate = "string"
          userManaged = bool
        }
        spark = {
          packages = [
            {
              artifact = "string"
              group = "string"
              version = "string"
            }
          ]
          precachePackages = bool
          repositories = [
            "string"
          ]
        }
        version = "string"
      }
      environmentReference = {
        name = "string"
        version = "string"
      }
      modelIds = [
        "string"
      ]
      models = [
        {
          createdTime = "string"
          datasets = [
            {
              id = "string"
              name = "string"
            }
          ]
          derivedModelIds = [
            "string"
          ]
          description = "string"
          experimentName = "string"
          framework = "string"
          frameworkVersion = "string"
          id = "string"
          kvTags = {
            {customized property} = "string"
          }
          mimeType = "string"
          modifiedTime = "string"
          name = "string"
          parentModelId = "string"
          properties = {
            {customized property} = "string"
          }
          resourceRequirements = {
            cpu = int
            cpuLimit = int
            fpga = int
            gpu = int
            memoryInGB = int
            memoryInGBLimit = int
          }
          runId = "string"
          sampleInputData = "string"
          sampleOutputData = "string"
          unpack = bool
          url = "string"
          version = int
        }
      ]
    }
    keys = {
      primaryKey = "string"
      secondaryKey = "string"
    }
    kvTags = {
      {customized property} = "string"
    }
  })
}

```

### workspaces/services

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | The name of the Azure location/region. | string |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:workspaces |
| description | The description of the service. | string |
| environmentImageRequest | The Environment, models and assets needed for inferencing. | CreateServiceRequestEnvironmentImageRequest |
| keys | The authentication keys. | CreateServiceRequestKeys |
| kvTags | The service tag dictionary. Tags are mutable. | CreateServiceRequestKvTags |
| properties | The service properties dictionary. Properties are immutable. | CreateServiceRequestProperties |
| computeType | Set the object type | ACIAKS(required) |


### ACIServiceCreateRequest

| Name | Description | Value |
|-|-|-|
| computeType | The compute environment type for the service. | 'ACI' (required) |
| appInsightsEnabled | Whether or not Application Insights is enabled. | bool |
| authEnabled | Whether or not authentication is enabled on the service. | bool |
| cname | The CName for the service. | string |
| containerResourceRequirements | The container resource requirements. | ContainerResourceRequirements |
| dataCollection | Details of the data collection options specified. | ACIServiceCreateRequestDataCollection |
| dnsNameLabel | The Dns label for the service. | string |
| encryptionProperties | The encryption properties. | ACIServiceCreateRequestEncryptionProperties |
| sslCertificate | The public SSL certificate in PEM format to use if SSL is enabled. | string |
| sslEnabled | Whether or not SSL is enabled. | bool |
| sslKey | The public SSL key in PEM format for the certificate. | string |
| vnetConfiguration | The virtual network configuration. | ACIServiceCreateRequestVnetConfiguration |


### ContainerResourceRequirements

| Name | Description | Value |
|-|-|-|
| cpu | The minimum amount of CPU cores to be used by the container. More info:https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/ | int |
| cpuLimit | The maximum amount of CPU cores allowed to be used by the container. More info:https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/ | int |
| fpga | The number of FPGA PCIE devices exposed to the container. Must be multiple of 2. | int |
| gpu | The number of GPU cores in the container. | int |
| memoryInGB | The minimum amount of memory (in GB) to be used by the container. More info:https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/ | int |
| memoryInGBLimit | The maximum amount of memory (in GB) allowed to be used by the container. More info:https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/ | int |


### ACIServiceCreateRequestDataCollection

| Name | Description | Value |
|-|-|-|
| eventHubEnabled | Option for enabling/disabling Event Hub. | bool |
| storageEnabled | Option for enabling/disabling storage. | bool |


### ACIServiceCreateRequestEncryptionProperties

| Name | Description | Value |
|-|-|-|
| keyName | Encryption Key name | string (required) |
| keyVersion | Encryption Key Version | string (required) |
| vaultBaseUrl | vault base Url | string (required) |


### ACIServiceCreateRequestVnetConfiguration

| Name | Description | Value |
|-|-|-|
| subnetName | The name of the virtual network subnet. | string |
| vnetName | The name of the virtual network. | string |


### AKSServiceCreateRequest

| Name | Description | Value |
|-|-|-|
| computeType | The compute environment type for the service. | 'AKS' (required) |
| aadAuthEnabled | Whether or not AAD authentication is enabled. | bool |
| appInsightsEnabled | Whether or not Application Insights is enabled. | bool |
| authEnabled | Whether or not authentication is enabled. | bool |
| autoScaler | The auto scaler properties. | AKSServiceCreateRequestAutoScaler |
| computeName | The name of the compute resource. | string |
| containerResourceRequirements | The container resource requirements. | ContainerResourceRequirements |
| dataCollection | Details of the data collection options specified. | AKSServiceCreateRequestDataCollection |
| isDefault | Is this the default variant. | bool |
| livenessProbeRequirements | The liveness probe requirements. | AKSServiceCreateRequestLivenessProbeRequirements |
| maxConcurrentRequestsPerContainer | The maximum number of concurrent requests per container. | int |
| maxQueueWaitMs | Maximum time a request will wait in the queue (in milliseconds). After this time, the service will return 503 (Service Unavailable) | int |
| namespace | Kubernetes namespace for the service. | string |
| numReplicas | The number of replicas on the cluster. | int |
| scoringTimeoutMs | The scoring timeout in milliseconds. | int |
| trafficPercentile | The amount of traffic variant receives. | int |
| type | The type of the variant. | 'Control''Treatment' |


### AKSServiceCreateRequestAutoScaler

| Name | Description | Value |
|-|-|-|
| autoscaleEnabled | Option to enable/disable auto scaling. | bool |
| maxReplicas | The maximum number of replicas in the cluster. | int |
| minReplicas | The minimum number of replicas to scale down to. | int |
| refreshPeriodInSeconds | The amount of seconds to wait between auto scale updates. | int |
| targetUtilization | The target utilization percentage to use for determining whether to scale the cluster. | int |


### AKSServiceCreateRequestDataCollection

| Name | Description | Value |
|-|-|-|
| eventHubEnabled | Option for enabling/disabling Event Hub. | bool |
| storageEnabled | Option for enabling/disabling storage. | bool |


### AKSServiceCreateRequestLivenessProbeRequirements

| Name | Description | Value |
|-|-|-|
| failureThreshold | The number of failures to allow before returning an unhealthy status. | int |
| initialDelaySeconds | The delay before the first probe in seconds. | int |
| periodSeconds | The length of time between probes in seconds. | int |
| successThreshold | The number of successful probes before returning a healthy status. | int |
| timeoutSeconds | The probe timeout in seconds. | int |


### CreateServiceRequestEnvironmentImageRequest

| Name | Description | Value |
|-|-|-|
| assets | The list of assets. | ImageAsset[] |
| driverProgram | The name of the driver file. | string |
| environment | The details of the AZURE ML environment. | EnvironmentImageRequestEnvironment |
| environmentReference | The unique identifying details of the AZURE ML environment. | EnvironmentImageRequestEnvironmentReference |
| modelIds | The list of model Ids. | string[] |
| models | The list of models. | Model[] |


### ImageAsset

| Name | Description | Value |
|-|-|-|
| id | The Asset Id. | string |
| mimeType | The mime type. | string |
| unpack | Whether the Asset is unpacked. | bool |
| url | The Url of the Asset. | string |


### EnvironmentImageRequestEnvironment

| Name | Description | Value |
|-|-|-|
| docker | The definition of a Docker container. | ModelEnvironmentDefinitionDocker |
| environmentVariables | Definition of environment variables to be defined in the environment. | ModelEnvironmentDefinitionEnvironmentVariables |
| inferencingStackVersion | The inferencing stack version added to the image. To avoid adding an inferencing stack, do not set this value. Valid values: "latest". | string |
| name | The name of the environment. | string |
| python | Settings for a Python environment. | ModelEnvironmentDefinitionPython |
| r | Settings for a R environment. | ModelEnvironmentDefinitionR |
| spark | The configuration for a Spark environment. | ModelEnvironmentDefinitionSpark |
| version | The environment version. | string |


### ModelEnvironmentDefinitionDocker

| Name | Description | Value |
|-|-|-|
| baseDockerfile | Base Dockerfile used for Docker-based runs. Mutually exclusive with BaseImage. | string |
| baseImage | Base image used for Docker-based runs. Mutually exclusive with BaseDockerfile. | string |
| baseImageRegistry | Image registry that contains the base image. | ModelDockerSectionBaseImageRegistry |


### ModelDockerSectionBaseImageRegistry

| Name | Description | Value |
|-|-|-|
| address |  | string |
| password |  | stringConstraints:Sensitive value. Pass in as a secure parameter. |
| username |  | stringConstraints:Sensitive value. Pass in as a secure parameter. |


### ModelEnvironmentDefinitionEnvironmentVariables

| Name | Description | Value |
|-|-|-|
| {customized property} |  | string |


### ModelEnvironmentDefinitionPython

| Name | Description | Value |
|-|-|-|
| baseCondaEnvironment |  | string |
| condaDependencies | A JObject containing Conda dependencies. | For Bicep, you can use theany()function. |
| interpreterPath | The python interpreter path to use if an environment build is not required. The path specified gets used to call the user script. | string |
| userManagedDependencies | True means that AzureML reuses an existing python environment; False means that AzureML will create a python environment based on the Conda dependencies specification. | bool |


### ModelEnvironmentDefinitionR

| Name | Description | Value |
|-|-|-|
| bioConductorPackages | The packages from Bioconductor. | string[] |
| cranPackages | The CRAN packages to use. | RCranPackage[] |
| customUrlPackages | The packages from custom urls. | string[] |
| gitHubPackages | The packages directly from GitHub. | RGitHubPackage[] |
| rscriptPath | The Rscript path to use if an environment build is not required.The path specified gets used to call the user script. | string |
| rVersion | The version of R to be installed | string |
| snapshotDate | Date of MRAN snapshot to use in YYYY-MM-DD format, e.g. "2019-04-17" | string |
| userManaged | Indicates whether the environment is managed by user or by AzureML. | bool |


### RCranPackage

| Name | Description | Value |
|-|-|-|
| name | The package name. | string |
| repository | The repository name. | string |


### RGitHubPackage

| Name | Description | Value |
|-|-|-|
| authToken | Personal access token to install from a private repo | stringConstraints:Sensitive value. Pass in as a secure parameter. |
| repository | Repository address in the format username/repo[/subdir][@ref,#pull]. | string |


### ModelEnvironmentDefinitionSpark

| Name | Description | Value |
|-|-|-|
| packages | The Spark packages to use. | SparkMavenPackage[] |
| precachePackages | Whether to precache the packages. | bool |
| repositories | The list of spark repositories. | string[] |


### SparkMavenPackage

| Name | Description | Value |
|-|-|-|
| artifact |  | string |
| group |  | string |
| version |  | string |


### EnvironmentImageRequestEnvironmentReference

| Name | Description | Value |
|-|-|-|
| name | Name of the environment. | string |
| version | Version of the environment. | string |


### Model

| Name | Description | Value |
|-|-|-|
| createdTime | The Model creation time (UTC). | string |
| datasets | The list of datasets associated with the model. | DatasetReference[] |
| derivedModelIds | Models derived from this model | string[] |
| description | The Model description text. | string |
| experimentName | The name of the experiment where this model was created. | string |
| framework | The Model framework. | string |
| frameworkVersion | The Model framework version. | string |
| id | The Model Id. | string |
| kvTags | The Model tag dictionary. Items are mutable. | ModelKvTags |
| mimeType | The MIME type of Model content. For more details about MIME type, please openhttps://www.iana.org/assignments/media-types/media-types.xhtml | string (required) |
| modifiedTime | The Model last modified time (UTC). | string |
| name | The Model name. | string (required) |
| parentModelId | The Parent Model Id. | string |
| properties | The Model property dictionary. Properties are immutable. | ModelProperties |
| resourceRequirements | Resource requirements for the model | ContainerResourceRequirements |
| runId | The RunId that created this model. | string |
| sampleInputData | Sample Input Data for the Model. A reference to a dataset in the workspace in the format aml://dataset/{datasetId} | string |
| sampleOutputData | Sample Output Data for the Model. A reference to a dataset in the workspace in the format aml://dataset/{datasetId} | string |
| unpack | Indicates whether we need to unpack the Model during docker Image creation. | bool |
| url | The URL of the Model. Usually a SAS URL. | string (required) |
| version | The Model version assigned by Model Management Service. | int |


### DatasetReference

| Name | Description | Value |
|-|-|-|
| id | The id of the dataset reference. | string |
| name | The name of the dataset reference. | string |


### ModelKvTags

| Name | Description | Value |
|-|-|-|
| {customized property} |  | string |


### ModelProperties

| Name | Description | Value |
|-|-|-|
| {customized property} |  | string |


### CreateServiceRequestKeys

| Name | Description | Value |
|-|-|-|
| primaryKey | The primary key. | string |
| secondaryKey | The secondary key. | string |


### CreateServiceRequestKvTags

| Name | Description | Value |
|-|-|-|
| {customized property} |  | string |


### CreateServiceRequestProperties

| Name | Description | Value |
|-|-|-|
| {customized property} |  | string |
