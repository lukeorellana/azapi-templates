import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DbforpostgresqlFlexibleserversDatabasesProps extends IAzAPIBaseProps {

}

/**
 * DbforpostgresqlFlexibleserversDatabases resource
 */
export class DbforpostgresqlFlexibleserversDatabases extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DbforpostgresqlFlexibleserversDatabasesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DBforPostgreSQL/flexibleServers/databases@2023-03-01-preview";
  }

  protected getResourceBody(props: DbforpostgresqlFlexibleserversDatabasesProps): string {
    return JSON.stringify(
        {properties: {charset: "string", collation: "string"}}
    );
  }
}
