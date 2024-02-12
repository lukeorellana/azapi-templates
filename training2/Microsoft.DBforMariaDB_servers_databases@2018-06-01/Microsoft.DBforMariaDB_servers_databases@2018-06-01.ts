import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DbformariadbServersDatabasesProps extends IAzAPIBaseProps {
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
