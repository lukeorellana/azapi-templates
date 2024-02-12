import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ContainerserviceManagedclustersnapshotsProps extends IAzAPIBaseProps {
/**
   * CreationData to be used to specify the source resource ID to create this snapshot.
   */
readonly creationData?: CreationData;

/**
   * The type of a snapshot. The default is NodePool.
   */
readonly snapshotType?: 'ManagedCluster''NodePool';

/**
   * This is the ARM ID of the source object to be used to create the target object.
   */
readonly sourceResourceId?: string;
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
