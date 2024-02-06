## Microsoft.ManagedServices/registrationAssignments@2022-10-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ManagedServices/registrationAssignments@2022-10-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      registrationDefinitionId = "string"
    }
  })
}

```

### registrationAssignments

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| scope | Use when creating an extension resource at a scope that is different than the deployment scope. | Target resourceFor Bicep, set this property to the symbolic name of the resource to apply theextension resource. |
| properties | The properties of a registration assignment. | RegistrationAssignmentProperties |


### RegistrationAssignmentProperties

| Name | Description | Value |
|-|-|-|
| registrationDefinitionId | The fully qualified path of the registration definition. | string (required) |
## Microsoft.ManagedServices/registrationDefinitions@2022-10-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ManagedServices/registrationDefinitions@2022-10-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      authorizations = [
        {
          delegatedRoleDefinitionIds = [
            "string"
          ]
          principalId = "string"
          principalIdDisplayName = "string"
          roleDefinitionId = "string"
        }
      ]
      description = "string"
      eligibleAuthorizations = [
        {
          justInTimeAccessPolicy = {
            managedByTenantApprovers = [
              {
                principalId = "string"
                principalIdDisplayName = "string"
              }
            ]
            maximumActivationDuration = "string"
            multiFactorAuthProvider = "string"
          }
          principalId = "string"
          principalIdDisplayName = "string"
          roleDefinitionId = "string"
        }
      ]
      managedByTenantId = "string"
      registrationDefinitionName = "string"
    }
    plan = {
      name = "string"
      product = "string"
      publisher = "string"
      version = "string"
    }
  })
}

```

### registrationDefinitions

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| scope | Use when creating an extension resource at a scope that is different than the deployment scope. | Target resourceFor Bicep, set this property to the symbolic name of the resource to apply theextension resource. |
| plan | The details for the Managed Services offerâs plan in Azure Marketplace. | Plan |
| properties | The properties of a registration definition. | RegistrationDefinitionProperties |


### Plan

| Name | Description | Value |
|-|-|-|
| name | Azure Marketplace plan name. | string (required) |
| product | Azure Marketplace product code. | string (required) |
| publisher | Azure Marketplace publisher ID. | string (required) |
| version | Azure Marketplace plan's version. | string (required) |


### RegistrationDefinitionProperties

| Name | Description | Value |
|-|-|-|
| authorizations | The collection of authorization objects describing the access Azure Active Directory principals in the managedBy tenant will receive on the delegated resource in the managed tenant. | Authorization[] (required) |
| description | The description of the registration definition. | string |
| eligibleAuthorizations | The collection of eligible authorization objects describing the just-in-time access Azure Active Directory principals in the managedBy tenant will receive on the delegated resource in the managed tenant. | EligibleAuthorization[] |
| managedByTenantId | The identifier of the managedBy tenant. | string (required) |
| registrationDefinitionName | The name of the registration definition. | string |


### Authorization

| Name | Description | Value |
|-|-|-|
| delegatedRoleDefinitionIds | The delegatedRoleDefinitionIds field is required when the roleDefinitionId refers to the User Access Administrator Role. It is the list of role definition ids which define all the permissions that the user in the authorization can assign to other principals. | string[] |
| principalId | The identifier of the Azure Active Directory principal. | string (required) |
| principalIdDisplayName | The display name of the Azure Active Directory principal. | string |
| roleDefinitionId | The identifier of the Azure built-in role that defines the permissions that the Azure Active Directory principal will have on the projected scope. | string (required) |


### EligibleAuthorization

| Name | Description | Value |
|-|-|-|
| justInTimeAccessPolicy | The just-in-time access policy setting. | JustInTimeAccessPolicy |
| principalId | The identifier of the Azure Active Directory principal. | string (required) |
| principalIdDisplayName | The display name of the Azure Active Directory principal. | string |
| roleDefinitionId | The identifier of the Azure built-in role that defines the permissions that the Azure Active Directory principal will have on the projected scope. | string (required) |


### JustInTimeAccessPolicy

| Name | Description | Value |
|-|-|-|
| managedByTenantApprovers | The list of managedByTenant approvers for the eligible authorization. | EligibleApprover[] |
| maximumActivationDuration | The maximum access duration in ISO 8601 format for just-in-time access requests. | string |
| multiFactorAuthProvider | The multi-factor authorization provider to be used for just-in-time access requests. | 'Azure''None' (required) |


### EligibleApprover

| Name | Description | Value |
|-|-|-|
| principalId | The identifier of the Azure Active Directory principal. | string (required) |
| principalIdDisplayName | The display name of the Azure Active Directory principal. | string |
