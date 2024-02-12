import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DatadogMonitorsProps extends IAzAPIBaseProps {

}

/**
 * DatadogMonitors resource
 */
export class DatadogMonitors extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DatadogMonitorsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Datadog/monitors@2022-06-01";
  }

  protected getResourceBody(props: DatadogMonitorsProps): string {
    return JSON.stringify(
        {properties: {datadogOrganizationProperties: {apiKey: "string", applicationKey: "string", enterpriseAppId: "string", id: "string", linkingAuthCode: "string", linkingClientId: "string", name: "string", redirectUri: "string"}, monitoringStatus: "string", userInfo: {emailAddress: "string", name: "string", phoneNumber: "string"}}, sku: {name: "string"}}
    );
  }
}
