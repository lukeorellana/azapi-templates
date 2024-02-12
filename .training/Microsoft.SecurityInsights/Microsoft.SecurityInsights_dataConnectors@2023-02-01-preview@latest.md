```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.SecurityInsights/dataConnectors@2023-02-01-preview"
  name = "string"
  parent_id = "string"
  // For remaining properties, see dataConnectors objects
  body = jsonencode({
    kind = "string"
    etag = "string"
  })
}

```

### dataConnectors

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| kind | Set the object type | AmazonWebServicesCloudTrailAmazonWebServicesS3APIPollingAzureActiveDirectoryAzureAdvancedThreatProtectionAzureSecurityCenterDynamics365GenericUIIOTMicrosoftCloudAppSecurityMicrosoftDefenderAdvancedThreatProtectionMicrosoftPurviewInformationProtectionMicrosoftThreatIntelligenceMicrosoftThreatProtectionOffice365Office365ProjectOfficeATPOfficeIRMOfficePowerBIThreatIntelligenceThreatIntelligenceTaxii(required) |
| scope | Use when creating an extension resource at a scope that is different than the deployment scope. | Target resourceFor Bicep, set this property to the symbolic name of the resource to apply theextension resource. |
| etag | Etag of the azure resource | string |


### AwsCloudTrailDataConnector

| Name | Description | Value |
|-|-|-|
| kind | The data connector kind | 'AmazonWebServicesCloudTrail' (required) |
| properties | Amazon Web Services CloudTrail data connector properties. | AwsCloudTrailDataConnectorProperties |


### AwsCloudTrailDataConnectorProperties

| Name | Description | Value |
|-|-|-|
| dataTypes | The available data types for the connector. | AwsCloudTrailDataConnectorDataTypes(required) |


### AwsCloudTrailDataConnectorDataTypes

| Name | Description | Value |
|-|-|-|
| logs | Logs data type. | AwsCloudTrailDataConnectorDataTypesLogs(required) |


### AwsCloudTrailDataConnectorDataTypesLogs

| Name | Description | Value |
|-|-|-|
| state | Describe whether this data type connection is enabled or not. | 'Disabled''Enabled' (required) |


### AwsS3DataConnector

| Name | Description | Value |
|-|-|-|
| kind | The data connector kind | 'AmazonWebServicesS3' (required) |
| properties | Amazon Web Services S3 data connector properties. | AwsS3DataConnectorProperties |


### AwsS3DataConnectorProperties

| Name | Description | Value |
|-|-|-|
| dataTypes | The available data types for the connector. | AwsS3DataConnectorDataTypes(required) |
| destinationTable | The logs destination table name in LogAnalytics. | string (required) |
| roleArn | The Aws Role Arn that is used to access the Aws account. | string (required) |
| sqsUrls | The AWS sqs urls for the connector. | string[] (required) |


### AwsS3DataConnectorDataTypes

| Name | Description | Value |
|-|-|-|
| logs | Logs data type. | AwsS3DataConnectorDataTypesLogs(required) |


### AwsS3DataConnectorDataTypesLogs

| Name | Description | Value |
|-|-|-|
| state | Describe whether this data type connection is enabled or not. | 'Disabled''Enabled' (required) |


### CodelessApiPollingDataConnector

| Name | Description | Value |
|-|-|-|
| kind | The data connector kind | 'APIPolling' (required) |
| properties | Codeless poling data connector properties | ApiPollingParameters |


### ApiPollingParameters

| Name | Description | Value |
|-|-|-|
| connectorUiConfig | Config to describe the instructions blade | CodelessUiConnectorConfigProperties |
| pollingConfig | Config to describe the polling instructions | CodelessConnectorPollingConfigProperties |


### CodelessUiConnectorConfigProperties

