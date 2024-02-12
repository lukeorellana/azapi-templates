import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

export interface SynapseWorkspacesSqlpoolsWorkloadgroupsProps extends IAzAPIBaseProps {

}

export class SynapseWorkspacesSqlpoolsWorkloadgroups extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SynapseWorkspacesSqlpoolsWorkloadgroupsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Synapse/workspaces/sqlPools/workloadGroups@2021-06-01";
  }

  protected getResourceBody(props: SynapseWorkspacesSqlpoolsWorkloadgroupsProps): string {
    return JSON.stringify(
      {properties: {importance: "string", maxResourcePercent: int, maxResourcePercentPerRequest: int, minResourcePercent: int, minResourcePercentPerRequest: int, queryExecutionTimeout: int}}
    );
  }
}

// | Name | Description | Value |
// |-|-|-|
// | name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
// | parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:sqlPools |
// | properties | Resource properties. | WorkloadGroupProperties |

// | Name | Description | Value |
// |-|-|-|
// | importance | The workload group importance level. | string |
// | maxResourcePercent | The workload group cap percentage resource. | int (required) |
// | maxResourcePercentPerRequest | The workload group request maximum grant percentage. | int |
// | minResourcePercent | The workload group minimum percentage resource. | int (required) |
// | minResourcePercentPerRequest | The workload group request minimum grant percentage. | int (required) |
// | queryExecutionTimeout | The workload group query execution timeout. | int |
