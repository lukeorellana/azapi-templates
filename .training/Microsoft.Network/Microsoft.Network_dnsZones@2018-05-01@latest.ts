import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface NetworkDnszonesProps extends IAzAPIBaseProps {

}

/**
 * NetworkDnszones resource
 */
export class NetworkDnszones extends AzAPIBase {
  constructor(scope: Construct, id: string, props: NetworkDnszonesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Network/dnsZones@2018-05-01";
  }

  protected getResourceBody(props: NetworkDnszonesProps): string {
    return JSON.stringify(
        {properties: {registrationVirtualNetworks: [{id: "string"}], resolutionVirtualNetworks: [{id: "string"}], zoneType: "string"}, etag: "string"}
    );
  }
}
