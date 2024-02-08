```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.LabServices/labaccounts/galleryimages@2018-10-15"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      isEnabled = bool
      isOverride = bool
      isPlanAuthorized = bool
      provisioningState = "string"
      uniqueIdentifier = "string"
    }
  })
}

```

### labaccounts/galleryimages

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | The location of the resource. | string |
| tags | The tags of the resource. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:labaccounts |
| properties | The gallery image properties | GalleryImageProperties |


### GalleryImageProperties

| Name | Description | Value |
|-|-|-|
| isEnabled | Indicates whether this gallery image is enabled. | bool |
| isOverride | Indicates whether this gallery has been overridden for this lab account | bool |
| isPlanAuthorized | Indicates if the plan has been authorized for programmatic deployment. | bool |
| provisioningState | The provisioning status of the resource. | string |
| uniqueIdentifier | The unique immutable identifier of a resource (Guid). | string |


