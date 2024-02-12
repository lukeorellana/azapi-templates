import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DocumentdbDatabaseaccountsSqlroleassignmentsProps extends IAzAPIBaseProps {

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
