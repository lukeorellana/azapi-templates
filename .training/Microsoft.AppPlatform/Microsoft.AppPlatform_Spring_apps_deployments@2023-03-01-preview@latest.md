```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AppPlatform/Spring/apps/deployments@2023-03-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      active = bool
      deploymentSettings = {
        addonConfigs = {}
        containerProbeSettings = {
          disableProbe = bool
        }
        environmentVariables = {}
        livenessProbe = {
          disableProbe = bool
          failureThreshold = int
          initialDelaySeconds = int
          periodSeconds = int
          probeAction = {
            type = "string"
            // For remaining properties, see ProbeAction objects
          }
          successThreshold = int
          timeoutSeconds = int
        }
        readinessProbe = {
          disableProbe = bool
          failureThreshold = int
          initialDelaySeconds = int
          periodSeconds = int
          probeAction = {
            type = "string"
            // For remaining properties, see ProbeAction objects
          }
          successThreshold = int
          timeoutSeconds = int
        }
        resourceRequests = {
          cpu = "string"
          memory = "string"
        }
        scale = {
          maxReplicas = int
          minReplicas = int
          rules = [
            {
              azureQueue = {
                auth = [
                  {
                    secretRef = "string"
                    triggerParameter = "string"
                  }
                ]
                queueLength = int
                queueName = "string"
              }
              custom = {
                auth = [
                  {
                    secretRef = "string"
                    triggerParameter = "string"
                  }
                ]
                metadata = {}
                type = "string"
              }
              http = {
                auth = [
                  {
                    secretRef = "string"
                    triggerParameter = "string"
                  }
                ]
                metadata = {}
              }
              name = "string"
              tcp = {
                auth = [
                  {
                    secretRef = "string"
                    triggerParameter = "string"
                  }
                ]
                metadata = {}
              }
            }
          ]
        }
        startupProbe = {
          disableProbe = bool
          failureThreshold = int
          initialDelaySeconds = int
          periodSeconds = int
          probeAction = {
            type = "string"
            // For remaining properties, see ProbeAction objects
          }
          successThreshold = int
          timeoutSeconds = int
        }
        terminationGracePeriodSeconds = int
      }
      source = {
        version = "string"
        type = "string"
        // For remaining properties, see UserSourceInfo objects
      }
    }
    sku = {
      capacity = int
      name = "string"
      tier = "string"
    }
  })
}

```

### Spring/apps/deployments

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| sku | Sku of the Deployment resource | Sku |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:apps |
| properties | Properties of the Deployment resource | DeploymentResourceProperties |


### DeploymentResourceProperties

| Name | Description | Value |
|-|-|-|
| active | Indicates whether the Deployment is active | bool |
| deploymentSettings | Deployment settings of the Deployment | DeploymentSettings |
| source | Uploaded source information of the deployment. | UserSourceInfo |


### DeploymentSettings

| Name | Description | Value |
|-|-|-|
| addonConfigs | Collection of addons | object |
| containerProbeSettings | Container liveness and readiness probe settings | ContainerProbeSettings |
| environmentVariables | Collection of environment variables | object |
| livenessProbe | Periodic probe of App Instance liveness. App Instance will be restarted if the probe fails. More info:https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes | Probe |
| readinessProbe | Periodic probe of App Instance service readiness. App Instance will be removed from service endpoints if the probe fails. More info:https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes | Probe |
| resourceRequests | The requested resource quantity for required CPU and Memory. It is recommended that using this field to represent the required CPU and Memory, the old field cpu and memoryInGB will be deprecated later. | ResourceRequests |
| scale | Scaling properties for the Azure Spring Apps App Instance. | Scale |
| startupProbe | StartupProbe indicates that the App Instance has successfully initialized. If specified, no other probes are executed until this completes successfully. If this probe fails, the Pod will be restarted, just as if the livenessProbe failed. This can be used to provide different probe parameters at the beginning of a App Instance's lifecycle, when it might take a long time to load data or warm a cache, than during steady-state operation. This cannot be updated. More info:https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes | Probe |
| terminationGracePeriodSeconds | Optional duration in seconds the App Instance needs to terminate gracefully. May be decreased in delete request. Value must be non-negative integer. The value zero indicates stop immediately via the kill signal (no opportunity to shut down). If this value is nil, the default grace period will be used instead. The grace period is the duration in seconds after the processes running in the App Instance are sent a termination signal and the time when the processes are forcibly halted with a kill signal. Set this value longer than the expected cleanup time for your process. Defaults to 90 seconds. | int |


### ContainerProbeSettings

| Name | Description | Value |
|-|-|-|
| disableProbe | Indicates whether disable the liveness and readiness probe | bool |


### Probe

| Name | Description | Value |
|-|-|-|
| disableProbe | Indicate whether the probe is disabled. | bool (required) |
| failureThreshold | Minimum consecutive failures for the probe to be considered failed after having succeeded. Minimum value is 1. | int |
| initialDelaySeconds | Number of seconds after the App Instance has started before probes are initiated. More info:https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes | int |
| periodSeconds | How often (in seconds) to perform the probe. Minimum value is 1. | int |
| probeAction | The action of the probe. | ProbeAction |
| successThreshold | Minimum consecutive successes for the probe to be considered successful after having failed. Must be 1 for liveness and startup. Minimum value is 1. | int |
| timeoutSeconds | Number of seconds after which the probe times out. Minimum value is 1. | int |


### ProbeAction

| Name | Description | Value |
|-|-|-|
| type | Set the object type | ExecActionHTTPGetActionTCPSocketAction(required) |


### ExecAction

