import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AvsPrivatecloudsWorkloadnetworksDnszonesProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type: workloadNetworks;

/**
   * Display name of the DNS Zone.
   */
readonly displayName?: string;

/**
   * DNS Server IP array of the DNS Zone.
   */
readonly dnsServerIps?: string[];

/**
   * Number of DNS Services using the DNS zone.
   */
readonly dnsServices?: number;

/**
   * Domain names of the DNS Zone.
   */
readonly domain?: string[];

/**
   * NSX revision number.
   */
readonly revision?: number;

/**
   * Source IP of the DNS Zone.
   */
readonly sourceIp?: string;
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
