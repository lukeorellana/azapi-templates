import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface NetworkNetworkmanagersProps extends IAzAPIBaseProps {
/**
   * A description of the network manager.
   */
readonly description?: string;

/**
   * Scope Access.
   */
readonly networkManagerScopeAccesses: String array containing any of:'Connectivity''SecurityAdmin';

/**
   * Scope of Network Manager.
   */
readonly networkManagerScopes: NetworkManagerPropertiesNetworkManagerScopes;

/**
   * List of management groups.
   */
readonly managementGroups?: string[];

/**
   * List of subscriptions.
   */
readonly subscriptions?: string[];
}

/**
 * NetworkNetworkmanagers resource
 */
export class NetworkNetworkmanagers extends AzAPIBase {
  constructor(scope: Construct, id: string, props: NetworkNetworkmanagersProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Network/networkManagers@2023-04-01";
  }

  protected getResourceBody(props: NetworkNetworkmanagersProps): string {
    return JSON.stringify(
        {properties: {description: "string", networkManagerScopeAccesses: ["string"], networkManagerScopes: {managementGroups: ["string"], subscriptions: ["string"]}}}
    );
  }
}
