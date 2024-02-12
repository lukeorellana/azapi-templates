import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface NetworkTrafficmanagerprofilesProps extends IAzAPIBaseProps {
/**
   * The list of allowed endpoint record types.
   */
readonly allowedEndpointRecordTypes?: String array containing any of:'Any''DomainName''IPv4Address''IPv6Address';

/**
   * The DNS settings of the Traffic Manager profile.
   */
readonly dnsConfig?: DnsConfig;

/**
   * The list of endpoints in the Traffic Manager profile.
   */
readonly endpoints?: Endponumber[];

/**
   * Maximum number of endpoints to be returned for MultiValue routing type.
   */
readonly maxReturn?: number;

/**
   * The endpoint monitoring settings of the Traffic Manager profile.
   */
readonly monitorConfig?: MonitorConfig;

/**
   * The status of the Traffic Manager profile.
   */
readonly profileStatus?: 'Disabled''Enabled';

/**
   * The traffic routing method of the Traffic Manager profile.
   */
readonly trafficRoutingMethod?: 'Geographic''MultiValue''Performance''Priority''Subnet''Weighted';

/**
   * Indicates whether Traffic View is 'Enabled' or 'Disabled' for the Traffic Manager profile. Null, indicates 'Disabled'. Enabling this feature will increase the cost of the Traffic Manage profile.
   */
readonly trafficViewEnrollmentStatus?: 'Disabled''Enabled';

/**
   * The relative DNS name provided by this Traffic Manager profile. This value is combined with the DNS domain name used by Azure Traffic Manager to form the fully-qualified domain name (FQDN) of the profile.
   */
readonly relativeName?: string;

/**
   * The DNS Time-To-Live (TTL), in seconds. This informs the local DNS resolvers and DNS clients how long to cache DNS responses provided by this Traffic Manager profile.
   */
readonly ttl?: number;

/**
   * Fully qualified resource Id for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/trafficManagerProfiles/{resourceName}
   */
readonly id?: string;

/**
   * The type of the resource. Ex- Microsoft.Network/trafficManagerProfiles.
   */
readonly type?: string;

/**
   * If Always Serve is enabled, probing for endpoint health will be disabled and endpoints will be included in the traffic routing method.
   */
readonly alwaysServe?: 'Disabled''Enabled';

/**
   * List of custom headers.
   */
readonly customHeaders?: EndponumberPropertiesCustomHeadersItem[];

/**
   * Specifies the location of the external or nested endpoints when using the 'Performance' traffic routing method.
   */
readonly endpointLocation?: string;

/**
   * The monitoring status of the endpoint.
   */
readonly endpointMonitorStatus?: 'CheckingEndponumber''Degraded''Disabled''Inactive''Online''Stopped''Unmonitored';

/**
   * The status of the endpoint. If the endpoint is Enabled, it is probed for endpoint health and is included in the traffic routing method.
   */
readonly endpointStatus?: 'Disabled''Enabled';

/**
   * The list of countries/regions mapped to this endpoint when using the 'Geographic' traffic routing method. Please consult Traffic Manager Geographic documentation for a full list of accepted values.
   */
readonly geoMapping?: string[];

/**
   * The minimum number of endpoints that must be available in the child profile in order for the parent profile to be considered available. Only applicable to endpoint of type 'NestedEndpoints'.
   */
readonly minChildEndpoints?: number;

/**
   * The minimum number of IPv4 (DNS record type A) endpoints that must be available in the child profile in order for the parent profile to be considered available. Only applicable to endpoint of type 'NestedEndpoints'.
   */
readonly minChildEndpointsIPv4?: number;

/**
   * The minimum number of IPv6 (DNS record type AAAA) endpoints that must be available in the child profile in order for the parent profile to be considered available. Only applicable to endpoint of type 'NestedEndpoints'.
   */
readonly minChildEndpointsIPv6?: number;

/**
   * The priority of this endpoint when using the 'Priority' traffic routing method. Possible values are from 1 to 1000, lower values represent higher priority. This is an optional parameter.  If specified, it must be specified on all endpoints, and no two endpoints can share the same priority value.
   */
readonly priority?: number;

/**
   * The list of subnets, IP addresses, and/or address ranges mapped to this endpoint when using the 'Subnet' traffic routing method. An empty list will match all ranges not covered by other endpoints.
   */
readonly subnets?: EndponumberPropertiesSubnetsItem[];

/**
   * The fully-qualified DNS name or IP address of the endpoint. Traffic Manager returns this value in DNS responses to direct traffic to this endpoint.
   */
readonly target?: string;

/**
   * The Azure Resource URI of the of the endpoint. Not applicable to endpoints of type 'ExternalEndpoints'.
   */
readonly targetResourceId?: string;

/**
   * The weight of this endpoint when using the 'Weighted' traffic routing method. Possible values are from 1 to 1000.
   */
readonly weight?: number;

/**
   * Header value.
   */
readonly value?: string;

/**
   * First address in the subnet.
   */
readonly first?: string;

/**
   * Last address in the subnet.
   */
readonly last?: string;

/**
   * Block size (number of leading bits in the subnet mask).
   */
readonly scope?: number;

/**
   * List of custom headers.
   */
readonly customHeaders?: MonitorConfigCustomHeadersItem[];

/**
   * List of expected status code ranges.
   */
readonly expectedStatusCodeRanges?: MonitorConfigExpectedStatusCodeRangesItem[];

/**
   * The monitor interval for endpoints in this profile. This is the interval at which Traffic Manager will check the health of each endpoint in this profile.
   */
readonly intervalInSeconds?: number;

/**
   * The path relative to the endpoint domain name used to probe for endpoint health.
   */
readonly path?: string;

/**
   * The TCP port used to probe for endpoint health.
   */
readonly port?: number;

/**
   * The profile-level monitoring status of the Traffic Manager profile.
   */
readonly profileMonitorStatus?: 'CheckingEndponumbers''Degraded''Disabled''Inactive''Online';

/**
   * The protocol (HTTP, HTTPS or TCP) used to probe for endpoint health.
   */
readonly protocol?: 'HTTP''HTTPS''TCP';

/**
   * The monitor timeout for endpoints in this profile. This is the time that Traffic Manager allows endpoints in this profile to response to the health check.
   */
readonly timeoutInSeconds?: number;

/**
   * The number of consecutive failed health check that Traffic Manager tolerates before declaring an endpoint in this profile Degraded after the next failed health check.
   */
readonly toleratedNumberOfFailures?: number;

/**
   * Header value.
   */
readonly value?: string;

/**
   * Max status code.
   */
readonly max?: number;

/**
   * Min status code.
   */
readonly min?: number;
}

