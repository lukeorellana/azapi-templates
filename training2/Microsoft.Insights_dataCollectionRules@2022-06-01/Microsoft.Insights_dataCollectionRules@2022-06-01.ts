import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface InsightsDatacollectionrulesProps extends IAzAPIBaseProps {
/**
   * The kind of the resource.
   */
readonly kind?: 'Linux''Windows';

/**
   * Managed service identity of the resource.
   */
readonly identity?: DataCollectionRuleResourceIdentity;

/**
   * Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
   */
readonly type: 'None''SystemAssigned''SystemAssigned,UserAssigned''UserAssigned';

/**
   * The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests.
   */
readonly userAssignedIdentities?: object;

/**
   * The resource ID of the data collection endpoint that this rule can be used with.
   */
readonly dataCollectionEndpointId?: string;

/**
   * The specification of data flows.
   */
readonly dataFlows?: DataFlow[];

/**
   * The specification of data sources.This property is optional and can be omitted if the rule is meant to be used via direct calls to the provisioned endpoint.
   */
readonly dataSources?: DataCollectionRuleDataSources;

/**
   * Description of the data collection rule.
   */
readonly description?: string;

/**
   * The specification of destinations.
   */
readonly destinations?: DataCollectionRuleDestinations;

/**
   * Declaration of custom streams used in this rule.
   */
readonly streamDeclarations?: object;

/**
   * The builtIn transform to transform stream data
   */
readonly builtInTransform?: string;

/**
   * List of destinations for this data flow.
   */
readonly destinations?: string[];

/**
   * The output stream of the transform. Only required if the transform changes data to a different stream.
   */
readonly outputStream?: string;

/**
   * List of streams for this data flow.
   */
readonly streams?: String array containing any of:'Microsoft-Event''Microsoft-InsightsMetrics''Microsoft-Perf''Microsoft-Syslog''Microsoft-WindowsEvent';

/**
   * The KQL query to transform stream data.
   */
readonly transformKql?: string;

/**
   * Specifications of pull based data sources
   */
readonly dataImports?: DataSourcesSpecDataImports;

/**
   * The list of Azure VM extension data source configurations.
   */
readonly extensions?: ExtensionDataSource[];

/**
   * The list of IIS logs source configurations.
   */
readonly iisLogs?: IisLogsDataSource[];

/**
   * The list of Log files source configurations.
   */
readonly logFiles?: LogFilesDataSource[];

/**
   * The list of performance counter data source configurations.
   */
readonly performanceCounters?: PerfCounterDataSource[];

/**
   * The list of platform telemetry configurations
   */
readonly platformTelemetry?: PlatformTelemetryDataSource[];

/**
   * The list of Prometheus forwarder data source configurations.
   */
readonly prometheusForwarder?: PrometheusForwarderDataSource[];

/**
   * The list of Syslog data source configurations.
   */
readonly syslog?: SyslogDataSource[];

/**
   * The list of Windows Event Log data source configurations.
   */
readonly windowsEventLogs?: WindowsEventLogDataSource[];

/**
   * The list of Windows Firewall logs source configurations.
   */
readonly windowsFirewallLogs?: WindowsFirewallLogsDataSource[];

/**
   * Definition of Event Hub configuration.
   */
readonly eventHub?: DataImportSourcesEventHub;

/**
   * Event Hub consumer group name
   */
readonly consumerGroup?: string;

/**
   * The stream to collect from EventHub
   */
readonly stream?: string;

/**
   * The name of the VM extension.
   */
readonly extensionName: string;

/**
   * The extension settings. The format is specific for particular extension.
   */
readonly extensionSettings?: For Bicep, you can use theany()function.;

/**
   * The list of data sources this extension needs data from.
   */
readonly inputDataSources?: string[];

/**
   * List of streams that this data source will be sent to.A stream indicates what schema will be used for this data and usually what table in Log Analytics the data will be sent to.
   */
readonly streams?: String array containing any of:'Microsoft-Event''Microsoft-InsightsMetrics''Microsoft-Perf''Microsoft-Syslog''Microsoft-WindowsEvent';

/**
   * Absolute paths file location
   */
readonly logDirectories?: string[];

/**
   * IIS streams
   */
readonly streams: string[];

/**
   * File Patterns where the log files are located
   */
readonly filePatterns: string[];

/**
   * The data format of the log files
   */
readonly format: 'text';

/**
   * The log files specific settings.
   */
readonly settings?: LogFilesDataSourceSettings;

/**
   * List of streams that this data source will be sent to.A stream indicates what schema will be used for this data source
   */
readonly streams: string[];

/**
   * Text settings
   */
readonly text?: LogFileSettingsText;

/**
   * MM:SS AM/PM' , 'MMM d hh:mm:ss' , 'Mon DD, YYYY HH:MM:SS' , 'YYYY-MM-DD HH:MM:SS' , 'dd/MMM/yyyy:HH:mm:ss zzz' , 'ddMMyy HH:mm:ss' , 'yyMMdd HH:mm:ss' , 'yyyy-MM-ddTHH:mm:ssK' , string (Required): One of the supported timestamp formats
   */
readonly recordStartTimestampFormat: 'ISO 8601''M/D/YYYY HH;

/**
   * A list of specifier names of the performance counters you want to collect.Use a wildcard (*) to collect a counter for all instances.To get a list of performance counters on Windows, run the command 'typeperf'.
   */
readonly counterSpecifiers?: string[];

/**
   * The number of seconds between consecutive counter measurements (samples).
   */
readonly samplingFrequencyInSeconds?: number;

/**
   * List of streams that this data source will be sent to.A stream indicates what schema will be used for this data and usually what table in Log Analytics the data will be sent to.
   */
readonly streams?: String array containing any of:'Microsoft-InsightsMetrics''Microsoft-Perf';

/**
   * List of platform telemetry streams to collect
   */
readonly streams: string[];

/**
   * The list of label inclusion filters in the form of label "name-value" pairs.Currently only one label is supported: 'microsoft_metrics_include_label'.Label values are matched case-insensitively.
   */
readonly labelIncludeFilter?: object;

/**
   * List of streams that this data source will be sent to.
   */
readonly streams?: String array containing any of:'Microsoft-PrometheusMetrics';

/**
   * The list of facility names.
   */
readonly facilityNames?: String array containing any of:'*''auth''authpriv''cron''daemon''kern''local0''local1''local2''local3''local4''local5''local6''local7''lpr''mail''mark''news''syslog''user''uucp';

/**
   * The log levels to collect.
   */
readonly logLevels?: String array containing any of:'*''Alert''Critical''Debug''Emergency''Error''Info''Notice''Warning';

/**
   * List of streams that this data source will be sent to.A stream indicates what schema will be used for this data and usually what table in Log Analytics the data will be sent to.
   */
readonly streams?: String array containing any of:'Microsoft-Syslog';

/**
   * List of streams that this data source will be sent to.A stream indicates what schema will be used for this data and usually what table in Log Analytics the data will be sent to.
   */
readonly streams?: String array containing any of:'Microsoft-Event''Microsoft-WindowsEvent';

/**
   * A list of Windows Event Log queries in XPATH format.
   */
readonly xPathQueries?: string[];

/**
   * Firewall logs streams
   */
readonly streams: string[];

/**
   * Azure Monitor Metrics destination.
   */
readonly azureMonitorMetrics?: DestinationsSpecAzureMonitorMetrics;

/**
   * List of Event Hubs destinations.
   */
readonly eventHubs?: EventHubDestination[];

/**
   * List of Event Hubs Direct destinations.
   */
readonly eventHubsDirect?: EventHubDirectDestination[];

/**
   * List of Log Analytics destinations.
   */
readonly logAnalytics?: LogAnalyticsDestination[];

/**
   * List of monitoring account destinations.
   */
readonly monitoringAccounts?: MonitoringAccountDestination[];

/**
   * List of storage accounts destinations.
   */
readonly storageAccounts?: StorageBlobDestination[];

/**
   * List of Storage Blob Direct destinations. To be used only for sending data directly to store from the agent.
   */
readonly storageBlobsDirect?: StorageBlobDestination[];

/**
   * List of Storage Table Direct destinations.
   */
readonly storageTablesDirect?: StorageTableDestination[];

/**
   * The resource ID of the event hub.
   */
readonly eventHubResourceId?: string;

/**
   * The resource ID of the event hub.
   */
readonly eventHubResourceId?: string;

/**
   * The resource ID of the Log Analytics workspace.
   */
readonly workspaceResourceId?: string;

/**
   * The resource ID of the monitoring account.
   */
readonly accountResourceId?: string;

/**
   * The container name of the Storage Blob.
   */
readonly containerName?: string;

/**
   * The resource ID of the storage account.
   */
readonly storageAccountResourceId?: string;

/**
   * The resource ID of the storage account.
   */
readonly storageAccountResourceId?: string;

/**
   * The name of the Storage Table.
   */
readonly tableName?: string;
}

