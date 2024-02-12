import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DbformysqlFlexibleserversDatabasesProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:flexibleServers;

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
 * DbformysqlFlexibleserversDatabases resource
 */
export class DbformysqlFlexibleserversDatabases extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DbformysqlFlexibleserversDatabasesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DBforMySQL/flexibleServers/databases@2023-06-30";
  }

  protected getResourceBody(props: DbformysqlFlexibleserversDatabasesProps): string {
    return JSON.stringify(
        {properties: {charset: "string", collation: "string"}}
    );
  }
}
