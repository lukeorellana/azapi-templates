import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SynapseWorkspacesExtendedauditingsettingsProps extends IAzAPIBaseProps {

}

/**
 * SynapseWorkspacesExtendedauditingsettings resource
 */
export class SynapseWorkspacesExtendedauditingsettings extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SynapseWorkspacesExtendedauditingsettingsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Synapse/workspaces/extendedAuditingSettings@2021-06-01";
  }

  protected getResourceBody(props: SynapseWorkspacesExtendedauditingsettingsProps): string {
    return JSON.stringify(
        {properties: {auditActionsAndGroups: ["string"], isAzureMonitorTargetEnabled: "${bool}", isDevopsAuditEnabled: "${bool}", isStorageSecondaryKeyInUse: "${bool}", predicateExpression: "string", queueDelayMs: "${int}", retentionDays: "${int}", state: "string", storageAccountAccessKey: "string", storageAccountSubscriptionId: "string", storageEndpoint: "string"}}
    );
  }
}
