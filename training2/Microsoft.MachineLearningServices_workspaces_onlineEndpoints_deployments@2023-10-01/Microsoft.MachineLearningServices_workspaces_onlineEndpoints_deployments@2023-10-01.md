```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.MachineLearningServices/workspaces/onlineEndpoints/deployments@2023-10-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  identity {
    type = "string"
    identity_ids = []
  }
  body = jsonencode({
    properties = {
      appInsightsEnabled = bool
      codeConfiguration = {
        codeId = "string"
        scoringScript = "string"
      }
      description = "string"
      egressPublicNetworkAccess = "string"
      environmentId = "string"
      environmentVariables = {
        {customized property} = "string"
        {customized property} = "string"
      }
      instanceType = "string"
      livenessProbe = {
        failureThreshold = int
        initialDelay = "string"
        period = "string"
        successThreshold = int
        timeout = "string"
      }
      model = "string"
      modelMountPath = "string"
      properties = {
        {customized property} = "string"
        {customized property} = "string"
      }
      readinessProbe = {
        failureThreshold = int
        initialDelay = "string"
        period = "string"
        successThreshold = int
        timeout = "string"
      }
      requestSettings = {
        maxConcurrentRequestsPerInstance = int
        maxQueueWait = "string"
        requestTimeout = "string"
      }
      scaleSettings = {
        scaleType = "string"
        // For remaining properties, see OnlineScaleSettings objects
      }
      endpointComputeType = "string"
      // For remaining properties, see OnlineDeploymentProperties objects
    }
    sku = {
      capacity = int
      family = "string"
      name = "string"
      size = "string"
      tier = "string"
    }
    kind = "string"
  })
}

```

### workspaces/onlineEndpoints/deployments

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| sku | Sku details required for ARM contract for Autoscaling. | Sku |
| kind | Metadata used by portal/tooling/etc to render different UX experiences for resources of the same type. | string |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:onlineEndpoints |
| identity | Managed service identity (system assigned and/or user assigned identities) | ManagedServiceIdentity |
| properties | [Required] Additional attributes of the entity. | OnlineDeploymentProperties(required) |


### ManagedServiceIdentity

| Name | Description | Value |
|-|-|-|
| type | Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed). | 'None''SystemAssigned''SystemAssigned,UserAssigned''UserAssigned' (required) |
| userAssignedIdentities | The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests. | UserAssignedIdentities |


### UserAssignedIdentities

| Name | Description | Value |
|-|-|-|
| {customized property} |  | UserAssignedIdentity |


### OnlineDeploymentProperties

| Name | Description | Value |
|-|-|-|
| appInsightsEnabled | If true, enables Application Insights logging. | bool |
| codeConfiguration | Code configuration for the endpoint deployment. | CodeConfiguration |
| description | Description of the endpoint deployment. | string |
| egressPublicNetworkAccess | If Enabled, allow egress public network access. If Disabled, this will create secure egress. Default: Enabled. | 'Disabled''Enabled' |
| environmentId | ARM resource ID or AssetId of the environment specification for the endpoint deployment. | string |
| environmentVariables | Environment variables configuration for the deployment. | EndpointDeploymentPropertiesBaseEnvironmentVariables |
| instanceType | Compute instance type. | string |
| livenessProbe | Liveness probe monitors the health of the container regularly. | ProbeSettings |
| model | The URI path to the model. | string |
| modelMountPath | The path to mount the model in custom container. | string |
| properties | Property dictionary. Properties can be added, but not removed or altered. | EndpointDeploymentPropertiesBaseProperties |
| readinessProbe | Readiness probe validates if the container is ready to serve traffic. The properties and defaults are the same as liveness probe. | ProbeSettings |
| requestSettings | Request settings for the deployment. | OnlineRequestSettings |
| scaleSettings | Scale settings for the deployment.If it is null or not provided,it defaults to TargetUtilizationScaleSettings for KubernetesOnlineDeploymentand to DefaultScaleSettings for ManagedOnlineDeployment. | OnlineScaleSettings |
| endpointComputeType | Set the object type | KubernetesManaged(required) |


