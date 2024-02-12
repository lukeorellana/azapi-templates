```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.MachineLearningServices/workspaces/inferencePools@2023-08-01-preview"
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
      codeConfiguration = {
        codeId = "string"
        scoringScript = "string"
      }
      description = "string"
      environmentConfiguration = {
        environmentId = "string"
        environmentVariables = {
          {customized property} = "string"
        }
        livenessProbe = {
          failureThreshold = int
          initialDelay = "string"
          period = "string"
          successThreshold = int
          timeout = "string"
        }
        readinessProbe = {
          failureThreshold = int
          initialDelay = "string"
          period = "string"
          successThreshold = int
          timeout = "string"
        }
        startupProbe = {
          failureThreshold = int
          initialDelay = "string"
          period = "string"
          successThreshold = int
          timeout = "string"
        }
      }
      modelConfiguration = {
        modelId = "string"
      }
      nodeSkuType = "string"
      properties = {
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
      }
      requestConfiguration = {
        maxConcurrentRequestsPerInstance = int
        requestTimeout = "string"
      }
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

### workspaces/inferencePools

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| sku | Sku details required for ARM contract for Autoscaling. | Sku |
| kind | Metadata used by portal/tooling/etc to render different UX experiences for resources of the same type. | string |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:workspaces |
| identity | Managed service identity (system assigned and/or user assigned identities) | ManagedServiceIdentity |
| properties | [Required] Additional attributes of the entity. | InferencePoolProperties(required) |


### ManagedServiceIdentity

| Name | Description | Value |
|-|-|-|
| type | Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed). | 'None''SystemAssigned''SystemAssigned,UserAssigned''UserAssigned' (required) |
| userAssignedIdentities | The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests. | UserAssignedIdentities |


### UserAssignedIdentities

| Name | Description | Value |
|-|-|-|
| {customized property} |  | UserAssignedIdentity |


### InferencePoolProperties

| Name | Description | Value |
|-|-|-|
| codeConfiguration | Code configuration for the inference pool. | CodeConfiguration |
| description | Description of the resource. | string |
| environmentConfiguration | EnvironmentConfiguration for the inference pool. | PoolEnvironmentConfiguration |
| modelConfiguration | ModelConfiguration for the inference pool. | PoolModelConfiguration |
| nodeSkuType | [Required] Compute instance type. | string (required)Constraints:Min length = 1Pattern =[a-zA-Z0-9_] |
| properties | Property dictionary. Properties can be added, but not removed or altered. | PropertiesBaseProperties |
| requestConfiguration | Request configuration for the inference pool. | RequestConfiguration |


### CodeConfiguration

| Name | Description | Value |
|-|-|-|
| codeId | ARM resource ID of the code asset. | string |
| scoringScript | [Required] The script to execute on startup. eg. "score.py" | string (required)Constraints:Min length = 1Pattern =[a-zA-Z0-9_] |


### PoolEnvironmentConfiguration

| Name | Description | Value |
|-|-|-|
| environmentId | ARM resource ID of the environment specification for the inference pool. | string |
| environmentVariables | Environment variables configuration for the inference pool. | PoolEnvironmentConfigurationEnvironmentVariables |
| livenessProbe | Liveness probe monitors the health of the container regularly. | ProbeSettings |
| readinessProbe | Readiness probe validates if the container is ready to serve traffic. The properties and defaults are the same as liveness probe. | ProbeSettings |
| startupProbe | This verifies whether the application within a container is started. Startup probes run before any other probe, and, unless it finishes successfully, disables other probes. | ProbeSettings |


### PoolEnvironmentConfigurationEnvironmentVariables

| Name | Description | Value |
|-|-|-|
| {customized property} |  | string |


### ProbeSettings

| Name | Description | Value |
|-|-|-|
| failureThreshold | The number of failures to allow before returning an unhealthy status. | int |
| initialDelay | The delay before the first probe in ISO 8601 format. | string |
| period | The length of time between probes in ISO 8601 format. | string |
| successThreshold | The number of successful probes before returning a healthy status. | int |
| timeout | The probe timeout in ISO 8601 format. | string |


### PoolModelConfiguration

| Name | Description | Value |
|-|-|-|
| modelId | The URI path to the model. | string |


### PropertiesBaseProperties

| Name | Description | Value |
|-|-|-|
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |


### RequestConfiguration

| Name | Description | Value |
|-|-|-|
| maxConcurrentRequestsPerInstance | The number of maximum concurrent requests per node allowed per deployment. Defaults to 1. | int |
| requestTimeout | The scoring timeout in ISO 8601 format.Defaults to 5000ms. | string |


### Sku

| Name | Description | Value |
|-|-|-|
| capacity | If the SKU supports scale out/in then the capacity integer should be included. If scale out/in is not possible for the resource this may be omitted. | int |
| family | If the service has different generations of hardware, for the same SKU, then that can be captured here. | string |
| name | The name of the SKU. Ex - P3. It is typically a letter+number code | string (required) |
| size | The SKU size. When the name field is the combination of tier and some other value, this would be the standalone code. | string |
| tier | This field is required to be implemented by the Resource Provider if the service has more than one tier, but is not required on a PUT. | 'Basic''Free''Premium''Standard' |


