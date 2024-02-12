```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.App/jobs@2023-05-01"
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
      configuration = {
        eventTriggerConfig = {
          parallelism = int
          replicaCompletionCount = int
          scale = {
            maxExecutions = int
            minExecutions = int
            pollingInterval = int
            rules = [
              {
                auth = [
                  {
                    secretRef = "string"
                    triggerParameter = "string"
                  }
                ]
                name = "string"
                type = "string"
              }
            ]
          }
        }
        manualTriggerConfig = {
          parallelism = int
          replicaCompletionCount = int
        }
        registries = [
          {
            identity = "string"
            passwordSecretRef = "string"
            server = "string"
            username = "string"
          }
        ]
        replicaRetryLimit = int
        replicaTimeout = int
        scheduleTriggerConfig = {
          cronExpression = "string"
          parallelism = int
          replicaCompletionCount = int
        }
        secrets = [
          {
            identity = "string"
            keyVaultUrl = "string"
            name = "string"
            value = "string"
          }
        ]
        triggerType = "string"
      }
      environmentId = "string"
      template = {
        containers = [
          {
            args = [
              "string"
            ]
            command = [
              "string"
            ]
            env = [
              {
                name = "string"
                secretRef = "string"
                value = "string"
              }
            ]
            image = "string"
            name = "string"
            probes = [
              {
                failureThreshold = int
                httpGet = {
                  host = "string"
                  httpHeaders = [
                    {
                      name = "string"
                      value = "string"
                    }
                  ]
                  path = "string"
                  port = int
                  scheme = "string"
                }
                initialDelaySeconds = int
                periodSeconds = int
                successThreshold = int
                tcpSocket = {
                  host = "string"
                  port = int
                }
                terminationGracePeriodSeconds = int
                timeoutSeconds = int
                type = "string"
              }
            ]
            resources = {
              cpu = "decimal-as-string"
              memory = "string"
            }
            volumeMounts = [
              {
                mountPath = "string"
                subPath = "string"
                volumeName = "string"
              }
            ]
          }
        ]
        initContainers = [
          {
            args = [
              "string"
            ]
            command = [
              "string"
            ]
            env = [
              {
                name = "string"
                secretRef = "string"
                value = "string"
              }
            ]
            image = "string"
            name = "string"
            resources = {
              cpu = "decimal-as-string"
              memory = "string"
            }
            volumeMounts = [
              {
                mountPath = "string"
                subPath = "string"
                volumeName = "string"
              }
            ]
          }
        ]
        volumes = [
          {
            mountOptions = "string"
            name = "string"
            secrets = [
              {
                path = "string"
                secretRef = "string"
              }
            ]
            storageName = "string"
            storageType = "string"
          }
        ]
      }
      workloadProfileName = "string"
    }
  })
}

```

### jobs

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| identity | Managed identities needed by a container app job to interact with other Azure services to not maintain any secrets or credentials in code. | ManagedServiceIdentity |
| properties | Container Apps Job resource specific properties. | JobProperties |


### ManagedServiceIdentity

| Name | Description | Value |
|-|-|-|
| type | Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed). | 'None''SystemAssigned''SystemAssigned,UserAssigned''UserAssigned' (required) |
| userAssignedIdentities | The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests. | object |


### JobProperties

| Name | Description | Value |
|-|-|-|
| configuration | Container Apps Job configuration properties. | JobConfiguration |
| environmentId | Resource ID of environment. | string |
| template | Container Apps job definition. | JobTemplate |
| workloadProfileName | Workload profile name to pin for container apps job execution. | string |


### JobConfiguration

| Name | Description | Value |
|-|-|-|
| eventTriggerConfig | Trigger configuration of an event driven job. | JobConfigurationEventTriggerConfig |
| manualTriggerConfig | Manual trigger configuration for a single execution job. Properties replicaCompletionCount and parallelism would be set to 1 by default | JobConfigurationManualTriggerConfig |
| registries | Collection of private container registry credentials used by a Container apps job | RegistryCredentials[] |
| replicaRetryLimit | Maximum number of retries before failing the job. | int |
| replicaTimeout | Maximum number of seconds a replica is allowed to run. | int (required) |
| scheduleTriggerConfig | Cron formatted repeating trigger schedule ("* * * * *") for cronjobs. Properties completions and parallelism would be set to 1 by default | JobConfigurationScheduleTriggerConfig |
| secrets | Collection of secrets used by a Container Apps Job | Secret[] |
| triggerType | Trigger type of the job | 'Event''Manual''Schedule' (required) |


