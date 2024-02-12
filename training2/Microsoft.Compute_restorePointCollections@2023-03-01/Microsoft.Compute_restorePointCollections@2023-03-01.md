```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Compute/restorePointCollections@2023-03-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      source = {
        id = "string"
      }
    }
  })
}

```

### restorePointCollections

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | Resource location | string (required) |
| tags | Resource tags | Dictionary of tag names and values. SeeTags in templates |
| properties | The restore point collection properties. | RestorePointCollectionProperties |


### RestorePointCollectionProperties

| Name | Description | Value |
|-|-|-|
| source | The properties of the source resource that this restore point collection is created from. | RestorePointCollectionSourceProperties |


### RestorePointCollectionSourceProperties

| Name | Description | Value |
|-|-|-|
| id | Resource Id of the source resource used to create this restore point collection | string |


