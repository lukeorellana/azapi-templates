import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SqlServersDatabasesWorkloadgroupsWorkloadclassifiersProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:workloadGroups;

/**
   * The workload classifier context.
   */
readonly context?: string;

/**
   * The workload classifier end time for classification.
   */
readonly endTime?: string;

/**
   * The workload classifier importance.
   */
readonly importance?: string;

/**
   * The workload classifier label.
   */
readonly label?: string;

/**
   * The workload classifier member name.
   */
readonly memberName: string;

/**
   * The workload classifier start time for classification.
   */
readonly startTime?: string;
}

/**
 * SqlServersDatabasesWorkloadgroupsWorkloadclassifiers resource
 */
export class SqlServersDatabasesWorkloadgroupsWorkloadclassifiers extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SqlServersDatabasesWorkloadgroupsWorkloadclassifiersProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Sql/servers/databases/workloadGroups/workloadClassifiers@2022-05-01-preview";
  }

  protected getResourceBody(props: SqlServersDatabasesWorkloadgroupsWorkloadclassifiersProps): string {
    return JSON.stringify(
        {properties: {context: "string", endTime: "string", importance: "string", label: "string", memberName: "string", startTime: "string"}}
    );
  }
}
