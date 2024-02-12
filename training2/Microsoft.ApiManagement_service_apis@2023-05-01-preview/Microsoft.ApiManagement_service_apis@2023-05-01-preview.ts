import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ApimanagementServiceApisProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:service;

/**
   * Describes the revision of the API. If no value is provided, default revision 1 is created
   */
readonly apiRevision?: string;

/**
   * Description of the API Revision.
   */
readonly apiRevisionDescription?: string;

/**
   * Type of API to create.*httpcreates a REST API*soapcreates a SOAP pass-through API*websocketcreates websocket API*graphqlcreates GraphQL API.New types can be added in the future.
   */
readonly apiType?: 'graphql''grpc''http''odata''soap''websocket';

/**
   * Indicates the version identifier of the API if the API is versioned
   */
readonly apiVersion?: string;

/**
   * Description of the API Version.
   */
readonly apiVersionDescription?: string;

/**
   * Version set details
   */
readonly apiVersionSet?: ApiVersionSetContractDetails;

/**
   * A resource identifier for the related ApiVersionSet.
   */
readonly apiVersionSetId?: string;

/**
   * Collection of authentication settings included into this API.
   */
readonly authenticationSettings?: AuthenticationSettingsContract;

/**
   * Contact information for the API.
   */
readonly contact?: ApiContactInformation;

/**
   * Description of the API. May include HTML formatting tags.
   */
readonly description?: string;

/**
   * API name. Must be 1 to 300 characters long.
   */
readonly displayName?: string;

/**
   * Format of the Content in which the API is getting imported. New formats can be added in the future
   */
readonly format?: 'graphql-link''grpc''grpc-link''odata''odata-link''openapi''openapi+json''openapi+json-link''openapi-link''swagger-json''swagger-link-json''wadl-link-json''wadl-xml''wsdl''wsdl-link';

/**
   * Indicates if API revision is current api revision.
   */
readonly isCurrent?: bool;

/**
   * License information for the API.
   */
readonly license?: ApiLicenseInformation;

/**
   * Relative URL uniquely identifying this API and all of its resource paths within the API Management service instance. It is appended to the API endpoint base URL specified during the service instance creation to form a public URL for this API.
   */
readonly path: string;

/**
   * Describes on which protocols the operations in this API can be invoked.
   */
readonly protocols?: String array containing any of:'http''https''ws''wss';

/**
   * Absolute URL of the backend service implementing this API. Cannot be more than 2000 characters long.
   */
readonly serviceUrl?: string;

/**
   * API identifier of the source API.
   */
readonly sourceApiId?: string;

/**
   * Protocols over which API is made available.
   */
readonly subscriptionKeyParameterNames?: SubscriptionKeyParameterNamesContract;

/**
   * Specifies whether an API or Product subscription is required for accessing the API.
   */
readonly subscriptionRequired?: bool;

/**
   * A URL to the Terms of Service for the API. MUST be in the format of a URL.
   */
readonly termsOfServiceUrl?: string;

/**
   * Strategy of translating required query parameters to template ones. By default has value 'template'. Possible values: 'template', 'query'
   */
readonly translateRequiredQueryParameters?: 'query''template';

/**
   * Type of API.
   */
readonly type?: 'graphql''grpc''http''odata''soap''websocket';

/**
   * Content value when Importing an API.
   */
readonly value?: string;

/**
   * Criteria to limit import of WSDL to a subset of the document.
   */
readonly wsdlSelector?: ApiCreateOrUpdatePropertiesWsdlSelector;

/**
   * Description of API Version Set.
   */
readonly description?: string;

/**
   * Identifier for existing API Version Set. Omit this value to create a new Version Set.
   */
readonly id?: string;

/**
   * Name of HTTP header parameter that indicates the API Version if versioningScheme is set toheader.
   */
readonly versionHeaderName?: string;

/**
   * An value that determines where the API Version identifier will be located in a HTTP request.
   */
readonly versioningScheme?: 'Header''Query''Segment';

/**
   * Name of query parameter that indicates the API Version if versioningScheme is set toquery.
   */
readonly versionQueryName?: string;

/**
   * OAuth2 Authentication settings
   */
readonly oAuth2?: OAuth2AuthenticationSettingsContract;

/**
   * Collection of OAuth2 authentication settings included into this API.
   */
readonly oAuth2AuthenticationSettings?: OAuth2AuthenticationSettingsContract[];

/**
   * OpenID Connect Authentication Settings
   */
readonly openid?: OpenIdAuthenticationSettingsContract;

/**
   * Collection of Open ID Connect authentication settings included into this API.
   */
readonly openidAuthenticationSettings?: OpenIdAuthenticationSettingsContract[];

/**
   * OAuth authorization server identifier.
   */
readonly authorizationServerId?: string;

/**
   * operations scope.
   */
readonly scope?: string;

/**
   * How to send token to the server.
   */
readonly bearerTokenSendingMethods?: String array containing any of:'authorizationHeader''query';

/**
   * OAuth authorization server identifier.
   */
readonly openidProviderId?: string;

/**
   * The email address of the contact person/organization. MUST be in the format of an email address
   */
readonly email?: string;

/**
   * The URL pointing to the contact information. MUST be in the format of a URL
   */
readonly url?: string;

/**
   * A URL to the license used for the API. MUST be in the format of a URL
   */
readonly url?: string;

/**
   * Subscription key header name.
   */
readonly header?: string;

/**
   * Subscription key query string parameter name.
   */
readonly query?: string;

/**
   * Name of endpoint(port) to import from WSDL
   */
readonly wsdlEndpointName?: string;

/**
   * Name of service to import from WSDL
   */
readonly wsdlServiceName?: string;
}

/**
 * ApimanagementServiceApis resource
 */
export class ApimanagementServiceApis extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ApimanagementServiceApisProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ApiManagement/service/apis@2023-05-01-preview";
  }

  protected getResourceBody(props: ApimanagementServiceApisProps): string {
    return JSON.stringify(
        {properties: {apiRevision: "string", apiRevisionDescription: "string", apiType: "string", apiVersion: "string", apiVersionDescription: "string", apiVersionSet: {description: "string", id: "string", name: "string", versionHeaderName: "string", versioningScheme: "string", versionQueryName: "string"}, apiVersionSetId: "string", authenticationSettings: {oAuth2: {authorizationServerId: "string", scope: "string"}, oAuth2AuthenticationSettings: [{authorizationServerId: "string", scope: "string"}], openid: {bearerTokenSendingMethods: ["string"], openidProviderId: "string"}, openidAuthenticationSettings: [{bearerTokenSendingMethods: ["string"], openidProviderId: "string"}]}, contact: {email: "string", name: "string", url: "string"}, description: "string", displayName: "string", format: "string", isCurrent: "${bool}", license: {name: "string", url: "string"}, path: "string", protocols: ["string"], serviceUrl: "string", sourceApiId: "string", subscriptionKeyParameterNames: {header: "string", query: "string"}, subscriptionRequired: "${bool}", termsOfServiceUrl: "string", translateRequiredQueryParameters: "string", type: "string", value: "string", wsdlSelector: {wsdlEndpointName: "string", wsdlServiceName: "string"}}}
    );
  }
}
