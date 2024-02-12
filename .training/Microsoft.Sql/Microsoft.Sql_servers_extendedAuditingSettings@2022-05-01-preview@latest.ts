import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SqlServersExtendedauditingsettingsProps extends IAzAPIBaseProps {

}

/**
 * SqlServersExtendedauditingsettings resource
 */
export class SqlServersExtendedauditingsettings extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SqlServersExtendedauditingsettingsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Sql/servers/extendedAuditingSettings@2022-05-01-preview";
  }

  protected getResourceBody(props: SqlServersExtendedauditingsettingsProps): string {
    return JSON.stringify(
        {properties: {auditActionsAndGroups: ["string"], isAzureMonitorTargetEnabled: "${bool}", isDevopsAuditEnabled: "${bool}", isManagedIdentityInUse: "${bool}", isStorageSecondaryKeyInUse: "${bool}", predicateExpression: "string", queueDelayMs: "${int}", retentionDays: "${int}", state: "string", storageAccountAccessKey: "string", storageAccountSubscriptionId: "string", storageEndpoint: "string"}}
    );
  }
}
