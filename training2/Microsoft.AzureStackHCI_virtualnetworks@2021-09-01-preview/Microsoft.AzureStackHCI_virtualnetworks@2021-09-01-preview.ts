import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AzurestackhciVirtualnetworksProps extends IAzAPIBaseProps {
/**
   * The extendedLocation of the resource.
   */
readonly extendedLocation?: ExtendedLocation;

/**
   * The type of the extended location.
   */
readonly type?: 'CustomLocation';

/**
   * Type of the network
   */
readonly networkType?: 'ICS''Internal''L2Bridge''L2Tunnel''Mirrored''NAT''Overlay''Private''Transparent';

/**
   * name of the object to be used in moc
   */
readonly resourceName?: string;

/**
   * Subnet - list of subnets under the virtual network
   */
readonly subnets?: VirtualnetworksPropertiesSubnetsItem[];

/**
   * Cidr for this subnet - IPv4, IPv6
   */
readonly addressPrefix?: string;

/**
   * AddressPrefixes - List of address prefixes for the subnet.
   */
readonly addressPrefixes?: string[];

/**
   * IPAllocationMethod - The IP address allocation method. Possible values include: 'Static', 'Dynamic'
   */
readonly ipAllocationMethod?: 'Dynamic''Static';

/**
   * IPConfigurationReferences - list of IPConfigurationReferences
   */
readonly ipConfigurationReferences?: ComponentsVqks9HSchemasVirtualnetworkspropertiesProp...[];

/**
   * network associated pool of IP Addresses
   */
readonly ipPools?: IPPool[];

/**
   * RouteTable for the subnet
   */
readonly routeTable?: ComponentsL15GkaSchemasVirtualnetworkspropertiesProp...;

/**
   * Vlan to use for the subnet
   */
readonly vlan?: number;

/**
   * IPConfigurationID
   */
readonly ID?: string;

/**
   * end of the ip address pool
   */
readonly end?: string;

/**
   * 
   */
readonly info?: IPPoolInfo;

/**
   * ip pool type
   */
readonly ipPoolType?: 'vippool''vm';

/**
   * start of the ip address pool
   */
readonly start?: string;

/**
   * Etag - Gets a unique read-only string that changes whenever the resource is updated.
   */
readonly id?: string;

/**
   * Type - READ-ONLY; Resource type.
   */
readonly type?: string;

/**
   * Routes - Collection of routes contained within a route table.
   */
readonly routes?: VirtualnetworksPropertiesSubnetsPropertiesItemsItem[];

/**
   * AddressPrefix - The destination CIDR to which the route applies.
   */
readonly addressPrefix?: string;

/**
   * NextHopIPAddress - The IP address packets should be forwarded to. Next hop values are only allowed in routes where the next hop type is VirtualAppliance.
   */
readonly nextHopIpAddress?: string;
}

/**
 * AzurestackhciVirtualnetworks resource
 */
export class AzurestackhciVirtualnetworks extends AzAPIBase {
  constructor(scope: Construct, id: string, props: AzurestackhciVirtualnetworksProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.AzureStackHCI/virtualnetworks@2021-09-01-preview";
  }

  protected getResourceBody(props: AzurestackhciVirtualnetworksProps): string {
    return JSON.stringify(
        {properties: {networkType: "string", resourceName: "string", subnets: [{name: "string", properties: {addressPrefix: "string", addressPrefixes: ["string"], ipAllocationMethod: "string", ipConfigurationReferences: [{ID: "string"}], ipPools: [{end: "string", info: {}, ipPoolType: "string", start: "string"}], routeTable: {id: "string", name: "string", properties: {routes: [{name: "string", properties: {addressPrefix: "string", nextHopIpAddress: "string"}}]}, type: "string"}, vlan: "${int}"}}]}, extendedLocation: {name: "string", type: "CustomLocation"}}
    );
  }
}
