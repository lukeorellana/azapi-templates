## Microsoft.TestBase/testBaseAccounts@2022-04-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.TestBase/testBaseAccounts@2022-04-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      sku = {
        locations = [
          "string"
        ]
        name = "string"
        resourceType = "string"
        tier = "Standard"
      }
    }
  })
}

```

### testBaseAccounts

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | The geo-location where the resource lives | string (required) |
| tags | The tags of the resource. | Dictionary of tag names and values. SeeTags in templates |
| properties | Properties of a Test Base Account. | TestBaseAccountResourceProperties |


### TestBaseAccountResourceProperties

| Name | Description | Value |
|-|-|-|
| sku | The SKU of the Test Base Account. | TestBaseAccountSKU(required) |


### TestBaseAccountSKU

| Name | Description | Value |
|-|-|-|
| locations | The locations that the SKU is available. | string[] |
| name | The name of the SKU. This is typically a letter + number code, such as B0 or S0. | string (required) |
| resourceType | The type of resource the SKU applies to. | string |
| tier | The tier of this particular SKU. | 'Standard' (required) |
## Microsoft.TestBase/testBaseAccounts/customerEvents@2022-04-01-preview

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
## Microsoft.TestBase/testBaseAccounts/packages@2022-04-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.TestBase/testBaseAccounts/packages@2022-04-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      applicationName = "string"
      blobPath = "string"
      flightingRing = "string"
      targetOSList = [
        {
          baselineOSs = [
            "string"
          ]
          osUpdateType = "string"
          targetOSs = [
            "string"
          ]
        }
      ]
      tests = [
        {
          commands = [
            {
              action = "string"
              alwaysRun = bool
              applyUpdateBefore = bool
              content = "string"
              contentType = "string"
              maxRunTime = int
              name = "string"
              restartAfter = bool
              runAsInteractive = bool
              runElevated = bool
            }
          ]
          isActive = bool
          testType = "string"
        }
      ]
      version = "string"
    }
  })
}

```

### testBaseAccounts/packages

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | The geo-location where the resource lives | string (required) |
| tags | The tags of the resource. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:testBaseAccounts |
| properties | Test Base Package properties. | PackageProperties |


### PackageProperties

| Name | Description | Value |
|-|-|-|
| applicationName | Application name | string (required) |
| blobPath | The file path of the package. | string (required) |
| flightingRing | The flighting ring for feature update. | string (required) |
| targetOSList | Specifies the target OSs of specific OS Update types. | TargetOSInfo[] (required) |
| tests | The detailed test information. | Test[] (required) |
| version | Application version | string (required) |


### TargetOSInfo

| Name | Description | Value |
|-|-|-|
| baselineOSs | Specifies the baseline OSs to be tested. | string[] |
| osUpdateType | Specifies the OS update type to test against, e.g., 'Security updates' or 'Feature updates'. | string (required) |
| targetOSs | Specifies the target OSs to be tested. | string[] (required) |


### Test

| Name | Description | Value |
|-|-|-|
| commands | The commands used in the test. | Command[] (required) |
| isActive | Indicates if this test is active.It doesn't schedule test for not active Test. | bool |
| testType | The type of the test. | 'FunctionalTest''OutOfBoxTest' (required) |


### Command

| Name | Description | Value |
|-|-|-|
| action | The action of the command. | 'Close''Custom''Install''Launch''Uninstall' (required) |
| alwaysRun | Specifies whether to run the command even if a previous command is failed. | bool |
| applyUpdateBefore | Specifies whether to apply update before the command. | bool |
| content | The content of the command. The content depends on source type. | string (required) |
| contentType | The type of command content. | 'File''Inline''Path' (required) |
| maxRunTime | Specifies the max run time of the command. | int |
| name | The name of the command. | string (required) |
| restartAfter | Specifies whether to restart the VM after the command executed. | bool |
| runAsInteractive | Specifies whether to run the command in interactive mode. | bool |
| runElevated | Specifies whether to run the command as administrator. | bool |
## Microsoft.TestBase/testBaseAccounts/packages/favoriteProcesses@2022-04-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.TestBase/testBaseAccounts/packages/favoriteProcesses@2022-04-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      actualProcessName = "string"
    }
  })
}

```

### testBaseAccounts/packages/favoriteProcesses

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:packages |
| properties | Properties of a favorite process identifier. | FavoriteProcessProperties |


### FavoriteProcessProperties

| Name | Description | Value |
|-|-|-|
| actualProcessName | The actual name of the favorite process. It will be equal to resource name except for the scenario that the process name contains characters that are not allowed in the resource name. | string (required) |
