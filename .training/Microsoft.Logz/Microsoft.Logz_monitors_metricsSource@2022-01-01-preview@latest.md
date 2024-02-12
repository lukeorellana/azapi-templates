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


