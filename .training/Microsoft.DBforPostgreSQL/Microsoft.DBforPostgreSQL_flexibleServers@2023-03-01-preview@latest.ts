import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DbforpostgresqlFlexibleserversProps extends IAzAPIBaseProps {

}

/**
 * DbforpostgresqlFlexibleservers resource
 */
export class DbforpostgresqlFlexibleservers extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DbforpostgresqlFlexibleserversProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DBforPostgreSQL/flexibleServers@2023-03-01-preview";
  }

  protected getResourceBody(props: DbforpostgresqlFlexibleserversProps): string {
    return JSON.stringify(
        {properties: {administratorLogin: "string", administratorLoginPassword: "string", authConfig: {activeDirectoryAuth: "string", passwordAuth: "string", tenantId: "string"}, availabilityZone: "string", backup: {backupRetentionDays: "${int}", geoRedundantBackup: "string"}, createMode: "string", dataEncryption: {geoBackupKeyURI: "string", geoBackupUserAssignedIdentityId: "string", primaryKeyURI: "string", primaryUserAssignedIdentityId: "string", type: "string"}, highAvailability: {mode: "string", standbyAvailabilityZone: "string"}, maintenanceWindow: {customWindow: "string", dayOfWeek: "${int}", startHour: "${int}", startMinute: "${int}"}, network: {delegatedSubnetResourceId: "string", privateDnsZoneArmResourceId: "string"}, pointInTimeUTC: "string", replicationRole: "string", sourceServerResourceId: "string", storage: {autoGrow: "string", storageSizeGB: "${int}", tier: "string"}, version: "string"}, sku: {name: "string", tier: "string"}}
    );
  }
}
