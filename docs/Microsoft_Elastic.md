## Microsoft.Elastic/monitors@2022-07-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Elastic/monitors@2022-07-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  identity {
    type = "SystemAssigned"
  }
  body = jsonencode({
    properties = {
      elasticProperties = {
        elasticCloudDeployment = {}
        elasticCloudUser = {}
      }
      monitoringStatus = "string"
      provisioningState = "string"
      userInfo = {
        companyInfo = {
          business = "string"
          country = "string"
          domain = "string"
          employeesNumber = "string"
          state = "string"
        }
        companyName = "string"
        emailAddress = "string"
        firstName = "string"
        lastName = "string"
      }
      version = "string"
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
| location | The location of the monitor resource | string (required) |
| tags | The tags of the monitor resource. | Dictionary of tag names and values. SeeTags in templates |
| sku | SKU of the monitor resource. | ResourceSku |
| identity | Identity properties of the monitor resource. | IdentityProperties |
| properties | Properties of the monitor resource. | MonitorProperties |


### IdentityProperties

| Name | Description | Value |
|-|-|-|
| type | Managed identity type. | 'SystemAssigned' |


### MonitorProperties

| Name | Description | Value |
|-|-|-|
| elasticProperties | Elastic cloud properties. | ElasticProperties |
| monitoringStatus | Flag specifying if the resource monitoring is enabled or disabled. | 'Disabled''Enabled' |
| provisioningState | Provisioning state of the monitor resource. | 'Accepted''Canceled''Creating''Deleted''Deleting''Failed''NotSpecified''Succeeded''Updating' |
| userInfo | User information. | UserInfo |
| version | Version of elastic of the monitor resource | string |


### ElasticProperties

| Name | Description | Value |
|-|-|-|
| elasticCloudDeployment | Details of the elastic cloud deployment. | ElasticCloudDeployment |
| elasticCloudUser | Details of the user's elastic account. | ElasticCloudUser |


### UserInfo

| Name | Description | Value |
|-|-|-|
| companyInfo | Company information of the user to be passed to partners. | CompanyInfo |
| companyName | Company name of the user | string |
| emailAddress | Email of the user used by Elastic for contacting them if needed | string |
| firstName | First name of the user | string |
| lastName | Last name of the user | string |


### CompanyInfo

| Name | Description | Value |
|-|-|-|
| business | Business of the company | string |
| country | Country of the company location. | string |
| domain | Domain of the company | string |
| employeesNumber | Number of employees in the company | string |
| state | State of the company location. | string |


### ResourceSku

| Name | Description | Value |
|-|-|-|
| name | Name of the SKU. | string (required) |
## Microsoft.Elastic/monitors/tagRules@2022-07-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Elastic/monitors/tagRules@2022-07-01-preview"
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
      provisioningState = "string"
    }
  })
}

```

### monitors/tagRules

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:monitors |
| properties | Properties of the monitoring tag rules. | MonitoringTagRulesProperties |


### MonitoringTagRulesProperties

| Name | Description | Value |
|-|-|-|
| logRules | Rules for sending logs. | LogRules |
| provisioningState | Provisioning state of the monitoring tag rules. | 'Accepted''Canceled''Creating''Deleted''Deleting''Failed''NotSpecified''Succeeded''Updating' |


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
| action | Valid actions for a filtering tag. | 'Exclude''Include' |
| name | The name (also known as the key) of the tag. | string |
| value | The value of the tag. | string |
