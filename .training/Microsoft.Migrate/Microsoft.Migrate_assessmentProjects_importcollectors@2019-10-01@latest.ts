import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface MigrateAssessmentprojectsImportcollectorsProps extends IAzAPIBaseProps {

}

/**
 * MigrateAssessmentprojectsImportcollectors resource
 */
export class MigrateAssessmentprojectsImportcollectors extends AzAPIBase {
  constructor(scope: Construct, id: string, props: MigrateAssessmentprojectsImportcollectorsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Migrate/assessmentProjects/importcollectors@2019-10-01";
  }

  protected getResourceBody(props: MigrateAssessmentprojectsImportcollectorsProps): string {
    return JSON.stringify(
        {properties: {discoverySiteId: "string"}, eTag: "string"}
    );
  }
}
