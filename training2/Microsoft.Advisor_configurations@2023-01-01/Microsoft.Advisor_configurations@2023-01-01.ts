import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AdvisorConfigurationsProps extends IAzAPIBaseProps {
/**
   * Use when creating an extension resource at a scope that is different than the deployment scope.
   */
readonly scope?: Target resourceFor Bicep, set this property to the symbolic name of the resource to apply theextension resource.;

/**
   * Advisor digest configuration. Valid only for subscriptions
   */
readonly digests?: DigestConfig[];

/**
   * Minimum duration for Advisor low CPU utilization evaluation. Valid only for subscriptions. Valid values: 7 (default), 14, 21, 30, 60 or 90.
   */
readonly duration?: '14''21''30''60''7''90';

/**
   * Exclude the resource from Advisor evaluations. Valid values: False (default) or True.
   */
readonly exclude?: bool;

/**
   * Minimum percentage threshold for Advisor low CPU utilization evaluation. Valid only for subscriptions. Valid values: 5 (default), 10, 15 or 20.
   */
readonly lowCpuThreshold?: '10''15''20''5';

/**
   * Action group resource id used by digest.
   */
readonly actionGroupResourceId?: string;

/**
   * Categories to send digest for. If categories are not provided, then digest will be sent for all categories.
   */
readonly categories?: String array containing any of:'Cost''HighAvailability''OperationalExcellence''Performance''Security';

/**
   * Frequency that digest will be triggered, in days. Value must be between 7 and 30 days inclusive.
   */
readonly frequency?: number;

/**
   * Language for digest content body. Value must be ISO 639-1 code for one of Azure portal supported languages. Otherwise, it will be converted into one. Default value is English (en).
   */
readonly language?: string;

/**
   * State of digest configuration.
   */
readonly state?: 'Active''Disabled';
}

/**
 * AdvisorConfigurations resource
 */
export class AdvisorConfigurations extends AzAPIBase {
  constructor(scope: Construct, id: string, props: AdvisorConfigurationsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Advisor/configurations@2023-01-01";
  }

  protected getResourceBody(props: AdvisorConfigurationsProps): string {
    return JSON.stringify(
        {properties: {digests: [{actionGroupResourceId: "string", categories: ["string"], frequency: "${int}", language: "string", name: "string", state: "string"}], duration: "string", exclude: "${bool}", lowCpuThreshold: "string"}}
    );
  }
}
