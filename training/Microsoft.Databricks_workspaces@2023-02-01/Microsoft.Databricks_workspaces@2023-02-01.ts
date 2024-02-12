import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

export interface DatabricksWorkspacesProps extends IAzAPIBaseProps {

}

export class DatabricksWorkspaces extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DatabricksWorkspacesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Databricks/workspaces@2023-02-01";
  }

  protected getResourceBody(props: DatabricksWorkspacesProps): string {
    return JSON.stringify(
      {properties: {authorizations: [{principalId: "string", roleDefinitionId: "string"}], createdBy: {}, encryption: {entities: {managedDisk: {keySource: "Microsoft.Keyvault", keyVaultProperties: {keyName: "string", keyVaultUri: "string", keyVersion: "string"}, rotationToLatestKeyVersionEnabled: "${bool}"}, managedServices: {keySource: "Microsoft.Keyvault", keyVaultProperties: {keyName: "string", keyVaultUri: "string", keyVersion: "string"}}}}, managedDiskIdentity: {}, managedResourceGroupId: "string", parameters: {amlWorkspaceId: {value: "string"}, customPrivateSubnetName: {value: "string"}, customPublicSubnetName: {value: "string"}, customVirtualNetworkId: {value: "string"}, enableNoPublicIp: {value: "${bool}"}, encryption: {value: {KeyName: "string", keySource: "string", keyvaulturi: "string", keyversion: "string"}}, loadBalancerBackendPoolName: {value: "string"}, loadBalancerId: {value: "string"}, natGatewayName: {value: "string"}, prepareEncryption: {value: "${bool}"}, publicIpName: {value: "string"}, requireInfrastructureEncryption: {value: "${bool}"}, storageAccountName: {value: "string"}, storageAccountSkuName: {value: "string"}, vnetAddressPrefix: {value: "string"}}, publicNetworkAccess: "string", requiredNsgRules: "string", storageAccountIdentity: {}, uiDefinitionUri: "string", updatedBy: {}}, sku: {name: "string", tier: "string"}}
    );
  }
}

// | Name | Description | Value |
// |-|-|-|
// | name | The resource name | string (required)Character limit: 3-64Valid characters:Alphanumerics, underscores, and hyphens |
// | location | The geo-location where the resource lives | string (required) |
// | tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
// | sku | The SKU of the resource. | Sku |
// | properties | The workspace properties. | WorkspaceProperties(required) |

// | Name | Description | Value |
// |-|-|-|
// | authorizations | The workspace provider authorizations. | WorkspaceProviderAuthorization[] |
// | createdBy | Indicates the Object ID, PUID and Application ID of entity that created the workspace. | CreatedBy |
// | encryption | Encryption properties for databricks workspace | WorkspacePropertiesEncryption |
// | managedDiskIdentity | The details of Managed Identity of Disk Encryption Set used for Managed Disk Encryption | ManagedIdentityConfiguration |
// | managedResourceGroupId | The managed resource group Id. | string (required) |
// | parameters | The workspace's custom parameters. | WorkspaceCustomParameters |
// | publicNetworkAccess | The network access type for accessing workspace. Set value to disabled to access workspace only via private link. | 'Disabled''Enabled' |
// | requiredNsgRules | Gets or sets a value indicating whether data plane (clusters) to control plane communication happen over private endpoint. Supported values are 'AllRules' and 'NoAzureDatabricksRules'. 'NoAzureServiceRules' value is for internal use only. | 'AllRules''NoAzureDatabricksRules''NoAzureServiceRules' |
// | storageAccountIdentity | The details of Managed Identity of Storage Account | ManagedIdentityConfiguration |
// | uiDefinitionUri | The blob URI where the UI definition file is located. | string |
// | updatedBy | Indicates the Object ID, PUID and Application ID of entity that last updated the workspace. | CreatedBy |

// | Name | Description | Value |
// |-|-|-|
// | principalId | The provider's principal identifier. This is the identity that the provider will use to call ARM to manage the workspace resources. | string (required) |
// | roleDefinitionId | The provider's role definition identifier. This role will define all the permissions that the provider must have on the workspace's container resource group. This role definition cannot have permission to delete the resource group. | string (required) |

// | Name | Description | Value |
// |-|-|-|
// | entities | Encryption entities definition for the workspace. | EncryptionEntitiesDefinition(required) |

// | Name | Description | Value |
// |-|-|-|
// | managedDisk | Encryption properties for the databricks managed disks. | ManagedDiskEncryption |
// | managedServices | Encryption properties for the databricks managed services. | EncryptionV2 |

