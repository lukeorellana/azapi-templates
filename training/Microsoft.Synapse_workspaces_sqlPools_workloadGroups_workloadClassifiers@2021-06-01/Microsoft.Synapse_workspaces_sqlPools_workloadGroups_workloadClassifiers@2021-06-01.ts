import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

export interface SynapseWorkspacesSqlpoolsWorkloadgroupsWorkloadclassifiersProps extends IAzAPIBaseProps {

}

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

// | Name | Description | Value |
// |-|-|-|
// | name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
// | parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:workloadGroups |
// | properties | Resource properties. | WorkloadClassifierProperties |

// | Name | Description | Value |
// |-|-|-|
// | context | The workload classifier context. | string |
// | endTime | The workload classifier end time for classification. | string |
// | importance | The workload classifier importance. | string |
// | label | The workload classifier label. | string |
// | memberName | The workload classifier member name. | string (required) |
// | startTime | The workload classifier start time for classification. | string |
