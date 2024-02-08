```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DataBoxEdge/dataBoxEdgeDevices/storageAccounts@2022-12-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      dataPolicy = "string"
      description = "string"
      storageAccountCredentialId = "string"
      storageAccountStatus = "string"
    }
  })
}

```

### dataBoxEdgeDevices/storageAccounts

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:dataBoxEdgeDevices |
| properties | The Storage Account properties. | StorageAccountProperties(required) |


### StorageAccountProperties

| Name | Description | Value |
|-|-|-|
| dataPolicy | Data policy of the storage Account. | 'Cloud''Local' (required) |
| description | Description for the storage Account. | string |
| storageAccountCredentialId | Storage Account Credential Id | string |
| storageAccountStatus | Current status of the storage account | 'NeedsAttention''OK''Offline''Unknown''Updating' |


