import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface MigrateProjectsGroupsAssessmentsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:groups;

/**
   * For optimistic concurrency control.
   */
readonly eTag?: string;

/**
   * AHUB discount on windows virtual machines.
   */
readonly azureHybridUseBenefit: 'No''Unknown''Yes';

/**
   * Target Azure location for which the machines should be assessed. These enums are the same as used by Compute API.
   */
readonly azureLocation: 'AustraliaEast''AustraliaSoutheast''BrazilSouth''CanadaCentral''CanadaEast''CentralIndia''CentralUs''ChinaEast''ChinaNorth''EastAsia''EastUs''EastUs2''GermanyCentral''GermanyNortheast''JapanEast''JapanWest''KoreaCentral''KoreaSouth''NorthCentralUs''NorthEurope''SouthCentralUs''SouthIndia''SoutheastAsia''UkSouth''UkWest''Unknown''WestCentralUs''WestEurope''WestIndia''WestUs''WestUs2';

/**
   * Offer code according to which cost estimation is done.
   */
readonly azureOfferCode: 'MSAZR0003P''MSAZR0022P''MSAZR0023P''MSAZR0025P''MSAZR0029P''MSAZR0036P''MSAZR0044P''MSAZR0059P''MSAZR0060P''MSAZR0062P''MSAZR0063P''MSAZR0064P''MSAZR0111P''MSAZR0120P''MSAZR0121P''MSAZR0122P''MSAZR0123P''MSAZR0124P''MSAZR0125P''MSAZR0126P''MSAZR0127P''MSAZR0128P''MSAZR0129P''MSAZR0130P''MSAZR0144P''MSAZR0148P''MSAZR0149P''MSAZRDE0003P''MSAZRDE0044P''MSMCAZR0044P''MSMCAZR0059P''MSMCAZR0060P''MSMCAZR0063P''MSMCAZR0120P''MSMCAZR0121P''MSMCAZR0125P''MSMCAZR0128P''Unknown';

/**
   * Pricing tier for Size evaluation.
   */
readonly azurePricingTier: 'Basic''Standard';

/**
   * Storage Redundancy type offered by Azure.
   */
readonly azureStorageRedundancy: 'GeoRedundant''LocallyRedundant''ReadAccessGeoRedundant''Unknown''ZoneRedundant';

/**
   * Currency to report prices in.
   */
readonly currency: 'ARS''AUD''BRL''CAD''CHF''CNY''DKK''EUR''GBP''HKD''IDR''INR''JPY''KRW''MXN''MYR''NOK''NZD''RUB''SAR''SEK''TRY''TWD''USD''Unknown''ZAR';

/**
   * Custom discount percentage to be applied on final costs. Can be in the range [0, 100].
   */
readonly discountPercentage: number;

/**
   * Percentile of performance data used to recommend Azure size.
   */
readonly percentile: 'Percentile50''Percentile90''Percentile95''Percentile99';

/**
   * Scaling factor used over utilization data to add a performance buffer for new machines to be created in Azure. Min Value = 1.0, Max value = 1.9, Default = 1.3.
   */
readonly scalingFactor: number;

/**
   * Assessment sizing criterion.
   */
readonly sizingCriterion: 'AsOnPremises''PerformanceBased';

/**
   * User configurable setting that describes the status of the assessment.
   */
readonly stage: 'Approved''InProgress''UnderReview';

/**
   * Time range of performance data used to recommend a size.
   */
readonly timeRange: 'Day''Month''Week';
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
