import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface KustoClustersPrivateendpointconnectionsProps extends IAzAPIBaseProps {

}

/**
 * KustoClustersPrivateendpointconnections resource
 */
export class KustoClustersPrivateendpointconnections extends AzAPIBase {
  constructor(scope: Construct, id: string, props: KustoClustersPrivateendpointconnectionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Kusto/clusters/privateEndpointConnections@2023-08-15";
  }

  protected getResourceBody(props: KustoClustersPrivateendpointconnectionsProps): string {
    return JSON.stringify(
        {properties: {privateLinkServiceConnectionState: {description: "string", status: "string"}}}
    );
  }
}
