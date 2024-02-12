import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DocumentdbDatabaseaccountsMongodbroledefinitionsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:databaseAccounts;

/**
   * The database name for which access is being granted for this Role Definition.
   */
readonly databaseName?: string;

/**
   * A set of privileges contained by the Role Definition. This will allow application of this Role Definition on the entire database account or any underlying Database / Collection. Scopes higher than Database are not enforceable as privilege.
   */
readonly privileges?: Privilege[];

/**
   * A user-friendly name for the Role Definition. Must be unique for the database account.
   */
readonly roleName?: string;

/**
   * The set of roles inherited by this Role Definition.
   */
readonly roles?: Role[];

/**
   * Indicates whether the Role Definition was built-in or user created.
   */
readonly type?: 'BuiltInRole''CustomRole';

/**
   * An array of actions that are allowed.
   */
readonly actions?: string[];

/**
   * An Azure Cosmos DB Mongo DB Resource.
   */
readonly resource?: PrivilegeResource;

/**
   * The collection name the role is applied.
   */
readonly collection?: string;

/**
   * The database name the role is applied.
   */
readonly db?: string;

/**
   * The database name the role is applied.
   */
readonly db?: string;

/**
   * The role name.
   */
readonly role?: string;
}

/**
 * DocumentdbDatabaseaccountsMongodbroledefinitions resource
 */
export class DocumentdbDatabaseaccountsMongodbroledefinitions extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DocumentdbDatabaseaccountsMongodbroledefinitionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DocumentDB/databaseAccounts/mongodbRoleDefinitions@2023-04-15";
  }

  protected getResourceBody(props: DocumentdbDatabaseaccountsMongodbroledefinitionsProps): string {
    return JSON.stringify(
        {properties: {databaseName: "string", privileges: [{actions: ["string"], resource: {collection: "string", db: "string"}}], roleName: "string", roles: [{db: "string", role: "string"}], type: "string"}}
    );
  }
}
