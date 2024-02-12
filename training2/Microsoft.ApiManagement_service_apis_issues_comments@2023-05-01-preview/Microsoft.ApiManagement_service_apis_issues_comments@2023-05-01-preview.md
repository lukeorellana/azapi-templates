```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ApiManagement/service/apis/issues/comments@2023-05-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      createdDate = "string"
      text = "string"
      userId = "string"
    }
  })
}

```

### service/apis/issues/comments

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-80Valid characters:Alphanumerics and hyphens.Start with letter and end with alphanumeric. |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:issues |
| properties | Properties of the Issue Comment. | IssueCommentContractProperties |


### IssueCommentContractProperties

| Name | Description | Value |
|-|-|-|
| createdDate | Date and time when the comment was created. | string |
| text | Comment text. | string (required) |
| userId | A resource identifier for the user who left the comment. | string (required) |


