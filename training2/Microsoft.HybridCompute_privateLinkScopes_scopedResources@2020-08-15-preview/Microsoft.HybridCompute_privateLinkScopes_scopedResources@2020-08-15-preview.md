```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.HybridCompute/privateLinkScopes/scopedResources@2020-08-15-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      linkedResourceId = "string"
    }
  })
}

```

### privateLinkScopes/scopedResources

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:privateLinkScopes |
| properties | Resource properties. | ScopedResourceProperties |


### ScopedResourceProperties

| Name | Description | Value |
|-|-|-|
| linkedResourceId | The resource id of the scoped Azure monitor resource. | string |


