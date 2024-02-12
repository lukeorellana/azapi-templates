import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface MigrateAssessmentprojectsGroupsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:assessmentProjects;

/**
   * For optimistic concurrency control.
   */
readonly eTag?: string;

/**
   * The type of group.
   */
readonly groupType?: string;
}

/**
 * MigrateAssessmentprojectsGroups resource
 */
export class MigrateAssessmentprojectsGroups extends AzAPIBase {
  constructor(scope: Construct, id: string, props: MigrateAssessmentprojectsGroupsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Migrate/assessmentProjects/groups@2019-10-01";
  }

  protected getResourceBody(props: MigrateAssessmentprojectsGroupsProps): string {
    return JSON.stringify(
        {properties: {groupType: "string"}, eTag: "string"}
    );
  }
}
