import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface LogzMonitorsMetricssourceTagrulesProps extends IAzAPIBaseProps {

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
