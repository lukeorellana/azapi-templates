import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface KustoClustersDatabasesPrincipalassignmentsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:databases;

/**
   * The principal ID assigned to the database principal. It can be a user email, application ID, or security group name.
   */
readonly principalId: string;

/**
   * Principal type.
   */
readonly principalType: 'App''Group''User';

/**
   * Database principal role.
   */
readonly role: 'Admin''Ingestor''Monitor''UnrestrictedViewer''User''Viewer';

/**
   * The tenant id of the principal
   */
readonly tenantId?: string;
}

/**
 * KustoClustersDatabasesPrincipalassignments resource
 */
export class KustoClustersDatabasesPrincipalassignments extends AzAPIBase {
  constructor(scope: Construct, id: string, props: KustoClustersDatabasesPrincipalassignmentsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Kusto/clusters/databases/principalAssignments@2023-08-15";
  }

  protected getResourceBody(props: KustoClustersDatabasesPrincipalassignmentsProps): string {
    return JSON.stringify(
        {properties: {principalId: "string", principalType: "string", role: "string", tenantId: "string"}}
    );
  }
}
