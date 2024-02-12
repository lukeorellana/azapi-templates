import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface MigrateProjectsGroupsAssessmentsProps extends IAzAPIBaseProps {

}

/**
 * MigrateProjectsGroupsAssessments resource
 */
export class MigrateProjectsGroupsAssessments extends AzAPIBase {
  constructor(scope: Construct, id: string, props: MigrateProjectsGroupsAssessmentsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Migrate/projects/groups/assessments@2018-02-02";
  }

  protected getResourceBody(props: MigrateProjectsGroupsAssessmentsProps): string {
    return JSON.stringify(
        {properties: {azureHybridUseBenefit: "string", azureLocation: "string", azureOfferCode: "string", azurePricingTier: "string", azureStorageRedundancy: "string", currency: "string", discountPercentage: "${int}", percentile: "string", scalingFactor: "${int}", sizingCriterion: "string", stage: "string", timeRange: "string"}, eTag: "string"}
    );
  }
}
