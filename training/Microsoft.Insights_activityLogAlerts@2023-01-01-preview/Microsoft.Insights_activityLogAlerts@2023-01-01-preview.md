```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Insights/activityLogAlerts@2023-01-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      actions = {
        actionGroups = [
          {
            actionGroupId = "string"
            actionProperties = {}
            webhookProperties = {}
          }
        ]
      }
      condition = {
        allOf = [
          {
            anyOf = [
              {
                containsAny = [
                  "string"
                ]
                equals = "string"
                field = "string"
              }
            ]
            containsAny = [
              "string"
            ]
            equals = "string"
            field = "string"
          }
        ]
      }
      description = "string"
      enabled = bool
      scopes = [
        "string"
      ]
      tenantScope = "string"
    }
  })
}

```

### activityLogAlerts

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 1-260Valid characters:Can't use:<>*%{}&:\\?+/#or control charactersCan't end with space or period. |
| location | The location of the resource. Since Azure Activity Log Alerts is a global service, the location of the rules should always be 'global'. | string |
| tags | The tags of the resource. | Dictionary of tag names and values. SeeTags in templates |
| properties | The Activity Log Alert rule properties of the resource. | AlertRuleProperties |


### AlertRuleProperties

| Name | Description | Value |
|-|-|-|
| actions | The actions that will activate when the condition is met. | ActionList(required) |
| condition | The condition that will cause this alert to activate. | AlertRuleAllOfCondition(required) |
| description | A description of this Activity Log Alert rule. | string |
| enabled | Indicates whether this Activity Log Alert rule is enabled. If an Activity Log Alert rule is not enabled, then none of its actions will be activated. | bool |
| scopes | A list of resource IDs that will be used as prefixes. The alert will only apply to Activity Log events with resource IDs that fall under one of these prefixes. This list must include at least one item. | string[] |
| tenantScope | The tenant GUID. Must be provided for tenant-level and management group events rules. | string |


### ActionList

| Name | Description | Value |
|-|-|-|
| actionGroups | The list of the Action Groups. | ActionGroup[] |


### ActionGroup

| Name | Description | Value |
|-|-|-|
| actionGroupId | The resource ID of the Action Group. This cannot be null or empty. | string (required) |
| actionProperties | Predefined list of properties and configuration items for the action group. | object |
| webhookProperties | the dictionary of custom properties to include with the post operation. These data are appended to the webhook payload. | object |


### AlertRuleAllOfCondition

| Name | Description | Value |
|-|-|-|
| allOf | The list of Activity Log Alert rule conditions. | AlertRuleAnyOfOrLeafCondition[] (required) |


### AlertRuleAnyOfOrLeafCondition

| Name | Description | Value |
|-|-|-|
| anyOf | An Activity Log Alert rule condition that is met when at least one of its member leaf conditions are met. | AlertRuleLeafCondition[] |
| containsAny | The value of the event's field will be compared to the values in this array (case-insensitive) to determine if the condition is met. | string[] |
| equals | The value of the event's field will be compared to this value (case-insensitive) to determine if the condition is met. | string |
| field | The name of the Activity Log event's field that this condition will examine.The possible values for this field are (case-insensitive): 'resourceId', 'category', 'caller', 'level', 'operationName', 'resourceGroup', 'resourceProvider', 'status', 'subStatus', 'resourceType', or anything beginning with 'properties'. | string |


### AlertRuleLeafCondition

| Name | Description | Value |
|-|-|-|
| containsAny | The value of the event's field will be compared to the values in this array (case-insensitive) to determine if the condition is met. | string[] |
| equals | The value of the event's field will be compared to this value (case-insensitive) to determine if the condition is met. | string |
| field | The name of the Activity Log event's field that this condition will examine.The possible values for this field are (case-insensitive): 'resourceId', 'category', 'caller', 'level', 'operationName', 'resourceGroup', 'resourceProvider', 'status', 'subStatus', 'resourceType', or anything beginning with 'properties'. | string |


