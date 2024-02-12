import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SynapseWorkspacesKustopoolsPrincipalassignmentsProps extends IAzAPIBaseProps {

}

/**
 * SynapseWorkspacesKustopoolsPrincipalassignments resource
 */
export class SynapseWorkspacesKustopoolsPrincipalassignments extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SynapseWorkspacesKustopoolsPrincipalassignmentsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Synapse/workspaces/kustoPools/principalAssignments@2021-06-01-preview";
  }

  protected getResourceBody(props: SynapseWorkspacesKustopoolsPrincipalassignmentsProps): string {
    return JSON.stringify(
        {properties: {principalId: "string", principalType: "string", role: "string", tenantId: "string"}}
    );
  }
}
