import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AvsPrivatecloudsWorkloadnetworksDnsservicesProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type: workloadNetworks;

/**
   * Default DNS zone of the DNS Service.
   */
readonly defaultDnsZone?: string;

/**
   * Display name of the DNS Service.
   */
readonly displayName?: string;

/**
   * DNS service IP of the DNS Service.
   */
readonly dnsServiceIp?: string;

/**
   * FQDN zones of the DNS Service.
   */
readonly fqdnZones?: string[];

/**
   * DNS Service log level.
   */
readonly logLevel?: 'DEBUG''ERROR''FATAL''INFO''WARNING';

/**
   * NSX revision number.
   */
readonly revision?: number;
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
