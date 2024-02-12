import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface MigrateAssessmentprojectsHypervcollectorsProps extends IAzAPIBaseProps {

}

/**
 * MigrateAssessmentprojectsHypervcollectors resource
 */
export class MigrateAssessmentprojectsHypervcollectors extends AzAPIBase {
  constructor(scope: Construct, id: string, props: MigrateAssessmentprojectsHypervcollectorsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Migrate/assessmentProjects/hypervcollectors@2019-10-01";
  }

  protected getResourceBody(props: MigrateAssessmentprojectsHypervcollectorsProps): string {
    return JSON.stringify(
        {properties: {agentProperties: {spnDetails: {applicationId: "string", audience: "string", authority: "string", objectId: "string", tenantId: "string"}}, discoverySiteId: "string"}, eTag: "string"}
    );
  }
}
