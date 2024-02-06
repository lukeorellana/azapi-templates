## Microsoft.Databricks/accessConnectors@2022-10-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Databricks/accessConnectors@2022-10-01-preview"
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
    properties = {}
  })
}

```

### accessConnectors

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| identity | Managed service identity (system assigned and/or user assigned identities) | ManagedServiceIdentity |
| properties | Azure Databricks accessConnector properties | AccessConnectorProperties |


### ManagedServiceIdentity

| Name | Description | Value |
|-|-|-|
| type | Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed). | 'None''SystemAssigned''SystemAssigned,UserAssigned''UserAssigned' (required) |
| userAssignedIdentities | The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests. | object |
## Microsoft.Databricks/workspaces@2023-02-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Databricks/workspaces@2023-02-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      authorizations = [
        {
          principalId = "string"
          roleDefinitionId = "string"
        }
      ]
      createdBy = {}
      encryption = {
        entities = {
          managedDisk = {
            keySource = "Microsoft.Keyvault"
            keyVaultProperties = {
              keyName = "string"
              keyVaultUri = "string"
              keyVersion = "string"
            }
            rotationToLatestKeyVersionEnabled = bool
          }
          managedServices = {
            keySource = "Microsoft.Keyvault"
            keyVaultProperties = {
              keyName = "string"
              keyVaultUri = "string"
              keyVersion = "string"
            }
          }
        }
      }
      managedDiskIdentity = {}
      managedResourceGroupId = "string"
      parameters = {
        amlWorkspaceId = {
          value = "string"
        }
        customPrivateSubnetName = {
          value = "string"
        }
        customPublicSubnetName = {
          value = "string"
        }
        customVirtualNetworkId = {
          value = "string"
        }
        enableNoPublicIp = {
          value = bool
        }
        encryption = {
          value = {
            KeyName = "string"
            keySource = "string"
            keyvaulturi = "string"
            keyversion = "string"
          }
        }
        loadBalancerBackendPoolName = {
          value = "string"
        }
        loadBalancerId = {
          value = "string"
        }
        natGatewayName = {
          value = "string"
        }
        prepareEncryption = {
          value = bool
        }
        publicIpName = {
          value = "string"
        }
        requireInfrastructureEncryption = {
          value = bool
        }
        storageAccountName = {
          value = "string"
        }
        storageAccountSkuName = {
          value = "string"
        }
        vnetAddressPrefix = {
          value = "string"
        }
      }
      publicNetworkAccess = "string"
      requiredNsgRules = "string"
      storageAccountIdentity = {}
      uiDefinitionUri = "string"
      updatedBy = {}
    }
    sku = {
      name = "string"
      tier = "string"
    }
  })
}

```

### workspaces

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 3-64Valid characters:Alphanumerics, underscores, and hyphens |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| sku | The SKU of the resource. | Sku |
| properties | The workspace properties. | WorkspaceProperties(required) |


### WorkspaceProperties

| Name | Description | Value |
|-|-|-|
| authorizations | The workspace provider authorizations. | WorkspaceProviderAuthorization[] |
| createdBy | Indicates the Object ID, PUID and Application ID of entity that created the workspace. | CreatedBy |
| encryption | Encryption properties for databricks workspace | WorkspacePropertiesEncryption |
| managedDiskIdentity | The details of Managed Identity of Disk Encryption Set used for Managed Disk Encryption | ManagedIdentityConfiguration |
| managedResourceGroupId | The managed resource group Id. | string (required) |
| parameters | The workspace's custom parameters. | WorkspaceCustomParameters |
| publicNetworkAccess | The network access type for accessing workspace. Set value to disabled to access workspace only via private link. | 'Disabled''Enabled' |
| requiredNsgRules | Gets or sets a value indicating whether data plane (clusters) to control plane communication happen over private endpoint. Supported values are 'AllRules' and 'NoAzureDatabricksRules'. 'NoAzureServiceRules' value is for internal use only. | 'AllRules''NoAzureDatabricksRules''NoAzureServiceRules' |
| storageAccountIdentity | The details of Managed Identity of Storage Account | ManagedIdentityConfiguration |
| uiDefinitionUri | The blob URI where the UI definition file is located. | string |
| updatedBy | Indicates the Object ID, PUID and Application ID of entity that last updated the workspace. | CreatedBy |


### WorkspaceProviderAuthorization

| Name | Description | Value |
|-|-|-|
| principalId | The provider's principal identifier. This is the identity that the provider will use to call ARM to manage the workspace resources. | string (required) |
| roleDefinitionId | The provider's role definition identifier. This role will define all the permissions that the provider must have on the workspace's container resource group. This role definition cannot have permission to delete the resource group. | string (required) |


