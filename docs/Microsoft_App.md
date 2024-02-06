## Microsoft.App/connectedEnvironments@2023-05-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.App/connectedEnvironments@2023-05-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      customDomainConfiguration = {
        certificatePassword = "string"
        dnsSuffix = "string"
      }
      daprAIConnectionString = "string"
      staticIp = "string"
    }
    extendedLocation = {
      name = "string"
      type = "CustomLocation"
    }
  })
}

```

### connectedEnvironments

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| extendedLocation | The complex type of the extended location. | ExtendedLocation |
| properties | ConnectedEnvironment resource specific properties | ConnectedEnvironmentProperties |


### ExtendedLocation

| Name | Description | Value |
|-|-|-|
| name | The name of the extended location. | string |
| type | The type of the extended location. | 'CustomLocation' |


### ConnectedEnvironmentProperties

| Name | Description | Value |
|-|-|-|
| customDomainConfiguration | Custom domain configuration for the environment | CustomDomainConfiguration |
| daprAIConnectionString | Application Insights connection string used by Dapr to export Service to Service communication telemetry | string |
| staticIp | Static IP of the connectedEnvironment | string |


### CustomDomainConfiguration

| Name | Description | Value |
|-|-|-|
| certificatePassword | Certificate password | string |
| certificateValue | PFX or PEM blob | For Bicep, you can use theany()function. |
| dnsSuffix | Dns suffix for the environment domain | string |
## Microsoft.App/connectedEnvironments/certificates@2023-05-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.App/connectedEnvironments/certificates@2023-05-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      password = "string"
    }
  })
}

```

### connectedEnvironments/certificates

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:connectedEnvironments |
| properties | Certificate resource specific properties | CertificateProperties |


### CertificateProperties

| Name | Description | Value |
|-|-|-|
| password | Certificate password. | string |
| value | PFX or PEM blob | For Bicep, you can use theany()function. |
## Microsoft.App/connectedEnvironments/daprComponents@2023-05-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.App/connectedEnvironments/daprComponents@2023-05-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      componentType = "string"
      ignoreErrors = bool
      initTimeout = "string"
      metadata = [
        {
          name = "string"
          secretRef = "string"
          value = "string"
        }
      ]
      scopes = [
        "string"
      ]
      secrets = [
        {
          identity = "string"
          keyVaultUrl = "string"
          name = "string"
          value = "string"
        }
      ]
      secretStoreComponent = "string"
      version = "string"
    }
  })
}

```

### connectedEnvironments/daprComponents

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:connectedEnvironments |
| properties | Dapr Component resource specific properties | DaprComponentProperties |


### DaprComponentProperties

| Name | Description | Value |
|-|-|-|
| componentType | Component type | string |
| ignoreErrors | Boolean describing if the component errors are ignores | bool |
| initTimeout | Initialization timeout | string |
| metadata | Component metadata | DaprMetadata[] |
| scopes | Names of container apps that can use this Dapr component | string[] |
| secrets | Collection of secrets used by a Dapr component | Secret[] |
| secretStoreComponent | Name of a Dapr component to retrieve component secrets from | string |
| version | Component version | string |


### DaprMetadata

| Name | Description | Value |
|-|-|-|
| name | Metadata property name. | string |
| secretRef | Name of the Dapr Component secret from which to pull the metadata property value. | string |
| value | Metadata property value. | string |


### Secret

| Name | Description | Value |
|-|-|-|
| identity | Resource ID of a managed identity to authenticate with Azure Key Vault, or System to use a system-assigned identity. | string |
| keyVaultUrl | Azure Key Vault URL pointing to the secret referenced by the container app. | string |
| name | Secret Name. | string |
| value | Secret Value. | string |
## Microsoft.App/connectedEnvironments/storages@2023-05-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.App/connectedEnvironments/storages@2023-05-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      azureFile = {
        accessMode = "string"
        accountKey = "string"
        accountName = "string"
        shareName = "string"
      }
    }
  })
}

```

### connectedEnvironments/storages

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:connectedEnvironments |
| properties | Storage properties | ConnectedEnvironmentStorageProperties |


### ConnectedEnvironmentStorageProperties

| Name | Description | Value |
|-|-|-|
| azureFile | Azure file properties | AzureFileProperties |


### AzureFileProperties

