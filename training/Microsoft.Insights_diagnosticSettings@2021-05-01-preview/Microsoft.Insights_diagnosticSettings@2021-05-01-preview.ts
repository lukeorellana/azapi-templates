import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

export interface InsightsDiagnosticsettingsProps extends IAzAPIBaseProps {

}

export class InsightsDiagnosticsettings extends AzAPIBase {
  constructor(scope: Construct, id: string, props: InsightsDiagnosticsettingsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Insights/diagnosticSettings@2021-05-01-preview";
  }

  protected getResourceBody(props: InsightsDiagnosticsettingsProps): string {
    return JSON.stringify(
      {properties: {eventHubAuthorizationRuleId: "string", eventHubName: "string", logAnalyticsDestinationType: "string", logs: [{category: "string", categoryGroup: "string", enabled: "${bool}", retentionPolicy: {days: int, enabled: "${bool}"}}], marketplacePartnerId: "string", metrics: [{category: "string", enabled: "${bool}", retentionPolicy: {days: int, enabled: "${bool}"}, timeGrain: "string"}], serviceBusRuleId: "string", storageAccountId: "string", workspaceId: "string"}}
    );
  }
}

// | Name | Description | Value |
// |-|-|-|
// | name | The resource name | string (required) |
// | scope | Use when creating an extension resource at a scope that is different than the deployment scope. | Target resourceFor Bicep, set this property to the symbolic name of the resource to apply theextension resource. |
// | properties | Properties of a Diagnostic Settings Resource. | DiagnosticSettings |

// | Name | Description | Value |
// |-|-|-|
// | eventHubAuthorizationRuleId | The resource Id for the event hub authorization rule. | string |
// | eventHubName | The name of the event hub. If none is specified, the default event hub will be selected. | string |
// | logAnalyticsDestinationType | A string indicating whether the export to Log Analytics should use the default destination type, i.e. AzureDiagnostics, or use a destination type constructed as follows: {normalized service identity}_{normalized category name}. Possible values are: Dedicated and null (null is default.) | string |
// | logs | The list of logs settings. | LogSettings[] |
// | marketplacePartnerId | The full ARM resource ID of the Marketplace resource to which you would like to send Diagnostic Logs. | string |
// | metrics | The list of metric settings. | MetricSettings[] |
// | serviceBusRuleId | The service bus rule Id of the diagnostic setting. This is here to maintain backwards compatibility. | string |
// | storageAccountId | The resource ID of the storage account to which you would like to send Diagnostic Logs. | string |
// | workspaceId | The full ARM resource ID of the Log Analytics workspace to which you would like to send Diagnostic Logs. Example: /subscriptions/4b9e8510-67ab-4e9a-95a9-e2f1e570ea9c/resourceGroups/insights-integration/providers/Microsoft.OperationalInsights/workspaces/viruela2 | string |

// | Name | Description | Value |
// |-|-|-|
// | category | Name of a Diagnostic Log category for a resource type this setting is applied to. To obtain the list of Diagnostic Log categories for a resource, first perform a GET diagnostic settings operation. | string |
// | categoryGroup | Name of a Diagnostic Log category group for a resource type this setting is applied to. To obtain the list of Diagnostic Log categories for a resource, first perform a GET diagnostic settings operation. | string |
// | enabled | a value indicating whether this log is enabled. | bool (required) |
// | retentionPolicy | the retention policy for this log. | RetentionPolicy |

// | Name | Description | Value |
// |-|-|-|
// | days | the number of days for the retention in days. A value of 0 will retain the events indefinitely. | int (required)Constraints:Min value = 0 |
// | enabled | a value indicating whether the retention policy is enabled. | bool (required) |

// | Name | Description | Value |
// |-|-|-|
// | category | Name of a Diagnostic Metric category for a resource type this setting is applied to. To obtain the list of Diagnostic metric categories for a resource, first perform a GET diagnostic settings operation. | string |
// | enabled | a value indicating whether this category is enabled. | bool (required) |
// | retentionPolicy | the retention policy for this category. | RetentionPolicy |
// | timeGrain | the timegrain of the metric in ISO8601 format. | string |
