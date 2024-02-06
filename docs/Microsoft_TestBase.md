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

