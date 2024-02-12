import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SqlServersDatabasesAuditingsettingsProps extends IAzAPIBaseProps {

}

/**
 * SqlServersDatabasesAuditingsettings resource
 */
export class SqlServersDatabasesAuditingsettings extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SqlServersDatabasesAuditingsettingsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Sql/servers/databases/auditingSettings@2022-05-01-preview";
  }

  protected getResourceBody(props: SqlServersDatabasesAuditingsettingsProps): string {
    return JSON.stringify(
        {properties: {auditActionsAndGroups: ["string"], isAzureMonitorTargetEnabled: "${bool}", isManagedIdentityInUse: "${bool}", isStorageSecondaryKeyInUse: "${bool}", queueDelayMs: "${int}", retentionDays: "${int}", state: "string", storageAccountAccessKey: "string", storageAccountSubscriptionId: "string", storageEndpoint: "string"}}
    );
  }
}
