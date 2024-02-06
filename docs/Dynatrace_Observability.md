## Dynatrace.Observability/monitors@2023-04-27

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Dynatrace.Observability/monitors@2023-04-27"
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
      dynatraceEnvironmentProperties = {
        accountInfo = {
          accountId = "string"
          regionId = "string"
        }
        environmentInfo = {
          environmentId = "string"
          ingestionKey = "string"
          landingURL = "string"
          logsIngestionEndpoint = "string"
        }
        singleSignOnProperties = {
          aadDomains = [
            "string"
          ]
          enterpriseAppId = "string"
          singleSignOnState = "string"
          singleSignOnUrl = "string"
        }
        userId = "string"
      }
      marketplaceSubscriptionStatus = "string"
      monitoringStatus = "string"
      planData = {
        billingCycle = "string"
        effectiveDate = "string"
        planDetails = "string"
        usageType = "string"
      }
      userInfo = {
        country = "string"
        emailAddress = "string"
        firstName = "string"
        lastName = "string"
        phoneNumber = "string"
      }
    }
  })
}

```

### monitors

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| identity | The managed service identities assigned to this resource. | IdentityProperties |
| properties | The resource-specific properties for this resource. | MonitorProperties(required) |


### IdentityProperties

| Name | Description | Value |
|-|-|-|
| type | The type of managed identity assigned to this resource. | 'SystemAndUserAssigned''SystemAssigned''UserAssigned' (required) |
| userAssignedIdentities | The identities assigned to this resource by the user. | object |


### MonitorProperties

| Name | Description | Value |
|-|-|-|
| dynatraceEnvironmentProperties | Properties of the Dynatrace environment. | DynatraceEnvironmentProperties |
| marketplaceSubscriptionStatus | Marketplace subscription status. | 'Active''Suspended' |
| monitoringStatus | Status of the monitor. | 'Disabled''Enabled' |
| planData | Billing plan information. | PlanData |
| userInfo | User info. | UserInfo |


### DynatraceEnvironmentProperties

| Name | Description | Value |
|-|-|-|
| accountInfo | Dynatrace Account Information | AccountInfo |
| environmentInfo | Dynatrace Environment Information | EnvironmentInfo |
| singleSignOnProperties | The details of a Dynatrace single sign-on. | DynatraceSingleSignOnProperties |
| userId | User id | string |


### AccountInfo

| Name | Description | Value |
|-|-|-|
| accountId | Account Id of the account this environment is linked to | string |
| regionId | Region in which the account is created | string |


### EnvironmentInfo

| Name | Description | Value |
|-|-|-|
| environmentId | Id of the environment created | string |
| ingestionKey | Ingestion key of the environment | string |
| landingURL | Landing URL for Dynatrace environment | string |
| logsIngestionEndpoint | Ingestion endpoint used for sending logs | string |


### DynatraceSingleSignOnProperties

| Name | Description | Value |
|-|-|-|
| aadDomains | array of Aad(azure active directory) domains | string[] |
| enterpriseAppId | Version of the Dynatrace agent installed on the VM. | string |
| singleSignOnState | State of Single Sign On | 'Disable''Enable''Existing''Initial' |
| singleSignOnUrl | The login URL specific to this Dynatrace Environment | string |


### PlanData

| Name | Description | Value |
|-|-|-|
| billingCycle | different billing cycles like MONTHLY/WEEKLY. this could be enum | string |
| effectiveDate | date when plan was applied | string |
| planDetails | plan id as published by Dynatrace | string |
| usageType | different usage type like PAYG/COMMITTED. this could be enum | string |


### UserInfo

| Name | Description | Value |
|-|-|-|
| country | Country of the user | string |
| emailAddress | Email of the user used by Dynatrace for contacting them if needed | string |
| firstName | First Name of the user | string |
| lastName | Last Name of the user | string |
| phoneNumber | Phone number of the user used by Dynatrace for contacting them if needed | string |
## Dynatrace.Observability/monitors/singleSignOnConfigurations@2023-04-27

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Dynatrace.Observability/monitors/singleSignOnConfigurations@2023-04-27"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      aadDomains = [
        "string"
      ]
      enterpriseAppId = "string"
      singleSignOnState = "string"
      singleSignOnUrl = "string"
    }
  })
}

```

### monitors/singleSignOnConfigurations

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:monitors |
| properties | The resource-specific properties for this resource. | DynatraceSingleSignOnProperties(required) |


### DynatraceSingleSignOnProperties

| Name | Description | Value |
|-|-|-|
| aadDomains | array of Aad(azure active directory) domains | string[] |
| enterpriseAppId | Version of the Dynatrace agent installed on the VM. | string |
| singleSignOnState | State of Single Sign On | 'Disable''Enable''Existing''Initial' |
| singleSignOnUrl | The login URL specific to this Dynatrace Environment | string |
## Dynatrace.Observability/monitors/tagRules@2023-04-27

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Dynatrace.Observability/monitors/tagRules@2023-04-27"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      logRules = {
        filteringTags = [
          {
            action = "string"
            name = "string"
            value = "string"
          }
        ]
        sendAadLogs = "string"
        sendActivityLogs = "string"
        sendSubscriptionLogs = "string"
      }
      metricRules = {
        filteringTags = [
          {
            action = "string"
            name = "string"
            value = "string"
          }
        ]
        sendingMetrics = "string"
      }
    }
  })
}

```

### monitors/tagRules

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:monitors |
| properties | The resource-specific properties for this resource. | MonitoringTagRulesProperties(required) |


### MonitoringTagRulesProperties

| Name | Description | Value |
|-|-|-|
| logRules | Set of rules for sending logs for the Monitor resource. | LogRules |
| metricRules | Set of rules for sending metrics for the Monitor resource. | MetricRules |


### LogRules

| Name | Description | Value |
|-|-|-|
| filteringTags | List of filtering tags to be used for capturing logs. This only takes effect if SendActivityLogs flag is enabled. If empty, all resources will be captured.If only Exclude action is specified, the rules will apply to the list of all available resources. If Include actions are specified, the rules will only include resources with the associated tags. | FilteringTag[] |
| sendAadLogs | Flag specifying if AAD logs should be sent for the Monitor resource. | 'Disabled''Enabled' |
| sendActivityLogs | Flag specifying if activity logs from Azure resources should be sent for the Monitor resource. | 'Disabled''Enabled' |
| sendSubscriptionLogs | Flag specifying if subscription logs should be sent for the Monitor resource. | 'Disabled''Enabled' |


### FilteringTag

| Name | Description | Value |
|-|-|-|
| action | Valid actions for a filtering tag. Exclusion takes priority over inclusion. | 'Exclude''Include' |
| name | The name (also known as the key) of the tag. | string |
| value | The value of the tag. | string |


### MetricRules

| Name | Description | Value |
|-|-|-|
| filteringTags | List of filtering tags to be used for capturing metrics. If empty, all resources will be captured. If only Exclude action is specified, the rules will apply to the list of all available resources. If Include actions are specified, the rules will only include resources with the associated tags. | FilteringTag[] |
| sendingMetrics | Flag specifying if metrics from Azure resources should be sent for the Monitor resource. | 'Disabled''Enabled' |
