import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SynapseWorkspacesSqlpoolsWorkloadgroupsWorkloadclassifiersProps extends IAzAPIBaseProps {

}

/**
 * SynapseWorkspacesSqlpoolsWorkloadgroupsWorkloadclassifiers resource
 */
export class SynapseWorkspacesSqlpoolsWorkloadgroupsWorkloadclassifiers extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SynapseWorkspacesSqlpoolsWorkloadgroupsWorkloadclassifiersProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Synapse/workspaces/sqlPools/workloadGroups/workloadClassifiers@2021-06-01";
  }

  protected getResourceBody(props: SynapseWorkspacesSqlpoolsWorkloadgroupsWorkloadclassifiersProps): string {
    return JSON.stringify(
        {properties: {context: "string", endTime: "string", importance: "string", label: "string", memberName: "string", startTime: "string"}}
    );
  }
}
