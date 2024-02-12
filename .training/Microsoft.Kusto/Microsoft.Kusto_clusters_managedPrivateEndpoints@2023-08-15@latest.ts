import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface KustoClustersManagedprivateendpointsProps extends IAzAPIBaseProps {

}

/**
 * KustoClustersManagedprivateendpoints resource
 */
export class KustoClustersManagedprivateendpoints extends AzAPIBase {
  constructor(scope: Construct, id: string, props: KustoClustersManagedprivateendpointsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Kusto/clusters/managedPrivateEndpoints@2023-08-15";
  }

  protected getResourceBody(props: KustoClustersManagedprivateendpointsProps): string {
    return JSON.stringify(
        {properties: {groupId: "string", privateLinkResourceId: "string", privateLinkResourceRegion: "string", requestMessage: "string"}}
    );
  }
}
