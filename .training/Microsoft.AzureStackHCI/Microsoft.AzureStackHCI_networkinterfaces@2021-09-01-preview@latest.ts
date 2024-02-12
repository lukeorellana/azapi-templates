import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AzurestackhciNetworkinterfacesProps extends IAzAPIBaseProps {

}

/**
 * AzurestackhciNetworkinterfaces resource
 */
export class AzurestackhciNetworkinterfaces extends AzAPIBase {
  constructor(scope: Construct, id: string, props: AzurestackhciNetworkinterfacesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.AzureStackHCI/networkinterfaces@2021-09-01-preview";
  }

  protected getResourceBody(props: AzurestackhciNetworkinterfacesProps): string {
    return JSON.stringify(
        {properties: {dnsSettings: {dnsServers: ["string"]}, ipConfigurations: [{name: "string", properties: {gateway: "string", prefixLength: "string", privateIPAddress: "string", privateIPAllocationMethod: "string", subnet: {id: "string"}}}], macAddress: "string", resourceName: "string"}, extendedLocation: {name: "string", type: "CustomLocation"}}
    );
  }
}
