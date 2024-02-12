import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface LogzMonitorsAccountsProps extends IAzAPIBaseProps {

}

/**
 * LogzMonitorsAccounts resource
 */
export class LogzMonitorsAccounts extends AzAPIBase {
  constructor(scope: Construct, id: string, props: LogzMonitorsAccountsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Logz/monitors/accounts@2022-01-01-preview";
  }

  protected getResourceBody(props: LogzMonitorsAccountsProps): string {
    return JSON.stringify(
        {properties: {logzOrganizationProperties: {companyName: "string", enterpriseAppId: "string", singleSignOnUrl: "string"}, marketplaceSubscriptionStatus: "string", monitoringStatus: "string", planData: {billingCycle: "string", effectiveDate: "string", planDetails: "string", usageType: "string"}, userInfo: {emailAddress: "string", firstName: "string", lastName: "string", phoneNumber: "string"}}}
    );
  }
}
