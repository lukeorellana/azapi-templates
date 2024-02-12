import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface InsightsComponentsProps extends IAzAPIBaseProps {
/**
   * The kind of application that this component refers to, used to customize UI. This value is a freeform string, values should typically be one of the following: web, ios, other, store, java, phone.
   */
readonly kind: string;

/**
   * Resource etag
   */
readonly etag?: string;

/**
   * Type of application being monitored.
   */
readonly Application_Type: 'other''web';

/**
   * Disable IP masking.
   */
readonly DisableIpMasking?: bool;

/**
   * Disable Non-AAD based Auth.
   */
readonly DisableLocalAuth?: bool;

/**
   * Used by the Application Insights system to determine what kind of flow this component was created by. This is to be set to 'Bluefield' when creating/updating a component via the REST API.
   */
readonly Flow_Type?: 'Bluefield';

/**
   * Force users to create their own storage account for profiler and debugger.
   */
readonly ForceCustomerStorageForProfiler?: bool;

/**
   * The unique application ID created when a new application is added to HockeyApp, used for communications with HockeyApp.
   */
readonly HockeyAppId?: string;

/**
   * Purge data immediately after 30 days.
   */
readonly ImmediatePurgeDataOn30Days?: bool;

/**
   * Indicates the flow of the ingestion.
   */
readonly IngestionMode?: 'ApplicationInsights''ApplicationInsightsWithDiagnosticSettings''LogAnalytics';

/**
   * The network access type for accessing Application Insights ingestion.
   */
readonly publicNetworkAccessForIngestion?: 'Disabled''Enabled';

/**
   * The network access type for accessing Application Insights query.
   */
readonly publicNetworkAccessForQuery?: 'Disabled''Enabled';

/**
   * Describes what tool created this Application Insights component. Customers using this API should set this to the default 'rest'.
   */
readonly Request_Source?: 'rest';

/**
   * Retention period in days.
   */
readonly RetentionInDays?: number;

/**
   * Percentage of the data produced by the application being monitored that is being sampled for Application Insights telemetry. To specify a decimal value, use thejson()function.
   */
readonly SamplingPercentage?: number or json decimal;

/**
   * Resource Id of the log analytics workspace which the data will be ingested to. This property is required to create an application with this API version. Applications from older versions will not have this property.
   */
readonly WorkspaceResourceId?: string;
}

/**
 * InsightsComponents resource
 */
export class InsightsComponents extends AzAPIBase {
  constructor(scope: Construct, id: string, props: InsightsComponentsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Insights/components@2020-02-02";
  }

  protected getResourceBody(props: InsightsComponentsProps): string {
    return JSON.stringify(
        {properties: {Application_Type: "string", DisableIpMasking: "${bool}", DisableLocalAuth: "${bool}", Flow_Type: "Bluefield", ForceCustomerStorageForProfiler: "${bool}", HockeyAppId: "string", ImmediatePurgeDataOn30Days: "${bool}", IngestionMode: "string", publicNetworkAccessForIngestion: "string", publicNetworkAccessForQuery: "string", Request_Source: "rest", RetentionInDays: "${int}", SamplingPercentage: "decimal-as-string", WorkspaceResourceId: "string"}, kind: "string", etag: "string"}
    );
  }
}
