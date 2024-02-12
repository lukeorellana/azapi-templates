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