| Name | Description | Value |
|-|-|-|
| accessMode | Access mode for storage | 'ReadOnly''ReadWrite' |
| accountKey | Storage account key for azure file. | string |
| accountName | Storage account name for azure file. | string |
| shareName | Azure file share name. | string |
## Microsoft.App/containerApps@2023-05-01

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
## Microsoft.App/containerApps/authConfigs@2023-05-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.App/containerApps/authConfigs@2023-05-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      globalValidation = {
        excludedPaths = [
          "string"
        ]
        redirectToProvider = "string"
        unauthenticatedClientAction = "string"
      }
      httpSettings = {
        forwardProxy = {
          convention = "string"
          customHostHeaderName = "string"
          customProtoHeaderName = "string"
        }
        requireHttps = bool
        routes = {
          apiPrefix = "string"
        }
      }
      identityProviders = {
        apple = {
          enabled = bool
          login = {
            scopes = [
              "string"
            ]
          }
          registration = {
            clientId = "string"
            clientSecretSettingName = "string"
          }
        }
        azureActiveDirectory = {
          enabled = bool
          isAutoProvisioned = bool
          login = {
            disableWWWAuthenticate = bool
            loginParameters = [
              "string"
            ]
          }
          registration = {
            clientId = "string"
            clientSecretCertificateIssuer = "string"
            clientSecretCertificateSubjectAlternativeName = "string"
            clientSecretCertificateThumbprint = "string"
            clientSecretSettingName = "string"
            openIdIssuer = "string"
          }
          validation = {
            allowedAudiences = [
              "string"
            ]
            defaultAuthorizationPolicy = {
              allowedApplications = [
                "string"
              ]
              allowedPrincipals = {
                groups = [
                  "string"
                ]
                identities = [
                  "string"
                ]
              }
            }
            jwtClaimChecks = {
              allowedClientApplications = [
                "string"
              ]
              allowedGroups = [
                "string"
              ]
            }
          }
        }
        azureStaticWebApps = {
          enabled = bool
          registration = {
            clientId = "string"
          }
        }
        customOpenIdConnectProviders = {}
        facebook = {
          enabled = bool
          graphApiVersion = "string"
          login = {
            scopes = [
              "string"
            ]
          }
          registration = {
            appId = "string"
            appSecretSettingName = "string"
          }
        }
        gitHub = {
          enabled = bool
          login = {
            scopes = [
              "string"
            ]
          }
          registration = {
            clientId = "string"
            clientSecretSettingName = "string"
          }
        }
        google = {
          enabled = bool
          login = {
            scopes = [
              "string"
            ]
          }
          registration = {
            clientId = "string"
            clientSecretSettingName = "string"
          }
          validation = {
            allowedAudiences = [
              "string"
            ]
          }
        }
        twitter = {
          enabled = bool
          registration = {
            consumerKey = "string"
            consumerSecretSettingName = "string"
          }
        }
      }
      login = {
        allowedExternalRedirectUrls = [
          "string"
        ]
        cookieExpiration = {
          convention = "string"
          timeToExpiration = "string"
        }
        nonce = {
          nonceExpirationInterval = "string"
          validateNonce = bool
        }
        preserveUrlFragmentsForLogins = bool
        routes = {
          logoutEndpoint = "string"
        }
      }
      platform = {
        enabled = bool
        runtimeVersion = "string"
      }
    }
  })
}

