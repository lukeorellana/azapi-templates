import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface KustoClustersPrincipalassignmentsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:clusters;

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
 * KustoClustersPrincipalassignments resource
 */
export class KustoClustersPrincipalassignments extends AzAPIBase {
  constructor(scope: Construct, id: string, props: KustoClustersPrincipalassignmentsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Kusto/clusters/principalAssignments@2023-08-15";
  }

  protected getResourceBody(props: KustoClustersPrincipalassignmentsProps): string {
    return JSON.stringify(
        {properties: {principalId: "string", principalType: "string", role: "string", tenantId: "string"}}
    );
  }
}
