import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ContainerserviceManagedclustersPrivateendpointconnectionsProps extends IAzAPIBaseProps {

}

/**
 * ContainerserviceManagedclustersPrivateendpointconnections resource
 */
export class ContainerserviceManagedclustersPrivateendpointconnections extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ContainerserviceManagedclustersPrivateendpointconnectionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ContainerService/managedClusters/privateEndpointConnections@2023-11-01";
  }

  protected getResourceBody(props: ContainerserviceManagedclustersPrivateendpointconnectionsProps): string {
    return JSON.stringify(
        {properties: {privateEndpoint: {id: "string"}, privateLinkServiceConnectionState: {description: "string", status: "string"}}}
    );
  }
}
