import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface RecoveryservicesVaultsProps extends IAzAPIBaseProps {

}

/**
 * RecoveryservicesVaults resource
 */
export class RecoveryservicesVaults extends AzAPIBase {
  constructor(scope: Construct, id: string, props: RecoveryservicesVaultsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.RecoveryServices/vaults@2023-01-01";
  }

  protected getResourceBody(props: RecoveryservicesVaultsProps): string {
    return JSON.stringify(
        {properties: {encryption: {infrastructureEncryption: "string", kekIdentity: {userAssignedIdentity: "string", useSystemAssignedIdentity: "${bool}"}, keyVaultProperties: {keyUri: "string"}}, monitoringSettings: {azureMonitorAlertSettings: {alertsForAllJobFailures: "string"}, classicAlertSettings: {alertsForCriticalOperations: "string"}}, moveDetails: {}, publicNetworkAccess: "string", redundancySettings: {}, securitySettings: {immutabilitySettings: {state: "string"}}, upgradeDetails: {}}, sku: {capacity: "string", family: "string", name: "string", size: "string", tier: "string"}, etag: "string"}
    );
  }
}
