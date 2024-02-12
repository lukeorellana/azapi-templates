import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface NetworkPrivatednszonesAProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:privateDnsZones;

/**
   * The ETag of the record set.
   */
readonly etag?: string;

/**
   * The list of AAAA records in the record set.
   */
readonly aaaaRecords?: AaaaRecord[];

/**
   * The list of A records in the record set.
   */
readonly aRecords?: ARecord[];

/**
   * The CNAME record in the record set.
   */
readonly cnameRecord?: CnameRecord;

/**
   * The metadata attached to the record set.
   */
readonly metadata?: object;

/**
   * The list of MX records in the record set.
   */
readonly mxRecords?: MxRecord[];

/**
   * The list of PTR records in the record set.
   */
readonly ptrRecords?: PtrRecord[];

/**
   * The SOA record in the record set.
   */
readonly soaRecord?: SoaRecord;

/**
   * The list of SRV records in the record set.
   */
readonly srvRecords?: SrvRecord[];

/**
   * The TTL (time-to-live) of the records in the record set.
   */
readonly ttl?: number;

/**
   * The list of TXT records in the record set.
   */
readonly txtRecords?: TxtRecord[];

/**
   * The IPv6 address of this AAAA record.
   */
readonly ipv6Address?: string;

/**
   * The IPv4 address of this A record.
   */
readonly ipv4Address?: string;

/**
   * The canonical name for this CNAME record.
   */
readonly cname?: string;

/**
   * The domain name of the mail host for this MX record.
   */
readonly exchange?: string;

/**
   * The preference value for this MX record.
   */
readonly preference?: number;

/**
   * The PTR target domain name for this PTR record.
   */
readonly ptrdname?: string;

/**
   * The email contact for this SOA record.
   */
readonly email?: string;

/**
   * The expire time for this SOA record.
   */
readonly expireTime?: number;

/**
   * The domain name of the authoritative name server for this SOA record.
   */
readonly host?: string;

/**
   * The minimum value for this SOA record. By convention this is used to determine the negative caching duration.
   */
readonly minimumTtl?: number;

/**
   * The refresh value for this SOA record.
   */
readonly refreshTime?: number;

/**
   * The retry time for this SOA record.
   */
readonly retryTime?: number;

/**
   * The serial number for this SOA record.
   */
readonly serialNumber?: number;

/**
   * The port value for this SRV record.
   */
readonly port?: number;

/**
   * The priority value for this SRV record.
   */
readonly priority?: number;

/**
   * The target domain name for this SRV record.
   */
readonly target?: string;

/**
   * The weight value for this SRV record.
   */
readonly weight?: number;

/**
   * The text value of this TXT record.
   */
readonly value?: string[];
}

/**
 * NetworkPrivatednszonesA resource
 */
export class NetworkPrivatednszonesA extends AzAPIBase {
  constructor(scope: Construct, id: string, props: NetworkPrivatednszonesAProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Network/privateDnsZones/A@2020-06-01";
  }

  protected getResourceBody(props: NetworkPrivatednszonesAProps): string {
    return JSON.stringify(
        {properties: {aaaaRecords: [{ipv6Address: "string"}], aRecords: [{ipv4Address: "string"}], cnameRecord: {cname: "string"}, metadata: {}, mxRecords: [{exchange: "string", preference: "${int}"}], ptrRecords: [{ptrdname: "string"}], soaRecord: {email: "string", expireTime: "${int}", host: "string", minimumTtl: "${int}", refreshTime: "${int}", retryTime: "${int}", serialNumber: "${int}"}, srvRecords: [{port: "${int}", priority: "${int}", target: "string", weight: "${int}"}], ttl: "${int}", txtRecords: [{value: ["string"]}]}, etag: "string"}
    );
  }
}
