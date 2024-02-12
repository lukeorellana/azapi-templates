import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ApimanagementServiceGatewaysApisProps extends IAzAPIBaseProps {

}

/**
 * ApimanagementServiceGatewaysApis resource
 */
export class ApimanagementServiceGatewaysApis extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ApimanagementServiceGatewaysApisProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ApiManagement/service/gateways/apis@2023-05-01-preview";
  }

  protected getResourceBody(props: ApimanagementServiceGatewaysApisProps): string {
    return JSON.stringify(
        {properties: {provisioningState: "created"}}
    );
  }
}
