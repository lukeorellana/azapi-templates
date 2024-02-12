import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AvsPrivatecloudsWorkloadnetworksDnszonesProps extends IAzAPIBaseProps {

}

/**
 * AvsPrivatecloudsWorkloadnetworksDnszones resource
 */
export class AvsPrivatecloudsWorkloadnetworksDnszones extends AzAPIBase {
  constructor(scope: Construct, id: string, props: AvsPrivatecloudsWorkloadnetworksDnszonesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.AVS/privateClouds/workloadNetworks/dnsZones@2022-05-01";
  }

  protected getResourceBody(props: AvsPrivatecloudsWorkloadnetworksDnszonesProps): string {
    return JSON.stringify(
        {properties: {displayName: "string", dnsServerIps: ["string"], dnsServices: "${int}", domain: ["string"], revision: "${int}", sourceIp: "string"}}
    );
  }
}
