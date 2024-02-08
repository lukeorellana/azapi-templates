```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Insights/actionGroups@2023-01-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      armRoleReceivers = [
        {
          name = "string"
          roleId = "string"
          useCommonAlertSchema = bool
        }
      ]
      automationRunbookReceivers = [
        {
          automationAccountId = "string"
          isGlobalRunbook = bool
          name = "string"
          runbookName = "string"
          serviceUri = "string"
          useCommonAlertSchema = bool
          webhookResourceId = "string"
        }
      ]
      azureAppPushReceivers = [
        {
          emailAddress = "string"
          name = "string"
        }
      ]
      azureFunctionReceivers = [
        {
          functionAppResourceId = "string"
          functionName = "string"
          httpTriggerUrl = "string"
          name = "string"
          useCommonAlertSchema = bool
        }
      ]
      emailReceivers = [
        {
          emailAddress = "string"
          name = "string"
          useCommonAlertSchema = bool
        }
      ]
      enabled = bool
      eventHubReceivers = [
        {
          eventHubName = "string"
          eventHubNameSpace = "string"
          name = "string"
          subscriptionId = "string"
          tenantId = "string"
          useCommonAlertSchema = bool
        }
      ]
      groupShortName = "string"
      itsmReceivers = [
        {
          connectionId = "string"
          name = "string"
          region = "string"
          ticketConfiguration = "string"
          workspaceId = "string"
        }
      ]
      logicAppReceivers = [
        {
          callbackUrl = "string"
          name = "string"
          resourceId = "string"
          useCommonAlertSchema = bool
        }
      ]
      smsReceivers = [
        {
          countryCode = "string"
          name = "string"
          phoneNumber = "string"
        }
      ]
      voiceReceivers = [
        {
          countryCode = "string"
          name = "string"
          phoneNumber = "string"
        }
      ]
      webhookReceivers = [
        {
          identifierUri = "string"
          name = "string"
          objectId = "string"
          serviceUri = "string"
          tenantId = "string"
          useAadAuth = bool
          useCommonAlertSchema = bool
        }
      ]
    }
  })
}

```

### actionGroups

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 1-260Valid characters:Can't use::<>+/&%\?or control charactersCan't end with space or period. |
| location | Resource location | string (required) |
| tags | Resource tags | Dictionary of tag names and values. SeeTags in templates |
| properties | The action groups properties of the resource. | ActionGroup |


### ActionGroup

| Name | Description | Value |
|-|-|-|
| armRoleReceivers | The list of ARM role receivers that are part of this action group. Roles are Azure RBAC roles and only built-in roles are supported. | ArmRoleReceiver[] |
| automationRunbookReceivers | The list of AutomationRunbook receivers that are part of this action group. | AutomationRunbookReceiver[] |
| azureAppPushReceivers | The list of AzureAppPush receivers that are part of this action group. | AzureAppPushReceiver[] |
| azureFunctionReceivers | The list of azure function receivers that are part of this action group. | AzureFunctionReceiver[] |
| emailReceivers | The list of email receivers that are part of this action group. | EmailReceiver[] |
| enabled | Indicates whether this action group is enabled. If an action group is not enabled, then none of its receivers will receive communications. | bool (required) |
| eventHubReceivers | The list of event hub receivers that are part of this action group. | EventHubReceiver[] |
| groupShortName | The short name of the action group. This will be used in SMS messages. | string (required)Constraints:Max length = 12 |
| itsmReceivers | The list of ITSM receivers that are part of this action group. | ItsmReceiver[] |
| logicAppReceivers | The list of logic app receivers that are part of this action group. | LogicAppReceiver[] |
| smsReceivers | The list of SMS receivers that are part of this action group. | SmsReceiver[] |
| voiceReceivers | The list of voice receivers that are part of this action group. | VoiceReceiver[] |
| webhookReceivers | The list of webhook receivers that are part of this action group. | WebhookReceiver[] |


### ArmRoleReceiver

| Name | Description | Value |
|-|-|-|
| name | The name of the arm role receiver. Names must be unique across all receivers within an action group. | string (required) |
| roleId | The arm role id. | string (required) |
| useCommonAlertSchema | Indicates whether to use common alert schema. | bool |


### AutomationRunbookReceiver

