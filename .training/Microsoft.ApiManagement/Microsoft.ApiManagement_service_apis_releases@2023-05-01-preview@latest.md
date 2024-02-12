```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ApiManagement/service/apis/releases@2023-05-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      apiId = "string"
      notes = "string"
    }
  })
}

```

### service/apis/releases

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-80Valid characters:Alphanumerics, underscores, and hyphens.Start and end with alphanumeric or underscore. |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:apis |
| properties | ApiRelease entity contract properties. | ApiReleaseContractProperties |


### ApiReleaseContractProperties

| Name | Description | Value |
|-|-|-|
| apiId | Identifier of the API the release belongs to. | string |
| notes | Release Notes | string |


