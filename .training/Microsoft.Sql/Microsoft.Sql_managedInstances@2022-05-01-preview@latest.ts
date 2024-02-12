import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SqlManagedinstancesProps extends IAzAPIBaseProps {

}

/**
 * SqlManagedinstances resource
 */
export class SqlManagedinstances extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SqlManagedinstancesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Sql/managedInstances@2022-05-01-preview";
  }

  protected getResourceBody(props: SqlManagedinstancesProps): string {
    return JSON.stringify(
        {properties: {administratorLogin: "string", administratorLoginPassword: "string", administrators: {administratorType: "ActiveDirectory", azureADOnlyAuthentication: "${bool}", login: "string", principalType: "string", sid: "string", tenantId: "string"}, collation: "string", dnsZonePartner: "string", instancePoolId: "string", keyId: "string", licenseType: "string", maintenanceConfigurationId: "string", managedInstanceCreateMode: "string", minimalTlsVersion: "string", primaryUserAssignedIdentityId: "string", proxyOverride: "string", publicDataEndpointEnabled: "${bool}", requestedBackupStorageRedundancy: "string", restorePointInTime: "string", servicePrincipal: {type: "string"}, sourceManagedInstanceId: "string", storageSizeInGB: "${int}", subnetId: "string", timezoneId: "string", vCores: "${int}", zoneRedundant: "${bool}"}, sku: {capacity: "${int}", family: "string", name: "string", size: "string", tier: "string"}}
    );
  }
}
