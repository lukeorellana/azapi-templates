```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DataBoxEdge/dataBoxEdgeDevices/roles/monitoringConfig@2022-12-01-preview"
  name = "default"
  parent_id = "string"
  body = jsonencode({
    properties = {
      metricConfigurations = [
        {
          counterSets = [
            {
              counters = [
                {
                  additionalDimensions = [
                    {
                      sourceName = "string"
                      sourceType = "string"
                    }
                  ]
                  dimensionFilter = [
                    {
                      sourceName = "string"
                      sourceType = "string"
                    }
                  ]
                  instance = "string"
                  name = "string"
                }
              ]
            }
          ]
          mdmAccount = "string"
          metricNameSpace = "string"
          resourceId = "string"
        }
      ]
    }
  })
}

```

### dataBoxEdgeDevices/roles/monitoringConfig

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'default' |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:roles |
| properties | The metric setting properties. | MonitoringMetricConfigurationProperties(required) |


### MonitoringMetricConfigurationProperties

| Name | Description | Value |
|-|-|-|
| metricConfigurations | The metrics configuration details | MetricConfiguration[] (required) |


### MetricConfiguration

| Name | Description | Value |
|-|-|-|
| counterSets | Host name for the IoT hub associated to the device. | MetricCounterSet[] (required) |
| mdmAccount | The MDM account to which the counters should be pushed. | string |
| metricNameSpace | The MDM namespace to which the counters should be pushed. This is required if MDMAccount is specified | string |
| resourceId | The Resource ID on which the metrics should be pushed. | string (required) |


### MetricCounterSet

| Name | Description | Value |
|-|-|-|
| counters | The counters that should be collected in this set. | MetricCounter[] (required) |


### MetricCounter

| Name | Description | Value |
|-|-|-|
| additionalDimensions | The additional dimensions to be added to metric. | MetricDimension[] |
| dimensionFilter | The dimension filter. | MetricDimension[] |
| instance | The instance from which counter should be collected. | string |
| name | The counter name. | string (required) |


### MetricDimension

| Name | Description | Value |
|-|-|-|
| sourceName | The dimension value. | string (required) |
| sourceType | The dimension type. | string (required) |


