import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface LogzMonitorsSinglesignonconfigurationsProps extends IAzAPIBaseProps {

}

/**
 * LogzMonitorsSinglesignonconfigurations resource
 */
export class LogzMonitorsSinglesignonconfigurations extends AzAPIBase {
  constructor(scope: Construct, id: string, props: LogzMonitorsSinglesignonconfigurationsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Logz/monitors/singleSignOnConfigurations@2022-01-01-preview";
  }

  protected getResourceBody(props: LogzMonitorsSinglesignonconfigurationsProps): string {
    return JSON.stringify(
        {properties: {enterpriseAppId: "string", singleSignOnState: "string", singleSignOnUrl: "string"}}
    );
  }
}
