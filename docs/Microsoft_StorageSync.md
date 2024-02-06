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

### storageSyncServices

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 1-260Valid characters:Alphanumerics, spaces, periods, hyphens, and underscores.Can't end with period or space. |
| location | Required. Gets or sets the location of the resource. This will be one of the supported and registered Azure Geo Regions (e.g. West US, East US, Southeast Asia, etc.). The geo region of a resource cannot be changed once it is created, but if an identical geo region is specified on update, the request will succeed. | string (required) |
| tags | Gets or sets a list of key value pairs that describe the resource. These tags can be used for viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key with a length no greater than 128 characters and a value with a length no greater than 256 characters. | Dictionary of tag names and values. SeeTags in templates |
| properties | The parameters used to create the storage sync service. | StorageSyncServiceCreateParametersPropertiesOrStorag... |


### StorageSyncServiceCreateParametersPropertiesOrStorag...

| Name | Description | Value |
|-|-|-|
| incomingTrafficPolicy | Incoming Traffic Policy | 'AllowAllTraffic''AllowVirtualNetworksOnly' |
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

### storageSyncServices/privateEndpointConnections

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:storageSyncServices |
| properties | Resource properties. | PrivateEndpointConnectionProperties |


### PrivateEndpointConnectionProperties

| Name | Description | Value |
|-|-|-|
| privateEndpoint | The resource of private end point. | PrivateEndpoint |
| privateLinkServiceConnectionState | A collection of information about the state of the connection between service consumer and provider. | PrivateLinkServiceConnectionState(required) |


### PrivateLinkServiceConnectionState

| Name | Description | Value |
|-|-|-|
| actionsRequired | A message indicating if changes on the service provider require any updates on the consumer. | string |
| description | The reason for approval/rejection of the connection. | string |
| status | Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service. | 'Approved''Pending''Rejected' |
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

### storageSyncServices/registeredServers

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:storageSyncServices |
| properties | The parameters used to create the registered server. | RegisteredServerCreateParametersPropertiesOrRegister... |


### RegisteredServerCreateParametersPropertiesOrRegister...

| Name | Description | Value |
|-|-|-|
| agentVersion | Registered Server Agent Version | string |
| clusterId | Registered Server clusterId | string |
| clusterName | Registered Server clusterName | string |
| friendlyName | Friendly Name | string |
| lastHeartBeat | Registered Server last heart beat | string |
| serverCertificate | Registered Server Certificate | string |
| serverId | Registered Server serverId | string |
| serverOSVersion | Registered Server OS Version | string |
| serverRole | Registered Server serverRole | string |
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

### storageSyncServices/syncGroups

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-260Valid characters:Alphanumerics, spaces, periods, hyphens, and underscores.Can't end with period or space. |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:storageSyncServices |
| properties | The parameters used to create the sync group | For Bicep, you can use theany()function. |
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

### storageSyncServices/syncGroups/cloudEndpoints

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:syncGroups |
| properties | The parameters used to create the cloud endpoint. | CloudEndpointCreateParametersPropertiesOrCloudEndpoi... |


### CloudEndpointCreateParametersPropertiesOrCloudEndpoi...

| Name | Description | Value |
|-|-|-|
| azureFileShareName | Azure file share name | string |
| friendlyName | Friendly Name | string |
| storageAccountResourceId | Storage Account Resource Id | string |
| storageAccountTenantId | Storage Account Tenant Id | string |
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

### storageSyncServices/syncGroups/serverEndpoints

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:syncGroups |
| properties | The parameters used to create the server endpoint. | ServerEndpointCreateParametersPropertiesOrServerEndp... |


### ServerEndpointCreateParametersPropertiesOrServerEndp...

| Name | Description | Value |
|-|-|-|
| cloudTiering | Cloud Tiering. | 'off''on' |
| friendlyName | Friendly Name | string |
| initialDownloadPolicy | Policy for how namespace and files are recalled during FastDr. | 'AvoidTieredFiles''NamespaceOnly''NamespaceThenModifiedFiles' |
| initialUploadPolicy | Policy for how the initial upload sync session is performed. | 'Merge''ServerAuthoritative' |
| localCacheMode | Policy for enabling follow-the-sun business models: link local cache to cloud behavior to pre-populate before local access. | 'DownloadNewAndModifiedFiles''UpdateLocallyCachedFiles' |
| offlineDataTransfer | Offline data transfer | 'off''on' |
| offlineDataTransferShareName | Offline data transfer share name | string |
| serverLocalPath | Server Local path. | string |
| serverResourceId | Server Resource Id. | string |
| tierFilesOlderThanDays | Tier files older than days. | int |
| volumeFreeSpacePercent | Level of free space to be maintained by Cloud Tiering if it is enabled. | int |
