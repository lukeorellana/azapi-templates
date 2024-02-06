## Microsoft.Datadog/agreements@2022-06-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Datadog/agreements@2022-06-01"
  name = "default"
  parent_id = "string"
  body = jsonencode({
    properties = {
      accepted = bool
      licenseTextLink = "string"
      plan = "string"
      privacyPolicyLink = "string"
      product = "string"
      publisher = "string"
      retrieveDatetime = "string"
      signature = "string"
    }
  })
}

```

### agreements

| Name | Description | Value |
|-|-|-|
| name | The resource name | 'default' |
| properties | Represents the properties of the resource. | DatadogAgreementProperties |


### DatadogAgreementProperties

| Name | Description | Value |
|-|-|-|
| accepted | If any version of the terms have been accepted, otherwise false. | bool |
| licenseTextLink | Link to HTML with Microsoft and Publisher terms. | string |
| plan | Plan identifier string. | string |
| privacyPolicyLink | Link to the privacy policy of the publisher. | string |
| product | Product identifier string. | string |
| publisher | Publisher identifier string. | string |
| retrieveDatetime | Date and time in UTC of when the terms were accepted. This is empty if Accepted is false. | string |
| signature | Terms signature. | string |
## Microsoft.Datadog/monitors@2022-06-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Datadog/monitors@2022-06-01"
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
      datadogOrganizationProperties = {
        apiKey = "string"
        applicationKey = "string"
        enterpriseAppId = "string"
        id = "string"
        linkingAuthCode = "string"
        linkingClientId = "string"
        name = "string"
        redirectUri = "string"
      }
      monitoringStatus = "string"
      userInfo = {
        emailAddress = "string"
        name = "string"
        phoneNumber = "string"
      }
    }
    sku = {
      name = "string"
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
| sku |  | ResourceSku |
| identity |  | IdentityProperties |
| properties | Properties specific to the monitor resource. | MonitorProperties |


### IdentityProperties

| Name | Description | Value |
|-|-|-|
| type | Identity type | 'SystemAssigned''UserAssigned' |


### MonitorProperties

| Name | Description | Value |
|-|-|-|
| datadogOrganizationProperties | Datadog organization properties | DatadogOrganizationProperties |
| monitoringStatus | Flag specifying if the resource monitoring is enabled or disabled. | 'Disabled''Enabled' |
| userInfo | User info | UserInfo |


### DatadogOrganizationProperties

| Name | Description | Value |
|-|-|-|
| apiKey | Api key associated to the Datadog organization. | string |
| applicationKey | Application key associated to the Datadog organization. | string |
| enterpriseAppId | The Id of the Enterprise App used for Single sign on. | string |
| id | Id of the Datadog organization. | string |
| linkingAuthCode | The auth code used to linking to an existing datadog organization. | string |
| linkingClientId | The client_id from an existing in exchange for an auth token to link organization. | string |
| name | Name of the Datadog organization. | string |
| redirectUri | The redirect uri for linking. | string |


### UserInfo

| Name | Description | Value |
|-|-|-|
| emailAddress | Email of the user used by Datadog for contacting them if needed | string |
| name | Name of the user | string |
| phoneNumber | Phone number of the user used by Datadog for contacting them if needed | string |


### ResourceSku

| Name | Description | Value |
|-|-|-|
| name | Name of the SKU. | string (required) |
## Microsoft.Datadog/monitors/singleSignOnConfigurations@2022-06-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Datadog/monitors/singleSignOnConfigurations@2022-06-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      enterpriseAppId = "string"
      singleSignOnState = "string"
    }
  })
}

```

### monitors/singleSignOnConfigurations

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:monitors |
| properties |  | DatadogSingleSignOnProperties |


### DatadogSingleSignOnProperties

| Name | Description | Value |
|-|-|-|
| enterpriseAppId | The Id of the Enterprise App used for Single sign-on. | string |
| singleSignOnState | Various states of the SSO resource | 'Disable''Enable''Existing''Initial' |
## Microsoft.Datadog/monitors/tagRules@2022-06-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Datadog/monitors/tagRules@2022-06-01"
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
        sendResourceLogs = bool
        sendSubscriptionLogs = bool
      }
      metricRules = {
        filteringTags = [
          {
            action = "string"
            name = "string"
            value = "string"
          }
        ]
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
| metricRules | Set of rules for sending metrics for the Monitor resource. | MetricRules |


### LogRules

| Name | Description | Value |
|-|-|-|
| filteringTags | List of filtering tags to be used for capturing logs. This only takes effect if SendResourceLogs flag is enabled. If empty, all resources will be captured. If only Exclude action is specified, the rules will apply to the list of all available resources. If Include actions are specified, the rules will only include resources with the associated tags. | FilteringTag[] |
| sendAadLogs | Flag specifying if AAD logs should be sent for the Monitor resource. | bool |
| sendResourceLogs | Flag specifying if Azure resource logs should be sent for the Monitor resource. | bool |
| sendSubscriptionLogs | Flag specifying if Azure subscription logs should be sent for the Monitor resource. | bool |


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
