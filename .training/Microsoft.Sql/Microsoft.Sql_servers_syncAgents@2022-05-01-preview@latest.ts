import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SqlServersSyncagentsProps extends IAzAPIBaseProps {

}

/**
 * SqlServersSyncagents resource
 */
export class SqlServersSyncagents extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SqlServersSyncagentsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Sql/servers/syncAgents@2022-05-01-preview";
  }

  protected getResourceBody(props: SqlServersSyncagentsProps): string {
    return JSON.stringify(
        {properties: {syncDatabaseId: "string"}}
    );
  }
}