| Name | Description | Value |
|-|-|-|
| type | The type of the action to take to perform the health check. | 'ExecAction' (required) |
| command | Command is the command line to execute inside the container, the working directory for the command is root ('/') in the container's filesystem. The command is not run inside a shell, so traditional shell instructions (',', etc) won't work. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as live/healthy and non-zero is unhealthy. | string[] |


### HttpGetAction

| Name | Description | Value |
|-|-|-|
| type | The type of the action to take to perform the health check. | 'HTTPGetAction' (required) |
| path | Path to access on the HTTP server. | string |
| scheme | Scheme to use for connecting to the host. Defaults to HTTP.Possible enum values:-"HTTP"means that the scheme used will behttp://-"HTTPS"means that the scheme used will behttps:// | 'HTTP''HTTPS' |


### TCPSocketAction

| Name | Description | Value |
|-|-|-|
| type | The type of the action to take to perform the health check. | 'TCPSocketAction' (required) |


### ResourceRequests

| Name | Description | Value |
|-|-|-|
| cpu | Required CPU. 1 core can be represented by 1 or 1000m. This should be 500m or 1 for Basic tier, and {500m, 1, 2, 3, 4} for Standard tier. | string |
| memory | Required memory. 1 GB can be represented by 1Gi or 1024Mi. This should be {512Mi, 1Gi, 2Gi} for Basic tier, and {512Mi, 1Gi, 2Gi, ..., 8Gi} for Standard tier. | string |


### Scale

| Name | Description | Value |
|-|-|-|
| maxReplicas | Optional. Maximum number of container replicas. Defaults to 10 if not set. | int |
| minReplicas | Optional. Minimum number of container replicas. | int |
| rules | Scaling rules. | ScaleRule[] |


### ScaleRule

| Name | Description | Value |
|-|-|-|
| azureQueue | Azure Queue based scaling. | QueueScaleRule |
| custom | Custom scale rule. | CustomScaleRule |
| http | HTTP requests based scaling. | HttpScaleRule |
| name | Scale Rule Name | string |
| tcp | Tcp requests based scaling. | TcpScaleRule |


### QueueScaleRule

| Name | Description | Value |
|-|-|-|
| auth | Authentication secrets for the queue scale rule. | ScaleRuleAuth[] |
| queueLength | Queue length. | int |
| queueName | Queue name. | string |


### ScaleRuleAuth

| Name | Description | Value |
|-|-|-|
| secretRef | Name of the Azure Spring Apps App Instance secret from which to pull the auth params. | string |
| triggerParameter | Trigger Parameter that uses the secret | string |


### CustomScaleRule

| Name | Description | Value |
|-|-|-|
| auth | Authentication secrets for the custom scale rule. | ScaleRuleAuth[] |
| metadata | Metadata properties to describe custom scale rule. | object |
| type | Type of the custom scale ruleeg: azure-servicebus, redis etc. | string |


### HttpScaleRule

| Name | Description | Value |
|-|-|-|
| auth | Authentication secrets for the custom scale rule. | ScaleRuleAuth[] |
| metadata | Metadata properties to describe http scale rule. | object |


### TcpScaleRule

| Name | Description | Value |
|-|-|-|
| auth | Authentication secrets for the tcp scale rule. | ScaleRuleAuth[] |
| metadata | Metadata properties to describe tcp scale rule. | object |


### UserSourceInfo

| Name | Description | Value |
|-|-|-|
| version | Version of the source | string |
| type | Set the object type | BuildResultContainerJarNetCoreZipSource(required) |


### BuildResultUserSourceInfo

| Name | Description | Value |
|-|-|-|
| type | Type of the source uploaded | 'BuildResult' (required) |
| buildResultId | Resource id of an existing succeeded build result under the same Spring instance. | string |


### CustomContainerUserSourceInfo

| Name | Description | Value |
|-|-|-|
| type | Type of the source uploaded | 'Container' (required) |
| customContainer | Custom container payload | CustomContainer |


### CustomContainer

| Name | Description | Value |
|-|-|-|
| args | Arguments to the entrypoint. The docker image's CMD is used if this is not provided. | string[] |
| command | Entrypoint array. Not executed within a shell. The docker image's ENTRYPOINT is used if this is not provided. | string[] |
| containerImage | Container image of the custom container. This should be in the form of {repository}:{tag} without the server name of the registry | string |
| imageRegistryCredential | Credential of the image registry | ImageRegistryCredential |
| languageFramework | Language framework of the container image uploaded | string |
| server | The name of the registry that contains the container image | string |


### ImageRegistryCredential

| Name | Description | Value |
|-|-|-|
| password | The password of the image registry credential | string |
| username | The username of the image registry credential | string |


### JarUploadedUserSourceInfo

| Name | Description | Value |
|-|-|-|
| type | Type of the source uploaded | 'Jar' (required) |
| jvmOptions | JVM parameter | string |
| relativePath | Relative path of the storage which stores the source | string |
| runtimeVersion | Runtime version of the Jar file | string |


### NetCoreZipUploadedUserSourceInfo

| Name | Description | Value |
|-|-|-|
| type | Type of the source uploaded | 'NetCoreZip' (required) |
| netCoreMainEntryPath | The path to the .NET executable relative to zip root | string |
| relativePath | Relative path of the storage which stores the source | string |
| runtimeVersion | Runtime version of the .Net file | string |


### SourceUploadedUserSourceInfo

| Name | Description | Value |
|-|-|-|
| type | Type of the source uploaded | 'Source' (required) |
| artifactSelector | Selector for the artifact to be used for the deployment for multi-module projects. This should bethe relative path to the target module/project. | string |
| relativePath | Relative path of the storage which stores the source | string |
| runtimeVersion | Runtime version of the source file | string |


### Sku

| Name | Description | Value |
|-|-|-|
| capacity | Current capacity of the target resource | int |
| name | Name of the Sku | string |
| tier | Tier of the Sku | string |


