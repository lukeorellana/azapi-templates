```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ApiManagement/service/products/policies@2023-05-01-preview"
  name = "policy"
  parent_id = "string"
  body = jsonencode({
    properties = {
      format = "string"
      value = "string"
    }
  })
}

```

### service/products/policies

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'policy' |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:products |
| properties | Properties of the Policy. | PolicyContractProperties |


### PolicyContractProperties

| Name | Description | Value |
|-|-|-|
| format | Format of the policyContent. | 'rawxml''rawxml-link''xml''xml-link' |
| value | Contents of the Policy as defined by the format. | string (required) |


