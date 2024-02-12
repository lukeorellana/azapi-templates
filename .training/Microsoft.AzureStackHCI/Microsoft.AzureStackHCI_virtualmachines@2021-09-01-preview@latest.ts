import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AzurestackhciVirtualmachinesProps extends IAzAPIBaseProps {

}

/**
 * AzurestackhciVirtualmachines resource
 */
export class AzurestackhciVirtualmachines extends AzAPIBase {
  constructor(scope: Construct, id: string, props: AzurestackhciVirtualmachinesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.AzureStackHCI/virtualmachines@2021-09-01-preview";
  }

  protected getResourceBody(props: AzurestackhciVirtualmachinesProps): string {
    return JSON.stringify(
        {properties: {guestAgentProfile: {}, hardwareProfile: {dynamicMemoryConfig: {maximumMemoryGB: "${int}", minimumMemoryGB: "${int}", targetMemoryBuffer: "${int}"}, memoryGB: "${int}", processors: "${int}", vmSize: "string"}, networkProfile: {networkInterfaces: [{id: "string"}]}, osProfile: {adminPassword: "string", adminUsername: "string", computerName: "string", linuxConfiguration: {disablePasswordAuthentication: "${bool}", provisionVMAgent: "${bool}", ssh: {publicKeys: [{keyData: "string", path: "string"}]}}, osType: "string", windowsConfiguration: {enableAutomaticUpdates: "${bool}", provisionVMAgent: "${bool}", ssh: {publicKeys: [{keyData: "string", path: "string"}]}, timeZone: "string"}}, resourceName: "string", securityProfile: {enableTPM: "${bool}", uefiSettings: {secureBootEnabled: "${bool}"}}, storageProfile: {dataDisks: [{name: "string"}], imageReference: {name: "string"}, osDisk: {id: "string"}, vmConfigContainerName: "string"}}, extendedLocation: {name: "string", type: "CustomLocation"}}
    );
  }
}
