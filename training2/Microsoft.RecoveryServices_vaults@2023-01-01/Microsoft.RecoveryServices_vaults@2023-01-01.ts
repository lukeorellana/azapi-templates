import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface RecoveryservicesVaultsProps extends IAzAPIBaseProps {
/**
   * Identifies the unique system identifier for each Azure resource.
   */
readonly sku?: Sku;

/**
   * Optional ETag.
   */
readonly etag?: string;

/**
   * Identity for the resource.
   */
readonly identity?: IdentityData;

/**
   * The type of managed identity used. The type 'SystemAssigned, UserAssigned' includes both an implicitly created identity and a set of user-assigned identities. The type 'None' will remove any identities.
   */
readonly type: 'None''SystemAssigned''SystemAssigned, UserAssigned''UserAssigned';

/**
   * The list of user-assigned identities associated with the resource. The user-assigned identity dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.
   */
readonly userAssignedIdentities?: object;

/**
   * Customer Managed Key details of the resource.
   */
readonly encryption?: VaultPropertiesEncryption;

/**
   * Monitoring Settings of the vault
   */
readonly monitoringSettings?: MonitoringSettings;

/**
   * The details of the latest move operation performed on the Azure Resource
   */
readonly moveDetails?: VaultPropertiesMoveDetails;

/**
   * property to enable or disable resource provider inbound network traffic from public clients
   */
readonly publicNetworkAccess?: 'Disabled''Enabled';

/**
   * The redundancy Settings of a Vault
   */
readonly redundancySettings?: VaultPropertiesRedundancySettings;

/**
   * Security Settings of the vault
   */
readonly securitySettings?: SecuritySettings;

/**
   * Details for upgrading vault.
   */
readonly upgradeDetails?: UpgradeDetails;

/**
   * Enabling/Disabling the Double Encryption state
   */
readonly infrastructureEncryption?: 'Disabled''Enabled';

/**
   * The details of the identity used for CMK
   */
readonly kekIdentity?: CmkKekIdentity;

/**
   * The properties of the Key Vault which hosts CMK
   */
readonly keyVaultProperties?: CmkKeyVaultProperties;

/**
   * The user assigned identity to be used to grant permissions in case the type of identity used is UserAssigned
   */
readonly userAssignedIdentity?: string;

/**
   * Indicate that system assigned identity should be used. Mutually exclusive with 'userAssignedIdentity' field
   */
readonly useSystemAssignedIdentity?: bool;

/**
   * The key uri of the Customer Managed Key
   */
readonly keyUri?: string;

/**
   * Settings for Azure Monitor based alerts
   */
readonly azureMonitorAlertSettings?: AzureMonitorAlertSettings;

/**
   * Settings for classic alerts
   */
readonly classicAlertSettings?: ClassicAlertSettings;

/**
   * 
   */
readonly alertsForAllJobFailures?: 'Disabled''Enabled';

/**
   * 
   */
readonly alertsForCriticalOperations?: 'Disabled''Enabled';

/**
   * Immutability Settings of a vault
   */
readonly immutabilitySettings?: ImmutabilitySettings;

/**
   * 
   */
readonly state?: 'Disabled''Locked''Unlocked';

/**
   * The sku capacity
   */
readonly capacity?: string;

/**
   * The sku family
   */
readonly family?: string;

/**
   * The sku size
   */
readonly size?: string;

/**
   * The Sku tier.
   */
readonly tier?: string;
}

/**
 * RecoveryservicesVaults resource
 */
export class RecoveryservicesVaults extends AzAPIBase {
  constructor(scope: Construct, id: string, props: RecoveryservicesVaultsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.RecoveryServices/vaults@2023-01-01";
  }

  protected getResourceBody(props: RecoveryservicesVaultsProps): string {
    return JSON.stringify(
        {properties: {encryption: {infrastructureEncryption: "string", kekIdentity: {userAssignedIdentity: "string", useSystemAssignedIdentity: "${bool}"}, keyVaultProperties: {keyUri: "string"}}, monitoringSettings: {azureMonitorAlertSettings: {alertsForAllJobFailures: "string"}, classicAlertSettings: {alertsForCriticalOperations: "string"}}, moveDetails: {}, publicNetworkAccess: "string", redundancySettings: {}, securitySettings: {immutabilitySettings: {state: "string"}}, upgradeDetails: {}}, sku: {capacity: "string", family: "string", name: "string", size: "string", tier: "string"}, etag: "string"}
    );
  }
}
