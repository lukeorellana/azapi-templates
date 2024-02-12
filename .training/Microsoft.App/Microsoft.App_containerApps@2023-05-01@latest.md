```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.App/containerApps@2023-05-01"
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
        activeRevisionsMode = "string"
        dapr = {
          appId = "string"
          appPort = int
          appProtocol = "string"
          enableApiLogging = bool
          enabled = bool
          httpMaxRequestSize = int
          httpReadBufferSize = int
          logLevel = "string"
        }
        ingress = {
          allowInsecure = bool
          clientCertificateMode = "string"
          corsPolicy = {
            allowCredentials = bool
            allowedHeaders = [
              "string"
            ]
            allowedMethods = [
              "string"
            ]
            allowedOrigins = [
              "string"
            ]
            exposeHeaders = [
              "string"
            ]
            maxAge = int
          }
          customDomains = [
            {
              bindingType = "string"
              certificateId = "string"
              name = "string"
            }
          ]
          exposedPort = int
          external = bool
          ipSecurityRestrictions = [
            {
              action = "string"
              description = "string"
              ipAddressRange = "string"
              name = "string"
            }
          ]
          stickySessions = {
            affinity = "string"
          }
          targetPort = int
          traffic = [
            {
              label = "string"
              latestRevision = bool
              revisionName = "string"
              weight = int
            }
          ]
          transport = "string"
        }
        maxInactiveRevisions = int
        registries = [
          {
            identity = "string"
            passwordSecretRef = "string"
            server = "string"
            username = "string"
          }
        ]
        secrets = [
          {
            identity = "string"
            keyVaultUrl = "string"
            name = "string"
            value = "string"
          }
        ]
        service = {
          type = "string"
        }
      }
      environmentId = "string"
      managedEnvironmentId = "string"
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
        revisionSuffix = "string"
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
        serviceBinds = [
          {
            name = "string"
            serviceId = "string"
          }
        ]
        terminationGracePeriodSeconds = int
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
    extendedLocation = {
      name = "string"
      type = "CustomLocation"
    }
    managedBy = "string"
  })
}

```

### containerApps

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 2-32Valid characters:Lowercase letters, numbers, and hyphens..Start with letter and end with alphanumeric. |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| extendedLocation | The complex type of the extended location. | ExtendedLocation |
| identity | managed identities for the Container App to interact with other Azure services without maintaining any secrets or credentials in code. | ManagedServiceIdentity |
| managedBy | The fully qualified resource ID of the resource that manages this resource. Indicates if this resource is managed by another Azure resource. If this is present, complete mode deployment will not delete the resource if it is removed from the template since it is managed by another resource. | string |
| properties | ContainerApp resource specific properties | ContainerAppProperties |


### ExtendedLocation

| Name | Description | Value |
|-|-|-|
| name | The name of the extended location. | string |
| type | The type of the extended location. | 'CustomLocation' |


### ManagedServiceIdentity

| Name | Description | Value |
|-|-|-|
| type | Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed). | 'None''SystemAssigned''SystemAssigned,UserAssigned''UserAssigned' (required) |
| userAssignedIdentities | The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests. | object |


### ContainerAppProperties

| Name | Description | Value |
|-|-|-|
| configuration | Non versioned Container App configuration properties. | Configuration |
| environmentId | Resource ID of environment. | string |
| managedEnvironmentId | Deprecated. Resource ID of the Container App's environment. | string |
| template | Container App versioned application definition. | Template |
| workloadProfileName | Workload profile name to pin for container app execution. | string |


### Configuration

| Name | Description | Value |
|-|-|-|
| activeRevisionsMode | ActiveRevisionsMode controls how active revisions are handled for the Container app:{list}{item}Multiple: multiple revisions can be active.{/item}{item}Single: Only one revision can be active at a time. Revision weights can not be used in this mode. If no value if provided, this is the default.{/item}{/list} | 'Multiple''Single' |
| dapr | Dapr configuration for the Container App. | Dapr |
| ingress | Ingress configurations. | Ingress |
| maxInactiveRevisions | Optional. Max inactive revisions a Container App can have. | int |
| registries | Collection of private container registry credentials for containers used by the Container app | RegistryCredentials[] |
| secrets | Collection of secrets used by a Container app | Secret[] |
| service | Container App to be a dev Container App Service | Service |


### Dapr

| Name | Description | Value |
|-|-|-|
| appId | Dapr application identifier | string |
| appPort | Tells Dapr which port your application is listening on | int |
| appProtocol | Tells Dapr which protocol your application is using. Valid options are http and grpc. Default is http | 'grpc''http' |
| enableApiLogging | Enables API logging for the Dapr sidecar | bool |
| enabled | Boolean indicating if the Dapr side car is enabled | bool |
| httpMaxRequestSize | Increasing max size of request body http and grpc servers parameter in MB to handle uploading of big files. Default is 4 MB. | int |
| httpReadBufferSize | Dapr max size of http header read buffer in KB to handle when sending multi-KB headers. Default is 65KB. | int |
| logLevel | Sets the log level for the Dapr sidecar. Allowed values are debug, info, warn, error. Default is info. | 'debug''error''info''warn' |


