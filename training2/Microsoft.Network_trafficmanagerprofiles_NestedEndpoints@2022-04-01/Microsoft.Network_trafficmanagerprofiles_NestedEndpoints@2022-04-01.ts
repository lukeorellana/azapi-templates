import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface NetworkTrafficmanagerprofilesNestedendpointsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:trafficmanagerprofiles;

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
}

/**
 * NetworkTrafficmanagerprofilesNestedendpoints resource
 */
export class NetworkTrafficmanagerprofilesNestedendpoints extends AzAPIBase {
  constructor(scope: Construct, id: string, props: NetworkTrafficmanagerprofilesNestedendpointsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Network/trafficmanagerprofiles/NestedEndpoints@2022-04-01";
  }

  protected getResourceBody(props: NetworkTrafficmanagerprofilesNestedendpointsProps): string {
    return JSON.stringify(
        {properties: {alwaysServe: "string", customHeaders: [{name: "string", value: "string"}], endpointLocation: "string", endpointMonitorStatus: "string", endpointStatus: "string", geoMapping: ["string"], minChildEndpoints: "${int}", minChildEndpointsIPv4: "${int}", minChildEndpointsIPv6: "${int}", priority: "${int}", subnets: [{first: "string", last: "string", scope: "${int}"}], target: "string", targetResourceId: "string", weight: "${int}"}}
    );
  }
}