| Name | Description | Value |
|-|-|-|
| availability | Connector Availability Status | Availability(required) |
| connectivityCriteria | Define the way the connector check connectivity | CodelessUiConnectorConfigPropertiesConnectivityCrite...[] (required) |
| customImage | An optional custom image to be used when displaying the connector within Azure Sentinel's connector's gallery | string |
| dataTypes | Data types to check for last data received | CodelessUiConnectorConfigPropertiesDataTypesItem[] (required) |
| descriptionMarkdown | Connector description | string (required) |
| graphQueries | The graph query to show the current data status | CodelessUiConnectorConfigPropertiesGraphQueriesItem[] (required) |
| graphQueriesTableName | Name of the table the connector will insert the data to | string (required) |
| instructionSteps | Instruction steps to enable the connector | CodelessUiConnectorConfigPropertiesInstructionStepsI...[] (required) |
| permissions | Permissions required for the connector | Permissions(required) |
| publisher | Connector publisher name | string (required) |
| sampleQueries | The sample queries for the connector | CodelessUiConnectorConfigPropertiesSampleQueriesItem[] (required) |
| title | Connector blade title | string (required) |


### Availability

| Name | Description | Value |
|-|-|-|
| isPreview | Set connector as preview | bool |
| status | The connector Availability Status | '1' |


### CodelessUiConnectorConfigPropertiesConnectivityCrite...

| Name | Description | Value |
|-|-|-|
| type | type of connectivity | 'IsConnectedQuery' |
| value | Queries for checking connectivity | string[] |


### CodelessUiConnectorConfigPropertiesDataTypesItem

| Name | Description | Value |
|-|-|-|
| lastDataReceivedQuery | Query for indicate last data received | string |
| name | Name of the data type to show in the graph. can be use with {{graphQueriesTableName}} placeholder | string |


### CodelessUiConnectorConfigPropertiesGraphQueriesItem

| Name | Description | Value |
|-|-|-|
| baseQuery | The base query for the graph | string |
| legend | The legend for the graph | string |
| metricName | the metric that the query is checking | string |


### CodelessUiConnectorConfigPropertiesInstructionStepsI...

| Name | Description | Value |
|-|-|-|
| description | Instruction step description | string |
| instructions | Instruction step details | InstructionStepsInstructionsItem[] |
| title | Instruction step title | string |


### InstructionStepsInstructionsItem

| Name | Description | Value |
|-|-|-|
| parameters | The parameters for the setting | For Bicep, you can use theany()function. |
| type | The kind of the setting | 'CopyableLabel''InfoMessage''InstructionStepsGroup' (required) |


### Permissions

| Name | Description | Value |
|-|-|-|
| customs | Customs permissions required for the connector | PermissionsCustomsItem[] |
| resourceProvider | Resource provider permissions required for the connector | PermissionsResourceProviderItem[] |


### PermissionsCustomsItem

| Name | Description | Value |
|-|-|-|
| description | Customs permissions description | string |
| name | Customs permissions name | string |


### PermissionsResourceProviderItem

| Name | Description | Value |
|-|-|-|
| permissionsDisplayText | Permission description text | string |
| provider | Provider name | 'Microsoft.Authorization/policyAssignments''Microsoft.OperationalInsights/solutions''Microsoft.OperationalInsights/workspaces''Microsoft.OperationalInsights/workspaces/datasources''Microsoft.OperationalInsights/workspaces/sharedKeys''microsoft.aadiam/diagnosticSettings' |
| providerDisplayName | Permission provider display name | string |
| requiredPermissions | Required permissions for the connector | RequiredPermissions |
| scope | Permission provider scope | 'ResourceGroup''Subscription''Workspace' |


### RequiredPermissions

| Name | Description | Value |
|-|-|-|
| action | action permission | bool |
| delete | delete permission | bool |
| read | read permission | bool |
| write | write permission | bool |


### CodelessUiConnectorConfigPropertiesSampleQueriesItem

| Name | Description | Value |
|-|-|-|
| description | The sample query description | string |
| query | the sample query | string |


### CodelessConnectorPollingConfigProperties

