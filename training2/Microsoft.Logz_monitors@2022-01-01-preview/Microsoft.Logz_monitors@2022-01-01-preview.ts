import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface LogzMonitorsProps extends IAzAPIBaseProps {
/**
   * 
   */
readonly identity?: IdentityProperties;

/**
   * 
   */
readonly type?: 'SystemAssigned''UserAssigned';

/**
   * 
   */
readonly logzOrganizationProperties?: LogzOrganizationProperties;

/**
   * Flag specifying the Marketplace Subscription Status of the resource. If payment is not made in time, the resource will go in Suspended state.
   */
readonly marketplaceSubscriptionStatus?: 'Active''Suspended';

/**
   * Flag specifying if the resource monitoring is enabled or disabled.
   */
readonly monitoringStatus?: 'Disabled''Enabled';

/**
   * 
   */
readonly planData?: PlanData;

/**
   * 
   */
readonly userInfo?: UserInfo;

/**
   * Name of the Logz organization.
   */
readonly companyName?: string;

/**
   * The Id of the Enterprise App used for Single sign on.
   */
readonly enterpriseAppId?: string;

/**
   * The login URL specific to this Logz Organization.
   */
readonly singleSignOnUrl?: string;

/**
   * different billing cycles like MONTHLY/WEEKLY. this could be enum
   */
readonly billingCycle?: string;

/**
   * date when plan was applied
   */
readonly effectiveDate?: string;

/**
   * plan id as published by Logz
   */
readonly planDetails?: string;

/**
   * different usage type like PAYG/COMMITTED. this could be enum
   */
readonly usageType?: string;

/**
   * Email of the user used by Logz for contacting them if needed
   */
readonly emailAddress?: string;

/**
   * First Name of the user
   */
readonly firstName?: string;

/**
   * Last Name of the user
   */
readonly lastName?: string;

/**
   * Phone number of the user used by Logz for contacting them if needed
   */
readonly phoneNumber?: string;
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
