import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ContainerserviceSnapshotsProps extends IAzAPIBaseProps {

}

/**
 * ContainerserviceSnapshots resource
 */
export class ContainerserviceSnapshots extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ContainerserviceSnapshotsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ContainerService/snapshots@2023-11-01";
  }

  protected getResourceBody(props: ContainerserviceSnapshotsProps): string {
    return JSON.stringify(
        {properties: {creationData: {sourceResourceId: "string"}, snapshotType: "NodePool"}}
    );
  }
}
