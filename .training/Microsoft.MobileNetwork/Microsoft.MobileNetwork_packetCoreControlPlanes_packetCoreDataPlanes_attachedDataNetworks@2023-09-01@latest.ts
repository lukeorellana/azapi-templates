import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface MobilenetworkPacketcorecontrolplanesPacketcoredataplanesAttacheddatanetworksProps extends IAzAPIBaseProps {

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
