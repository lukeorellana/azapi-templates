import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface MigrateAssessmentprojectsGroupsProps extends IAzAPIBaseProps {

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
