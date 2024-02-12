import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ConnectedvmwarevsphereVirtualmachinesProps extends IAzAPIBaseProps {

}

/**
 * ConnectedvmwarevsphereVirtualmachines resource
 */
export class ConnectedvmwarevsphereVirtualmachines extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ConnectedvmwarevsphereVirtualmachinesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ConnectedVMwarevSphere/virtualMachines@2022-07-15-preview";
  }

  protected getResourceBody(props: ConnectedvmwarevsphereVirtualmachinesProps): string {
    return JSON.stringify(
        {properties: {firmwareType: "string", guestAgentProfile: {clientPublicKey: "string"}, hardwareProfile: {memorySizeMB: "${int}", numCoresPerSocket: "${int}", numCPUs: "${int}"}, inventoryItemId: "string", moRefId: "string", networkProfile: {networkInterfaces: [{deviceKey: "${int}", ipSettings: {allocationMethod: "string", dnsServers: ["string"], gateway: ["string"], ipAddress: "string", subnetMask: "string"}, name: "string", networkId: "string", nicType: "string", powerOnBoot: "string"}]}, osProfile: {adminPassword: "string", adminUsername: "string", computerName: "string", guestId: "string", linuxConfiguration: {patchSettings: {assessmentMode: "string", patchMode: "string"}}, osType: "string", windowsConfiguration: {patchSettings: {assessmentMode: "string", patchMode: "string"}}}, placementProfile: {clusterId: "string", datastoreId: "string", hostId: "string", resourcePoolId: "string"}, resourcePoolId: "string", securityProfile: {uefiSettings: {secureBootEnabled: "${bool}"}}, smbiosUuid: "string", storageProfile: {disks: [{controllerKey: "${int}", deviceKey: "${int}", deviceName: "string", diskMode: "string", diskSizeGB: "${int}", diskType: "string", name: "string", unitNumber: "${int}"}]}, templateId: "string", vCenterId: "string"}, kind: "string", extendedLocation: {name: "string", type: "string"}}
    );
  }
}
