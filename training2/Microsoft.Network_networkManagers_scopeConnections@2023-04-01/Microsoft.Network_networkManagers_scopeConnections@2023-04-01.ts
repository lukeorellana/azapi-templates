import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface NetworkNetworkmanagersScopeconnectionsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:networkManagers;

/**
   * A description of the scope connection.
   */
readonly description?: string;

/**
   * Resource ID.
   */
readonly resourceId?: string;

/**
   * Tenant ID.
   */
readonly tenantId?: string;
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
