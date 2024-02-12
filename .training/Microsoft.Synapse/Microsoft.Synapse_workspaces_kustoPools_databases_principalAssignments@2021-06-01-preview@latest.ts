import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SynapseWorkspacesKustopoolsDatabasesPrincipalassignmentsProps extends IAzAPIBaseProps {

}

/**
 * SynapseWorkspacesKustopoolsDatabasesPrincipalassignments resource
 */
export class SynapseWorkspacesKustopoolsDatabasesPrincipalassignments extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SynapseWorkspacesKustopoolsDatabasesPrincipalassignmentsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Synapse/workspaces/kustoPools/databases/principalAssignments@2021-06-01-preview";
  }

  protected getResourceBody(props: SynapseWorkspacesKustopoolsDatabasesPrincipalassignmentsProps): string {
    return JSON.stringify(
        {properties: {principalId: "string", principalType: "string", role: "string", tenantId: "string"}}
    );
  }
}
