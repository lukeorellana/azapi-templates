import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DocumentdbDatabaseaccountsSqlroledefinitionsProps extends IAzAPIBaseProps {

}

/**
 * DocumentdbDatabaseaccountsSqlroledefinitions resource
 */
export class DocumentdbDatabaseaccountsSqlroledefinitions extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DocumentdbDatabaseaccountsSqlroledefinitionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DocumentDB/databaseAccounts/sqlRoleDefinitions@2023-04-15";
  }

  protected getResourceBody(props: DocumentdbDatabaseaccountsSqlroledefinitionsProps): string {
    return JSON.stringify(
        {properties: {assignableScopes: ["string"], permissions: [{dataActions: ["string"], notDataActions: ["string"]}], roleName: "string", type: "string"}}
    );
  }
}
