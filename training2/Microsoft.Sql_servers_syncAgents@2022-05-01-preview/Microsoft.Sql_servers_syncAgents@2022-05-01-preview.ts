import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SqlServersSyncagentsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:servers;

/**
   * ARM resource id of the sync database in the sync agent.
   */
readonly syncDatabaseId?: string;
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
