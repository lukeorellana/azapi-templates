import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SqlServersDatabasesWorkloadgroupsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:databases;

/**
   * The workload group importance level.
   */
readonly importance?: string;

/**
   * The workload group cap percentage resource.
   */
readonly maxResourcePercent: number;

/**
   * The workload group request maximum grant percentage.
   */
readonly maxResourcePercentPerRequest?: number;

/**
   * The workload group minimum percentage resource.
   */
readonly minResourcePercent: number;

/**
   * The workload group request minimum grant percentage.
   */
readonly minResourcePercentPerRequest: number;

/**
   * The workload group query execution timeout.
   */
readonly queryExecutionTimeout?: number;
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
