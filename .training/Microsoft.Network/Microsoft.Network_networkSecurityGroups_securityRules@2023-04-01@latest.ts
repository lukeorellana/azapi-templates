import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface NetworkNetworksecuritygroupsSecurityrulesProps extends IAzAPIBaseProps {

}

/**
 * NetworkNetworksecuritygroupsSecurityrules resource
 */
export class NetworkNetworksecuritygroupsSecurityrules extends AzAPIBase {
  constructor(scope: Construct, id: string, props: NetworkNetworksecuritygroupsSecurityrulesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Network/networkSecurityGroups/securityRules@2023-04-01";
  }

  protected getResourceBody(props: NetworkNetworksecuritygroupsSecurityrulesProps): string {
    return JSON.stringify(
        {properties: {access: "string", description: "string", destinationAddressPrefix: "string", destinationAddressPrefixes: ["string"], destinationApplicationSecurityGroups: [{id: "string", location: "string", properties: {}, tags: {}}], destinationPortRange: "string", destinationPortRanges: ["string"], direction: "string", priority: "${int}", protocol: "string", sourceAddressPrefix: "string", sourceAddressPrefixes: ["string"], sourceApplicationSecurityGroups: [{id: "string", location: "string", properties: {}, tags: {}}], sourcePortRange: "string", sourcePortRanges: ["string"]}}
    );
  }
}
