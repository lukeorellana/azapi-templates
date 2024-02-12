import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface CdnProfilesEndpointsOrigingroupsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:endponumbers;

/**
   * Health probe settings to the origin that is used to determine the health of the origin.
   */
readonly healthProbeSettings?: HealthProbeParameters;

/**
   * The source of the content being delivered via CDN within given origin group.
   */
readonly origins?: ResourceReference[];

/**
   * The JSON object that contains the properties to determine origin health using real requests/responses. This property is currently not supported.
   */
readonly responseBasedOriginErrorDetectionSettings?: ResponseBasedOriginErrorDetectionParameters;

/**
   * Time in minutes to shift the traffic to the endpoint gradually when an unhealthy endpoint comes healthy or a new endpoint is added. Default is 10 mins. This property is currently not supported.
   */
readonly trafficRestorationTimeToHealedOrNewEndpointsInMinutes?: numberConstranumbers:Min value = 0Max value = 50;

/**
   * The number of seconds between health probes.Default is 240sec.
   */
readonly probeIntervalInSeconds?: numberConstranumbers:Min value = 1Max value = 255;

/**
   * The path relative to the origin that is used to determine the health of the origin.
   */
readonly probePath?: string;

/**
   * Protocol to use for health probe.
   */
readonly probeProtocol?: 'Http''Https''NotSet';

/**
   * The type of health probe request that is made.
   */
readonly probeRequestType?: 'GET''HEAD''NotSet';

/**
   * Resource ID.
   */
readonly id?: string;

/**
   * The list of Http status code ranges that are considered as server errors for origin and it is marked as unhealthy.
   */
readonly httpErrorRanges?: HttpErrorRangeParameters[];

/**
   * Type of response errors for real user requests for which origin will be deemed unhealthy
   */
readonly responseBasedDetectedErrorTypes?: 'None''TcpAndHttpErrors''TcpErrorsOnly';

/**
   * The percentage of failed requests in the sample where failover should trigger.
   */
readonly responseBasedFailoverThresholdPercentage?: numberConstranumbers:Min value = 0Max value = 100;

/**
   * The inclusive start of the http status code range.
   */
readonly begin?: numberConstranumbers:Min value = 100Max value = 999;

/**
   * The inclusive end of the http status code range.
   */
readonly end?: numberConstranumbers:Min value = 100Max value = 999;
}

/**
 * CdnProfilesEndpointsOrigingroups resource
 */
export class CdnProfilesEndpointsOrigingroups extends AzAPIBase {
  constructor(scope: Construct, id: string, props: CdnProfilesEndpointsOrigingroupsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Cdn/profiles/endpoints/originGroups@2023-07-01-preview";
  }

  protected getResourceBody(props: CdnProfilesEndpointsOrigingroupsProps): string {
    return JSON.stringify(
        {properties: {healthProbeSettings: {probeIntervalInSeconds: "${int}", probePath: "string", probeProtocol: "string", probeRequestType: "string"}, origins: [{id: "string"}], responseBasedOriginErrorDetectionSettings: {httpErrorRanges: [{begin: "${int}", end: "${int}"}], responseBasedDetectedErrorTypes: "string", responseBasedFailoverThresholdPercentage: "${int}"}, trafficRestorationTimeToHealedOrNewEndpointsInMinutes: "${int}"}}
    );
  }
}