```

### containerApps/authConfigs

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:containerApps |
| properties | AuthConfig resource specific properties | AuthConfigProperties |


### AuthConfigProperties

| Name | Description | Value |
|-|-|-|
| globalValidation | The configuration settings that determines the validation flow of users using  Service Authentication/Authorization. | GlobalValidation |
| httpSettings | The configuration settings of the HTTP requests for authentication and authorization requests made against ContainerApp Service Authentication/Authorization. | HttpSettings |
| identityProviders | The configuration settings of each of the identity providers used to configure ContainerApp Service Authentication/Authorization. | IdentityProviders |
| login | The configuration settings of the login flow of users using ContainerApp Service Authentication/Authorization. | Login |
| platform | The configuration settings of the platform of ContainerApp Service Authentication/Authorization. | AuthPlatform |


### GlobalValidation

| Name | Description | Value |
|-|-|-|
| excludedPaths | The paths for which unauthenticated flow would not be redirected to the login page. | string[] |
| redirectToProvider | The default authentication provider to use when multiple providers are configured.This setting is only needed if multiple providers are configured and the unauthenticated clientaction is set to "RedirectToLoginPage". | string |
| unauthenticatedClientAction | The action to take when an unauthenticated client attempts to access the app. | 'AllowAnonymous''RedirectToLoginPage''Return401''Return403' |


### HttpSettings

| Name | Description | Value |
|-|-|-|
| forwardProxy | The configuration settings of a forward proxy used to make the requests. | ForwardProxy |
| requireHttps | falseif the authentication/authorization responses not having the HTTPS scheme are permissible; otherwise,true. | bool |
| routes | The configuration settings of the paths HTTP requests. | HttpSettingsRoutes |


### ForwardProxy

| Name | Description | Value |
|-|-|-|
| convention | The convention used to determine the url of the request made. | 'Custom''NoProxy''Standard' |
| customHostHeaderName | The name of the header containing the host of the request. | string |
| customProtoHeaderName | The name of the header containing the scheme of the request. | string |


### HttpSettingsRoutes

| Name | Description | Value |
|-|-|-|
| apiPrefix | The prefix that should precede all the authentication/authorization paths. | string |


### IdentityProviders

| Name | Description | Value |
|-|-|-|
| apple | The configuration settings of the Apple provider. | Apple |
| azureActiveDirectory | The configuration settings of the Azure Active directory provider. | AzureActiveDirectory |
| azureStaticWebApps | The configuration settings of the Azure Static Web Apps provider. | AzureStaticWebApps |
| customOpenIdConnectProviders | The map of the name of the alias of each custom Open ID Connect provider to theconfiguration settings of the custom Open ID Connect provider. | object |
| facebook | The configuration settings of the Facebook provider. | Facebook |
| gitHub | The configuration settings of the GitHub provider. | GitHub |
| google | The configuration settings of the Google provider. | Google |
| twitter | The configuration settings of the Twitter provider. | Twitter |


### Apple

| Name | Description | Value |
|-|-|-|
| enabled | falseif the Apple provider should not be enabled despite the set registration; otherwise,true. | bool |
| login | The configuration settings of the login flow. | LoginScopes |
| registration | The configuration settings of the Apple registration. | AppleRegistration |


### LoginScopes

| Name | Description | Value |
|-|-|-|
| scopes | A list of the scopes that should be requested while authenticating. | string[] |


### AppleRegistration

| Name | Description | Value |
|-|-|-|
| clientId | The Client ID of the app used for login. | string |
| clientSecretSettingName | The app setting name that contains the client secret. | string |


### AzureActiveDirectory

| Name | Description | Value |
|-|-|-|
| enabled | falseif the Azure Active Directory provider should not be enabled despite the set registration; otherwise,true. | bool |
| isAutoProvisioned | Gets a value indicating whether the Azure AD configuration was auto-provisioned using 1st party tooling.This is an internal flag primarily intended to support the Azure Management Portal. Users should notread or write to this property. | bool |
| login | The configuration settings of the Azure Active Directory login flow. | AzureActiveDirectoryLogin |
| registration | The configuration settings of the Azure Active Directory app registration. | AzureActiveDirectoryRegistration |
| validation | The configuration settings of the Azure Active Directory token validation flow. | AzureActiveDirectoryValidation |


### AzureActiveDirectoryLogin

| Name | Description | Value |
|-|-|-|
| disableWWWAuthenticate | trueif the www-authenticate provider should be omitted from the request; otherwise,false. | bool |
| loginParameters | Login parameters to send to the OpenID Connect authorization endpoint whena user logs in. Each parameter must be in the form "key=value". | string[] |


### AzureActiveDirectoryRegistration

| Name | Description | Value |
|-|-|-|
| clientId | The Client ID of this relying party application, known as the client_id.This setting is required for enabling OpenID Connection authentication with Azure Active Directory orother 3rd party OpenID Connect providers.More information on OpenID Connect:http://openid.net/specs/openid-connect-core-1_0.html | string |
| clientSecretCertificateIssuer | An alternative to the client secret thumbprint, that is the issuer of a certificate used for signing purposes. This property acts asa replacement for the Client Secret Certificate Thumbprint. It is also optional. | string |
| clientSecretCertificateSubjectAlternativeName | An alternative to the client secret thumbprint, that is the subject alternative name of a certificate used for signing purposes. This property acts asa replacement for the Client Secret Certificate Thumbprint. It is also optional. | string |
| clientSecretCertificateThumbprint | An alternative to the client secret, that is the thumbprint of a certificate used for signing purposes. This property acts asa replacement for the Client Secret. It is also optional. | string |
| clientSecretSettingName | The app setting name that contains the client secret of the relying party application. | string |
| openIdIssuer | The OpenID Connect Issuer URI that represents the entity which issues access tokens for this application.When using Azure Active Directory, this value is the URI of the directory tenant, e.g.https://login.microsoftonline.com/v2.0/{tenant-guid}/.This URI is a case-sensitive identifier for the token issuer.More information on OpenID Connect Discovery:http://openid.net/specs/openid-connect-discovery-1_0.html | string |


### AzureActiveDirectoryValidation

| Name | Description | Value |
|-|-|-|
| allowedAudiences | The list of audiences that can make successful authentication/authorization requests. | string[] |
| defaultAuthorizationPolicy | The configuration settings of the default authorization policy. | DefaultAuthorizationPolicy |
| jwtClaimChecks | The configuration settings of the checks that should be made while validating the JWT Claims. | JwtClaimChecks |


### DefaultAuthorizationPolicy

| Name | Description | Value |
|-|-|-|
| allowedApplications | The configuration settings of the Azure Active Directory allowed applications. | string[] |
| allowedPrincipals | The configuration settings of the Azure Active Directory allowed principals. | AllowedPrincipals |


### AllowedPrincipals

| Name | Description | Value |
|-|-|-|
| groups | The list of the allowed groups. | string[] |
| identities | The list of the allowed identities. | string[] |


### JwtClaimChecks

| Name | Description | Value |
|-|-|-|
| allowedClientApplications | The list of the allowed client applications. | string[] |
| allowedGroups | The list of the allowed groups. | string[] |


### AzureStaticWebApps

| Name | Description | Value |
|-|-|-|
| enabled | falseif the Azure Static Web Apps provider should not be enabled despite the set registration; otherwise,true. | bool |
| registration | The configuration settings of the Azure Static Web Apps registration. | AzureStaticWebAppsRegistration |


### AzureStaticWebAppsRegistration

| Name | Description | Value |
|-|-|-|
| clientId | The Client ID of the app used for login. | string |


### Facebook

| Name | Description | Value |
|-|-|-|
| enabled | falseif the Facebook provider should not be enabled despite the set registration; otherwise,true. | bool |
| graphApiVersion | The version of the Facebook api to be used while logging in. | string |
| login | The configuration settings of the login flow. | LoginScopes |
| registration | The configuration settings of the app registration for the Facebook provider. | AppRegistration |


### AppRegistration

| Name | Description | Value |
|-|-|-|
| appId | The App ID of the app used for login. | string |
| appSecretSettingName | The app setting name that contains the app secret. | string |


### GitHub

| Name | Description | Value |
|-|-|-|
| enabled | falseif the GitHub provider should not be enabled despite the set registration; otherwise,true. | bool |
| login | The configuration settings of the login flow. | LoginScopes |
| registration | The configuration settings of the app registration for the GitHub provider. | ClientRegistration |


### ClientRegistration

| Name | Description | Value |
|-|-|-|
| clientId | The Client ID of the app used for login. | string |
| clientSecretSettingName | The app setting name that contains the client secret. | string |


### Google

| Name | Description | Value |
|-|-|-|
| enabled | falseif the Google provider should not be enabled despite the set registration; otherwise,true. | bool |
| login | The configuration settings of the login flow. | LoginScopes |
| registration | The configuration settings of the app registration for the Google provider. | ClientRegistration |
| validation | The configuration settings of the Azure Active Directory token validation flow. | AllowedAudiencesValidation |


### AllowedAudiencesValidation

| Name | Description | Value |
|-|-|-|
| allowedAudiences | The configuration settings of the allowed list of audiences from which to validate the JWT token. | string[] |


### Twitter

| Name | Description | Value |
|-|-|-|
| enabled | falseif the Twitter provider should not be enabled despite the set registration; otherwise,true. | bool |
| registration | The configuration settings of the app registration for the Twitter provider. | TwitterRegistration |


### TwitterRegistration

| Name | Description | Value |
|-|-|-|
| consumerKey | The OAuth 1.0a consumer key of the Twitter application used for sign-in.This setting is required for enabling Twitter Sign-In.Twitter Sign-In documentation:https://dev.twitter.com/web/sign-in | string |
| consumerSecretSettingName | The app setting name that contains the OAuth 1.0a consumer secret of the Twitterapplication used for sign-in. | string |


### Login

| Name | Description | Value |
|-|-|-|
| allowedExternalRedirectUrls | External URLs that can be redirected to as part of logging in or logging out of the app. Note that the query string part of the URL is ignored.This is an advanced setting typically only needed by Windows Store application backends.Note that URLs within the current domain are always implicitly allowed. | string[] |
| cookieExpiration | The configuration settings of the session cookie's expiration. | CookieExpiration |
| nonce | The configuration settings of the nonce used in the login flow. | Nonce |
| preserveUrlFragmentsForLogins | trueif the fragments from the request are preserved after the login request is made; otherwise,false. | bool |
| routes | The routes that specify the endpoints used for login and logout requests. | LoginRoutes |


### CookieExpiration

| Name | Description | Value |
|-|-|-|
| convention | The convention used when determining the session cookie's expiration. | 'FixedTime''IdentityProviderDerived' |
| timeToExpiration | The time after the request is made when the session cookie should expire. | string |


### Nonce

| Name | Description | Value |
|-|-|-|
| nonceExpirationInterval | The time after the request is made when the nonce should expire. | string |
| validateNonce | falseif the nonce should not be validated while completing the login flow; otherwise,true. | bool |


### LoginRoutes

| Name | Description | Value |
|-|-|-|
| logoutEndpoint | The endpoint at which a logout request should be made. | string |


### AuthPlatform

| Name | Description | Value |
|-|-|-|
| enabled | trueif the Authentication / Authorization feature is enabled for the current app; otherwise,false. | bool |
| runtimeVersion | The RuntimeVersion of the Authentication / Authorization feature in use for the current app.The setting in this value can control the behavior of certain features in the Authentication / Authorization module. | string |
## Microsoft.App/containerApps/sourcecontrols@2023-05-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.App/containerApps/sourcecontrols@2023-05-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      branch = "string"
      githubActionConfiguration = {
        azureCredentials = {
          clientId = "string"
          clientSecret = "string"
          kind = "string"
          subscriptionId = "string"
          tenantId = "string"
        }
        contextPath = "string"
        githubPersonalAccessToken = "string"
        image = "string"
        os = "string"
        publishType = "string"
        registryInfo = {
          registryPassword = "string"
          registryUrl = "string"
          registryUserName = "string"
        }
        runtimeStack = "string"
        runtimeVersion = "string"
      }
      repoUrl = "string"
    }
  })
}

```

