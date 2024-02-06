## Microsoft.DBforMySQL/flexibleServers@2023-10-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DBforMySQL/flexibleServers@2023-10-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  identity {
    type = "UserAssigned"
    identity_ids = []
  }
  body = jsonencode({
    properties = {
      administratorLogin = "string"
      administratorLoginPassword = "string"
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
      importSourceProperties = {
        dataDirPath = "string"
        sasToken = "string"
        storageType = "AzureBlob"
        storageUrl = "string"
      }
      maintenanceWindow = {
        customWindow = "string"
        dayOfWeek = int
        startHour = int
        startMinute = int
      }
      network = {
        delegatedSubnetResourceId = "string"
        privateDnsZoneResourceId = "string"
        publicNetworkAccess = "string"
      }
      replicationRole = "string"
      restorePointInTime = "string"
      sourceServerResourceId = "string"
      storage = {
        autoGrow = "string"
        autoIoScaling = "string"
        iops = int
        logOnDisk = "string"
        storageSizeGB = int
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

## Microsoft.DBforMySQL/flexibleServers/administrators@2023-06-30

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DBforMySQL/flexibleServers/administrators@2023-06-30"
  name = "ActiveDirectory"
  parent_id = "string"
  body = jsonencode({
    properties = {
      administratorType = "ActiveDirectory"
      identityResourceId = "string"
      login = "string"
      sid = "string"
      tenantId = "string"
    }
  })
}

```

## Microsoft.DBforMySQL/flexibleServers/backups@2023-06-30

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DBforMySQL/flexibleServers/backups@2023-06-30"
  name = "string"
  parent_id = "string"
}

```

## Microsoft.DBforMySQL/flexibleServers/configurations@2023-06-30

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DBforMySQL/flexibleServers/configurations@2023-06-30"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      currentValue = "string"
      source = "string"
      value = "string"
    }
  })
}

```

## Microsoft.DBforMySQL/flexibleServers/databases@2023-06-30

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DBforMySQL/flexibleServers/databases@2023-06-30"
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

## Microsoft.DBforMySQL/flexibleServers/firewallRules@2023-06-30

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DBforMySQL/flexibleServers/firewallRules@2023-06-30"
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

## Microsoft.DBforMySQL/flexibleServers/privateEndpointConnections@2023-06-30

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DBforMySQL/flexibleServers/privateEndpointConnections@2023-06-30"
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
      provisioningState = "string"
    }
  })
}

```

## Microsoft.DBforMySQL/servers@2017-12-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DBforMySQL/servers@2017-12-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
    {customized property} = "string"
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

## Microsoft.DBforMySQL/servers/administrators@2017-12-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DBforMySQL/servers/administrators@2017-12-01"
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

## Microsoft.DBforMySQL/servers/configurations@2017-12-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DBforMySQL/servers/configurations@2017-12-01"
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

## Microsoft.DBforMySQL/servers/databases@2017-12-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DBforMySQL/servers/databases@2017-12-01"
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

## Microsoft.DBforMySQL/servers/firewallRules@2017-12-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DBforMySQL/servers/firewallRules@2017-12-01"
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

## Microsoft.DBforMySQL/servers/keys@2020-01-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DBforMySQL/servers/keys@2020-01-01"
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

## Microsoft.DBforMySQL/servers/privateEndpointConnections@2018-06-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DBforMySQL/servers/privateEndpointConnections@2018-06-01"
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

## Microsoft.DBforMySQL/servers/securityAlertPolicies@2017-12-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DBforMySQL/servers/securityAlertPolicies@2017-12-01"
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

## Microsoft.DBforMySQL/servers/virtualNetworkRules@2017-12-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DBforMySQL/servers/virtualNetworkRules@2017-12-01"
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

