import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface MobilenetworkPacketcorecontrolplanesPacketcapturesProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:packetCoreControlPlanes;

/**
   * Number of bytes captured per packet, the remaining bytes are truncated. The default "0" means the entire packet is captured.
   */
readonly bytesToCapturePerPacket?: numberConstranumbers:Min value = 0Max value = 4294967295;

/**
   * List of network interfaces to capture on.
   */
readonly networkInterfaces?: string[]Constranumbers:Min length = 1;

/**
   * Maximum duration of the capture session in seconds.
   */
readonly timeLimitInSeconds?: numberConstranumbers:Min value = 5Max value = 18000;

/**
   * Maximum size of the capture output.
   */
readonly totalBytesPerSession?: numberConstranumbers:Min value = 1000Max value = 4294967295;
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
