import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface MobilenetworkPacketcorecontrolplanesPacketcoredataplanesAttacheddatanetworksProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:packetCoreDataPlanes;

/**
   * The DNS servers to signal to UEs to use for this attached data network. This configuration is mandatory - if you don't want DNS servers, you must provide an empty array.
   */
readonly dnsAddresses: string[] Constranumbers:Pattern =^(([0-9];

/**
   * The network address and port translation (NAPT) configuration.If this is not specified, the attached data network will use a default NAPT configuration with NAPT enabled.
   */
readonly naptConfiguration?: NaptConfiguration;

/**
   * The user equipment (UE) address pool prefixes for the attached data network from which the packet core instance will dynamically assign IP addresses to UEs.The packet core instance assigns an IP address to a UE when the UE sets up a PDU session.You must define at least one of userEquipmentAddressPoolPrefix and userEquipmentStaticAddressPoolPrefix. If you define both, they must be of the same size.
   */
readonly userEquipmentAddressPoolPrefix?: stringConstranumbers:Min length = 1Pattern =^(([0-9];

/**
   * The user equipment (UE) address pool prefixes for the attached data network from which the packet core instance will assign static IP addresses to UEs.The packet core instance assigns an IP address to a UE when the UE sets up a PDU session. The static IP address for a specific UE is set in StaticIPConfiguration on the corresponding SIM resource.At least one of userEquipmentAddressPoolPrefix and userEquipmentStaticAddressPoolPrefix must be defined. If both are defined, they must be of the same size.
   */
readonly userEquipmentStaticAddressPoolPrefix?: stringConstranumbers:Min length = 1Pattern =^(([0-9];

/**
   * The user plane interface on the data network. For 5G networks, this is the N6 interface. For 4G networks, this is the SGi interface.
   */
readonly userPlaneDataInterface: InterfaceProperties;

/**
   * Whether NAPT is enabled for connections to this attached data network.
   */
readonly enabled?: 'Disabled''Enabled';

/**
   * Maximum number of UDP and TCP pinholes that can be open simultaneously on the core interface. For 5G networks, this is the N6 interface. For 4G networks, this is the SGi interface.
   */
readonly pinholeLimits?: numberConstranumbers:Min value = 1Max value = 65536;

/**
   * Expiry times of inactive NAPT pinholes, in seconds. All timers must be at least 1 second.
   */
readonly pinholeTimeouts?: PinholeTimeouts;

/**
   * Range of port numbers to use as translated ports on each translated address.If not specified and NAPT is enabled, this range defaults to 1,024 - 49,999.(Ports under 1,024 should not be used because these are special purpose ports reserved by IANA. Ports 50,000 and above are reserved for non-NAPT use.)
   */
readonly portRange?: PortRange;

/**
   * The minimum time (in seconds) that will pass before a port that was used by a closed pinhole can be recycled for use by another pinhole. All hold times must be at least 1 second.
   */
readonly portReuseHoldTime?: PortReuseHoldTimes;

/**
   * Pinhole timeout for ICMP pinholes in seconds. Default for ICMP Echo is 30 seconds.
   */
readonly icmp?: numberConstranumbers:Min value = 1;

/**
   * Pinhole timeout for TCP pinholes in seconds. Default for TCP is 3 minutes.
   */
readonly tcp?: numberConstranumbers:Min value = 1;

/**
   * Pinhole timeout for UDP pinholes in seconds. Default for UDP is 30 seconds.
   */
readonly udp?: numberConstranumbers:Min value = 1;

/**
   * The maximum port number
   */
readonly maxPort?: numberConstranumbers:Min value = 1024Max value = 65535;

/**
   * The minimum port number
   */
readonly minPort?: numberConstranumbers:Min value = 1024Max value = 65535;

/**
   * Minimum time in seconds that will pass before a TCP port that was used by a closed pinhole can be reused. Default for TCP is 2 minutes.
   */
readonly tcp?: numberConstranumbers:Min value = 1;

/**
   * Minimum time in seconds that will pass before a UDP port that was used by a closed pinhole can be reused. Default for UDP is 1 minute.
   */
readonly udp?: numberConstranumbers:Min value = 1;

/**
   * The IPv4 address.
   */
readonly ipv4Address?: stringConstranumbers:Pattern =^(([0-9];

/**
   * The default IPv4 gateway (router).
   */
readonly ipv4Gateway?: stringConstranumbers:Pattern =^(([0-9];

/**
   * The IPv4 subnet.
   */
readonly ipv4Subnet?: stringConstranumbers:Pattern =^(([0-9];
}

/**
 * MobilenetworkPacketcorecontrolplanesPacketcoredataplanesAttacheddatanetworks resource
 */
export class MobilenetworkPacketcorecontrolplanesPacketcoredataplanesAttacheddatanetworks extends AzAPIBase {
  constructor(scope: Construct, id: string, props: MobilenetworkPacketcorecontrolplanesPacketcoredataplanesAttacheddatanetworksProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.MobileNetwork/packetCoreControlPlanes/packetCoreDataPlanes/attachedDataNetworks@2023-09-01";
  }

  protected getResourceBody(props: MobilenetworkPacketcorecontrolplanesPacketcoredataplanesAttacheddatanetworksProps): string {
    return JSON.stringify(
        {properties: {dnsAddresses: ["string"], naptConfiguration: {enabled: "string", pinholeLimits: "${int}", pinholeTimeouts: {icmp: "${int}", tcp: "${int}", udp: "${int}"}, portRange: {maxPort: "${int}", minPort: "${int}"}, portReuseHoldTime: {tcp: "${int}", udp: "${int}"}}, userEquipmentAddressPoolPrefix: "string", userEquipmentStaticAddressPoolPrefix: "string", userPlaneDataInterface: {ipv4Address: "string", ipv4Gateway: "string", ipv4Subnet: "string", name: "string"}}}
    );
  }
}
