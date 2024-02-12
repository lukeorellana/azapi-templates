import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface KeyvaultManagedhsmsProps extends IAzAPIBaseProps {
/**
   * SKU details
   */
readonly sku?: ManagedHsmSku;

/**
   * The create mode to indicate whether the resource is being created or is being recovered from a deleted resource.
   */
readonly createMode?: 'default''recover';

/**
   * Property specifying whether protection against purge is enabled for this managed HSM pool. Setting this property to true activates protection against purge for this managed HSM pool and its content - only the Managed HSM service may initiate a hard, irrecoverable deletion. The setting is effective only if soft delete is also enabled. Enabling this functionality is irreversible.
   */
readonly enablePurgeProtection?: bool;

/**
   * Property to specify whether the 'soft delete' functionality is enabled for this managed HSM pool. If it's not set to any value(true or false) when creating new managed HSM pool, it will be set to true by default. Once set to true, it cannot be reverted to false.
   */
readonly enableSoftDelete?: bool;

/**
   * Array of initial administrators object ids for this managed hsm pool.
   */
readonly initialAdminObjectIds?: string[];

/**
   * Rules governing the accessibility of the key vault from specific network locations.
   */
readonly networkAcls?: MhsmNetworkRuleSet;

/**
   * Control permission for data plane traffic coming from public networks while private endpoint is enabled.
   */
readonly publicNetworkAccess?: 'Disabled''Enabled';

/**
   * softDelete data retention days. It accepts >=7 and <=90.
   */
readonly softDeleteRetentionInDays?: number;

/**
   * The Azure Active Directory tenant ID that should be used for authenticating requests to the managed HSM pool.
   */
readonly tenantId?: string;

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
readonly ipRules?: MhsmipRule[];

/**
   * The list of virtual network rules.
   */
readonly virtualNetworkRules?: MhsmVirtualNetworkRule[];

/**
   * An IPv4 address range in CIDR notation, such as '124.56.78.91' (simple IP address) or '124.56.78.0/24' (all addresses that start with 124.56.78).
   */
readonly value: string;

/**
   * Full resource id of a vnet subnet, such as '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/virtualNetworks/test-vnet/subnets/subnet1'.
   */
readonly id: string;

/**
   * SKU Family of the managed HSM Pool
   */
readonly family: 'B';
}

/**
 * KeyvaultManagedhsms resource
 */
export class KeyvaultManagedhsms extends AzAPIBase {
  constructor(scope: Construct, id: string, props: KeyvaultManagedhsmsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.KeyVault/managedHSMs@2022-07-01";
  }

  protected getResourceBody(props: KeyvaultManagedhsmsProps): string {
    return JSON.stringify(
        {properties: {createMode: "string", enablePurgeProtection: "${bool}", enableSoftDelete: "${bool}", initialAdminObjectIds: ["string"], networkAcls: {bypass: "string", defaultAction: "string", ipRules: [{value: "string"}], virtualNetworkRules: [{id: "string"}]}, publicNetworkAccess: "string", softDeleteRetentionInDays: "${int}", tenantId: "string"}, sku: {family: "B", name: "string"}}
    );
  }
}