### containerApps/sourcecontrols

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:containerApps |
| properties | SourceControl resource specific properties | SourceControlProperties |


### SourceControlProperties

| Name | Description | Value |
|-|-|-|
| branch | The branch which will trigger the auto deployment | string |
| githubActionConfiguration | Container App Revision Template with all possible settings and thedefaults if user did not provide them. The defaults are populatedas they were at the creation time | GithubActionConfiguration |
| repoUrl | The repo url which will be integrated to ContainerApp. | string |


### GithubActionConfiguration

| Name | Description | Value |
|-|-|-|
| azureCredentials | AzureCredentials configurations. | AzureCredentials |
| contextPath | Context path | string |
| githubPersonalAccessToken | One time Github PAT to configure github environment | string |
| image | Image name | string |
| os | Operation system | string |
| publishType | Code or Image | string |
| registryInfo | Registry configurations. | RegistryInfo |
| runtimeStack | Runtime stack | string |
| runtimeVersion | Runtime version | string |


### AzureCredentials

| Name | Description | Value |
|-|-|-|
| clientId | Client Id. | string |
| clientSecret | Client Secret. | string |
| kind | Kind of auth github does for deploying the template | string |
| subscriptionId | Subscription Id. | string |
| tenantId | Tenant Id. | string |


### RegistryInfo

