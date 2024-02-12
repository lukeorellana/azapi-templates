import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface StoragepoolDiskpoolsProps extends IAzAPIBaseProps {

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
