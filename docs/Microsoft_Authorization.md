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

### accessReviewHistoryDefinitions

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| scope | Use when creating an extension resource at a scope that is different than the deployment scope. | Target resourceFor Bicep, set this property to the symbolic name of the resource to apply theextension resource. |
| decisions | Collection of review decisions which the history data should be filtered on. For example if Approve and Deny are supplied the data will only contain review results in which the decision maker approved or denied a review request. | String array containing any of:'Approve''Deny''DontKnow''NotNotified''NotReviewed' |
| displayName | The display name for the history definition. | string |
| instances | Set of access review history instances for this history definition. | AccessReviewHistoryInstance[] |
| scopes | A collection of scopes used when selecting review history data | AccessReviewScope[] |
| settings | Recurrence settings for recurring history reports, skip for one-time reports. | AccessReviewHistoryScheduleSettings |


### AccessReviewHistoryInstance

| Name | Description | Value |
|-|-|-|
| properties | Access Review History Definition Instance properties. | AccessReviewHistoryInstanceProperties |


### AccessReviewHistoryInstanceProperties

| Name | Description | Value |
|-|-|-|
| displayName | The display name for the parent history definition. | string |
| expiration | Date time when history data report expires and the associated data is deleted. | string |
| fulfilledDateTime | Date time when the history data report is scheduled to be generated. | string |
| reviewHistoryPeriodEndDateTime | Date time used when selecting review data, all reviews included in data end on or before this date. For use only with one-time/non-recurring reports. | string |
| reviewHistoryPeriodStartDateTime | Date time used when selecting review data, all reviews included in data start on or after this date. For use only with one-time/non-recurring reports. | string |
| runDateTime | Date time when the history data report is scheduled to be generated. | string |


### AccessReviewScope

