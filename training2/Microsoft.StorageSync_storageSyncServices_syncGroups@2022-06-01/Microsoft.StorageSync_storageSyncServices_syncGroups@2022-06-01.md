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


