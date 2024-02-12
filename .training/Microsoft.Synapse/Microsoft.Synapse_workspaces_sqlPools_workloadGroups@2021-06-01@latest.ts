import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SynapseWorkspacesSqlpoolsWorkloadgroupsProps extends IAzAPIBaseProps {

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
