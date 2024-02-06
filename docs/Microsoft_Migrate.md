## Microsoft.Migrate/assessmentProjects@2019-10-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Migrate/assessmentProjects@2019-10-01"
  name = "string"
  location = "string"
  parent_id = "string"
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      assessmentSolutionId = "string"
      customerStorageAccountArmId = "string"
      customerWorkspaceId = "string"
      customerWorkspaceLocation = "string"
      projectStatus = "string"
      publicNetworkAccess = "string"
    }
    eTag = "string"
  })
}

```

## Microsoft.Migrate/assessmentProjects/groups@2019-10-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Migrate/assessmentProjects/groups@2019-10-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      groupType = "string"
    }
    eTag = "string"
  })
}

```

## Microsoft.Migrate/assessmentProjects/groups/assessments@2019-10-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Migrate/assessmentProjects/groups/assessments@2019-10-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      azureDiskType = "string"
      azureHybridUseBenefit = "string"
      azureLocation = "string"
      azureOfferCode = "string"
      azurePricingTier = "string"
      azureStorageRedundancy = "string"
      azureVmFamilies = [
        "string"
      ]
      currency = "string"
      discountPercentage = int
      percentile = "string"
      reservedInstance = "string"
      scalingFactor = int
      sizingCriterion = "string"
      stage = "string"
      timeRange = "string"
      vmUptime = {
        daysPerMonth = int
        hoursPerDay = int
      }
    }
    eTag = "string"
  })
}

```

## Microsoft.Migrate/assessmentProjects/hypervcollectors@2019-10-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Migrate/assessmentProjects/hypervcollectors@2019-10-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      agentProperties = {
        spnDetails = {
          applicationId = "string"
          audience = "string"
          authority = "string"
          objectId = "string"
          tenantId = "string"
        }
      }
      discoverySiteId = "string"
    }
    eTag = "string"
  })
}

```

## Microsoft.Migrate/assessmentProjects/importcollectors@2019-10-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Migrate/assessmentProjects/importcollectors@2019-10-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      discoverySiteId = "string"
    }
    eTag = "string"
  })
}

```

## Microsoft.Migrate/assessmentprojects/privateEndpointConnections@2019-10-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Migrate/assessmentprojects/privateEndpointConnections@2019-10-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      privateLinkServiceConnectionState = {
        actionsRequired = "string"
        description = "string"
        status = "string"
      }
    }
    eTag = "string"
  })
}

```

## Microsoft.Migrate/assessmentProjects/servercollectors@2019-10-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Migrate/assessmentProjects/servercollectors@2019-10-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      agentProperties = {
        spnDetails = {
          applicationId = "string"
          audience = "string"
          authority = "string"
          objectId = "string"
          tenantId = "string"
        }
      }
      discoverySiteId = "string"
    }
    eTag = "string"
  })
}

```

## Microsoft.Migrate/assessmentProjects/vmwarecollectors@2019-10-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Migrate/assessmentProjects/vmwarecollectors@2019-10-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      agentProperties = {
        spnDetails = {
          applicationId = "string"
          audience = "string"
          authority = "string"
          objectId = "string"
          tenantId = "string"
        }
      }
      discoverySiteId = "string"
    }
    eTag = "string"
  })
}

```

## Microsoft.Migrate/migrateProjects@2020-05-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Migrate/migrateProjects@2020-05-01"
  name = "string"
  location = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      publicNetworkAccess = "string"
      serviceEndpoint = "string"
      utilityStorageAccountId = "string"
    }
    eTag = "string"
  })
}

```

## Microsoft.Migrate/migrateProjects/privateEndpointConnections@2020-05-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Migrate/migrateProjects/privateEndpointConnections@2020-05-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      privateLinkServiceConnectionState = {
        actionsRequired = "string"
        description = "string"
        status = "string"
      }
    }
    eTag = "string"
  })
}

```

## Microsoft.Migrate/projects@2018-02-02

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Migrate/projects@2018-02-02"
  name = "string"
  location = "string"
  parent_id = "string"
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      customerWorkspaceId = "string"
      customerWorkspaceLocation = "string"
      provisioningState = "string"
    }
    eTag = "string"
  })
}

```

## Microsoft.Migrate/projects/groups@2018-02-02

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Migrate/projects/groups@2018-02-02"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      machines = [
        "string"
      ]
    }
    eTag = "string"
  })
}

```

## Microsoft.Migrate/projects/groups/assessments@2018-02-02

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Migrate/projects/groups/assessments@2018-02-02"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      azureHybridUseBenefit = "string"
      azureLocation = "string"
      azureOfferCode = "string"
      azurePricingTier = "string"
      azureStorageRedundancy = "string"
      currency = "string"
      discountPercentage = int
      percentile = "string"
      scalingFactor = int
      sizingCriterion = "string"
      stage = "string"
      timeRange = "string"
    }
    eTag = "string"
  })
}

```