### Ingress

| Name | Description | Value |
|-|-|-|
| allowInsecure | Bool indicating if HTTP connections to is allowed. If set to false HTTP connections are automatically redirected to HTTPS connections | bool |
| clientCertificateMode | Client certificate mode for mTLS authentication. Ignore indicates server drops client certificate on forwarding. Accept indicates server forwards client certificate but does not require a client certificate. Require indicates server requires a client certificate. | 'accept''ignore''require' |
| corsPolicy | CORS policy for container app | CorsPolicy |
| customDomains | custom domain bindings for Container Apps' hostnames. | CustomDomain[] |
| exposedPort | Exposed Port in containers for TCP traffic from ingress | int |
| external | Bool indicating if app exposes an external http endpoint | bool |
| ipSecurityRestrictions | Rules to restrict incoming IP address. | IpSecurityRestrictionRule[] |
| stickySessions | Sticky Sessions for Single Revision Mode | IngressStickySessions |
| targetPort | Target Port in containers for traffic from ingress | int |
| traffic | Traffic weights for app's revisions | TrafficWeight[] |
| transport | Ingress transport protocol | 'auto''http''http2''tcp' |


### CorsPolicy

| Name | Description | Value |
|-|-|-|
| allowCredentials | Specifies whether the resource allows credentials | bool |
| allowedHeaders | Specifies the content for the access-control-allow-headers header | string[] |
| allowedMethods | Specifies the content for the access-control-allow-methods header | string[] |
| allowedOrigins | Specifies the content for the access-control-allow-origins header | string[] (required) |
| exposeHeaders | Specifies the content for the access-control-expose-headers header | string[] |
| maxAge | Specifies the content for the access-control-max-age header | int |


### CustomDomain

| Name | Description | Value |
|-|-|-|
| bindingType | Custom Domain binding type. | 'Disabled''SniEnabled' |
| certificateId | Resource Id of the Certificate to be bound to this hostname. Must exist in the Managed Environment. | string |
| name | Hostname. | string (required) |


### IpSecurityRestrictionRule

| Name | Description | Value |
|-|-|-|
| action | Allow or Deny rules to determine for incoming IP. Note: Rules can only consist of ALL Allow or ALL Deny | 'Allow''Deny' (required) |
| description | Describe the IP restriction rule that is being sent to the container-app. This is an optional field. | string |
| ipAddressRange | CIDR notation to match incoming IP address | string (required) |
| name | Name for the IP restriction rule. | string (required) |


### IngressStickySessions

| Name | Description | Value |
|-|-|-|
| affinity | Sticky Session Affinity | 'none''sticky' |


### TrafficWeight

| Name | Description | Value |
|-|-|-|
| label | Associates a traffic label with a revision | string |
| latestRevision | Indicates that the traffic weight belongs to a latest stable revision | bool |
| revisionName | Name of a revision | string |
| weight | Traffic weight assigned to a revision | int |


### RegistryCredentials

| Name | Description | Value |
|-|-|-|
| identity | A Managed Identity to use to authenticate with Azure Container Registry. For user-assigned identities, use the full user-assigned identity Resource ID. For system-assigned identities, use 'system' | string |
| passwordSecretRef | The name of the Secret that contains the registry login password | string |
| server | Container Registry Server | string |
| username | Container Registry Username | string |


### Secret

| Name | Description | Value |
|-|-|-|
| identity | Resource ID of a managed identity to authenticate with Azure Key Vault, or System to use a system-assigned identity. | string |
| keyVaultUrl | Azure Key Vault URL pointing to the secret referenced by the container app. | string |
| name | Secret Name. | string |
| value | Secret Value. | string |


### Service

| Name | Description | Value |
|-|-|-|
| type | Dev ContainerApp service type | string (required) |


### Template

| Name | Description | Value |
|-|-|-|
| containers | List of container definitions for the Container App. | Container[] |
| initContainers | List of specialized containers that run before app containers. | InitContainer[] |
| revisionSuffix | User friendly suffix that is appended to the revision name | string |
| scale | Scaling properties for the Container App. | Scale |
| serviceBinds | List of container app services bound to the app | ServiceBind[] |
| terminationGracePeriodSeconds | Optional duration in seconds the Container App Instance needs to terminate gracefully. Value must be non-negative integer. The value zero indicates stop immediately via the kill signal (no opportunity to shut down). If this value is nil, the default grace period will be used instead. Set this value longer than the expected cleanup time for your process. Defaults to 30 seconds. | int |
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
| secretRef | Name of the secret from which to pull the auth params. | string |
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


### ServiceBind

| Name | Description | Value |
|-|-|-|
| name | Name of the service bind | string |
| serviceId | Resource id of the target service | string |


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


