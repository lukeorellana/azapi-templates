import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface MigrateAssessmentprojectsGroupsAssessmentsProps extends IAzAPIBaseProps {

}

/**
 * MigrateAssessmentprojectsGroupsAssessments resource
 */
export class MigrateAssessmentprojectsGroupsAssessments extends AzAPIBase {
  constructor(scope: Construct, id: string, props: MigrateAssessmentprojectsGroupsAssessmentsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Migrate/assessmentProjects/groups/assessments@2019-10-01";
  }

  protected getResourceBody(props: MigrateAssessmentprojectsGroupsAssessmentsProps): string {
    return JSON.stringify(
        {properties: {azureDiskType: "string", azureHybridUseBenefit: "string", azureLocation: "string", azureOfferCode: "string", azurePricingTier: "string", azureStorageRedundancy: "string", azureVmFamilies: ["string"], currency: "string", discountPercentage: "${int}", percentile: "string", reservedInstance: "string", scalingFactor: "${int}", sizingCriterion: "string", stage: "string", timeRange: "string", vmUptime: {daysPerMonth: "${int}", hoursPerDay: "${int}"}}, eTag: "string"}
    );
  }
}
