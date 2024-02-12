import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ApimanagementServiceGatewaysProps extends IAzAPIBaseProps {

}

/**
 * ApimanagementServiceGateways resource
 */
export class ApimanagementServiceGateways extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ApimanagementServiceGatewaysProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ApiManagement/service/gateways@2023-05-01-preview";
  }

  protected getResourceBody(props: ApimanagementServiceGatewaysProps): string {
    return JSON.stringify(
        {properties: {description: "string", locationData: {city: "string", countryOrRegion: "string", district: "string", name: "string"}}}
    );
  }
}
