import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface NetworkNetworkmanagersNetworkgroupsStaticmembersProps extends IAzAPIBaseProps {

}

/**
 * NetworkNetworkmanagersNetworkgroupsStaticmembers resource
 */
export class NetworkNetworkmanagersNetworkgroupsStaticmembers extends AzAPIBase {
  constructor(scope: Construct, id: string, props: NetworkNetworkmanagersNetworkgroupsStaticmembersProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Network/networkManagers/networkGroups/staticMembers@2023-04-01";
  }

  protected getResourceBody(props: NetworkNetworkmanagersNetworkgroupsStaticmembersProps): string {
    return JSON.stringify(
        {properties: {resourceId: "string"}}
    );
  }
}
