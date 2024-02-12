```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.CustomProviders/associations@2018-09-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      targetResourceId = "string"
    }
  })
}

```

### associations

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 1-180Valid characters:Can't use:%&\\?/or control charactersCan't end with period or space. |
| scope | Use when creating an extension resource at a scope that is different than the deployment scope. | Target resourceFor Bicep, set this property to the symbolic name of the resource to apply theextension resource. |
| properties | The properties of the association. | AssociationProperties |


### AssociationProperties

| Name | Description | Value |
|-|-|-|
| targetResourceId | The REST resource instance of the target resource for this association. | string |


