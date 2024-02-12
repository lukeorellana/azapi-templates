import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface NetworkPublicipprefixesProps extends IAzAPIBaseProps {
/**
   * The public IP prefix SKU.
   */
readonly sku?: PublicIPPrefixSku;

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
   * The customIpPrefix that this prefix is associated with.
   */
readonly customIPPrefix?: object;

/**
   * The list of tags associated with the public IP prefix.
   */
readonly ipTags?: IpTag[];

/**
   * NatGateway of Public IP Prefix.
   */
readonly natGateway?: NatGateway;

/**
   * The Length of the Public IP Prefix.
   */
readonly prefixLength?: number;

/**
   * The public IP address version.
   */
readonly publicIPAddressVersion?: 'IPv4''IPv6';

/**
   * Resource ID.
   */
readonly id?: string;

/**
   * The IP tag type. Example: FirstPartyUsage.
   */
readonly ipTagType?: string;

/**
   * The value of the IP tag associated with the public IP. Example: SQL.
   */
readonly tag?: string;

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

/**
   * Tier of a public IP prefix SKU.
   */
readonly tier?: 'Global''Regional';
}

/**
 * NetworkPublicipprefixes resource
 */
export class NetworkPublicipprefixes extends AzAPIBase {
  constructor(scope: Construct, id: string, props: NetworkPublicipprefixesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Network/publicIPPrefixes@2023-04-01";
  }

  protected getResourceBody(props: NetworkPublicipprefixesProps): string {
    return JSON.stringify(
        {properties: {customIPPrefix: {id: "string"}, ipTags: [{ipTagType: "string", tag: "string"}], natGateway: {id: "string", location: "string", properties: {idleTimeoutInMinutes: "${int}", publicIpAddresses: [{id: "string"}], publicIpPrefixes: [{id: "string"}]}, sku: {name: "Standard"}, tags: {}, zones: ["string"]}, prefixLength: "${int}", publicIPAddressVersion: "string"}, zones: ["string"], sku: {name: "Standard", tier: "string"}, extendedLocation: {name: "string", type: "EdgeZone"}}
    );
  }
}
