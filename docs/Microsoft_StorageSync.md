## Microsoft.StorageSync/storageSyncServices@2022-06-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.StorageSync/storageSyncServices@2022-06-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      incomingTrafficPolicy = "string"
    }
  })
}

```

## Microsoft.StorageSync/storageSyncServices/privateEndpointConnections@2022-06-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.StorageSync/storageSyncServices/privateEndpointConnections@2022-06-01"
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

## Microsoft.StorageSync/storageSyncServices/registeredServers@2022-06-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.StorageSync/storageSyncServices/registeredServers@2022-06-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      agentVersion = "string"
      clusterId = "string"
      clusterName = "string"
      friendlyName = "string"
      lastHeartBeat = "string"
      serverCertificate = "string"
      serverId = "string"
      serverOSVersion = "string"
      serverRole = "string"
    }
  })
}

```

## Microsoft.StorageSync/storageSyncServices/syncGroups@2022-06-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.StorageSync/storageSyncServices/syncGroups@2022-06-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
  })
}

```

## Microsoft.StorageSync/storageSyncServices/syncGroups/cloudEndpoints@2022-06-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.StorageSync/storageSyncServices/syncGroups/cloudEndpoints@2022-06-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      azureFileShareName = "string"
      friendlyName = "string"
      storageAccountResourceId = "string"
      storageAccountTenantId = "string"
    }
  })
}

```

## Microsoft.StorageSync/storageSyncServices/syncGroups/serverEndpoints@2022-06-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.StorageSync/storageSyncServices/syncGroups/serverEndpoints@2022-06-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      cloudTiering = "string"
      friendlyName = "string"
      initialDownloadPolicy = "string"
      initialUploadPolicy = "string"
      localCacheMode = "string"
      offlineDataTransfer = "string"
      offlineDataTransferShareName = "string"
      serverLocalPath = "string"
      serverResourceId = "string"
      tierFilesOlderThanDays = int
      volumeFreeSpacePercent = int
    }
  })
}

```

