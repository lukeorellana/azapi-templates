```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ApiManagement/service/workspaces/apiVersionSets@2023-05-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      description = "string"
      displayName = "string"
      versionHeaderName = "string"
      versioningScheme = "string"
      versionQueryName = "string"
    }
  })
}

```

### service/workspaces/apiVersionSets

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:workspaces |
| properties | API VersionSet contract properties. | ApiVersionSetContractProperties |


### ApiVersionSetContractProperties

| Name | Description | Value |
|-|-|-|
| description | Description of API Version Set. | string |
| displayName | Name of API Version Set | string (required) |
| versionHeaderName | Name of HTTP header parameter that indicates the API Version if versioningScheme is set toheader. | string |
| versioningScheme | An value that determines where the API Version identifier will be located in a HTTP request. | 'Header''Query''Segment' (required) |
| versionQueryName | Name of query parameter that indicates the API Version if versioningScheme is set toquery. | string |


