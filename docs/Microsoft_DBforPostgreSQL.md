## Microsoft.DBforPostgreSQL/serverGroupsv2@2022-11-08

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DBforPostgreSQL/serverGroupsv2@2022-11-08"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      administratorLoginPassword = "string"
      citusVersion = "string"
      coordinatorEnablePublicIpAccess = bool
      coordinatorServerEdition = "string"
      coordinatorStorageQuotaInMb = int
      coordinatorVCores = int
      enableHa = bool
      enableShardsOnCoordinator = bool
      maintenanceWindow = {
        customWindow = "string"
        dayOfWeek = int
        startHour = int
        startMinute = int
      }
      nodeCount = int
      nodeEnablePublicIpAccess = bool
      nodeServerEdition = "string"
      nodeStorageQuotaInMb = int
      nodeVCores = int
      pointInTimeUTC = "string"
      postgresqlVersion = "string"
      preferredPrimaryZone = "string"
      sourceLocation = "string"
      sourceResourceId = "string"
    }
  })
}

```

## Microsoft.DBforPostgreSQL/serverGroupsv2/coordinatorConfigurations@2022-11-08

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DBforPostgreSQL/serverGroupsv2/coordinatorConfigurations@2022-11-08"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      value = "string"
    }
  })
}

```

## Microsoft.DBforPostgreSQL/serverGroupsv2/firewallRules@2022-11-08

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DBforPostgreSQL/serverGroupsv2/firewallRules@2022-11-08"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      endIpAddress = "string"
      startIpAddress = "string"
    }
  })
}

```

## Microsoft.DBforPostgreSQL/serverGroupsv2/nodeConfigurations@2022-11-08

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DBforPostgreSQL/serverGroupsv2/nodeConfigurations@2022-11-08"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      value = "string"
    }
  })
}

```

## Microsoft.DBforPostgreSQL/serverGroupsv2/privateEndpointConnections@2022-11-08

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DBforPostgreSQL/serverGroupsv2/privateEndpointConnections@2022-11-08"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      privateEndpoint = {}
      privateLinkServiceConnectionState = {
        actionsRequired = "string"
        description = "string"
        status = "string"
      }
    }
  })
}

```

## Microsoft.DBforPostgreSQL/serverGroupsv2/roles@2022-11-08

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DBforPostgreSQL/serverGroupsv2/roles@2022-11-08"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      password = "string"
    }
  })
}

```

## Microsoft.DBforPostgreSQL/flexibleServers@2023-03-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DBforPostgreSQL/flexibleServers@2023-03-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  identity {
    type =  "UserAssigned"
    identity_ids = []
  }
  body = jsonencode({
    properties = {
      administratorLogin = "string"
      administratorLoginPassword = "string"
      authConfig = {
        activeDirectoryAuth = "string"
        passwordAuth = "string"
        tenantId = "string"
      }
      availabilityZone = "string"
      backup = {
        backupRetentionDays = int
        geoRedundantBackup = "string"
      }
      createMode = "string"
      dataEncryption = {
        geoBackupKeyURI = "string"
        geoBackupUserAssignedIdentityId = "string"
        primaryKeyURI = "string"
        primaryUserAssignedIdentityId = "string"
        type = "string"
      }
      highAvailability = {
        mode = "string"
        standbyAvailabilityZone = "string"
      }
      maintenanceWindow = {
        customWindow = "string"
        dayOfWeek = int
        startHour = int
        startMinute = int
      }
      network = {
        delegatedSubnetResourceId = "string"
        privateDnsZoneArmResourceId = "string"
      }
      pointInTimeUTC = "string"
      replicationRole = "string"
      sourceServerResourceId = "string"
      storage = {
        autoGrow = "string"
        storageSizeGB = int
        tier = "string"
      }
      version = "string"
    }
    sku = {
      name = "string"
      tier = "string"
    }
  })
}

```

## Microsoft.DBforPostgreSQL/flexibleServers/administrators@2023-03-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DBforPostgreSQL/flexibleServers/administrators@2023-03-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      principalName = "string"
      principalType = "string"
      tenantId = "string"
    }
  })
}

```

## Microsoft.DBforPostgreSQL/flexibleServers/configurations@2023-03-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DBforPostgreSQL/flexibleServers/configurations@2023-03-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      source = "string"
      value = "string"
    }
  })
}

```

## Microsoft.DBforPostgreSQL/flexibleServers/databases@2023-03-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DBforPostgreSQL/flexibleServers/databases@2023-03-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      charset = "string"
      collation = "string"
    }
  })
}

```

