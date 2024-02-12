import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AvsPrivatecloudsWorkloadnetworksDnsservicesProps extends IAzAPIBaseProps {

}

/**
 * AvsPrivatecloudsWorkloadnetworksDnsservices resource
 */
export class AvsPrivatecloudsWorkloadnetworksDnsservices extends AzAPIBase {
  constructor(scope: Construct, id: string, props: AvsPrivatecloudsWorkloadnetworksDnsservicesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.AVS/privateClouds/workloadNetworks/dnsServices@2022-05-01";
  }

  protected getResourceBody(props: AvsPrivatecloudsWorkloadnetworksDnsservicesProps): string {
    return JSON.stringify(
        {properties: {defaultDnsZone: "string", displayName: "string", dnsServiceIp: "string", fqdnZones: ["string"], logLevel: "string", revision: "${int}"}}
    );
  }
}
