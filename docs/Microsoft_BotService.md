## Microsoft.BotService/botServices@2022-09-15

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.BotService/botServices@2022-09-15"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      allSettings = {}
      appPasswordHint = "string"
      cmekKeyVaultUrl = "string"
      description = "string"
      developerAppInsightKey = "string"
      developerAppInsightsApiKey = "string"
      developerAppInsightsApplicationId = "string"
      disableLocalAuth = bool
      displayName = "string"
      endpoint = "string"
      iconUrl = "string"
      isCmekEnabled = bool
      isStreamingSupported = bool
      luisAppIds = [
        "string"
      ]
      luisKey = "string"
      manifestUrl = "string"
      msaAppId = "string"
      msaAppMSIResourceId = "string"
      msaAppTenantId = "string"
      msaAppType = "string"
      openWithHint = "string"
      parameters = {}
      publicNetworkAccess = "string"
      publishingCredentials = "string"
      schemaTransformationVersion = "string"
      storageResourceId = "string"
      tenantId = "string"
    }
    sku = {
      name = "string"
    }
    kind = "string"
    etag = "string"
  })
}

```

### botServices

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 2-64Valid characters:Alphanumerics, underscores, periods, and hyphens.Start with alphanumeric.Resource name must be unique across Azure. |
| location | Specifies the location of the resource. | string |
| tags | Contains resource tags defined as key/value pairs. | Dictionary of tag names and values. SeeTags in templates |
| sku | Gets or sets the SKU of the resource. | Sku |
| kind | Required. Gets or sets the Kind of the resource. | 'azurebot''bot''designer''function''sdk' |
| etag | Entity Tag | string |
| properties | The set of properties specific to bot resource | BotProperties |


### BotProperties

| Name | Description | Value |
|-|-|-|
| allSettings | Contains resource all settings defined as key/value pairs. | object |
| appPasswordHint | The hint (e.g. keyVault secret resourceId) on how to fetch the app secret | string |
| cmekKeyVaultUrl | The CMK Url | string |
| description | The description of the bot | string |
| developerAppInsightKey | The Application Insights key | string |
| developerAppInsightsApiKey | The Application Insights Api Key | string |
| developerAppInsightsApplicationId | The Application Insights App Id | string |
| disableLocalAuth | Opt-out of local authentication and ensure only MSI and AAD can be used exclusively for authentication. | bool |
| displayName | The Name of the bot | string (required) |
| endpoint | The bot's endpoint | string (required) |
| iconUrl | The Icon Url of the bot | string |
| isCmekEnabled | Whether Cmek is enabled | bool |
| isStreamingSupported | Whether the bot is streaming supported | bool |
| luisAppIds | Collection of LUIS App Ids | string[] |
| luisKey | The LUIS Key | string |
| manifestUrl | The bot's manifest url | string |
| msaAppId | Microsoft App Id for the bot | string (required) |
| msaAppMSIResourceId | Microsoft App Managed Identity Resource Id for the bot | string |
| msaAppTenantId | Microsoft App Tenant Id for the bot | string |
| msaAppType | Microsoft App Type for the bot | 'MultiTenant''SingleTenant''UserAssignedMSI' |
| openWithHint | The hint to browser (e.g. protocol handler) on how to open the bot for authoring | string |
| parameters | Contains resource parameters defined as key/value pairs. | object |
| publicNetworkAccess | Whether the bot is in an isolated network | 'Disabled''Enabled' |
| publishingCredentials | Publishing credentials of the resource | string |
| schemaTransformationVersion | The channel schema transformation version for the bot | string |
| storageResourceId | The storage resourceId for the bot | string |
| tenantId | The Tenant Id for the bot | string |


### Sku

| Name | Description | Value |
|-|-|-|
| name | The sku name | 'F0''S1' (required) |
## Microsoft.BotService/botServices/channels@2022-09-15

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.BotService/botServices/channels@2022-09-15"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      etag = "string"
      location = "string"
      channelName = "string"
      // For remaining properties, see Channel objects
    }
    sku = {
      name = "string"
    }
    kind = "string"
    etag = "string"
  })
}

```

