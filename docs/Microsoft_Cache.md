## Microsoft.Cache/redis@2023-08-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Cache/redis@2023-08-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
    {customized property} = "string"
  identity {
    type = "string"
    identity_ids = []
  }
  body = jsonencode({
    properties = {
      enableNonSslPort = bool
      minimumTlsVersion = "string"
      publicNetworkAccess = "string"
      redisConfiguration = {
        aad-enabled = "string"
        aof-backup-enabled = "string"
        aof-storage-connection-string-0 = "string"
        aof-storage-connection-string-1 = "string"
        authnotrequired = "string"
        maxfragmentationmemory-reserved = "string"
        maxmemory-delta = "string"
        maxmemory-policy = "string"
        maxmemory-reserved = "string"
        preferred-data-persistence-auth-method = "string"
        rdb-backup-enabled = "string"
        rdb-backup-frequency = "string"
        rdb-backup-max-snapshot-count = "string"
        rdb-storage-connection-string = "string"
        storage-subscription-id = "string"
      }
      redisVersion = "string"
      replicasPerMaster = int
      replicasPerPrimary = int
      shardCount = int
      sku = {
        capacity = int
        family = "string"
        name = "string"
      }
      staticIP = "string"
      subnetId = "string"
      tenantSettings = {
        {customized property} = "string"
      }
      updateChannel = "string"
    }
    zones = [
      "string"
    ]
  })
}

```

## Microsoft.Cache/redis/accessPolicies@2023-08-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Cache/redis/accessPolicies@2023-08-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      permissions = "string"
    }
  })
}

```

## Microsoft.Cache/redis/accessPolicyAssignments@2023-08-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Cache/redis/accessPolicyAssignments@2023-08-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      accessPolicyName = "string"
      objectId = "string"
      objectIdAlias = "string"
    }
  })
}

```

## Microsoft.Cache/redis/firewallRules@2023-08-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Cache/redis/firewallRules@2023-08-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      endIP = "string"
      startIP = "string"
    }
  })
}

```

## Microsoft.Cache/redis/linkedServers@2023-08-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Cache/redis/linkedServers@2023-08-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      linkedRedisCacheId = "string"
      linkedRedisCacheLocation = "string"
      serverRole = "string"
    }
  })
}

```

## Microsoft.Cache/redis/patchSchedules@2023-08-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Cache/redis/patchSchedules@2023-08-01"
  name = "default"
  parent_id = "string"
  body = jsonencode({
    properties = {
      scheduleEntries = [
        {
          dayOfWeek = "string"
          maintenanceWindow = "string"
          startHourUtc = int
        }
      ]
    }
  })
}

```

## Microsoft.Cache/redis/privateEndpointConnections@2023-08-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Cache/redis/privateEndpointConnections@2023-08-01"
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

## Microsoft.Cache/redisEnterprise@2023-11-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Cache/redisEnterprise@2023-11-01"
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
      encryption = {
        customerManagedKeyEncryption = {
          keyEncryptionKeyIdentity = {
            identityType = "string"
            userAssignedIdentityResourceId = "string"
          }
          keyEncryptionKeyUrl = "string"
        }
      }
      minimumTlsVersion = "string"
    }
    zones = [
      "string"
    ]
    sku = {
      capacity = int
      name = "string"
    }
  })
}

```

## Microsoft.Cache/redisEnterprise/databases@2023-11-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Cache/redisEnterprise/databases@2023-11-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      clientProtocol = "string"
      clusteringPolicy = "string"
      evictionPolicy = "string"
      geoReplication = {
        groupNickname = "string"
        linkedDatabases = [
          {
            id = "string"
          }
        ]
      }
      modules = [
        {
          args = "string"
          name = "string"
        }
      ]
      persistence = {
        aofEnabled = bool
        aofFrequency = "string"
        rdbEnabled = bool
        rdbFrequency = "string"
      }
      port = int
    }
  })
}

```

## Microsoft.Cache/redisEnterprise/privateEndpointConnections@2023-11-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Cache/redisEnterprise/privateEndpointConnections@2023-11-01"
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

