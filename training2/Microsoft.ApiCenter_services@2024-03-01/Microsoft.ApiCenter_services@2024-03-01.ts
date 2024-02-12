import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ApicenterServicesProps extends IAzAPIBaseProps {
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
readonly userAssignedIdentities?: UserAssignedIdentities;

/**
   * 
   */
readonly {customized property}?: UserAssignedIdentity;
}

/**
 * ApicenterServices resource
 */
export class ApicenterServices extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ApicenterServicesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ApiCenter/services@2024-03-01";
  }

  protected getResourceBody(props: ApicenterServicesProps): string {
    return JSON.stringify(
        {properties: {}}
    );
  }
}