| Name | Description | Value |
|-|-|-|
| auth | Describe the authentication type of the poller | CodelessConnectorPollingAuthProperties(required) |
| isActive | The poller active status | bool |
| paging | Describe the poll request paging config of the poller | CodelessConnectorPollingPagingProperties |
| request | Describe the poll request config parameters of the poller | CodelessConnectorPollingRequestProperties(required) |
| response | Describe the response config parameters of the poller | CodelessConnectorPollingResponseProperties |


### CodelessConnectorPollingAuthProperties

| Name | Description | Value |
|-|-|-|
| apiKeyIdentifier | A prefix send in the header before the actual token | string |
| apiKeyName | The header name which the token is sent with | string |
| authorizationEndpoint | The endpoint used to authorize the user, used in Oauth 2.0 flow | string |
| authorizationEndpointQueryParameters | The query parameters used in authorization request, used in Oauth 2.0 flow | For Bicep, you can use theany()function. |
| authType | The authentication type | string (required) |
| flowName | Describes the flow name, for example 'AuthCode' for Oauth 2.0 | string |
| isApiKeyInPostPayload | Marks if the key should sent in header | string |
| isClientSecretInHeader | Marks if we should send the client secret in header or payload, used in Oauth 2.0 flow | bool |
| redirectionEndpoint | The redirect endpoint where we will get the authorization code, used in Oauth 2.0 flow | string |
| scope | The OAuth token scope | string |
| tokenEndpoint | The endpoint used to issue a token, used in Oauth 2.0 flow | string |
| tokenEndpointHeaders | The query headers used in token request, used in Oauth 2.0 flow | For Bicep, you can use theany()function. |
| tokenEndpointQueryParameters | The query parameters used in token request, used in Oauth 2.0 flow | For Bicep, you can use theany()function. |


### CodelessConnectorPollingPagingProperties

| Name | Description | Value |
|-|-|-|
| nextPageParaName | Defines the name of a next page attribute | string |
| nextPageTokenJsonPath | Defines the path to a next page token JSON | string |
| pageCountAttributePath | Defines the path to a page count attribute | string |
| pageSize | Defines the paging size | int |
| pageSizeParaName | Defines the name of the page size parameter | string |
| pageTimeStampAttributePath | Defines the path to a paging time stamp attribute | string |
| pageTotalCountAttributePath | Defines the path to a page total count attribute | string |
| pagingType | Describes the type. could be 'None', 'PageToken', 'PageCount', 'TimeStamp' | string (required) |
| searchTheLatestTimeStampFromEventsList | Determines whether to search for the latest time stamp in the events list | string |


### CodelessConnectorPollingRequestProperties

| Name | Description | Value |
|-|-|-|
| apiEndpoint | Describe the endpoint we should pull the data from | string (required) |
| endTimeAttributeName | This will be used the query events from the end of the time window | string |
| headers | Describe the headers sent in the poll request | For Bicep, you can use theany()function. |
| httpMethod | The http method type we will use in the poll request, GET or POST | string (required) |
| queryParameters | Describe the query parameters sent in the poll request | For Bicep, you can use theany()function. |
| queryParametersTemplate | For advanced scenarios for example user name/password embedded in nested JSON payload | string |
| queryTimeFormat | The time format will be used the query events in a specific window | string (required) |
| queryWindowInMin | The window interval we will use the pull the data | int (required) |
| rateLimitQps | Defines the rate limit QPS | int |
| retryCount | Describe the amount of time we should try and poll the data in case of failure | int |
| startTimeAttributeName | This will be used the query events from a start of the time window | string |
| timeoutInSeconds | The number of seconds we will consider as a request timeout | int |


### CodelessConnectorPollingResponseProperties

| Name | Description | Value |
|-|-|-|
| eventsJsonPaths | Describes the path we should extract the data in the response | string[] (required) |
| isGzipCompressed | Describes if the data in the response is Gzip | bool |
| successStatusJsonPath | Describes the path we should extract the status code in the response | string |
| successStatusValue | Describes the path we should extract the status value in the response | string |


### AADDataConnector

