import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface NetworkNetworksecuritygroupsProps extends IAzAPIBaseProps {

}

/**
 * NetworkNetworksecuritygroups resource
 */
export class NetworkNetworksecuritygroups extends AzAPIBase {
  constructor(scope: Construct, id: string, props: NetworkNetworksecuritygroupsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Network/networkSecurityGroups@2023-04-01";
  }

  protected getResourceBody(props: NetworkNetworksecuritygroupsProps): string {
    return JSON.stringify(
        {properties: {flushConnection: "${bool}", securityRules: [{id: "string", name: "string", properties: {access: "string", description: "string", destinationAddressPrefix: "string", destinationAddressPrefixes: ["string"], destinationApplicationSecurityGroups: [{id: "string", location: "string", properties: {}, tags: {}}], destinationPortRange: "string", destinationPortRanges: ["string"], direction: "string", priority: "${int}", protocol: "string", sourceAddressPrefix: "string", sourceAddressPrefixes: ["string"], sourceApplicationSecurityGroups: [{id: "string", location: "string", properties: {}, tags: {}}], sourcePortRange: "string", sourcePortRanges: ["string"]}, type: "string"}]}}
    );
  }
}
