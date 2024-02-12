```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Insights/dataCollectionRules@2022-06-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  identity {
    type = "string"
    identity_ids = []
  }
  body = jsonencode({
    properties = {
      dataCollectionEndpointId = "string"
      dataFlows = [
        {
          builtInTransform = "string"
          destinations = [
            "string"
          ]
          outputStream = "string"
          streams = [
            "string"
          ]
          transformKql = "string"
        }
      ]
      dataSources = {
        dataImports = {
          eventHub = {
            consumerGroup = "string"
            name = "string"
            stream = "string"
          }
        }
        extensions = [
          {
            extensionName = "string"
            inputDataSources = [
              "string"
            ]
            name = "string"
            streams = [
              "string"
            ]
          }
        ]
        iisLogs = [
          {
            logDirectories = [
              "string"
            ]
            name = "string"
            streams = [
              "string"
            ]
          }
        ]
        logFiles = [
          {
            filePatterns = [
              "string"
            ]
            format = "text"
            name = "string"
            settings = {
              text = {
                recordStartTimestampFormat = "string"
              }
            }
            streams = [
              "string"
            ]
          }
        ]
        performanceCounters = [
          {
            counterSpecifiers = [
              "string"
            ]
            name = "string"
            samplingFrequencyInSeconds = int
            streams = [
              "string"
            ]
          }
        ]
        platformTelemetry = [
          {
            name = "string"
            streams = [
              "string"
            ]
          }
        ]
        prometheusForwarder = [
          {
            labelIncludeFilter = {}
            name = "string"
            streams = "Microsoft-PrometheusMetrics"
          }
        ]
        syslog = [
          {
            facilityNames = [
              "string"
            ]
            logLevels = [
              "string"
            ]
            name = "string"
            streams = "Microsoft-Syslog"
          }
        ]
        windowsEventLogs = [
          {
            name = "string"
            streams = [
              "string"
            ]
            xPathQueries = [
              "string"
            ]
          }
        ]
        windowsFirewallLogs = [
          {
            name = "string"
            streams = [
              "string"
            ]
          }
        ]
      }
      description = "string"
      destinations = {
        azureMonitorMetrics = {
          name = "string"
        }
        eventHubs = [
          {
            eventHubResourceId = "string"
            name = "string"
          }
        ]
        eventHubsDirect = [
          {
            eventHubResourceId = "string"
            name = "string"
          }
        ]
        logAnalytics = [
          {
            name = "string"
            workspaceResourceId = "string"
          }
        ]
        monitoringAccounts = [
          {
            accountResourceId = "string"
            name = "string"
          }
        ]
        storageAccounts = [
          {
            containerName = "string"
            name = "string"
            storageAccountResourceId = "string"
          }
        ]
        storageBlobsDirect = [
          {
            containerName = "string"
            name = "string"
            storageAccountResourceId = "string"
          }
        ]
        storageTablesDirect = [
          {
            name = "string"
            storageAccountResourceId = "string"
            tableName = "string"
          }
        ]
      }
      streamDeclarations = {}
    }
    kind = "string"
  })
}

```

### dataCollectionRules

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | The geo-location where the resource lives. | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| kind | The kind of the resource. | 'Linux''Windows' |
| identity | Managed service identity of the resource. | DataCollectionRuleResourceIdentity |
| properties | Resource properties. | DataCollectionRuleResourceProperties |


### DataCollectionRuleResourceIdentity

| Name | Description | Value |
|-|-|-|
| type | Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed). | 'None''SystemAssigned''SystemAssigned,UserAssigned''UserAssigned' (required) |
| userAssignedIdentities | The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests. | object |


### DataCollectionRuleResourceProperties

| Name | Description | Value |
|-|-|-|
| dataCollectionEndpointId | The resource ID of the data collection endpoint that this rule can be used with. | string |
| dataFlows | The specification of data flows. | DataFlow[] |
| dataSources | The specification of data sources.This property is optional and can be omitted if the rule is meant to be used via direct calls to the provisioned endpoint. | DataCollectionRuleDataSources |
| description | Description of the data collection rule. | string |
| destinations | The specification of destinations. | DataCollectionRuleDestinations |
| streamDeclarations | Declaration of custom streams used in this rule. | object |


### DataFlow

| Name | Description | Value |
|-|-|-|
| builtInTransform | The builtIn transform to transform stream data | string |
| destinations | List of destinations for this data flow. | string[] |
| outputStream | The output stream of the transform. Only required if the transform changes data to a different stream. | string |
| streams | List of streams for this data flow. | String array containing any of:'Microsoft-Event''Microsoft-InsightsMetrics''Microsoft-Perf''Microsoft-Syslog''Microsoft-WindowsEvent' |
| transformKql | The KQL query to transform stream data. | string |


