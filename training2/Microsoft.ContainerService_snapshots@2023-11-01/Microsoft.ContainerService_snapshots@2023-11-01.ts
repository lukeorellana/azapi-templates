import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ContainerserviceSnapshotsProps extends IAzAPIBaseProps {
/**
   * CreationData to be used to specify the source agent pool resource ID to create this snapshot.
   */
readonly creationData?: CreationData;

/**
   * The type of a snapshot. The default is NodePool.
   */
readonly snapshotType?: 'NodePool';

/**
   * This is the ARM ID of the source object to be used to create the target object.
   */
readonly sourceResourceId?: string;
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
