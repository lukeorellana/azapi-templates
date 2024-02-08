```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Logz/monitors/metricsSource/tagRules@2022-01-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      metricRules = [
        {
          filteringTags = [
            {
              action = "string"
              name = "string"
              value = "string"
            }
          ]
          subscriptionId = "string"
        }
      ]
      sendMetrics = bool
    }
  })
}

```

### monitors/metricsSource/tagRules

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:metricsSource |
| properties | Definition of the properties for a TagRules resource. | MetricsTagRulesProperties |


### MetricsTagRulesProperties

| Name | Description | Value |
|-|-|-|
| metricRules |  | MetricRules[] |
| sendMetrics | Flag specifying if metrics from Azure resources should be sent for the Monitor resource. | bool |


### MetricRules

| Name | Description | Value |
|-|-|-|
| filteringTags | List of filtering tags to be used for capturing metrics. If empty, all resources will be captured. If only Exclude action is specified, the rules will apply to the list of all available resources. If Include actions are specified, the rules will only include resources with the associated tags. | FilteringTag[] |
| subscriptionId | Subscription Id for which filtering tags are applicable | string |


### FilteringTag

| Name | Description | Value |
|-|-|-|
| action | Valid actions for a filtering tag. Exclusion takes priority over inclusion. | 'Exclude''Include' |
| name | The name (also known as the key) of the tag. | string |
| value | The value of the tag. | string |


