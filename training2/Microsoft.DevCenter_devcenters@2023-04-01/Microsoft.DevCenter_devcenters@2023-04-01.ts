import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DevcenterDevcentersProps extends IAzAPIBaseProps {
/**
   * Managed identity properties
   */
readonly identity?: ManagedServiceIdentity;

/**
   * Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
   */
readonly type: 'None''SystemAssigned''SystemAssigned, UserAssigned''UserAssigned';

/**
   * The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests.
   */
readonly userAssignedIdentities?: object;
}

/**
 * DevcenterDevcenters resource
 */
export class DevcenterDevcenters extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DevcenterDevcentersProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DevCenter/devcenters@2023-04-01";
  }

  protected getResourceBody(props: DevcenterDevcentersProps): string {
    return JSON.stringify(
        {properties: {}}
    );
  }
}
