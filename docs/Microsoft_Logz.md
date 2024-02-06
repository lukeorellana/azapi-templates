## Microsoft.Logz/monitors@2022-01-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Logz/monitors@2022-01-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  identity {
    type = "string"
  }
  body = jsonencode({
    properties = {
      logzOrganizationProperties = {
        companyName = "string"
        enterpriseAppId = "string"
        singleSignOnUrl = "string"
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
| location |  | string (required) |
| tags | Dictionary of {string} | Dictionary of tag names and values. SeeTags in templates |
| identity |  | IdentityProperties |
| properties | Properties specific to the monitor resource. | MonitorProperties |


### IdentityProperties

| Name | Description | Value |
|-|-|-|
| type |  | 'SystemAssigned''UserAssigned' |


### MonitorProperties

| Name | Description | Value |
|-|-|-|
| logzOrganizationProperties |  | LogzOrganizationProperties |
| marketplaceSubscriptionStatus | Flag specifying the Marketplace Subscription Status of the resource. If payment is not made in time, the resource will go in Suspended state. | 'Active''Suspended' |
| monitoringStatus | Flag specifying if the resource monitoring is enabled or disabled. | 'Disabled''Enabled' |
| planData |  | PlanData |
| userInfo |  | UserInfo |


### LogzOrganizationProperties

| Name | Description | Value |
|-|-|-|
| companyName | Name of the Logz organization. | string |
| enterpriseAppId | The Id of the Enterprise App used for Single sign on. | string |
| singleSignOnUrl | The login URL specific to this Logz Organization. | string |


### PlanData

| Name | Description | Value |
|-|-|-|
| billingCycle | different billing cycles like MONTHLY/WEEKLY. this could be enum | string |
| effectiveDate | date when plan was applied | string |
| planDetails | plan id as published by Logz | string |
| usageType | different usage type like PAYG/COMMITTED. this could be enum | string |


### UserInfo

| Name | Description | Value |
|-|-|-|
| emailAddress | Email of the user used by Logz for contacting them if needed | string |
| firstName | First Name of the user | string |
| lastName | Last Name of the user | string |
| phoneNumber | Phone number of the user used by Logz for contacting them if needed | string |
## Microsoft.Logz/monitors/accounts@2022-01-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Logz/monitors/accounts@2022-01-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  identity {
    type = "string"
  }
  body = jsonencode({
    properties = {
      logzOrganizationProperties = {
        companyName = "string"
        enterpriseAppId = "string"
        singleSignOnUrl = "string"
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
        emailAddress = "string"
        firstName = "string"
        lastName = "string"
        phoneNumber = "string"
      }
    }
  })
}

```

### monitors/accounts

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location |  | string (required) |
| tags | Dictionary of {string} | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:monitors |
| identity |  | IdentityProperties |
| properties | Properties specific to the monitor resource. | MonitorProperties |


### IdentityProperties

| Name | Description | Value |
|-|-|-|
| type |  | 'SystemAssigned''UserAssigned' |


### MonitorProperties

| Name | Description | Value |
|-|-|-|
| logzOrganizationProperties |  | LogzOrganizationProperties |
| marketplaceSubscriptionStatus | Flag specifying the Marketplace Subscription Status of the resource. If payment is not made in time, the resource will go in Suspended state. | 'Active''Suspended' |
| monitoringStatus | Flag specifying if the resource monitoring is enabled or disabled. | 'Disabled''Enabled' |
| planData |  | PlanData |
| userInfo |  | UserInfo |


### LogzOrganizationProperties

| Name | Description | Value |
|-|-|-|
| companyName | Name of the Logz organization. | string |
| enterpriseAppId | The Id of the Enterprise App used for Single sign on. | string |
| singleSignOnUrl | The login URL specific to this Logz Organization. | string |


### PlanData

| Name | Description | Value |
|-|-|-|
| billingCycle | different billing cycles like MONTHLY/WEEKLY. this could be enum | string |
| effectiveDate | date when plan was applied | string |
| planDetails | plan id as published by Logz | string |
| usageType | different usage type like PAYG/COMMITTED. this could be enum | string |


### UserInfo

| Name | Description | Value |
|-|-|-|
| emailAddress | Email of the user used by Logz for contacting them if needed | string |
| firstName | First Name of the user | string |
| lastName | Last Name of the user | string |
| phoneNumber | Phone number of the user used by Logz for contacting them if needed | string |
## Microsoft.Logz/monitors/accounts/tagRules@2022-01-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Logz/monitors/accounts/tagRules@2022-01-01-preview"
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
        sendAadLogs = bool
        sendActivityLogs = bool
        sendSubscriptionLogs = bool
      }
    }
  })
}

```

### monitors/accounts/tagRules

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:accounts |
| properties | Definition of the properties for a TagRules resource. | MonitoringTagRulesProperties |


### MonitoringTagRulesProperties

| Name | Description | Value |
|-|-|-|
| logRules | Set of rules for sending logs for the Monitor resource. | LogRules |


### LogRules

| Name | Description | Value |
|-|-|-|
| filteringTags | List of filtering tags to be used for capturing logs. This only takes effect if SendActivityLogs flag is enabled. If empty, all resources will be captured. If only Exclude action is specified, the rules will apply to the list of all available resources. If Include actions are specified, the rules will only include resources with the associated tags. | FilteringTag[] |
| sendAadLogs | Flag specifying if AAD logs should be sent for the Monitor resource. | bool |
| sendActivityLogs | Flag specifying if activity logs from Azure resources should be sent for the Monitor resource. | bool |
| sendSubscriptionLogs | Flag specifying if subscription logs should be sent for the Monitor resource. | bool |


### FilteringTag

| Name | Description | Value |
|-|-|-|
| action | Valid actions for a filtering tag. Exclusion takes priority over inclusion. | 'Exclude''Include' |
| name | The name (also known as the key) of the tag. | string |
| value | The value of the tag. | string |
## Microsoft.Logz/monitors/metricsSource@2022-01-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Logz/monitors/metricsSource@2022-01-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  identity {
    type = "string"
  }
  body = jsonencode({
    properties = {
      logzOrganizationProperties = {
        companyName = "string"
        enterpriseAppId = "string"
        singleSignOnUrl = "string"
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
        emailAddress = "string"
        firstName = "string"
        lastName = "string"
        phoneNumber = "string"
      }
    }
  })
}