| Name | Description | Value |
|-|-|-|
| excludeResourceId | This is used to indicate the resource id(s) to exclude | string |
| excludeRoleDefinitionId | This is used to indicate the role definition id(s) to exclude | string |
| expandNestedMemberships | Flag to indicate whether to expand nested memberships or not. | bool |
| inactiveDuration | Duration users are inactive for. The value should be in ISO  8601 format (http://en.wikipedia.org/wiki/ISO_8601#Durations).This code can be used to convert TimeSpan to a valid interval string: XmlConvert.ToString(new TimeSpan(hours, minutes, seconds)) | string |
| includeAccessBelowResource | Flag to indicate whether to expand nested memberships or not. | bool |
| includeInheritedAccess | Flag to indicate whether to expand nested memberships or not. | bool |


### AccessReviewHistoryScheduleSettings

| Name | Description | Value |
|-|-|-|
| pattern | Access Review History Definition recurrence settings. | AccessReviewRecurrencePattern |
| range | Access Review History Definition recurrence settings. | AccessReviewRecurrenceRange |


### AccessReviewRecurrencePattern

| Name | Description | Value |
|-|-|-|
| interval | The interval for recurrence. For a quarterly review, the interval is 3 for type : absoluteMonthly. | int |
| type | The recurrence type : weekly, monthly, etc. | 'absoluteMonthly''weekly' |


### AccessReviewRecurrenceRange

| Name | Description | Value |
|-|-|-|
| endDate | The DateTime when the review is scheduled to end. Required if type is endDate | string |
| numberOfOccurrences | The number of times to repeat the access review. Required and must be positive if type is numbered. | int |
| startDate | The DateTime when the review is scheduled to be start. This could be a date in the future. Required on create. | string |
| type | The recurrence range type. The possible values are: endDate, noEnd, numbered. | 'endDate''noEnd''numbered' |
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

### accessReviewScheduleDefinitions

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| backupReviewers | This is the collection of backup reviewers. | AccessReviewReviewer[] |
| descriptionForAdmins | The description provided by the access review creator and visible to admins. | string |
| descriptionForReviewers | The description provided by the access review creator to be shown to reviewers. | string |
| displayName | The display name for the schedule definition. | string |
| instances | This is the collection of instances returned when one does an expand on it. | AccessReviewInstance[] |
| reviewers | This is the collection of reviewers. | AccessReviewReviewer[] |
| settings | Access Review Settings. | AccessReviewScheduleSettings |


### AccessReviewReviewer

| Name | Description | Value |
|-|-|-|
| principalId | The id of the reviewer(user/servicePrincipal) | string |


### AccessReviewInstance

| Name | Description | Value |
|-|-|-|
| properties | Access Review properties. | AccessReviewInstanceProperties |


### AccessReviewInstanceProperties

| Name | Description | Value |
|-|-|-|
| backupReviewers | This is the collection of backup reviewers. | AccessReviewReviewer[] |
| endDateTime | The DateTime when the review instance is scheduled to end. | string |
| reviewers | This is the collection of reviewers. | AccessReviewReviewer[] |
| startDateTime | The DateTime when the review instance is scheduled to be start. | string |


### AccessReviewScheduleSettings

| Name | Description | Value |
|-|-|-|
| autoApplyDecisionsEnabled | Flag to indicate whether auto-apply capability, to automatically change the target object access resource, is enabled. If not enabled, a user must, after the review completes, apply the access review. | bool |
| defaultDecision | This specifies the behavior for the autoReview feature when an access review completes. | 'Approve''Deny''Recommendation' |
| defaultDecisionEnabled | Flag to indicate whether reviewers are required to provide a justification when reviewing access. | bool |
| instanceDurationInDays | The duration in days for an instance. | int |
| justificationRequiredOnApproval | Flag to indicate whether the reviewer is required to pass justification when recording a decision. | bool |
| mailNotificationsEnabled | Flag to indicate whether sending mails to reviewers and the review creator is enabled. | bool |
| recommendationLookBackDuration | Recommendations for access reviews are calculated by looking back at 30 days of data(w.r.t the start date of the review) by default. However, in some scenarios, customers want to change how far back to look at and want to configure 60 days, 90 days, etc. instead. This setting allows customers to configure this duration. The value should be in ISO  8601 format (http://en.wikipedia.org/wiki/ISO_8601#Durations).This code can be used to convert TimeSpan to a valid interval string: XmlConvert.ToString(new TimeSpan(hours, minutes, seconds)) | string |
| recommendationsEnabled | Flag to indicate whether showing recommendations to reviewers is enabled. | bool |
| recurrence | Access Review Settings. | AccessReviewRecurrenceSettings |
| reminderNotificationsEnabled | Flag to indicate whether sending reminder emails to reviewers are enabled. | bool |


### AccessReviewRecurrenceSettings

| Name | Description | Value |
|-|-|-|
| pattern | Access Review schedule definition recurrence pattern. | AccessReviewRecurrencePattern |
| range | Access Review schedule definition recurrence range. | AccessReviewRecurrenceRange |


### AccessReviewRecurrencePattern

| Name | Description | Value |
|-|-|-|
| interval | The interval for recurrence. For a quarterly review, the interval is 3 for type : absoluteMonthly. | int |
| type | The recurrence type : weekly, monthly, etc. | 'absoluteMonthly''weekly' |


### AccessReviewRecurrenceRange

| Name | Description | Value |
|-|-|-|
| endDate | The DateTime when the review is scheduled to end. Required if type is endDate | string |
| numberOfOccurrences | The number of times to repeat the access review. Required and must be positive if type is numbered. | int |
| startDate | The DateTime when the review is scheduled to be start. This could be a date in the future. Required on create. | string |
| type | The recurrence range type. The possible values are: endDate, noEnd, numbered. | 'endDate''noEnd''numbered' |
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

### accessReviewScheduleDefinitions/instances

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:accessReviewScheduleDefinitions |
| backupReviewers | This is the collection of backup reviewers. | AccessReviewReviewer[] |
| endDateTime | The DateTime when the review instance is scheduled to end. | string |
| reviewers | This is the collection of reviewers. | AccessReviewReviewer[] |
| startDateTime | The DateTime when the review instance is scheduled to be start. | string |


### AccessReviewReviewer

| Name | Description | Value |
|-|-|-|
| principalId | The id of the reviewer(user/servicePrincipal) | string |
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

### accessReviewScheduleSettings

| Name | Description | Value |
|-|-|-|
| name | The resource name | 'default' |
| autoApplyDecisionsEnabled | Flag to indicate whether auto-apply capability, to automatically change the target object access resource, is enabled. If not enabled, a user must, after the review completes, apply the access review. | bool |
| defaultDecision | This specifies the behavior for the autoReview feature when an access review completes. | 'Approve''Deny''Recommendation' |
| defaultDecisionEnabled | Flag to indicate whether reviewers are required to provide a justification when reviewing access. | bool |
| instanceDurationInDays | The duration in days for an instance. | int |
| justificationRequiredOnApproval | Flag to indicate whether the reviewer is required to pass justification when recording a decision. | bool |
| mailNotificationsEnabled | Flag to indicate whether sending mails to reviewers and the review creator is enabled. | bool |
| recommendationLookBackDuration | Recommendations for access reviews are calculated by looking back at 30 days of data(w.r.t the start date of the review) by default. However, in some scenarios, customers want to change how far back to look at and want to configure 60 days, 90 days, etc. instead. This setting allows customers to configure this duration. The value should be in ISO  8601 format (http://en.wikipedia.org/wiki/ISO_8601#Durations).This code can be used to convert TimeSpan to a valid interval string: XmlConvert.ToString(new TimeSpan(hours, minutes, seconds)) | string |
| recommendationsEnabled | Flag to indicate whether showing recommendations to reviewers is enabled. | bool |
| recurrence | Access Review Settings. | AccessReviewRecurrenceSettings |
| reminderNotificationsEnabled | Flag to indicate whether sending reminder emails to reviewers are enabled. | bool |


### AccessReviewRecurrenceSettings

| Name | Description | Value |
|-|-|-|
| pattern | Access Review schedule definition recurrence pattern. | AccessReviewRecurrencePattern |
| range | Access Review schedule definition recurrence range. | AccessReviewRecurrenceRange |


### AccessReviewRecurrencePattern

| Name | Description | Value |
|-|-|-|
| interval | The interval for recurrence. For a quarterly review, the interval is 3 for type : absoluteMonthly. | int |
| type | The recurrence type : weekly, monthly, etc. | 'absoluteMonthly''weekly' |


### AccessReviewRecurrenceRange

| Name | Description | Value |
|-|-|-|
| endDate | The DateTime when the review is scheduled to end. Required if type is endDate | string |
| numberOfOccurrences | The number of times to repeat the access review. Required and must be positive if type is numbered. | int |
| startDate | The DateTime when the review is scheduled to be start. This could be a date in the future. Required on create. | string |
| type | The recurrence range type. The possible values are: endDate, noEnd, numbered. | 'endDate''noEnd''numbered' |
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

### locks

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 1-90Valid characters:Alphanumerics, periods, underscores, hyphens, and parenthesis.Can't end in period. |
| scope | Use when creating an extension resource at a scope that is different than the deployment scope. | Target resourceFor Bicep, set this property to the symbolic name of the resource to apply theextension resource. |
| properties | The properties of the lock. | ManagementLockProperties(required) |


### ManagementLockProperties

| Name | Description | Value |
|-|-|-|
| level | The level of the lock. Possible values are: NotSpecified, CanNotDelete, ReadOnly. CanNotDelete means authorized users are able to read and modify the resources, but not delete. ReadOnly means authorized users can only read from a resource, but they can't modify or delete it. | 'CanNotDelete''NotSpecified''ReadOnly' (required) |
| notes | Notes about the lock. Maximum of 512 characters. | string |
| owners | The owners of the lock. | ManagementLockOwner[] |


### ManagementLockOwner

| Name | Description | Value |
|-|-|-|
| applicationId | The application ID of the lock owner. | string |
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

### policyAssignments

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 1-128 display name1-64 resource name1-24 resource name at management group scopeValid characters:Display name can contain any characters.Resource name can't use:<>*%&:\?.+/or control characters.Can't end with period or space. |
| location | The location of the policy assignment. Only required when utilizing managed identity. | string |
| scope | Use when creating an extension resource at a scope that is different than the deployment scope. | Target resourceFor Bicep, set this property to the symbolic name of the resource to apply theextension resource. |
| identity | The managed identity associated with the policy assignment. | Identity |
| properties | Properties for the policy assignment. | PolicyAssignmentProperties |


### Identity

| Name | Description | Value |
|-|-|-|
| type | The identity type. This is the only required field when adding a system or user assigned identity to a resource. | 'None''SystemAssigned''UserAssigned' |
| userAssignedIdentities | The user identity associated with the policy. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'. | object |


### PolicyAssignmentProperties

| Name | Description | Value |
|-|-|-|
| description | This message will be part of response in case of policy violation. | string |
| displayName | The display name of the policy assignment. | string |
| enforcementMode | The policy assignment enforcement mode. Possible values are Default and DoNotEnforce. | 'Default''DoNotEnforce' |
| metadata | The policy assignment metadata. Metadata is an open ended object and is typically a collection of key value pairs. | For Bicep, you can use theany()function. |
| nonComplianceMessages | The messages that describe why a resource is non-compliant with the policy. | NonComplianceMessage[] |
| notScopes | The policy's excluded scopes. | string[] |
| overrides | The policy property value override. | Override[] |
| parameters | The parameter values for the assigned policy rule. The keys are the parameter names. | object |
| policyDefinitionId | The ID of the policy definition or policy set definition being assigned. | string |
| resourceSelectors | The resource selector list to filter policies by resource properties. | ResourceSelector[] |


### NonComplianceMessage

| Name | Description | Value |
|-|-|-|
| message | A message that describes why a resource is non-compliant with the policy. This is shown in 'deny' error messages and on resource's non-compliant compliance results. | string (required) |
| policyDefinitionReferenceId | The policy definition reference ID within a policy set definition the message is intended for. This is only applicable if the policy assignment assigns a policy set definition. If this is not provided the message applies to all policies assigned by this policy assignment. | string |


### Override

| Name | Description | Value |
|-|-|-|
| kind | The override kind. | 'policyEffect' |
| selectors | The list of the selector expressions. | Selector[] |
| value | The value to override the policy property. | string |


### Selector

| Name | Description | Value |
|-|-|-|
| in | The list of values to filter in. | string[] |
| kind | The selector kind. | 'policyDefinitionReferenceId''resourceLocation''resourceType''resourceWithoutLocation' |
| notIn | The list of values to filter out. | string[] |


### ResourceSelector

| Name | Description | Value |
|-|-|-|
| name | The name of the resource selector. | string |
| selectors | The list of the selector expressions. | Selector[] |
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

### policyDefinitions

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 1-128 display name1-64 resource nameValid characters:Display name can contain any characters.Resource name can't use:<>*%&:\?.+/or control characters.Can't end with period or space. |
| scope | Use when creating an extension resource at a scope that is different than the deployment scope. | Target resourceFor Bicep, set this property to the symbolic name of the resource to apply theextension resource. |
| properties | The policy definition properties. | PolicyDefinitionProperties |


### PolicyDefinitionProperties

| Name | Description | Value |
|-|-|-|
| description | The policy definition description. | string |
| displayName | The display name of the policy definition. | string |
| metadata | The policy definition metadata.  Metadata is an open ended object and is typically a collection of key value pairs. | For Bicep, you can use theany()function. |
| mode | The policy definition mode. Some examples are All, Indexed, Microsoft.KeyVault.Data. | string |
| parameters | The parameter definitions for parameters used in the policy rule. The keys are the parameter names. | object |
| policyRule | The policy rule. | For Bicep, you can use theany()function. |
| policyType | The type of policy definition. Possible values are NotSpecified, BuiltIn, Custom, and Static. | 'BuiltIn''Custom''NotSpecified''Static' |
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

### policyExemptions

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 1-128 display name1-64 resource nameValid characters:Display name can contain any characters.Resource name can't use:<>*%&:\?.+/or control characters.Can't end with period or space. |
| scope | Use when creating an extension resource at a scope that is different than the deployment scope. | Target resourceFor Bicep, set this property to the symbolic name of the resource to apply theextension resource. |
| properties | Properties for the policy exemption. | PolicyExemptionProperties(required) |


### PolicyExemptionProperties

| Name | Description | Value |
|-|-|-|
| assignmentScopeValidation | The option whether validate the exemption is at or under the assignment scope. | 'Default''DoNotValidate' |
| description | The description of the policy exemption. | string |
| displayName | The display name of the policy exemption. | string |
| exemptionCategory | The policy exemption category. Possible values are Waiver and Mitigated. | 'Mitigated''Waiver' (required) |
| expiresOn | The expiration date and time (in UTC ISO 8601 format yyyy-MM-ddTHH:mm:ssZ) of the policy exemption. | string |
| metadata | The policy exemption metadata. Metadata is an open ended object and is typically a collection of key value pairs. | For Bicep, you can use theany()function. |
| policyAssignmentId | The ID of the policy assignment that is being exempted. | string (required) |
| policyDefinitionReferenceIds | The policy definition reference ID list when the associated policy assignment is an assignment of a policy set definition. | string[] |
| resourceSelectors | The resource selector list to filter policies by resource properties. | ResourceSelector[] |


### ResourceSelector

| Name | Description | Value |
|-|-|-|
| name | The name of the resource selector. | string |
| selectors | The list of the selector expressions. | Selector[] |


### Selector

| Name | Description | Value |
|-|-|-|
| in | The list of values to filter in. | string[] |
| kind | The selector kind. | 'policyDefinitionReferenceId''resourceLocation''resourceType''resourceWithoutLocation' |
| notIn | The list of values to filter out. | string[] |
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

### policySetDefinitions

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 1-128 display name1-64 resource nameValid characters:Display name can contain any characters.Resource name can't use:<>*%&:\?.+/or control characters.Can't end with period or space. |
| scope | Use when creating an extension resource at a scope that is different than the deployment scope. | Target resourceFor Bicep, set this property to the symbolic name of the resource to apply theextension resource. |
| properties | The policy definition properties. | PolicySetDefinitionProperties |


### PolicySetDefinitionProperties

| Name | Description | Value |
|-|-|-|
| description | The policy set definition description. | string |
| displayName | The display name of the policy set definition. | string |
| metadata | The policy set definition metadata.  Metadata is an open ended object and is typically a collection of key value pairs. | For Bicep, you can use theany()function. |
| parameters | The policy set definition parameters that can be used in policy definition references. | object |
| policyDefinitionGroups | The metadata describing groups of policy definition references within the policy set definition. | PolicyDefinitionGroup[] |
| policyDefinitions | An array of policy definition references. | PolicyDefinitionReference[] (required) |
| policyType | The type of policy definition. Possible values are NotSpecified, BuiltIn, Custom, and Static. | 'BuiltIn''Custom''NotSpecified''Static' |


### PolicyDefinitionGroup

| Name | Description | Value |
|-|-|-|
| additionalMetadataId | A resource ID of a resource that contains additional metadata about the group. | string |
| category | The group's category. | string |
| description | The group's description. | string |
| displayName | The group's display name. | string |
| name | The name of the group. | string (required) |


### PolicyDefinitionReference

| Name | Description | Value |
|-|-|-|
| groupNames | The name of the groups that this policy definition reference belongs to. | string[] |
| parameters | The parameter values for the referenced policy rule. The keys are the parameter names. | object |
| policyDefinitionId | The ID of the policy definition or policy set definition. | string (required) |
| policyDefinitionReferenceId | A unique id (within the policy set definition) for this policy definition reference. | string |
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

### privateLinkAssociations

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| scope | Use when creating an extension resource at a scope that is different than the deployment scope. | Target resourceFor Bicep, set this property to the symbolic name of the resource to apply theextension resource. |
| properties | The properties of the PrivateLinkAssociation. | PrivateLinkAssociationPropertiesOrPrivateLinkAssocia... |


### PrivateLinkAssociationPropertiesOrPrivateLinkAssocia...

| Name | Description | Value |
|-|-|-|
| privateLink | The rmpl Resource ID. | string |
| publicNetworkAccess |  | 'Disabled''Enabled' |
## Microsoft.Authorization/resourceManagementPrivateLinks@2020-05-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Authorization/resourceManagementPrivateLinks@2020-05-01"
  name = "string"
  location = "string"
  parent_id = "string"
}

```

### resourceManagementPrivateLinks

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | the region to create private link association. | string |
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

### roleAssignmentApprovals/stages

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type: roleAssignmentApprovals |
| displayName | The display name for the approval stage. | string |
| justification | Justification provided by approvers for their action | string |
| reviewResult | The decision on the approval stage. This value is initially set to NotReviewed. Approvers can take action of Approve/Deny | 'Approve''Deny''NotReviewed' |
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

### roleAssignments

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 36Valid characters:Must be a globally unique identifier (GUID).Resource name must be unique across tenant. |
| scope | Use when creating an extension resource at a scope that is different than the deployment scope. | Target resourceFor Bicep, set this property to the symbolic name of the resource to apply theextension resource.This resource type can also be applied to a tenant.For Bicep, usetenant(). |
| properties | Role assignment properties. | RoleAssignmentProperties(required) |


### RoleAssignmentProperties

| Name | Description | Value |
|-|-|-|
| condition | The conditions on the role assignment. This limits the resources it can be assigned to. e.g.:@Resource[Microsoft.Storage/storageAccounts/blobServices/containers:ContainerName] StringEqualsIgnoreCase 'foo_storage_container' | string |
| conditionVersion | Version of the condition. Currently the only accepted value is '2.0' | string |
| delegatedManagedIdentityResourceId | Id of the delegated managed identity resource | string |
| description | Description of role assignment | string |
| principalId | The principal ID. | string (required) |
| principalType | The principal type of the assigned principal ID. | 'Device''ForeignGroup''Group''ServicePrincipal''User' |
| roleDefinitionId | The role definition ID. | string (required) |
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

### roleAssignmentScheduleRequests

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| scope | Use when creating an extension resource at a scope that is different than the deployment scope. | Target resourceFor Bicep, set this property to the symbolic name of the resource to apply theextension resource.This resource type can also be applied to a tenant.For Bicep, usetenant(). |
| properties | Role assignment schedule request properties. | RoleAssignmentScheduleRequestProperties |


### RoleAssignmentScheduleRequestProperties

| Name | Description | Value |
|-|-|-|
| condition | The conditions on the role assignment. This limits the resources it can be assigned to. e.g.:@Resource[Microsoft.Storage/storageAccounts/blobServices/containers:ContainerName] StringEqualsIgnoreCase 'foo_storage_container' | string |
| conditionVersion | Version of the condition. Currently accepted value is '2.0' | string |
| justification | Justification for the role assignment | string |
| linkedRoleEligibilityScheduleId | The linked role eligibility schedule id - to activate an eligibility. | string |
| principalId | The principal ID. | string (required) |
| requestType | The type of the role assignment schedule request. Eg: SelfActivate, AdminAssign etc | 'AdminAssign''AdminExtend''AdminRemove''AdminRenew''AdminUpdate''SelfActivate''SelfDeactivate''SelfExtend''SelfRenew' (required) |
| roleDefinitionId | The role definition ID. | string (required) |
| scheduleInfo | Schedule info of the role assignment schedule | RoleAssignmentScheduleRequestPropertiesScheduleInfo |
| targetRoleAssignmentScheduleId | The resultant role assignment schedule id or the role assignment schedule id being updated | string |
| targetRoleAssignmentScheduleInstanceId | The role assignment schedule instance id being updated | string |
| ticketInfo | Ticket Info of the role assignment | RoleAssignmentScheduleRequestPropertiesTicketInfo |


### RoleAssignmentScheduleRequestPropertiesScheduleInfo

| Name | Description | Value |
|-|-|-|
| expiration | Expiration of the role assignment schedule | RoleAssignmentScheduleRequestPropertiesScheduleInfoE... |
| startDateTime | Start DateTime of the role assignment schedule. | string |


### RoleAssignmentScheduleRequestPropertiesScheduleInfoE...

| Name | Description | Value |
|-|-|-|
| duration | Duration of the role assignment schedule in TimeSpan. | string |
| endDateTime | End DateTime of the role assignment schedule. | string |
| type | Type of the role assignment schedule expiration | 'AfterDateTime''AfterDuration''NoExpiration' |


### RoleAssignmentScheduleRequestPropertiesTicketInfo

| Name | Description | Value |
|-|-|-|
| ticketNumber | Ticket number for the role assignment | string |
| ticketSystem | Ticket system name for the role assignment | string |
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

### roleDefinitions

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 36Valid characters:Must be a globally unique identifier (GUID).Resource name must be unique across tenant. |
| scope | Use when creating an extension resource at a scope that is different than the deployment scope. | Target resourceFor Bicep, set this property to the symbolic name of the resource to apply theextension resource. |
| properties | Role definition properties. | RoleDefinitionProperties |


### RoleDefinitionProperties

| Name | Description | Value |
|-|-|-|
| assignableScopes | Role definition assignable scopes. | string[] |
| description | The role definition description. | string |
| permissions | Role definition permissions. | Permission[] |
| roleName | The role name. | string |
| type | The role type. | string |


### Permission

| Name | Description | Value |
|-|-|-|
| actions | Allowed actions. | string[] |
| dataActions | Allowed Data actions. | string[] |
| notActions | Denied actions. | string[] |
| notDataActions | Denied Data actions. | string[] |
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

### roleEligibilityScheduleRequests

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| scope | Use when creating an extension resource at a scope that is different than the deployment scope. | Target resourceFor Bicep, set this property to the symbolic name of the resource to apply theextension resource.This resource type can also be applied to a tenant.For Bicep, usetenant(). |
| properties | Role eligibility schedule request properties. | RoleEligibilityScheduleRequestProperties |


### RoleEligibilityScheduleRequestProperties

| Name | Description | Value |
|-|-|-|
| condition | The conditions on the role assignment. This limits the resources it can be assigned to. e.g.:@Resource[Microsoft.Storage/storageAccounts/blobServices/containers:ContainerName] StringEqualsIgnoreCase 'foo_storage_container' | string |
| conditionVersion | Version of the condition. Currently accepted value is '2.0' | string |
| justification | Justification for the role eligibility | string |
| principalId | The principal ID. | string (required) |
| requestType | The type of the role assignment schedule request. Eg: SelfActivate, AdminAssign etc | 'AdminAssign''AdminExtend''AdminRemove''AdminRenew''AdminUpdate''SelfActivate''SelfDeactivate''SelfExtend''SelfRenew' (required) |
| roleDefinitionId | The role definition ID. | string (required) |
| scheduleInfo | Schedule info of the role eligibility schedule | RoleEligibilityScheduleRequestPropertiesScheduleInfo |
| targetRoleEligibilityScheduleId | The resultant role eligibility schedule id or the role eligibility schedule id being updated | string |
| targetRoleEligibilityScheduleInstanceId | The role eligibility schedule instance id being updated | string |
| ticketInfo | Ticket Info of the role eligibility | RoleEligibilityScheduleRequestPropertiesTicketInfo |


### RoleEligibilityScheduleRequestPropertiesScheduleInfo

| Name | Description | Value |
|-|-|-|
| expiration | Expiration of the role eligibility schedule | RoleEligibilityScheduleRequestPropertiesScheduleInfo... |
| startDateTime | Start DateTime of the role eligibility schedule. | string |


### RoleEligibilityScheduleRequestPropertiesScheduleInfo...

| Name | Description | Value |
|-|-|-|
| duration | Duration of the role eligibility schedule in TimeSpan. | string |
| endDateTime | End DateTime of the role eligibility schedule. | string |
| type | Type of the role eligibility schedule expiration | 'AfterDateTime''AfterDuration''NoExpiration' |


### RoleEligibilityScheduleRequestPropertiesTicketInfo

| Name | Description | Value |
|-|-|-|
| ticketNumber | Ticket number for the role eligibility | string |
| ticketSystem | Ticket system name for the role eligibility | string |
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

### roleManagementPolicyAssignments

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| scope | Use when creating an extension resource at a scope that is different than the deployment scope. | Target resourceFor Bicep, set this property to the symbolic name of the resource to apply theextension resource.This resource type can also be applied to a tenant.For Bicep, usetenant(). |
| properties | Role management policy properties. | RoleManagementPolicyAssignmentProperties |


### RoleManagementPolicyAssignmentProperties

| Name | Description | Value |
|-|-|-|
| policyId | The policy id role management policy assignment. | string |
| roleDefinitionId | The role definition of management policy assignment. | string |
| scope | The role management policy scope. | string |
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

### variables

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| properties | Properties for the variable. | PolicyVariableProperties(required) |


### PolicyVariableProperties

| Name | Description | Value |
|-|-|-|
| columns | Variable column definitions. | PolicyVariableColumn[] (required) |


### PolicyVariableColumn

| Name | Description | Value |
|-|-|-|
| columnName | The name of this policy variable column. | string (required) |
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

### variables/values

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:variables |
| properties | Properties for the variable value. | PolicyVariableValueProperties(required) |


### PolicyVariableValueProperties

| Name | Description | Value |
|-|-|-|
| values | Variable value column value array. | PolicyVariableValueColumnValue[] (required) |


### PolicyVariableValueColumnValue

| Name | Description | Value |
|-|-|-|
| columnName | Column name for the variable value | string (required) |
| columnValue | Column value for the variable value; this can be an integer, double, boolean, null or a string. | For Bicep, you can use theany()function.(required) |
