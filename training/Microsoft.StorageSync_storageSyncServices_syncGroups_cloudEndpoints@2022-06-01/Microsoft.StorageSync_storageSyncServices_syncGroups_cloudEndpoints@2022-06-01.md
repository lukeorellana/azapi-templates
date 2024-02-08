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


