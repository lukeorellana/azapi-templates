import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface HybridnetworkPublishersProps extends IAzAPIBaseProps {
/**
   * The managed identity of the publisher, if configured.
   */
readonly identity?: ManagedServiceIdentity;

/**
   * Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
   */
readonly type: 'None''SystemAssigned''SystemAssigned,UserAssigned''UserAssigned';

/**
   * The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests.
   */
readonly userAssignedIdentities?: UserAssignedIdentities;

/**
   * 
   */
readonly {customized property}?: UserAssignedIdentity;

/**
   * The publisher scope.
   */
readonly scope?: 'Private''Unknown';
}

/**
 * HybridnetworkPublishers resource
 */
export class HybridnetworkPublishers extends AzAPIBase {
  constructor(scope: Construct, id: string, props: HybridnetworkPublishersProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.HybridNetwork/publishers@2023-09-01";
  }

  protected getResourceBody(props: HybridnetworkPublishersProps): string {
    return JSON.stringify(
        {properties: {scope: "string"}}
    );
  }
}
