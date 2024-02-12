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


