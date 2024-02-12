import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DbforpostgresqlServersDatabasesProps extends IAzAPIBaseProps {

}

/**
 * DbforpostgresqlServersDatabases resource
 */
export class DbforpostgresqlServersDatabases extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DbforpostgresqlServersDatabasesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DBforPostgreSQL/servers/databases@2017-12-01";
  }

  protected getResourceBody(props: DbforpostgresqlServersDatabasesProps): string {
    return JSON.stringify(
        {properties: {charset: "string", collation: "string"}}
    );
  }
}
