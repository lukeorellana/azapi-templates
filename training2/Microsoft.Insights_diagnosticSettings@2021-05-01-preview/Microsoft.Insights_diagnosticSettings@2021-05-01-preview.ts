import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface InsightsDiagnosticsettingsProps extends IAzAPIBaseProps {
/**
   * Use when creating an extension resource at a scope that is different than the deployment scope.
   */
readonly scope?: Target resourceFor Bicep, set this property to the symbolic name of the resource to apply theextension resource.;

/**
   * The resource Id for the event hub authorization rule.
   */
readonly eventHubAuthorizationRuleId?: string;

/**
   * The name of the event hub. If none is specified, the default event hub will be selected.
   */
readonly eventHubName?: string;

/**
   * A string indicating whether the export to Log Analytics should use the default destination type, i.e. AzureDiagnostics, or use a destination type constructed as follows: {normalized service identity}_{normalized category name}. Possible values are: Dedicated and null (null is default.)
   */
readonly logAnalyticsDestinationType?: string;

/**
   * The list of logs settings.
   */
readonly logs?: LogSettings[];

/**
   * The full ARM resource ID of the Marketplace resource to which you would like to send Diagnostic Logs.
   */
readonly marketplacePartnerId?: string;

/**
   * The list of metric settings.
   */
readonly metrics?: MetricSettings[];

/**
   * The service bus rule Id of the diagnostic setting. This is here to maintain backwards compatibility.
   */
readonly serviceBusRuleId?: string;

/**
   * The resource ID of the storage account to which you would like to send Diagnostic Logs.
   */
readonly storageAccountId?: string;

/**
   * The full ARM resource ID of the Log Analytics workspace to which you would like to send Diagnostic Logs. Example: /subscriptions/4b9e8510-67ab-4e9a-95a9-e2f1e570ea9c/resourceGroups/insights-integration/providers/Microsoft.OperationalInsights/workspaces/viruela2
   */
readonly workspaceId?: string;

/**
   * Name of a Diagnostic Log category for a resource type this setting is applied to. To obtain the list of Diagnostic Log categories for a resource, first perform a GET diagnostic settings operation.
   */
readonly category?: string;

/**
   * Name of a Diagnostic Log category group for a resource type this setting is applied to. To obtain the list of Diagnostic Log categories for a resource, first perform a GET diagnostic settings operation.
   */
readonly categoryGroup?: string;

/**
   * a value indicating whether this log is enabled.
   */
readonly enabled: bool;

/**
   * the retention policy for this log.
   */
readonly retentionPolicy?: RetentionPolicy;

/**
   * the number of days for the retention in days. A value of 0 will retain the events indefinitely.
   */
readonly days: number Constranumbers:Min value = 0;

/**
   * a value indicating whether the retention policy is enabled.
   */
readonly enabled: bool;

/**
   * Name of a Diagnostic Metric category for a resource type this setting is applied to. To obtain the list of Diagnostic metric categories for a resource, first perform a GET diagnostic settings operation.
   */
readonly category?: string;

/**
   * a value indicating whether this category is enabled.
   */
readonly enabled: bool;

/**
   * the retention policy for this category.
   */
readonly retentionPolicy?: RetentionPolicy;

/**
   * the timegrain of the metric in ISO8601 format.
   */
readonly timeGrain?: string;
}

/**
 * InsightsDiagnosticsettings resource
 */
export class InsightsDiagnosticsettings extends AzAPIBase {
  constructor(scope: Construct, id: string, props: InsightsDiagnosticsettingsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Insights/diagnosticSettings@2021-05-01-preview";
  }

  protected getResourceBody(props: InsightsDiagnosticsettingsProps): string {
    return JSON.stringify(
        {properties: {eventHubAuthorizationRuleId: "string", eventHubName: "string", logAnalyticsDestinationType: "string", logs: [{category: "string", categoryGroup: "string", enabled: "${bool}", retentionPolicy: {days: "${int}", enabled: "${bool}"}}], marketplacePartnerId: "string", metrics: [{category: "string", enabled: "${bool}", retentionPolicy: {days: "${int}", enabled: "${bool}"}, timeGrain: "string"}], serviceBusRuleId: "string", storageAccountId: "string", workspaceId: "string"}}
    );
  }
}
