```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/sites/slots@2022-09-01"
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
      clientAffinityEnabled = bool
      clientCertEnabled = bool
      clientCertExclusionPaths = "string"
      clientCertMode = "string"
      cloningInfo = {
        appSettingsOverrides = {}
        cloneCustomHostNames = bool
        cloneSourceControl = bool
        configureLoadBalancing = bool
        correlationId = "string"
        hostingEnvironment = "string"
        overwrite = bool
        sourceWebAppId = "string"
        sourceWebAppLocation = "string"
        trafficManagerProfileId = "string"
        trafficManagerProfileName = "string"
      }
      containerSize = int
      customDomainVerificationId = "string"
      dailyMemoryTimeQuota = int
      enabled = bool
      hostingEnvironmentProfile = {
        id = "string"
      }
      hostNamesDisabled = bool
      hostNameSslStates = [
        {
          hostType = "string"
          name = "string"
          sslState = "string"
          thumbprint = "string"
          toUpdate = bool
          virtualIP = "string"
        }
      ]
      httpsOnly = bool
      hyperV = bool
      isXenon = bool
      keyVaultReferenceIdentity = "string"
      managedEnvironmentId = "string"
      publicNetworkAccess = "string"
      redundancyMode = "string"
      reserved = bool
      scmSiteAlsoStopped = bool
      serverFarmId = "string"
      siteConfig = {
        acrUseManagedIdentityCreds = bool
        acrUserManagedIdentityID = "string"
        alwaysOn = bool
        apiDefinition = {
          url = "string"
        }
        apiManagementConfig = {
          id = "string"
        }
        appCommandLine = "string"
        appSettings = [
          {
            name = "string"
            value = "string"
          }
        ]
        autoHealEnabled = bool
        autoHealRules = {
          actions = {
            actionType = "string"
            customAction = {
              exe = "string"
              parameters = "string"
            }
            minProcessExecutionTime = "string"
          }
          triggers = {
            privateBytesInKB = int
            requests = {
              count = int
              timeInterval = "string"
            }
            slowRequests = {
              count = int
              path = "string"
              timeInterval = "string"
              timeTaken = "string"
            }
            slowRequestsWithPath = [
              {
                count = int
                path = "string"
                timeInterval = "string"
                timeTaken = "string"
              }
            ]
            statusCodes = [
              {
                count = int
                path = "string"
                status = int
                subStatus = int
                timeInterval = "string"
                win32Status = int
              }
            ]
            statusCodesRange = [
              {
                count = int
                path = "string"
                statusCodes = "string"
                timeInterval = "string"
              }
            ]
          }
        }
        autoSwapSlotName = "string"
        azureStorageAccounts = {}
        connectionStrings = [
          {
            connectionString = "string"
            name = "string"
            type = "string"
          }
        ]
        cors = {
          allowedOrigins = [
            "string"
          ]
          supportCredentials = bool
        }
        defaultDocuments = [
          "string"
        ]
        detailedErrorLoggingEnabled = bool
        documentRoot = "string"
        elasticWebAppScaleLimit = int
        experiments = {
          rampUpRules = [
            {
              actionHostName = "string"
              changeDecisionCallbackUrl = "string"
              changeIntervalInMinutes = int
              changeStep = int
              maxReroutePercentage = int
              minReroutePercentage = int
              name = "string"
              reroutePercentage = int
            }
          ]
        }
        ftpsState = "string"
        functionAppScaleLimit = int
        functionsRuntimeScaleMonitoringEnabled = bool
        handlerMappings = [
          {
            arguments = "string"
            extension = "string"
            scriptProcessor = "string"
          }
        ]
        healthCheckPath = "string"
        http20Enabled = bool
        httpLoggingEnabled = bool
        ipSecurityRestrictions = [
          {
            action = "string"
            description = "string"
            headers = {}
            ipAddress = "string"
            name = "string"
            priority = int
            subnetMask = "string"
            subnetTrafficTag = int
            tag = "string"
            vnetSubnetResourceId = "string"
            vnetTrafficTag = int
          }
        ]
        ipSecurityRestrictionsDefaultAction = "string"
        javaContainer = "string"
        javaContainerVersion = "string"
        javaVersion = "string"
        keyVaultReferenceIdentity = "string"
        limits = {
          maxDiskSizeInMb = int
          maxMemoryInMb = int
          maxPercentageCpu = int
        }
        linuxFxVersion = "string"
        loadBalancing = "string"
        localMySqlEnabled = bool
        logsDirectorySizeLimit = int
        managedPipelineMode = "string"
        managedServiceIdentityId = int
        metadata = [
          {
            name = "string"
            value = "string"
          }
        ]
        minimumElasticInstanceCount = int
        minTlsVersion = "string"
        netFrameworkVersion = "string"
        nodeVersion = "string"
        numberOfWorkers = int
        phpVersion = "string"
        powerShellVersion = "string"
        preWarmedInstanceCount = int
        publicNetworkAccess = "string"
        publishingUsername = "string"
        push = {
          kind = "string"
          properties = {
            dynamicTagsJson = "string"
            isPushEnabled = bool
            tagsRequiringAuth = "string"
            tagWhitelistJson = "string"
          }
        }
        pythonVersion = "string"
        remoteDebuggingEnabled = bool
        remoteDebuggingVersion = "string"
        requestTracingEnabled = bool
        requestTracingExpirationTime = "string"
        scmIpSecurityRestrictions = [
          {
            action = "string"
            description = "string"
            headers = {}
            ipAddress = "string"
            name = "string"
            priority = int
            subnetMask = "string"
            subnetTrafficTag = int
            tag = "string"
            vnetSubnetResourceId = "string"
            vnetTrafficTag = int
          }
        ]
        scmIpSecurityRestrictionsDefaultAction = "string"
        scmIpSecurityRestrictionsUseMain = bool
        scmMinTlsVersion = "string"
        scmType = "string"
        tracingOptions = "string"
        use32BitWorkerProcess = bool
        virtualApplications = [
          {
            physicalPath = "string"
            preloadEnabled = bool
            virtualDirectories = [
              {
                physicalPath = "string"
                virtualPath = "string"
              }
            ]
            virtualPath = "string"
          }
        ]
        vnetName = "string"
        vnetPrivatePortsCount = int
        vnetRouteAllEnabled = bool
        websiteTimeZone = "string"
        webSocketsEnabled = bool
        windowsFxVersion = "string"
        xManagedServiceIdentityId = int
      }
      storageAccountRequired = bool
      virtualNetworkSubnetId = "string"
      vnetContentShareEnabled = bool
      vnetImagePullEnabled = bool
      vnetRouteAllEnabled = bool
    }
    kind = "string"
    extendedLocation = {
      name = "string"
    }
  })
}

```