### WorkspacePropertiesEncryption

| Name | Description | Value |
|-|-|-|
| entities | Encryption entities definition for the workspace. | EncryptionEntitiesDefinition(required) |


### EncryptionEntitiesDefinition

| Name | Description | Value |
|-|-|-|
| managedDisk | Encryption properties for the databricks managed disks. | ManagedDiskEncryption |
| managedServices | Encryption properties for the databricks managed services. | EncryptionV2 |


### ManagedDiskEncryption

| Name | Description | Value |
|-|-|-|
| keySource | The encryption keySource (provider). Possible values (case-insensitive):  Microsoft.Keyvault | 'Microsoft.Keyvault' (required) |
| keyVaultProperties | Key Vault input properties for encryption. | ManagedDiskEncryptionKeyVaultProperties(required) |
| rotationToLatestKeyVersionEnabled | Indicate whether the latest key version should be automatically used for Managed Disk Encryption. | bool |


### ManagedDiskEncryptionKeyVaultProperties

| Name | Description | Value |
|-|-|-|
| keyName | The name of KeyVault key. | string (required) |
| keyVaultUri | The URI of KeyVault. | string (required) |
| keyVersion | The version of KeyVault key. | string (required) |


### EncryptionV2

| Name | Description | Value |
|-|-|-|
| keySource | The encryption keySource (provider). Possible values (case-insensitive):  Microsoft.Keyvault | 'Microsoft.Keyvault' (required) |
| keyVaultProperties | Key Vault input properties for encryption. | EncryptionV2KeyVaultProperties |


### EncryptionV2KeyVaultProperties

| Name | Description | Value |
|-|-|-|
| keyName | The name of KeyVault key. | string (required) |
| keyVaultUri | The Uri of KeyVault. | string (required) |
| keyVersion | The version of KeyVault key. | string (required) |


### WorkspaceCustomParameters

| Name | Description | Value |
|-|-|-|
| amlWorkspaceId | The ID of a Azure Machine Learning workspace to link with Databricks workspace | WorkspaceCustomStringParameter |
| customPrivateSubnetName | The name of the Private Subnet within the Virtual Network | WorkspaceCustomStringParameter |
| customPublicSubnetName | The name of a Public Subnet within the Virtual Network | WorkspaceCustomStringParameter |
| customVirtualNetworkId | The ID of a Virtual Network where this Databricks Cluster should be created | WorkspaceCustomStringParameter |
| enableNoPublicIp | Should the Public IP be Disabled? | WorkspaceCustomBooleanParameter |
| encryption | Contains the encryption details for Customer-Managed Key (CMK) enabled workspace. | WorkspaceEncryptionParameter |
| loadBalancerBackendPoolName | Name of the outbound Load Balancer Backend Pool for Secure Cluster Connectivity (No Public IP). | WorkspaceCustomStringParameter |
| loadBalancerId | Resource URI of Outbound Load balancer for Secure Cluster Connectivity (No Public IP) workspace. | WorkspaceCustomStringParameter |
| natGatewayName | Name of the NAT gateway for Secure Cluster Connectivity (No Public IP) workspace subnets. | WorkspaceCustomStringParameter |
| prepareEncryption | Prepare the workspace for encryption. Enables the Managed Identity for managed storage account. | WorkspaceCustomBooleanParameter |
| publicIpName | Name of the Public IP for No Public IP workspace with managed vNet. | WorkspaceCustomStringParameter |
| requireInfrastructureEncryption | A boolean indicating whether or not the DBFS root file system will be enabled with secondary layer of encryption with platform managed keys for data at rest. | WorkspaceCustomBooleanParameter |
| storageAccountName | Default DBFS storage account name. | WorkspaceCustomStringParameter |
| storageAccountSkuName | Storage account SKU name, ex: Standard_GRS, Standard_LRS. Referhttps://aka.ms/storageskusfor valid inputs. | WorkspaceCustomStringParameter |
| vnetAddressPrefix | Address prefix for Managed virtual network. Default value for this input is 10.139. | WorkspaceCustomStringParameter |


### WorkspaceCustomStringParameter

| Name | Description | Value |
|-|-|-|
| value | The value which should be used for this field. | string (required) |


### WorkspaceCustomBooleanParameter

| Name | Description | Value |
|-|-|-|
| value | The value which should be used for this field. | bool (required) |


### WorkspaceEncryptionParameter

