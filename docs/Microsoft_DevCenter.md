## Microsoft.DevCenter/devcenters@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DevCenter/devcenters@2023-04-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  identity {
    type = "string"
    identity_ids = []
  }
  body = jsonencode({
    properties = {}
  })
}

```

## Microsoft.DevCenter/devcenters/attachednetworks@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DevCenter/devcenters/attachednetworks@2023-04-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      networkConnectionId = "string"
    }
  })
}

```

## Microsoft.DevCenter/devcenters/catalogs@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DevCenter/devcenters/catalogs@2023-04-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      adoGit = {
        branch = "string"
        path = "string"
        secretIdentifier = "string"
        uri = "string"
      }
      gitHub = {
        branch = "string"
        path = "string"
        secretIdentifier = "string"
        uri = "string"
      }
    }
  })
}

```

## Microsoft.DevCenter/devcenters/devboxdefinitions@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DevCenter/devcenters/devboxdefinitions@2023-04-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      hibernateSupport = "string"
      imageReference = {
        id = "string"
      }
      osStorageType = "string"
      sku = {
        capacity = int
        family = "string"
        name = "string"
        size = "string"
        tier = "string"
      }
    }
  })
}

```

## Microsoft.DevCenter/devcenters/environmentTypes@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DevCenter/devcenters/environmentTypes@2023-04-01"
  name = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {}
  })
}

```

## Microsoft.DevCenter/devcenters/galleries@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DevCenter/devcenters/galleries@2023-04-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      galleryResourceId = "string"
    }
  })
}

```

## Microsoft.DevCenter/networkConnections@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DevCenter/networkConnections@2023-04-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      domainJoinType = "string"
      domainName = "string"
      domainPassword = "string"
      domainUsername = "string"
      networkingResourceGroupName = "string"
      organizationUnit = "string"
      subnetId = "string"
    }
  })
}

```

## Microsoft.DevCenter/projects@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DevCenter/projects@2023-04-01"
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
      devCenterId = "string"
      maxDevBoxesPerUser = int
    }
  })
}

```

## Microsoft.DevCenter/projects/environmentTypes@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DevCenter/projects/environmentTypes@2023-04-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  identity {
    type = "string"
    identity_ids = []
  }
  body = jsonencode({
    properties = {
      creatorRoleAssignment = {
        roles = {}
      }
      deploymentTargetId = "string"
      status = "string"
      userRoleAssignments = {}
    }
  })
}

```

## Microsoft.DevCenter/projects/pools@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DevCenter/projects/pools@2023-04-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      devBoxDefinitionName = "string"
      licenseType = "Windows_Client"
      localAdministrator = "string"
      networkConnectionName = "string"
      stopOnDisconnect = {
        gracePeriodMinutes = int
        status = "string"
      }
    }
  })
}

```

## Microsoft.DevCenter/projects/pools/schedules@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DevCenter/projects/pools/schedules@2023-04-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      frequency = "Daily"
      state = "string"
      time = "string"
      timeZone = "string"
      type = "StopDevBox"
    }
  })
}

```

