import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface Props extends IAzAPIBaseProps {
/**
   * The public IP address SKU.
   */
readonly sku?: PublicIPAddressSku;

/**
   * The extended location of the public ip address.
   */
readonly extendedLocation?: ExtendedLocation;

/**
   * A list of availability zones denoting the IP allocated for the resource needs to come from.
   */
readonly zones?: string[];

/**
   * The type of the extended location.
   */
readonly type?: 'EdgeZone';

/**
   * The DDoS protection custom policy associated with the public IP address.
   */
readonly ddosSettings?: DdosSettings;

/**
   * Specify what happens to the public IP address when the VM using it is deleted
   */
readonly deleteOption?: 'Delete''Detach';

/**
   * The FQDN of the DNS record associated with the public IP address.
   */
readonly dnsSettings?: PublicIPAddressDnsSettings;

/**
   * The idle timeout of the public IP address.
   */
readonly idleTimeoutInMinutes?: number;

/**
   * The IP address associated with the public IP address resource.
   */
readonly ipAddress?: string;

/**
   * The list of tags associated with the public IP address.
   */
readonly ipTags?: IpTag[];

/**
   * The linked public IP address of the public IP address resource.
   */
readonly linkedPublicIPAddress?: PublicIPAddress;

/**
   * Migration phase of Public IP Address.
   */
readonly migrationPhase?: 'Abort''Commit''Committed''None''Prepare';

/**
   * The NatGateway for the Public IP address.
   */
readonly natGateway?: NatGateway;

/**
   * The public IP address version.
   */
readonly publicIPAddressVersion?: 'IPv4''IPv6';

/**
   * The public IP address allocation method.
   */
readonly publicIPAllocationMethod?: 'Dynamic''Static';

/**
   * The Public IP Prefix this Public IP Address should be allocated from.
   */
readonly publicIPPrefix?: SubResource;

/**
   * The service public IP address of the public IP address resource.
   */
readonly servicePublicIPAddress?: PublicIPAddress;

/**
   * The DDoS protection plan associated with the public IP. Can only be set if ProtectionMode is Enabled
   */
readonly ddosProtectionPlan?: SubResource;

/**
   * The DDoS protection mode of the public IP
   */
readonly protectionMode?: 'Disabled''Enabled''VirtualNetworkInherited';

/**
   * Resource ID.
   */
readonly id?: string;

/**
   * The domain name label. The concatenation of the domain name label and the regionalized DNS zone make up the fully qualified domain name associated with the public IP address. If a domain name label is specified, an A DNS record is created for the public IP in the Microsoft Azure DNS system.
   */
readonly domainNameLabel?: string;

/**
   * The domain name label scope. If a domain name label and a domain name label scope are specified, an A DNS record is created for the public IP in the Microsoft Azure DNS system with a hashed value includes in FQDN.
   */
readonly domainNameLabelScope?: 'NoReuse''ResourceGroupReuse''SubscriptionReuse''TenantReuse';

/**
   * The Fully Qualified Domain Name of the A DNS record associated with the public IP. This is the concatenation of the domainNameLabel and the regionalized DNS zone.
   */
readonly fqdn?: string;

/**
   * The reverse FQDN. A user-visible, fully qualified domain name that resolves to this public IP address. If the reverseFqdn is specified, then a PTR DNS record is created pointing from the IP address in the in-addr.arpa domain to the reverse FQDN.
   */
readonly reverseFqdn?: string;

/**
   * The IP tag type. Example: FirstPartyUsage.
   */
readonly ipTagType?: string;

/**
   * The value of the IP tag associated with the public IP. Example: SQL.
   */
readonly tag?: string;

/**
   * The extended location of the public ip address.
   */
readonly extendedLocation?: ExtendedLocation;

/**
   * Resource ID.
   */
readonly id?: string;

/**
   * The public IP address SKU.
   */
readonly sku?: PublicIPAddressSku;

/**
   * A list of availability zones denoting the IP allocated for the resource needs to come from.
   */
readonly zones?: string[];

/**
   * Tier of a public IP address SKU.
   */
readonly tier?: 'Global''Regional';

/**
   * Resource ID.
   */
readonly id?: string;

/**
   * The nat gateway SKU.
   */
readonly sku?: NatGatewaySku;

/**
   * A list of availability zones denoting the zone in which Nat Gateway should be deployed.
   */
readonly zones?: string[];

/**
   * The idle timeout of the nat gateway.
   */
readonly idleTimeoutInMinutes?: number;

/**
   * An array of public ip addresses associated with the nat gateway resource.
   */
readonly publicIpAddresses?: SubResource[];

/**
   * An array of public ip prefixes associated with the nat gateway resource.
   */
readonly publicIpPrefixes?: SubResource[];
}

/**
 *  resource
 */
export class  extends AzAPIBase {
  constructor(scope: Construct, id: string, props: Props) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "";
  }

  protected getResourceBody(props: Props): string {
    return JSON.stringify(
        
    );
  }
}
