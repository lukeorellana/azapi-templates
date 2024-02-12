import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

export interface InsightsComponentsProps extends IAzAPIBaseProps {

}

export class InsightsComponents extends AzAPIBase {
  constructor(scope: Construct, id: string, props: InsightsComponentsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Insights/components@2020-02-02";
  }

  protected getResourceBody(props: InsightsComponentsProps): string {
    return JSON.stringify(
      {properties: {Application_Type: "string", DisableIpMasking: "${bool}", DisableLocalAuth: "${bool}", Flow_Type: "Bluefield", ForceCustomerStorageForProfiler: "${bool}", HockeyAppId: "string", ImmediatePurgeDataOn30Days: "${bool}", IngestionMode: "string", publicNetworkAccessForIngestion: "string", publicNetworkAccessForQuery: "string", Request_Source: "rest", RetentionInDays: int, SamplingPercentage: "decimal-as-string", WorkspaceResourceId: "string"}, kind: "string", etag: "string"}
    );
  }
}

// | Name | Description | Value |
// |-|-|-|
// | name | The resource name | string (required)Character limit: 1-260Valid characters:Can't use:%&\?/or control charactersCan't end with space or period. |
// | location | Resource location | string (required) |
// | tags | Resource tags | Dictionary of tag names and values. SeeTags in templates |
// | kind | The kind of application that this component refers to, used to customize UI. This value is a freeform string, values should typically be one of the following: web, ios, other, store, java, phone. | string (required) |
// | etag | Resource etag | string |
// | properties | Properties that define an Application Insights component resource. | ApplicationInsightsComponentProperties |

// | Name | Description | Value |
// |-|-|-|
// | Application_Type | Type of application being monitored. | 'other''web' (required) |
// | DisableIpMasking | Disable IP masking. | bool |
// | DisableLocalAuth | Disable Non-AAD based Auth. | bool |
// | Flow_Type | Used by the Application Insights system to determine what kind of flow this component was created by. This is to be set to 'Bluefield' when creating/updating a component via the REST API. | 'Bluefield' |
// | ForceCustomerStorageForProfiler | Force users to create their own storage account for profiler and debugger. | bool |
// | HockeyAppId | The unique application ID created when a new application is added to HockeyApp, used for communications with HockeyApp. | string |
// | ImmediatePurgeDataOn30Days | Purge data immediately after 30 days. | bool |
// | IngestionMode | Indicates the flow of the ingestion. | 'ApplicationInsights''ApplicationInsightsWithDiagnosticSettings''LogAnalytics' |
// | publicNetworkAccessForIngestion | The network access type for accessing Application Insights ingestion. | 'Disabled''Enabled' |
// | publicNetworkAccessForQuery | The network access type for accessing Application Insights query. | 'Disabled''Enabled' |
// | Request_Source | Describes what tool created this Application Insights component. Customers using this API should set this to the default 'rest'. | 'rest' |
// | RetentionInDays | Retention period in days. | int |
// | SamplingPercentage | Percentage of the data produced by the application being monitored that is being sampled for Application Insights telemetry. To specify a decimal value, use thejson()function. | int or json decimal |
// | WorkspaceResourceId | Resource Id of the log analytics workspace which the data will be ingested to. This property is required to create an application with this API version. Applications from older versions will not have this property. | string |
