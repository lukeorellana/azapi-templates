import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DbformysqlFlexibleserversProps extends IAzAPIBaseProps {

}

/**
 * DbformysqlFlexibleservers resource
 */
export class DbformysqlFlexibleservers extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DbformysqlFlexibleserversProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DBforMySQL/flexibleServers@2023-10-01-preview";
  }

  protected getResourceBody(props: DbformysqlFlexibleserversProps): string {
    return JSON.stringify(
        {properties: {administratorLogin: "string", administratorLoginPassword: "string", availabilityZone: "string", backup: {backupRetentionDays: "${int}", geoRedundantBackup: "string"}, createMode: "string", dataEncryption: {geoBackupKeyURI: "string", geoBackupUserAssignedIdentityId: "string", primaryKeyURI: "string", primaryUserAssignedIdentityId: "string", type: "string"}, highAvailability: {mode: "string", standbyAvailabilityZone: "string"}, importSourceProperties: {dataDirPath: "string", sasToken: "string", storageType: "AzureBlob", storageUrl: "string"}, maintenanceWindow: {customWindow: "string", dayOfWeek: "${int}", startHour: "${int}", startMinute: "${int}"}, network: {delegatedSubnetResourceId: "string", privateDnsZoneResourceId: "string", publicNetworkAccess: "string"}, replicationRole: "string", restorePointInTime: "string", sourceServerResourceId: "string", storage: {autoGrow: "string", autoIoScaling: "string", iops: "${int}", logOnDisk: "string", storageSizeGB: "${int}"}, version: "string"}, sku: {name: "string", tier: "string"}}
    );
  }
}
