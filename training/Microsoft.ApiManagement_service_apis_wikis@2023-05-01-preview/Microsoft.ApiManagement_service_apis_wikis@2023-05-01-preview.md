```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ApiManagement/service/apis/wikis@2023-05-01-preview"
  name = "default"
  parent_id = "string"
  body = jsonencode({
    properties = {
      documents = [
        {
          documentationId = "string"
        }
      ]
    }
  })
}

```

### service/apis/wikis

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'default' |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:apis |
| properties | Wiki details. | WikiContractProperties |


### WikiContractProperties

| Name | Description | Value |
|-|-|-|
| documents | Collection wiki documents included into this wiki. | WikiDocumentationContract[] |


### WikiDocumentationContract

| Name | Description | Value |
|-|-|-|
| documentationId | Documentation Identifier | string |


