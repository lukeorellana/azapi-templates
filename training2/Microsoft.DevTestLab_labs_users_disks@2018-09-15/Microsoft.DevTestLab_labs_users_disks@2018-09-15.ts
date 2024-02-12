import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DevtestlabLabsUsersDisksProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:users;

/**
   * When backed by a blob, the name of the VHD blob without extension.
   */
readonly diskBlobName?: string;

/**
   * The size of the disk in Gibibytes.
   */
readonly diskSizeGiB?: number;

/**
   * The storage type for the disk (i.e. Standard, Premium).
   */
readonly diskType?: 'Premium''Standard''StandardSSD';

/**
   * When backed by a blob, the URI of underlying blob.
   */
readonly diskUri?: string;

/**
   * The resource ID of the VM to which this disk is leased.
   */
readonly leasedByLabVmId?: string;

/**
   * When backed by managed disk, this is the ID of the compute disk resource.
   */
readonly managedDiskId?: string;

/**
   * When backed by a blob, the storage account where the blob is.
   */
readonly storageAccountId?: string;
}

/**
 * DevtestlabLabsUsersDisks resource
 */
export class DevtestlabLabsUsersDisks extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DevtestlabLabsUsersDisksProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DevTestLab/labs/users/disks@2018-09-15";
  }

  protected getResourceBody(props: DevtestlabLabsUsersDisksProps): string {
    return JSON.stringify(
        {properties: {diskBlobName: "string", diskSizeGiB: "${int}", diskType: "string", diskUri: "string", leasedByLabVmId: "string", managedDiskId: "string", storageAccountId: "string"}}
    );
  }
}
