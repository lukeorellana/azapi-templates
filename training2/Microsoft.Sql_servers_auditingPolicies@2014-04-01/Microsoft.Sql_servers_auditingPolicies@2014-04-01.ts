import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SqlServersAuditingpoliciesProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:servers;

/**
   * The state of the policy.
   */
readonly auditingState?: string;

/**
   * The audit logs table name.
   */
readonly auditLogsTableName?: string;

/**
   * Comma-separated list of event types to audit.
   */
readonly eventTypesToAudit?: string;

/**
   * The full audit logs table name.
   */
readonly fullAuditLogsTableName?: string;

/**
   * The number of days to keep in the audit logs.
   */
readonly retentionDays?: string;

/**
   * The key of the auditing storage account.
   */
readonly storageAccountKey?: string;

/**
   * The table storage account name
   */
readonly storageAccountName?: string;

/**
   * The table storage account resource group name
   */
readonly storageAccountResourceGroupName?: string;

/**
   * The secondary key of the auditing storage account.
   */
readonly storageAccountSecondaryKey?: string;

/**
   * The table storage subscription Id.
   */
readonly storageAccountSubscriptionId?: string;

/**
   * The storage table endpoint.
   */
readonly storageTableEndpoint?: string;
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