| Name | Description | Value |
|-|-|-|
| kind | The data connector kind | 'AzureActiveDirectory' (required) |
| properties | AAD (Azure Active Directory) data connector properties. | AADDataConnectorProperties |


### AADDataConnectorProperties

| Name | Description | Value |
|-|-|-|
| dataTypes | The available data types for the connector. | AlertsDataTypeOfDataConnector |
| tenantId | The tenant id to connect to, and get the data from. | string (required) |


### AlertsDataTypeOfDataConnector

| Name | Description | Value |
|-|-|-|
| alerts | Alerts data type connection. | DataConnectorDataTypeCommon(required) |


### DataConnectorDataTypeCommon

| Name | Description | Value |
|-|-|-|
| state | Describe whether this data type connection is enabled or not. | 'Disabled''Enabled' (required) |


### AatpDataConnector

| Name | Description | Value |
|-|-|-|
| kind | The data connector kind | 'AzureAdvancedThreatProtection' (required) |
| properties | AATP (Azure Advanced Threat Protection) data connector properties. | AatpDataConnectorProperties |


### AatpDataConnectorProperties

| Name | Description | Value |
|-|-|-|
| dataTypes | The available data types for the connector. | AlertsDataTypeOfDataConnector |
| tenantId | The tenant id to connect to, and get the data from. | string (required) |


### ASCDataConnector

| Name | Description | Value |
|-|-|-|
| kind | The data connector kind | 'AzureSecurityCenter' (required) |
| properties | ASC (Azure Security Center) data connector properties. | ASCDataConnectorProperties |


### ASCDataConnectorProperties

| Name | Description | Value |
|-|-|-|
| dataTypes | The available data types for the connector. | AlertsDataTypeOfDataConnector |
| subscriptionId | The subscription id to connect to, and get the data from. | string |


### Dynamics365DataConnector

| Name | Description | Value |
|-|-|-|
| kind | The data connector kind | 'Dynamics365' (required) |
| properties | Dynamics365 data connector properties. | Dynamics365DataConnectorProperties |


### Dynamics365DataConnectorProperties

| Name | Description | Value |
|-|-|-|
| dataTypes | The available data types for the connector. | Dynamics365DataConnectorDataTypes(required) |
| tenantId | The tenant id to connect to, and get the data from. | string (required) |


### Dynamics365DataConnectorDataTypes

| Name | Description | Value |
|-|-|-|
| dynamics365CdsActivities | Common Data Service data type connection. | Dynamics365DataConnectorDataTypesDynamics365CdsActiv...(required) |


### Dynamics365DataConnectorDataTypesDynamics365CdsActiv...

| Name | Description | Value |
|-|-|-|
| state | Describe whether this data type connection is enabled or not. | 'Disabled''Enabled' (required) |


### CodelessUiDataConnector

| Name | Description | Value |
|-|-|-|
| kind | The data connector kind | 'GenericUI' (required) |
| properties | Codeless UI data connector properties | CodelessParameters |


### CodelessParameters

| Name | Description | Value |
|-|-|-|
| connectorUiConfig | Config to describe the instructions blade | CodelessUiConnectorConfigProperties |


### IoTDataConnector

| Name | Description | Value |
|-|-|-|
| kind | The data connector kind | 'IOT' (required) |
| properties | IoT data connector properties. | IoTDataConnectorProperties |


### IoTDataConnectorProperties

| Name | Description | Value |
|-|-|-|
| dataTypes | The available data types for the connector. | AlertsDataTypeOfDataConnector |
| subscriptionId | The subscription id to connect to, and get the data from. | string |


### McasDataConnector

| Name | Description | Value |
|-|-|-|
| kind | The data connector kind | 'MicrosoftCloudAppSecurity' (required) |
| properties | MCAS (Microsoft Cloud App Security) data connector properties. | McasDataConnectorProperties |


### McasDataConnectorProperties

