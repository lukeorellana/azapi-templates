import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface CacheRedisenterpriseProps extends IAzAPIBaseProps {
/**
   * The SKU to create, which affects price, performance, and features.
   */
readonly sku: Sku;

/**
   * The identity of the resource.
   */
readonly identity?: ManagedServiceIdentity;

/**
   * The Availability Zones where this cluster will be deployed.
   */
readonly zones?: string[];

/**
   * Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
   */
readonly type: 'None''SystemAssigned''SystemAssigned, UserAssigned''UserAssigned';

/**
   * The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests.
   */
readonly userAssignedIdentities?: UserAssignedIdentities;

/**
   * 
   */
readonly {customized property}?: UserAssignedIdentity;

/**
   * Encryption-at-rest configuration for the cluster.
   */
readonly encryption?: ClusterPropertiesEncryption;

/**
   * The minimum TLS version for the cluster to support, e.g. '1.2'
   */
readonly minimumTlsVersion?: '1.0''1.1''1.2';

/**
   * All Customer-managed key encryption properties for the resource. Set this to an empty object to use Microsoft-managed key encryption.
   */
readonly customerManagedKeyEncryption?: ClusterPropertiesEncryptionCustomerManagedKeyEncrypt...;

/**
   * All identity configuration for Customer-managed key settings defining which identity should be used to auth to Key Vault.
   */
readonly keyEncryptionKeyIdentity?: ClusterPropertiesEncryptionCustomerManagedKeyEncrypt...;

/**
   * Key encryption key Url, versioned only. Ex:https://contosovault.vault.azure.net/keys/contosokek/562a4bb76b524a1493a6afe8e536ee78
   */
readonly keyEncryptionKeyUrl?: string;

/**
   * Only userAssignedIdentity is supported in this API version; other types may be supported in the future
   */
readonly identityType?: 'systemAssignedIdentity''userAssignedIdentity';

/**
   * User assigned identity to use for accessing key encryption key Url. Ex: /subscriptions/{sub uuid}/resourceGroups/{resource group}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/myId.
   */
readonly userAssignedIdentityResourceId?: string;

/**
   * The size of the RedisEnterprise cluster. Defaults to 2 or 3 depending on SKU. Valid values are (2, 4, 6, ...) for Enterprise SKUs and (3, 9, 15, ...) for Flash SKUs.
   */
readonly capacity?: number;
}

/**
 * CacheRedisenterprise resource
 */
export class CacheRedisenterprise extends AzAPIBase {
  constructor(scope: Construct, id: string, props: CacheRedisenterpriseProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Cache/redisEnterprise@2023-11-01";
  }

  protected getResourceBody(props: CacheRedisenterpriseProps): string {
    return JSON.stringify(
        {properties: {encryption: {customerManagedKeyEncryption: {keyEncryptionKeyIdentity: {identityType: "string", userAssignedIdentityResourceId: "string"}, keyEncryptionKeyUrl: "string"}}, minimumTlsVersion: "string"}, zones: ["string"], sku: {capacity: "${int}", name: "string"}}
    );
  }
}