### botServices/channels

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 2-64Valid characters:Alphanumerics, underscores, periods, and hyphens.Start with alphanumeric. |
| location | Specifies the location of the resource. | string |
| tags | Contains resource tags defined as key/value pairs. | Dictionary of tag names and values. SeeTags in templates |
| sku | Gets or sets the SKU of the resource. | Sku |
| kind | Required. Gets or sets the Kind of the resource. | 'azurebot''bot''designer''function''sdk' |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:botServices |
| etag | Entity Tag | string |
| properties | The set of properties specific to bot channel resource | Channel |


### Channel

| Name | Description | Value |
|-|-|-|
| etag | Entity Tag of the resource | string |
| location | Specifies the location of the resource. | string |
| channelName | Set the object type | AcsChatChannelAlexaChannelDirectLineChannelDirectLineSpeechChannelEmailChannelFacebookChannelKikChannelLineChannelM365ExtensionsMsTeamsChannelOmnichannelOutlookChannelSearchAssistantSkypeChannelSlackChannelSmsChannelTelegramChannelTelephonyChannelWebChatChannel(required) |


### AcsChatChannel

| Name | Description | Value |
|-|-|-|
| channelName | The channel name | 'AcsChatChannel' (required) |


### AlexaChannel

| Name | Description | Value |
|-|-|-|
| channelName | The channel name | 'AlexaChannel' (required) |
| properties | The set of properties specific to Alexa channel resource | AlexaChannelProperties |


### AlexaChannelProperties

| Name | Description | Value |
|-|-|-|
| alexaSkillId | The Alexa skill Id | string (required) |
| isEnabled | Whether this channel is enabled for the bot | bool (required) |


### DirectLineChannel

| Name | Description | Value |
|-|-|-|
| channelName | The channel name | 'DirectLineChannel' (required) |
| properties | The set of properties specific to Direct Line channel resource | DirectLineChannelProperties |


### DirectLineChannelProperties

| Name | Description | Value |
|-|-|-|
| DirectLineEmbedCode | Direct Line embed code of the resource | string |
| extensionKey1 | The extensionKey1 | string |
| extensionKey2 | The extensionKey2 | string |
| sites | The list of Direct Line sites | DirectLineSite[] |


### DirectLineSite

| Name | Description | Value |
|-|-|-|
| appId | DirectLine application id | string |
| eTag | Entity Tag | string |
| isBlockUserUploadEnabled | Whether this site is enabled for block user upload. | bool |
| isDetailedLoggingEnabled | Whether this site is disabled detailed logging for | bool |
| isEnabled | Whether this site is enabled for DirectLine channel | bool (required) |
| isEndpointParametersEnabled | Whether this site is EndpointParameters enabled for channel | bool |
| isNoStorageEnabled | Whether this no-storage site is disabled detailed logging for | bool |
| isSecureSiteEnabled | Whether this site is enabled for authentication with Bot Framework. | bool |
| isV1Enabled | Whether this site is enabled for Bot Framework V1 protocol. | bool |
| isV3Enabled | Whether this site is enabled for Bot Framework V3 protocol. | bool |
| isWebchatPreviewEnabled | Whether this site is enabled for preview versions of Webchat | bool |
| isWebChatSpeechEnabled | Whether this site is enabled for Webchat Speech | bool |
| siteName | Site name | string (required) |
| tenantId | Tenant Id | string |
| trustedOrigins | List of Trusted Origin URLs for this site. This field is applicable only if isSecureSiteEnabled is True. | string[] |


### DirectLineSpeechChannel

| Name | Description | Value |
|-|-|-|
| channelName | The channel name | 'DirectLineSpeechChannel' (required) |
| properties | The set of properties specific to DirectLine Speech channel resource | DirectLineSpeechChannelProperties |


### DirectLineSpeechChannelProperties

