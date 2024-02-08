```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DevTestLab/labs/notificationchannels@2018-09-15"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      description = "string"
      emailRecipient = "string"
      events = [
        {
          eventName = "string"
        }
      ]
      notificationLocale = "string"
      webHookUrl = "string"
    }
  })
}

```

### labs/notificationchannels

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | The location of the resource. | string |
| tags | The tags of the resource. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:labs |
| properties | The properties of the resource. | NotificationChannelProperties(required) |


### NotificationChannelProperties

| Name | Description | Value |
|-|-|-|
| description | Description of notification. | string |
| emailRecipient | The email recipient to send notifications to (can be a list of semi-colon separated email addresses). | string |
| events | The list of event for which this notification is enabled. | Event[] |
| notificationLocale | The locale to use when sending a notification (fallback for unsupported languages is EN). | string |
| webHookUrl | The webhook URL to send notifications to. | string |


### Event

| Name | Description | Value |
|-|-|-|
| eventName | The event type for which this notification is enabled (i.e. AutoShutdown, Cost) | 'AutoShutdown''Cost' |


