import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AppconfigurationConfigurationstoresProps extends IAzAPIBaseProps {
/**
   * The sku of the configuration store.
   */
readonly sku: Sku;

/**
   * The managed identity information, if configured.
   */
readonly identity?: ResourceIdentity;

/**
   * The type of managed identity used. The type 'SystemAssigned, UserAssigned' includes both an implicitly created identity and a set of user-assigned identities. The type 'None' will remove any identities.
   */
readonly type?: 'None''SystemAssigned''SystemAssigned, UserAssigned''UserAssigned';

/**
   * The list of user-assigned identities associated with the resource. The user-assigned identity dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.
   */
readonly userAssignedIdentities?: object;

/**
   * Indicates whether the configuration store need to be recovered.
   */
readonly createMode?: 'Default''Recover';

/**
   * Disables all authentication methods other than AAD authentication.
   */
readonly disableLocalAuth?: bool;

/**
   * Property specifying whether protection against purge is enabled for this configuration store.
   */
readonly enablePurgeProtection?: bool;

/**
   * The encryption settings of the configuration store.
   */
readonly encryption?: EncryptionProperties;

/**
   * Control permission for data plane traffic coming from public networks while private endpoint is enabled.
   */
readonly publicNetworkAccess?: 'Disabled''Enabled';

/**
   * The amount of time in days that the configuration store will be retained when it is soft deleted.
   */
readonly softDeleteRetentionInDays?: number;

/**
   * Key vault properties.
   */
readonly keyVaultProperties?: KeyVaultProperties;

/**
   * The client id of the identity which will be used to access key vault.
   */
readonly identityClientId?: string;

/**
   * The URI of the key vault key used to encrypt data.
   */
readonly keyIdentifier?: string;
}

/**
 * AppconfigurationConfigurationstores resource
 */
export class AppconfigurationConfigurationstores extends AzAPIBase {
  constructor(scope: Construct, id: string, props: AppconfigurationConfigurationstoresProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.AppConfiguration/configurationStores@2023-03-01";
  }

  protected getResourceBody(props: AppconfigurationConfigurationstoresProps): string {
    return JSON.stringify(
        {properties: {createMode: "string", disableLocalAuth: "${bool}", enablePurgeProtection: "${bool}", encryption: {keyVaultProperties: {identityClientId: "string", keyIdentifier: "string"}}, publicNetworkAccess: "string", softDeleteRetentionInDays: "${int}"}, sku: {name: "string"}}
    );
  }
}
