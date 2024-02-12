import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DatabricksWorkspacesProps extends IAzAPIBaseProps {
/**
   * The SKU of the resource.
   */
readonly sku?: Sku;

/**
   * The workspace provider authorizations.
   */
readonly authorizations?: WorkspaceProviderAuthorization[];

/**
   * Indicates the Object ID, PUID and Application ID of entity that created the workspace.
   */
readonly createdBy?: CreatedBy;

/**
   * Encryption properties for databricks workspace
   */
readonly encryption?: WorkspacePropertiesEncryption;

/**
   * The details of Managed Identity of Disk Encryption Set used for Managed Disk Encryption
   */
readonly managedDiskIdentity?: ManagedIdentityConfiguration;

/**
   * The managed resource group Id.
   */
readonly managedResourceGroupId: string;

/**
   * The workspace's custom parameters.
   */
readonly parameters?: WorkspaceCustomParameters;

/**
   * The network access type for accessing workspace. Set value to disabled to access workspace only via private link.
   */
readonly publicNetworkAccess?: 'Disabled''Enabled';

/**
   * Gets or sets a value indicating whether data plane (clusters) to control plane communication happen over private endpoint. Supported values are 'AllRules' and 'NoAzureDatabricksRules'. 'NoAzureServiceRules' value is for internal use only.
   */
readonly requiredNsgRules?: 'AllRules''NoAzureDatabricksRules''NoAzureServiceRules';

/**
   * The details of Managed Identity of Storage Account
   */
readonly storageAccountIdentity?: ManagedIdentityConfiguration;

/**
   * The blob URI where the UI definition file is located.
   */
readonly uiDefinitionUri?: string;

/**
   * Indicates the Object ID, PUID and Application ID of entity that last updated the workspace.
   */
readonly updatedBy?: CreatedBy;

/**
   * The provider's principal identifier. This is the identity that the provider will use to call ARM to manage the workspace resources.
   */
readonly principalId: string;

/**
   * The provider's role definition identifier. This role will define all the permissions that the provider must have on the workspace's container resource group. This role definition cannot have permission to delete the resource group.
   */
readonly roleDefinitionId: string;

/**
   * Encryption entities definition for the workspace.
   */
readonly entities: EncryptionEntitiesDefinition;

/**
   * Encryption properties for the databricks managed disks.
   */
readonly managedDisk?: ManagedDiskEncryption;

/**
   * Encryption properties for the databricks managed services.
   */
readonly managedServices?: EncryptionV2;

/**
   * The encryption keySource (provider). Possible values (case-insensitive):  Microsoft.Keyvault
   */
readonly keySource: 'Microsoft.Keyvault';

/**
   * Key Vault input properties for encryption.
   */
readonly keyVaultProperties: ManagedDiskEncryptionKeyVaultProperties;

/**
   * Indicate whether the latest key version should be automatically used for Managed Disk Encryption.
   */
readonly rotationToLatestKeyVersionEnabled?: bool;

/**
   * The name of KeyVault key.
   */
readonly keyName: string;

/**
   * The URI of KeyVault.
   */
readonly keyVaultUri: string;

/**
   * The version of KeyVault key.
   */
readonly keyVersion: string;

/**
   * The encryption keySource (provider). Possible values (case-insensitive):  Microsoft.Keyvault
   */
readonly keySource: 'Microsoft.Keyvault';

/**
   * Key Vault input properties for encryption.
   */
readonly keyVaultProperties?: EncryptionV2KeyVaultProperties;

/**
   * The name of KeyVault key.
   */
readonly keyName: string;

/**
   * The Uri of KeyVault.
   */
readonly keyVaultUri: string;

/**
   * The version of KeyVault key.
   */
readonly keyVersion: string;

/**
   * The ID of a Azure Machine Learning workspace to link with Databricks workspace
   */
readonly amlWorkspaceId?: WorkspaceCustomStringParameter;

/**
   * The name of the Private Subnet within the Virtual Network
   */
readonly customPrivateSubnetName?: WorkspaceCustomStringParameter;

/**
   * The name of a Public Subnet within the Virtual Network
   */
readonly customPublicSubnetName?: WorkspaceCustomStringParameter;

/**
   * The ID of a Virtual Network where this Databricks Cluster should be created
   */
readonly customVirtualNetworkId?: WorkspaceCustomStringParameter;

/**
   * Should the Public IP be Disabled?
   */
readonly enableNoPublicIp?: WorkspaceCustomBooleanParameter;

/**
   * Contains the encryption details for Customer-Managed Key (CMK) enabled workspace.
   */
readonly encryption?: WorkspaceEncryptionParameter;

/**
   * Name of the outbound Load Balancer Backend Pool for Secure Cluster Connectivity (No Public IP).
   */
readonly loadBalancerBackendPoolName?: WorkspaceCustomStringParameter;

/**
   * Resource URI of Outbound Load balancer for Secure Cluster Connectivity (No Public IP) workspace.
   */
readonly loadBalancerId?: WorkspaceCustomStringParameter;

/**
   * Name of the NAT gateway for Secure Cluster Connectivity (No Public IP) workspace subnets.
   */
readonly natGatewayName?: WorkspaceCustomStringParameter;

/**
   * Prepare the workspace for encryption. Enables the Managed Identity for managed storage account.
   */
readonly prepareEncryption?: WorkspaceCustomBooleanParameter;

/**
   * Name of the Public IP for No Public IP workspace with managed vNet.
   */
readonly publicIpName?: WorkspaceCustomStringParameter;

/**
   * A boolean indicating whether or not the DBFS root file system will be enabled with secondary layer of encryption with platform managed keys for data at rest.
   */
readonly requireInfrastructureEncryption?: WorkspaceCustomBooleanParameter;

/**
   * Default DBFS storage account name.
   */
readonly storageAccountName?: WorkspaceCustomStringParameter;

/**
   * Storage account SKU name, ex: Standard_GRS, Standard_LRS. Referhttps://aka.ms/storageskusfor valid inputs.
   */
readonly storageAccountSkuName?: WorkspaceCustomStringParameter;

/**
   * Address prefix for Managed virtual network. Default value for this input is 10.139.
   */
readonly vnetAddressPrefix?: WorkspaceCustomStringParameter;

/**
   * The value which should be used for this field.
   */
readonly value: string;

/**
   * The value which should be used for this field.
   */
readonly value: bool;

/**
   * The value which should be used for this field.
   */
readonly value?: Encryption;

/**
   * The name of KeyVault key.
   */
readonly KeyName?: string;

/**
   * The encryption keySource (provider). Possible values (case-insensitive):  Default, Microsoft.Keyvault
   */
readonly keySource?: 'Default''Microsoft.Keyvault';

/**
   * The Uri of KeyVault.
   */
readonly keyvaulturi?: string;

/**
   * The version of KeyVault key.
   */
readonly keyversion?: string;

/**
   * The SKU tier.
   */
readonly tier?: string;
}

/**
 * DatabricksWorkspaces resource
 */
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
