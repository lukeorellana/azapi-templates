import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ApimanagementServiceApisDiagnosticsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:apis;

/**
   * Specifies for what type of messages sampling settings should not apply.
   */
readonly alwaysLog?: 'allErrors';

/**
   * Diagnostic settings for incoming/outgoing HTTP messages to the Backend
   */
readonly backend?: PipelineDiagnosticSettings;

/**
   * Diagnostic settings for incoming/outgoing HTTP messages to the Gateway.
   */
readonly frontend?: PipelineDiagnosticSettings;

/**
   * Sets correlation protocol to use for Application Insights diagnostics.
   */
readonly httpCorrelationProtocol?: 'Legacy''None''W3C';

/**
   * Log the ClientIP. Default is false.
   */
readonly logClientIp?: bool;

/**
   * Resource Id of a target logger.
   */
readonly loggerId: string;

/**
   * Emit custom metrics via emit-metric policy. Applicable only to Application Insights diagnostic settings.
   */
readonly metrics?: bool;

/**
   * The format of the Operation Name for Application Insights telemetries. Default is Name.
   */
readonly operationNameFormat?: 'Name''Url';

/**
   * Sampling settings for Diagnostic.
   */
readonly sampling?: SamplingSettings;

/**
   * The verbosity level applied to traces emitted by trace policies.
   */
readonly verbosity?: 'error''information''verbose';

/**
   * Diagnostic settings for request.
   */
readonly request?: HttpMessageDiagnostic;

/**
   * Diagnostic settings for response.
   */
readonly response?: HttpMessageDiagnostic;

/**
   * Body logging settings.
   */
readonly body?: BodyDiagnosticSettings;

/**
   * Data masking settings.
   */
readonly dataMasking?: DataMasking;

/**
   * Array of HTTP Headers to log.
   */
readonly headers?: string[];

/**
   * Number of request body bytes to log.
   */
readonly bytes?: number;

/**
   * Masking settings for headers
   */
readonly headers?: DataMaskingEntity[];

/**
   * Masking settings for Url query parameters
   */
readonly queryParams?: DataMaskingEntity[];

/**
   * Data masking mode.
   */
readonly mode?: 'Hide''Mask';

/**
   * The name of an entity to mask (e.g. a name of a header or a query parameter).
   */
readonly value?: string;

/**
   * Rate of sampling for fixed-rate sampling.
   */
readonly percentage?: number;

/**
   * Sampling type.
   */
readonly samplingType?: 'fixed';
}

/**
 * ApimanagementServiceApisDiagnostics resource
 */
export class ApimanagementServiceApisDiagnostics extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ApimanagementServiceApisDiagnosticsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ApiManagement/service/apis/diagnostics@2023-05-01-preview";
  }

  protected getResourceBody(props: ApimanagementServiceApisDiagnosticsProps): string {
    return JSON.stringify(
        {properties: {alwaysLog: "allErrors", backend: {request: {body: {bytes: "${int}"}, dataMasking: {headers: [{mode: "string", value: "string"}], queryParams: [{mode: "string", value: "string"}]}, headers: ["string"]}, response: {body: {bytes: "${int}"}, dataMasking: {headers: [{mode: "string", value: "string"}], queryParams: [{mode: "string", value: "string"}]}, headers: ["string"]}}, frontend: {request: {body: {bytes: "${int}"}, dataMasking: {headers: [{mode: "string", value: "string"}], queryParams: [{mode: "string", value: "string"}]}, headers: ["string"]}, response: {body: {bytes: "${int}"}, dataMasking: {headers: [{mode: "string", value: "string"}], queryParams: [{mode: "string", value: "string"}]}, headers: ["string"]}}, httpCorrelationProtocol: "string", logClientIp: "${bool}", loggerId: "string", metrics: "${bool}", operationNameFormat: "string", sampling: {percentage: "${int}", samplingType: "fixed"}, verbosity: "string"}}
    );
  }
}
