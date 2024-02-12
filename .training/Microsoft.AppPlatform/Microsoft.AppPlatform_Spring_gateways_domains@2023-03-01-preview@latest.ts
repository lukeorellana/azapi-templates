import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AppplatformSpringGatewaysDomainsProps extends IAzAPIBaseProps {

}

/**
 * AppplatformSpringGatewaysDomains resource
 */
export class AppplatformSpringGatewaysDomains extends AzAPIBase {
  constructor(scope: Construct, id: string, props: AppplatformSpringGatewaysDomainsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.AppPlatform/Spring/gateways/domains@2023-03-01-preview";
  }

  protected getResourceBody(props: AppplatformSpringGatewaysDomainsProps): string {
    return JSON.stringify(
        {properties: {thumbprint: "string"}}
    );
  }
}
