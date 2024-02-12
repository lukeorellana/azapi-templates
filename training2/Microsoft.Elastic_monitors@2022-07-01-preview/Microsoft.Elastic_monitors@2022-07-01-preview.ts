import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ElasticMonitorsProps extends IAzAPIBaseProps {
/**
   * SKU of the monitor resource.
   */
readonly sku?: ResourceSku;

/**
   * Identity properties of the monitor resource.
   */
readonly identity?: IdentityProperties;

/**
   * Managed identity type.
   */
readonly type?: 'SystemAssigned';

/**
   * Elastic cloud properties.
   */
readonly elasticProperties?: ElasticProperties;

/**
   * Flag specifying if the resource monitoring is enabled or disabled.
   */
readonly monitoringStatus?: 'Disabled''Enabled';

/**
   * Provisioning state of the monitor resource.
   */
readonly provisioningState?: 'Accepted''Canceled''Creating''Deleted''Deleting''Failed''NotSpecified''Succeeded''Updating';

/**
   * User information.
   */
readonly userInfo?: UserInfo;

/**
   * Version of elastic of the monitor resource
   */
readonly version?: string;

/**
   * Details of the elastic cloud deployment.
   */
readonly elasticCloudDeployment?: ElasticCloudDeployment;

/**
   * Details of the user's elastic account.
   */
readonly elasticCloudUser?: ElasticCloudUser;

/**
   * Company information of the user to be passed to partners.
   */
readonly companyInfo?: CompanyInfo;

/**
   * Company name of the user
   */
readonly companyName?: string;

/**
   * Email of the user used by Elastic for contacting them if needed
   */
readonly emailAddress?: string;

/**
   * First name of the user
   */
readonly firstName?: string;

/**
   * Last name of the user
   */
readonly lastName?: string;

/**
   * Business of the company
   */
readonly business?: string;

/**
   * Country of the company location.
   */
readonly country?: string;

/**
   * Domain of the company
   */
readonly domain?: string;

/**
   * Number of employees in the company
   */
readonly employeesNumber?: string;

/**
   * State of the company location.
   */
readonly state?: string;
}

/**
 * ElasticMonitors resource
 */
export class ElasticMonitors extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ElasticMonitorsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Elastic/monitors@2022-07-01-preview";
  }

  protected getResourceBody(props: ElasticMonitorsProps): string {
    return JSON.stringify(
        {properties: {elasticProperties: {elasticCloudDeployment: {}, elasticCloudUser: {}}, monitoringStatus: "string", provisioningState: "string", userInfo: {companyInfo: {business: "string", country: "string", domain: "string", employeesNumber: "string", state: "string"}, companyName: "string", emailAddress: "string", firstName: "string", lastName: "string"}, version: "string"}, sku: {name: "string"}}
    );
  }
}
