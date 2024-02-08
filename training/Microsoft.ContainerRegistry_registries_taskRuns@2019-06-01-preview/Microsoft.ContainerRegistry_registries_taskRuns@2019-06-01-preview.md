```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ContainerRegistry/registries/taskRuns@2019-06-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  identity {
    type = "string"
    identity_ids = []
  }
  body = jsonencode({
    properties = {
      forceUpdateTag = "string"
      runRequest = {
        agentPoolName = "string"
        isArchiveEnabled = bool
        logTemplate = "string"
        type = "string"
        // For remaining properties, see RunRequest objects
      }
    }
  })
}

```

### registries/taskRuns

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | The location of the resource | string |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:registries |
| identity | Identity for the resource. | IdentityProperties |
| properties | The properties associated with the task run, i.e., request and result of the run | TaskRunProperties |


### IdentityProperties

| Name | Description | Value |
|-|-|-|
| principalId | The principal ID of resource identity. | string |
| tenantId | The tenant ID of resource. | string |
| type | The identity type. | 'None''SystemAssigned''SystemAssigned, UserAssigned''UserAssigned' |
| userAssignedIdentities | The list of user identities associated with the resource. The user identitydictionary key references will be ARM resource ids in the form:'/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'. | object |


### TaskRunProperties

| Name | Description | Value |
|-|-|-|
| forceUpdateTag | How the run should be forced to rerun even if the run request configuration has not changed | string |
| runRequest | The request (parameters) for the run | RunRequest |


### RunRequest

| Name | Description | Value |
|-|-|-|
| agentPoolName | The dedicated agent pool for the run. | string |
| isArchiveEnabled | The value that indicates whether archiving is enabled for the run or not. | bool |
| logTemplate | The template that describes the repository and tag information for run log artifact. | string |
| type | Set the object type | DockerBuildRequestEncodedTaskRunRequestFileTaskRunRequestTaskRunRequest(required) |


### DockerBuildRequest

| Name | Description | Value |
|-|-|-|
| type | The type of the run request. | 'DockerBuildRequest' (required) |
| agentConfiguration | The machine configuration of the run agent. | AgentProperties |
| arguments | The collection of override arguments to be used when executing the run. | Argument[] |
| credentials | The properties that describes a set of credentials that will be used when this run is invoked. | Credentials |
| dockerFilePath | The Docker file path relative to the source location. | string (required) |
| imageNames | The fully qualified image names including the repository and tag. | string[] |
| isPushEnabled | The value of this property indicates whether the image built should be pushed to the registry or not. | bool |
| noCache | The value of this property indicates whether the image cache is enabled or not. | bool |
| platform | The platform properties against which the run has to happen. | PlatformProperties(required) |
| sourceLocation | The URL(absolute or relative) of the source context. It can be an URL to a tar or git repository.If it is relative URL, the relative path should be obtained from calling listBuildSourceUploadUrl API. | string |
| target | The name of the target build stage for the docker build. | string |
| timeout | Run timeout in seconds. | int |


### AgentProperties

| Name | Description | Value |
|-|-|-|
| cpu | The CPU configuration in terms of number of cores required for the run. | int |


### Argument

| Name | Description | Value |
|-|-|-|
| isSecret | Flag to indicate whether the argument represents a secret and want to be removed from build logs. | bool |
| name | The name of the argument. | string (required) |
| value | The value of the argument. | string (required) |


### Credentials

| Name | Description | Value |
|-|-|-|
| customRegistries | Describes the credential parameters for accessing other custom registries. The keyfor the dictionary item will be the registry login server (myregistry.azurecr.io) andthe value of the item will be the registry credentials for accessing the registry. | object |
| sourceRegistry | Describes the credential parameters for accessing the source registry. | SourceRegistryCredentials |


### SourceRegistryCredentials

| Name | Description | Value |
|-|-|-|
| loginMode | The authentication mode which determines the source registry login scope. The credentials for the source registrywill be generated using the given scope. These credentials will be used to login tothe source registry during the run. | 'Default''None' |


### PlatformProperties

| Name | Description | Value |
|-|-|-|
| architecture | The OS architecture. | '386''amd64''arm''arm64''x86' |
| os | The operating system type required for the run. | 'Linux''Windows' (required) |
| variant | Variant of the CPU. | 'v6''v7''v8' |


### EncodedTaskRunRequest

| Name | Description | Value |
|-|-|-|
| type | The type of the run request. | 'EncodedTaskRunRequest' (required) |
| agentConfiguration | The machine configuration of the run agent. | AgentProperties |
| credentials | The properties that describes a set of credentials that will be used when this run is invoked. | Credentials |
| encodedTaskContent | Base64 encoded value of the template/definition file content. | string (required) |
| encodedValuesContent | Base64 encoded value of the parameters/values file content. | string |
| platform | The platform properties against which the run has to happen. | PlatformProperties(required) |
| sourceLocation | The URL(absolute or relative) of the source context. It can be an URL to a tar or git repository.If it is relative URL, the relative path should be obtained from calling listBuildSourceUploadUrl API. | string |
| timeout | Run timeout in seconds. | int |
| values | The collection of overridable values that can be passed when running a task. | SetValue[] |


### SetValue

| Name | Description | Value |
|-|-|-|
| isSecret | Flag to indicate whether the value represents a secret or not. | bool |
| name | The name of the overridable value. | string (required) |
| value | The overridable value. | string (required) |


### FileTaskRunRequest

| Name | Description | Value |
|-|-|-|
| type | The type of the run request. | 'FileTaskRunRequest' (required) |
| agentConfiguration | The machine configuration of the run agent. | AgentProperties |
| credentials | The properties that describes a set of credentials that will be used when this run is invoked. | Credentials |
| platform | The platform properties against which the run has to happen. | PlatformProperties(required) |
| sourceLocation | The URL(absolute or relative) of the source context. It can be an URL to a tar or git repository.If it is relative URL, the relative path should be obtained from calling listBuildSourceUploadUrl API. | string |
| taskFilePath | The template/definition file path relative to the source. | string (required) |
| timeout | Run timeout in seconds. | int |
| values | The collection of overridable values that can be passed when running a task. | SetValue[] |
| valuesFilePath | The values/parameters file path relative to the source. | string |


### TaskRunRequest

| Name | Description | Value |
|-|-|-|
| type | The type of the run request. | 'TaskRunRequest' (required) |
| overrideTaskStepProperties | Set of overridable parameters that can be passed when running a Task. | OverrideTaskStepProperties |
| taskId | The resource ID of task against which run has to be queued. | string (required) |


### OverrideTaskStepProperties

| Name | Description | Value |
|-|-|-|
| arguments | Gets or sets the collection of override arguments to be used whenexecuting a build step. | Argument[] |
| contextPath | The source context against which run has to be queued. | string |
| file | The file against which run has to be queued. | string |
| target | The name of the target build stage for the docker build. | string |
| updateTriggerToken | Base64 encoded update trigger token that will be attached with the base image trigger webhook. | string |
| values | The collection of overridable values that can be passed when running a Task. | SetValue[] |