| Name | Description | Value |
|-|-|-|
| dataTypes | The available data types for the connector. | McasDataConnectorDataTypes(required) |
| tenantId | The tenant id to connect to, and get the data from. | string (required) |


### McasDataConnectorDataTypes

| Name | Description | Value |
|-|-|-|
| alerts | Alerts data type connection. | DataConnectorDataTypeCommon(required) |
| discoveryLogs | Discovery log data type connection. | DataConnectorDataTypeCommon |


### MdatpDataConnector

| Name | Description | Value |
|-|-|-|
| kind | The data connector kind | 'MicrosoftDefenderAdvancedThreatProtection' (required) |
| properties | MDATP (Microsoft Defender Advanced Threat Protection) data connector properties. | MdatpDataConnectorProperties |


### MdatpDataConnectorProperties

| Name | Description | Value |
|-|-|-|
| dataTypes | The available data types for the connector. | AlertsDataTypeOfDataConnector |
| tenantId | The tenant id to connect to, and get the data from. | string (required) |


### MicrosoftPurviewInformationProtectionDataConnector

| Name | Description | Value |
|-|-|-|
| kind | The data connector kind | 'MicrosoftPurviewInformationProtection' (required) |
| properties | Microsoft Purview Information Protection data connector properties. | MicrosoftPurviewInformationProtectionDataConnectorPr... |


### MicrosoftPurviewInformationProtectionDataConnectorPr...

| Name | Description | Value |
|-|-|-|
| dataTypes | The available data types for the connector. | MicrosoftPurviewInformationProtectionConnectorDataTy...(required) |
| tenantId | The tenant id to connect to, and get the data from. | string (required) |


### MicrosoftPurviewInformationProtectionConnectorDataTy...

| Name | Description | Value |
|-|-|-|
| logs | Logs data type. | MicrosoftPurviewInformationProtectionConnectorDataTy...(required) |


### MicrosoftPurviewInformationProtectionConnectorDataTy...

| Name | Description | Value |
|-|-|-|
| state | Describe whether this data type connection is enabled or not. | 'Disabled''Enabled' (required) |


### MstiDataConnector

| Name | Description | Value |
|-|-|-|
| kind | The data connector kind | 'MicrosoftThreatIntelligence' (required) |
| properties | Microsoft Threat Intelligence data connector properties. | MstiDataConnectorProperties |


### MstiDataConnectorProperties

| Name | Description | Value |
|-|-|-|
| dataTypes | The available data types for the connector. | MstiDataConnectorDataTypes(required) |
| tenantId | The tenant id to connect to, and get the data from. | string (required) |


### MstiDataConnectorDataTypes

| Name | Description | Value |
|-|-|-|
| bingSafetyPhishingURL | Data type for Microsoft Threat Intelligence Platforms data connector. | MstiDataConnectorDataTypesBingSafetyPhishingURL(required) |
| microsoftEmergingThreatFeed | Data type for Microsoft Threat Intelligence Platforms data connector. | MstiDataConnectorDataTypesMicrosoftEmergingThreatFee...(required) |


### MstiDataConnectorDataTypesBingSafetyPhishingURL

| Name | Description | Value |
|-|-|-|
| lookbackPeriod | lookback period | string (required) |
| state | Describe whether this data type connection is enabled or not. | 'Disabled''Enabled' (required) |


### MstiDataConnectorDataTypesMicrosoftEmergingThreatFee...

| Name | Description | Value |
|-|-|-|
| lookbackPeriod | lookback period | string (required) |
| state | Describe whether this data type connection is enabled or not. | 'Disabled''Enabled' (required) |


### MTPDataConnector

| Name | Description | Value |
|-|-|-|
| kind | The data connector kind | 'MicrosoftThreatProtection' (required) |
| properties | MTP (Microsoft Threat Protection) data connector properties. | MTPDataConnectorProperties |


### MTPDataConnectorProperties

| Name | Description | Value |
|-|-|-|
| dataTypes | The available data types for the connector. | MTPDataConnectorDataTypes(required) |
| filteredProviders | The available filtered providers for the connector. | MtpFilteredProviders |
| tenantId | The tenant id to connect to, and get the data from. | string (required) |


