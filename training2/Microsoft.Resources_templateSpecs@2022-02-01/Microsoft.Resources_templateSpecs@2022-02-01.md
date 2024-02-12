```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Resources/templateSpecs@2022-02-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      description = "string"
      displayName = "string"
    }
  })
}

```

### templateSpecs

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 1-90Valid characters:Alphanumerics, underscores, parentheses, hyphens, and periods. |
| location | The location of the Template Spec. It cannot be changed after Template Spec creation. It must be one of the supported Azure locations. | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| properties | Template Spec properties. | TemplateSpecProperties |


### TemplateSpecProperties

| Name | Description | Value |
|-|-|-|
| description | Template Spec description. | string |
| displayName | Template Spec display name. | string |
| metadata | The Template Spec metadata. Metadata is an open-ended object and is typically a collection of key-value pairs. | For Bicep, you can use theany()function. |


