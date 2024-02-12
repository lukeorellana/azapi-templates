import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AppplatformSpringGatewaysRouteconfigsProps extends IAzAPIBaseProps {

}

/**
 * AppplatformSpringGatewaysRouteconfigs resource
 */
export class AppplatformSpringGatewaysRouteconfigs extends AzAPIBase {
  constructor(scope: Construct, id: string, props: AppplatformSpringGatewaysRouteconfigsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.AppPlatform/Spring/gateways/routeConfigs@2023-03-01-preview";
  }

  protected getResourceBody(props: AppplatformSpringGatewaysRouteconfigsProps): string {
    return JSON.stringify(
        {properties: {appResourceId: "string", filters: ["string"], openApi: {uri: "string"}, predicates: ["string"], protocol: "string", routes: [{description: "string", filters: ["string"], order: "${int}", predicates: ["string"], ssoEnabled: "${bool}", tags: ["string"], title: "string", tokenRelay: "${bool}", uri: "string"}], ssoEnabled: "${bool}"}}
    );
  }
}
