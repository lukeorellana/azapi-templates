import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SecurityinsightsDataconnectorsProps extends IAzAPIBaseProps {
/**
   * Set the object type
   */
readonly kind: AmazonWebServicesCloudTrailAmazonWebServicesS3APIPollingAzureActiveDirectoryAzureAdvancedThreatProtectionAzureSecurityCenterDynamics365GenericUIIOTMicrosoftCloudAppSecurityMicrosoftDefenderAdvancedThreatProtectionMicrosoftPurviewInformationProtectionMicrosoftThreatIntelligenceMicrosoftThreatProtectionOffice365Office365ProjectOfficeATPOfficeIRMOfficePowerBIThreatIntelligenceThreatIntelligenceTaxii;

/**
   * Use when creating an extension resource at a scope that is different than the deployment scope.
   */
readonly scope?: Target resourceFor Bicep, set this property to the symbolic name of the resource to apply theextension resource.;

/**
   * Etag of the azure resource
   */
readonly etag?: string;

/**
   * The data connector kind
   */
readonly kind: 'AmazonWebServicesCloudTrail';

/**
   * The available data types for the connector.
   */
readonly dataTypes: AwsCloudTrailDataConnectorDataTypes;

/**
   * Logs data type.
   */
readonly logs: AwsCloudTrailDataConnectorDataTypesLogs;

/**
   * Describe whether this data type connection is enabled or not.
   */
readonly state: 'Disabled''Enabled';

/**
   * The data connector kind
   */
readonly kind: 'AmazonWebServicesS3';

/**
   * The available data types for the connector.
   */
readonly dataTypes: AwsS3DataConnectorDataTypes;

/**
   * The logs destination table name in LogAnalytics.
   */
readonly destinationTable: string;

/**
   * The Aws Role Arn that is used to access the Aws account.
   */
readonly roleArn: string;

/**
   * The AWS sqs urls for the connector.
   */
readonly sqsUrls: string[];

/**
   * Logs data type.
   */
readonly logs: AwsS3DataConnectorDataTypesLogs;

/**
   * Describe whether this data type connection is enabled or not.
   */
readonly state: 'Disabled''Enabled';

/**
   * The data connector kind
   */
readonly kind: 'APIPolling';

/**
   * Config to describe the instructions blade
   */
readonly connectorUiConfig?: CodelessUiConnectorConfigProperties;

/**
   * Config to describe the polling instructions
   */
readonly pollingConfig?: CodelessConnectorPollingConfigProperties;

/**
   * Connector Availability Status
   */
readonly availability: Availability;

/**
   * Define the way the connector check connectivity
   */
readonly connectivityCriteria: CodelessUiConnectorConfigPropertiesConnectivityCrite...[];

/**
   * An optional custom image to be used when displaying the connector within Azure Sentinel's connector's gallery
   */
readonly customImage?: string;

/**
   * Data types to check for last data received
   */
readonly dataTypes: CodelessUiConnectorConfigPropertiesDataTypesItem[];

/**
   * Connector description
   */
readonly descriptionMarkdown: string;

/**
   * The graph query to show the current data status
   */
readonly graphQueries: CodelessUiConnectorConfigPropertiesGraphQueriesItem[];

/**
   * Name of the table the connector will insert the data to
   */
readonly graphQueriesTableName: string;

/**
   * Instruction steps to enable the connector
   */
readonly instructionSteps: CodelessUiConnectorConfigPropertiesInstructionStepsI...[];

/**
   * Permissions required for the connector
   */
readonly permissions: Permissions;

/**
   * Connector publisher name
   */
readonly publisher: string;

/**
   * The sample queries for the connector
   */
readonly sampleQueries: CodelessUiConnectorConfigPropertiesSampleQueriesItem[];

/**
   * Connector blade title
   */
readonly title: string;

/**
   * Set connector as preview
   */
readonly isPreview?: bool;

/**
   * The connector Availability Status
   */
readonly status?: '1';

/**
   * type of connectivity
   */
readonly type?: 'IsConnectedQuery';

/**
   * Queries for checking connectivity
   */
readonly value?: string[];

/**
   * Query for indicate last data received
   */
readonly lastDataReceivedQuery?: string;

/**
   * The base query for the graph
   */
readonly baseQuery?: string;

/**
   * The legend for the graph
   */
readonly legend?: string;

/**
   * the metric that the query is checking
   */
readonly metricName?: string;

/**
   * Instruction step description
   */
readonly description?: string;

/**
   * Instruction step details
   */
readonly instructions?: InstructionStepsInstructionsItem[];

/**
   * Instruction step title
   */
readonly title?: string;

/**
   * The parameters for the setting
   */
readonly parameters?: For Bicep, you can use theany()function.;

/**
   * The kind of the setting
   */
readonly type: 'CopyableLabel''InfoMessage''InstructionStepsGroup';

/**
   * Customs permissions required for the connector
   */
readonly customs?: PermissionsCustomsItem[];

/**
   * Resource provider permissions required for the connector
   */
readonly resourceProvider?: PermissionsResourceProviderItem[];

/**
   * Customs permissions description
   */
readonly description?: string;

/**
   * Permission description text
   */
readonly permissionsDisplayText?: string;

/**
   * Provider name
   */
readonly provider?: 'Microsoft.Authorization/policyAssignments''Microsoft.OperationalInsights/solutions''Microsoft.OperationalInsights/workspaces''Microsoft.OperationalInsights/workspaces/datasources''Microsoft.OperationalInsights/workspaces/sharedKeys''microsoft.aadiam/diagnosticSettings';

/**
   * Permission provider display name
   */
readonly providerDisplayName?: string;

/**
   * Required permissions for the connector
   */
readonly requiredPermissions?: RequiredPermissions;

/**
   * Permission provider scope
   */
readonly scope?: 'ResourceGroup''Subscription''Workspace';

/**
   * action permission
   */
readonly action?: bool;

/**
   * delete permission
   */
readonly delete?: bool;

/**
   * read permission
   */
readonly read?: bool;

/**
   * write permission
   */
readonly write?: bool;

/**
   * The sample query description
   */
readonly description?: string;

/**
   * the sample query
   */
readonly query?: string;

/**
   * Describe the authentication type of the poller
   */
readonly auth: CodelessConnectorPollingAuthProperties;

/**
   * The poller active status
   */
readonly isActive?: bool;

/**
   * Describe the poll request paging config of the poller
   */
readonly paging?: CodelessConnectorPollingPagingProperties;

/**
   * Describe the poll request config parameters of the poller
   */
readonly request: CodelessConnectorPollingRequestProperties;

/**
   * Describe the response config parameters of the poller
   */
readonly response?: CodelessConnectorPollingResponseProperties;

/**
   * A prefix send in the header before the actual token
   */
readonly apiKeyIdentifier?: string;

/**
   * The header name which the token is sent with
   */
readonly apiKeyName?: string;

/**
   * The endpoint used to authorize the user, used in Oauth 2.0 flow
   */
readonly authorizationEndpoint?: string;

/**
   * The query parameters used in authorization request, used in Oauth 2.0 flow
   */
readonly authorizationEndpointQueryParameters?: For Bicep, you can use theany()function.;

/**
   * The authentication type
   */
readonly authType: string;

/**
   * Describes the flow name, for example 'AuthCode' for Oauth 2.0
   */
readonly flowName?: string;

/**
   * Marks if the key should sent in header
   */
readonly isApiKeyInPostPayload?: string;

/**
   * Marks if we should send the client secret in header or payload, used in Oauth 2.0 flow
   */
readonly isClientSecretInHeader?: bool;

/**
   * The redirect endpoint where we will get the authorization code, used in Oauth 2.0 flow
   */
readonly redirectionEndpoint?: string;

/**
   * The OAuth token scope
   */
readonly scope?: string;

/**
   * The endpoint used to issue a token, used in Oauth 2.0 flow
   */
readonly tokenEndpoint?: string;

/**
   * The query headers used in token request, used in Oauth 2.0 flow
   */
readonly tokenEndpointHeaders?: For Bicep, you can use theany()function.;

/**
   * The query parameters used in token request, used in Oauth 2.0 flow
   */
readonly tokenEndpointQueryParameters?: For Bicep, you can use theany()function.;

/**
   * Defines the name of a next page attribute
   */
readonly nextPageParaName?: string;

/**
   * Defines the path to a next page token JSON
   */
readonly nextPageTokenJsonPath?: string;

/**
   * Defines the path to a page count attribute
   */
readonly pageCountAttributePath?: string;

/**
   * Defines the paging size
   */
readonly pageSize?: number;

/**
   * Defines the name of the page size parameter
   */
readonly pageSizeParaName?: string;

/**
   * Defines the path to a paging time stamp attribute
   */
readonly pageTimeStampAttributePath?: string;

/**
   * Defines the path to a page total count attribute
   */
readonly pageTotalCountAttributePath?: string;

/**
   * Describes the type. could be 'None', 'PageToken', 'PageCount', 'TimeStamp'
   */
readonly pagingType: string;

/**
   * Determines whether to search for the latest time stamp in the events list
   */
readonly searchTheLatestTimeStampFromEventsList?: string;

/**
   * Describe the endpoint we should pull the data from
   */
readonly apiEndpoint: string;

/**
   * This will be used the query events from the end of the time window
   */
readonly endTimeAttributeName?: string;

/**
   * Describe the headers sent in the poll request
   */
readonly headers?: For Bicep, you can use theany()function.;

/**
   * The http method type we will use in the poll request, GET or POST
   */
readonly httpMethod: string;

/**
   * Describe the query parameters sent in the poll request
   */
readonly queryParameters?: For Bicep, you can use theany()function.;

/**
   * For advanced scenarios for example user name/password embedded in nested JSON payload
   */
readonly queryParametersTemplate?: string;

/**
   * The time format will be used the query events in a specific window
   */
readonly queryTimeFormat: string;

/**
   * The window interval we will use the pull the data
   */
readonly queryWindowInMin: number;

/**
   * Defines the rate limit QPS
   */
readonly rateLimitQps?: number;

/**
   * Describe the amount of time we should try and poll the data in case of failure
   */
readonly retryCount?: number;

/**
   * This will be used the query events from a start of the time window
   */
readonly startTimeAttributeName?: string;

/**
   * The number of seconds we will consider as a request timeout
   */
readonly timeoutInSeconds?: number;

/**
   * Describes the path we should extract the data in the response
   */
readonly eventsJsonPaths: string[];

/**
   * Describes if the data in the response is Gzip
   */
readonly isGzipCompressed?: bool;

/**
   * Describes the path we should extract the status code in the response
   */
readonly successStatusJsonPath?: string;

/**
   * Describes the path we should extract the status value in the response
   */
readonly successStatusValue?: string;

/**
   * The data connector kind
   */
readonly kind: 'AzureActiveDirectory';

/**
   * The available data types for the connector.
   */
readonly dataTypes?: AlertsDataTypeOfDataConnector;

/**
   * The tenant id to connect to, and get the data from.
   */
readonly tenantId: string;

/**
   * Alerts data type connection.
   */
readonly alerts: DataConnectorDataTypeCommon;

/**
   * Describe whether this data type connection is enabled or not.
   */
readonly state: 'Disabled''Enabled';

/**
   * The data connector kind
   */
readonly kind: 'AzureAdvancedThreatProtection';

/**
   * The available data types for the connector.
   */
readonly dataTypes?: AlertsDataTypeOfDataConnector;

/**
   * The tenant id to connect to, and get the data from.
   */
readonly tenantId: string;

/**
   * The data connector kind
   */
readonly kind: 'AzureSecurityCenter';

/**
   * The available data types for the connector.
   */
readonly dataTypes?: AlertsDataTypeOfDataConnector;

/**
   * The subscription id to connect to, and get the data from.
   */
readonly subscriptionId?: string;

/**
   * The data connector kind
   */
readonly kind: 'Dynamics365';

/**
   * The available data types for the connector.
   */
readonly dataTypes: Dynamics365DataConnectorDataTypes;

/**
   * The tenant id to connect to, and get the data from.
   */
readonly tenantId: string;

/**
   * Common Data Service data type connection.
   */
readonly dynamics365CdsActivities: Dynamics365DataConnectorDataTypesDynamics365CdsActiv...;

/**
   * Describe whether this data type connection is enabled or not.
   */
readonly state: 'Disabled''Enabled';

/**
   * The data connector kind
   */
readonly kind: 'GenericUI';

/**
   * Config to describe the instructions blade
   */
readonly connectorUiConfig?: CodelessUiConnectorConfigProperties;

/**
   * The data connector kind
   */
readonly kind: 'IOT';

/**
   * The available data types for the connector.
   */
readonly dataTypes?: AlertsDataTypeOfDataConnector;

/**
   * The subscription id to connect to, and get the data from.
   */
readonly subscriptionId?: string;

/**
   * The data connector kind
   */
readonly kind: 'MicrosoftCloudAppSecurity';

/**
   * The available data types for the connector.
   */
readonly dataTypes: McasDataConnectorDataTypes;

/**
   * The tenant id to connect to, and get the data from.
   */
readonly tenantId: string;

/**
   * Alerts data type connection.
   */
readonly alerts: DataConnectorDataTypeCommon;

/**
   * Discovery log data type connection.
   */
readonly discoveryLogs?: DataConnectorDataTypeCommon;

/**
   * The data connector kind
   */
readonly kind: 'MicrosoftDefenderAdvancedThreatProtection';

/**
   * The available data types for the connector.
   */
readonly dataTypes?: AlertsDataTypeOfDataConnector;

/**
   * The tenant id to connect to, and get the data from.
   */
readonly tenantId: string;

/**
   * The data connector kind
   */
readonly kind: 'MicrosoftPurviewInformationProtection';

/**
   * The available data types for the connector.
   */
readonly dataTypes: MicrosoftPurviewInformationProtectionConnectorDataTy...;

/**
   * The tenant id to connect to, and get the data from.
   */
readonly tenantId: string;

/**
   * Logs data type.
   */
readonly logs: MicrosoftPurviewInformationProtectionConnectorDataTy...;

/**
   * Describe whether this data type connection is enabled or not.
   */
readonly state: 'Disabled''Enabled';

/**
   * The data connector kind
   */
readonly kind: 'MicrosoftThreatIntelligence';

/**
   * The available data types for the connector.
   */
readonly dataTypes: MstiDataConnectorDataTypes;

/**
   * The tenant id to connect to, and get the data from.
   */
readonly tenantId: string;

/**
   * Data type for Microsoft Threat Intelligence Platforms data connector.
   */
readonly bingSafetyPhishingURL: MstiDataConnectorDataTypesBingSafetyPhishingURL;

/**
   * Data type for Microsoft Threat Intelligence Platforms data connector.
   */
readonly microsoftEmergingThreatFeed: MstiDataConnectorDataTypesMicrosoftEmergingThreatFee...;

/**
   * lookback period
   */
readonly lookbackPeriod: string;

/**
   * Describe whether this data type connection is enabled or not.
   */
readonly state: 'Disabled''Enabled';

/**
   * lookback period
   */
readonly lookbackPeriod: string;

/**
   * Describe whether this data type connection is enabled or not.
   */
readonly state: 'Disabled''Enabled';

/**
   * The data connector kind
   */
readonly kind: 'MicrosoftThreatProtection';

/**
   * The available data types for the connector.
   */
readonly dataTypes: MTPDataConnectorDataTypes;

/**
   * The available filtered providers for the connector.
   */
readonly filteredProviders?: MtpFilteredProviders;

/**
   * The tenant id to connect to, and get the data from.
   */
readonly tenantId: string;

/**
   * Alerts data type for Microsoft Threat Protection Platforms data connector.
   */
readonly alerts?: MTPDataConnectorDataTypesAlerts;

/**
   * Incidents data type for Microsoft Threat Protection Platforms data connector.
   */
readonly incidents: MTPDataConnectorDataTypesIncidents;

/**
   * Describe whether this data type connection is enabled or not.
   */
readonly state: 'Disabled''Enabled';

/**
   * Describe whether this data type connection is enabled or not.
   */
readonly state: 'Disabled''Enabled';

/**
   * Alerts filtered providers. When filters are not applied, all alerts will stream through the MTP pipeline, still in private preview for all products EXCEPT MDA and MDI, which are in GA state.
   */
readonly alerts: String array containing any of:'microsoftDefenderForCloudApps''microsoftDefenderForIdentity';

/**
   * The data connector kind
   */
readonly kind: 'Office365';

/**
   * The available data types for the connector.
   */
readonly dataTypes: OfficeDataConnectorDataTypes;

/**
   * The tenant id to connect to, and get the data from.
   */
readonly tenantId: string;

/**
   * Exchange data type connection.
   */
readonly exchange: OfficeDataConnectorDataTypesExchange;

/**
   * SharePoint data type connection.
   */
readonly sharePoint: OfficeDataConnectorDataTypesSharePonumber;

/**
   * Teams data type connection.
   */
readonly teams: OfficeDataConnectorDataTypesTeams;

/**
   * Describe whether this data type connection is enabled or not.
   */
readonly state: 'Disabled''Enabled';

/**
   * Describe whether this data type connection is enabled or not.
   */
readonly state: 'Disabled''Enabled';

/**
   * Describe whether this data type connection is enabled or not.
   */
readonly state: 'Disabled''Enabled';

/**
   * The data connector kind
   */
readonly kind: 'Office365Project';

/**
   * The available data types for the connector.
   */
readonly dataTypes: Office365ProjectConnectorDataTypes;

/**
   * The tenant id to connect to, and get the data from.
   */
readonly tenantId: string;

/**
   * Logs data type.
   */
readonly logs: Office365ProjectConnectorDataTypesLogs;

/**
   * Describe whether this data type connection is enabled or not.
   */
readonly state: 'Disabled''Enabled';

/**
   * The data connector kind
   */
readonly kind: 'OfficeATP';

/**
   * The available data types for the connector.
   */
readonly dataTypes?: AlertsDataTypeOfDataConnector;

/**
   * The tenant id to connect to, and get the data from.
   */
readonly tenantId: string;

/**
   * The data connector kind
   */
readonly kind: 'OfficeIRM';

/**
   * The available data types for the connector.
   */
readonly dataTypes?: AlertsDataTypeOfDataConnector;

/**
   * The tenant id to connect to, and get the data from.
   */
readonly tenantId: string;

/**
   * The data connector kind
   */
readonly kind: 'OfficePowerBI';

/**
   * The available data types for the connector.
   */
readonly dataTypes: OfficePowerBIConnectorDataTypes;

/**
   * The tenant id to connect to, and get the data from.
   */
readonly tenantId: string;

/**
   * Logs data type.
   */
readonly logs: OfficePowerBIConnectorDataTypesLogs;

/**
   * Describe whether this data type connection is enabled or not.
   */
readonly state: 'Disabled''Enabled';

/**
   * The data connector kind
   */
readonly kind: 'ThreatIntelligence';

/**
   * The available data types for the connector.
   */
readonly dataTypes: TIDataConnectorDataTypes;

/**
   * The tenant id to connect to, and get the data from.
   */
readonly tenantId: string;

/**
   * The lookback period for the feed to be imported.
   */
readonly tipLookbackPeriod?: string;

/**
   * Data type for indicators connection.
   */
readonly indicators: TIDataConnectorDataTypesIndicators;

/**
   * Describe whether this data type connection is enabled or not.
   */
readonly state: 'Disabled''Enabled';

/**
   * The data connector kind
   */
readonly kind: 'ThreatIntelligenceTaxii';

/**
   * The collection id of the TAXII server.
   */
readonly collectionId?: string;

/**
   * The available data types for Threat Intelligence TAXII data connector.
   */
readonly dataTypes: TiTaxiiDataConnectorDataTypes;

/**
   * The friendly name for the TAXII server.
   */
readonly friendlyName?: string;

/**
   * The password for the TAXII server.
   */
readonly password?: string;

/**
   * The polling frequency for the TAXII server.
   */
readonly pollingFrequency: 'OnceADay''OnceAMinute''OnceAnHour';

/**
   * The lookback period for the TAXII server.
   */
readonly taxiiLookbackPeriod?: string;

/**
   * The API root for the TAXII server.
   */
readonly taxiiServer?: string;

/**
   * The tenant id to connect to, and get the data from.
   */
readonly tenantId: string;

/**
   * The userName for the TAXII server.
   */
readonly userName?: string;

/**
   * The workspace id.
   */
readonly workspaceId?: string;

/**
   * Data type for TAXII connector.
   */
readonly taxiiClient: TiTaxiiDataConnectorDataTypesTaxiiClient;

/**
   * Describe whether this data type connection is enabled or not.
   */
readonly state: 'Disabled''Enabled';
}

/**
 * SecurityinsightsDataconnectors resource
 */
export class SecurityinsightsDataconnectors extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SecurityinsightsDataconnectorsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.SecurityInsights/dataConnectors@2023-02-01-preview";
  }

  protected getResourceBody(props: SecurityinsightsDataconnectorsProps): string {
    return JSON.stringify(
        {kind: "string", etag: "string"}
    );
  }
}
