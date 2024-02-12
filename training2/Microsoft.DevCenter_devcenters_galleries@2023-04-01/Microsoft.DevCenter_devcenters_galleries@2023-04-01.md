```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DevCenter/devcenters/galleries@2023-04-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      galleryResourceId = "string"
    }
  })
}

```

### devcenters/galleries

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:devcenters |
| properties | Gallery properties. | GalleryProperties |


### GalleryProperties

| Name | Description | Value |
|-|-|-|
| galleryResourceId | The resource ID of the backing Azure Compute Gallery. | string (required) |