### MTPDataConnectorDataTypes

| Name | Description | Value |
|-|-|-|
| alerts | Alerts data type for Microsoft Threat Protection Platforms data connector. | MTPDataConnectorDataTypesAlerts |
| incidents | Incidents data type for Microsoft Threat Protection Platforms data connector. | MTPDataConnectorDataTypesIncidents(required) |


### MTPDataConnectorDataTypesAlerts

| Name | Description | Value |
|-|-|-|
| state | Describe whether this data type connection is enabled or not. | 'Disabled''Enabled' (required) |


### MTPDataConnectorDataTypesIncidents

| Name | Description | Value |
|-|-|-|
| state | Describe whether this data type connection is enabled or not. | 'Disabled''Enabled' (required) |


### MtpFilteredProviders

| Name | Description | Value |
|-|-|-|
| alerts | Alerts filtered providers. When filters are not applied, all alerts will stream through the MTP pipeline, still in private preview for all products EXCEPT MDA and MDI, which are in GA state. | String array containing any of:'microsoftDefenderForCloudApps''microsoftDefenderForIdentity' (required) |


### OfficeDataConnector

| Name | Description | Value |
|-|-|-|
| kind | The data connector kind | 'Office365' (required) |
| properties | Office data connector properties. | OfficeDataConnectorProperties |


### OfficeDataConnectorProperties

| Name | Description | Value |
|-|-|-|
| dataTypes | The available data types for the connector. | OfficeDataConnectorDataTypes(required) |
| tenantId | The tenant id to connect to, and get the data from. | string (required) |


### OfficeDataConnectorDataTypes

| Name | Description | Value |
|-|-|-|
| exchange | Exchange data type connection. | OfficeDataConnectorDataTypesExchange(required) |
| sharePoint | SharePoint data type connection. | OfficeDataConnectorDataTypesSharePoint(required) |
| teams | Teams data type connection. | OfficeDataConnectorDataTypesTeams(required) |


### OfficeDataConnectorDataTypesExchange

| Name | Description | Value |
|-|-|-|
| state | Describe whether this data type connection is enabled or not. | 'Disabled''Enabled' (required) |


### OfficeDataConnectorDataTypesSharePoint

| Name | Description | Value |
|-|-|-|
| state | Describe whether this data type connection is enabled or not. | 'Disabled''Enabled' (required) |


### OfficeDataConnectorDataTypesTeams

| Name | Description | Value |
|-|-|-|
| state | Describe whether this data type connection is enabled or not. | 'Disabled''Enabled' (required) |


### Office365ProjectDataConnector

| Name | Description | Value |
|-|-|-|
| kind | The data connector kind | 'Office365Project' (required) |
| properties | Office Microsoft Project data connector properties. | Office365ProjectDataConnectorProperties |


### Office365ProjectDataConnectorProperties

| Name | Description | Value |
|-|-|-|
| dataTypes | The available data types for the connector. | Office365ProjectConnectorDataTypes(required) |
| tenantId | The tenant id to connect to, and get the data from. | string (required) |


### Office365ProjectConnectorDataTypes

| Name | Description | Value |
|-|-|-|
| logs | Logs data type. | Office365ProjectConnectorDataTypesLogs(required) |


### Office365ProjectConnectorDataTypesLogs

| Name | Description | Value |
|-|-|-|
| state | Describe whether this data type connection is enabled or not. | 'Disabled''Enabled' (required) |


### OfficeATPDataConnector

| Name | Description | Value |
|-|-|-|
| kind | The data connector kind | 'OfficeATP' (required) |
| properties | OfficeATP (Office 365 Advanced Threat Protection) data connector properties. | OfficeATPDataConnectorProperties |


### OfficeATPDataConnectorProperties

| Name | Description | Value |
|-|-|-|
| dataTypes | The available data types for the connector. | AlertsDataTypeOfDataConnector |
| tenantId | The tenant id to connect to, and get the data from. | string (required) |


