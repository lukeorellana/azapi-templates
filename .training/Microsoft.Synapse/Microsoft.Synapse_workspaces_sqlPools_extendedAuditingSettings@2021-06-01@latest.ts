import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SynapseWorkspacesSqlpoolsExtendedauditingsettingsProps extends IAzAPIBaseProps {

}

/**
 * SynapseWorkspacesSqlpoolsExtendedauditingsettings resource
 */
export class SynapseWorkspacesSqlpoolsExtendedauditingsettings extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SynapseWorkspacesSqlpoolsExtendedauditingsettingsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Synapse/workspaces/sqlPools/extendedAuditingSettings@2021-06-01";
  }

  protected getResourceBody(props: SynapseWorkspacesSqlpoolsExtendedauditingsettingsProps): string {
    return JSON.stringify(
        {properties: {auditActionsAndGroups: ["string"], isAzureMonitorTargetEnabled: "${bool}", isStorageSecondaryKeyInUse: "${bool}", predicateExpression: "string", queueDelayMs: "${int}", retentionDays: "${int}", state: "string", storageAccountAccessKey: "string", storageAccountSubscriptionId: "string", storageEndpoint: "string"}}
    );
  }
}
