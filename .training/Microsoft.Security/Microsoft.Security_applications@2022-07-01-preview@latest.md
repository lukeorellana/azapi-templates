```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Security/applications@2022-07-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      conditionSets = [ object ]
      description = "string"
      displayName = "string"
      sourceResourceType = "Assessments"
    }
  })
}

```

### applications

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| scope | Use when creating an extension resource at a scope that is different than the deployment scope. | Target resourceFor Bicep, set this property to the symbolic name of the resource to apply theextension resource. |
| properties | Properties of a security application | ApplicationProperties |


### ApplicationProperties

| Name | Description | Value |
|-|-|-|
| conditionSets | The application conditionSets - see examples | any[] (required) |
| description | description of the application | string |
| displayName | display name of the application | string |
| sourceResourceType | The application source, what it affects, e.g. Assessments | 'Assessments' (required) |


