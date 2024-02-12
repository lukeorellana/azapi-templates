import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface NetworkNetworkmanagersConnectivityconfigurationsProps extends IAzAPIBaseProps {

}

/**
 * NetworkNetworkmanagersConnectivityconfigurations resource
 */
export class NetworkNetworkmanagersConnectivityconfigurations extends AzAPIBase {
  constructor(scope: Construct, id: string, props: NetworkNetworkmanagersConnectivityconfigurationsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Network/networkManagers/connectivityConfigurations@2023-04-01";
  }

  protected getResourceBody(props: NetworkNetworkmanagersConnectivityconfigurationsProps): string {
    return JSON.stringify(
        {properties: {appliesToGroups: [{groupConnectivity: "string", isGlobal: "string", networkGroupId: "string", useHubGateway: "string"}], connectivityTopology: "string", deleteExistingPeering: "string", description: "string", hubs: [{resourceId: "string", resourceType: "string"}], isGlobal: "string"}}
    );
  }
}
