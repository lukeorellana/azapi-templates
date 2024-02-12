import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface StoragesyncStoragesyncservicesSyncgroupsProps extends IAzAPIBaseProps {

}

/**
 * StoragesyncStoragesyncservicesSyncgroups resource
 */
export class StoragesyncStoragesyncservicesSyncgroups extends AzAPIBase {
  constructor(scope: Construct, id: string, props: StoragesyncStoragesyncservicesSyncgroupsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.StorageSync/storageSyncServices/syncGroups@2022-06-01";
  }

  protected getResourceBody(props: StoragesyncStoragesyncservicesSyncgroupsProps): string {
    return JSON.stringify(
        {}
    );
  }
}
