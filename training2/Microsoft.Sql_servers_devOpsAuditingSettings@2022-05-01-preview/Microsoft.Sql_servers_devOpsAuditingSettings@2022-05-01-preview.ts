import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SqlServersDevopsauditingsettingsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:servers;

/**
   * Specifies whether DevOps audit events are sent to Azure Monitor.In order to send the events to Azure Monitor, specify 'State' as 'Enabled' and 'IsAzureMonitorTargetEnabled' as true.When using REST API to configure DevOps audit, Diagnostic Settings with 'DevOpsOperationsAudit' diagnostic logs category on the master database should be also created.Diagnostic Settings URI format:PUThttps://management.azure.com/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Sql/servers/{serverName}/databases/master/providers/microsoft.insights/diagnosticSettings/{settingsName}?api-version=2017-05-01-previewFor more information, seeDiagnostic Settings REST APIorDiagnostic Settings PowerShell
   */
readonly isAzureMonitorTargetEnabled?: bool;

/**
   * Specifies whether Managed Identity is used to access blob storage
   */
readonly isManagedIdentityInUse?: bool;

/**
   * Specifies the state of the audit. If state is Enabled, storageEndpoint or isAzureMonitorTargetEnabled are required.
   */
readonly state: 'Disabled''Enabled';

/**
   * Specifies the identifier key of the auditing storage account.If state is Enabled and storageEndpoint is specified, not specifying the storageAccountAccessKey will use SQL server system-assigned managed identity to access the storage.Prerequisites for using managed identity authentication:1. Assign SQL Server a system-assigned managed identity in Azure Active Directory (AAD).2. Grant SQL Server identity access to the storage account by adding 'Storage Blob Data Contributor' RBAC role to the server identity.For more information, seeAuditing to storage using Managed Identity authentication
   */
readonly storageAccountAccessKey?: string;

/**
   * Specifies the blob storage subscription Id.
   */
readonly storageAccountSubscriptionId?: string;

/**
   * Specifies the blob storage endpoint (e.g.https://MyAccount.blob.core.windows.net). If state is Enabled, storageEndpoint or isAzureMonitorTargetEnabled is required.
   */
readonly storageEndpoint?: string;
}

/**
 * SqlServersDevopsauditingsettings resource
 */
export class SqlServersDevopsauditingsettings extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SqlServersDevopsauditingsettingsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Sql/servers/devOpsAuditingSettings@2022-05-01-preview";
  }

  protected getResourceBody(props: SqlServersDevopsauditingsettingsProps): string {
    return JSON.stringify(
        {properties: {isAzureMonitorTargetEnabled: "${bool}", isManagedIdentityInUse: "${bool}", state: "string", storageAccountAccessKey: "string", storageAccountSubscriptionId: "string", storageEndpoint: "string"}}
    );
  }
}
