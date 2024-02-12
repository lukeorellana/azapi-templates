import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AppplatformSpringGatewaysDomainsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:gateways;

/**
   * The thumbprint of bound certificate.
   */
readonly thumbprint?: string;
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
