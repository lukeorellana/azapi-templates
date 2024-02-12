import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ElasticsanElasticsansVolumegroupsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:elasticSans;

/**
   * The identity of the resource.
   */
readonly identity?: Identity;

/**
   * The identity type.
   */
readonly type: 'None''SystemAssigned''UserAssigned';

/**
   * Gets or sets a list of key value pairs that describe the set of User Assigned identities that will be used with this volume group. The key is the ARM resource identifier of the identity.
   */
readonly userAssignedIdentities?: IdentityUserAssignedIdentities;

/**
   * 
   */
readonly {customized property}?: UserAssignedIdentity;

/**
   * Type of encryption
   */
readonly encryption?: 'EncryptionAtRestWithCustomerManagedKey''EncryptionAtRestWithPlatformKey';

/**
   * Encryption Properties describing Key Vault and Identity information
   */
readonly encryptionProperties?: EncryptionProperties;

/**
   * A collection of rules governing the accessibility from specific network locations.
   */
readonly networkAcls?: NetworkRuleSet;

/**
   * Type of storage target
   */
readonly protocolType?: 'Iscsi''None';

/**
   * The identity to be used with service-side encryption at rest.
   */
readonly identity?: EncryptionIdentity;

/**
   * Properties provided by key vault.
   */
readonly keyVaultProperties?: KeyVaultProperties;

/**
   * Resource identifier of the UserAssigned identity to be associated with server-side encryption on the volume group.
   */
readonly userAssignedIdentity?: string;

/**
   * The name of KeyVault key.
   */
readonly keyName?: string;

/**
   * The Uri of KeyVault.
   */
readonly keyVaultUri?: string;

/**
   * The version of KeyVault key.
   */
readonly keyVersion?: string;

/**
   * The list of virtual network rules.
   */
readonly virtualNetworkRules?: VirtualNetworkRule[];

/**
   * The action of virtual network rule.
   */
readonly action?: 'Allow';

/**
   * Resource ID of a subnet, for example: /subscriptions/{subscriptionId}/resourceGroups/{groupName}/providers/Microsoft.Network/virtualNetworks/{vnetName}/subnets/{subnetName}.
   */
readonly id: string;
}

/**
 * ElasticsanElasticsansVolumegroups resource
 */
export class ElasticsanElasticsansVolumegroups extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ElasticsanElasticsansVolumegroupsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ElasticSan/elasticSans/volumegroups@2023-01-01";
  }

  protected getResourceBody(props: ElasticsanElasticsansVolumegroupsProps): string {
    return JSON.stringify(
        {properties: {encryption: "string", encryptionProperties: {identity: {userAssignedIdentity: "string"}, keyVaultProperties: {keyName: "string", keyVaultUri: "string", keyVersion: "string"}}, networkAcls: {virtualNetworkRules: [{action: "Allow", id: "string"}]}, protocolType: "string"}}
    );
  }
}
