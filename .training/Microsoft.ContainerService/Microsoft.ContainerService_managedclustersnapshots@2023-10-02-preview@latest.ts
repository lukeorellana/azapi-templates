import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ContainerserviceManagedclustersnapshotsProps extends IAzAPIBaseProps {

}

/**
 * ContainerserviceManagedclustersnapshots resource
 */
export class ContainerserviceManagedclustersnapshots extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ContainerserviceManagedclustersnapshotsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ContainerService/managedclustersnapshots@2023-10-02-preview";
  }

  protected getResourceBody(props: ContainerserviceManagedclustersnapshotsProps): string {
    return JSON.stringify(
        {properties: {creationData: {sourceResourceId: "string"}, snapshotType: "string"}}
    );
  }
}
