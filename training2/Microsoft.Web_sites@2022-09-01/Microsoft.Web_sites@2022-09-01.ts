import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface WebSitesProps extends IAzAPIBaseProps {
/**
   * Kind of resource.
   */
readonly kind?: string;

/**
   * Extended Location.
   */
readonly extendedLocation?: ExtendedLocation;

/**
   * Managed service identity.
   */
readonly identity?: ManagedServiceIdentity;

/**
   * Type of managed service identity.
   */
readonly type?: 'None''SystemAssigned''SystemAssigned, UserAssigned''UserAssigned';

/**
   * The list of user assigned identities associated with the resource. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}
   */
readonly userAssignedIdentities?: object;

/**
   * trueto enable client affinity;falseto stop sending session affinity cookies, which route client requests in the same session to the same instance. Default istrue.
   */
readonly clientAffinityEnabled?: bool;

/**
   * trueto enable client certificate authentication (TLS mutual authentication); otherwise,false. Default isfalse.
   */
readonly clientCertEnabled?: bool;

/**
   * client certificate authentication comma-separated exclusion paths
   */
readonly clientCertExclusionPaths?: string;

/**
   * This composes with ClientCertEnabled setting.- ClientCertEnabled: false means ClientCert is ignored.- ClientCertEnabled: true and ClientCertMode: Required means ClientCert is required.- ClientCertEnabled: true and ClientCertMode: Optional means ClientCert is optional or accepted.
   */
readonly clientCertMode?: 'Optional''OptionalInteractiveUser''Required';

/**
   * If specified during app creation, the app is cloned from a source app.
   */
readonly cloningInfo?: CloningInfo;

/**
   * Size of the function container.
   */
readonly containerSize?: number;

/**
   * Unique identifier that verifies the custom domains assigned to the app. Customer will add this id to a txt record for verification.
   */
readonly customDomainVerificationId?: string;

/**
   * Maximum allowed daily memory-time quota (applicable on dynamic apps only).
   */
readonly dailyMemoryTimeQuota?: number;

/**
   * trueif the app is enabled; otherwise,false. Setting this value to false disables the app (takes the app offline).
   */
readonly enabled?: bool;

/**
   * App Service Environment to use for the app.
   */
readonly hostingEnvironmentProfile?: HostingEnvironmentProfile;

/**
   * trueto disable the public hostnames of the app; otherwise,false.Iftrue, the app is only accessible via API management process.
   */
readonly hostNamesDisabled?: bool;

/**
   * Hostname SSL states are used to manage the SSL bindings for app's hostnames.
   */
readonly hostNameSslStates?: HostNameSslState[];

/**
   * HttpsOnly: configures a web site to accept only https requests. Issues redirect forhttp requests
   */
readonly httpsOnly?: bool;

/**
   * Hyper-V sandbox.
   */
readonly hyperV?: bool;

/**
   * Obsolete: Hyper-V sandbox.
   */
readonly isXenon?: bool;

/**
   * Identity to use for Key Vault Reference authentication.
   */
readonly keyVaultReferenceIdentity?: string;

/**
   * Azure Resource Manager ID of the customer's selected Managed Environment on which to host this app. This must be of the form /subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.App/managedEnvironments/{managedEnvironmentName}
   */
readonly managedEnvironmentId?: string;

/**
   * Property to allow or block all public traffic. Allowed Values: 'Enabled', 'Disabled' or an empty string.
   */
readonly publicNetworkAccess?: string;

/**
   * Site redundancy mode
   */
readonly redundancyMode?: 'ActiveActive''Failover''GeoRedundant''Manual''None';

/**
   * trueif reserved; otherwise,false.
   */
readonly reserved?: bool;

/**
   * trueto stop SCM (KUDU) site when the app is stopped; otherwise,false. The default isfalse.
   */
readonly scmSiteAlsoStopped?: bool;

/**
   * Resource ID of the associated App Service plan, formatted as: "/subscriptions/{subscriptionID}/resourceGroups/{groupName}/providers/Microsoft.Web/serverfarms/{appServicePlanName}".
   */
readonly serverFarmId?: string;

/**
   * Configuration of the app.
   */
readonly siteConfig?: SiteConfig;

/**
   * Checks if Customer provided storage account is required
   */
readonly storageAccountRequired?: bool;

/**
   * Azure Resource Manager ID of the Virtual network and subnet to be joined by Regional VNET Integration.This must be of the form /subscriptions/{subscriptionName}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualNetworks/{vnetName}/subnets/{subnetName}
   */
readonly virtualNetworkSubnetId?: string;

/**
   * To enable accessing content over virtual network
   */
readonly vnetContentShareEnabled?: bool;

/**
   * To enable pulling image over Virtual Network
   */
readonly vnetImagePullEnabled?: bool;

/**
   * Virtual Network Route All enabled. This causes all outbound traffic to have Virtual Network Security Groups and User Defined Routes applied.
   */
readonly vnetRouteAllEnabled?: bool;

/**
   * Application setting overrides for cloned app. If specified, these settings override the settings clonedfrom source app. Otherwise, application settings from source app are retained.
   */
readonly appSettingsOverrides?: object;

/**
   * trueto clone custom hostnames from source app; otherwise,false.
   */
readonly cloneCustomHostNames?: bool;

/**
   * trueto clone source control from source app; otherwise,false.
   */
readonly cloneSourceControl?: bool;

/**
   * trueto configure load balancing for source and destination app.
   */
readonly configureLoadBalancing?: bool;

/**
   * Correlation ID of cloning operation. This ID ties multiple cloning operationstogether to use the same snapshot.
   */
readonly correlationId?: string;

/**
   * App Service Environment.
   */
readonly hostingEnvironment?: string;

/**
   * trueto overwrite destination app; otherwise,false.
   */
readonly overwrite?: bool;

/**
   * ARM resource ID of the source app. App resource ID is of the form/subscriptions/{subId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{siteName} for production slots and/subscriptions/{subId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{siteName}/slots/{slotName} for other slots.
   */
readonly sourceWebAppId: string;

/**
   * Location of source app ex: West US or North Europe
   */
readonly sourceWebAppLocation?: string;

/**
   * ARM resource ID of the Traffic Manager profile to use, if it exists. Traffic Manager resource ID is of the form/subscriptions/{subId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/trafficManagerProfiles/{profileName}.
   */
readonly trafficManagerProfileId?: string;

/**
   * Name of Traffic Manager profile to create. This is only needed if Traffic Manager profile does not already exist.
   */
readonly trafficManagerProfileName?: string;

/**
   * Resource ID of the App Service Environment.
   */
readonly id?: string;

/**
   * Indicates whether the hostname is a standard or repository hostname.
   */
readonly hostType?: 'Repository''Standard';

/**
   * SSL type.
   */
readonly sslState?: 'Disabled''IpBasedEnabled''SniEnabled';

/**
   * SSL certificate thumbprint.
   */
readonly thumbprint?: string;

/**
   * Set totrueto update existing hostname.
   */
readonly toUpdate?: bool;

/**
   * Virtual IP address assigned to the hostname if IP based SSL is enabled.
   */
readonly virtualIP?: string;

/**
   * Flag to use Managed Identity Creds for ACR pull
   */
readonly acrUseManagedIdentityCreds?: bool;

/**
   * If using user managed identity, the user managed identity ClientId
   */
readonly acrUserManagedIdentityID?: string;

/**
   * trueif Always On is enabled; otherwise,false.
   */
readonly alwaysOn?: bool;

/**
   * Information about the formal API definition for the app.
   */
readonly apiDefinition?: ApiDefinitionInfo;

/**
   * Azure API management settings linked to the app.
   */
readonly apiManagementConfig?: ApiManagementConfig;

/**
   * App command line to launch.
   */
readonly appCommandLine?: string;

/**
   * Application settings.
   */
readonly appSettings?: NameValuePair[];

/**
   * trueif Auto Heal is enabled; otherwise,false.
   */
readonly autoHealEnabled?: bool;

/**
   * Auto Heal rules.
   */
readonly autoHealRules?: AutoHealRules;

/**
   * Auto-swap slot name.
   */
readonly autoSwapSlotName?: string;

/**
   * List of Azure Storage Accounts.
   */
readonly azureStorageAccounts?: object;

/**
   * Connection strings.
   */
readonly connectionStrings?: ConnStringInfo[];

/**
   * Cross-Origin Resource Sharing (CORS) settings.
   */
readonly cors?: CorsSettings;

/**
   * Default documents.
   */
readonly defaultDocuments?: string[];

/**
   * trueif detailed error logging is enabled; otherwise,false.
   */
readonly detailedErrorLoggingEnabled?: bool;

/**
   * Document root.
   */
readonly documentRoot?: string;

/**
   * Maximum number of workers that a site can scale out to.This setting only applies to apps in plans where ElasticScaleEnabled istrue
   */
readonly elasticWebAppScaleLimit?: number;

/**
   * This is work around for polymorphic types.
   */
readonly experiments?: Experiments;

/**
   * State of FTP / FTPS service
   */
readonly ftpsState?: 'AllAllowed''Disabled''FtpsOnly';

/**
   * Maximum number of workers that a site can scale out to.This setting only applies to the Consumption and Elastic Premium Plans
   */
readonly functionAppScaleLimit?: number;

/**
   * Gets or sets a value indicating whether functions runtime scale monitoring is enabled. When enabled,the ScaleController will not monitor event sources directly, but will instead call to theruntime to get scale status.
   */
readonly functionsRuntimeScaleMonitoringEnabled?: bool;

/**
   * Handler mappings.
   */
readonly handlerMappings?: HandlerMapping[];

/**
   * Health check path
   */
readonly healthCheckPath?: string;

/**
   * Http20Enabled: configures a web site to allow clients to connect over http2.0
   */
readonly http20Enabled?: bool;

/**
   * trueif HTTP logging is enabled; otherwise,false.
   */
readonly httpLoggingEnabled?: bool;

/**
   * IP security restrictions for main.
   */
readonly ipSecurityRestrictions?: IpSecurityRestriction[];

/**
   * Default action for main access restriction if no rules are matched.
   */
readonly ipSecurityRestrictionsDefaultAction?: 'Allow''Deny';

/**
   * Java container.
   */
readonly javaContainer?: string;

/**
   * Java container version.
   */
readonly javaContainerVersion?: string;

/**
   * Java version.
   */
readonly javaVersion?: string;

/**
   * Identity to use for Key Vault Reference authentication.
   */
readonly keyVaultReferenceIdentity?: string;

/**
   * Site limits.
   */
readonly limits?: SiteLimits;

/**
   * Linux App Framework and version
   */
readonly linuxFxVersion?: string;

/**
   * Site load balancing.
   */
readonly loadBalancing?: 'LeastRequests''LeastResponseTime''PerSiteRoundRobin''RequestHash''WeightedRoundRobin''WeightedTotalTraffic';

/**
   * trueto enable local MySQL; otherwise,false.
   */
readonly localMySqlEnabled?: bool;

/**
   * HTTP logs directory size limit.
   */
readonly logsDirectorySizeLimit?: number;

/**
   * Managed pipeline mode.
   */
readonly managedPipelineMode?: 'Classic''Integrated';

/**
   * Managed Service Identity Id
   */
readonly managedServiceIdentityId?: number;

/**
   * Application metadata. This property cannot be retrieved, since it may contain secrets.
   */
readonly metadata?: NameValuePair[];

/**
   * Number of minimum instance count for a siteThis setting only applies to the Elastic Plans
   */
readonly minimumElasticInstanceCount?: number;

/**
   * MinTlsVersion: configures the minimum version of TLS required for SSL requests
   */
readonly minTlsVersion?: '1.0''1.1''1.2';

/**
   * .NET Framework version.
   */
readonly netFrameworkVersion?: string;

/**
   * Version of Node.js.
   */
readonly nodeVersion?: string;

/**
   * Number of workers.
   */
readonly numberOfWorkers?: number;

/**
   * Version of PHP.
   */
readonly phpVersion?: string;

/**
   * Version of PowerShell.
   */
readonly powerShellVersion?: string;

/**
   * Number of preWarmed instances.This setting only applies to the Consumption and Elastic Plans
   */
readonly preWarmedInstanceCount?: number;

/**
   * Property to allow or block all public traffic.
   */
readonly publicNetworkAccess?: string;

/**
   * Publishing user name.
   */
readonly publishingUsername?: string;

/**
   * Push endpoint settings.
   */
readonly push?: PushSettings;

/**
   * Version of Python.
   */
readonly pythonVersion?: string;

/**
   * trueif remote debugging is enabled; otherwise,false.
   */
readonly remoteDebuggingEnabled?: bool;

/**
   * Remote debugging version.
   */
readonly remoteDebuggingVersion?: string;

/**
   * trueif request tracing is enabled; otherwise,false.
   */
readonly requestTracingEnabled?: bool;

/**
   * Request tracing expiration time.
   */
readonly requestTracingExpirationTime?: string;

/**
   * IP security restrictions for scm.
   */
readonly scmIpSecurityRestrictions?: IpSecurityRestriction[];

/**
   * Default action for scm access restriction if no rules are matched.
   */
readonly scmIpSecurityRestrictionsDefaultAction?: 'Allow''Deny';

/**
   * IP security restrictions for scm to use main.
   */
readonly scmIpSecurityRestrictionsUseMain?: bool;

/**
   * ScmMinTlsVersion: configures the minimum version of TLS required for SSL requests for SCM site
   */
readonly scmMinTlsVersion?: '1.0''1.1''1.2';

/**
   * SCM type.
   */
readonly scmType?: 'BitbucketGit''BitbucketHg''CodePlexGit''CodePlexHg''Dropbox''ExternalGit''ExternalHg''GitHub''LocalGit''None''OneDrive''Tfs''VSO''VSTSRM';

/**
   * Tracing options.
   */
readonly tracingOptions?: string;

/**
   * trueto use 32-bit worker process; otherwise,false.
   */
readonly use32BitWorkerProcess?: bool;

/**
   * Virtual applications.
   */
readonly virtualApplications?: VirtualApplication[];

/**
   * Virtual Network name.
   */
readonly vnetName?: string;

/**
   * The number of private ports assigned to this app. These will be assigned dynamically on runtime.
   */
readonly vnetPrivatePortsCount?: number;

/**
   * Virtual Network Route All enabled. This causes all outbound traffic to have Virtual Network Security Groups and User Defined Routes applied.
   */
readonly vnetRouteAllEnabled?: bool;

/**
   * Sets the time zone a site uses for generating timestamps. Compatible with Linux and Windows App Service. Setting the WEBSITE_TIME_ZONE app setting takes precedence over this config. For Linux, expects tz database valueshttps://www.iana.org/time-zones(for a quick reference seehttps://en.wikipedia.org/wiki/List_of_tz_database_time_zones). For Windows, expects one of the time zones listed under HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Time Zones
   */
readonly websiteTimeZone?: string;

/**
   * trueif WebSocket is enabled; otherwise,false.
   */
readonly webSocketsEnabled?: bool;

/**
   * Xenon App Framework and version
   */
readonly windowsFxVersion?: string;

/**
   * Explicit Managed Service Identity Id
   */
readonly xManagedServiceIdentityId?: number;

/**
   * The URL of the API definition.
   */
readonly url?: string;

/**
   * APIM-Api Identifier.
   */
readonly id?: string;

/**
   * Pair value.
   */
readonly value?: string;

/**
   * Actions to be executed when a rule is triggered.
   */
readonly actions?: AutoHealActions;

/**
   * Conditions that describe when to execute the auto-heal actions.
   */
readonly triggers?: AutoHealTriggers;

/**
   * Predefined action to be taken.
   */
readonly actionType?: 'CustomAction''LogEvent''Recycle';

/**
   * Custom action to be taken.
   */
readonly customAction?: AutoHealCustomAction;

/**
   * Minimum time the process must executebefore taking the action
   */
readonly minProcessExecutionTime?: string;

/**
   * Executable to be run.
   */
readonly exe?: string;

/**
   * Parameters for the executable.
   */
readonly parameters?: string;

/**
   * A rule based on private bytes.
   */
readonly privateBytesInKB?: number;

/**
   * A rule based on total requests.
   */
readonly requests?: RequestsBasedTrigger;

/**
   * A rule based on request execution time.
   */
readonly slowRequests?: SlowRequestsBasedTrigger;

/**
   * A rule based on multiple Slow Requests Rule with path
   */
readonly slowRequestsWithPath?: SlowRequestsBasedTrigger[];

/**
   * A rule based on status codes.
   */
readonly statusCodes?: StatusCodesBasedTrigger[];

/**
   * A rule based on status codes ranges.
   */
readonly statusCodesRange?: StatusCodesRangeBasedTrigger[];

/**
   * Request Count.
   */
readonly count?: number;

/**
   * Time interval.
   */
readonly timeInterval?: string;

/**
   * Request Count.
   */
readonly count?: number;

/**
   * Request Path.
   */
readonly path?: string;

/**
   * Time interval.
   */
readonly timeInterval?: string;

/**
   * Time taken.
   */
readonly timeTaken?: string;

/**
   * Request Count.
   */
readonly count?: number;

/**
   * Request Path
   */
readonly path?: string;

/**
   * HTTP status code.
   */
readonly status?: number;

/**
   * Request Sub Status.
   */
readonly subStatus?: number;

/**
   * Time interval.
   */
readonly timeInterval?: string;

/**
   * Win32 error code.
   */
readonly win32Status?: number;

/**
   * Request Count.
   */
readonly count?: number;

/**
   * 
   */
readonly path?: string;

/**
   * HTTP status code.
   */
readonly statusCodes?: string;

/**
   * Time interval.
   */
readonly timeInterval?: string;

/**
   * Connection string value.
   */
readonly connectionString?: string;

/**
   * Type of database.
   */
readonly type?: 'ApiHub''Custom''DocDb''EventHub''MySql''NotificationHub''PostgreSQL''RedisCache''SQLAzure''SQLServer''ServiceBus';

/**
   * Gets or sets the list of origins that should be allowed to make cross-origincalls (for example:http://example.com:12345). Use "*" to allow all.
   */
readonly allowedOrigins?: string[];

/**
   * Gets or sets whether CORS requests with credentials are allowed. Seehttps://developer.mozilla.org/en-US/docs/Web/HTTP/CORS#Requests_with_credentialsfor more details.
   */
readonly supportCredentials?: bool;

/**
   * List of ramp-up rules.
   */
readonly rampUpRules?: RampUpRule[];

/**
   * Hostname of a slot to which the traffic will be redirected if decided to. E.g. myapp-stage.azurewebsites.net.
   */
readonly actionHostName?: string;

/**
   * Custom decision algorithm can be provided in TiPCallback site extension which URL can be specified. See TiPCallback site extension for the scaffold and contracts.https://www.siteextensions.net/packages/TiPCallback/
   */
readonly changeDecisionCallbackUrl?: string;

/**
   * Specifies interval in minutes to reevaluate ReroutePercentage.
   */
readonly changeIntervalInMinutes?: number;

/**
   * In auto ramp up scenario this is the step to add/remove fromReroutePercentageuntil it reaches \nMinReroutePercentageorMaxReroutePercentage. Site metrics are checked every N minutes specified inChangeIntervalInMinutes.\nCustom decision algorithmcan be provided in TiPCallback site extension which URL can be specified inChangeDecisionCallbackUrl.
   */
readonly changeStep?: number;

/**
   * Specifies upper boundary below which ReroutePercentage will stay.
   */
readonly maxReroutePercentage?: number;

/**
   * Specifies lower boundary above which ReroutePercentage will stay.
   */
readonly minReroutePercentage?: number;

/**
   * Percentage of the traffic which will be redirected toActionHostName.
   */
readonly reroutePercentage?: number;

/**
   * Command-line arguments to be passed to the script processor.
   */
readonly arguments?: string;

/**
   * Requests with this extension will be handled using the specified FastCGI application.
   */
readonly extension?: string;

/**
   * The absolute path to the FastCGI application.
   */
readonly scriptProcessor?: string;

/**
   * Allow or Deny access for this IP range.
   */
readonly action?: string;

/**
   * IP restriction rule description.
   */
readonly description?: string;

/**
   * IP restriction rule headers.X-Forwarded-Host (https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Forwarded-Host#Examples).The matching logic is ..- If the property is null or empty (default), all hosts(or lack of) are allowed.- A value is compared using ordinal-ignore-case (excluding port number).- Subdomain wildcards are permitted but don't match the root domain. For example, *.contoso.com matches the subdomain foo.contoso.combut not the root domain contoso.com or multi-level foo.bar.contoso.com- Unicode host names are allowed but are converted to Punycode for matching.X-Forwarded-For (https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Forwarded-For#Examples).The matching logic is ..- If the property is null or empty (default), any forwarded-for chains (or lack of) are allowed.- If any address (excluding port number) in the chain (comma separated) matches the CIDR defined by the property.X-Azure-FDID and X-FD-HealthProbe.The matching logic is exact match.
   */
readonly headers?: object;

/**
   * IP address the security restriction is valid for.It can be in form of pure ipv4 address (required SubnetMask property) orCIDR notation such as ipv4/mask (leading bit match). For CIDR,SubnetMask property must not be specified.
   */
readonly ipAddress?: string;

/**
   * Priority of IP restriction rule.
   */
readonly priority?: number;

/**
   * Subnet mask for the range of IP addresses the restriction is valid for.
   */
readonly subnetMask?: string;

/**
   * (internal) Subnet traffic tag
   */
readonly subnetTrafficTag?: number;

/**
   * Defines what this IP filter will be used for. This is to support IP filtering on proxies.
   */
readonly tag?: 'Default''ServiceTag''XffProxy';

/**
   * Virtual network resource id
   */
readonly vnetSubnetResourceId?: string;

/**
   * (internal) Vnet traffic tag
   */
readonly vnetTrafficTag?: number;

/**
   * Maximum allowed disk size usage in MB.
   */
readonly maxDiskSizeInMb?: number;

/**
   * Maximum allowed memory usage in MB.
   */
readonly maxMemoryInMb?: number;

/**
   * Maximum allowed CPU usage percentage.
   */
readonly maxPercentageCpu?: number;

/**
   * Kind of resource.
   */
readonly kind?: string;

/**
   * Gets or sets a JSON string containing a list of dynamic tags that will be evaluated from user claims in the push registration endpoint.
   */
readonly dynamicTagsJson?: string;

/**
   * Gets or sets a flag indicating whether the Push endpoint is enabled.
   */
readonly isPushEnabled: bool;

/**
   * Gets or sets a JSON string containing a list of tags that require user authentication to be used in the push registration endpoint.Tags can consist of alphanumeric characters and the following:'_', '@', '#', '.', ':', '-'.Validation should be performed at the PushRequestHandler.
   */
readonly tagsRequiringAuth?: string;

/**
   * Gets or sets a JSON string containing a list of tags that are allowed for use by the push registration endpoint.
   */
readonly tagWhitelistJson?: string;

/**
   * Physical path.
   */
readonly physicalPath?: string;

/**
   * trueif preloading is enabled; otherwise,false.
   */
readonly preloadEnabled?: bool;

/**
   * Virtual directories for virtual application.
   */
readonly virtualDirectories?: VirtualDirectory[];

/**
   * Virtual path.
   */
readonly virtualPath?: string;

/**
   * Physical path.
   */
readonly physicalPath?: string;

/**
   * Path to virtual application.
   */
readonly virtualPath?: string;
}

