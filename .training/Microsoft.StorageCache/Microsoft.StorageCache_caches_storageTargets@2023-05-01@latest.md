```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.StorageCache/caches/storageTargets@2023-05-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      blobNfs = {
        target = "string"
        usageModel = "string"
        verificationTimer = int
        writeBackTimer = int
      }
      clfs = {
        target = "string"
      }
      junctions = [
        {
          namespacePath = "string"
          nfsAccessPolicy = "string"
          nfsExport = "string"
          targetPath = "string"
        }
      ]
      nfs3 = {
        target = "string"
        usageModel = "string"
        verificationTimer = int
        writeBackTimer = int
      }
      state = "string"
      targetType = "string"
      unknown = {
        attributes = {}
      }
    }
  })
}

```

### caches/storageTargets

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:caches |
| properties | StorageTarget properties | StorageTargetProperties |


### StorageTargetProperties

| Name | Description | Value |
|-|-|-|
| blobNfs | Properties when targetType is blobNfs. | BlobNfsTarget |
| clfs | Properties when targetType is clfs. | ClfsTarget |
| junctions | List of cache namespace junctions to target for namespace associations. | NamespaceJunction[] |
| nfs3 | Properties when targetType is nfs3. | Nfs3Target |
| state | Storage target operational state. | 'Busy''Flushing''Ready''Suspended' |
| targetType | Type of the Storage Target. | 'blobNfs''clfs''nfs3''unknown' (required) |
| unknown | Properties when targetType is unknown. | UnknownTarget |


### BlobNfsTarget

| Name | Description | Value |
|-|-|-|
| target | Resource ID of the storage container. | string |
| usageModel | Identifies the StorageCache usage model to be used for this storage target. | string |
| verificationTimer | Amount of time (in seconds) the cache waits before it checks the back-end storage for file updates. | int |
| writeBackTimer | Amount of time (in seconds) the cache waits after the last file change before it copies the changed file to back-end storage. | int |


### ClfsTarget

| Name | Description | Value |
|-|-|-|
| target | Resource ID of storage container. | string |


### NamespaceJunction

| Name | Description | Value |
|-|-|-|
| namespacePath | Namespace path on a cache for a Storage Target. | string |
| nfsAccessPolicy | Name of the access policy applied to this junction. | string |
| nfsExport | NFS export where targetPath exists. | string |
| targetPath | Path in Storage Target to which namespacePath points. | string |


### Nfs3Target

| Name | Description | Value |
|-|-|-|
| target | IP address or host name of an NFSv3 host (e.g., 10.0.44.44). | string |
| usageModel | Identifies the StorageCache usage model to be used for this storage target. | string |
| verificationTimer | Amount of time (in seconds) the cache waits before it checks the back-end storage for file updates. | int |
| writeBackTimer | Amount of time (in seconds) the cache waits after the last file change before it copies the changed file to back-end storage. | int |


### UnknownTarget

| Name | Description | Value |
|-|-|-|
| attributes | Dictionary of string->string pairs containing information about the Storage Target. | object |


