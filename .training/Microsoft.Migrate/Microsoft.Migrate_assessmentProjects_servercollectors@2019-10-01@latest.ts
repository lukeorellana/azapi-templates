import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface MigrateAssessmentprojectsServercollectorsProps extends IAzAPIBaseProps {

}

/**
 * MigrateAssessmentprojectsServercollectors resource
 */
export class MigrateAssessmentprojectsServercollectors extends AzAPIBase {
  constructor(scope: Construct, id: string, props: MigrateAssessmentprojectsServercollectorsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Migrate/assessmentProjects/servercollectors@2019-10-01";
  }

  protected getResourceBody(props: MigrateAssessmentprojectsServercollectorsProps): string {
    return JSON.stringify(
        {properties: {agentProperties: {spnDetails: {applicationId: "string", audience: "string", authority: "string", objectId: "string", tenantId: "string"}}, discoverySiteId: "string"}, eTag: "string"}
    );
  }
}
