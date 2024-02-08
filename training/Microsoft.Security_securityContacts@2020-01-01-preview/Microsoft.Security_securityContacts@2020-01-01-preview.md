```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Security/securityContacts@2020-01-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      alertNotifications = {
        minimalSeverity = "string"
        state = "string"
      }
      emails = "string"
      notificationsByRole = {
        roles = [
          "string"
        ]
        state = "string"
      }
      phone = "string"
    }
  })
}

```

### securityContacts

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 1-260Valid characters:Alphanumerics, underscores, and hyphens. |
| properties | Security contact data | SecurityContactProperties |


### SecurityContactProperties

| Name | Description | Value |
|-|-|-|
| alertNotifications | Defines whether to send email notifications about new security alerts | SecurityContactPropertiesAlertNotifications |
| emails | List of email addresses which will get notifications from Microsoft Defender for Cloud by the configurations defined in this security contact. | string |
| notificationsByRole | Defines whether to send email notifications from Microsoft Defender for Cloud to persons with specific RBAC roles on the subscription. | SecurityContactPropertiesNotificationsByRole |
| phone | The security contact's phone number | string |


### SecurityContactPropertiesAlertNotifications

| Name | Description | Value |
|-|-|-|
| minimalSeverity | Defines the minimal alert severity which will be sent as email notifications | 'High''Low''Medium' |
| state | Defines if email notifications will be sent about new security alerts | 'Off''On' |


### SecurityContactPropertiesNotificationsByRole

| Name | Description | Value |
|-|-|-|
| roles | Defines which RBAC roles will get email notifications from Microsoft Defender for Cloud. List of allowed RBAC roles: | String array containing any of:'AccountAdmin''Contributor''Owner''ServiceAdmin' |
| state | Defines whether to send email notifications from AMicrosoft Defender for Cloud to persons with specific RBAC roles on the subscription. | 'Off''On' |


