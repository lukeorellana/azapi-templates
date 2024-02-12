import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface HybridnetworkLocationsVendorsNetworkfunctionsProps extends IAzAPIBaseProps {

}

/**
 * HybridnetworkLocationsVendorsNetworkfunctions resource
 */
export class HybridnetworkLocationsVendorsNetworkfunctions extends AzAPIBase {
  constructor(scope: Construct, id: string, props: HybridnetworkLocationsVendorsNetworkfunctionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.HybridNetwork/locations/vendors/networkFunctions@2022-01-01-preview";
  }

  protected getResourceBody(props: HybridnetworkLocationsVendorsNetworkfunctionsProps): string {
    return JSON.stringify(
        {properties: {networkFunctionVendorConfigurations: [{networkInterfaces: [{ipConfigurations: [{dnsServers: ["string"], gateway: "string", ipAddress: "string", ipAllocationMethod: "string", ipVersion: "string", subnet: "string"}], macAddress: "string", networkInterfaceName: "string", vmSwitchType: "string"}], osProfile: {adminUsername: "string", customData: "string", customDataRequired: "${bool}", linuxConfiguration: {ssh: {publicKeys: [{keyData: "string", path: "string"}]}}}, roleName: "string"}], vendorProvisioningState: "string"}}
    );
  }
}