| Name | Description | Value |
|-|-|-|
| registryPassword | registry secret. | string |
| registryUrl | registry server Url. | string |
| registryUserName | registry username. | string |
## Microsoft.App/jobs@2023-05-01

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
## Microsoft.App/managedEnvironments@2023-05-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.App/managedEnvironments@2023-05-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      appLogsConfiguration = {
        destination = "string"
        logAnalyticsConfiguration = {
          customerId = "string"
          sharedKey = "string"
        }
      }
      customDomainConfiguration = {
        certificatePassword = "string"
        dnsSuffix = "string"
      }
      daprAIConnectionString = "string"
      daprAIInstrumentationKey = "string"
      daprConfiguration = {}
      infrastructureResourceGroup = "string"
      kedaConfiguration = {}
      peerAuthentication = {
        mtls = {
          enabled = bool
        }
      }
      vnetConfiguration = {
        dockerBridgeCidr = "string"
        infrastructureSubnetId = "string"
        internal = bool
        platformReservedCidr = "string"
        platformReservedDnsIP = "string"
      }
      workloadProfiles = [
        {
          maximumCount = int
          minimumCount = int
          name = "string"
          workloadProfileType = "string"
        }
      ]
      zoneRedundant = bool
    }
    kind = "string"
  })
}

```

### managedEnvironments

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| kind | Kind of the Environment. | string |
| properties | Managed environment resource specific properties | ManagedEnvironmentProperties |


### ManagedEnvironmentProperties

| Name | Description | Value |
|-|-|-|
| appLogsConfiguration | Cluster configuration which enables the log daemon to exportapp logs to a destination. Currently only "log-analytics" issupported | AppLogsConfiguration |
| customDomainConfiguration | Custom domain configuration for the environment | CustomDomainConfiguration |
| daprAIConnectionString | Application Insights connection string used by Dapr to export Service to Service communication telemetry | string |
| daprAIInstrumentationKey | Azure Monitor instrumentation key used by Dapr to export Service to Service communication telemetry | string |
| daprConfiguration | The configuration of Dapr component. | DaprConfiguration |
| infrastructureResourceGroup | Name of the platform-managed resource group created for the Managed Environment to host infrastructure resources. If a subnet ID is provided, this resource group will be created in the same subscription as the subnet. | string |
| kedaConfiguration | The configuration of Keda component. | KedaConfiguration |
| peerAuthentication | Peer authentication settings for the Managed Environment | ManagedEnvironmentPropertiesPeerAuthentication |
| vnetConfiguration | Vnet configuration for the environment | VnetConfiguration |
| workloadProfiles | Workload profiles configured for the Managed Environment. | WorkloadProfile[] |
| zoneRedundant | Whether or not this Managed Environment is zone-redundant. | bool |


### AppLogsConfiguration

| Name | Description | Value |
|-|-|-|
| destination | Logs destination, can be 'log-analytics', 'azure-monitor' or 'none' | string |
| logAnalyticsConfiguration | Log Analytics configuration, must only be provided when destination is configured as 'log-analytics' | LogAnalyticsConfiguration |


### LogAnalyticsConfiguration

| Name | Description | Value |
|-|-|-|
| customerId | Log analytics customer id | string |
| sharedKey | Log analytics customer key | string |


### CustomDomainConfiguration

| Name | Description | Value |
|-|-|-|
| certificatePassword | Certificate password | string |
| certificateValue | PFX or PEM blob | For Bicep, you can use theany()function. |
| dnsSuffix | Dns suffix for the environment domain | string |


### ManagedEnvironmentPropertiesPeerAuthentication

| Name | Description | Value |
|-|-|-|
| mtls | Mutual TLS authentication settings for the Managed Environment | Mtls |


### Mtls

| Name | Description | Value |
|-|-|-|
| enabled | Boolean indicating whether the mutual TLS authentication is enabled | bool |


### VnetConfiguration

| Name | Description | Value |
|-|-|-|
| dockerBridgeCidr | CIDR notation IP range assigned to the Docker bridge, network. Must not overlap with any other provided IP ranges. | string |
| infrastructureSubnetId | Resource ID of a subnet for infrastructure components. Must not overlap with any other provided IP ranges. | string |
| internal | Boolean indicating the environment only has an internal load balancer. These environments do not have a public static IP resource. They must provide infrastructureSubnetId if enabling this property | bool |
| platformReservedCidr | IP range in CIDR notation that can be reserved for environment infrastructure IP addresses. Must not overlap with any other provided IP ranges. | string |
| platformReservedDnsIP | An IP address from the IP range defined by platformReservedCidr that will be reserved for the internal DNS server. | string |


### WorkloadProfile

| Name | Description | Value |
|-|-|-|
| maximumCount | The maximum capacity. | int |
| minimumCount | The minimum capacity. | int |
| name | Workload profile type for the workloads to run on. | string (required) |
| workloadProfileType | Workload profile type for the workloads to run on. | string (required) |
## Microsoft.App/managedEnvironments/certificates@2023-05-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.App/managedEnvironments/certificates@2023-05-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      password = "string"
    }
  })
}

```

