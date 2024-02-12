import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SqlServersJobagentsProps extends IAzAPIBaseProps {

}

/**
 * SqlServersJobagents resource
 */
export class SqlServersJobagents extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SqlServersJobagentsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Sql/servers/jobAgents@2022-05-01-preview";
  }

  protected getResourceBody(props: SqlServersJobagentsProps): string {
    return JSON.stringify(
        {properties: {databaseId: "string"}, sku: {capacity: "${int}", family: "string", name: "string", size: "string", tier: "string"}}
    );
  }
}
