import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface WebCustomapisProps extends IAzAPIBaseProps {
/**
   * Resource ETag
   */
readonly etag?: string;

/**
   * API Definitions
   */
readonly apiDefinitions?: ApiResourceDefinitions;

/**
   * The API type
   */
readonly apiType?: 'NotSpecified''Rest''Soap';

/**
   * The API backend service
   */
readonly backendService?: ApiResourceBackendService;

/**
   * Brand color
   */
readonly brandColor?: string;

/**
   * The custom API capabilities
   */
readonly capabilities?: string[];

/**
   * Connection parameters
   */
readonly connectionParameters?: object;

/**
   * The custom API description
   */
readonly description?: string;

/**
   * The display name
   */
readonly displayName?: string;

/**
   * The icon URI
   */
readonly iconUri?: string;

/**
   * Runtime URLs
   */
readonly runtimeUrls?: string[];

/**
   * The JSON representation of the swagger
   */
readonly swagger?: For Bicep, you can use theany()function.;

/**
   * The WSDL definition
   */
readonly wsdlDefinition?: WsdlDefinition;

/**
   * The modified swagger URL
   */
readonly modifiedSwaggerUrl?: string;

/**
   * The original swagger URL
   */
readonly originalSwaggerUrl?: string;

/**
   * The service URL
   */
readonly serviceUrl?: string;

/**
   * The WSDL content
   */
readonly content?: string;

/**
   * The WSDL import method
   */
readonly importMethod?: 'NotSpecified''SoapPassThrough''SoapToRest';

/**
   * The service with name and endpoint names
   */
readonly service?: WsdlService;

/**
   * The WSDL URL
   */
readonly url?: string;

/**
   * The WSDL content
   */
readonly content?: string;

/**
   * The WSDL import method
   */
readonly importMethod?: 'NotSpecified''SoapPassThrough''SoapToRest';

/**
   * The service with name and endpoint names
   */
readonly service?: WsdlService;

/**
   * The WSDL URL
   */
readonly url?: string;

/**
   * List of the endpoints' qualified names
   */
readonly endpointQualifiedNames?: string[];

/**
   * The service's qualified name
   */
readonly qualifiedName: string;
}

/**
 * WebCustomapis resource
 */
export class WebCustomapis extends AzAPIBase {
  constructor(scope: Construct, id: string, props: WebCustomapisProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Web/customApis@2016-06-01";
  }

  protected getResourceBody(props: WebCustomapisProps): string {
    return JSON.stringify(
        {properties: {apiDefinitions: {modifiedSwaggerUrl: "string", originalSwaggerUrl: "string"}, apiType: "string", backendService: {serviceUrl: "string"}, brandColor: "string", capabilities: ["string"], connectionParameters: {}, description: "string", displayName: "string", iconUri: "string", runtimeUrls: ["string"], wsdlDefinition: {content: "string", importMethod: "string", service: {endpointQualifiedNames: ["string"], qualifiedName: "string"}, url: "string"}}, etag: "string"}
    );
  }
}
