## Microsoft.Authorization/accessReviewHistoryDefinitions@2021-12-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Authorization/accessReviewHistoryDefinitions@2021-12-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    decisions = [
      "string"
    ]
    displayName = "string"
    instances = [
      {
        properties = {
          displayName = "string"
          expiration = "string"
          fulfilledDateTime = "string"
          reviewHistoryPeriodEndDateTime = "string"
          reviewHistoryPeriodStartDateTime = "string"
          runDateTime = "string"
        }
      }
    ]
    scopes = [
      {
        excludeResourceId = "string"
        excludeRoleDefinitionId = "string"
        expandNestedMemberships = bool
        inactiveDuration = "string"
        includeAccessBelowResource = bool
        includeInheritedAccess = bool
      }
    ]
    settings = {
      pattern = {
        interval = int
        type = "string"
      }
      range = {
        endDate = "string"
        numberOfOccurrences = int
        startDate = "string"
        type = "string"
      }
    }
  })
}

```

## Microsoft.Authorization/accessReviewScheduleDefinitions@2021-12-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Authorization/accessReviewScheduleDefinitions@2021-12-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    backupReviewers = [
      {
        principalId = "string"
      }
    ]
    descriptionForAdmins = "string"
    descriptionForReviewers = "string"
    displayName = "string"
    instances = [
      {
        properties = {
          backupReviewers = [
            {
              principalId = "string"
            }
          ]
          endDateTime = "string"
          reviewers = [
            {
              principalId = "string"
            }
          ]
          startDateTime = "string"
        }
      }
    ]
    reviewers = [
      {
        principalId = "string"
      }
    ]
    settings = {
      autoApplyDecisionsEnabled = bool
      defaultDecision = "string"
      defaultDecisionEnabled = bool
      instanceDurationInDays = int
      justificationRequiredOnApproval = bool
      mailNotificationsEnabled = bool
      recommendationLookBackDuration = "string"
      recommendationsEnabled = bool
      recurrence = {
        pattern = {
          interval = int
          type = "string"
        }
        range = {
          endDate = "string"
          numberOfOccurrences = int
          startDate = "string"
          type = "string"
        }
      }
      reminderNotificationsEnabled = bool
    }
  })
}

```

## Microsoft.Authorization/accessReviewScheduleDefinitions/instances@2021-12-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Authorization/accessReviewScheduleDefinitions/instances@2021-12-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    backupReviewers = [
      {
        principalId = "string"
      }
    ]
    endDateTime = "string"
    reviewers = [
      {
        principalId = "string"
      }
    ]
    startDateTime = "string"
  })
}

```

## Microsoft.Authorization/accessReviewScheduleSettings@2021-12-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Authorization/accessReviewScheduleSettings@2021-12-01-preview"
  name = "default"
  parent_id = "string"
  body = jsonencode({
    autoApplyDecisionsEnabled = bool
    defaultDecision = "string"
    defaultDecisionEnabled = bool
    instanceDurationInDays = int
    justificationRequiredOnApproval = bool
    mailNotificationsEnabled = bool
    recommendationLookBackDuration = "string"
    recommendationsEnabled = bool
    recurrence = {
      pattern = {
        interval = int
        type = "string"
      }
      range = {
        endDate = "string"
        numberOfOccurrences = int
        startDate = "string"
        type = "string"
      }
    }
    reminderNotificationsEnabled = bool
  })
}

```

## Microsoft.Authorization/locks@2020-05-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Authorization/locks@2020-05-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      level = "string"
      notes = "string"
      owners = [
        {
          applicationId = "string"
        }
      ]
    }
  })
}

```

## Microsoft.Authorization/policyAssignments@2022-06-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Authorization/policyAssignments@2022-06-01"
  name = "string"
  location = "string"
  parent_id = "string"
  identity {
    type = "string"
    identity_ids = []
  }
  body = jsonencode({
    properties = {
      description = "string"
      displayName = "string"
      enforcementMode = "string"
      nonComplianceMessages = [
        {
          message = "string"
          policyDefinitionReferenceId = "string"
        }
      ]
      notScopes = [
        "string"
      ]
      overrides = [
        {
          kind = "policyEffect"
          selectors = [
            {
              in = [
                "string"
              ]
              kind = "string"
              notIn = [
                "string"
              ]
            }
          ]
          value = "string"
        }
      ]
      parameters = {}
      policyDefinitionId = "string"
      resourceSelectors = [
        {
          name = "string"
          selectors = [
            {
              in = [
                "string"
              ]
              kind = "string"
              notIn = [
                "string"
              ]
            }
          ]
        }
      ]
    }
  })
}

```

## Microsoft.Authorization/policyDefinitions@2021-06-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Authorization/policyDefinitions@2021-06-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      description = "string"
      displayName = "string"
      mode = "string"
      parameters = {}
      policyType = "string"
    }
  })
}

