import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface MapsAccountsProps extends IAzAPIBaseProps {
/**
   * The SKU of this account.
   */
readonly sku: Sku;

/**
   * Get or Set Kind property.
   */
readonly kind?: 'Gen1''Gen2';

/**
   * Managed service identity (system assigned and/or user assigned identities)
   */
readonly identity?: ManagedServiceIdentity;

/**
   * Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
   */
readonly type: 'None''SystemAssigned''SystemAssigned, UserAssigned''UserAssigned';

/**
   * The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests.
   */
readonly userAssignedIdentities?: object;

/**
   * Specifies CORS rules for the Blob service. You can include up to five CorsRule elements in the request. If no CorsRule elements are included in the request body, all CORS rules will be deleted, and CORS will be disabled for the Blob service.
   */
readonly cors?: CorsRules;

/**
   * Allows toggle functionality on Azure Policy to disable Azure Maps local authentication support. This will disable Shared Keys and Shared Access Signature Token authentication from any usage.
   */
readonly disableLocalAuth?: bool;

/**
   * (Optional) Discouraged to include in resource definition. Only needed where it is possible to disable platform (AKA infrastructure) encryption. Azure SQL TDE is an example of this. Values are enabled and disabled.
   */
readonly encryption?: Encryption;

/**
   * The array of associated resources to the Map account. Linked resource in the array cannot individually update, you must update all linked resources in the array together. These resources may be used on operations on the Azure Maps REST API. Access is controlled by the Map Account Managed Identity(s) permissions to those resource(s).
   */
readonly linkedResources?: LinkedResource[]Constranumbers:Max length = 10;

/**
   * The list of CORS rules. You can include up to five CorsRule elements in the request.
   */
readonly corsRules?: CorsRule[]Constranumbers:Max length = 5;

/**
   * Required if CorsRule element is present. A list of origin domains that will be allowed via CORS, or "*" to allow all domains
   */
readonly allowedOrigins: string[];

/**
   * All Customer-managed key encryption properties for the resource.
   */
readonly customerManagedKeyEncryption?: CustomerManagedKeyEncryption;

/**
   * Values are enabled and disabled.
   */
readonly infrastructureEncryption?: 'disabled''enabled';

/**
   * All identity configuration for Customer-managed key settings defining which identity should be used to auth to Key Vault.
   */
readonly keyEncryptionKeyIdentity?: CustomerManagedKeyEncryptionKeyIdentity;

/**
   * key encryption key Url, versioned or non-versioned. Ex:https://contosovault.vault.azure.net/keys/contosokek/562a4bb76b524a1493a6afe8e536ee78orhttps://contosovault.vault.azure.net/keys/contosokek.
   */
readonly keyEncryptionKeyUrl?: string;

/**
   * delegated identity to use for accessing key encryption key Url. Ex: /subscriptions/fa5fc227-a624-475e-b696-cdd604c735bc/resourceGroups/{resource group}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/myId. Mutually exclusive with identityType systemAssignedIdentity and userAssignedIdentity - internal use only.
   */
readonly delegatedIdentityClientId?: stringConstranumbers:Min length = 36Max length = 36Pattern = "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$";

/**
   * Values can be systemAssignedIdentity or userAssignedIdentity
   */
readonly identityType?: 'delegatedResourceIdentity''systemAssignedIdentity''userAssignedIdentity';

/**
   * user assigned identity to use for accessing key encryption key Url. Ex: /subscriptions/fa5fc227-a624-475e-b696-cdd604c735bc/resourceGroups/{resource group}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/myId. Mutually exclusive with identityType systemAssignedIdentity and delegatedResourceIdentity.
   */
readonly userAssignedIdentityResourceId?: string;

/**
   * ARM resource id in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/accounts/{storageName}'.
   */
readonly id: string;

/**
   * A provided name which uniquely identifies the linked resource.
   */
readonly uniqueName: string;
}

/**
 * MapsAccounts resource
 */
export class MapsAccounts extends AzAPIBase {
  constructor(scope: Construct, id: string, props: MapsAccountsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Maps/accounts@2023-06-01";
  }

  protected getResourceBody(props: MapsAccountsProps): string {
    return JSON.stringify(
        {properties: {cors: {corsRules: [{allowedOrigins: ["string"]}]}, disableLocalAuth: "${bool}", encryption: {customerManagedKeyEncryption: {keyEncryptionKeyIdentity: {delegatedIdentityClientId: "string", identityType: "string", userAssignedIdentityResourceId: "string"}, keyEncryptionKeyUrl: "string"}, infrastructureEncryption: "string"}, linkedResources: [{id: "string", uniqueName: "string"}]}, sku: {name: "string"}, kind: "string"}
    );
  }
}
