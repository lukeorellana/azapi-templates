import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DocumentdbDatabaseaccountsSqlroleassignmentsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:databaseAccounts;

/**
   * The unique identifier for the associated AAD principal in the AAD graph to which access is being granted through this Role Assignment. Tenant ID for the principal is inferred using the tenant associated with the subscription.
   */
readonly principalId?: string;

/**
   * The unique identifier for the associated Role Definition.
   */
readonly roleDefinitionId?: string;

/**
   * The data plane resource path for which access is being granted through this Role Assignment.
   */
readonly scope?: string;
}

/**
 * DocumentdbDatabaseaccountsSqlroleassignments resource
 */
export class DocumentdbDatabaseaccountsSqlroleassignments extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DocumentdbDatabaseaccountsSqlroleassignmentsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DocumentDB/databaseAccounts/sqlRoleAssignments@2023-04-15";
  }

  protected getResourceBody(props: DocumentdbDatabaseaccountsSqlroleassignmentsProps): string {
    return JSON.stringify(
        {properties: {principalId: "string", roleDefinitionId: "string", scope: "string"}}
    );
  }
}
