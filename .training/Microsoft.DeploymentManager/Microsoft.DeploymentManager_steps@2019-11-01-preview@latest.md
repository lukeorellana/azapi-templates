```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DeploymentManager/steps@2019-11-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      stepType = "string"
      // For remaining properties, see StepProperties objects
    }
  })
}

```

### steps

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| properties | The properties that define the step. | StepProperties(required) |


### StepProperties

| Name | Description | Value |
|-|-|-|
| stepType | Set the object type | HealthCheckWait(required) |


### HealthCheckStepProperties

| Name | Description | Value |
|-|-|-|
| stepType | The type of step. | 'HealthCheck' (required) |
| attributes | The health check step attributes | HealthCheckStepAttributes(required) |


### HealthCheckStepAttributes

| Name | Description | Value |
|-|-|-|
| healthyStateDuration | The duration in ISO 8601 format for which the resource is expected to be continuously healthy. If maxElasticDuration is specified, healthy state duration is enforced after the detection of first healthy signal. | string (required) |
| maxElasticDuration | The duration in ISO 8601 format for which the health check waits for the resource to become healthy. Health check fails if it doesn't. Health check starts to enforce healthyStateDuration once resource becomes healthy. | string |
| waitDuration | The duration in ISO 8601 format for which health check waits idly without any checks. | string |
| type | Set the object type | REST(required) |


### RestHealthCheckStepAttributes

| Name | Description | Value |
|-|-|-|
| type | The type of health check. | 'REST' (required) |
| properties | The REST health check parameters. | RestParameters |


### RestParameters

| Name | Description | Value |
|-|-|-|
| healthChecks | The list of checks that form the health check step. | RestHealthCheck[] (required) |


### RestHealthCheck

| Name | Description | Value |
|-|-|-|
| name | A unique name for this check. | string (required) |
| request | The request to the health provider. | RestRequest(required) |
| response | The expected response from the health provider. If no expected response is provided, the default is to expect the received response to have an HTTP status code of 200 OK. | RestResponse |


### RestRequest

| Name | Description | Value |
|-|-|-|
| authentication | The authentication information required in the request to the health provider. | RestRequestAuthentication(required) |
| method | The HTTP method to use for the request. | 'GET''POST' (required) |
| uri | The HTTP URI to use for the request. | string (required) |


### RestRequestAuthentication

| Name | Description | Value |
|-|-|-|
| type | Set the object type | ApiKeyRolloutIdentity(required) |


### ApiKeyAuthentication

| Name | Description | Value |
|-|-|-|
| type | The authentication type. | 'ApiKey' (required) |
| in | The location of the authentication key/value pair in the request. | 'Header''Query' (required) |
| name | The key name of the authentication key/value pair. | string (required) |
| value | The value of the authentication key/value pair. | string (required) |


### RolloutIdentityAuthentication

| Name | Description | Value |
|-|-|-|
| type | The authentication type. | 'RolloutIdentity' (required) |


### RestResponse

| Name | Description | Value |
|-|-|-|
| regex | The regular expressions to match the response content with. | RestResponseRegex |
| successStatusCodes | The HTTP status codes expected in a successful health check response. The response is expected to match one of the given status codes. If no expected status codes are provided, default expected status code is 200 OK. | string[] |


### RestResponseRegex

| Name | Description | Value |
|-|-|-|
| matches | The list of regular expressions. | string[] |
| matchQuantifier | Indicates whether any or all of the expressions should match with the response content. | 'All''Any' |


### WaitStepProperties

| Name | Description | Value |
|-|-|-|
| stepType | The type of step. | 'Wait' (required) |
| attributes | The Wait attributes | WaitStepAttributes(required) |


### WaitStepAttributes

| Name | Description | Value |
|-|-|-|
| duration | The duration in ISO 8601 format of how long the wait should be. | string (required) |


