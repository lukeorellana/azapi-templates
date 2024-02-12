```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Billing/billingAccounts/departments/billingRoleAssignments@2019-10-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      principalId = "string"
      principalTenantId = "string"
      roleDefinitionId = "string"
      userAuthenticationType = "string"
      userEmailAddress = "string"
    }
  })
}

```

### billingAccounts/departments/billingRoleAssignments

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type: departments |
| properties | The properties of the role assignment. | BillingRoleAssignmentProperties |


### BillingRoleAssignmentProperties

| Name | Description | Value |
|-|-|-|
| principalId | The principal id of the user to whom the role was assigned. | string |
| principalTenantId | The principal tenant id of the user to whom the role was assigned. | string |
| roleDefinitionId | The ID of the role definition. | string |
| userAuthenticationType | The authentication type of the user, whether Organization or MSA, of the user to whom the role was assigned. This is supported only for billing accounts with agreement type Enterprise Agreement. | string |
| userEmailAddress | The email address of the user to whom the role was assigned. This is supported only for billing accounts with agreement type Enterprise Agreement. | string |