### DataCollectionRuleDataSources

| Name | Description | Value |
|-|-|-|
| dataImports | Specifications of pull based data sources | DataSourcesSpecDataImports |
| extensions | The list of Azure VM extension data source configurations. | ExtensionDataSource[] |
| iisLogs | The list of IIS logs source configurations. | IisLogsDataSource[] |
| logFiles | The list of Log files source configurations. | LogFilesDataSource[] |
| performanceCounters | The list of performance counter data source configurations. | PerfCounterDataSource[] |
| platformTelemetry | The list of platform telemetry configurations | PlatformTelemetryDataSource[] |
| prometheusForwarder | The list of Prometheus forwarder data source configurations. | PrometheusForwarderDataSource[] |
| syslog | The list of Syslog data source configurations. | SyslogDataSource[] |
| windowsEventLogs | The list of Windows Event Log data source configurations. | WindowsEventLogDataSource[] |
| windowsFirewallLogs | The list of Windows Firewall logs source configurations. | WindowsFirewallLogsDataSource[] |


### DataSourcesSpecDataImports

| Name | Description | Value |
|-|-|-|
| eventHub | Definition of Event Hub configuration. | DataImportSourcesEventHub |


### DataImportSourcesEventHub

| Name | Description | Value |
|-|-|-|
| consumerGroup | Event Hub consumer group name | string |
| name | A friendly name for the data source.This name should be unique across all data sources (regardless of type) within the data collection rule. | string |
| stream | The stream to collect from EventHub | string |


### ExtensionDataSource

| Name | Description | Value |
|-|-|-|
| extensionName | The name of the VM extension. | string (required) |
| extensionSettings | The extension settings. The format is specific for particular extension. | For Bicep, you can use theany()function. |
| inputDataSources | The list of data sources this extension needs data from. | string[] |
| name | A friendly name for the data source.This name should be unique across all data sources (regardless of type) within the data collection rule. | string |
| streams | List of streams that this data source will be sent to.A stream indicates what schema will be used for this data and usually what table in Log Analytics the data will be sent to. | String array containing any of:'Microsoft-Event''Microsoft-InsightsMetrics''Microsoft-Perf''Microsoft-Syslog''Microsoft-WindowsEvent' |


### IisLogsDataSource

| Name | Description | Value |
|-|-|-|
| logDirectories | Absolute paths file location | string[] |
| name | A friendly name for the data source.This name should be unique across all data sources (regardless of type) within the data collection rule. | string |
| streams | IIS streams | string[] (required) |


### LogFilesDataSource

| Name | Description | Value |
|-|-|-|
| filePatterns | File Patterns where the log files are located | string[] (required) |
| format | The data format of the log files | 'text' (required) |
| name | A friendly name for the data source.This name should be unique across all data sources (regardless of type) within the data collection rule. | string |
| settings | The log files specific settings. | LogFilesDataSourceSettings |
| streams | List of streams that this data source will be sent to.A stream indicates what schema will be used for this data source | string[] (required) |


### LogFilesDataSourceSettings

| Name | Description | Value |
|-|-|-|
| text | Text settings | LogFileSettingsText |


### LogFileSettingsText

| Name | Description | Value |
|-|-|-|
| recordStartTimestampFormat | MM:SS AM/PM' , 'MMM d hh:mm:ss' , 'Mon DD, YYYY HH:MM:SS' , 'YYYY-MM-DD HH:MM:SS' , 'dd/MMM/yyyy:HH:mm:ss zzz' , 'ddMMyy HH:mm:ss' , 'yyMMdd HH:mm:ss' , 'yyyy-MM-ddTHH:mm:ssK' , string (Required): One of the supported timestamp formats | 'ISO 8601''M/D/YYYY HH (required) |


### PerfCounterDataSource

| Name | Description | Value |
|-|-|-|
| counterSpecifiers | A list of specifier names of the performance counters you want to collect.Use a wildcard (*) to collect a counter for all instances.To get a list of performance counters on Windows, run the command 'typeperf'. | string[] |
| name | A friendly name for the data source.This name should be unique across all data sources (regardless of type) within the data collection rule. | string |
| samplingFrequencyInSeconds | The number of seconds between consecutive counter measurements (samples). | int |
| streams | List of streams that this data source will be sent to.A stream indicates what schema will be used for this data and usually what table in Log Analytics the data will be sent to. | String array containing any of:'Microsoft-InsightsMetrics''Microsoft-Perf' |


### PlatformTelemetryDataSource

| Name | Description | Value |
|-|-|-|
| name | A friendly name for the data source.This name should be unique across all data sources (regardless of type) within the data collection rule. | string |
| streams | List of platform telemetry streams to collect | string[] (required) |


