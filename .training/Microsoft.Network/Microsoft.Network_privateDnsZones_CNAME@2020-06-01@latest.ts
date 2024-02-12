import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface NetworkPrivatednszonesCnameProps extends IAzAPIBaseProps {

}

/**
 * NetworkPrivatednszonesCname resource
 */
export class NetworkPrivatednszonesCname extends AzAPIBase {
  constructor(scope: Construct, id: string, props: NetworkPrivatednszonesCnameProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Network/privateDnsZones/CNAME@2020-06-01";
  }

  protected getResourceBody(props: NetworkPrivatednszonesCnameProps): string {
    return JSON.stringify(
        {properties: {aaaaRecords: [{ipv6Address: "string"}], aRecords: [{ipv4Address: "string"}], cnameRecord: {cname: "string"}, metadata: {}, mxRecords: [{exchange: "string", preference: "${int}"}], ptrRecords: [{ptrdname: "string"}], soaRecord: {email: "string", expireTime: "${int}", host: "string", minimumTtl: "${int}", refreshTime: "${int}", retryTime: "${int}", serialNumber: "${int}"}, srvRecords: [{port: "${int}", priority: "${int}", target: "string", weight: "${int}"}], ttl: "${int}", txtRecords: [{value: ["string"]}]}, etag: "string"}
    );
  }
}
