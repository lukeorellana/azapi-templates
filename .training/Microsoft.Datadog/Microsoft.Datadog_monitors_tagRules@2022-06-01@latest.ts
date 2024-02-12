import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DatadogMonitorsTagrulesProps extends IAzAPIBaseProps {

}

/**
 * DatadogMonitorsTagrules resource
 */
export class DatadogMonitorsTagrules extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DatadogMonitorsTagrulesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Datadog/monitors/tagRules@2022-06-01";
  }

  protected getResourceBody(props: DatadogMonitorsTagrulesProps): string {
    return JSON.stringify(
        {properties: {logRules: {filteringTags: [{action: "string", name: "string", value: "string"}], sendAadLogs: "${bool}", sendResourceLogs: "${bool}", sendSubscriptionLogs: "${bool}"}, metricRules: {filteringTags: [{action: "string", name: "string", value: "string"}]}}}
    );
  }
}