// | Name | Description | Value |
// |-|-|-|
// | keySource | The encryption keySource (provider). Possible values (case-insensitive):  Microsoft.Keyvault | 'Microsoft.Keyvault' (required) |
// | keyVaultProperties | Key Vault input properties for encryption. | ManagedDiskEncryptionKeyVaultProperties(required) |
// | rotationToLatestKeyVersionEnabled | Indicate whether the latest key version should be automatically used for Managed Disk Encryption. | bool |

// | Name | Description | Value |
// |-|-|-|
// | keyName | The name of KeyVault key. | string (required) |
// | keyVaultUri | The URI of KeyVault. | string (required) |
// | keyVersion | The version of KeyVault key. | string (required) |

// | Name | Description | Value |
// |-|-|-|
// | keySource | The encryption keySource (provider). Possible values (case-insensitive):  Microsoft.Keyvault | 'Microsoft.Keyvault' (required) |
// | keyVaultProperties | Key Vault input properties for encryption. | EncryptionV2KeyVaultProperties |

// | Name | Description | Value |
// |-|-|-|
// | keyName | The name of KeyVault key. | string (required) |
// | keyVaultUri | The Uri of KeyVault. | string (required) |
// | keyVersion | The version of KeyVault key. | string (required) |

// | Name | Description | Value |
// |-|-|-|
// | amlWorkspaceId | The ID of a Azure Machine Learning workspace to link with Databricks workspace | WorkspaceCustomStringParameter |
// | customPrivateSubnetName | The name of the Private Subnet within the Virtual Network | WorkspaceCustomStringParameter |
// | customPublicSubnetName | The name of a Public Subnet within the Virtual Network | WorkspaceCustomStringParameter |
// | customVirtualNetworkId | The ID of a Virtual Network where this Databricks Cluster should be created | WorkspaceCustomStringParameter |
// | enableNoPublicIp | Should the Public IP be Disabled? | WorkspaceCustomBooleanParameter |
// | encryption | Contains the encryption details for Customer-Managed Key (CMK) enabled workspace. | WorkspaceEncryptionParameter |
// | loadBalancerBackendPoolName | Name of the outbound Load Balancer Backend Pool for Secure Cluster Connectivity (No Public IP). | WorkspaceCustomStringParameter |
// | loadBalancerId | Resource URI of Outbound Load balancer for Secure Cluster Connectivity (No Public IP) workspace. | WorkspaceCustomStringParameter |
// | natGatewayName | Name of the NAT gateway for Secure Cluster Connectivity (No Public IP) workspace subnets. | WorkspaceCustomStringParameter |
// | prepareEncryption | Prepare the workspace for encryption. Enables the Managed Identity for managed storage account. | WorkspaceCustomBooleanParameter |
// | publicIpName | Name of the Public IP for No Public IP workspace with managed vNet. | WorkspaceCustomStringParameter |
// | requireInfrastructureEncryption | A boolean indicating whether or not the DBFS root file system will be enabled with secondary layer of encryption with platform managed keys for data at rest. | WorkspaceCustomBooleanParameter |
// | storageAccountName | Default DBFS storage account name. | WorkspaceCustomStringParameter |
// | storageAccountSkuName | Storage account SKU name, ex: Standard_GRS, Standard_LRS. Referhttps://aka.ms/storageskusfor valid inputs. | WorkspaceCustomStringParameter |
// | vnetAddressPrefix | Address prefix for Managed virtual network. Default value for this input is 10.139. | WorkspaceCustomStringParameter |

// | Name | Description | Value |
// |-|-|-|
// | value | The value which should be used for this field. | string (required) |

// | Name | Description | Value |
// |-|-|-|
// | value | The value which should be used for this field. | bool (required) |

// | Name | Description | Value |
// |-|-|-|
// | value | The value which should be used for this field. | Encryption |

// | Name | Description | Value |
// |-|-|-|
// | KeyName | The name of KeyVault key. | string |
// | keySource | The encryption keySource (provider). Possible values (case-insensitive):  Default, Microsoft.Keyvault | 'Default''Microsoft.Keyvault' |
// | keyvaulturi | The Uri of KeyVault. | string |
// | keyversion | The version of KeyVault key. | string |

// | Name | Description | Value |
// |-|-|-|
// | name | The SKU name. | string (required) |
// | tier | The SKU tier. | string |
