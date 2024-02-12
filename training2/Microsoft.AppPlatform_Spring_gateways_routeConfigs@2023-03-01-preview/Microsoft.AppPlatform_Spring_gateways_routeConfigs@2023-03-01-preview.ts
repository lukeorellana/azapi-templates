import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AppplatformSpringGatewaysRouteconfigsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:gateways;

/**
   * The resource Id of the Azure Spring Apps app, required unless route definesuri.
   */
readonly appResourceId?: string;

/**
   * To modify the request before sending it to the target endpoint, or the received response in app level.
   */
readonly filters?: string[];

/**
   * OpenAPI properties of Spring Cloud Gateway route config.
   */
readonly openApi?: GatewayRouteConfigOpenApiProperties;

/**
   * A number of conditions to evaluate a route for each request in app level. Each predicate may be evaluated against request headers and parameter values. All of the predicates associated with a route must evaluate to true for the route to be matched to the request.
   */
readonly predicates?: string[];

/**
   * Protocol of routed Azure Spring Apps applications.
   */
readonly protocol?: 'HTTP''HTTPS';

/**
   * Array of API routes, each route contains properties such astitle,uri,ssoEnabled,predicates,filters.
   */
readonly routes?: GatewayApiRoute[];

/**
   * Enable Single Sign-On in app level.
   */
readonly ssoEnabled?: bool;

/**
   * The URI of OpenAPI specification.
   */
readonly uri?: string;

/**
   * A description, will be applied to methods in the generated OpenAPI documentation.
   */
readonly description?: string;

/**
   * To modify the request before sending it to the target endpoint, or the received response.
   */
readonly filters?: string[];

/**
   * Route processing order.
   */
readonly order?: number;

/**
   * A number of conditions to evaluate a route for each request. Each predicate may be evaluated against request headers and parameter values. All of the predicates associated with a route must evaluate to true for the route to be matched to the request.
   */
readonly predicates?: string[];

/**
   * Enable sso validation.
   */
readonly ssoEnabled?: bool;

/**
   * A title, will be applied to methods in the generated OpenAPI documentation.
   */
readonly title?: string;

/**
   * Pass currently-authenticated user's identity token to application service, default is 'false'
   */
readonly tokenRelay?: bool;

/**
   * Full uri, will overrideappName.
   */
readonly uri?: string;
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
