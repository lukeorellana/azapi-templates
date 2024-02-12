```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ApiManagement/service/apis/tagDescriptions@2023-05-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      description = "string"
      externalDocsDescription = "string"
      externalDocsUrl = "string"
    }
  })
}

```

### service/apis/tagDescriptions

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-80Valid characters:Alphanumerics and hyphens.Start with letter and end with alphanumeric. |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:apis |
| properties | Properties supplied to Create TagDescription operation. | TagDescriptionBasePropertiesOrTagDescriptionContract... |


### TagDescriptionBasePropertiesOrTagDescriptionContract...

| Name | Description | Value |
|-|-|-|
| description | Description of the Tag. | string |
| externalDocsDescription | Description of the external resources describing the tag. | string |
| externalDocsUrl | Absolute URL of external resources describing the tag. | string |