| Name | Description | Value |
|-|-|-|
| cognitiveServiceRegion | The cognitive service region with this channel registration. | string |
| cognitiveServiceResourceId | The cognitive service id with this channel registration. | string |
| cognitiveServiceSubscriptionKey | The cognitive service subscription key to use with this channel registration. | string |
| customSpeechModelId | Custom voice deployment id (optional). | string |
| customVoiceDeploymentId | Custom speech model id (optional). | string |
| isDefaultBotForCogSvcAccount | Make this a default bot for chosen cognitive service account. | bool |
| isEnabled | Whether this channel is enabled or not. | bool |


### EmailChannel

| Name | Description | Value |
|-|-|-|
| channelName | The channel name | 'EmailChannel' (required) |
| properties | The set of properties specific to email channel resource | EmailChannelProperties |


### EmailChannelProperties

| Name | Description | Value |
|-|-|-|
| authMethod | Email channel auth method. 0 Password (Default); 1 Graph. | int |
| emailAddress | The email address | string (required) |
| isEnabled | Whether this channel is enabled for the bot | bool (required) |
| magicCode | The magic code for setting up the modern authentication. | string |
| password | The password for the email address. Value only returned through POST to the action Channel List API, otherwise empty. | string |


### FacebookChannel

| Name | Description | Value |
|-|-|-|
| channelName | The channel name | 'FacebookChannel' (required) |
| properties | The set of properties specific to bot facebook channel | FacebookChannelProperties |


### FacebookChannelProperties

| Name | Description | Value |
|-|-|-|
| appId | Facebook application id | string (required) |
| appSecret | Facebook application secret. Value only returned through POST to the action Channel List API, otherwise empty. | string |
| isEnabled | Whether this channel is enabled for the bot | bool (required) |
| pages | The list of Facebook pages | FacebookPage[] |


### FacebookPage

| Name | Description | Value |
|-|-|-|
| accessToken | Facebook application access token. Value only returned through POST to the action Channel List API, otherwise empty. | string |
| id | Page id | string (required) |


### KikChannel

| Name | Description | Value |
|-|-|-|
| channelName | The channel name | 'KikChannel' (required) |
| properties | The set of properties specific to Kik channel resource | KikChannelProperties |


### KikChannelProperties

| Name | Description | Value |
|-|-|-|
| apiKey | Kik API key. Value only returned through POST to the action Channel List API, otherwise empty. | string |
| isEnabled | Whether this channel is enabled for the bot | bool (required) |
| isValidated | Whether this channel is validated for the bot | bool |
| userName | The Kik user name | string (required) |


### LineChannel

| Name | Description | Value |
|-|-|-|
| channelName | The channel name | 'LineChannel' (required) |
| properties | The set of properties specific to line channel resource | LineChannelProperties |


### LineChannelProperties

| Name | Description | Value |
|-|-|-|
| lineRegistrations | The list of line channel registrations | LineRegistration[] (required) |


### LineRegistration

| Name | Description | Value |
|-|-|-|
| channelAccessToken | Access token for the line channel registration | string |
| channelSecret | Secret for the line channel registration | string |


### M365Extensions

| Name | Description | Value |
|-|-|-|
| channelName | The channel name | 'M365Extensions' (required) |


### MsTeamsChannel

| Name | Description | Value |
|-|-|-|
| channelName | The channel name | 'MsTeamsChannel' (required) |
| properties | The set of properties specific to Microsoft Teams channel resource | MsTeamsChannelProperties |


### MsTeamsChannelProperties

| Name | Description | Value |
|-|-|-|
| acceptedTerms | Whether this channel accepted terms | bool |
| callingWebhook | Webhook for Microsoft Teams channel calls | string |
| deploymentEnvironment | Deployment environment for Microsoft Teams channel calls | string |
| enableCalling | Enable calling for Microsoft Teams channel | bool |
| incomingCallRoute | Webhook for Microsoft Teams channel calls | string |
| isEnabled | Whether this channel is enabled for the bot | bool (required) |


### Omnichannel

| Name | Description | Value |
|-|-|-|
| channelName | The channel name | 'Omnichannel' (required) |


