import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SynapseWorkspacesSqlpoolsAuditingsettingsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:sqlPools;

/**
   * Specifies the Actions-Groups and Actions to audit.The recommended set of action groups to use is the following combination - this will audit all the queries and stored procedures executed against the database, as well as successful and failed logins:BATCH_COMPLETED_GROUP,SUCCESSFUL_DATABASE_AUTHENTICATION_GROUP,FAILED_DATABASE_AUTHENTICATION_GROUP.This above combination is also the set that is configured by default when enabling auditing from the Azure portal.The supported action groups to audit are (note: choose only specific groups that cover your auditing needs. Using unnecessary groups could lead to very large quantities of audit records):APPLICATION_ROLE_CHANGE_PASSWORD_GROUPBACKUP_RESTORE_GROUPDATABASE_LOGOUT_GROUPDATABASE_OBJECT_CHANGE_GROUPDATABASE_OBJECT_OWNERSHIP_CHANGE_GROUPDATABASE_OBJECT_PERMISSION_CHANGE_GROUPDATABASE_OPERATION_GROUPDATABASE_PERMISSION_CHANGE_GROUPDATABASE_PRINCIPAL_CHANGE_GROUPDATABASE_PRINCIPAL_IMPERSONATION_GROUPDATABASE_ROLE_MEMBER_CHANGE_GROUPFAILED_DATABASE_AUTHENTICATION_GROUPSCHEMA_OBJECT_ACCESS_GROUPSCHEMA_OBJECT_CHANGE_GROUPSCHEMA_OBJECT_OWNERSHIP_CHANGE_GROUPSCHEMA_OBJECT_PERMISSION_CHANGE_GROUPSUCCESSFUL_DATABASE_AUTHENTICATION_GROUPUSER_CHANGE_PASSWORD_GROUPBATCH_STARTED_GROUPBATCH_COMPLETED_GROUPThese are groups that cover all sql statements and stored procedures executed against the database, and should not be used in combination with other groups as this will result in duplicate audit logs.For more information, seeDatabase-Level Audit Action Groups.For Database auditing policy, specific Actions can also be specified (note that Actions cannot be specified for Server auditing policy). The supported actions to audit are:SELECTUPDATEINSERTDELETEEXECUTERECEIVEREFERENCESThe general form for defining an action to be audited is:{action} ON {object} BY {principal}Note that {object} in the above format can refer to an object like a table, view, or stored procedure, or an entire database or schema. For the latter cases, the forms DATABASE::{db_name} and SCHEMA::{schema_name} are used, respectively.For example:SELECT on dbo.myTable by publicSELECT on DATABASE::myDatabase by publicSELECT on SCHEMA::mySchema by publicFor more information, seeDatabase-Level Audit Actions
   */
readonly auditActionsAndGroups?: string[];

/**
   * Specifies whether audit events are sent to Azure Monitor.In order to send the events to Azure Monitor, specify 'state' as 'Enabled' and 'isAzureMonitorTargetEnabled' as true.When using REST API to configure auditing, Diagnostic Settings with 'SQLSecurityAuditEvents' diagnostic logs category on the database should be also created.Note that for server level audit you should use the 'master' database as {databaseName}.Diagnostic Settings URI format:PUThttps://management.azure.com/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/providers/microsoft.insights/diagnosticSettings/{settingsName}?api-version=2017-05-01-previewFor more information, seeDiagnostic Settings REST APIorDiagnostic Settings PowerShell
   */
readonly isAzureMonitorTargetEnabled?: bool;

/**
   * Specifies whether storageAccountAccessKey value is the storage's secondary key.
   */
readonly isStorageSecondaryKeyInUse?: bool;

/**
   * Specifies the number of days to keep in the audit logs in the storage account.
   */
readonly retentionDays?: number;

/**
   * Specifies the state of the policy. If state is Enabled, storageEndpoint or isAzureMonitorTargetEnabled are required.
   */
readonly state: 'Disabled''Enabled';

/**
   * Specifies the identifier key of the auditing storage account. If state is Enabled and storageEndpoint is specified, storageAccountAccessKey is required.
   */
readonly storageAccountAccessKey?: string;

/**
   * Specifies the blob storage subscription Id.
   */
readonly storageAccountSubscriptionId?: string;

/**
   * Specifies the blob storage endpoint (e.g.https://MyAccount.blob.core.windows.net). If state is Enabled, storageEndpoint is required.
   */
readonly storageEndpoint?: string;
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
