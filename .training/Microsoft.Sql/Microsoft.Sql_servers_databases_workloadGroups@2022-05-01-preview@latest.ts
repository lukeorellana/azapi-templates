import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SqlServersDatabasesWorkloadgroupsProps extends IAzAPIBaseProps {

}

/**
 * SqlServersDatabasesWorkloadgroups resource
 */
export class SqlServersDatabasesWorkloadgroups extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SqlServersDatabasesWorkloadgroupsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Sql/servers/databases/workloadGroups@2022-05-01-preview";
  }

  protected getResourceBody(props: SqlServersDatabasesWorkloadgroupsProps): string {
    return JSON.stringify(
        {properties: {importance: "string", maxResourcePercent: "${int}", maxResourcePercentPerRequest: "${int}", minResourcePercent: "${int}", minResourcePercentPerRequest: "${int}", queryExecutionTimeout: "${int}"}}
    );
  }
}
