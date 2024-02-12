import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface NetworkNetworkmanagersScopeconnectionsProps extends IAzAPIBaseProps {

}

/**
 * NetworkNetworkmanagersScopeconnections resource
 */
export class NetworkNetworkmanagersScopeconnections extends AzAPIBase {
  constructor(scope: Construct, id: string, props: NetworkNetworkmanagersScopeconnectionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Network/networkManagers/scopeConnections@2023-04-01";
  }

  protected getResourceBody(props: NetworkNetworkmanagersScopeconnectionsProps): string {
    return JSON.stringify(
        {properties: {description: "string", resourceId: "string", tenantId: "string"}}
    );
  }
}
