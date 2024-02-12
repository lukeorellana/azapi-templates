import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DatadogMonitorsSinglesignonconfigurationsProps extends IAzAPIBaseProps {

}

/**
 * DatadogMonitorsSinglesignonconfigurations resource
 */
export class DatadogMonitorsSinglesignonconfigurations extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DatadogMonitorsSinglesignonconfigurationsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Datadog/monitors/singleSignOnConfigurations@2022-06-01";
  }

  protected getResourceBody(props: DatadogMonitorsSinglesignonconfigurationsProps): string {
    return JSON.stringify(
        {properties: {enterpriseAppId: "string", singleSignOnState: "string"}}
    );
  }
}
