import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface NetworkNetworkmanagerconnectionsProps extends IAzAPIBaseProps {

}

/**
 * NetworkNetworkmanagerconnections resource
 */
export class NetworkNetworkmanagerconnections extends AzAPIBase {
  constructor(scope: Construct, id: string, props: NetworkNetworkmanagerconnectionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Network/networkManagerConnections@2023-04-01";
  }

  protected getResourceBody(props: NetworkNetworkmanagerconnectionsProps): string {
    return JSON.stringify(
        {properties: {description: "string", networkManagerId: "string"}}
    );
  }
}
