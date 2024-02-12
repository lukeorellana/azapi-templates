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