### PrometheusForwarderDataSource

| Name | Description | Value |
|-|-|-|
| labelIncludeFilter | The list of label inclusion filters in the form of label "name-value" pairs.Currently only one label is supported: 'microsoft_metrics_include_label'.Label values are matched case-insensitively. | object |
| name | A friendly name for the data source.This name should be unique across all data sources (regardless of type) within the data collection rule. | string |
| streams | List of streams that this data source will be sent to. | String array containing any of:'Microsoft-PrometheusMetrics' |


### SyslogDataSource

| Name | Description | Value |
|-|-|-|
| facilityNames | The list of facility names. | String array containing any of:'*''auth''authpriv''cron''daemon''kern''local0''local1''local2''local3''local4''local5''local6''local7''lpr''mail''mark''news''syslog''user''uucp' |
| logLevels | The log levels to collect. | String array containing any of:'*''Alert''Critical''Debug''Emergency''Error''Info''Notice''Warning' |
| name | A friendly name for the data source.This name should be unique across all data sources (regardless of type) within the data collection rule. | string |
| streams | List of streams that this data source will be sent to.A stream indicates what schema will be used for this data and usually what table in Log Analytics the data will be sent to. | String array containing any of:'Microsoft-Syslog' |


### WindowsEventLogDataSource

| Name | Description | Value |
|-|-|-|
| name | A friendly name for the data source.This name should be unique across all data sources (regardless of type) within the data collection rule. | string |
| streams | List of streams that this data source will be sent to.A stream indicates what schema will be used for this data and usually what table in Log Analytics the data will be sent to. | String array containing any of:'Microsoft-Event''Microsoft-WindowsEvent' |
| xPathQueries | A list of Windows Event Log queries in XPATH format. | string[] |


### WindowsFirewallLogsDataSource

| Name | Description | Value |
|-|-|-|
| name | A friendly name for the data source.This name should be unique across all data sources (regardless of type) within the data collection rule. | string |
| streams | Firewall logs streams | string[] (required) |


### DataCollectionRuleDestinations

| Name | Description | Value |
|-|-|-|
| azureMonitorMetrics | Azure Monitor Metrics destination. | DestinationsSpecAzureMonitorMetrics |
| eventHubs | List of Event Hubs destinations. | EventHubDestination[] |
| eventHubsDirect | List of Event Hubs Direct destinations. | EventHubDirectDestination[] |
| logAnalytics | List of Log Analytics destinations. | LogAnalyticsDestination[] |
| monitoringAccounts | List of monitoring account destinations. | MonitoringAccountDestination[] |
| storageAccounts | List of storage accounts destinations. | StorageBlobDestination[] |
| storageBlobsDirect | List of Storage Blob Direct destinations. To be used only for sending data directly to store from the agent. | StorageBlobDestination[] |
| storageTablesDirect | List of Storage Table Direct destinations. | StorageTableDestination[] |


### DestinationsSpecAzureMonitorMetrics

| Name | Description | Value |
|-|-|-|
| name | A friendly name for the destination.This name should be unique across all destinations (regardless of type) within the data collection rule. | string |


### EventHubDestination

| Name | Description | Value |
|-|-|-|
| eventHubResourceId | The resource ID of the event hub. | string |
| name | A friendly name for the destination.This name should be unique across all destinations (regardless of type) within the data collection rule. | string |


### EventHubDirectDestination

| Name | Description | Value |
|-|-|-|
| eventHubResourceId | The resource ID of the event hub. | string |
| name | A friendly name for the destination.This name should be unique across all destinations (regardless of type) within the data collection rule. | string |


### LogAnalyticsDestination

| Name | Description | Value |
|-|-|-|
| name | A friendly name for the destination.This name should be unique across all destinations (regardless of type) within the data collection rule. | string |
| workspaceResourceId | The resource ID of the Log Analytics workspace. | string |


### MonitoringAccountDestination

| Name | Description | Value |
|-|-|-|
| accountResourceId | The resource ID of the monitoring account. | string |
| name | A friendly name for the destination.This name should be unique across all destinations (regardless of type) within the data collection rule. | string |


### StorageBlobDestination

| Name | Description | Value |
|-|-|-|
| containerName | The container name of the Storage Blob. | string |
| name | A friendly name for the destination.This name should be unique across all destinations (regardless of type) within the data collection rule. | string |
| storageAccountResourceId | The resource ID of the storage account. | string |


### StorageTableDestination

| Name | Description | Value |
|-|-|-|
| name | A friendly name for the destination.This name should be unique across all destinations (regardless of type) within the data collection rule. | string |
| storageAccountResourceId | The resource ID of the storage account. | string |
| tableName | The name of the Storage Table. | string |


