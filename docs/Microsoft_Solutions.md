## Microsoft.Solutions/applicationDefinitions@2021-07-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Solutions/applicationDefinitions@2021-07-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      artifacts = [
        {
          name = "string"
          type = "string"
          uri = "string"
        }
      ]
      authorizations = [
        {
          principalId = "string"
          roleDefinitionId = "string"
        }
      ]
      deploymentPolicy = {
        deploymentMode = "string"
      }
      description = "string"
      displayName = "string"
      isEnabled = bool
      lockingPolicy = {
        allowedActions = [
          "string"
        ]
        allowedDataActions = [
          "string"
        ]
      }
      managementPolicy = {
        mode = "string"
      }
      notificationPolicy = {
        notificationEndpoints = [
          {
            uri = "string"
          }
        ]
      }
      packageFileUri = "string"
      policies = [
        {
          name = "string"
          parameters = "string"
          policyDefinitionId = "string"
        }
      ]
      storageAccountId = "string"
    }
    sku = {
      capacity = int
      family = "string"
      model = "string"
      name = "string"
      size = "string"
      tier = "string"
    }
    managedBy = "string"
  })
}

```

## Microsoft.Solutions/applications@2021-07-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Solutions/applications@2021-07-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  identity {
    type = "string"
    identity_ids = []
  }
  body = jsonencode({
    properties = {
      applicationDefinitionId = "string"
      jitAccessPolicy = {
        jitAccessEnabled = bool
        jitApprovalMode = "string"
        jitApprovers = [
          {
            displayName = "string"
            id = "string"
            type = "string"
          }
        ]
        maximumJitAccessDuration = "string"
      }
      managedResourceGroupId = "string"
    }
    sku = {
      capacity = int
      family = "string"
      model = "string"
      name = "string"
      size = "string"
      tier = "string"
    }
    kind = "string"
    managedBy = "string"
    plan = {
      name = "string"
      product = "string"
      promotionCode = "string"
      publisher = "string"
      version = "string"
    }
  })
}

```

## Microsoft.Solutions/jitRequests@2021-07-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Solutions/jitRequests@2021-07-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      applicationResourceId = "string"
      jitAuthorizationPolicies = [
        {
          principalId = "string"
          roleDefinitionId = "string"
        }
      ]
      jitSchedulingPolicy = {
        duration = "string"
        startTime = "string"
        type = "string"
      }
    }
  })
}

```

