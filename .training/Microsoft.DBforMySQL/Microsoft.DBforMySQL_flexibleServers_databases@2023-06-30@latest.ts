import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DbformysqlFlexibleserversDatabasesProps extends IAzAPIBaseProps {

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