### OutlookChannel

| Name | Description | Value |
|-|-|-|
| channelName | The channel name | 'OutlookChannel' (required) |


### SearchAssistant

| Name | Description | Value |
|-|-|-|
| channelName | The channel name | 'SearchAssistant' (required) |


### SkypeChannel

| Name | Description | Value |
|-|-|-|
| channelName | The channel name | 'SkypeChannel' (required) |
| properties | The set of properties specific to Skype channel resource | SkypeChannelProperties |


### SkypeChannelProperties

| Name | Description | Value |
|-|-|-|
| callingWebHook | Calling web hook for Skype channel | string |
| enableCalling | Enable calling for Skype channel | bool |
| enableGroups | Enable groups for Skype channel | bool |
| enableMediaCards | Enable media cards for Skype channel | bool |
| enableMessaging | Enable messaging for Skype channel | bool |
| enableScreenSharing | Enable screen sharing for Skype channel | bool |
| enableVideo | Enable video for Skype channel | bool |
| groupsMode | Group mode for Skype channel | string |
| incomingCallRoute | Incoming call route for Skype channel | string |
| isEnabled | Whether this channel is enabled for the bot | bool (required) |


### SlackChannel

| Name | Description | Value |
|-|-|-|
| channelName | The channel name | 'SlackChannel' (required) |
| properties | The set of properties specific to Slack channel resource | SlackChannelProperties |


### SlackChannelProperties

| Name | Description | Value |
|-|-|-|
| clientId | The Slack client id | string |
| clientSecret | The Slack client secret. Value only returned through POST to the action Channel List API, otherwise empty. | string |
| isEnabled | Whether this channel is enabled for the bot | bool (required) |
| landingPageUrl | The Slack landing page Url | string |
| registerBeforeOAuthFlow | Whether to register the settings before OAuth validation is performed. Recommended to True. | bool |
| scopes | The Slack permission scopes. | string |
| signingSecret | The Slack signing secret. | string |
| verificationToken | The Slack verification token. Value only returned through POST to the action Channel List API, otherwise empty. | string |


### SmsChannel

| Name | Description | Value |
|-|-|-|
| channelName | The channel name | 'SmsChannel' (required) |
| properties | The set of properties specific to Sms channel resource | SmsChannelProperties |


### SmsChannelProperties

| Name | Description | Value |
|-|-|-|
| accountSID | The Sms account SID. Value only returned through POST to the action Channel List API, otherwise empty. | string (required) |
| authToken | The Sms auth token. Value only returned through POST to the action Channel List API, otherwise empty. | string |
| isEnabled | Whether this channel is enabled for the bot | bool (required) |
| isValidated | Whether this channel is validated for the bot | bool |
| phone | The Sms phone | string (required) |


### TelegramChannel

| Name | Description | Value |
|-|-|-|
| channelName | The channel name | 'TelegramChannel' (required) |
| properties | The set of properties specific to Telegram channel resource | TelegramChannelProperties |


### TelegramChannelProperties

| Name | Description | Value |
|-|-|-|
| accessToken | The Telegram access token. Value only returned through POST to the action Channel List API, otherwise empty. | string |
| isEnabled | Whether this channel is enabled for the bot | bool (required) |
| isValidated | Whether this channel is validated for the bot | bool |


### TelephonyChannel

| Name | Description | Value |
|-|-|-|
| channelName | The channel name | 'TelephonyChannel' (required) |
| properties | The set of properties specific to Telephony channel resource | TelephonyChannelProperties |


### TelephonyChannelProperties

| Name | Description | Value |
|-|-|-|
| apiConfigurations | The list of Telephony api configuration | TelephonyChannelResourceApiConfiguration[] |
| cognitiveServiceRegion | The extensionKey2 | string |
| cognitiveServiceSubscriptionKey | The extensionKey1 | string |
| defaultLocale | The default locale of the channel | string |
| isEnabled | Whether the channel is enabled | bool |
| phoneNumbers | The list of Telephony phone numbers | TelephonyPhoneNumbers[] |
| premiumSKU | The premium SKU applied to the channel | string |