/**
 * InsightsDatacollectionrules resource
 */
export class InsightsDatacollectionrules extends AzAPIBase {
  constructor(scope: Construct, id: string, props: InsightsDatacollectionrulesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Insights/dataCollectionRules@2022-06-01";
  }

  protected getResourceBody(props: InsightsDatacollectionrulesProps): string {
    return JSON.stringify(
        {properties: {dataCollectionEndpointId: "string", dataFlows: [{builtInTransform: "string", destinations: ["string"], outputStream: "string", streams: ["string"], transformKql: "string"}], dataSources: {dataImports: {eventHub: {consumerGroup: "string", name: "string", stream: "string"}}, extensions: [{extensionName: "string", inputDataSources: ["string"], name: "string", streams: ["string"]}], iisLogs: [{logDirectories: ["string"], name: "string", streams: ["string"]}], logFiles: [{filePatterns: ["string"], format: "text", name: "string", settings: {text: {recordStartTimestampFormat: "string"}}, streams: ["string"]}], performanceCounters: [{counterSpecifiers: ["string"], name: "string", samplingFrequencyInSeconds: "${int}", streams: ["string"]}], platformTelemetry: [{name: "string", streams: ["string"]}], prometheusForwarder: [{labelIncludeFilter: {}, name: "string", streams: "Microsoft-PrometheusMetrics"}], syslog: [{facilityNames: ["string"], logLevels: ["string"], name: "string", streams: "Microsoft-Syslog"}], windowsEventLogs: [{name: "string", streams: ["string"], xPathQueries: ["string"]}], windowsFirewallLogs: [{name: "string", streams: ["string"]}]}, description: "string", destinations: {azureMonitorMetrics: {name: "string"}, eventHubs: [{eventHubResourceId: "string", name: "string"}], eventHubsDirect: [{eventHubResourceId: "string", name: "string"}], logAnalytics: [{name: "string", workspaceResourceId: "string"}], monitoringAccounts: [{accountResourceId: "string", name: "string"}], storageAccounts: [{containerName: "string", name: "string", storageAccountResourceId: "string"}], storageBlobsDirect: [{containerName: "string", name: "string", storageAccountResourceId: "string"}], storageTablesDirect: [{name: "string", storageAccountResourceId: "string", tableName: "string"}]}, streamDeclarations: {}}, kind: "string"}
    );
  }
}