```

### monitors/metricsSource

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location |  | string (required) |
| tags | Dictionary of {string} | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:monitors |
| identity |  | IdentityProperties |
| properties | Properties specific to the monitor resource. | MonitorProperties |


### IdentityProperties

| Name | Description | Value |
|-|-|-|
| type |  | 'SystemAssigned''UserAssigned' |


### MonitorProperties

| Name | Description | Value |
|-|-|-|
| logzOrganizationProperties |  | LogzOrganizationProperties |
| marketplaceSubscriptionStatus | Flag specifying the Marketplace Subscription Status of the resource. If payment is not made in time, the resource will go in Suspended state. | 'Active''Suspended' |
| monitoringStatus | Flag specifying if the resource monitoring is enabled or disabled. | 'Disabled''Enabled' |
| planData |  | PlanData |
| userInfo |  | UserInfo |


### LogzOrganizationProperties

| Name | Description | Value |
|-|-|-|
| companyName | Name of the Logz organization. | string |
| enterpriseAppId | The Id of the Enterprise App used for Single sign on. | string |
| singleSignOnUrl | The login URL specific to this Logz Organization. | string |


### PlanData

| Name | Description | Value |
|-|-|-|
| billingCycle | different billing cycles like MONTHLY/WEEKLY. this could be enum | string |
| effectiveDate | date when plan was applied | string |
| planDetails | plan id as published by Logz | string |
| usageType | different usage type like PAYG/COMMITTED. this could be enum | string |


### UserInfo

| Name | Description | Value |
|-|-|-|
| emailAddress | Email of the user used by Logz for contacting them if needed | string |
| firstName | First Name of the user | string |
| lastName | Last Name of the user | string |
| phoneNumber | Phone number of the user used by Logz for contacting them if needed | string |
## Microsoft.Logz/monitors/metricsSource/tagRules@2022-01-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Logz/monitors/metricsSource/tagRules@2022-01-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      metricRules = [
        {
          filteringTags = [
            {
              action = "string"
              name = "string"
              value = "string"
            }
          ]
          subscriptionId = "string"
        }
      ]
      sendMetrics = bool
    }
  })
}

```

### monitors/metricsSource/tagRules

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:metricsSource |
| properties | Definition of the properties for a TagRules resource. | MetricsTagRulesProperties |


### MetricsTagRulesProperties

| Name | Description | Value |
|-|-|-|
| metricRules |  | MetricRules[] |
| sendMetrics | Flag specifying if metrics from Azure resources should be sent for the Monitor resource. | bool |


### MetricRules

| Name | Description | Value |
|-|-|-|
| filteringTags | List of filtering tags to be used for capturing metrics. If empty, all resources will be captured. If only Exclude action is specified, the rules will apply to the list of all available resources. If Include actions are specified, the rules will only include resources with the associated tags. | FilteringTag[] |
| subscriptionId | Subscription Id for which filtering tags are applicable | string |


### FilteringTag

| Name | Description | Value |
|-|-|-|
| action | Valid actions for a filtering tag. Exclusion takes priority over inclusion. | 'Exclude''Include' |
| name | The name (also known as the key) of the tag. | string |
| value | The value of the tag. | string |
## Microsoft.Logz/monitors/singleSignOnConfigurations@2022-01-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Logz/monitors/singleSignOnConfigurations@2022-01-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
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
| properties |  | LogzSingleSignOnProperties |


### LogzSingleSignOnProperties

| Name | Description | Value |
|-|-|-|
| enterpriseAppId | The Id of the Enterprise App used for Single sign-on. | string |
| singleSignOnState | Various states of the SSO resource | 'Disable''Enable''Existing''Initial' |
| singleSignOnUrl | The login URL specific to this Logz Organization. | string |
## Microsoft.Logz/monitors/tagRules@2022-01-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Logz/monitors/tagRules@2022-01-01-preview"
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
        sendAadLogs = bool
        sendActivityLogs = bool
        sendSubscriptionLogs = bool
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
| properties | Definition of the properties for a TagRules resource. | MonitoringTagRulesProperties |


### MonitoringTagRulesProperties

| Name | Description | Value |
|-|-|-|
| logRules | Set of rules for sending logs for the Monitor resource. | LogRules |


### LogRules

| Name | Description | Value |
|-|-|-|
| filteringTags | List of filtering tags to be used for capturing logs. This only takes effect if SendActivityLogs flag is enabled. If empty, all resources will be captured. If only Exclude action is specified, the rules will apply to the list of all available resources. If Include actions are specified, the rules will only include resources with the associated tags. | FilteringTag[] |
| sendAadLogs | Flag specifying if AAD logs should be sent for the Monitor resource. | bool |
| sendActivityLogs | Flag specifying if activity logs from Azure resources should be sent for the Monitor resource. | bool |
| sendSubscriptionLogs | Flag specifying if subscription logs should be sent for the Monitor resource. | bool |


### FilteringTag

| Name | Description | Value |
|-|-|-|
| action | Valid actions for a filtering tag. Exclusion takes priority over inclusion. | 'Exclude''Include' |
| name | The name (also known as the key) of the tag. | string |
| value | The value of the tag. | string |
