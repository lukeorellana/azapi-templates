import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface MobilenetworkPacketcorecontrolplanesPacketcapturesProps extends IAzAPIBaseProps {

}

/**
 * MobilenetworkPacketcorecontrolplanesPacketcaptures resource
 */
export class MobilenetworkPacketcorecontrolplanesPacketcaptures extends AzAPIBase {
  constructor(scope: Construct, id: string, props: MobilenetworkPacketcorecontrolplanesPacketcapturesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.MobileNetwork/packetCoreControlPlanes/packetCaptures@2023-09-01";
  }

  protected getResourceBody(props: MobilenetworkPacketcorecontrolplanesPacketcapturesProps): string {
    return JSON.stringify(
        {properties: {bytesToCapturePerPacket: "${int}", networkInterfaces: ["string"], timeLimitInSeconds: "${int}", totalBytesPerSession: "${int}"}}
    );
  }
}
