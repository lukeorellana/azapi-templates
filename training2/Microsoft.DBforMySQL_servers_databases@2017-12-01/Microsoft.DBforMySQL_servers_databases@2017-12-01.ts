import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DbformysqlServersDatabasesProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:servers;

/**
   * The charset of the database.
   */
readonly charset?: string;

/**
   * The collation of the database.
   */
readonly collation?: string;
}

/**
 * DbformysqlServersDatabases resource
 */
export class DbformysqlServersDatabases extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DbformysqlServersDatabasesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DBforMySQL/servers/databases@2017-12-01";
  }

  protected getResourceBody(props: DbformysqlServersDatabasesProps): string {
    return JSON.stringify(
        {properties: {charset: "string", collation: "string"}}
    );
  }
}
