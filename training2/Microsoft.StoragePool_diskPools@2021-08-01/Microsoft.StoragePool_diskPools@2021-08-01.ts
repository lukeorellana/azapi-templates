import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface StoragepoolDiskpoolsProps extends IAzAPIBaseProps {
/**
   * Determines the SKU of the Disk Pool
   */
readonly sku: Sku;

/**
   * Azure resource id. Indicates if this resource is managed by another Azure resource.
   */
readonly managedBy?: string;

/**
   * List of Azure resource ids that manage this resource.
   */
readonly managedByExtended?: string[];

/**
   * List of additional capabilities for a Disk Pool.
   */
readonly additionalCapabilities?: string[];

/**
   * Logical zone for Disk Pool resource; example: ["1"].
   */
readonly availabilityZones?: string[];

/**
   * List of Azure Managed Disks to attach to a Disk Pool.
   */
readonly disks?: Disk[];

/**
   * Azure Resource ID of a Subnet for the Disk Pool.
   */
readonly subnetId: string;

/**
   * Unique Azure Resource ID of the Managed Disk.
   */
readonly id: string;

/**
   * Sku tier
   */
readonly tier?: string;
}

/**
 * StoragepoolDiskpools resource
 */
export class StoragepoolDiskpools extends AzAPIBase {
  constructor(scope: Construct, id: string, props: StoragepoolDiskpoolsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.StoragePool/diskPools@2021-08-01";
  }

  protected getResourceBody(props: StoragepoolDiskpoolsProps): string {
    return JSON.stringify(
        {properties: {additionalCapabilities: ["string"], availabilityZones: ["string"], disks: [{id: "string"}], subnetId: "string"}, sku: {name: "string", tier: "string"}, managedBy: "string", managedByExtended: ["string"]}
    );
  }
}
