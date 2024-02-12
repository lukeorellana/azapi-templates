import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface WebConnectionsProps extends IAzAPIBaseProps {
/**
   * Resource ETag
   */
readonly etag?: string;

/**
   * 
   */
readonly api?: ApiReference;

/**
   * Timestamp of last connection change
   */
readonly changedTime?: string;

/**
   * Timestamp of the connection creation
   */
readonly createdTime?: string;

/**
   * Dictionary of custom parameter values
   */
readonly customParameterValues?: object;

/**
   * Display name
   */
readonly displayName?: string;

/**
   * Dictionary of nonsecret parameter values
   */
readonly nonSecretParameterValues?: object;

/**
   * Dictionary of parameter values
   */
readonly parameterValues?: object;

/**
   * Status of the connection
   */
readonly statuses?: ConnectionStatusDefinition[];

/**
   * Links to test the API connection
   */
readonly testLinks?: ApiConnectionTestLink[];

/**
   * Brand color
   */
readonly brandColor?: string;

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
   * Resource reference id
   */
readonly id?: string;

/**
   * The JSON representation of the swagger
   */
readonly swagger?: For Bicep, you can use theany()function.;

/**
   * Resource reference type
   */
readonly type?: string;

/**
   * Connection error
   */
readonly error?: ConnectionError;

/**
   * The gateway status
   */
readonly status?: string;

/**
   * Target of the error
   */
readonly target?: string;

/**
   * Resource ETag
   */
readonly etag?: string;

/**
   * Code of the status
   */
readonly code?: string;

/**
   * Description of the status
   */
readonly message?: string;

/**
   * HTTP Method
   */
readonly method?: string;

/**
   * Test link request URI
   */
readonly requestUri?: string;
}

/**
 * WebConnections resource
 */
export class WebConnections extends AzAPIBase {
  constructor(scope: Construct, id: string, props: WebConnectionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Web/connections@2016-06-01";
  }

  protected getResourceBody(props: WebConnectionsProps): string {
    return JSON.stringify(
        {properties: {api: {brandColor: "string", description: "string", displayName: "string", iconUri: "string", id: "string", name: "string", type: "string"}, changedTime: "string", createdTime: "string", customParameterValues: {}, displayName: "string", nonSecretParameterValues: {}, parameterValues: {}, statuses: [{error: {etag: "string", location: "string", properties: {code: "string", message: "string"}, tags: {}}, status: "string", target: "string"}], testLinks: [{method: "string", requestUri: "string"}]}, etag: "string"}
    );
  }
}