## Microsoft.DBforPostgreSQL/flexibleServers/firewallRules@2023-03-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DBforPostgreSQL/flexibleServers/firewallRules@2023-03-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      endIpAddress = "string"
      startIpAddress = "string"
    }
  })
}

```

## Microsoft.DBforPostgreSQL/flexibleServers/migrations@2023-03-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DBforPostgreSQL/flexibleServers/migrations@2023-03-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      cancel = "string"
      dbsToCancelMigrationOn = [
        "string"
      ]
      dbsToMigrate = [
        "string"
      ]
      dbsToTriggerCutoverOn = [
        "string"
      ]
      migrationMode = "string"
      migrationWindowEndTimeInUtc = "string"
      migrationWindowStartTimeInUtc = "string"
      overwriteDbsInTarget = "string"
      secretParameters = {
        adminCredentials = {
          sourceServerPassword = "string"
          targetServerPassword = "string"
        }
        sourceServerUsername = "string"
        targetServerUsername = "string"
      }
      setupLogicalReplicationOnSourceDbIfNeeded = "string"
      sourceDbServerFullyQualifiedDomainName = "string"
      sourceDbServerResourceId = "string"
      startDataMigration = "string"
      targetDbServerFullyQualifiedDomainName = "string"
      triggerCutover = "string"
    }
  })
}

```

## Microsoft.DBforPostgreSQL/servers@2017-12-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DBforPostgreSQL/servers@2017-12-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  identity {
    type = "SystemAssigned"
  }
  body = jsonencode({
    properties = {
      infrastructureEncryption = "string"
      minimalTlsVersion = "string"
      publicNetworkAccess = "string"
      sslEnforcement = "string"
      storageProfile = {
        backupRetentionDays = int
        geoRedundantBackup = "string"
        storageAutogrow = "string"
        storageMB = int
      }
      version = "string"
      createMode = "string"
      // For remaining properties, see ServerPropertiesForCreateOrServerProperties objects
    }
    sku = {
      capacity = int
      family = "string"
      name = "string"
      size = "string"
      tier = "string"
    }
  })
}

```

## Microsoft.DBforPostgreSQL/servers/administrators@2017-12-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DBforPostgreSQL/servers/administrators@2017-12-01"
  name = "activeDirectory"
  parent_id = "string"
  body = jsonencode({
    properties = {
      administratorType = "ActiveDirectory"
      login = "string"
      sid = "string"
      tenantId = "string"
    }
  })
}

```

## Microsoft.DBforPostgreSQL/servers/configurations@2017-12-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DBforPostgreSQL/servers/configurations@2017-12-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      source = "string"
      value = "string"
    }
  })
}

```

## Microsoft.DBforPostgreSQL/servers/databases@2017-12-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DBforPostgreSQL/servers/databases@2017-12-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      charset = "string"
      collation = "string"
    }
  })
}

```

## Microsoft.DBforPostgreSQL/servers/firewallRules@2017-12-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DBforPostgreSQL/servers/firewallRules@2017-12-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      endIpAddress = "string"
      startIpAddress = "string"
    }
  })
}

```

## Microsoft.DBforPostgreSQL/servers/keys@2020-01-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DBforPostgreSQL/servers/keys@2020-01-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      serverKeyType = "AzureKeyVault"
      uri = "string"
    }
  })
}

```

## Microsoft.DBforPostgreSQL/servers/privateEndpointConnections@2018-06-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DBforPostgreSQL/servers/privateEndpointConnections@2018-06-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      privateEndpoint = {
        id = "string"
      }
      privateLinkServiceConnectionState = {
        description = "string"
        status = "string"
      }
    }
  })
}

```

## Microsoft.DBforPostgreSQL/servers/securityAlertPolicies@2017-12-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DBforPostgreSQL/servers/securityAlertPolicies@2017-12-01"
  name = "Default"
  parent_id = "string"
  body = jsonencode({
    properties = {
      disabledAlerts = [
        "string"
      ]
      emailAccountAdmins = bool
      emailAddresses = [
        "string"
      ]
      retentionDays = int
      state = "string"
      storageAccountAccessKey = "string"
      storageEndpoint = "string"
    }
  })
}

```

## Microsoft.DBforPostgreSQL/servers/virtualNetworkRules@2017-12-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DBforPostgreSQL/servers/virtualNetworkRules@2017-12-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      ignoreMissingVnetServiceEndpoint = bool
      virtualNetworkSubnetId = "string"
    }
  })
}

```

