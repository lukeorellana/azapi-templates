import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface NetworkNetworkwatchersPacketcapturesProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:networkWatchers;

/**
   * Number of bytes captured per packet, the remaining bytes are truncated.
   */
readonly bytesToCapturePerPacket?: number;

/**
   * A list of packet capture filters.
   */
readonly filters?: PacketCaptureFilter[];

/**
   * A list of AzureVMSS instances which can be included or excluded to run packet capture. If both included and excluded are empty, then the packet capture will run on all instances of AzureVMSS.
   */
readonly scope?: PacketCaptureMachineScope;

/**
   * The storage location for a packet capture session.
   */
readonly storageLocation: PacketCaptureStorageLocation;

/**
   * The ID of the targeted resource, only AzureVM and AzureVMSS as target type are currently supported.
   */
readonly target: string;

/**
   * Target type of the resource provided.
   */
readonly targetType?: 'AzureVM''AzureVMSS';

/**
   * Maximum duration of the capture session in seconds.
   */
readonly timeLimitInSeconds?: number;

/**
   * Maximum size of the capture output.
   */
readonly totalBytesPerSession?: number;

/**
   * Local IP Address to be filtered on. Notation: "127.0.0.1" for single address entry. "127.0.0.1-127.0.0.255" for range. "127.0.0.1;127.0.0.5"? for multiple entries. Multiple ranges not currently supported. Mixing ranges with multiple entries not currently supported. Default = null.
   */
readonly localIPAddress?: string;

/**
   * Local port to be filtered on. Notation: "80" for single port entry."80-85" for range. "80;443;" for multiple entries. Multiple ranges not currently supported. Mixing ranges with multiple entries not currently supported. Default = null.
   */
readonly localPort?: string;

/**
   * Protocol to be filtered on.
   */
readonly protocol?: 'Any''TCP''UDP';

/**
   * Local IP Address to be filtered on. Notation: "127.0.0.1" for single address entry. "127.0.0.1-127.0.0.255" for range. "127.0.0.1;127.0.0.5;" for multiple entries. Multiple ranges not currently supported. Mixing ranges with multiple entries not currently supported. Default = null.
   */
readonly remoteIPAddress?: string;

/**
   * Remote port to be filtered on. Notation: "80" for single port entry."80-85" for range. "80;443;" for multiple entries. Multiple ranges not currently supported. Mixing ranges with multiple entries not currently supported. Default = null.
   */
readonly remotePort?: string;

/**
   * List of AzureVMSS instances which has to be excluded from the AzureVMSS from running packet capture.
   */
readonly exclude?: string[];

/**
   * List of AzureVMSS instances to run packet capture on.
   */
readonly include?: string[];

/**
   * A valid local path on the targeting VM. Must include the name of the capture file (*.cap). For linux virtual machine it must start with /var/captures. Required if no storage ID is provided, otherwise optional.
   */
readonly filePath?: string;

/**
   * The ID of the storage account to save the packet capture session. Required if no local file path is provided.
   */
readonly storageId?: string;

/**
   * The URI of the storage path to save the packet capture. Must be a well-formed URI describing the location to save the packet capture.
   */
readonly storagePath?: string;
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
