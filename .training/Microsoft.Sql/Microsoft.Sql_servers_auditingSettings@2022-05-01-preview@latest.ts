import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SqlServersAuditingsettingsProps extends IAzAPIBaseProps {

}

/**
 * SqlServersAuditingsettings resource
 */
export class SqlServersAuditingsettings extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SqlServersAuditingsettingsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Sql/servers/auditingSettings@2022-05-01-preview";
  }

  protected getResourceBody(props: SqlServersAuditingsettingsProps): string {
    return JSON.stringify(
        {properties: {auditActionsAndGroups: ["string"], isAzureMonitorTargetEnabled: "${bool}", isDevopsAuditEnabled: "${bool}", isManagedIdentityInUse: "${bool}", isStorageSecondaryKeyInUse: "${bool}", queueDelayMs: "${int}", retentionDays: "${int}", state: "string", storageAccountAccessKey: "string", storageAccountSubscriptionId: "string", storageEndpoint: "string"}}
    );
  }
}
