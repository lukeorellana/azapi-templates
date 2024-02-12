```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AppPlatform/Spring/buildServices@2023-03-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      containerRegistry = "string"
      resourceRequests = {}
    }
  })
}

```

### Spring/buildServices

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:Spring |
| properties | Properties of the build resource | BuildServiceProperties |


### BuildServiceProperties

| Name | Description | Value |
|-|-|-|
| containerRegistry | The resource id of the container registry used in this build service. | string |
| resourceRequests | The runtime resource configuration of this build service. | BuildServicePropertiesResourceRequests |


