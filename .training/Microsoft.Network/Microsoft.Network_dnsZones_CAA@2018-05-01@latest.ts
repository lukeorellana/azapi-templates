import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface NetworkDnszonesCaaProps extends IAzAPIBaseProps {

}

/**
 * NetworkDnszonesCaa resource
 */
export class NetworkDnszonesCaa extends AzAPIBase {
  constructor(scope: Construct, id: string, props: NetworkDnszonesCaaProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Network/dnsZones/CAA@2018-05-01";
  }

  protected getResourceBody(props: NetworkDnszonesCaaProps): string {
    return JSON.stringify(
        {properties: {AAAARecords: [{ipv6Address: "string"}], ARecords: [{ipv4Address: "string"}], caaRecords: [{flags: "${int}", tag: "string", value: "string"}], CNAMERecord: {cname: "string"}, metadata: {}, MXRecords: [{exchange: "string", preference: "${int}"}], NSRecords: [{nsdname: "string"}], PTRRecords: [{ptrdname: "string"}], SOARecord: {email: "string", expireTime: "${int}", host: "string", minimumTTL: "${int}", refreshTime: "${int}", retryTime: "${int}", serialNumber: "${int}"}, SRVRecords: [{port: "${int}", priority: "${int}", target: "string", weight: "${int}"}], targetResource: {id: "string"}, TTL: "${int}", TXTRecords: [{value: ["string"]}]}, etag: "string"}
    );
  }
}
