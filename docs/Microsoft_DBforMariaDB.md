## Microsoft.DBforMariaDB/servers@2018-06-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DBforMariaDB/servers@2018-06-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
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

## Microsoft.DBforMariaDB/servers/configurations@2018-06-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DBforMariaDB/servers/configurations@2018-06-01"
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

## Microsoft.DBforMariaDB/servers/databases@2018-06-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DBforMariaDB/servers/databases@2018-06-01"
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

## Microsoft.DBforMariaDB/servers/firewallRules@2018-06-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DBforMariaDB/servers/firewallRules@2018-06-01"
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

## Microsoft.DBforMariaDB/servers/privateEndpointConnections@2018-06-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DBforMariaDB/servers/privateEndpointConnections@2018-06-01"
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

## Microsoft.DBforMariaDB/servers/securityAlertPolicies@2018-06-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DBforMariaDB/servers/securityAlertPolicies@2018-06-01"
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

## Microsoft.DBforMariaDB/servers/virtualNetworkRules@2018-06-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DBforMariaDB/servers/virtualNetworkRules@2018-06-01"
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

