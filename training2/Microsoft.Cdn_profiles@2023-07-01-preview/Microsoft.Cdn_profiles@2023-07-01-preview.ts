import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface CdnProfilesProps extends IAzAPIBaseProps {
/**
   * The pricing tier (defines Azure Front Door Standard or Premium or a CDN provider, feature list and rate) of the profile.
   */
readonly sku: Sku;

/**
   * Managed service identity (system assigned and/or user assigned identities).
   */
readonly identity?: ManagedServiceIdentity;

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
   * Send and receive timeout on forwarding request to the origin. When timeout is reached, the request fails and returns.
   */
readonly originResponseTimeoutSeconds?: numberConstranumbers:Min value = 16;
}

/**
 * CdnProfiles resource
 */
export class CdnProfiles extends AzAPIBase {
  constructor(scope: Construct, id: string, props: CdnProfilesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Cdn/profiles@2023-07-01-preview";
  }

  protected getResourceBody(props: CdnProfilesProps): string {
    return JSON.stringify(
        {properties: {originResponseTimeoutSeconds: "${int}"}, sku: {name: "string"}}
    );
  }
}