### TelephonyChannelResourceApiConfiguration

| Name | Description | Value |
|-|-|-|
| cognitiveServiceRegion | The cognitive service region. | string |
| cognitiveServiceResourceId | The cognitive service resourceId. | string |
| cognitiveServiceSubscriptionKey | The cognitive service subscription key. | string |
| defaultLocale | The default locale. | string |
| id | The id of config. | string |
| providerName | The provider name. | string |


### TelephonyPhoneNumbers

| Name | Description | Value |
|-|-|-|
| acsEndpoint | The endpoint of ACS. | string |
| acsResourceId | The resource id of ACS. | string |
| acsSecret | The secret of ACS. | string |
| cognitiveServiceRegion | The service region of cognitive service. | string |
| cognitiveServiceResourceId | The resource id of cognitive service. | string |
| cognitiveServiceSubscriptionKey | The subscription key of cognitive service. | string |
| defaultLocale | The default locale of the phone number. | string |
| id | The element id. | string |
| offerType | Optional Property that will determine the offering type of the phone. | string |
| phoneNumber | The phone number. | string |


### WebChatChannel

| Name | Description | Value |
|-|-|-|
| channelName | The channel name | 'WebChatChannel' (required) |
| properties | The set of properties specific to Web Chat channel resource | WebChatChannelProperties |


### WebChatChannelProperties

| Name | Description | Value |
|-|-|-|
| sites | The list of Web Chat sites | WebChatSite[] |


### WebChatSite

| Name | Description | Value |
|-|-|-|
| appId | DirectLine application id | string |
| eTag | Entity Tag | string |
| isBlockUserUploadEnabled | Whether this site is enabled for block user upload. | bool |
| isDetailedLoggingEnabled | Whether this site is disabled detailed logging for | bool |
| isEnabled | Whether this site is enabled for DirectLine channel | bool (required) |
| isEndpointParametersEnabled | Whether this site is EndpointParameters enabled for channel | bool |
| isNoStorageEnabled | Whether this no-storage site is disabled detailed logging for | bool |
| isSecureSiteEnabled | Whether this site is enabled for authentication with Bot Framework. | bool |
| isV1Enabled | Whether this site is enabled for Bot Framework V1 protocol. | bool |
| isV3Enabled | Whether this site is enabled for Bot Framework V3 protocol. | bool |
| isWebchatPreviewEnabled | Whether this site is enabled for preview versions of Webchat | bool |
| isWebChatSpeechEnabled | Whether this site is enabled for Webchat Speech | bool |
| siteName | Site name | string (required) |
| tenantId | Tenant Id | string |
| trustedOrigins | List of Trusted Origin URLs for this site. This field is applicable only if isSecureSiteEnabled is True. | string[] |


### Sku

| Name | Description | Value |
|-|-|-|
| name | The sku name | 'F0''S1' (required) |
## Microsoft.BotService/botServices/connections@2022-09-15

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.BotService/botServices/connections@2022-09-15"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      clientId = "string"
      clientSecret = "string"
      parameters = [
        {
          key = "string"
          value = "string"
        }
      ]
      provisioningState = "string"
      scopes = "string"
      serviceProviderDisplayName = "string"
      serviceProviderId = "string"
    }
    sku = {
      name = "string"
    }
    kind = "string"
    etag = "string"
  })
}

