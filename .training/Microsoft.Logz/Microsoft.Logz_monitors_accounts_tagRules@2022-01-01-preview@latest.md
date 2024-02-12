```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Logz/monitors/accounts/tagRules@2022-01-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      logRules = {
        filteringTags = [
          {
            action = "string"
            name = "string"
            value = "string"
          }
        ]
        sendAadLogs = bool
        sendActivityLogs = bool
        sendSubscriptionLogs = bool
      }
    }
  })
}

```

### monitors/accounts/tagRules

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:accounts |
| properties | Definition of the properties for a TagRules resource. | MonitoringTagRulesProperties |


### MonitoringTagRulesProperties

| Name | Description | Value |
|-|-|-|
| logRules | Set of rules for sending logs for the Monitor resource. | LogRules |


### LogRules

| Name | Description | Value |
|-|-|-|
| filteringTags | List of filtering tags to be used for capturing logs. This only takes effect if SendActivityLogs flag is enabled. If empty, all resources will be captured. If only Exclude action is specified, the rules will apply to the list of all available resources. If Include actions are specified, the rules will only include resources with the associated tags. | FilteringTag[] |
| sendAadLogs | Flag specifying if AAD logs should be sent for the Monitor resource. | bool |
| sendActivityLogs | Flag specifying if activity logs from Azure resources should be sent for the Monitor resource. | bool |
| sendSubscriptionLogs | Flag specifying if subscription logs should be sent for the Monitor resource. | bool |


### FilteringTag

| Name | Description | Value |
|-|-|-|
| action | Valid actions for a filtering tag. Exclusion takes priority over inclusion. | 'Exclude''Include' |
| name | The name (also known as the key) of the tag. | string |
| value | The value of the tag. | string |


