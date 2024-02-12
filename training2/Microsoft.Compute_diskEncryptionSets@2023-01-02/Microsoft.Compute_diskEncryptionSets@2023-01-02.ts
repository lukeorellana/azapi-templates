import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ComputeDiskencryptionsetsProps extends IAzAPIBaseProps {
/**
   * The managed identity for the disk encryption set. It should be given permission on the key vault before it can be used to encrypt disks.
   */
readonly identity?: EncryptionSetIdentity;

/**
   * The type of Managed Identity used by the DiskEncryptionSet. Only SystemAssigned is supported for new creations. Disk Encryption Sets can be updated with Identity type None during migration of subscription to a new Azure Active Directory tenant; it will cause the encrypted resources to lose access to the keys.
   */
readonly type?: 'None''SystemAssigned''SystemAssigned, UserAssigned''UserAssigned';

/**
   * The list of user identities associated with the disk encryption set. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.
   */
readonly userAssignedIdentities?: object;

/**
   * The key vault key which is currently used by this disk encryption set.
   */
readonly activeKey?: KeyForDiskEncryptionSet;

/**
   * The type of key used to encrypt the data of the disk.
   */
readonly encryptionType?: 'ConfidentialVmEncryptedWithCustomerKey''EncryptionAtRestWithCustomerKey''EncryptionAtRestWithPlatformAndCustomerKeys';

/**
   * Multi-tenant application client id to access key vault in a different tenant. Setting the value to 'None' will clear the property.
   */
readonly federatedClientId?: string;

/**
   * Set this flag to true to enable auto-updating of this disk encryption set to the latest key version.
   */
readonly rotationToLatestKeyVersionEnabled?: bool;

/**
   * Fully versioned Key Url pointing to a key in KeyVault. Version segment of the Url is required regardless of rotationToLatestKeyVersionEnabled value.
   */
readonly keyUrl: string;

/**
   * Resource id of the KeyVault containing the key or secret. This property is optional and cannot be used if the KeyVault subscription is not the same as the Disk Encryption Set subscription.
   */
readonly sourceVault?: SourceVault;

/**
   * Resource Id
   */
readonly id?: string;
}

/**
 * ComputeDiskencryptionsets resource
 */
export class ComputeDiskencryptionsets extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ComputeDiskencryptionsetsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Compute/diskEncryptionSets@2023-01-02";
  }

  protected getResourceBody(props: ComputeDiskencryptionsetsProps): string {
    return JSON.stringify(
        {properties: {activeKey: {keyUrl: "string", sourceVault: {id: "string"}}, encryptionType: "string", federatedClientId: "string", rotationToLatestKeyVersionEnabled: "${bool}"}}
    );
  }
}
