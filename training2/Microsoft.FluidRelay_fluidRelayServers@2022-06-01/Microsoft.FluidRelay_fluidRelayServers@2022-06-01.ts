import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface FluidrelayFluidrelayserversProps extends IAzAPIBaseProps {
/**
   * The type of identity used for the resource.
   */
readonly identity?: Identity;

/**
   * The identity type.
   */
readonly type?: 'None''SystemAssigned''SystemAssigned, UserAssigned''UserAssigned';

/**
   * The list of user identities associated with the resource.
   */
readonly userAssignedIdentities?: object;

/**
   * All encryption configuration for a resource.
   */
readonly encryption?: EncryptionProperties;

/**
   * Provision states for FluidRelay RP
   */
readonly provisioningState?: 'Canceled''Failed''Succeeded';

/**
   * Sku of the storage associated with the resource
   */
readonly storagesku?: 'basic''standard';

/**
   * All Customer-managed key encryption properties for the resource.
   */
readonly customerManagedKeyEncryption?: CustomerManagedKeyEncryptionProperties;

/**
   * All identity configuration for Customer-managed key settings defining which identity should be used to auth to Key Vault.
   */
readonly keyEncryptionKeyIdentity?: CustomerManagedKeyEncryptionPropertiesKeyEncryptionK...;

/**
   * key encryption key Url, with or without a version. Ex:https://contosovault.vault.azure.net/keys/contosokek/562a4bb76b524a1493a6afe8e536ee78orhttps://contosovault.vault.azure.net/keys/contosokek. Key auto rotation is enabled by providing a key uri without version. Otherwise, customer is responsible for rotating the key. The keyEncryptionKeyIdentity(either SystemAssigned or UserAssigned) should have permission to access this key url.
   */
readonly keyEncryptionKeyUrl?: string;

/**
   * Values can be SystemAssigned or UserAssigned
   */
readonly identityType?: 'SystemAssigned''UserAssigned';

/**
   * user assigned identity to use for accessing key encryption key Url. Ex: /subscriptions/fa5fc227-a624-475e-b696-cdd604c735bc/resourceGroups/{resource group}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/myId. Mutually exclusive with identityType systemAssignedIdentity.
   */
readonly userAssignedIdentityResourceId?: string;
}

/**
 * FluidrelayFluidrelayservers resource
 */
export class FluidrelayFluidrelayservers extends AzAPIBase {
  constructor(scope: Construct, id: string, props: FluidrelayFluidrelayserversProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.FluidRelay/fluidRelayServers@2022-06-01";
  }

  protected getResourceBody(props: FluidrelayFluidrelayserversProps): string {
    return JSON.stringify(
        {properties: {encryption: {customerManagedKeyEncryption: {keyEncryptionKeyIdentity: {identityType: "string", userAssignedIdentityResourceId: "string"}, keyEncryptionKeyUrl: "string"}}, provisioningState: "string", storagesku: "string"}}
    );
  }
}
