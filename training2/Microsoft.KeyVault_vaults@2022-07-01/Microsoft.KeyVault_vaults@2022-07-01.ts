import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface KeyvaultVaultsProps extends IAzAPIBaseProps {
/**
   * An array of 0 to 1024 identities that have access to the key vault. All identities in the array must use the same tenant ID as the key vault's tenant ID. WhencreateModeis set torecover, access policies are not required. Otherwise, access policies are required.
   */
readonly accessPolicies?: AccessPolicyEntry[];

/**
   * The vault's create mode to indicate whether the vault need to be recovered or not.
   */
readonly createMode?: 'default''recover';

/**
   * Property to specify whether Azure Virtual Machines are permitted to retrieve certificates stored as secrets from the key vault.
   */
readonly enabledForDeployment?: bool;

/**
   * Property to specify whether Azure Disk Encryption is permitted to retrieve secrets from the vault and unwrap keys.
   */
readonly enabledForDiskEncryption?: bool;

/**
   * Property to specify whether Azure Resource Manager is permitted to retrieve secrets from the key vault.
   */
readonly enabledForTemplateDeployment?: bool;

/**
   * Property specifying whether protection against purge is enabled for this vault. Setting this property to true activates protection against purge for this vault and its content - only the Key Vault service may initiate a hard, irrecoverable deletion. The setting is effective only if soft delete is also enabled. Enabling this functionality is irreversible - that is, the property does not accept false as its value.
   */
readonly enablePurgeProtection?: bool;

/**
   * Property that controls how data actions are authorized. When true, the key vault will use Role Based Access Control (RBAC) for authorization of data actions, and the access policies specified in vault properties will be  ignored. When false, the key vault will use the access policies specified in vault properties, and any policy stored on Azure Resource Manager will be ignored. If null or not specified, the vault is created with the default value of false. Note that management actions are always authorized with RBAC.
   */
readonly enableRbacAuthorization?: bool;

/**
   * Property to specify whether the 'soft delete' functionality is enabled for this key vault. If it's not set to any value(true or false) when creating new key vault, it will be set to true by default. Once set to true, it cannot be reverted to false.
   */
readonly enableSoftDelete?: bool;

/**
   * Rules governing the accessibility of the key vault from specific network locations.
   */
readonly networkAcls?: NetworkRuleSet;

/**
   * Provisioning state of the vault.
   */
readonly provisioningState?: 'RegisteringDns''Succeeded';

/**
   * Property to specify whether the vault will accept traffic from public internet. If set to 'disabled' all traffic except private endpoint traffic and that that originates from trusted services will be blocked. This will override the set firewall rules, meaning that even if the firewall rules are present we will not honor the rules.
   */
readonly publicNetworkAccess?: string;

/**
   * SKU details
   */
readonly sku: Sku;

/**
   * softDelete data retention days. It accepts >=7 and <=90.
   */
readonly softDeleteRetentionInDays?: number;

/**
   * The Azure Active Directory tenant ID that should be used for authenticating requests to the key vault.
   */
readonly tenantId: string;

/**
   * The URI of the vault for performing operations on keys and secrets.
   */
readonly vaultUri?: string;

/**
   * Application ID of the client making request on behalf of a principal
   */
readonly applicationId?: string;

/**
   * The object ID of a user, service principal or security group in the Azure Active Directory tenant for the vault. The object ID must be unique for the list of access policies.
   */
readonly objectId: string;

/**
   * Permissions the identity has for keys, secrets and certificates.
   */
readonly permissions: Permissions;

/**
   * The Azure Active Directory tenant ID that should be used for authenticating requests to the key vault.
   */
readonly tenantId: string;

/**
   * Permissions to certificates
   */
readonly certificates?: String array containing any of:'all''backup''create''delete''deleteissuers''get''getissuers''import''list''listissuers''managecontacts''manageissuers''purge''recover''restore''setissuers''update';

/**
   * Permissions to keys
   */
readonly keys?: String array containing any of:'all''backup''create''decrypt''delete''encrypt''get''getrotationpolicy''import''list''purge''recover''release''restore''rotate''setrotationpolicy''sign''unwrapKey''update''verify''wrapKey';

/**
   * Permissions to secrets
   */
readonly secrets?: String array containing any of:'all''backup''delete''get''list''purge''recover''restore''set';

/**
   * Permissions to storage accounts
   */
readonly storage?: String array containing any of:'all''backup''delete''deletesas''get''getsas''list''listsas''purge''recover''regeneratekey''restore''set''setsas''update';

/**
   * Tells what traffic can bypass network rules. This can be 'AzureServices' or 'None'.  If not specified the default is 'AzureServices'.
   */
readonly bypass?: 'AzureServices''None';

/**
   * The default action when no rule from ipRules and from virtualNetworkRules match. This is only used after the bypass property has been evaluated.
   */
readonly defaultAction?: 'Allow''Deny';

/**
   * The list of IP address rules.
   */
readonly ipRules?: IPRule[];

/**
   * The list of virtual network rules.
   */
readonly virtualNetworkRules?: VirtualNetworkRule[];

/**
   * An IPv4 address range in CIDR notation, such as '124.56.78.91' (simple IP address) or '124.56.78.0/24' (all addresses that start with 124.56.78).
   */
readonly value: string;

/**
   * Full resource id of a vnet subnet, such as '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/virtualNetworks/test-vnet/subnets/subnet1'.
   */
readonly id: string;

/**
   * Property to specify whether NRP will ignore the check if parent subnet has serviceEndpoints configured.
   */
readonly ignoreMissingVnetServiceEndpoint?: bool;

/**
   * SKU family name
   */
readonly family: 'A';
}

/**
 * KeyvaultVaults resource
 */
export class KeyvaultVaults extends AzAPIBase {
  constructor(scope: Construct, id: string, props: KeyvaultVaultsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.KeyVault/vaults@2022-07-01";
  }

  protected getResourceBody(props: KeyvaultVaultsProps): string {
    return JSON.stringify(
        {properties: {accessPolicies: [{applicationId: "string", objectId: "string", permissions: {certificates: ["string"], keys: ["string"], secrets: ["string"], storage: ["string"]}, tenantId: "string"}], createMode: "string", enabledForDeployment: "${bool}", enabledForDiskEncryption: "${bool}", enabledForTemplateDeployment: "${bool}", enablePurgeProtection: "${bool}", enableRbacAuthorization: "${bool}", enableSoftDelete: "${bool}", networkAcls: {bypass: "string", defaultAction: "string", ipRules: [{value: "string"}], virtualNetworkRules: [{id: "string", ignoreMissingVnetServiceEndpoint: "${bool}"}]}, provisioningState: "string", publicNetworkAccess: "string", sku: {family: "A", name: "string"}, softDeleteRetentionInDays: "${int}", tenantId: "string", vaultUri: "string"}}
    );
  }
}