### JobConfigurationEventTriggerConfig

| Name | Description | Value |
|-|-|-|
| parallelism | Number of parallel replicas of a job that can run at a given time. | int |
| replicaCompletionCount | Minimum number of successful replica completions before overall job completion. | int |
| scale | Scaling configurations for event driven jobs. | JobScale |


### JobScale

| Name | Description | Value |
|-|-|-|
| maxExecutions | Maximum number of job executions that are created for a trigger, default 100. | int |
| minExecutions | Minimum number of job executions that are created for a trigger, default 0 | int |
| pollingInterval | Interval to check each event source in seconds. Defaults to 30s | int |
| rules | Scaling rules. | JobScaleRule[] |


### JobScaleRule

| Name | Description | Value |
|-|-|-|
| auth | Authentication secrets for the scale rule. | ScaleRuleAuth[] |
| metadata | Metadata properties to describe the scale rule. | For Bicep, you can use theany()function. |
| name | Scale Rule Name | string |
| type | Type of the scale ruleeg: azure-servicebus, redis etc. | string |


### ScaleRuleAuth

| Name | Description | Value |
|-|-|-|
| secretRef | Name of the secret from which to pull the auth params. | string |
| triggerParameter | Trigger Parameter that uses the secret | string |


### JobConfigurationManualTriggerConfig

| Name | Description | Value |
|-|-|-|
| parallelism | Number of parallel replicas of a job that can run at a given time. | int |
| replicaCompletionCount | Minimum number of successful replica completions before overall job completion. | int |


### RegistryCredentials

| Name | Description | Value |
|-|-|-|
| identity | A Managed Identity to use to authenticate with Azure Container Registry. For user-assigned identities, use the full user-assigned identity Resource ID. For system-assigned identities, use 'system' | string |
| passwordSecretRef | The name of the Secret that contains the registry login password | string |
| server | Container Registry Server | string |
| username | Container Registry Username | string |


### JobConfigurationScheduleTriggerConfig

| Name | Description | Value |
|-|-|-|
| cronExpression | Cron formatted repeating schedule ("* * * * *") of a Cron Job. | string (required) |
| parallelism | Number of parallel replicas of a job that can run at a given time. | int |
| replicaCompletionCount | Minimum number of successful replica completions before overall job completion. | int |


### Secret

| Name | Description | Value |
|-|-|-|
| identity | Resource ID of a managed identity to authenticate with Azure Key Vault, or System to use a system-assigned identity. | string |
| keyVaultUrl | Azure Key Vault URL pointing to the secret referenced by the container app. | string |
| name | Secret Name. | string |
| value | Secret Value. | string |


### JobTemplate

| Name | Description | Value |
|-|-|-|
| containers | List of container definitions for the Container App. | Container[] |
| initContainers | List of specialized containers that run before app containers. | InitContainer[] |
| volumes | List of volume definitions for the Container App. | Volume[] |


### Container

| Name | Description | Value |
|-|-|-|
| args | Container start command arguments. | string[] |
| command | Container start command. | string[] |
| env | Container environment variables. | EnvironmentVar[] |
| image | Container image tag. | string |
| name | Custom container name. | string |
| probes | List of probes for the container. | ContainerAppProbe[] |
| resources | Container resource requirements. | ContainerResources |
| volumeMounts | Container volume mounts. | VolumeMount[] |


### EnvironmentVar

| Name | Description | Value |
|-|-|-|
| name | Environment variable name. | string |
| secretRef | Name of the Container App secret from which to pull the environment variable value. | string |
| value | Non-secret environment variable value. | string |


### ContainerAppProbe

