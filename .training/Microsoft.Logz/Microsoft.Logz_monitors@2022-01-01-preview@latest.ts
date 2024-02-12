import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface LogzMonitorsProps extends IAzAPIBaseProps {

}

/**
 * LogzMonitors resource
 */
export class LogzMonitors extends AzAPIBase {
  constructor(scope: Construct, id: string, props: LogzMonitorsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Logz/monitors@2022-01-01-preview";
  }

  protected getResourceBody(props: LogzMonitorsProps): string {
    return JSON.stringify(
        {properties: {logzOrganizationProperties: {companyName: "string", enterpriseAppId: "string", singleSignOnUrl: "string"}, marketplaceSubscriptionStatus: "string", monitoringStatus: "string", planData: {billingCycle: "string", effectiveDate: "string", planDetails: "string", usageType: "string"}, userInfo: {emailAddress: "string", firstName: "string", lastName: "string", phoneNumber: "string"}}}
    );
  }
}
