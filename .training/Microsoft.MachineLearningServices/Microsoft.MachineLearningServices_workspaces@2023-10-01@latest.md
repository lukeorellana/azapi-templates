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


