import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface VideoindexerAccountsProps extends IAzAPIBaseProps {
/**
   * Managed service identity (system assigned and/or user assigned identities)
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
   * The account's data-plane ID. This can be set only when connecting an existing classic account
   */
readonly accountId?: string;

/**
   * The media services details
   */
readonly mediaServices?: MediaServicesForPutRequest;

/**
   * The media services resource id
   */
readonly resourceId?: string;

/**
   * The user assigned identity to be used to grant permissions
   */
readonly userAssignedIdentity?: string;
}

/**
 * VideoindexerAccounts resource
 */
export class VideoindexerAccounts extends AzAPIBase {
  constructor(scope: Construct, id: string, props: VideoindexerAccountsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.VideoIndexer/accounts@2022-08-01";
  }

  protected getResourceBody(props: VideoindexerAccountsProps): string {
    return JSON.stringify(
        {properties: {accountId: "string", mediaServices: {resourceId: "string", userAssignedIdentity: "string"}}}
    );
  }
}
