```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Cdn/profiles/originGroups@2023-07-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      healthProbeSettings = {
        probeIntervalInSeconds = int
        probePath = "string"
        probeProtocol = "string"
        probeRequestType = "string"
      }
      loadBalancingSettings = {
        additionalLatencyInMilliseconds = int
        sampleSize = int
        successfulSamplesRequired = int
      }
      sessionAffinityState = "string"
      trafficRestorationTimeToHealedOrNewEndpointsInMinutes = int
    }
  })
}

```

### profiles/originGroups

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-50Valid characters:Alphanumerics and hyphens.Start and end with alphanumeric.Resource name must be unique across Azure. |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:profiles |
| properties | The JSON object that contains the properties of the origin group. | AFDOriginGroupProperties |


### AFDOriginGroupProperties

| Name | Description | Value |
|-|-|-|
| healthProbeSettings | Health probe settings to the origin that is used to determine the health of the origin. | HealthProbeParameters |
| loadBalancingSettings | Load balancing settings for a backend pool | LoadBalancingSettingsParameters |
| sessionAffinityState | Whether to allow session affinity on this host. Valid options are 'Enabled' or 'Disabled' | 'Disabled''Enabled' |
| trafficRestorationTimeToHealedOrNewEndpointsInMinutes | Time in minutes to shift the traffic to the endpoint gradually when an unhealthy endpoint comes healthy or a new endpoint is added. Default is 10 mins. This property is currently not supported. | intConstraints:Min value = 0Max value = 50 |


### HealthProbeParameters

| Name | Description | Value |
|-|-|-|
| probeIntervalInSeconds | The number of seconds between health probes.Default is 240sec. | intConstraints:Min value = 1Max value = 255 |
| probePath | The path relative to the origin that is used to determine the health of the origin. | string |
| probeProtocol | Protocol to use for health probe. | 'Http''Https''NotSet' |
| probeRequestType | The type of health probe request that is made. | 'GET''HEAD''NotSet' |


### LoadBalancingSettingsParameters

| Name | Description | Value |
|-|-|-|
| additionalLatencyInMilliseconds | The additional latency in milliseconds for probes to fall into the lowest latency bucket | int |
| sampleSize | The number of samples to consider for load balancing decisions | int |
| successfulSamplesRequired | The number of samples within the sample period that must succeed | int |


