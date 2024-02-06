## Microsoft.AnalysisServices/servers@2017-08-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AnalysisServices/servers@2017-08-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      asAdministrators = {
        members = [
          "string"
        ]
      }
      backupBlobContainerUri = "string"
      gatewayDetails = {
        gatewayResourceId = "string"
      }
      ipV4FirewallSettings = {
        enablePowerBIService = bool
        firewallRules = [
          {
            firewallRuleName = "string"
            rangeEnd = "string"
            rangeStart = "string"
          }
        ]
      }
      managedMode = int
      querypoolConnectionMode = "string"
      serverMonitorMode = int
      sku = {
        capacity = int
        name = "string"
        tier = "string"
      }
    }
    sku = {
      capacity = int
      name = "string"
      tier = "string"
    }
  })
}

```

