import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SqlServersAuditingpoliciesProps extends IAzAPIBaseProps {

}

/**
 * SqlServersAuditingpolicies resource
 */
export class SqlServersAuditingpolicies extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SqlServersAuditingpoliciesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Sql/servers/auditingPolicies@2014-04-01";
  }

  protected getResourceBody(props: SqlServersAuditingpoliciesProps): string {
    return JSON.stringify(
        {properties: {auditingState: "string", auditLogsTableName: "string", eventTypesToAudit: "string", fullAuditLogsTableName: "string", retentionDays: "string", storageAccountKey: "string", storageAccountName: "string", storageAccountResourceGroupName: "string", storageAccountSecondaryKey: "string", storageAccountSubscriptionId: "string", storageTableEndpoint: "string"}}
    );
  }
}
