import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AvsPrivatecloudsClustersPlacementpoliciesProps extends IAzAPIBaseProps {

}

/**
 * AvsPrivatecloudsClustersPlacementpolicies resource
 */
export class AvsPrivatecloudsClustersPlacementpolicies extends AzAPIBase {
  constructor(scope: Construct, id: string, props: AvsPrivatecloudsClustersPlacementpoliciesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.AVS/privateClouds/clusters/placementPolicies@2022-05-01";
  }

  protected getResourceBody(props: AvsPrivatecloudsClustersPlacementpoliciesProps): string {
    return JSON.stringify(
        {properties: {displayName: "string", state: "string", type: "string"}}
    );
  }
}
