import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface LoadtestserviceLoadtestsProps extends IAzAPIBaseProps {
/**
   * The type of identity used for the resource.
   */
readonly identity?: ManagedServiceIdentity;

/**
   * Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
   */
readonly type: 'None''SystemAssigned''SystemAssigned,UserAssigned''UserAssigned';

/**
   * The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests.
   */
readonly userAssignedIdentities?: object;

/**
   * Description of the resource.
   */
readonly description?: string;

/**
   * CMK Encryption property.
   */
readonly encryption?: EncryptionProperties;

/**
   * All identity configuration for Customer-managed key settings defining which identity should be used to auth to Key Vault.
   */
readonly identity?: EncryptionPropertiesIdentity;

/**
   * key encryption key Url, versioned. Ex:https://contosovault.vault.azure.net/keys/contosokek/562a4bb76b524a1493a6afe8e536ee78orhttps://contosovault.vault.azure.net/keys/contosokek.
   */
readonly keyUrl?: string;

/**
   * user assigned identity to use for accessing key encryption key Url. Ex: /subscriptions/fa5fc227-a624-475e-b696-cdd604c735bc/resourceGroups/{resource group}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/myId
   */
readonly resourceId?: string;

/**
   * Managed identity type to use for accessing encryption key Url
   */
readonly type?: 'SystemAssigned''UserAssigned';
}

/**
 * LoadtestserviceLoadtests resource
 */
export class LoadtestserviceLoadtests extends AzAPIBase {
  constructor(scope: Construct, id: string, props: LoadtestserviceLoadtestsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.LoadTestService/loadTests@2022-12-01";
  }

  protected getResourceBody(props: LoadtestserviceLoadtestsProps): string {
    return JSON.stringify(
        {properties: {description: "string", encryption: {identity: {resourceId: "string", type: "string"}, keyUrl: "string"}}}
    );
  }
}
