import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface Props extends IAzAPIBaseProps {
/**
   * Sets the identity property for automation account
   */
readonly identity?: Identity;

/**
   * The identity type.
   */
readonly type?: 'None''SystemAssigned''SystemAssigned, UserAssigned''UserAssigned';

/**
   * The list of user identities associated with the resource. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.
   */
readonly userAssignedIdentities?: IdentityUserAssignedIdentities;

/**
   * 
   */
readonly {customized property}?: UserAssignedIdentitiesProperties;

/**
   * Indicates whether requests using non-AAD authentication are blocked
   */
readonly disableLocalAuth?: bool;

/**
   * Set the encryption properties for the automation account
   */
readonly encryption?: EncryptionProperties;

/**
   * Indicates whether traffic on the non-ARM endpoint (Webhook/Agent) is allowed from the public internet
   */
readonly publicNetworkAccess?: bool;

/**
   * Gets or sets account SKU.
   */
readonly sku?: Sku;

/**
   * User identity used for CMK.
   */
readonly identity?: EncryptionPropertiesIdentity;

/**
   * Encryption Key Source
   */
readonly keySource?: 'Microsoft.Automation''Microsoft.Keyvault';

/**
   * Key vault properties.
   */
readonly keyVaultProperties?: KeyVaultProperties;

/**
   * The user identity used for CMK. It will be an ARM resource id in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.
   */
readonly userAssignedIdentity?: For Bicep, you can use theany()function.;

/**
   * The name of key used to encrypt data.
   */
readonly keyName?: string;

/**
   * The URI of the key vault key used to encrypt data.
   */
readonly keyvaultUri?: string;

/**
   * The key version of the key used to encrypt data.
   */
readonly keyVersion?: string;

/**
   * Gets or sets the SKU capacity.
   */
readonly capacity?: number;

/**
   * Gets or sets the SKU family.
   */
readonly family?: string;
}

/**
 *  resource
 */
export class  extends AzAPIBase {
  constructor(scope: Construct, id: string, props: Props) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "";
  }

  protected getResourceBody(props: Props): string {
    return JSON.stringify(
        
    );
  }
}
