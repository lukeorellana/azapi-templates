## Microsoft.DeploymentManager/artifactSources@2019-11-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DeploymentManager/artifactSources@2019-11-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      artifactRoot = "string"
      authentication = {
        type = "string"
        // For remaining properties, see Authentication objects
      }
      sourceType = "string"
    }
  })
}

```

### artifactSources

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| properties | The properties that define the artifact source. | ArtifactSourceProperties |


### ArtifactSourceProperties

| Name | Description | Value |
|-|-|-|
| artifactRoot | The path from the location that the 'authentication' property [say, a SAS URI to the blob container] refers to, to the location of the artifacts. This can be used to differentiate different versions of the artifacts. Or, different types of artifacts like binaries or templates. The location referenced by the authentication property concatenated with this optional artifactRoot path forms the artifact source location where the artifacts are expected to be found. | string |
| authentication | The authentication method to use to access the artifact source. | Authentication(required) |
| sourceType | The type of artifact source used. | string (required) |


### Authentication

| Name | Description | Value |
|-|-|-|
| type | Set the object type | Sas(required) |


### SasAuthentication

| Name | Description | Value |
|-|-|-|
| type | The authentication type | 'Sas' (required) |
| properties | The SAS properties | SasProperties |


### SasProperties

| Name | Description | Value |
|-|-|-|
| sasUri | The SAS URI to the Azure Storage blob container. Any offset from the root of the container to where the artifacts are located can be defined in the artifactRoot. | string (required) |
## Microsoft.DeploymentManager/rollouts@2019-11-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DeploymentManager/rollouts@2019-11-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  identity {
    identityIds = [
      "string"
    ]
    type = "string"
  }
  body = jsonencode({
    properties = {
      artifactSourceId = "string"
      buildVersion = "string"
      stepGroups = [
        {
          dependsOnStepGroups = [
            "string"
          ]
          deploymentTargetId = "string"
          name = "string"
          postDeploymentSteps = [
            {
              stepId = "string"
            }
          ]
          preDeploymentSteps = [
            {
              stepId = "string"
            }
          ]
        }
      ]
      targetServiceTopologyId = "string"
    }
  })
}

```

### rollouts

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| identity | Identity for the resource. | Identity(required) |
| properties | Defines the properties that make up a rollout request. | RolloutRequestPropertiesOrRolloutProperties(required) |


### Identity

| Name | Description | Value |
|-|-|-|
| identityIds | The list of identities. | string[] (required) |
| type | The identity type. | string (required) |


### RolloutRequestPropertiesOrRolloutProperties

| Name | Description | Value |
|-|-|-|
| artifactSourceId | The reference to the artifact source resource Id where the payload is located. | string |
| buildVersion | The version of the build being deployed. | string (required) |
| stepGroups | The list of step groups that define the orchestration. | StepGroup[] (required) |
| targetServiceTopologyId | The resource Id of the service topology from which service units are being referenced in step groups to be deployed. | string (required) |


### StepGroup

| Name | Description | Value |
|-|-|-|
| dependsOnStepGroups | The list of step group names on which this step group depends on. | string[] |
| deploymentTargetId | The resource Id of service unit to be deployed. The service unit should be from the service topology referenced in targetServiceTopologyId | string (required) |
| name | The name of the step group. | string (required) |
| postDeploymentSteps | The list of steps to be run after deploying the target. | PrePostStep[] |
| preDeploymentSteps | The list of steps to be run before deploying the target. | PrePostStep[] |


### PrePostStep

| Name | Description | Value |
|-|-|-|
| stepId | The resource Id of the step to be run. | string (required) |
## Microsoft.DeploymentManager/serviceTopologies@2019-11-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DeploymentManager/serviceTopologies@2019-11-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      artifactSourceId = "string"
    }
  })
}

```

### serviceTopologies

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| properties | The properties that define the service topology. | ServiceTopologyResourceProperties(required) |


### ServiceTopologyResourceProperties

| Name | Description | Value |
|-|-|-|
| artifactSourceId | The resource Id of the artifact source that contains the artifacts that can be referenced in the service units. | string |
## Microsoft.DeploymentManager/serviceTopologies/services@2019-11-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DeploymentManager/serviceTopologies/services@2019-11-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      targetLocation = "string"
      targetSubscriptionId = "string"
    }
  })
}

```

### serviceTopologies/services

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:serviceTopologies |
| properties | The properties that define a service in a service topology. | ServiceResourceProperties(required) |


### ServiceResourceProperties

| Name | Description | Value |
|-|-|-|
| targetLocation | The Azure location to which the resources in the service belong to or should be deployed to. | string (required) |
| targetSubscriptionId | The subscription to which the resources in the service belong to or should be deployed to. | string (required) |
## Microsoft.DeploymentManager/serviceTopologies/services/serviceUnits@2019-11-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DeploymentManager/serviceTopologies/services/serviceUnits@2019-11-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      artifacts = {
        parametersArtifactSourceRelativePath = "string"
        parametersUri = "string"
        templateArtifactSourceRelativePath = "string"
        templateUri = "string"
      }
      deploymentMode = "string"
      targetResourceGroup = "string"
    }
  })
}

```

### serviceTopologies/services/serviceUnits

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:services |
| properties | The properties that define the service unit. | ServiceUnitResourceProperties(required) |


### ServiceUnitResourceProperties

| Name | Description | Value |
|-|-|-|
| artifacts | The artifacts for the service unit. | ServiceUnitArtifacts |
| deploymentMode | Describes the type of ARM deployment to be performed on the resource. | 'Complete''Incremental' (required) |
| targetResourceGroup | The Azure Resource Group to which the resources in the service unit belong to or should be deployed to. | string (required) |


### ServiceUnitArtifacts

| Name | Description | Value |
|-|-|-|
| parametersArtifactSourceRelativePath | The path to the ARM parameters file relative to the artifact source. | string |
| parametersUri | The full URI of the ARM parameters file with the SAS token. | string |
| templateArtifactSourceRelativePath | The path to the ARM template file relative to the artifact source. | string |
| templateUri | The full URI of the ARM template file with the SAS token. | string |
## Microsoft.DeploymentManager/steps@2019-11-01-preview

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
