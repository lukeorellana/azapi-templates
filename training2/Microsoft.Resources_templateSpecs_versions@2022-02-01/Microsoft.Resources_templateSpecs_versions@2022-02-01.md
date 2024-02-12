```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Resources/templateSpecs/versions@2022-02-01"
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
      linkedTemplates = [
        {
          path = "string"
        }
      ]
    }
  })
}

```

### templateSpecs/versions

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | The location of the Template Spec Version. It must match the location of the parent Template Spec. | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:templateSpecs |
| properties | Template Spec Version properties. | TemplateSpecVersionProperties(required) |


### TemplateSpecVersionProperties

| Name | Description | Value |
|-|-|-|
| description | Template Spec version description. | string |
| linkedTemplates | An array of linked template artifacts. | LinkedTemplateArtifact[] |
| mainTemplate | The main Azure Resource Manager template content. | For Bicep, you can use theany()function. |
| metadata | The version metadata. Metadata is an open-ended object and is typically a collection of key-value pairs. | For Bicep, you can use theany()function. |
| uiFormDefinition | The Azure Resource Manager template UI definition content. | For Bicep, you can use theany()function. |


### LinkedTemplateArtifact

| Name | Description | Value |
|-|-|-|
| path | A filesystem safe relative path of the artifact. | string (required) |
| template | The Azure Resource Manager template. | For Bicep, you can use theany()function.(required) |