| Name | Description | Value |
|-|-|-|
| automationAccountId | The Azure automation account Id which holds this runbook and authenticate to Azure resource. | string (required) |
| isGlobalRunbook | Indicates whether this instance is global runbook. | bool (required) |
| name | Indicates name of the webhook. | string |
| runbookName | The name for this runbook. | string (required) |
| serviceUri | The URI where webhooks should be sent. | string |
| useCommonAlertSchema | Indicates whether to use common alert schema. | bool |
| webhookResourceId | The resource id for webhook linked to this runbook. | string (required) |


### AzureAppPushReceiver

| Name | Description | Value |
|-|-|-|
| emailAddress | The email address registered for the Azure mobile app. | string (required) |
| name | The name of the Azure mobile app push receiver. Names must be unique across all receivers within an action group. | string (required) |


### AzureFunctionReceiver

| Name | Description | Value |
|-|-|-|
| functionAppResourceId | The azure resource id of the function app. | string (required) |
| functionName | The function name in the function app. | string (required) |
| httpTriggerUrl | The http trigger url where http request sent to. | string (required) |
| name | The name of the azure function receiver. Names must be unique across all receivers within an action group. | string (required) |
| useCommonAlertSchema | Indicates whether to use common alert schema. | bool |


### EmailReceiver

| Name | Description | Value |
|-|-|-|
| emailAddress | The email address of this receiver. | string (required) |
| name | The name of the email receiver. Names must be unique across all receivers within an action group. | string (required) |
| useCommonAlertSchema | Indicates whether to use common alert schema. | bool |


### EventHubReceiver

| Name | Description | Value |
|-|-|-|
| eventHubName | The name of the specific Event Hub queue | string (required) |
| eventHubNameSpace | The Event Hub namespace | string (required) |
| name | The name of the Event hub receiver. Names must be unique across all receivers within an action group. | string (required) |
| subscriptionId | The Id for the subscription containing this event hub | string (required) |
| tenantId | The tenant Id for the subscription containing this event hub | string |
| useCommonAlertSchema | Indicates whether to use common alert schema. | bool |


### ItsmReceiver

| Name | Description | Value |
|-|-|-|
| connectionId | Unique identification of ITSM connection among multiple defined in above workspace. | string (required) |
| name | The name of the Itsm receiver. Names must be unique across all receivers within an action group. | string (required) |
| region | Region in which workspace resides. Supported values:'centralindia','japaneast','southeastasia','australiasoutheast','uksouth','westcentralus','canadacentral','eastus','westeurope' | string (required) |
| ticketConfiguration | JSON blob for the configurations of the ITSM action. CreateMultipleWorkItems option will be part of this blob as well. | string (required) |
| workspaceId | OMS LA instance identifier. | string (required) |


### LogicAppReceiver

| Name | Description | Value |
|-|-|-|
| callbackUrl | The callback url where http request sent to. | string (required) |
| name | The name of the logic app receiver. Names must be unique across all receivers within an action group. | string (required) |
| resourceId | The azure resource id of the logic app receiver. | string (required) |
| useCommonAlertSchema | Indicates whether to use common alert schema. | bool |


### SmsReceiver

| Name | Description | Value |
|-|-|-|
| countryCode | The country code of the SMS receiver. | string (required) |
| name | The name of the SMS receiver. Names must be unique across all receivers within an action group. | string (required) |
| phoneNumber | The phone number of the SMS receiver. | string (required) |


### VoiceReceiver

| Name | Description | Value |
|-|-|-|
| countryCode | The country code of the voice receiver. | string (required) |
| name | The name of the voice receiver. Names must be unique across all receivers within an action group. | string (required) |
| phoneNumber | The phone number of the voice receiver. | string (required) |


### WebhookReceiver

| Name | Description | Value |
|-|-|-|
| identifierUri | Indicates the identifier uri for aad auth. | string |
| name | The name of the webhook receiver. Names must be unique across all receivers within an action group. | string (required) |
| objectId | Indicates the webhook app object Id for aad auth. | string |
| serviceUri | The URI where webhooks should be sent. | string (required) |
| tenantId | Indicates the tenant id for aad auth. | string |
| useAadAuth | Indicates whether or not use AAD authentication. | bool |
| useCommonAlertSchema | Indicates whether to use common alert schema. | bool |


