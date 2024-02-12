import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface LogzMonitorsMetricssourceTagrulesProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:metricsSource;

/**
   * 
   */
readonly metricRules?: MetricRules[];

/**
   * Flag specifying if metrics from Azure resources should be sent for the Monitor resource.
   */
readonly sendMetrics?: bool;

/**
   * List of filtering tags to be used for capturing metrics. If empty, all resources will be captured. If only Exclude action is specified, the rules will apply to the list of all available resources. If Include actions are specified, the rules will only include resources with the associated tags.
   */
readonly filteringTags?: FilteringTag[];

/**
   * Subscription Id for which filtering tags are applicable
   */
readonly subscriptionId?: string;

/**
   * Valid actions for a filtering tag. Exclusion takes priority over inclusion.
   */
readonly action?: 'Exclude''Include';

/**
   * The value of the tag.
   */
readonly value?: string;
}

/**
 * LogzMonitorsMetricssourceTagrules resource
 */
export class LogzMonitorsMetricssourceTagrules extends AzAPIBase {
  constructor(scope: Construct, id: string, props: LogzMonitorsMetricssourceTagrulesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Logz/monitors/metricsSource/tagRules@2022-01-01-preview";
  }

  protected getResourceBody(props: LogzMonitorsMetricssourceTagrulesProps): string {
    return JSON.stringify(
        {properties: {metricRules: [{filteringTags: [{action: "string", name: "string", value: "string"}], subscriptionId: "string"}], sendMetrics: "${bool}"}}
    );
  }
}
