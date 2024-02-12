```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Cdn/profiles/endpoints/originGroups@2023-07-01-preview"
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
      origins = [
        {
          id = "string"
        }
      ]
      responseBasedOriginErrorDetectionSettings = {
        httpErrorRanges = [
          {
            begin = int
            end = int
          }
        ]
        responseBasedDetectedErrorTypes = "string"
        responseBasedFailoverThresholdPercentage = int
      }
      trafficRestorationTimeToHealedOrNewEndpointsInMinutes = int
    }
  })
}

```

### profiles/endpoints/originGroups

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:endpoints |
| properties | The JSON object that contains the properties of the origin group. | OriginGroupProperties |


### OriginGroupProperties

| Name | Description | Value |
|-|-|-|
| healthProbeSettings | Health probe settings to the origin that is used to determine the health of the origin. | HealthProbeParameters |
| origins | The source of the content being delivered via CDN within given origin group. | ResourceReference[] |
| responseBasedOriginErrorDetectionSettings | The JSON object that contains the properties to determine origin health using real requests/responses. This property is currently not supported. | ResponseBasedOriginErrorDetectionParameters |
| trafficRestorationTimeToHealedOrNewEndpointsInMinutes | Time in minutes to shift the traffic to the endpoint gradually when an unhealthy endpoint comes healthy or a new endpoint is added. Default is 10 mins. This property is currently not supported. | intConstraints:Min value = 0Max value = 50 |


### HealthProbeParameters

| Name | Description | Value |
|-|-|-|
| probeIntervalInSeconds | The number of seconds between health probes.Default is 240sec. | intConstraints:Min value = 1Max value = 255 |
| probePath | The path relative to the origin that is used to determine the health of the origin. | string |
| probeProtocol | Protocol to use for health probe. | 'Http''Https''NotSet' |
| probeRequestType | The type of health probe request that is made. | 'GET''HEAD''NotSet' |


### ResourceReference

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |


### ResponseBasedOriginErrorDetectionParameters

| Name | Description | Value |
|-|-|-|
| httpErrorRanges | The list of Http status code ranges that are considered as server errors for origin and it is marked as unhealthy. | HttpErrorRangeParameters[] |
| responseBasedDetectedErrorTypes | Type of response errors for real user requests for which origin will be deemed unhealthy | 'None''TcpAndHttpErrors''TcpErrorsOnly' |
| responseBasedFailoverThresholdPercentage | The percentage of failed requests in the sample where failover should trigger. | intConstraints:Min value = 0Max value = 100 |


### HttpErrorRangeParameters

| Name | Description | Value |
|-|-|-|
| begin | The inclusive start of the http status code range. | intConstraints:Min value = 100Max value = 999 |
| end | The inclusive end of the http status code range. | intConstraints:Min value = 100Max value = 999 |