### managedEnvironments/certificates

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:managedEnvironments |
| properties | Certificate resource specific properties | CertificateProperties |


### CertificateProperties

| Name | Description | Value |
|-|-|-|
| password | Certificate password. | string |
| value | PFX or PEM blob | For Bicep, you can use theany()function. |
## Microsoft.App/managedEnvironments/daprComponents@2023-05-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.App/managedEnvironments/daprComponents@2023-05-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      componentType = "string"
      ignoreErrors = bool
      initTimeout = "string"
      metadata = [
        {
          name = "string"
          secretRef = "string"
          value = "string"
        }
      ]
      scopes = [
        "string"
      ]
      secrets = [
        {
          identity = "string"
          keyVaultUrl = "string"
          name = "string"
          value = "string"
        }
      ]
      secretStoreComponent = "string"
      version = "string"
    }
  })
}

```

### managedEnvironments/daprComponents

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:managedEnvironments |
| properties | Dapr Component resource specific properties | DaprComponentProperties |


### DaprComponentProperties

| Name | Description | Value |
|-|-|-|
| componentType | Component type | string |
| ignoreErrors | Boolean describing if the component errors are ignores | bool |
| initTimeout | Initialization timeout | string |
| metadata | Component metadata | DaprMetadata[] |
| scopes | Names of container apps that can use this Dapr component | string[] |
| secrets | Collection of secrets used by a Dapr component | Secret[] |
| secretStoreComponent | Name of a Dapr component to retrieve component secrets from | string |
| version | Component version | string |


### DaprMetadata

| Name | Description | Value |
|-|-|-|
| name | Metadata property name. | string |
| secretRef | Name of the Dapr Component secret from which to pull the metadata property value. | string |
| value | Metadata property value. | string |


### Secret

| Name | Description | Value |
|-|-|-|
| identity | Resource ID of a managed identity to authenticate with Azure Key Vault, or System to use a system-assigned identity. | string |
| keyVaultUrl | Azure Key Vault URL pointing to the secret referenced by the container app. | string |
| name | Secret Name. | string |
| value | Secret Value. | string |
## Microsoft.App/managedEnvironments/managedCertificates@2023-05-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.App/managedEnvironments/managedCertificates@2023-05-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      domainControlValidation = "string"
      subjectName = "string"
    }
  })
}

```

### managedEnvironments/managedCertificates

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:managedEnvironments |
| properties | Certificate resource specific properties | ManagedCertificateProperties |


### ManagedCertificateProperties

| Name | Description | Value |
|-|-|-|
| domainControlValidation | Selected type of domain control validation for managed certificates. | 'CNAME''HTTP''TXT' |
| subjectName | Subject name of the certificate. | string |
## Microsoft.App/managedEnvironments/storages@2023-05-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.App/managedEnvironments/storages@2023-05-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      azureFile = {
        accessMode = "string"
        accountKey = "string"
        accountName = "string"
        shareName = "string"
      }
    }
  })
}

```

### managedEnvironments/storages

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:managedEnvironments |
| properties | Storage properties | ManagedEnvironmentStorageProperties |


### ManagedEnvironmentStorageProperties

| Name | Description | Value |
|-|-|-|
| azureFile | Azure file properties | AzureFileProperties |


### AzureFileProperties

| Name | Description | Value |
|-|-|-|
| accessMode | Access mode for storage | 'ReadOnly''ReadWrite' |
| accountKey | Storage account key for azure file. | string |
| accountName | Storage account name for azure file. | string |
| shareName | Azure file share name. | string |
