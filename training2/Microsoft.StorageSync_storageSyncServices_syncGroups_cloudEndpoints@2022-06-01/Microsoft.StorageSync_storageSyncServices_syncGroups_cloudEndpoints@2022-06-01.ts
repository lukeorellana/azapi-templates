import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface StoragesyncStoragesyncservicesSyncgroupsCloudendpointsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:syncGroups;

/**
   * Azure file share name
   */
readonly azureFileShareName?: string;

/**
   * Friendly Name
   */
readonly friendlyName?: string;

/**
   * Storage Account Resource Id
   */
readonly storageAccountResourceId?: string;

/**
   * Storage Account Tenant Id
   */
readonly storageAccountTenantId?: string;
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