### sites/slots

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 2-59Valid characters:Alphanumeric, hyphens and Unicode characters that can be mapped to Punycode |
| location | Resource Location. | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| kind | Kind of resource. | string |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:sites |
| extendedLocation | Extended Location. | ExtendedLocation |
| identity | Managed service identity. | ManagedServiceIdentity |
| properties | Site resource specific properties | SiteProperties |


### ExtendedLocation

| Name | Description | Value |
|-|-|-|
| name | Name of extended location. | string |


### ManagedServiceIdentity

| Name | Description | Value |
|-|-|-|
| type | Type of managed service identity. | 'None''SystemAssigned''SystemAssigned, UserAssigned''UserAssigned' |
| userAssignedIdentities | The list of user assigned identities associated with the resource. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName} | object |


### SiteProperties

| Name | Description | Value |
|-|-|-|
| clientAffinityEnabled | trueto enable client affinity;falseto stop sending session affinity cookies, which route client requests in the same session to the same instance. Default istrue. | bool |
| clientCertEnabled | trueto enable client certificate authentication (TLS mutual authentication); otherwise,false. Default isfalse. | bool |
| clientCertExclusionPaths | client certificate authentication comma-separated exclusion paths | string |
| clientCertMode | This composes with ClientCertEnabled setting.- ClientCertEnabled: false means ClientCert is ignored.- ClientCertEnabled: true and ClientCertMode: Required means ClientCert is required.- ClientCertEnabled: true and ClientCertMode: Optional means ClientCert is optional or accepted. | 'Optional''OptionalInteractiveUser''Required' |
| cloningInfo | If specified during app creation, the app is cloned from a source app. | CloningInfo |
| containerSize | Size of the function container. | int |
| customDomainVerificationId | Unique identifier that verifies the custom domains assigned to the app. Customer will add this id to a txt record for verification. | string |
| dailyMemoryTimeQuota | Maximum allowed daily memory-time quota (applicable on dynamic apps only). | int |
| enabled | trueif the app is enabled; otherwise,false. Setting this value to false disables the app (takes the app offline). | bool |
| hostingEnvironmentProfile | App Service Environment to use for the app. | HostingEnvironmentProfile |
| hostNamesDisabled | trueto disable the public hostnames of the app; otherwise,false.Iftrue, the app is only accessible via API management process. | bool |
| hostNameSslStates | Hostname SSL states are used to manage the SSL bindings for app's hostnames. | HostNameSslState[] |
| httpsOnly | HttpsOnly: configures a web site to accept only https requests. Issues redirect forhttp requests | bool |
| hyperV | Hyper-V sandbox. | bool |
| isXenon | Obsolete: Hyper-V sandbox. | bool |
| keyVaultReferenceIdentity | Identity to use for Key Vault Reference authentication. | string |
| managedEnvironmentId | Azure Resource Manager ID of the customer's selected Managed Environment on which to host this app. This must be of the form /subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.App/managedEnvironments/{managedEnvironmentName} | string |
| publicNetworkAccess | Property to allow or block all public traffic. Allowed Values: 'Enabled', 'Disabled' or an empty string. | string |
| redundancyMode | Site redundancy mode | 'ActiveActive''Failover''GeoRedundant''Manual''None' |
| reserved | trueif reserved; otherwise,false. | bool |
| scmSiteAlsoStopped | trueto stop SCM (KUDU) site when the app is stopped; otherwise,false. The default isfalse. | bool |
| serverFarmId | Resource ID of the associated App Service plan, formatted as: "/subscriptions/{subscriptionID}/resourceGroups/{groupName}/providers/Microsoft.Web/serverfarms/{appServicePlanName}". | string |
| siteConfig | Configuration of the app. | SiteConfig |
| storageAccountRequired | Checks if Customer provided storage account is required | bool |
| virtualNetworkSubnetId | Azure Resource Manager ID of the Virtual network and subnet to be joined by Regional VNET Integration.This must be of the form /subscriptions/{subscriptionName}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualNetworks/{vnetName}/subnets/{subnetName} | string |
| vnetContentShareEnabled | To enable accessing content over virtual network | bool |
| vnetImagePullEnabled | To enable pulling image over Virtual Network | bool |
| vnetRouteAllEnabled | Virtual Network Route All enabled. This causes all outbound traffic to have Virtual Network Security Groups and User Defined Routes applied. | bool |


