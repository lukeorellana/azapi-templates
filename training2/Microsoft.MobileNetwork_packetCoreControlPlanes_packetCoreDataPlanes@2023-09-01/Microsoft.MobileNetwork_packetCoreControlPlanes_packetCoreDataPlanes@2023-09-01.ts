import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface MobilenetworkPacketcorecontrolplanesPacketcoredataplanesProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:packetCoreControlPlanes;

/**
   * The user plane interface on the access network. For 5G networks, this is the N3 interface. For 4G networks, this is the S1-U interface.
   */
readonly userPlaneAccessInterface: InterfaceProperties;

/**
   * The virtual IP address(es) for the user plane on the access network in a High Availability (HA) system. In an HA deployment the access network router should be configured to forward traffic for this address to the control plane access interface on the active or standby node. In non-HA system this list should be omitted or empty.
   */
readonly userPlaneAccessVirtualIpv4Addresses?: string[]Constranumbers:Pattern =^(([0-9];

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
 * MobilenetworkPacketcorecontrolplanesPacketcoredataplanes resource
 */
export class MobilenetworkPacketcorecontrolplanesPacketcoredataplanes extends AzAPIBase {
  constructor(scope: Construct, id: string, props: MobilenetworkPacketcorecontrolplanesPacketcoredataplanesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.MobileNetwork/packetCoreControlPlanes/packetCoreDataPlanes@2023-09-01";
  }

  protected getResourceBody(props: MobilenetworkPacketcorecontrolplanesPacketcoredataplanesProps): string {
    return JSON.stringify(
        {properties: {userPlaneAccessInterface: {ipv4Address: "string", ipv4Gateway: "string", ipv4Subnet: "string", name: "string"}, userPlaneAccessVirtualIpv4Addresses: ["string"]}}
    );
  }
}
