import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AzurestackhciVirtualnetworksProps extends IAzAPIBaseProps {

}

/**
 * AzurestackhciVirtualnetworks resource
 */
export class AzurestackhciVirtualnetworks extends AzAPIBase {
  constructor(scope: Construct, id: string, props: AzurestackhciVirtualnetworksProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.AzureStackHCI/virtualnetworks@2021-09-01-preview";
  }

  protected getResourceBody(props: AzurestackhciVirtualnetworksProps): string {
    return JSON.stringify(
        {properties: {networkType: "string", resourceName: "string", subnets: [{name: "string", properties: {addressPrefix: "string", addressPrefixes: ["string"], ipAllocationMethod: "string", ipConfigurationReferences: [{ID: "string"}], ipPools: [{end: "string", info: {}, ipPoolType: "string", start: "string"}], routeTable: {id: "string", name: "string", properties: {routes: [{name: "string", properties: {addressPrefix: "string", nextHopIpAddress: "string"}}]}, type: "string"}, vlan: "${int}"}}]}, extendedLocation: {name: "string", type: "CustomLocation"}}
    );
  }
}
