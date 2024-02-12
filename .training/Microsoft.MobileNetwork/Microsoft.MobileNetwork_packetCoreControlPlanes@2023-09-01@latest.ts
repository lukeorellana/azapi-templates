import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface MobilenetworkPacketcorecontrolplanesProps extends IAzAPIBaseProps {

}

/**
 * MobilenetworkPacketcorecontrolplanes resource
 */
export class MobilenetworkPacketcorecontrolplanes extends AzAPIBase {
  constructor(scope: Construct, id: string, props: MobilenetworkPacketcorecontrolplanesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.MobileNetwork/packetCoreControlPlanes@2023-09-01";
  }

  protected getResourceBody(props: MobilenetworkPacketcorecontrolplanesProps): string {
    return JSON.stringify(
        {properties: {controlPlaneAccessInterface: {ipv4Address: "string", ipv4Gateway: "string", ipv4Subnet: "string", name: "string"}, controlPlaneAccessVirtualIpv4Addresses: ["string"], coreNetworkTechnology: "string", diagnosticsUpload: {storageAccountContainerUrl: "string"}, eventHub: {id: "string", reportingInterval: "${int}"}, installation: {desiredState: "string"}, localDiagnosticsAccess: {authenticationType: "string", httpsServerCertificate: {certificateUrl: "string"}}, platform: {azureStackEdgeDevice: {id: "string"}, azureStackHciCluster: {id: "string"}, connectedCluster: {id: "string"}, customLocation: {id: "string"}, type: "string"}, signaling: {nasReroute: {macroMmeGroupId: "${int}"}}, sites: [{id: "string"}], sku: "string", ueMtu: "${int}", version: "string"}}
    );
  }
}
