import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface MigrateAssessmentprojectsGroupsAssessmentsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:groups;

/**
   * For optimistic concurrency control.
   */
readonly eTag?: string;

/**
   * Storage type selected for this disk.
   */
readonly azureDiskType: 'Premium''Standard''StandardOrPremium''StandardSSD''Unknown';

/**
   * AHUB discount on windows virtual machines.
   */
readonly azureHybridUseBenefit: 'No''Unknown''Yes';

/**
   * Target Azure location for which the machines should be assessed. These enums are the same as used by Compute API.
   */
readonly azureLocation: 'AustraliaEast''AustraliaSoutheast''BrazilSouth''CanadaCentral''CanadaEast''CentralIndia''CentralUs''ChinaEast''ChinaNorth''EastAsia''EastUs''EastUs2''GermanyCentral''GermanyNortheast''JapanEast''JapanWest''KoreaCentral''KoreaSouth''NorthCentralUs''NorthEurope''SouthCentralUs''SouthIndia''SoutheastAsia''USDoDCentral''USDoDEast''USGovArizona''USGovIowa''USGovTexas''USGovVirginia''UkSouth''UkWest''Unknown''WestCentralUs''WestEurope''WestIndia''WestUs''WestUs2';

/**
   * Offer code according to which cost estimation is done.
   */
readonly azureOfferCode: 'EA''MSAZR0003P''MSAZR0022P''MSAZR0023P''MSAZR0025P''MSAZR0029P''MSAZR0036P''MSAZR0044P''MSAZR0059P''MSAZR0060P''MSAZR0062P''MSAZR0063P''MSAZR0064P''MSAZR0111P''MSAZR0120P''MSAZR0121P''MSAZR0122P''MSAZR0123P''MSAZR0124P''MSAZR0125P''MSAZR0126P''MSAZR0127P''MSAZR0128P''MSAZR0129P''MSAZR0130P''MSAZR0144P''MSAZR0148P''MSAZR0149P''MSAZRDE0003P''MSAZRDE0044P''MSAZRUSGOV0003P''MSMCAZR0044P''MSMCAZR0059P''MSMCAZR0060P''MSMCAZR0063P''MSMCAZR0120P''MSMCAZR0121P''MSMCAZR0125P''MSMCAZR0128P''Unknown';

/**
   * Pricing tier for Size evaluation.
   */
readonly azurePricingTier: 'Basic''Standard';

/**
   * Storage Redundancy type offered by Azure.
   */
readonly azureStorageRedundancy: 'GeoRedundant''LocallyRedundant''ReadAccessGeoRedundant''Unknown''ZoneRedundant';

/**
   * List of azure VM families.
   */
readonly azureVmFamilies: String array containing any of:'Av2_series''Basic_A0_A4''DC_Series''DS_series''DSv2_series''D_series''Dsv3_series''Dv2_series''Dv3_series''Esv3_series''Ev3_series''F_series''Fs_series''Fsv2_series''GS_series''G_series''H_series''Ls_series''M_series''Standard_A0_A7''Standard_A8_A11''Unknown';

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
   * Azure reserved instance.
   */
readonly reservedInstance: 'None''RI1Year''RI3Year';

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
readonly timeRange: 'Custom''Day''Month''Week';

/**
   * Specify the duration for which the VMs are up in the on-premises environment.
   */
readonly vmUptime: VmUptime;

/**
   * Number of days in a month for VM uptime.
   */
readonly daysPerMonth?: number;

/**
   * Number of hours per day for VM uptime.
   */
readonly hoursPerDay?: number;
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
