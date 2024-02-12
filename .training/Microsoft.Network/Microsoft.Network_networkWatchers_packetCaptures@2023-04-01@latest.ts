import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface NetworkNetworkwatchersPacketcapturesProps extends IAzAPIBaseProps {

}

/**
 * NetworkNetworkwatchersPacketcaptures resource
 */
export class NetworkNetworkwatchersPacketcaptures extends AzAPIBase {
  constructor(scope: Construct, id: string, props: NetworkNetworkwatchersPacketcapturesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Network/networkWatchers/packetCaptures@2023-04-01";
  }

  protected getResourceBody(props: NetworkNetworkwatchersPacketcapturesProps): string {
    return JSON.stringify(
        {properties: {bytesToCapturePerPacket: "${int}", filters: [{localIPAddress: "string", localPort: "string", protocol: "string", remoteIPAddress: "string", remotePort: "string"}], scope: {exclude: ["string"], include: ["string"]}, storageLocation: {filePath: "string", storageId: "string", storagePath: "string"}, target: "string", targetType: "string", timeLimitInSeconds: "${int}", totalBytesPerSession: "${int}"}}
    );
  }
}
