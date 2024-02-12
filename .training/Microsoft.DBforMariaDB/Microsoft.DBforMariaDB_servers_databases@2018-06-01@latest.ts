import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DbformariadbServersDatabasesProps extends IAzAPIBaseProps {

}

/**
 * DbformariadbServersDatabases resource
 */
export class DbformariadbServersDatabases extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DbformariadbServersDatabasesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DBforMariaDB/servers/databases@2018-06-01";
  }

  protected getResourceBody(props: DbformariadbServersDatabasesProps): string {
    return JSON.stringify(
        {properties: {charset: "string", collation: "string"}}
    );
  }
}
