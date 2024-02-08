```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.TestBase/testBaseAccounts/customerEvents@2022-04-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      eventName = "string"
      receivers = [
        {
          receiverType = "string"
          receiverValue = {
            distributionGroupListReceiverValue = {
              distributionGroups = [
                "string"
              ]
            }
            subscriptionReceiverValue = {
              role = "string"
              subscriptionId = "string"
              subscriptionName = "string"
            }
            userObjectReceiverValue = {
              userObjectIds = [
                "string"
              ]
            }
          }
        }
      ]
    }
  })
}

```

### testBaseAccounts/customerEvents

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:testBaseAccounts |
| properties | Customer Notification Event properties. | CustomerEventProperties |


### CustomerEventProperties

| Name | Description | Value |
|-|-|-|
| eventName | The name of the event subscribed to. | string (required) |
| receivers | The notification event receivers. | NotificationEventReceiver[] (required) |


### NotificationEventReceiver

| Name | Description | Value |
|-|-|-|
| receiverType | The type of the notification event receiver. | string |
| receiverValue | The notification event receiver value. | NotificationReceiverValue |


### NotificationReceiverValue

| Name | Description | Value |
|-|-|-|
| distributionGroupListReceiverValue | The user object receiver value. | DistributionGroupListReceiverValue |
| subscriptionReceiverValue | The user object receiver value. | SubscriptionReceiverValue |
| userObjectReceiverValue | The user object receiver value. | UserObjectReceiverValue |


### DistributionGroupListReceiverValue

| Name | Description | Value |
|-|-|-|
| distributionGroups | The list of distribution groups. | string[] |


### SubscriptionReceiverValue

| Name | Description | Value |
|-|-|-|
| role | The role of the notification receiver. | string |
| subscriptionId | The subscription id of the notification receiver. | string |
| subscriptionName | The subscription name of the notification receiver. | string |


### UserObjectReceiverValue

| Name | Description | Value |
|-|-|-|
| userObjectIds | user object ids. | string[] |


