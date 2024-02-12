```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ApiManagement/service/apis/issues@2023-05-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      apiId = "string"
      createdDate = "string"
      description = "string"
      state = "string"
      title = "string"
      userId = "string"
    }
  })
}

```

### service/apis/issues

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-80Valid characters:Alphanumerics and hyphens.Start with letter and end with alphanumeric. |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:apis |
| properties | Properties of the Issue. | IssueContractProperties |


### IssueContractProperties

| Name | Description | Value |
|-|-|-|
| apiId | A resource identifier for the API the issue was created for. | string |
| createdDate | Date and time when the issue was created. | string |
| description | Text describing the issue. | string (required) |
| state | Status of the issue. | 'closed''open''proposed''removed''resolved' |
| title | The issue title. | string (required) |
| userId | A resource identifier for the user created the issue. | string (required) |


