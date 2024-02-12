import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DataprotectionBackupvaultsProps extends IAzAPIBaseProps {

}

/**
 * DataprotectionBackupvaults resource
 */
export class DataprotectionBackupvaults extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DataprotectionBackupvaultsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DataProtection/backupVaults@2022-11-01-preview";
  }

  protected getResourceBody(props: DataprotectionBackupvaultsProps): string {
    return JSON.stringify(
        {properties: {monitoringSettings: {azureMonitorAlertSettings: {alertsForAllJobFailures: "string"}}, securitySettings: {immutabilitySettings: {state: "string"}, softDeleteSettings: {retentionDurationInDays: "${int}", state: "string"}}, storageSettings: [{datastoreType: "string", type: "string"}]}, eTag: "string"}
    );
  }
}
