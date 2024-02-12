import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface NetworkTrafficmanagerprofilesProps extends IAzAPIBaseProps {

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
