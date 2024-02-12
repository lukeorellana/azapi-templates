import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SqlServersDatabasesExtendedauditingsettingsProps extends IAzAPIBaseProps {

}

/**
 * SqlServersDatabasesExtendedauditingsettings resource
 */
export class SqlServersDatabasesExtendedauditingsettings extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SqlServersDatabasesExtendedauditingsettingsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Sql/servers/databases/extendedAuditingSettings@2022-05-01-preview";
  }

  protected getResourceBody(props: SqlServersDatabasesExtendedauditingsettingsProps): string {
    return JSON.stringify(
        {properties: {auditActionsAndGroups: ["string"], isAzureMonitorTargetEnabled: "${bool}", isManagedIdentityInUse: "${bool}", isStorageSecondaryKeyInUse: "${bool}", predicateExpression: "string", queueDelayMs: "${int}", retentionDays: "${int}", state: "string", storageAccountAccessKey: "string", storageAccountSubscriptionId: "string", storageEndpoint: "string"}}
    );
  }
}
