## Microsoft.Maintenance/applyUpdates@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Maintenance/applyUpdates@2023-04-01"
  name = "default"
  parent_id = "string"
}

```

## Microsoft.Maintenance/configurationAssignments@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Maintenance/configurationAssignments@2023-04-01"
  name = "string"
  location = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      filter = {
        locations = [
          "string"
        ]
        osTypes = [
          "string"
        ]
        resourceGroups = [
          "string"
        ]
        resourceTypes = [
          "string"
        ]
        tagSettings = {
          filterOperator = "string"
          tags = {}
        }
      }
      maintenanceConfigurationId = "string"
      resourceId = "string"
    }
  })
}

```

## Microsoft.Maintenance/maintenanceConfigurations@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Maintenance/maintenanceConfigurations@2023-04-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      extensionProperties = {}
      installPatches = {
        linuxParameters = {
          classificationsToInclude = [
            "string"
          ]
          packageNameMasksToExclude = [
            "string"
          ]
          packageNameMasksToInclude = [
            "string"
          ]
        }
        rebootSetting = "string"
        windowsParameters = {
          classificationsToInclude = [
            "string"
          ]
          excludeKbsRequiringReboot = bool
          kbNumbersToExclude = [
            "string"
          ]
          kbNumbersToInclude = [
            "string"
          ]
        }
      }
      maintenanceScope = "string"
      maintenanceWindow = {
        duration = "string"
        expirationDateTime = "string"
        recurEvery = "string"
        startDateTime = "string"
        timeZone = "string"
      }
      namespace = "string"
      visibility = "string"
    }
  })
}

```

