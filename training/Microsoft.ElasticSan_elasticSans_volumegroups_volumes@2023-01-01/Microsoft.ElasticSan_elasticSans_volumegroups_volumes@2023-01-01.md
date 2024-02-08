```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ElasticSan/elasticSans/volumegroups/volumes@2023-01-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      creationData = {
        createSource = "string"
        sourceId = "string"
      }
      managedBy = {
        resourceId = "string"
      }
      sizeGiB = int
    }
  })
}

```

### elasticSans/volumegroups/volumes

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:volumegroups |
| properties | Properties of Volume. | VolumeProperties(required) |


### VolumeProperties

| Name | Description | Value |
|-|-|-|
| creationData | State of the operation on the resource. | SourceCreationData |
| managedBy | Parent resource information. | ManagedByInfo |
| sizeGiB | Volume size. | int (required) |


### SourceCreationData

| Name | Description | Value |
|-|-|-|
| createSource | This enumerates the possible sources of a volume creation. | 'Disk''DiskRestorePoint''DiskSnapshot''None''VolumeSnapshot' |
| sourceId | Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}" | string |


### ManagedByInfo

| Name | Description | Value |
|-|-|-|
| resourceId | Resource ID of the resource managing the volume, this is a restricted field and can only be set for internal use. | string |


