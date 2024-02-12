import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DatadogMonitorsProps extends IAzAPIBaseProps {
/**
   * 
   */
readonly sku?: ResourceSku;

/**
   * 
   */
readonly identity?: IdentityProperties;

/**
   * Identity type
   */
readonly type?: 'SystemAssigned''UserAssigned';

/**
   * Datadog organization properties
   */
readonly datadogOrganizationProperties?: DatadogOrganizationProperties;

/**
   * Flag specifying if the resource monitoring is enabled or disabled.
   */
readonly monitoringStatus?: 'Disabled''Enabled';

/**
   * User info
   */
readonly userInfo?: UserInfo;

/**
   * Api key associated to the Datadog organization.
   */
readonly apiKey?: string;

/**
   * Application key associated to the Datadog organization.
   */
readonly applicationKey?: string;

/**
   * The Id of the Enterprise App used for Single sign on.
   */
readonly enterpriseAppId?: string;

/**
   * Id of the Datadog organization.
   */
readonly id?: string;

/**
   * The auth code used to linking to an existing datadog organization.
   */
readonly linkingAuthCode?: string;

/**
   * The client_id from an existing in exchange for an auth token to link organization.
   */
readonly linkingClientId?: string;

/**
   * The redirect uri for linking.
   */
readonly redirectUri?: string;

/**
   * Email of the user used by Datadog for contacting them if needed
   */
readonly emailAddress?: string;

/**
   * Phone number of the user used by Datadog for contacting them if needed
   */
readonly phoneNumber?: string;
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