### CloningInfo

| Name | Description | Value |
|-|-|-|
| appSettingsOverrides | Application setting overrides for cloned app. If specified, these settings override the settings clonedfrom source app. Otherwise, application settings from source app are retained. | object |
| cloneCustomHostNames | trueto clone custom hostnames from source app; otherwise,false. | bool |
| cloneSourceControl | trueto clone source control from source app; otherwise,false. | bool |
| configureLoadBalancing | trueto configure load balancing for source and destination app. | bool |
| correlationId | Correlation ID of cloning operation. This ID ties multiple cloning operationstogether to use the same snapshot. | string |
| hostingEnvironment | App Service Environment. | string |
| overwrite | trueto overwrite destination app; otherwise,false. | bool |
| sourceWebAppId | ARM resource ID of the source app. App resource ID is of the form/subscriptions/{subId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{siteName} for production slots and/subscriptions/{subId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{siteName}/slots/{slotName} for other slots. | string (required) |
| sourceWebAppLocation | Location of source app ex: West US or North Europe | string |
| trafficManagerProfileId | ARM resource ID of the Traffic Manager profile to use, if it exists. Traffic Manager resource ID is of the form/subscriptions/{subId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/trafficManagerProfiles/{profileName}. | string |
| trafficManagerProfileName | Name of Traffic Manager profile to create. This is only needed if Traffic Manager profile does not already exist. | string |


### HostingEnvironmentProfile

| Name | Description | Value |
|-|-|-|
| id | Resource ID of the App Service Environment. | string |


### HostNameSslState

| Name | Description | Value |
|-|-|-|
| hostType | Indicates whether the hostname is a standard or repository hostname. | 'Repository''Standard' |
| name | Hostname. | string |
| sslState | SSL type. | 'Disabled''IpBasedEnabled''SniEnabled' |
| thumbprint | SSL certificate thumbprint. | string |
| toUpdate | Set totrueto update existing hostname. | bool |
| virtualIP | Virtual IP address assigned to the hostname if IP based SSL is enabled. | string |


### SiteConfig

| Name | Description | Value |
|-|-|-|
| acrUseManagedIdentityCreds | Flag to use Managed Identity Creds for ACR pull | bool |
| acrUserManagedIdentityID | If using user managed identity, the user managed identity ClientId | string |
| alwaysOn | trueif Always On is enabled; otherwise,false. | bool |
| apiDefinition | Information about the formal API definition for the app. | ApiDefinitionInfo |
| apiManagementConfig | Azure API management settings linked to the app. | ApiManagementConfig |
| appCommandLine | App command line to launch. | string |
| appSettings | Application settings. | NameValuePair[] |
| autoHealEnabled | trueif Auto Heal is enabled; otherwise,false. | bool |
| autoHealRules | Auto Heal rules. | AutoHealRules |
| autoSwapSlotName | Auto-swap slot name. | string |
| azureStorageAccounts | List of Azure Storage Accounts. | object |
| connectionStrings | Connection strings. | ConnStringInfo[] |
| cors | Cross-Origin Resource Sharing (CORS) settings. | CorsSettings |
| defaultDocuments | Default documents. | string[] |
| detailedErrorLoggingEnabled | trueif detailed error logging is enabled; otherwise,false. | bool |
| documentRoot | Document root. | string |
| elasticWebAppScaleLimit | Maximum number of workers that a site can scale out to.This setting only applies to apps in plans where ElasticScaleEnabled istrue | int |
| experiments | This is work around for polymorphic types. | Experiments |
| ftpsState | State of FTP / FTPS service | 'AllAllowed''Disabled''FtpsOnly' |
| functionAppScaleLimit | Maximum number of workers that a site can scale out to.This setting only applies to the Consumption and Elastic Premium Plans | int |
| functionsRuntimeScaleMonitoringEnabled | Gets or sets a value indicating whether functions runtime scale monitoring is enabled. When enabled,the ScaleController will not monitor event sources directly, but will instead call to theruntime to get scale status. | bool |
| handlerMappings | Handler mappings. | HandlerMapping[] |
| healthCheckPath | Health check path | string |
| http20Enabled | Http20Enabled: configures a web site to allow clients to connect over http2.0 | bool |
| httpLoggingEnabled | trueif HTTP logging is enabled; otherwise,false. | bool |
| ipSecurityRestrictions | IP security restrictions for main. | IpSecurityRestriction[] |
| ipSecurityRestrictionsDefaultAction | Default action for main access restriction if no rules are matched. | 'Allow''Deny' |
| javaContainer | Java container. | string |
| javaContainerVersion | Java container version. | string |
| javaVersion | Java version. | string |
| keyVaultReferenceIdentity | Identity to use for Key Vault Reference authentication. | string |
| limits | Site limits. | SiteLimits |
| linuxFxVersion | Linux App Framework and version | string |
| loadBalancing | Site load balancing. | 'LeastRequests''LeastResponseTime''PerSiteRoundRobin''RequestHash''WeightedRoundRobin''WeightedTotalTraffic' |
| localMySqlEnabled | trueto enable local MySQL; otherwise,false. | bool |
| logsDirectorySizeLimit | HTTP logs directory size limit. | int |
| managedPipelineMode | Managed pipeline mode. | 'Classic''Integrated' |
| managedServiceIdentityId | Managed Service Identity Id | int |
| metadata | Application metadata. This property cannot be retrieved, since it may contain secrets. | NameValuePair[] |
| minimumElasticInstanceCount | Number of minimum instance count for a siteThis setting only applies to the Elastic Plans | int |
| minTlsVersion | MinTlsVersion: configures the minimum version of TLS required for SSL requests | '1.0''1.1''1.2' |
| netFrameworkVersion | .NET Framework version. | string |
| nodeVersion | Version of Node.js. | string |
| numberOfWorkers | Number of workers. | int |
| phpVersion | Version of PHP. | string |
| powerShellVersion | Version of PowerShell. | string |
| preWarmedInstanceCount | Number of preWarmed instances.This setting only applies to the Consumption and Elastic Plans | int |
| publicNetworkAccess | Property to allow or block all public traffic. | string |
| publishingUsername | Publishing user name. | string |
| push | Push endpoint settings. | PushSettings |
| pythonVersion | Version of Python. | string |
| remoteDebuggingEnabled | trueif remote debugging is enabled; otherwise,false. | bool |
| remoteDebuggingVersion | Remote debugging version. | string |
| requestTracingEnabled | trueif request tracing is enabled; otherwise,false. | bool |
| requestTracingExpirationTime | Request tracing expiration time. | string |
| scmIpSecurityRestrictions | IP security restrictions for scm. | IpSecurityRestriction[] |
| scmIpSecurityRestrictionsDefaultAction | Default action for scm access restriction if no rules are matched. | 'Allow''Deny' |
| scmIpSecurityRestrictionsUseMain | IP security restrictions for scm to use main. | bool |
| scmMinTlsVersion | ScmMinTlsVersion: configures the minimum version of TLS required for SSL requests for SCM site | '1.0''1.1''1.2' |
| scmType | SCM type. | 'BitbucketGit''BitbucketHg''CodePlexGit''CodePlexHg''Dropbox''ExternalGit''ExternalHg''GitHub''LocalGit''None''OneDrive''Tfs''VSO''VSTSRM' |
| tracingOptions | Tracing options. | string |
| use32BitWorkerProcess | trueto use 32-bit worker process; otherwise,false. | bool |
| virtualApplications | Virtual applications. | VirtualApplication[] |
| vnetName | Virtual Network name. | string |
| vnetPrivatePortsCount | The number of private ports assigned to this app. These will be assigned dynamically on runtime. | int |
| vnetRouteAllEnabled | Virtual Network Route All enabled. This causes all outbound traffic to have Virtual Network Security Groups and User Defined Routes applied. | bool |
| websiteTimeZone | Sets the time zone a site uses for generating timestamps. Compatible with Linux and Windows App Service. Setting the WEBSITE_TIME_ZONE app setting takes precedence over this config. For Linux, expects tz database valueshttps://www.iana.org/time-zones(for a quick reference seehttps://en.wikipedia.org/wiki/List_of_tz_database_time_zones). For Windows, expects one of the time zones listed under HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Time Zones | string |
| webSocketsEnabled | trueif WebSocket is enabled; otherwise,false. | bool |
| windowsFxVersion | Xenon App Framework and version | string |
| xManagedServiceIdentityId | Explicit Managed Service Identity Id | int |


### ApiDefinitionInfo

| Name | Description | Value |
|-|-|-|
| url | The URL of the API definition. | string |


### ApiManagementConfig

| Name | Description | Value |
|-|-|-|
| id | APIM-Api Identifier. | string |


### NameValuePair

| Name | Description | Value |
|-|-|-|
| name | Pair name. | string |
| value | Pair value. | string |


### AutoHealRules

| Name | Description | Value |
|-|-|-|
| actions | Actions to be executed when a rule is triggered. | AutoHealActions |
| triggers | Conditions that describe when to execute the auto-heal actions. | AutoHealTriggers |


### AutoHealActions

| Name | Description | Value |
|-|-|-|
| actionType | Predefined action to be taken. | 'CustomAction''LogEvent''Recycle' |
| customAction | Custom action to be taken. | AutoHealCustomAction |
| minProcessExecutionTime | Minimum time the process must executebefore taking the action | string |


### AutoHealCustomAction

| Name | Description | Value |
|-|-|-|
| exe | Executable to be run. | string |
| parameters | Parameters for the executable. | string |


### AutoHealTriggers

| Name | Description | Value |
|-|-|-|
| privateBytesInKB | A rule based on private bytes. | int |
| requests | A rule based on total requests. | RequestsBasedTrigger |
| slowRequests | A rule based on request execution time. | SlowRequestsBasedTrigger |
| slowRequestsWithPath | A rule based on multiple Slow Requests Rule with path | SlowRequestsBasedTrigger[] |
| statusCodes | A rule based on status codes. | StatusCodesBasedTrigger[] |
| statusCodesRange | A rule based on status codes ranges. | StatusCodesRangeBasedTrigger[] |


### RequestsBasedTrigger

| Name | Description | Value |
|-|-|-|
| count | Request Count. | int |
| timeInterval | Time interval. | string |


### SlowRequestsBasedTrigger

| Name | Description | Value |
|-|-|-|
| count | Request Count. | int |
| path | Request Path. | string |
| timeInterval | Time interval. | string |
| timeTaken | Time taken. | string |


### StatusCodesBasedTrigger

| Name | Description | Value |
|-|-|-|
| count | Request Count. | int |
| path | Request Path | string |
| status | HTTP status code. | int |
| subStatus | Request Sub Status. | int |
| timeInterval | Time interval. | string |
| win32Status | Win32 error code. | int |


### StatusCodesRangeBasedTrigger

| Name | Description | Value |
|-|-|-|
| count | Request Count. | int |
| path |  | string |
| statusCodes | HTTP status code. | string |
| timeInterval | Time interval. | string |


### ConnStringInfo

| Name | Description | Value |
|-|-|-|
| connectionString | Connection string value. | string |
| name | Name of connection string. | string |
| type | Type of database. | 'ApiHub''Custom''DocDb''EventHub''MySql''NotificationHub''PostgreSQL''RedisCache''SQLAzure''SQLServer''ServiceBus' |


### CorsSettings

| Name | Description | Value |
|-|-|-|
| allowedOrigins | Gets or sets the list of origins that should be allowed to make cross-origincalls (for example:http://example.com:12345). Use "*" to allow all. | string[] |
| supportCredentials | Gets or sets whether CORS requests with credentials are allowed. Seehttps://developer.mozilla.org/en-US/docs/Web/HTTP/CORS#Requests_with_credentialsfor more details. | bool |


### Experiments

| Name | Description | Value |
|-|-|-|
| rampUpRules | List of ramp-up rules. | RampUpRule[] |


### RampUpRule

| Name | Description | Value |
|-|-|-|
| actionHostName | Hostname of a slot to which the traffic will be redirected if decided to. E.g. myapp-stage.azurewebsites.net. | string |
| changeDecisionCallbackUrl | Custom decision algorithm can be provided in TiPCallback site extension which URL can be specified. See TiPCallback site extension for the scaffold and contracts.https://www.siteextensions.net/packages/TiPCallback/ | string |
| changeIntervalInMinutes | Specifies interval in minutes to reevaluate ReroutePercentage. | int |
| changeStep | In auto ramp up scenario this is the step to add/remove fromReroutePercentageuntil it reaches \nMinReroutePercentageorMaxReroutePercentage. Site metrics are checked every N minutes specified inChangeIntervalInMinutes.\nCustom decision algorithmcan be provided in TiPCallback site extension which URL can be specified inChangeDecisionCallbackUrl. | int |
| maxReroutePercentage | Specifies upper boundary below which ReroutePercentage will stay. | int |
| minReroutePercentage | Specifies lower boundary above which ReroutePercentage will stay. | int |
| name | Name of the routing rule. The recommended name would be to point to the slot which will receive the traffic in the experiment. | string |
| reroutePercentage | Percentage of the traffic which will be redirected toActionHostName. | int |


### HandlerMapping

| Name | Description | Value |
|-|-|-|
| arguments | Command-line arguments to be passed to the script processor. | string |
| extension | Requests with this extension will be handled using the specified FastCGI application. | string |
| scriptProcessor | The absolute path to the FastCGI application. | string |


### IpSecurityRestriction

| Name | Description | Value |
|-|-|-|
| action | Allow or Deny access for this IP range. | string |
| description | IP restriction rule description. | string |
| headers | IP restriction rule headers.X-Forwarded-Host (https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Forwarded-Host#Examples).The matching logic is ..- If the property is null or empty (default), all hosts(or lack of) are allowed.- A value is compared using ordinal-ignore-case (excluding port number).- Subdomain wildcards are permitted but don't match the root domain. For example, *.contoso.com matches the subdomain foo.contoso.combut not the root domain contoso.com or multi-level foo.bar.contoso.com- Unicode host names are allowed but are converted to Punycode for matching.X-Forwarded-For (https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Forwarded-For#Examples).The matching logic is ..- If the property is null or empty (default), any forwarded-for chains (or lack of) are allowed.- If any address (excluding port number) in the chain (comma separated) matches the CIDR defined by the property.X-Azure-FDID and X-FD-HealthProbe.The matching logic is exact match. | object |
| ipAddress | IP address the security restriction is valid for.It can be in form of pure ipv4 address (required SubnetMask property) orCIDR notation such as ipv4/mask (leading bit match). For CIDR,SubnetMask property must not be specified. | string |
| name | IP restriction rule name. | string |
| priority | Priority of IP restriction rule. | int |
| subnetMask | Subnet mask for the range of IP addresses the restriction is valid for. | string |
| subnetTrafficTag | (internal) Subnet traffic tag | int |
| tag | Defines what this IP filter will be used for. This is to support IP filtering on proxies. | 'Default''ServiceTag''XffProxy' |
| vnetSubnetResourceId | Virtual network resource id | string |
| vnetTrafficTag | (internal) Vnet traffic tag | int |


### SiteLimits

| Name | Description | Value |
|-|-|-|
| maxDiskSizeInMb | Maximum allowed disk size usage in MB. | int |
| maxMemoryInMb | Maximum allowed memory usage in MB. | int |
| maxPercentageCpu | Maximum allowed CPU usage percentage. | int |


### PushSettings

| Name | Description | Value |
|-|-|-|
| kind | Kind of resource. | string |
| properties | PushSettings resource specific properties | PushSettingsProperties |


### PushSettingsProperties

| Name | Description | Value |
|-|-|-|
| dynamicTagsJson | Gets or sets a JSON string containing a list of dynamic tags that will be evaluated from user claims in the push registration endpoint. | string |
| isPushEnabled | Gets or sets a flag indicating whether the Push endpoint is enabled. | bool (required) |
| tagsRequiringAuth | Gets or sets a JSON string containing a list of tags that require user authentication to be used in the push registration endpoint.Tags can consist of alphanumeric characters and the following:'_', '@', '#', '.', ':', '-'.Validation should be performed at the PushRequestHandler. | string |
| tagWhitelistJson | Gets or sets a JSON string containing a list of tags that are allowed for use by the push registration endpoint. | string |


### VirtualApplication

| Name | Description | Value |
|-|-|-|
| physicalPath | Physical path. | string |
| preloadEnabled | trueif preloading is enabled; otherwise,false. | bool |
| virtualDirectories | Virtual directories for virtual application. | VirtualDirectory[] |
| virtualPath | Virtual path. | string |


### VirtualDirectory

| Name | Description | Value |
|-|-|-|
| physicalPath | Physical path. | string |
| virtualPath | Path to virtual application. | string |


