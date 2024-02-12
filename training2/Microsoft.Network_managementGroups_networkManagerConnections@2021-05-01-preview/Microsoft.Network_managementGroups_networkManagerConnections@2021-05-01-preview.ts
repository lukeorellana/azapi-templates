import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface NetworkManagementgroupsNetworkmanagerconnectionsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type: managementGroups;

/**
   * A description of the scope connection.
   */
readonly description?: string;

/**
   * Network Manager Id.
   */
readonly networkManagerId?: string;
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