### OfficeIRMDataConnector

| Name | Description | Value |
|-|-|-|
| kind | The data connector kind | 'OfficeIRM' (required) |
| properties | OfficeIRM (Microsoft Insider Risk Management) data connector properties. | OfficeIRMDataConnectorProperties |


### OfficeIRMDataConnectorProperties

| Name | Description | Value |
|-|-|-|
| dataTypes | The available data types for the connector. | AlertsDataTypeOfDataConnector |
| tenantId | The tenant id to connect to, and get the data from. | string (required) |


### OfficePowerBIDataConnector

| Name | Description | Value |
|-|-|-|
| kind | The data connector kind | 'OfficePowerBI' (required) |
| properties | Office Microsoft PowerBI data connector properties. | OfficePowerBIDataConnectorProperties |


### OfficePowerBIDataConnectorProperties

| Name | Description | Value |
|-|-|-|
| dataTypes | The available data types for the connector. | OfficePowerBIConnectorDataTypes(required) |
| tenantId | The tenant id to connect to, and get the data from. | string (required) |


### OfficePowerBIConnectorDataTypes

| Name | Description | Value |
|-|-|-|
| logs | Logs data type. | OfficePowerBIConnectorDataTypesLogs(required) |


### OfficePowerBIConnectorDataTypesLogs

| Name | Description | Value |
|-|-|-|
| state | Describe whether this data type connection is enabled or not. | 'Disabled''Enabled' (required) |


### TIDataConnector

| Name | Description | Value |
|-|-|-|
| kind | The data connector kind | 'ThreatIntelligence' (required) |
| properties | TI (Threat Intelligence) data connector properties. | TIDataConnectorProperties |


### TIDataConnectorProperties

| Name | Description | Value |
|-|-|-|
| dataTypes | The available data types for the connector. | TIDataConnectorDataTypes(required) |
| tenantId | The tenant id to connect to, and get the data from. | string (required) |
| tipLookbackPeriod | The lookback period for the feed to be imported. | string |


### TIDataConnectorDataTypes

| Name | Description | Value |
|-|-|-|
| indicators | Data type for indicators connection. | TIDataConnectorDataTypesIndicators(required) |


### TIDataConnectorDataTypesIndicators

| Name | Description | Value |
|-|-|-|
| state | Describe whether this data type connection is enabled or not. | 'Disabled''Enabled' (required) |


### TiTaxiiDataConnector

| Name | Description | Value |
|-|-|-|
| kind | The data connector kind | 'ThreatIntelligenceTaxii' (required) |
| properties | Threat intelligence TAXII data connector properties. | TiTaxiiDataConnectorProperties |


### TiTaxiiDataConnectorProperties

| Name | Description | Value |
|-|-|-|
| collectionId | The collection id of the TAXII server. | string |
| dataTypes | The available data types for Threat Intelligence TAXII data connector. | TiTaxiiDataConnectorDataTypes(required) |
| friendlyName | The friendly name for the TAXII server. | string |
| password | The password for the TAXII server. | string |
| pollingFrequency | The polling frequency for the TAXII server. | 'OnceADay''OnceAMinute''OnceAnHour' (required) |
| taxiiLookbackPeriod | The lookback period for the TAXII server. | string |
| taxiiServer | The API root for the TAXII server. | string |
| tenantId | The tenant id to connect to, and get the data from. | string (required) |
| userName | The userName for the TAXII server. | string |
| workspaceId | The workspace id. | string |


### TiTaxiiDataConnectorDataTypes

| Name | Description | Value |
|-|-|-|
| taxiiClient | Data type for TAXII connector. | TiTaxiiDataConnectorDataTypesTaxiiClient(required) |


### TiTaxiiDataConnectorDataTypesTaxiiClient

| Name | Description | Value |
|-|-|-|
| state | Describe whether this data type connection is enabled or not. | 'Disabled''Enabled' (required) |


