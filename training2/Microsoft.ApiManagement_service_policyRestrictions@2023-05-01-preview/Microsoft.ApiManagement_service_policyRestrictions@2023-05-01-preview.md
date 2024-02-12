```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ApiManagement/service/policyRestrictions@2023-05-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      requireBase = "string"
      scope = "string"
    }
  })
}

```

### service/policyRestrictions

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:service |
| properties | Properties of the Policy Restriction. | PolicyRestrictionContractProperties |


### PolicyRestrictionContractProperties

| Name | Description | Value |
|-|-|-|
| requireBase | Indicates if base policy should be enforced for the policy document. | 'false''true' |
| scope | Path to the policy document. | string |


