```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ApiManagement/service/policyFragments@2023-05-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      description = "string"
      format = "string"
      value = "string"
    }
  })
}

```

### service/policyFragments

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:service |
| properties | Properties of the Policy Fragment. | PolicyFragmentContractProperties |


### PolicyFragmentContractProperties

| Name | Description | Value |
|-|-|-|
| description | Policy fragment description. | string |
| format | Format of the policy fragment content. | 'rawxml''xml' |
| value | Contents of the policy fragment. | string (required) |


