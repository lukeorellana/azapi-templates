```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.StorSimple/managers/devices/alertSettings@2017-06-01"
  name = "default"
  parent_id = "string"
  body = jsonencode({
    properties = {
      additionalRecipientEmailList = [
        "string"
      ]
      alertNotificationCulture = "string"
      emailNotification = "string"
      notificationToServiceOwners = "string"
    }
    kind = "Series8000"
  })
}

```

### managers/devices/alertSettings

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'default' |
| kind | The Kind of the object. Currently only Series8000 is supported | 'Series8000' |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type: devices |
| properties | The properties of the alert notification settings. | AlertNotificationProperties(required) |


### AlertNotificationProperties

| Name | Description | Value |
|-|-|-|
| additionalRecipientEmailList | The alert notification email list. | string[] |
| alertNotificationCulture | The alert notification culture. | string |
| emailNotification | Indicates whether email notification enabled or not. | 'Disabled''Enabled' (required) |
| notificationToServiceOwners | The value indicating whether alert notification enabled for admin or not. | 'Disabled''Enabled' |


