```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.RecoveryServices/vaults/replicationFabrics/replicationStorageClassifications/replicationStorageClassificationMappings@2022-10-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      targetStorageClassificationId = "string"
    }
  })
}

```

### vaults/replicationFabrics/replicationStorageClassifi...

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type: replicationStorageClassifications |
| properties | Storage mapping input properties. | StorageMappingInputPropertiesOrStorageClassification... |


### StorageMappingInputPropertiesOrStorageClassification...

| Name | Description | Value |
|-|-|-|
| targetStorageClassificationId | The ID of the storage object. | string |


