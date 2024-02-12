import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface RelayNamespacesProps extends IAzAPIBaseProps {

}

/**
 * RelayNamespaces resource
 */
export class RelayNamespaces extends AzAPIBase {
  constructor(scope: Construct, id: string, props: RelayNamespacesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Relay/namespaces@2021-11-01";
  }

  protected getResourceBody(props: RelayNamespacesProps): string {
    return JSON.stringify(
        {properties: {privateEndpointConnections: [{properties: {privateEndpoint: {id: "string"}, privateLinkServiceConnectionState: {description: "string", status: "string"}, provisioningState: "string"}}], publicNetworkAccess: "string"}, sku: {name: "Standard", tier: "Standard"}}
    );
  }
}
