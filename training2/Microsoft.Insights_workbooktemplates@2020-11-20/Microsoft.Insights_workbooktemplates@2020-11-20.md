```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Insights/workbooktemplates@2020-11-20"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      author = "string"
      galleries = [
        {
          category = "string"
          name = "string"
          order = int
          resourceType = "string"
          type = "string"
        }
      ]
      localized = {}
      priority = int
    }
  })
}

```

### workbooktemplates

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | Resource location | string (required) |
| tags | Resource tags | Dictionary of tag names and values. SeeTags in templates |
| properties | Metadata describing a workbook template for an Azure resource. | WorkbookTemplateProperties |


### WorkbookTemplateProperties

| Name | Description | Value |
|-|-|-|
| author | Information about the author of the workbook template. | string |
| galleries | Workbook galleries supported by the template. | WorkbookTemplateGallery[] (required) |
| localized | Key value pair of localized gallery. Each key is the locale code of languages supported by the Azure portal. | object |
| priority | Priority of the template. Determines which template to open when a workbook gallery is opened in viewer mode. | int |
| templateData | Valid JSON object containing workbook template payload. | For Bicep, you can use theany()function.(required) |


### WorkbookTemplateGallery

| Name | Description | Value |
|-|-|-|
| category | Category for the gallery. | string |
| name | Name of the workbook template in the gallery. | string |
| order | Order of the template within the gallery. | int |
| resourceType | Azure resource type supported by the gallery. | string |
| type | Type of workbook supported by the workbook template. | string |


