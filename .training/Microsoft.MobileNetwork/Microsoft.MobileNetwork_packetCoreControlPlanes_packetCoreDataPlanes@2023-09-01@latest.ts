import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface MobilenetworkPacketcorecontrolplanesPacketcoredataplanesProps extends IAzAPIBaseProps {

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
