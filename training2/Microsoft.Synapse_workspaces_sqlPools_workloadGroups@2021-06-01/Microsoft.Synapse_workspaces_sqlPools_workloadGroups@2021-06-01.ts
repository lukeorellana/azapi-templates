import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SynapseWorkspacesSqlpoolsWorkloadgroupsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:sqlPools;

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
 * SynapseWorkspacesSqlpoolsWorkloadgroups resource
 */
export class SynapseWorkspacesSqlpoolsWorkloadgroups extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SynapseWorkspacesSqlpoolsWorkloadgroupsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Synapse/workspaces/sqlPools/workloadGroups@2021-06-01";
  }

  protected getResourceBody(props: SynapseWorkspacesSqlpoolsWorkloadgroupsProps): string {
    return JSON.stringify(
        {properties: {importance: "string", maxResourcePercent: "${int}", maxResourcePercentPerRequest: "${int}", minResourcePercent: "${int}", minResourcePercentPerRequest: "${int}", queryExecutionTimeout: "${int}"}}
    );
  }
}
