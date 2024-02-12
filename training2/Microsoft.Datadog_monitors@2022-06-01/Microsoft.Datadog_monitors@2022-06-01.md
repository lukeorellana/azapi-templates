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