### CodeConfiguration

| Name | Description | Value |
|-|-|-|
| codeId | ARM resource ID of the code asset. | string |
| scoringScript | [Required] The script to execute on startup. eg. "score.py" | string (required)Constraints:Min length = 1Pattern =[a-zA-Z0-9_] |


### EndpointDeploymentPropertiesBaseEnvironmentVariables

| Name | Description | Value |
|-|-|-|
| {customized property} |  | string |
| {customized property} |  | string |


### ProbeSettings

| Name | Description | Value |
|-|-|-|
| failureThreshold | The number of failures to allow before returning an unhealthy status. | int |
| initialDelay | The delay before the first probe in ISO 8601 format. | string |
| period | The length of time between probes in ISO 8601 format. | string |
| successThreshold | The number of successful probes before returning a healthy status. | int |
| timeout | The probe timeout in ISO 8601 format. | string |


### EndpointDeploymentPropertiesBaseProperties

| Name | Description | Value |
|-|-|-|
| {customized property} |  | string |
| {customized property} |  | string |


### OnlineRequestSettings

| Name | Description | Value |
|-|-|-|
| maxConcurrentRequestsPerInstance | The number of maximum concurrent requests per node allowed per deployment. Defaults to 1. | int |
| maxQueueWait | The maximum amount of time a request will stay in the queue in ISO 8601 format.Defaults to 500ms. | string |
| requestTimeout | The scoring timeout in ISO 8601 format.Defaults to 5000ms. | string |


### OnlineScaleSettings

| Name | Description | Value |
|-|-|-|
| scaleType | Set the object type | DefaultTargetUtilization(required) |


### DefaultScaleSettings

| Name | Description | Value |
|-|-|-|
| scaleType | [Required] Type of deployment scaling algorithm | 'Default' (required) |


### TargetUtilizationScaleSettings

| Name | Description | Value |
|-|-|-|
| scaleType | [Required] Type of deployment scaling algorithm | 'TargetUtilization' (required) |
| maxInstances | The maximum number of instances that the deployment can scale to. The quota will be reserved for max_instances. | int |
| minInstances | The minimum number of instances to always be present. | int |
| pollingInterval | The polling interval in ISO 8691 format. Only supports duration with precision as low as Seconds. | string |
| targetUtilizationPercentage | Target CPU usage for the autoscaler. | int |


### KubernetesOnlineDeployment

| Name | Description | Value |
|-|-|-|
| endpointComputeType | [Required] The compute type of the endpoint. | 'Kubernetes' (required) |
| containerResourceRequirements | The resource requirements for the container (cpu and memory). | ContainerResourceRequirements |


### ContainerResourceRequirements

| Name | Description | Value |
|-|-|-|
| containerResourceLimits | Container resource limit info: | ContainerResourceSettings |
| containerResourceRequests | Container resource request info: | ContainerResourceSettings |


### ContainerResourceSettings

| Name | Description | Value |
|-|-|-|
| cpu | Number of vCPUs request/limit for container. More info:https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/ | string |
| gpu | Number of Nvidia GPU cards request/limit for container. More info:https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/ | string |
| memory | Memory size request/limit for container. More info:https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/ | string |


### ManagedOnlineDeployment

| Name | Description | Value |
|-|-|-|
| endpointComputeType | [Required] The compute type of the endpoint. | 'Managed' (required) |


### Sku

| Name | Description | Value |
|-|-|-|
| capacity | If the SKU supports scale out/in then the capacity integer should be included. If scale out/in is not possible for the resource this may be omitted. | int |
| family | If the service has different generations of hardware, for the same SKU, then that can be captured here. | string |
| name | The name of the SKU. Ex - P3. It is typically a letter+number code | string (required) |
| size | The SKU size. When the name field is the combination of tier and some other value, this would be the standalone code. | string |
| tier | This field is required to be implemented by the Resource Provider if the service has more than one tier, but is not required on a PUT. | 'Basic''Free''Premium''Standard' |


