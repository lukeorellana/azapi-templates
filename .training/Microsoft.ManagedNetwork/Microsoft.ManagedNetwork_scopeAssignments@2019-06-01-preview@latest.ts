import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ManagednetworkScopeassignmentsProps extends IAzAPIBaseProps {

}

/**
 * ManagednetworkScopeassignments resource
 */
export class ManagednetworkScopeassignments extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ManagednetworkScopeassignmentsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ManagedNetwork/scopeAssignments@2019-06-01-preview";
  }

  protected getResourceBody(props: ManagednetworkScopeassignmentsProps): string {
    return JSON.stringify(
        {properties: {assignedManagedNetwork: "string"}}
    );
  }
}
