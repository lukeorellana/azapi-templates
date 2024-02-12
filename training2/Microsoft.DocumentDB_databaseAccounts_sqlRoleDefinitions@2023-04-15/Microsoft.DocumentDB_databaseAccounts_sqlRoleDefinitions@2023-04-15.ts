import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DocumentdbDatabaseaccountsSqlroledefinitionsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:databaseAccounts;

/**
   * A set of fully qualified Scopes at or below which Role Assignments may be created using this Role Definition. This will allow application of this Role Definition on the entire database account or any underlying Database / Collection. Must have at least one element. Scopes higher than Database account are not enforceable as assignable Scopes. Note that resources referenced in assignable Scopes need not exist.
   */
readonly assignableScopes?: string[];

/**
   * The set of operations allowed through this Role Definition.
   */
readonly permissions?: Permission[];

/**
   * A user-friendly name for the Role Definition. Must be unique for the database account.
   */
readonly roleName?: string;

/**
   * Indicates whether the Role Definition was built-in or user created.
   */
readonly type?: 'BuiltInRole''CustomRole';

/**
   * An array of data actions that are allowed.
   */
readonly dataActions?: string[];

/**
   * An array of data actions that are denied.
   */
readonly notDataActions?: string[];
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
