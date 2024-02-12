```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Storage/storageAccounts/fileServices/shares@2022-09-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      accessTier = "string"
      enabledProtocols = "string"
      metadata = {}
      rootSquash = "string"
      shareQuota = int
      signedIdentifiers = [
        {
          accessPolicy = {
            expiryTime = "string"
            permission = "string"
            startTime = "string"
          }
          id = "string"
        }
      ]
    }
  })
}

```

### storageAccounts/fileServices/shares

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 3-63Valid characters:Lowercase letters, numbers, and hyphens.Can't start or end with hyphen. Can't use consecutive hyphens. |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:fileServices |
| properties | Properties of the file share. | FileShareProperties |


### FileShareProperties

| Name | Description | Value |
|-|-|-|
| accessTier | Access tier for specific share. GpV2 account can choose between TransactionOptimized (default), Hot, and Cool. FileStorage account can choose Premium. | 'Cool''Hot''Premium''TransactionOptimized' |
| enabledProtocols | The authentication protocol that is used for the file share. Can only be specified when creating a share. | 'NFS''SMB' |
| metadata | A name-value pair to associate with the share as metadata. | object |
| rootSquash | The property is for NFS share only. The default is NoRootSquash. | 'AllSquash''NoRootSquash''RootSquash' |
| shareQuota | The maximum size of the share, in gigabytes. Must be greater than 0, and less than or equal to 5TB (5120). For Large File Shares, the maximum size is 102400. | int |
| signedIdentifiers | List of stored access policies specified on the share. | SignedIdentifier[] |


### SignedIdentifier

| Name | Description | Value |
|-|-|-|
| accessPolicy | Access policy | AccessPolicy |
| id | An unique identifier of the stored access policy. | string |


### AccessPolicy

| Name | Description | Value |
|-|-|-|
| expiryTime | Expiry time of the access policy | string |
| permission | List of abbreviated permissions. | string |
| startTime | Start time of the access policy | string |