| Name | Description | Value |
|-|-|-|
| value | The value which should be used for this field. | Encryption |


### Encryption

| Name | Description | Value |
|-|-|-|
| KeyName | The name of KeyVault key. | string |
| keySource | The encryption keySource (provider). Possible values (case-insensitive):  Default, Microsoft.Keyvault | 'Default''Microsoft.Keyvault' |
| keyvaulturi | The Uri of KeyVault. | string |
| keyversion | The version of KeyVault key. | string |


### Sku

| Name | Description | Value |
|-|-|-|
| name | The SKU name. | string (required) |
| tier | The SKU tier. | string |
## Microsoft.Databricks/workspaces/privateEndpointConnections@2023-02-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Databricks/workspaces/privateEndpointConnections@2023-02-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      groupIds = [
        "string"
      ]
      privateEndpoint = {}
      privateLinkServiceConnectionState = {
        actionsRequired = "string"
        description = "string"
        status = "string"
      }
    }
  })
}

```

### workspaces/privateEndpointConnections

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:workspaces |
| properties | The private endpoint connection properties. | PrivateEndpointConnectionProperties(required) |


### PrivateEndpointConnectionProperties

| Name | Description | Value |
|-|-|-|
| groupIds | GroupIds from the private link service resource. | string[] |
| privateEndpoint | Private endpoint | PrivateEndpoint |
| privateLinkServiceConnectionState | Private endpoint connection state | PrivateLinkServiceConnectionState(required) |


### PrivateLinkServiceConnectionState

| Name | Description | Value |
|-|-|-|
| actionsRequired | Actions required for a private endpoint connection | string |
| description | The description for the current state of a private endpoint connection | string |
| status | The status of a private endpoint connection | 'Approved''Disconnected''Pending''Rejected' (required) |
## Microsoft.Databricks/workspaces/virtualNetworkPeerings@2023-02-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Databricks/workspaces/virtualNetworkPeerings@2023-02-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      allowForwardedTraffic = bool
      allowGatewayTransit = bool
      allowVirtualNetworkAccess = bool
      databricksAddressSpace = {
        addressPrefixes = [
          "string"
        ]
      }
      databricksVirtualNetwork = {
        id = "string"
      }
      remoteAddressSpace = {
        addressPrefixes = [
          "string"
        ]
      }
      remoteVirtualNetwork = {
        id = "string"
      }
      useRemoteGateways = bool
    }
  })
}

```

### workspaces/virtualNetworkPeerings

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:workspaces |
| properties | List of properties for vNet Peering | VirtualNetworkPeeringPropertiesFormat(required) |


### VirtualNetworkPeeringPropertiesFormat

| Name | Description | Value |
|-|-|-|
| allowForwardedTraffic | Whether the forwarded traffic from the VMs in the local virtual network will be allowed/disallowed in remote virtual network. | bool |
| allowGatewayTransit | If gateway links can be used in remote virtual networking to link to this virtual network. | bool |
| allowVirtualNetworkAccess | Whether the VMs in the local virtual network space would be able to access the VMs in remote virtual network space. | bool |
| databricksAddressSpace | The reference to the databricks virtual network address space. | AddressSpace |
| databricksVirtualNetwork | The remote virtual network should be in the same region. See here to learn more (/azure/databricks/administration-guide/cloud-configurations/azure/vnet-peering). | VirtualNetworkPeeringPropertiesFormatDatabricksVirtu... |
| remoteAddressSpace | The reference to the remote virtual network address space. | AddressSpace |
| remoteVirtualNetwork | The remote virtual network should be in the same region. See here to learn more (/azure/databricks/administration-guide/cloud-configurations/azure/vnet-peering). | VirtualNetworkPeeringPropertiesFormatRemoteVirtualNe...(required) |
| useRemoteGateways | If remote gateways can be used on this virtual network. If the flag is set to true, and allowGatewayTransit on remote peering is also true, virtual network will use gateways of remote virtual network for transit. Only one peering can have this flag set to true. This flag cannot be set if virtual network already has a gateway. | bool |


### AddressSpace

| Name | Description | Value |
|-|-|-|
| addressPrefixes | A list of address blocks reserved for this virtual network in CIDR notation. | string[] |


### VirtualNetworkPeeringPropertiesFormatDatabricksVirtu...

| Name | Description | Value |
|-|-|-|
| id | The Id of the databricks virtual network. | string |


### VirtualNetworkPeeringPropertiesFormatRemoteVirtualNe...

| Name | Description | Value |
|-|-|-|
| id | The Id of the remote virtual network. | string |
