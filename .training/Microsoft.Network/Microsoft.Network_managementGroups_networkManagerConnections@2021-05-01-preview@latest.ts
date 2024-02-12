import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface NetworkManagementgroupsNetworkmanagerconnectionsProps extends IAzAPIBaseProps {

}

/**
 * NetworkManagementgroupsNetworkmanagerconnections resource
 */
export class NetworkManagementgroupsNetworkmanagerconnections extends AzAPIBase {
  constructor(scope: Construct, id: string, props: NetworkManagementgroupsNetworkmanagerconnectionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Network/managementGroups/networkManagerConnections@2021-05-01-preview";
  }

  protected getResourceBody(props: NetworkManagementgroupsNetworkmanagerconnectionsProps): string {
    return JSON.stringify(
        {properties: {description: "string", networkManagerId: "string"}}
    );
  }
}
