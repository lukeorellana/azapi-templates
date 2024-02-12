import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SynapseWorkspacesAuditingsettingsProps extends IAzAPIBaseProps {

}

/**
 * SynapseWorkspacesAuditingsettings resource
 */
export class SynapseWorkspacesAuditingsettings extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SynapseWorkspacesAuditingsettingsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Synapse/workspaces/auditingSettings@2021-06-01";
  }

  protected getResourceBody(props: SynapseWorkspacesAuditingsettingsProps): string {
    return JSON.stringify(
        {properties: {auditActionsAndGroups: ["string"], isAzureMonitorTargetEnabled: "${bool}", isDevopsAuditEnabled: "${bool}", isStorageSecondaryKeyInUse: "${bool}", queueDelayMs: "${int}", retentionDays: "${int}", state: "string", storageAccountAccessKey: "string", storageAccountSubscriptionId: "string", storageEndpoint: "string"}}
    );
  }
}
