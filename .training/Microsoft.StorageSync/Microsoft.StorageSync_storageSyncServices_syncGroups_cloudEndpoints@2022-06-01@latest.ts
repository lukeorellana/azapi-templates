import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface StoragesyncStoragesyncservicesSyncgroupsCloudendpointsProps extends IAzAPIBaseProps {

}

/**
 * StoragesyncStoragesyncservicesSyncgroupsCloudendpoints resource
 */
export class StoragesyncStoragesyncservicesSyncgroupsCloudendpoints extends AzAPIBase {
  constructor(scope: Construct, id: string, props: StoragesyncStoragesyncservicesSyncgroupsCloudendpointsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.StorageSync/storageSyncServices/syncGroups/cloudEndpoints@2022-06-01";
  }

  protected getResourceBody(props: StoragesyncStoragesyncservicesSyncgroupsCloudendpointsProps): string {
    return JSON.stringify(
        {properties: {azureFileShareName: "string", friendlyName: "string", storageAccountResourceId: "string", storageAccountTenantId: "string"}}
    );
  }
}
