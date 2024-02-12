import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SqlServersDatabasesWorkloadgroupsWorkloadclassifiersProps extends IAzAPIBaseProps {

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
