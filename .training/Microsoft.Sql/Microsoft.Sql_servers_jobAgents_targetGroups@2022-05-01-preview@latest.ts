import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SqlServersJobagentsTargetgroupsProps extends IAzAPIBaseProps {

}

/**
 * SqlServersJobagentsTargetgroups resource
 */
export class SqlServersJobagentsTargetgroups extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SqlServersJobagentsTargetgroupsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Sql/servers/jobAgents/targetGroups@2022-05-01-preview";
  }

  protected getResourceBody(props: SqlServersJobagentsTargetgroupsProps): string {
    return JSON.stringify(
        {properties: {members: [{databaseName: "string", elasticPoolName: "string", membershipType: "string", refreshCredential: "string", serverName: "string", shardMapName: "string", type: "string"}]}}
    );
  }
}
