import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DbformysqlServersDatabasesProps extends IAzAPIBaseProps {

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
