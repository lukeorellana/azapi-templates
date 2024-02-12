import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface CdnProfilesOrigingroupsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:profiles;

/**
   * Health probe settings to the origin that is used to determine the health of the origin.
   */
readonly healthProbeSettings?: HealthProbeParameters;

/**
   * Load balancing settings for a backend pool
   */
readonly loadBalancingSettings?: LoadBalancingSettingsParameters;

/**
   * Whether to allow session affinity on this host. Valid options are 'Enabled' or 'Disabled'
   */
readonly sessionAffinityState?: 'Disabled''Enabled';

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
   * The additional latency in milliseconds for probes to fall into the lowest latency bucket
   */
readonly additionalLatencyInMilliseconds?: number;

/**
   * The number of samples to consider for load balancing decisions
   */
readonly sampleSize?: number;

/**
   * The number of samples within the sample period that must succeed
   */
readonly successfulSamplesRequired?: number;
}

/**
 * CdnProfilesOrigingroups resource
 */
export class CdnProfilesOrigingroups extends AzAPIBase {
  constructor(scope: Construct, id: string, props: CdnProfilesOrigingroupsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Cdn/profiles/originGroups@2023-07-01-preview";
  }

  protected getResourceBody(props: CdnProfilesOrigingroupsProps): string {
    return JSON.stringify(
        {properties: {healthProbeSettings: {probeIntervalInSeconds: "${int}", probePath: "string", probeProtocol: "string", probeRequestType: "string"}, loadBalancingSettings: {additionalLatencyInMilliseconds: "${int}", sampleSize: "${int}", successfulSamplesRequired: "${int}"}, sessionAffinityState: "string", trafficRestorationTimeToHealedOrNewEndpointsInMinutes: "${int}"}}
    );
  }
}
