import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface MigrateAssessmentprojectsVmwarecollectorsProps extends IAzAPIBaseProps {

}

/**
 * MigrateAssessmentprojectsVmwarecollectors resource
 */
export class MigrateAssessmentprojectsVmwarecollectors extends AzAPIBase {
  constructor(scope: Construct, id: string, props: MigrateAssessmentprojectsVmwarecollectorsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Migrate/assessmentProjects/vmwarecollectors@2019-10-01";
  }

  protected getResourceBody(props: MigrateAssessmentprojectsVmwarecollectorsProps): string {
    return JSON.stringify(
        {properties: {agentProperties: {spnDetails: {applicationId: "string", audience: "string", authority: "string", objectId: "string", tenantId: "string"}}, discoverySiteId: "string"}, eTag: "string"}
    );
  }
}
