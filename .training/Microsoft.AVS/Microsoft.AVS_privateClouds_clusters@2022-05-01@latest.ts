import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AvsPrivatecloudsClustersProps extends IAzAPIBaseProps {

}

/**
 * AvsPrivatecloudsClusters resource
 */
export class AvsPrivatecloudsClusters extends AzAPIBase {
  constructor(scope: Construct, id: string, props: AvsPrivatecloudsClustersProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.AVS/privateClouds/clusters@2022-05-01";
  }

  protected getResourceBody(props: AvsPrivatecloudsClustersProps): string {
    return JSON.stringify(
        {properties: {clusterSize: "${int}", hosts: ["string"]}, sku: {name: "string"}}
    );
  }
}
