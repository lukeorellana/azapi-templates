import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ElasticMonitorsProps extends IAzAPIBaseProps {

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
