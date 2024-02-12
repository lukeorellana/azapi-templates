import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SqlServersDatabasesAuditingpoliciesProps extends IAzAPIBaseProps {

}

/**
 * SqlServersDatabasesAuditingpolicies resource
 */
export class SqlServersDatabasesAuditingpolicies extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SqlServersDatabasesAuditingpoliciesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Sql/servers/databases/auditingPolicies@2014-04-01";
  }

  protected getResourceBody(props: SqlServersDatabasesAuditingpoliciesProps): string {
    return JSON.stringify(
        {properties: {auditingState: "string", auditLogsTableName: "string", eventTypesToAudit: "string", fullAuditLogsTableName: "string", retentionDays: "string", storageAccountKey: "string", storageAccountName: "string", storageAccountResourceGroupName: "string", storageAccountSecondaryKey: "string", storageAccountSubscriptionId: "string", storageTableEndpoint: "string", useServerDefault: "string"}}
    );
  }
}
