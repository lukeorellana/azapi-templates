import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AzurestackhciNetworkinterfacesProps extends IAzAPIBaseProps {
/**
   * The extendedLocation of the resource.
   */
readonly extendedLocation?: ExtendedLocation;

/**
   * The type of the extended location.
   */
readonly type?: 'CustomLocation';

/**
   * DNS Settings for the interface
   */
readonly dnsSettings?: InterfaceDNSSettings;

/**
   * IPConfigurations - A list of IPConfigurations of the network interface.
   */
readonly ipConfigurations?: IpConfiguration[];

/**
   * MacAddress - The MAC address of the network interface.
   */
readonly macAddress?: string;

/**
   * name of the object to be used in moc
   */
readonly resourceName?: string;

/**
   * List of DNS server IP Addresses for the interface
   */
readonly dnsServers?: string[];

/**
   * Gateway for network interface
   */
readonly gateway?: string;

/**
   * prefixLength for network interface
   */
readonly prefixLength?: string;

/**
   * PrivateIPAddress - Private IP address of the IP configuration.
   */
readonly privateIPAddress?: string;

/**
   * PrivateIPAllocationMethod - The private IP address allocation method. Possible values include: 'Static', 'Dynamic'
   */
readonly privateIPAllocationMethod?: 'Dynamic''Static';

/**
   * Subnet - Name of Subnet bound to the IP configuration.
   */
readonly subnet?: IpConfigurationPropertiesSubnet;

/**
   * ID - The ARM resource id in the form of /subscriptions/{SubscriptionId}/resourceGroups/{ResourceGroupName}/...
   */
readonly id?: string;
}

/**
 * AzurestackhciNetworkinterfaces resource
 */
export class AzurestackhciNetworkinterfaces extends AzAPIBase {
  constructor(scope: Construct, id: string, props: AzurestackhciNetworkinterfacesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.AzureStackHCI/networkinterfaces@2021-09-01-preview";
  }

  protected getResourceBody(props: AzurestackhciNetworkinterfacesProps): string {
    return JSON.stringify(
        {properties: {dnsSettings: {dnsServers: ["string"]}, ipConfigurations: [{name: "string", properties: {gateway: "string", prefixLength: "string", privateIPAddress: "string", privateIPAllocationMethod: "string", subnet: {id: "string"}}}], macAddress: "string", resourceName: "string"}, extendedLocation: {name: "string", type: "CustomLocation"}}
    );
  }
}