```

### botServices/connections

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 2-64Valid characters:Alphanumerics, underscores, periods, and hyphens.Start with alphanumeric. |
| location | Specifies the location of the resource. | string |
| tags | Contains resource tags defined as key/value pairs. | Dictionary of tag names and values. SeeTags in templates |
| sku | Gets or sets the SKU of the resource. | Sku |
| kind | Required. Gets or sets the Kind of the resource. | 'azurebot''bot''designer''function''sdk' |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:botServices |
| etag | Entity Tag | string |
| properties | The set of properties specific to bot channel resource | ConnectionSettingProperties |


### ConnectionSettingProperties

| Name | Description | Value |
|-|-|-|
| clientId | Client Id associated with the Connection Setting. | string |
| clientSecret | Client Secret associated with the Connection Setting | string |
| parameters | Service Provider Parameters associated with the Connection Setting | ConnectionSettingParameter[] |
| provisioningState | Provisioning state of the resource | string |
| scopes | Scopes associated with the Connection Setting | string |
| serviceProviderDisplayName | Service Provider Display Name associated with the Connection Setting | string |
| serviceProviderId | Service Provider Id associated with the Connection Setting | string |


### ConnectionSettingParameter

| Name | Description | Value |
|-|-|-|
| key | Key for the Connection Setting Parameter. | string |
| value | Value associated with the Connection Setting Parameter. | string |


### Sku

| Name | Description | Value |
|-|-|-|
| name | The sku name | 'F0''S1' (required) |
## Microsoft.BotService/botServices/privateEndpointConnections@2022-09-15

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.BotService/botServices/privateEndpointConnections@2022-09-15"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      groupIds = [
        "string"
      ]
      privateEndpoint = {}
      privateLinkServiceConnectionState = {
        actionsRequired = "string"
        description = "string"
        status = "string"
      }
    }
  })
}

```

### botServices/privateEndpointConnections

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:botServices |
| properties | Resource properties. | PrivateEndpointConnectionProperties |


### PrivateEndpointConnectionProperties

| Name | Description | Value |
|-|-|-|
| groupIds | Group ids | string[] |
| privateEndpoint | The resource of private end point. | PrivateEndpoint |
| privateLinkServiceConnectionState | A collection of information about the state of the connection between service consumer and provider. | PrivateLinkServiceConnectionState(required) |


### PrivateLinkServiceConnectionState

| Name | Description | Value |
|-|-|-|
| actionsRequired | A message indicating if changes on the service provider require any updates on the consumer. | string |
| description | The reason for approval/rejection of the connection. | string |
| status | Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service. | 'Approved''Pending''Rejected' |
## Microsoft.BotService/enterpriseChannels@2018-07-12

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.BotService/enterpriseChannels@2018-07-12"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      nodes = [
        {
          azureLocation = "string"
          azureSku = "string"
          name = "string"
          state = "string"
        }
      ]
      state = "string"
    }
    sku = {
      name = "string"
    }
    kind = "string"
    etag = "string"
  })
}

```

### enterpriseChannels

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 2-64Valid characters:Alphanumerics, underscores, periods, and hyphens.Start with alphanumeric. |
| location | Specifies the location of the resource. | string |
| tags | Contains resource tags defined as key/value pairs. | Dictionary of tag names and values. SeeTags in templates |
| sku | Gets or sets the SKU of the resource. | Sku |
| kind | Required. Gets or sets the Kind of the resource. | 'bot''designer''function''sdk' |
| etag | Entity Tag | string |
| properties | The set of properties specific to an Enterprise Channel resource. | EnterpriseChannelProperties |


### EnterpriseChannelProperties

| Name | Description | Value |
|-|-|-|
| nodes | The nodes associated with the Enterprise Channel. | EnterpriseChannelNode[] (required) |
| state | The current state of the Enterprise Channel. | 'CreateFailed''Creating''DeleteFailed''Deleting''StartFailed''Started''Starting''StopFailed''Stopped''Stopping' |


### EnterpriseChannelNode

| Name | Description | Value |
|-|-|-|
| azureLocation | The location of the Enterprise Channel Node. | string (required) |
| azureSku | The sku of the Enterprise Channel Node. | string (required) |
| name | The name of the Enterprise Channel Node. | string (required) |
| state | The current state of the Enterprise Channel Node. | 'CreateFailed''Creating''DeleteFailed''Deleting''StartFailed''Started''Starting''StopFailed''Stopped''Stopping' |


### Sku

| Name | Description | Value |
|-|-|-|
| name | The sku name | 'F0''S1' (required) |
