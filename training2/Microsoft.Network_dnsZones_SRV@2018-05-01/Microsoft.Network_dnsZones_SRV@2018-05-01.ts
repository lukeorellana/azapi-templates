import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface NetworkDnszonesSrvProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:dnsZones;

/**
   * The etag of the record set.
   */
readonly etag?: string;

/**
   * The list of AAAA records in the record set.
   */
readonly AAAARecords?: AaaaRecord[];

/**
   * The list of A records in the record set.
   */
readonly ARecords?: ARecord[];

/**
   * The list of CAA records in the record set.
   */
readonly caaRecords?: CaaRecord[];

/**
   * The CNAME record in the  record set.
   */
readonly CNAMERecord?: CnameRecord;

/**
   * The metadata attached to the record set.
   */
readonly metadata?: object;

/**
   * The list of MX records in the record set.
   */
readonly MXRecords?: MxRecord[];

/**
   * The list of NS records in the record set.
   */
readonly NSRecords?: NsRecord[];

/**
   * The list of PTR records in the record set.
   */
readonly PTRRecords?: PtrRecord[];

/**
   * The SOA record in the record set.
   */
readonly SOARecord?: SoaRecord;

/**
   * The list of SRV records in the record set.
   */
readonly SRVRecords?: SrvRecord[];

/**
   * A reference to an azure resource from where the dns resource value is taken.
   */
readonly targetResource?: SubResource;

/**
   * The TTL (time-to-live) of the records in the record set.
   */
readonly TTL?: number;

/**
   * The list of TXT records in the record set.
   */
readonly TXTRecords?: TxtRecord[];

/**
   * The IPv6 address of this AAAA record.
   */
readonly ipv6Address?: string;

/**
   * The IPv4 address of this A record.
   */
readonly ipv4Address?: string;

/**
   * The flags for this CAA record as an integer between 0 and 255.
   */
readonly flags?: number;

/**
   * The tag for this CAA record.
   */
readonly tag?: string;

/**
   * The value for this CAA record.
   */
readonly value?: string;

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
   * The name server name for this NS record.
   */
readonly nsdname?: string;

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
readonly minimumTTL?: number;

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
   * Resource Id.
   */
readonly id?: string;

/**
   * The text value of this TXT record.
   */
readonly value?: string[];
}

/**
 * NetworkDnszonesSrv resource
 */
export class NetworkDnszonesSrv extends AzAPIBase {
  constructor(scope: Construct, id: string, props: NetworkDnszonesSrvProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Network/dnsZones/SRV@2018-05-01";
  }

  protected getResourceBody(props: NetworkDnszonesSrvProps): string {
    return JSON.stringify(
        {properties: {AAAARecords: [{ipv6Address: "string"}], ARecords: [{ipv4Address: "string"}], caaRecords: [{flags: "${int}", tag: "string", value: "string"}], CNAMERecord: {cname: "string"}, metadata: {}, MXRecords: [{exchange: "string", preference: "${int}"}], NSRecords: [{nsdname: "string"}], PTRRecords: [{ptrdname: "string"}], SOARecord: {email: "string", expireTime: "${int}", host: "string", minimumTTL: "${int}", refreshTime: "${int}", retryTime: "${int}", serialNumber: "${int}"}, SRVRecords: [{port: "${int}", priority: "${int}", target: "string", weight: "${int}"}], targetResource: {id: "string"}, TTL: "${int}", TXTRecords: [{value: ["string"]}]}, etag: "string"}
    );
  }
}