/**
 * NetworkTrafficmanagerprofiles resource
 */
export class NetworkTrafficmanagerprofiles extends AzAPIBase {
  constructor(scope: Construct, id: string, props: NetworkTrafficmanagerprofilesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Network/trafficmanagerprofiles@2022-04-01";
  }

  protected getResourceBody(props: NetworkTrafficmanagerprofilesProps): string {
    return JSON.stringify(
        {properties: {allowedEndpointRecordTypes: ["string"], dnsConfig: {relativeName: "string", ttl: "${int}"}, endpoints: [{id: "string", name: "string", properties: {alwaysServe: "string", customHeaders: [{name: "string", value: "string"}], endpointLocation: "string", endpointMonitorStatus: "string", endpointStatus: "string", geoMapping: ["string"], minChildEndpoints: "${int}", minChildEndpointsIPv4: "${int}", minChildEndpointsIPv6: "${int}", priority: "${int}", subnets: [{first: "string", last: "string", scope: "${int}"}], target: "string", targetResourceId: "string", weight: "${int}"}, type: "string"}], maxReturn: "${int}", monitorConfig: {customHeaders: [{name: "string", value: "string"}], expectedStatusCodeRanges: [{max: "${int}", min: "${int}"}], intervalInSeconds: "${int}", path: "string", port: "${int}", profileMonitorStatus: "string", protocol: "string", timeoutInSeconds: "${int}", toleratedNumberOfFailures: "${int}"}, profileStatus: "string", trafficRoutingMethod: "string", trafficViewEnrollmentStatus: "string"}}
    );
  }
}
