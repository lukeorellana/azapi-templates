```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DataLakeAnalytics/accounts/storageAccounts@2019-11-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      accessKey = "string"
      suffix = "string"
    }
  })
}

```

### accounts/storageAccounts

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 3-60Valid characters:Alphanumerics, hyphens, and underscores. |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:accounts |
| properties | The Azure Storage account properties to use when adding a new Azure Storage account. | AddStorageAccountPropertiesOrStorageAccountInformati...(required) |


### AddStorageAccountPropertiesOrStorageAccountInformati...

| Name | Description | Value |
|-|-|-|
| accessKey | The access key associated with this Azure Storage account that will be used to connect to it. | string (required) |
| suffix | The optional suffix for the storage account. | string |


