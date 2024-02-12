import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ApimanagementServiceAuthorizationserversProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:service;

/**
   * OAuth authorization endpoint. Seehttp://tools.ietf.org/html/rfc6749#section-3.2.
   */
readonly authorizationEndpoint: string;

/**
   * HTTP verbs supported by the authorization endpoint. GET must be always present. POST is optional.
   */
readonly authorizationMethods?: String array containing any of:'DELETE''GET''HEAD''OPTIONS''PATCH''POST''PUT''TRACE';

/**
   * Specifies the mechanism by which access token is passed to the API.
   */
readonly bearerTokenSendingMethods?: String array containing any of:'authorizationHeader''query';

/**
   * Method of authentication supported by the token endpoint of this authorization server. Possible values are Basic and/or Body. When Body is specified, client credentials and other parameters are passed within the request body in the application/x-www-form-urlencoded format.
   */
readonly clientAuthenticationMethod?: String array containing any of:'Basic''Body';

/**
   * Client or app id registered with this authorization server.
   */
readonly clientId: string;

/**
   * Optional reference to a page where client or app registration for this authorization server is performed. Contains absolute URL to entity being referenced.
   */
readonly clientRegistrationEndpoint: string;

/**
   * Client or app secret registered with this authorization server. This property will not be filled on 'GET' operations! Use '/listSecrets' POST request to get the value.
   */
readonly clientSecret?: string;

/**
   * Access token scope that is going to be requested by default. Can be overridden at the API level. Should be provided in the form of a string containing space-delimited values.
   */
readonly defaultScope?: string;

/**
   * Description of the authorization server. Can contain HTML formatting tags.
   */
readonly description?: string;

/**
   * User-friendly authorization server name.
   */
readonly displayName: string;

/**
   * Form of an authorization grant, which the client uses to request the access token.
   */
readonly grantTypes: String array containing any of:'authorizationCode''clientCredentials''implicit''resourceOwnerPassword';

/**
   * Can be optionally specified when resource owner password grant type is supported by this authorization server. Default resource owner password.
   */
readonly resourceOwnerPassword?: string;

/**
   * Can be optionally specified when resource owner password grant type is supported by this authorization server. Default resource owner username.
   */
readonly resourceOwnerUsername?: string;

/**
   * If true, authorization server will include state parameter from the authorization request to its response. Client may use state parameter to raise protocol security.
   */
readonly supportState?: bool;

/**
   * Additional parameters required by the token endpoint of this authorization server represented as an array of JSON objects with name and value string properties, i.e. {"name" : "name value", "value": "a value"}.
   */
readonly tokenBodyParameters?: TokenBodyParameterContract[];

/**
   * OAuth token endpoint. Contains absolute URI to entity being referenced.
   */
readonly tokenEndpoint?: string;

/**
   * If true, the authorization server will be used in the API documentation in the developer portal. False by default if no value is provided.
   */
readonly useInApiDocumentation?: bool;

/**
   * If true, the authorization server may be used in the developer portal test console. True by default if no value is provided.
   */
readonly useInTestConsole?: bool;

/**
   * body parameter value.
   */
readonly value: string;
}

/**
 * ApimanagementServiceAuthorizationservers resource
 */
export class ApimanagementServiceAuthorizationservers extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ApimanagementServiceAuthorizationserversProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ApiManagement/service/authorizationServers@2023-05-01-preview";
  }

  protected getResourceBody(props: ApimanagementServiceAuthorizationserversProps): string {
    return JSON.stringify(
        {properties: {authorizationEndpoint: "string", authorizationMethods: ["string"], bearerTokenSendingMethods: ["string"], clientAuthenticationMethod: ["string"], clientId: "string", clientRegistrationEndpoint: "string", clientSecret: "string", defaultScope: "string", description: "string", displayName: "string", grantTypes: ["string"], resourceOwnerPassword: "string", resourceOwnerUsername: "string", supportState: "${bool}", tokenBodyParameters: [{name: "string", value: "string"}], tokenEndpoint: "string", useInApiDocumentation: "${bool}", useInTestConsole: "${bool}"}}
    );
  }
}
