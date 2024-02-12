import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface NetworkNetworkmanagersNetworkgroupsProps extends IAzAPIBaseProps {

}

/**
 * NetworkNetworkmanagersNetworkgroups resource
 */
export class NetworkNetworkmanagersNetworkgroups extends AzAPIBase {
  constructor(scope: Construct, id: string, props: NetworkNetworkmanagersNetworkgroupsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Network/networkManagers/networkGroups@2023-04-01";
  }

  protected getResourceBody(props: NetworkNetworkmanagersNetworkgroupsProps): string {
    return JSON.stringify(
        {properties: {description: "string"}}
    );
  }
}
