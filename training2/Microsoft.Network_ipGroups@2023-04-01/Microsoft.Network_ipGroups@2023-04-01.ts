import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface NetworkIpgroupsProps extends IAzAPIBaseProps {
/**
   * IpAddresses/IpAddressPrefixes in the IpGroups resource.
   */
readonly ipAddresses?: string[];
}

/**
 * NetworkIpgroups resource
 */
export class NetworkIpgroups extends AzAPIBase {
  constructor(scope: Construct, id: string, props: NetworkIpgroupsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Network/ipGroups@2023-04-01";
  }

  protected getResourceBody(props: NetworkIpgroupsProps): string {
    return JSON.stringify(
        {properties: {ipAddresses: ["string"]}}
    );
  }
}
