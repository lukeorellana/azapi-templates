```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DataLakeAnalytics/accounts/dataLakeStoreAccounts@2019-11-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      suffix = "string"
    }
  })
}

```

### accounts/dataLakeStoreAccounts

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 3-24Valid characters:Lowercase letters and numbers. |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:accounts |
| properties | The Data Lake Store account properties to use when adding a new Data Lake Store account. | AddDataLakeStorePropertiesOrDataLakeStoreAccountInfo... |


### AddDataLakeStorePropertiesOrDataLakeStoreAccountInfo...

| Name | Description | Value |
|-|-|-|
| suffix | The optional suffix for the Data Lake Store account. | string |


