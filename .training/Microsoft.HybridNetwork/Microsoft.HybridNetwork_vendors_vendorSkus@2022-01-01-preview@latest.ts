import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface HybridnetworkVendorsVendorskusProps extends IAzAPIBaseProps {

}

/**
 * HybridnetworkVendorsVendorskus resource
 */
export class HybridnetworkVendorsVendorskus extends AzAPIBase {
  constructor(scope: Construct, id: string, props: HybridnetworkVendorsVendorskusProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.HybridNetwork/vendors/vendorSkus@2022-01-01-preview";
  }

  protected getResourceBody(props: HybridnetworkVendorsVendorskusProps): string {
    return JSON.stringify(
        {properties: {deploymentMode: "string", networkFunctionTemplate: {networkFunctionRoleConfigurations: [{customProfile: {metadataConfigurationPath: "string"}, networkInterfaces: [{ipConfigurations: [{dnsServers: ["string"], gateway: "string", ipAddress: "string", ipAllocationMethod: "string", ipVersion: "string", subnet: "string"}], macAddress: "string", networkInterfaceName: "string", vmSwitchType: "string"}], osProfile: {adminUsername: "string", customData: "string", customDataRequired: "${bool}", linuxConfiguration: {ssh: {publicKeys: [{keyData: "string", path: "string"}]}}}, roleName: "string", roleType: "string", storageProfile: {dataDisks: [{createOption: "string", diskSizeGB: "${int}", name: "string"}], imageReference: {exactVersion: "string", offer: "string", publisher: "string", sku: "string", version: "string"}, osDisk: {diskSizeGB: "${int}", name: "string", osType: "string", vhd: {uri: "string"}}}, virtualMachineSize: "string"}]}, networkFunctionType: "string", preview: "${bool}", skuType: "string"}}
    );
  }
}
