import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SynapseWorkspacesKustopoolsPrincipalassignmentsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:kustoPools;

/**
   * The principal ID assigned to the cluster principal. It can be a user email, application ID, or security group name.
   */
readonly principalId: string;

/**
   * Principal type.
   */
readonly principalType: 'App''Group''User';

/**
   * Cluster principal role.
   */
readonly role: 'AllDatabasesAdmin''AllDatabasesViewer';

/**
   * The tenant id of the principal
   */
readonly tenantId?: string;
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
