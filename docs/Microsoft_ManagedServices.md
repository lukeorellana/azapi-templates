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

