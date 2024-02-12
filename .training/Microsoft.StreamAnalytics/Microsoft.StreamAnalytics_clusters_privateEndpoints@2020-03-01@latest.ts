import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface StreamanalyticsClustersPrivateendpointsProps extends IAzAPIBaseProps {

}

/**
 * StreamanalyticsClustersPrivateendpoints resource
 */
export class StreamanalyticsClustersPrivateendpoints extends AzAPIBase {
  constructor(scope: Construct, id: string, props: StreamanalyticsClustersPrivateendpointsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.StreamAnalytics/clusters/privateEndpoints@2020-03-01";
  }

  protected getResourceBody(props: StreamanalyticsClustersPrivateendpointsProps): string {
    return JSON.stringify(
        {properties: {manualPrivateLinkServiceConnections: [{properties: {groupIds: ["string"], privateLinkServiceConnectionState: {}, privateLinkServiceId: "string"}}]}}
    );
  }
}
