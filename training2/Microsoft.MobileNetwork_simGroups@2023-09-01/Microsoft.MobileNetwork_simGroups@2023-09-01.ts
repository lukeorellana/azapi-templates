import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface MobilenetworkSimgroupsProps extends IAzAPIBaseProps {
/**
   * The identity used to retrieve the encryption key from Azure key vault.
   */
readonly identity?: ManagedServiceIdentity;

/**
   * Type of managed service identity (currently only UserAssigned allowed).
   */
readonly type: 'None''UserAssigned';

/**
   * The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests.
   */
readonly userAssignedIdentities?: UserAssignedIdentities;

/**
   * 
   */
readonly {customized property}?: UserAssignedIdentity;

/**
   * A key to encrypt the SIM data that belongs to this SIM group.
   */
readonly encryptionKey?: KeyVaultKey;

/**
   * Mobile network that this SIM group belongs to. The mobile network must be in the same location as the SIM group.
   */
readonly mobileNetwork?: MobileNetworkResourceId;

/**
   * The key URL, unversioned. For example:https://contosovault.vault.azure.net/keys/azureKey.
   */
readonly keyUrl?: string;

/**
   * Mobile network resource ID.
   */
readonly id: string Constranumbers:Pattern =^/[sS][uU][bB][sS][cC][rR][iI][pP][tT][iI][oO][nN][sS]/[^/?#]+/[rR][eE][sS][oO][uU][rR][cC][eE][gG][rR][oO][uU][pP][sS]/[^/?#]+/[pP][rR][oO][vV][iI][dD][eE][rR][sS]/[mM][iI][cC][rR][oO][sS][oO][fF][tT]\.[mM][oO][bB][iI][lL][eE][nN][eE][tT][wW][oO][rR][kK]/[mM][oO][bB][iI][lL][eE][nN][eE][tT][wW][oO][rR][kK][sS]/[^/?#]+$;
}

/**
 * MobilenetworkSimgroups resource
 */
export class MobilenetworkSimgroups extends AzAPIBase {
  constructor(scope: Construct, id: string, props: MobilenetworkSimgroupsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.MobileNetwork/simGroups@2023-09-01";
  }

  protected getResourceBody(props: MobilenetworkSimgroupsProps): string {
    return JSON.stringify(
        {properties: {encryptionKey: {keyUrl: "string"}, mobileNetwork: {id: "string"}}}
    );
  }
}
