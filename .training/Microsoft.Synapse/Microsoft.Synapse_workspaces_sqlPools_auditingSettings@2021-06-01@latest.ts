import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SynapseWorkspacesSqlpoolsAuditingsettingsProps extends IAzAPIBaseProps {

}

/**
 * SynapseWorkspacesSqlpoolsAuditingsettings resource
 */
export class SynapseWorkspacesSqlpoolsAuditingsettings extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SynapseWorkspacesSqlpoolsAuditingsettingsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Synapse/workspaces/sqlPools/auditingSettings@2021-06-01";
  }

  protected getResourceBody(props: SynapseWorkspacesSqlpoolsAuditingsettingsProps): string {
    return JSON.stringify(
        {properties: {auditActionsAndGroups: ["string"], isAzureMonitorTargetEnabled: "${bool}", isStorageSecondaryKeyInUse: "${bool}", retentionDays: "${int}", state: "string", storageAccountAccessKey: "string", storageAccountSubscriptionId: "string", storageEndpoint: "string"}}
    );
  }
}
