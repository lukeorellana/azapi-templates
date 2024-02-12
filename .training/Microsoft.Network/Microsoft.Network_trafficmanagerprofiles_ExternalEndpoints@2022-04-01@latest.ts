import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface NetworkTrafficmanagerprofilesExternalendpointsProps extends IAzAPIBaseProps {

}

/**
 * NetworkTrafficmanagerprofilesExternalendpoints resource
 */
export class NetworkTrafficmanagerprofilesExternalendpoints extends AzAPIBase {
  constructor(scope: Construct, id: string, props: NetworkTrafficmanagerprofilesExternalendpointsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Network/trafficmanagerprofiles/ExternalEndpoints@2022-04-01";
  }

  protected getResourceBody(props: NetworkTrafficmanagerprofilesExternalendpointsProps): string {
    return JSON.stringify(
        {properties: {alwaysServe: "string", customHeaders: [{name: "string", value: "string"}], endpointLocation: "string", endpointMonitorStatus: "string", endpointStatus: "string", geoMapping: ["string"], minChildEndpoints: "${int}", minChildEndpointsIPv4: "${int}", minChildEndpointsIPv6: "${int}", priority: "${int}", subnets: [{first: "string", last: "string", scope: "${int}"}], target: "string", targetResourceId: "string", weight: "${int}"}}
    );
  }
}
