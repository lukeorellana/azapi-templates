```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ApiManagement/service/apis/issues/attachments@2023-05-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      content = "string"
      contentFormat = "string"
      title = "string"
    }
  })
}

```

### service/apis/issues/attachments

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-80Valid characters:Alphanumerics and hyphens.Start with letter and end with alphanumeric. |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:issues |
| properties | Properties of the Issue Attachment. | IssueAttachmentContractProperties |


### IssueAttachmentContractProperties

| Name | Description | Value |
|-|-|-|
| content | An HTTP link or Base64-encoded binary data. | string (required) |
| contentFormat | Either 'link' if content is provided via an HTTP link or the MIME type of the Base64-encoded binary data provided in the 'content' property. | string (required) |
| title | Filename by which the binary data will be saved. | string (required) |