/**
 * WebSites resource
 */
export class WebSites extends AzAPIBase {
  constructor(scope: Construct, id: string, props: WebSitesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Web/sites@2022-09-01";
  }

  protected getResourceBody(props: WebSitesProps): string {
    return JSON.stringify(
        {properties: {clientAffinityEnabled: "${bool}", clientCertEnabled: "${bool}", clientCertExclusionPaths: "string", clientCertMode: "string", cloningInfo: {appSettingsOverrides: {}, cloneCustomHostNames: "${bool}", cloneSourceControl: "${bool}", configureLoadBalancing: "${bool}", correlationId: "string", hostingEnvironment: "string", overwrite: "${bool}", sourceWebAppId: "string", sourceWebAppLocation: "string", trafficManagerProfileId: "string", trafficManagerProfileName: "string"}, containerSize: "${int}", customDomainVerificationId: "string", dailyMemoryTimeQuota: "${int}", enabled: "${bool}", hostingEnvironmentProfile: {id: "string"}, hostNamesDisabled: "${bool}", hostNameSslStates: [{hostType: "string", name: "string", sslState: "string", thumbprint: "string", toUpdate: "${bool}", virtualIP: "string"}], httpsOnly: "${bool}", hyperV: "${bool}", isXenon: "${bool}", keyVaultReferenceIdentity: "string", managedEnvironmentId: "string", publicNetworkAccess: "string", redundancyMode: "string", reserved: "${bool}", scmSiteAlsoStopped: "${bool}", serverFarmId: "string", siteConfig: {acrUseManagedIdentityCreds: "${bool}", acrUserManagedIdentityID: "string", alwaysOn: "${bool}", apiDefinition: {url: "string"}, apiManagementConfig: {id: "string"}, appCommandLine: "string", appSettings: [{name: "string", value: "string"}], autoHealEnabled: "${bool}", autoHealRules: {actions: {actionType: "string", customAction: {exe: "string", parameters: "string"}, minProcessExecutionTime: "string"}, triggers: {privateBytesInKB: "${int}", requests: {count: "${int}", timeInterval: "string"}, slowRequests: {count: "${int}", path: "string", timeInterval: "string", timeTaken: "string"}, slowRequestsWithPath: [{count: "${int}", path: "string", timeInterval: "string", timeTaken: "string"}], statusCodes: [{count: "${int}", path: "string", status: "${int}", subStatus: "${int}", timeInterval: "string", win32Status: "${int}"}], statusCodesRange: [{count: "${int}", path: "string", statusCodes: "string", timeInterval: "string"}]}}, autoSwapSlotName: "string", azureStorageAccounts: {}, connectionStrings: [{connectionString: "string", name: "string", type: "string"}], cors: {allowedOrigins: ["string"], supportCredentials: "${bool}"}, defaultDocuments: ["string"], detailedErrorLoggingEnabled: "${bool}", documentRoot: "string", elasticWebAppScaleLimit: "${int}", experiments: {rampUpRules: [{actionHostName: "string", changeDecisionCallbackUrl: "string", changeIntervalInMinutes: "${int}", changeStep: "${int}", maxReroutePercentage: "${int}", minReroutePercentage: "${int}", name: "string", reroutePercentage: "${int}"}]}, ftpsState: "string", functionAppScaleLimit: "${int}", functionsRuntimeScaleMonitoringEnabled: "${bool}", handlerMappings: [{arguments: "string", extension: "string", scriptProcessor: "string"}], healthCheckPath: "string", http20Enabled: "${bool}", httpLoggingEnabled: "${bool}", ipSecurityRestrictions: [{action: "string", description: "string", headers: {}, ipAddress: "string", name: "string", priority: "${int}", subnetMask: "string", subnetTrafficTag: "${int}", tag: "string", vnetSubnetResourceId: "string", vnetTrafficTag: "${int}"}], ipSecurityRestrictionsDefaultAction: "string", javaContainer: "string", javaContainerVersion: "string", javaVersion: "string", keyVaultReferenceIdentity: "string", limits: {maxDiskSizeInMb: "${int}", maxMemoryInMb: "${int}", maxPercentageCpu: "${int}"}, linuxFxVersion: "string", loadBalancing: "string", localMySqlEnabled: "${bool}", logsDirectorySizeLimit: "${int}", managedPipelineMode: "string", managedServiceIdentityId: "${int}", metadata: [{name: "string", value: "string"}], minimumElasticInstanceCount: "${int}", minTlsVersion: "string", netFrameworkVersion: "string", nodeVersion: "string", numberOfWorkers: "${int}", phpVersion: "string", powerShellVersion: "string", preWarmedInstanceCount: "${int}", publicNetworkAccess: "string", publishingUsername: "string", push: {kind: "string", properties: {dynamicTagsJson: "string", isPushEnabled: "${bool}", tagsRequiringAuth: "string", tagWhitelistJson: "string"}}, pythonVersion: "string", remoteDebuggingEnabled: "${bool}", remoteDebuggingVersion: "string", requestTracingEnabled: "${bool}", requestTracingExpirationTime: "string", scmIpSecurityRestrictions: [{action: "string", description: "string", headers: {}, ipAddress: "string", name: "string", priority: "${int}", subnetMask: "string", subnetTrafficTag: "${int}", tag: "string", vnetSubnetResourceId: "string", vnetTrafficTag: "${int}"}], scmIpSecurityRestrictionsDefaultAction: "string", scmIpSecurityRestrictionsUseMain: "${bool}", scmMinTlsVersion: "string", scmType: "string", tracingOptions: "string", use32BitWorkerProcess: "${bool}", virtualApplications: [{physicalPath: "string", preloadEnabled: "${bool}", virtualDirectories: [{physicalPath: "string", virtualPath: "string"}], virtualPath: "string"}], vnetName: "string", vnetPrivatePortsCount: "${int}", vnetRouteAllEnabled: "${bool}", websiteTimeZone: "string", webSocketsEnabled: "${bool}", windowsFxVersion: "string", xManagedServiceIdentityId: "${int}"}, storageAccountRequired: "${bool}", virtualNetworkSubnetId: "string", vnetContentShareEnabled: "${bool}", vnetImagePullEnabled: "${bool}", vnetRouteAllEnabled: "${bool}"}, kind: "string", extendedLocation: {name: "string"}}
    );
  }
}
