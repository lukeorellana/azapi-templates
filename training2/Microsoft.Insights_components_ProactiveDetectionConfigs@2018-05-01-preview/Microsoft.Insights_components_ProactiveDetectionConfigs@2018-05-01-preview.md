```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Insights/components/ProactiveDetectionConfigs@2018-05-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      CustomEmails = [
        "string"
      ]
      Enabled = bool
      RuleDefinitions = {
        Description = "string"
        DisplayName = "string"
        HelpUrl = "string"
        IsEnabledByDefault = bool
        IsHidden = bool
        IsInPreview = bool
        Name = "string"
        SupportsEmailNotifications = bool
      }
      SendEmailsToSubscriptionOwners = bool
    }
  })
}

```

### components/ProactiveDetectionConfigs

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | Resource location | string |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:components |
| properties | Properties that define a ProactiveDetection configuration. | ApplicationInsightsComponentProactiveDetectionConfig... |


### ApplicationInsightsComponentProactiveDetectionConfig...

| Name | Description | Value |
|-|-|-|
| CustomEmails | Custom email addresses for this rule notifications | string[] |
| Enabled | A flag that indicates whether this rule is enabled by the user | bool |
| RuleDefinitions | Static definitions of the ProactiveDetection configuration rule (same values for all components). | ApplicationInsightsComponentProactiveDetectionConfig... |
| SendEmailsToSubscriptionOwners | A flag that indicated whether notifications on this rule should be sent to subscription owners | bool |


### ApplicationInsightsComponentProactiveDetectionConfig...

| Name | Description | Value |
|-|-|-|
| Description | The rule description | string |
| DisplayName | The rule name as it is displayed in UI | string |
| HelpUrl | URL which displays additional info about the proactive detection rule | string |
| IsEnabledByDefault | A flag indicating whether the rule is enabled by default | bool |
| IsHidden | A flag indicating whether the rule is hidden (from the UI) | bool |
| IsInPreview | A flag indicating whether the rule is in preview | bool |
| Name | The rule name | string |
| SupportsEmailNotifications | A flag indicating whether email notifications are supported for detections for this rule | bool |


