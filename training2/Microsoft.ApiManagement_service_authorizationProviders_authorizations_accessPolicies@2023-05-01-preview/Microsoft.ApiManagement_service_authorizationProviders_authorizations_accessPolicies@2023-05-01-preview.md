```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ApiManagement/service/authorizationProviders/authorizations/accessPolicies@2023-05-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      appIds = [
        "string"
      ]
      objectId = "string"
      tenantId = "string"
    }
  })
}

```

### service/authorizationProviders/authorizations/access...

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:authorizations |
| properties | Properties of the Authorization Contract. | AuthorizationAccessPolicyContractProperties |


### AuthorizationAccessPolicyContractProperties

| Name | Description | Value |
|-|-|-|
| appIds | The allowed Azure Active Directory Application IDs | string[] |
| objectId | The Object Id | string |
| tenantId | The Tenant Id | string |


