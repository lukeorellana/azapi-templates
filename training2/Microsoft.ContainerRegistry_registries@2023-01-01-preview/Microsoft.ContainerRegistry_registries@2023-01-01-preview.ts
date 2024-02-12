import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ContainerregistryRegistriesProps extends IAzAPIBaseProps {
/**
   * The SKU of the container registry.
   */
readonly sku: Sku;

/**
   * The identity of the container registry.
   */
readonly identity?: IdentityProperties;

/**
   * The principal ID of resource identity.
   */
readonly principalId?: string;

/**
   * The tenant ID of resource.
   */
readonly tenantId?: string;

/**
   * The identity type.
   */
readonly type?: 'None''SystemAssigned''SystemAssigned, UserAssigned''UserAssigned';

/**
   * The list of user identities associated with the resource. The user identitydictionary key references will be ARM resource ids in the form:'/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.
   */
readonly userAssignedIdentities?: object;

/**
   * The value that indicates whether the admin user is enabled.
   */
readonly adminUserEnabled?: bool;

/**
   * Enables registry-wide pull from unauthenticated clients.
   */
readonly anonymousPullEnabled?: bool;

/**
   * Enable a single data endpoint per region for serving data.
   */
readonly dataEndpointEnabled?: bool;

/**
   * The encryption settings of container registry.
   */
readonly encryption?: EncryptionProperty;

/**
   * Whether to allow trusted Azure services to access a network restricted registry.
   */
readonly networkRuleBypassOptions?: 'AzureServices''None';

/**
   * The network rule set for a container registry.
   */
readonly networkRuleSet?: NetworkRuleSet;

/**
   * The policies for a container registry.
   */
readonly policies?: Policies;

/**
   * Whether or not public network access is allowed for the container registry.
   */
readonly publicNetworkAccess?: 'Disabled''Enabled';

/**
   * Whether or not zone redundancy is enabled for this container registry
   */
readonly zoneRedundancy?: 'Disabled''Enabled';

/**
   * Key vault properties.
   */
readonly keyVaultProperties?: KeyVaultProperties;

/**
   * Indicates whether or not the encryption is enabled for container registry.
   */
readonly status?: 'disabled''enabled';

/**
   * The client id of the identity which will be used to access key vault.
   */
readonly identity?: string;

/**
   * Key vault uri to access the encryption key.
   */
readonly keyIdentifier?: string;

/**
   * The default action of allow or deny when no other rules match.
   */
readonly defaultAction: 'Allow''Deny';

/**
   * The IP ACL rules.
   */
readonly ipRules?: IPRule[];

/**
   * The action of IP ACL rule.
   */
readonly action?: 'Allow';

/**
   * Specifies the IP or IP range in CIDR format. Only IPV4 address is allowed.
   */
readonly value: string;

/**
   * The policy for using ARM audience token for a container registry.
   */
readonly azureADAuthenticationAsArmPolicy?: AzureADAuthenticationAsArmPolicy;

/**
   * The export policy for a container registry.
   */
readonly exportPolicy?: ExportPolicy;

/**
   * The quarantine policy for a container registry.
   */
readonly quarantinePolicy?: QuarantinePolicy;

/**
   * The retention policy for a container registry.
   */
readonly retentionPolicy?: RetentionPolicy;

/**
   * The soft delete policy for a container registry.
   */
readonly softDeletePolicy?: SoftDeletePolicy;

/**
   * The content trust policy for a container registry.
   */
readonly trustPolicy?: TrustPolicy;

/**
   * The value that indicates whether the policy is enabled or not.
   */
readonly status?: 'disabled''enabled';

/**
   * The value that indicates whether the policy is enabled or not.
   */
readonly status?: 'disabled''enabled';

/**
   * The value that indicates whether the policy is enabled or not.
   */
readonly status?: 'disabled''enabled';

/**
   * The number of days to retain an untagged manifest after which it gets purged.
   */
readonly days?: number;

/**
   * The value that indicates whether the policy is enabled or not.
   */
readonly status?: 'disabled''enabled';

/**
   * The number of days after which a soft-deleted item is permanently deleted.
   */
readonly retentionDays?: number;

/**
   * The value that indicates whether the policy is enabled or not.
   */
readonly status?: 'disabled''enabled';

/**
   * The value that indicates whether the policy is enabled or not.
   */
readonly status?: 'disabled''enabled';

/**
   * The type of trust policy.
   */
readonly type?: 'Notary';
}

/**
 * ContainerregistryRegistries resource
 */
export class ContainerregistryRegistries extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ContainerregistryRegistriesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ContainerRegistry/registries@2023-01-01-preview";
  }

  protected getResourceBody(props: ContainerregistryRegistriesProps): string {
    return JSON.stringify(
        {properties: {adminUserEnabled: "${bool}", anonymousPullEnabled: "${bool}", dataEndpointEnabled: "${bool}", encryption: {keyVaultProperties: {identity: "string", keyIdentifier: "string"}, status: "string"}, networkRuleBypassOptions: "string", networkRuleSet: {defaultAction: "string", ipRules: [{action: "Allow", value: "string"}]}, policies: {azureADAuthenticationAsArmPolicy: {status: "string"}, exportPolicy: {status: "string"}, quarantinePolicy: {status: "string"}, retentionPolicy: {days: "${int}", status: "string"}, softDeletePolicy: {retentionDays: "${int}", status: "string"}, trustPolicy: {status: "string", type: "Notary"}}, publicNetworkAccess: "string", zoneRedundancy: "string"}, sku: {name: "string"}}
    );
  }
}
