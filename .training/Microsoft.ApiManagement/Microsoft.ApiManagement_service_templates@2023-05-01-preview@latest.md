```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ApiManagement/service/templates@2023-05-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      body = "string"
      description = "string"
      parameters = [
        {
          description = "string"
          name = "string"
          title = "string"
        }
      ]
      subject = "string"
      title = "string"
    }
  })
}

```

### service/templates

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-80Valid characters:Alphanumerics and hyphens.Start with letter and end with alphanumeric. |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:service |
| properties | Email Template Update contract properties. | EmailTemplateUpdateParameterPropertiesOrEmailTemplat... |


### EmailTemplateUpdateParameterPropertiesOrEmailTemplat...

| Name | Description | Value |
|-|-|-|
| body | Email Template Body. This should be a valid XDocument | string |
| description | Description of the Email Template. | string |
| parameters | Email Template Parameter values. | EmailTemplateParametersContractProperties[] |
| subject | Subject of the Template. | string |
| title | Title of the Template. | string |


### EmailTemplateParametersContractProperties

| Name | Description | Value |
|-|-|-|
| description | Template parameter description. | string |
| name | Template parameter name. | string |
| title | Template parameter title. | string |