| Name | Description | Value |
|-|-|-|
| failureThreshold | Minimum consecutive failures for the probe to be considered failed after having succeeded. Defaults to 3. Minimum value is 1. Maximum value is 10. | int |
| httpGet | HTTPGet specifies the http request to perform. | ContainerAppProbeHttpGet |
| initialDelaySeconds | Number of seconds after the container has started before liveness probes are initiated. Minimum value is 1. Maximum value is 60. | int |
| periodSeconds | How often (in seconds) to perform the probe. Default to 10 seconds. Minimum value is 1. Maximum value is 240. | int |
| successThreshold | Minimum consecutive successes for the probe to be considered successful after having failed. Defaults to 1. Must be 1 for liveness and startup. Minimum value is 1. Maximum value is 10. | int |
| tcpSocket | TCPSocket specifies an action involving a TCP port. TCP hooks not yet supported. | ContainerAppProbeTcpSocket |
| terminationGracePeriodSeconds | Optional duration in seconds the pod needs to terminate gracefully upon probe failure. The grace period is the duration in seconds after the processes running in the pod are sent a termination signal and the time when the processes are forcibly halted with a kill signal. Set this value longer than the expected cleanup time for your process. If this value is nil, the pod's terminationGracePeriodSeconds will be used. Otherwise, this value overrides the value provided by the pod spec. Value must be non-negative integer. The value zero indicates stop immediately via the kill signal (no opportunity to shut down). This is an alpha field and requires enabling ProbeTerminationGracePeriod feature gate. Maximum value is 3600 seconds (1 hour) | int |
| timeoutSeconds | Number of seconds after which the probe times out. Defaults to 1 second. Minimum value is 1. Maximum value is 240. | int |
| type | The type of probe. | 'Liveness''Readiness''Startup' |


### ContainerAppProbeHttpGet

| Name | Description | Value |
|-|-|-|
| host | Host name to connect to, defaults to the pod IP. You probably want to set "Host" in httpHeaders instead. | string |
| httpHeaders | Custom headers to set in the request. HTTP allows repeated headers. | ContainerAppProbeHttpGetHttpHeadersItem[] |
| path | Path to access on the HTTP server. | string |
| port | Name or number of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. | int (required) |
| scheme | Scheme to use for connecting to the host. Defaults to HTTP. | 'HTTP''HTTPS' |


### ContainerAppProbeHttpGetHttpHeadersItem

| Name | Description | Value |
|-|-|-|
| name | The header field name | string (required) |
| value | The header field value | string (required) |


### ContainerAppProbeTcpSocket

| Name | Description | Value |
|-|-|-|
| host | Optional: Host name to connect to, defaults to the pod IP. | string |
| port | Number or name of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. | int (required) |


### ContainerResources

| Name | Description | Value |
|-|-|-|
| cpu | Required CPU in cores, e.g. 0.5 To specify a decimal value, use thejson()function. | int or json decimal |
| memory | Required memory, e.g. "250Mb" | string |


### VolumeMount

| Name | Description | Value |
|-|-|-|
| mountPath | Path within the container at which the volume should be mounted.Must not contain ':'. | string |
| subPath | Path within the volume from which the container's volume should be mounted. Defaults to "" (volume's root). | string |
| volumeName | This must match the Name of a Volume. | string |


### InitContainer

| Name | Description | Value |
|-|-|-|
| args | Container start command arguments. | string[] |
| command | Container start command. | string[] |
| env | Container environment variables. | EnvironmentVar[] |
| image | Container image tag. | string |
| name | Custom container name. | string |
| resources | Container resource requirements. | ContainerResources |
| volumeMounts | Container volume mounts. | VolumeMount[] |


### Volume

| Name | Description | Value |
|-|-|-|
| mountOptions | Mount options used while mounting the AzureFile. Must be a comma-separated string. | string |
| name | Volume name. | string |
| secrets | List of secrets to be added in volume. If no secrets are provided, all secrets in collection will be added to volume. | SecretVolumeItem[] |
| storageName | Name of storage resource. No need to provide for EmptyDir and Secret. | string |
| storageType | Storage type for the volume. If not provided, use EmptyDir. | 'AzureFile''EmptyDir''Secret' |


### SecretVolumeItem

| Name | Description | Value |
|-|-|-|
| path | Path to project secret to. If no path is provided, path defaults to name of secret listed in secretRef. | string |
| secretRef | Name of the Container App secret from which to pull the secret value. | string |


