import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface NetworkCustomipprefixesProps extends IAzAPIBaseProps {
/**
   * The extended location of the custom IP prefix.
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
   * The ASN for CIDR advertising. Should be an integer as string.
   */
readonly asn?: string;

/**
   * Authorization message for WAN validation.
   */
readonly authorizationMessage?: string;

/**
   * The prefix range in CIDR notation. Should include the start address and the prefix length.
   */
readonly cidr?: string;

/**
   * The commissioned state of the Custom IP Prefix.
   */
readonly commissionedState?: 'Commissioned''CommissionedNoInternetAdvertise''Commissioning''Decommissioning''Deprovisioned''Deprovisioning''Provisioned''Provisioning';

/**
   * The Parent CustomIpPrefix for IPv6 /64 CustomIpPrefix.
   */
readonly customIpPrefixParent?: SubResource;

/**
   * Whether to do express route advertise.
   */
readonly expressRouteAdvertise?: bool;

/**
   * The Geo for CIDR advertising. Should be an Geo code.
   */
readonly geo?: 'AFRI''APAC''AQ''EURO''GLOBAL''LATAM''ME''NAM''OCEANIA';

/**
   * Whether to Advertise the range to Internet.
   */
readonly noInternetAdvertise?: bool;

/**
   * Type of custom IP prefix. Should be Singular, Parent, or Child.
   */
readonly prefixType?: 'Child''Parent''Singular';

/**
   * Signed message for WAN validation.
   */
readonly signedMessage?: string;

/**
   * Resource ID.
   */
readonly id?: string;
}

/**
 * NetworkCustomipprefixes resource
 */
export class NetworkCustomipprefixes extends AzAPIBase {
  constructor(scope: Construct, id: string, props: NetworkCustomipprefixesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Network/customIpPrefixes@2023-04-01";
  }

  protected getResourceBody(props: NetworkCustomipprefixesProps): string {
    return JSON.stringify(
        {properties: {asn: "string", authorizationMessage: "string", cidr: "string", commissionedState: "string", customIpPrefixParent: {id: "string"}, expressRouteAdvertise: "${bool}", geo: "string", noInternetAdvertise: "${bool}", prefixType: "string", signedMessage: "string"}, zones: ["string"], extendedLocation: {name: "string", type: "EdgeZone"}}
    );
  }
}
