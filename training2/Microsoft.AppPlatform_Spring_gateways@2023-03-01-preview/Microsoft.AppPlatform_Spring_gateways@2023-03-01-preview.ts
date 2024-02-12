import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AppplatformSpringGatewaysProps extends IAzAPIBaseProps {
/**
   * Sku of the Spring Cloud Gateway resource
   */
readonly sku?: Sku;

/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:Spring;

/**
   * API metadata property for Spring Cloud Gateway
   */
readonly apiMetadataProperties?: GatewayApiMetadataProperties;

/**
   * Collection of APM type used in Spring Cloud Gateway
   */
readonly apmTypes?: String array containing any of:'AppDynamics''ApplicationInsights''Dynatrace''ElasticAPM''NewRelic';

/**
   * Client-Certification Authentication.
   */
readonly clientAuth?: GatewayPropertiesClientAuth;

/**
   * Cross-Origin Resource Sharing property
   */
readonly corsProperties?: GatewayCorsProperties;

/**
   * Environment variables of Spring Cloud Gateway
   */
readonly environmentVariables?: GatewayPropertiesEnvironmentVariables;

/**
   * Indicate if only https is allowed.
   */
readonly httpsOnly?: bool;

/**
   * Indicates whether the Spring Cloud Gateway exposes endpoint.
   */
readonly public?: bool;

/**
   * The requested resource quantity for required CPU and Memory.
   */
readonly resourceRequests?: GatewayResourceRequests;

/**
   * Single sign-on related configuration
   */
readonly ssoProperties?: SsoProperties;

/**
   * Detailed description of the APIs available on the Gateway instance (default:Generated OpenAPI 3 document that describes the API routes configured.)
   */
readonly description?: string;

/**
   * Location of additional documentation for the APIs available on the Gateway instance
   */
readonly documentation?: string;

/**
   * Base URL that API consumers will use to access APIs on the Gateway instance.
   */
readonly serverUrl?: string;

/**
   * Title describing the context of the APIs available on the Gateway instance (default:Spring Cloud Gateway for K8S)
   */
readonly title?: string;

/**
   * Version of APIs available on this Gateway instance (default:unspecified).
   */
readonly version?: string;

/**
   * Collection of certificate resource Ids in Azure Spring Apps.
   */
readonly certificates?: string[];

/**
   * Whether to enable certificate verification or not
   */
readonly certificateVerification?: 'Disabled''Enabled';

/**
   * Whether user credentials are supported on cross-site requests. Valid values:true,false.
   */
readonly allowCredentials?: bool;

/**
   * Allowed headers in cross-site requests. The special value*allows actual requests to send any header.
   */
readonly allowedHeaders?: string[];

/**
   * Allowed HTTP methods on cross-site requests. The special value*allows all methods. If not set,GETandHEADare allowed by default.
   */
readonly allowedMethods?: string[];

/**
   * Allowed origins to make cross-site requests. The special value*allows all domains.
   */
readonly allowedOrigins?: string[];

/**
   * HTTP response headers to expose for cross-site requests.
   */
readonly exposedHeaders?: string[];

/**
   * How long, in seconds, the response from a pre-flight request can be cached by clients.
   */
readonly maxAge?: number;

/**
   * Sensitive properties
   */
readonly secrets?: object;

/**
   * Cpu allocated to each Spring Cloud Gateway instance.
   */
readonly cpu?: string;

/**
   * Memory allocated to each Spring Cloud Gateway instance.
   */
readonly memory?: string;

/**
   * The public identifier for the application
   */
readonly clientId?: string;

/**
   * The secret known only to the application and the authorization server
   */
readonly clientSecret?: string;

/**
   * The URI of Issuer Identifier
   */
readonly issuerUri?: string;

/**
   * It defines the specific actions applications can be allowed to do on a user's behalf
   */
readonly scope?: string[];

/**
   * Current capacity of the target resource
   */
readonly capacity?: number;

/**
   * Tier of the Sku
   */
readonly tier?: string;
}

/**
 * AppplatformSpringGateways resource
 */
export class AppplatformSpringGateways extends AzAPIBase {
  constructor(scope: Construct, id: string, props: AppplatformSpringGatewaysProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.AppPlatform/Spring/gateways@2023-03-01-preview";
  }

  protected getResourceBody(props: AppplatformSpringGatewaysProps): string {
    return JSON.stringify(
        {properties: {apiMetadataProperties: {description: "string", documentation: "string", serverUrl: "string", title: "string", version: "string"}, apmTypes: ["string"], clientAuth: {certificates: ["string"], certificateVerification: "string"}, corsProperties: {allowCredentials: "${bool}", allowedHeaders: ["string"], allowedMethods: ["string"], allowedOrigins: ["string"], exposedHeaders: ["string"], maxAge: "${int}"}, environmentVariables: {properties: {}, secrets: {}}, httpsOnly: "${bool}", public: "${bool}", resourceRequests: {cpu: "string", memory: "string"}, ssoProperties: {clientId: "string", clientSecret: "string", issuerUri: "string", scope: ["string"]}}, sku: {capacity: "${int}", name: "string", tier: "string"}}
    );
  }
}
