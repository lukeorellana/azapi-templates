import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface StoragepoolDiskpoolsIscsitargetsProps extends IAzAPIBaseProps {

}

/**
 * StoragepoolDiskpoolsIscsitargets resource
 */
export class StoragepoolDiskpoolsIscsitargets extends AzAPIBase {
  constructor(scope: Construct, id: string, props: StoragepoolDiskpoolsIscsitargetsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.StoragePool/diskPools/iscsiTargets@2021-08-01";
  }

  protected getResourceBody(props: StoragepoolDiskpoolsIscsitargetsProps): string {
    return JSON.stringify(
        {properties: {aclMode: "string", luns: [{managedDiskAzureResourceId: "string", name: "string"}], staticAcls: [{initiatorIqn: "string", mappedLuns: ["string"]}], targetIqn: "string"}, managedBy: "string", managedByExtended: ["string"]}
    );
  }
}
