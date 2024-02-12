import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface NetworkNetworkmanagersConnectivityconfigurationsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:networkManagers;

/**
   * Groups for configuration
   */
readonly appliesToGroups: ConnectivityGroupItem[];

/**
   * Connectivity topology type.
   */
readonly connectivityTopology: 'HubAndSpoke''Mesh';

/**
   * Flag if need to remove current existing peerings.
   */
readonly deleteExistingPeering?: 'False''True';

/**
   * A description of the connectivity configuration.
   */
readonly description?: string;

/**
   * List of hubItems
   */
readonly hubs?: Hub[];

/**
   * Flag if global mesh is supported.
   */
readonly isGlobal?: 'False''True';

/**
   * Group connectivity type.
   */
readonly groupConnectivity: 'DirectlyConnected''None';

/**
   * Flag if global is supported.
   */
readonly isGlobal?: 'False''True';

/**
   * Network group Id.
   */
readonly networkGroupId: string;

/**
   * Flag if need to use hub gateway.
   */
readonly useHubGateway?: 'False''True';

/**
   * Resource Id.
   */
readonly resourceId?: string;

/**
   * Resource Type.
   */
readonly resourceType?: string;
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