```

## Microsoft.Authorization/policyExemptions@2022-07-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Authorization/policyExemptions@2022-07-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      assignmentScopeValidation = "string"
      description = "string"
      displayName = "string"
      exemptionCategory = "string"
      expiresOn = "string"
      policyAssignmentId = "string"
      policyDefinitionReferenceIds = [
        "string"
      ]
      resourceSelectors = [
        {
          name = "string"
          selectors = [
            {
              in = [
                "string"
              ]
              kind = "string"
              notIn = [
                "string"
              ]
            }
          ]
        }
      ]
    }
  })
}

```

## Microsoft.Authorization/policySetDefinitions@2021-06-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Authorization/policySetDefinitions@2021-06-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      description = "string"
      displayName = "string"
      parameters = {}
      policyDefinitionGroups = [
        {
          additionalMetadataId = "string"
          category = "string"
          description = "string"
          displayName = "string"
          name = "string"
        }
      ]
      policyDefinitions = [
        {
          groupNames = [
            "string"
          ]
          parameters = {}
          policyDefinitionId = "string"
          policyDefinitionReferenceId = "string"
        }
      ]
      policyType = "string"
    }
  })
}

```

## Microsoft.Authorization/privateLinkAssociations@2020-05-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Authorization/privateLinkAssociations@2020-05-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      privateLink = "string"
      publicNetworkAccess = "string"
    }
  })
}

```

## Microsoft.Authorization/resourceManagementPrivateLinks@2020-05-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Authorization/resourceManagementPrivateLinks@2020-05-01"
  name = "string"
  location = "string"
  parent_id = "string"
}

```

## Microsoft.Authorization/roleAssignmentApprovals/stages@2021-01-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Authorization/roleAssignmentApprovals/stages@2021-01-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    displayName = "string"
    justification = "string"
    reviewResult = "string"
  })
}

```

## Microsoft.Authorization/roleAssignments@2022-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Authorization/roleAssignments@2022-04-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      condition = "string"
      conditionVersion = "string"
      delegatedManagedIdentityResourceId = "string"
      description = "string"
      principalId = "string"
      principalType = "string"
      roleDefinitionId = "string"
    }
  })
}

```

## Microsoft.Authorization/roleAssignmentScheduleRequests@2022-04-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Authorization/roleAssignmentScheduleRequests@2022-04-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      condition = "string"
      conditionVersion = "string"
      justification = "string"
      linkedRoleEligibilityScheduleId = "string"
      principalId = "string"
      requestType = "string"
      roleDefinitionId = "string"
      scheduleInfo = {
        expiration = {
          duration = "string"
          endDateTime = "string"
          type = "string"
        }
        startDateTime = "string"
      }
      targetRoleAssignmentScheduleId = "string"
      targetRoleAssignmentScheduleInstanceId = "string"
      ticketInfo = {
        ticketNumber = "string"
        ticketSystem = "string"
      }
    }
  })
}

```

## Microsoft.Authorization/roleDefinitions@2022-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Authorization/roleDefinitions@2022-04-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      assignableScopes = [
        "string"
      ]
      description = "string"
      permissions = [
        {
          actions = [
            "string"
          ]
          dataActions = [
            "string"
          ]
          notActions = [
            "string"
          ]
          notDataActions = [
            "string"
          ]
        }
      ]
      roleName = "string"
      type = "string"
    }
  })
}

```

## Microsoft.Authorization/roleEligibilityScheduleRequests@2022-04-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Authorization/roleEligibilityScheduleRequests@2022-04-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      condition = "string"
      conditionVersion = "string"
      justification = "string"
      principalId = "string"
      requestType = "string"
      roleDefinitionId = "string"
      scheduleInfo = {
        expiration = {
          duration = "string"
          endDateTime = "string"
          type = "string"
        }
        startDateTime = "string"
      }
      targetRoleEligibilityScheduleId = "string"
      targetRoleEligibilityScheduleInstanceId = "string"
      ticketInfo = {
        ticketNumber = "string"
        ticketSystem = "string"
      }
    }
  })
}

```

## Microsoft.Authorization/roleManagementPolicyAssignments@2020-10-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Authorization/roleManagementPolicyAssignments@2020-10-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      policyId = "string"
      roleDefinitionId = "string"
      scope = "string"
    }
  })
}

```

## Microsoft.Authorization/variables@2022-08-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Authorization/variables@2022-08-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      columns = [
        {
          columnName = "string"
        }
      ]
    }
  })
}

```

## Microsoft.Authorization/variables/values@2022-08-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Authorization/variables/values@2022-08-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      values = [
        {
          columnName = "string"
        }
      ]
    }
  })
}

```

