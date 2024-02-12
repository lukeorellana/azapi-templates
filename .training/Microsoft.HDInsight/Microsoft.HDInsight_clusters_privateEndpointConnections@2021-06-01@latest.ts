import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface HdinsightClustersPrivateendpointconnectionsProps extends IAzAPIBaseProps {

}

/**
 * HdinsightClustersPrivateendpointconnections resource
 */
export class HdinsightClustersPrivateendpointconnections extends AzAPIBase {
  constructor(scope: Construct, id: string, props: HdinsightClustersPrivateendpointconnectionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.HDInsight/clusters/privateEndpointConnections@2021-06-01";
  }

  protected getResourceBody(props: HdinsightClustersPrivateendpointconnectionsProps): string {
    return JSON.stringify(
        {properties: {privateLinkServiceConnectionState: {actionsRequired: "string", description: "string", status: "string"}}}
    );
  }
}
