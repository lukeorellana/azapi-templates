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


