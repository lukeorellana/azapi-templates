## Microsoft.AppPlatform/Spring@2023-03-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AppPlatform/Spring@2023-03-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      infraResourceGroup = "string"
      managedEnvironmentId = "string"
      marketplaceResource = {
        plan = "string"
        product = "string"
        publisher = "string"
      }
      networkProfile = {
        appNetworkResourceGroup = "string"
        appSubnetId = "string"
        ingressConfig = {
          readTimeoutInSeconds = int
        }
        outboundType = "string"
        serviceCidr = "string"
        serviceRuntimeNetworkResourceGroup = "string"
        serviceRuntimeSubnetId = "string"
      }
      vnetAddons = {
        dataPlanePublicEndpoint = bool
        logStreamPublicEndpoint = bool
      }
      zoneRedundant = bool
    }
    sku = {
      capacity = int
      name = "string"
      tier = "string"
    }
  })
}

```

### Spring

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 4-32Valid characters:Lowercase letters, numbers, and hyphens.Resource name must be unique across Azure. |
| location | The GEO location of the resource. | string |
| tags | Tags of the service which is a list of key value pairs that describe the resource. | Dictionary of tag names and values. SeeTags in templates |
| sku | Sku of the Service resource | Sku |
| properties | Properties of the Service resource | ClusterResourceProperties |


### ClusterResourceProperties

| Name | Description | Value |
|-|-|-|
| infraResourceGroup | The name of the resource group that contains the infrastructure resources | string |
| managedEnvironmentId | The resource Id of the Managed Environment that the Spring Apps instance builds on | string |
| marketplaceResource | Purchasing 3rd party product of the Service resource. | MarketplaceResource |
| networkProfile | Network profile of the Service | NetworkProfile |
| vnetAddons | Additional Service settings in vnet injection instance | ServiceVNetAddons |
| zoneRedundant |  | bool |


### MarketplaceResource

| Name | Description | Value |
|-|-|-|
| plan | The plan id of the 3rd Party Artifact that is being procured. | string |
| product | The 3rd Party artifact that is being procured. | string |
| publisher | The publisher id of the 3rd Party Artifact that is being bought. | string |


### NetworkProfile

| Name | Description | Value |
|-|-|-|
| appNetworkResourceGroup | Name of the resource group containing network resources for customer apps in Azure Spring Apps | string |
| appSubnetId | Fully qualified resource Id of the subnet to host customer apps in Azure Spring Apps | string |
| ingressConfig | Ingress configuration payload for Azure Spring Apps resource. | IngressConfig |
| outboundType | The egress traffic type of Azure Spring Apps VNet instances. | string |
| serviceCidr | Azure Spring Apps service reserved CIDR | string |
| serviceRuntimeNetworkResourceGroup | Name of the resource group containing network resources of Azure Spring Apps Service Runtime | string |
| serviceRuntimeSubnetId | Fully qualified resource Id of the subnet to host Azure Spring Apps Service Runtime | string |


### IngressConfig

| Name | Description | Value |
|-|-|-|
| readTimeoutInSeconds | Ingress read time out in seconds. | int |


### ServiceVNetAddons

| Name | Description | Value |
|-|-|-|
| dataPlanePublicEndpoint | Indicates whether the data plane components(log stream, app connect, remote debugging) in vnet injection instance could be accessed from internet. | bool |
| logStreamPublicEndpoint | Indicates whether the log stream in vnet injection instance could be accessed from internet. | bool |


### Sku

| Name | Description | Value |
|-|-|-|
| capacity | Current capacity of the target resource | int |
| name | Name of the Sku | string |
| tier | Tier of the Sku | string |
## Microsoft.AppPlatform/Spring/apiPortals@2023-03-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AppPlatform/Spring/apiPortals@2023-03-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      gatewayIds = [
        "string"
      ]
      httpsOnly = bool
      public = bool
      sourceUrls = [
        "string"
      ]
      ssoProperties = {
        clientId = "string"
        clientSecret = "string"
        issuerUri = "string"
        scope = [
          "string"
        ]
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

### Spring/apiPortals

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| sku | Sku of the API portal resource | Sku |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:Spring |
| properties | API portal properties payload | ApiPortalProperties |


### ApiPortalProperties

| Name | Description | Value |
|-|-|-|
| gatewayIds | The array of resource Ids of gateway to integrate with API portal. | string[] |
| httpsOnly | Indicate if only https is allowed. | bool |
| public | Indicates whether the API portal exposes endpoint. | bool |
| sourceUrls | Collection of OpenAPI source URL locations. | string[] |
| ssoProperties | Single sign-on related configuration | SsoProperties |


### SsoProperties

| Name | Description | Value |
|-|-|-|
| clientId | The public identifier for the application | string |
| clientSecret | The secret known only to the application and the authorization server | string |
| issuerUri | The URI of Issuer Identifier | string |
| scope | It defines the specific actions applications can be allowed to do on a user's behalf | string[] |


### Sku

| Name | Description | Value |
|-|-|-|
| capacity | Current capacity of the target resource | int |
| name | Name of the Sku | string |
| tier | Tier of the Sku | string |
## Microsoft.AppPlatform/Spring/apiPortals/domains@2023-03-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AppPlatform/Spring/apiPortals/domains@2023-03-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      thumbprint = "string"
    }
  })
}

```

### Spring/apiPortals/domains

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:apiPortals |
| properties | The properties of custom domain for API portal | ApiPortalCustomDomainProperties |


### ApiPortalCustomDomainProperties

| Name | Description | Value |
|-|-|-|
| thumbprint | The thumbprint of bound certificate. | string |
## Microsoft.AppPlatform/Spring/applicationAccelerators@2023-03-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AppPlatform/Spring/applicationAccelerators@2023-03-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {}
    sku = {
      capacity = int
      name = "string"
      tier = "string"
    }
  })
}

```

### Spring/applicationAccelerators

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| sku | Sku of the application accelerator resource | Sku |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:Spring |
| properties | Application accelerator properties payload | ApplicationAcceleratorProperties |


### Sku

| Name | Description | Value |
|-|-|-|
| capacity | Current capacity of the target resource | int |
| name | Name of the Sku | string |
| tier | Tier of the Sku | string |
## Microsoft.AppPlatform/Spring/applicationAccelerators/customizedAccelerators@2023-03-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AppPlatform/Spring/applicationAccelerators/customizedAccelerators@2023-03-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      acceleratorTags = [
        "string"
      ]
      description = "string"
      displayName = "string"
      gitRepository = {
        authSetting = {
          authType = "string"
          // For remaining properties, see AcceleratorAuthSetting objects
        }
        branch = "string"
        commit = "string"
        gitTag = "string"
        intervalInSeconds = int
        url = "string"
      }
      iconUrl = "string"
    }
    sku = {
      capacity = int
      name = "string"
      tier = "string"
    }
  })
}

```

### Spring/applicationAccelerators/customizedAccelerator...

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| sku | Sku of the customized accelerator resource | Sku |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:applicationAccelerators |
| properties | Customized accelerator properties payload | CustomizedAcceleratorProperties |


### CustomizedAcceleratorProperties

| Name | Description | Value |
|-|-|-|
| acceleratorTags |  | string[] |
| description |  | string |
| displayName |  | string |
| gitRepository |  | AcceleratorGitRepository(required) |
| iconUrl |  | string |


### AcceleratorGitRepository

| Name | Description | Value |
|-|-|-|
| authSetting | Properties of the auth setting payload. | AcceleratorAuthSetting(required) |
| branch | Git repository branch to be used. | string |
| commit | Git repository commit to be used. | string |
| gitTag | Git repository tag to be used. | string |
| intervalInSeconds | Interval for checking for updates to Git or image repository. | int |
| url | Git repository URL for the accelerator. | string (required) |


### AcceleratorAuthSetting

| Name | Description | Value |
|-|-|-|
| authType | Set the object type | BasicAuthPublicSSH(required) |


### AcceleratorBasicAuthSetting

| Name | Description | Value |
|-|-|-|
| authType | The type of the auth setting. | 'BasicAuth' (required) |
| caCertResourceId | Resource Id of CA certificate for https URL of Git repository. | string |
| password | Password of git repository basic auth. | string |
| username | Username of git repository basic auth. | string (required) |


### AcceleratorPublicSetting

| Name | Description | Value |
|-|-|-|
| authType | The type of the auth setting. | 'Public' (required) |
| caCertResourceId | Resource Id of CA certificate for https URL of Git repository. | string |


### AcceleratorSshSetting

| Name | Description | Value |
|-|-|-|
| authType | The type of the auth setting. | 'SSH' (required) |
| hostKey | Public SSH Key of git repository. | string |
| hostKeyAlgorithm | SSH Key algorithm of git repository. | string |
| privateKey | Private SSH Key algorithm of git repository. | string |


### Sku

| Name | Description | Value |
|-|-|-|
| capacity | Current capacity of the target resource | int |
| name | Name of the Sku | string |
| tier | Tier of the Sku | string |
## Microsoft.AppPlatform/Spring/applicationLiveViews@2023-03-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AppPlatform/Spring/applicationLiveViews@2023-03-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {}
  })
}

```

### Spring/applicationLiveViews

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:Spring |
| properties | Application Live View properties payload | ApplicationLiveViewProperties |
## Microsoft.AppPlatform/Spring/apps@2023-03-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AppPlatform/Spring/apps@2023-03-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  identity {
    type = "string"
    identity_ids = []
  }
  body = jsonencode({
    properties = {
      addonConfigs = {}
      customPersistentDisks = [
        {
          customPersistentDiskProperties = {
            enableSubPath = bool
            mountOptions = [
              "string"
            ]
            mountPath = "string"
            readOnly = bool
            type = "string"
            // For remaining properties, see CustomPersistentDiskProperties objects
          }
          storageId = "string"
        }
      ]
      enableEndToEndTLS = bool
      httpsOnly = bool
      ingressSettings = {
        backendProtocol = "string"
        clientAuth = {
          certificates = [
            "string"
          ]
        }
        readTimeoutInSeconds = int
        sendTimeoutInSeconds = int
        sessionAffinity = "string"
        sessionCookieMaxAge = int
      }
      loadedCertificates = [
        {
          loadTrustStore = bool
          resourceId = "string"
        }
      ]
      persistentDisk = {
        mountPath = "string"
        sizeInGB = int
      }
      public = bool
      secrets = [
        {
          name = "string"
          value = "string"
        }
      ]
      temporaryDisk = {
        mountPath = "string"
        sizeInGB = int
      }
      vnetAddons = {
        publicEndpoint = bool
      }
    }
  })
}

```

### Spring/apps

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | The GEO location of the application, always the same with its parent resource | string |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:Spring |
| identity | The Managed Identity type of the app resource | ManagedIdentityProperties |
| properties | Properties of the App resource | AppResourceProperties |


### ManagedIdentityProperties

| Name | Description | Value |
|-|-|-|
| principalId | Principal Id of system-assigned managed identity. | string |
| tenantId | Tenant Id of system-assigned managed identity. | string |
| type | Type of the managed identity | 'None''SystemAssigned''SystemAssigned,UserAssigned''UserAssigned' |
| userAssignedIdentities | Properties of user-assigned managed identities | object |


### AppResourceProperties

| Name | Description | Value |
|-|-|-|
| addonConfigs | Collection of addons | object |
| customPersistentDisks | List of custom persistent disks | CustomPersistentDiskResource[] |
| enableEndToEndTLS | Indicate if end to end TLS is enabled. | bool |
| httpsOnly | Indicate if only https is allowed. | bool |
| ingressSettings | App ingress settings payload. | IngressSettings |
| loadedCertificates | Collection of loaded certificates | LoadedCertificate[] |
| persistentDisk | Persistent disk settings | PersistentDisk |
| public | Indicates whether the App exposes public endpoint | bool |
| secrets | Collection of auth secrets | Secret[] |
| temporaryDisk | Temporary disk settings | TemporaryDisk |
| vnetAddons | Additional App settings in vnet injection instance | AppVNetAddons |


### CustomPersistentDiskResource

| Name | Description | Value |
|-|-|-|
| customPersistentDiskProperties | Properties of the custom persistent disk resource payload. | CustomPersistentDiskProperties |
| storageId | The resource id of Azure Spring Apps Storage resource. | string (required) |


### CustomPersistentDiskProperties

| Name | Description | Value |
|-|-|-|
| enableSubPath | If set to true, it will create and mount a dedicated directory for every individual app instance. | bool |
| mountOptions | These are the mount options for a persistent disk. | string[] |
| mountPath | The mount path of the persistent disk. | string (required) |
| readOnly | Indicates whether the persistent disk is a readOnly one. | bool |
| type | Set the object type | AzureFileVolume(required) |


### AzureFileVolume

| Name | Description | Value |
|-|-|-|
| type | The type of the underlying resource to mount as a persistent disk. | 'AzureFileVolume' (required) |
| shareName | The share name of the Azure File share. | string |


### IngressSettings

| Name | Description | Value |
|-|-|-|
| backendProtocol | How ingress should communicate with this app backend service. | 'Default''GRPC' |
| clientAuth | Client-Certification Authentication. | IngressSettingsClientAuth |
| readTimeoutInSeconds | Ingress read time out in seconds. | int |
| sendTimeoutInSeconds | Ingress send time out in seconds. | int |
| sessionAffinity | Type of the affinity, set this to Cookie to enable session affinity. | 'Cookie''None' |
| sessionCookieMaxAge | Time in seconds until the cookie expires. | int |


### IngressSettingsClientAuth

| Name | Description | Value |
|-|-|-|
| certificates | Collection of certificate resource id. | string[] |


### LoadedCertificate

| Name | Description | Value |
|-|-|-|
| loadTrustStore | Indicate whether the certificate will be loaded into default trust store, only work for Java runtime. | bool |
| resourceId | Resource Id of loaded certificate | string (required) |


### PersistentDisk

| Name | Description | Value |
|-|-|-|
| mountPath | Mount path of the persistent disk | string |
| sizeInGB | Size of the persistent disk in GB | int |


### Secret

| Name | Description | Value |
|-|-|-|
| name | Secret Name. | string |
| value | Secret Value. | string |


### TemporaryDisk

| Name | Description | Value |
|-|-|-|
| mountPath | Mount path of the temporary disk | string |
| sizeInGB | Size of the temporary disk in GB | int |


### AppVNetAddons

| Name | Description | Value |
|-|-|-|
| publicEndpoint | Indicates whether the App in vnet injection instance exposes endpoint which could be accessed from internet. | bool |
## Microsoft.AppPlatform/Spring/apps/bindings@2023-03-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AppPlatform/Spring/apps/bindings@2023-03-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      bindingParameters = {}
      key = "string"
      resourceId = "string"
    }
  })
}

```

### Spring/apps/bindings

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:apps |
| properties | Properties of the Binding resource | BindingResourceProperties |


### BindingResourceProperties

| Name | Description | Value |
|-|-|-|
| bindingParameters | Binding parameters of the Binding resource | object |
| key | The key of the bound resource | string |
| resourceId | The Azure resource id of the bound resource | string |
## Microsoft.AppPlatform/Spring/apps/deployments@2023-03-01-preview

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
## Microsoft.AppPlatform/Spring/apps/domains@2023-03-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AppPlatform/Spring/apps/domains@2023-03-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      certName = "string"
      thumbprint = "string"
    }
  })
}

```

### Spring/apps/domains

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:apps |
| properties | Properties of the custom domain resource. | CustomDomainProperties |


### CustomDomainProperties

| Name | Description | Value |
|-|-|-|
| certName | The bound certificate name of domain. | string |
| thumbprint | The thumbprint of bound certificate. | string |
## Microsoft.AppPlatform/Spring/buildServices@2023-03-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AppPlatform/Spring/buildServices@2023-03-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      containerRegistry = "string"
      resourceRequests = {}
    }
  })
}

```

### Spring/buildServices

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:Spring |
| properties | Properties of the build resource | BuildServiceProperties |


### BuildServiceProperties

| Name | Description | Value |
|-|-|-|
| containerRegistry | The resource id of the container registry used in this build service. | string |
| resourceRequests | The runtime resource configuration of this build service. | BuildServicePropertiesResourceRequests |
## Microsoft.AppPlatform/Spring/buildServices/agentPools@2023-03-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AppPlatform/Spring/buildServices/agentPools@2023-03-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      poolSize = {
        name = "string"
      }
    }
  })
}

```

### Spring/buildServices/agentPools

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type: buildServices |
| properties | build service agent pool properties | BuildServiceAgentPoolProperties |


### BuildServiceAgentPoolProperties

| Name | Description | Value |
|-|-|-|
| poolSize | build service agent pool size properties | BuildServiceAgentPoolSizeProperties |


### BuildServiceAgentPoolSizeProperties

| Name | Description | Value |
|-|-|-|
| name | The name of build service agent pool size | string |
## Microsoft.AppPlatform/Spring/buildServices/builders@2023-03-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AppPlatform/Spring/buildServices/builders@2023-03-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      buildpackGroups = [
        {
          buildpacks = [
            {
              id = "string"
            }
          ]
          name = "string"
        }
      ]
      stack = {
        id = "string"
        version = "string"
      }
    }
  })
}

```

### Spring/buildServices/builders

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type: buildServices |
| properties | Property of the Builder resource. | BuilderProperties |


### BuilderProperties

| Name | Description | Value |
|-|-|-|
| buildpackGroups | Builder buildpack groups. | BuildpacksGroupProperties[] |
| stack | Builder cluster stack property. | StackProperties |


### BuildpacksGroupProperties

| Name | Description | Value |
|-|-|-|
| buildpacks | Buildpacks in the buildpack group | BuildpackProperties[] |
| name | Buildpack group name | string |


### BuildpackProperties

| Name | Description | Value |
|-|-|-|
| id | Id of the buildpack | string |


### StackProperties

| Name | Description | Value |
|-|-|-|
| id | Id of the ClusterStack. | string |
| version | Version of the ClusterStack | string |
## Microsoft.AppPlatform/Spring/buildServices/builders/buildpackBindings@2023-03-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AppPlatform/Spring/buildServices/builders/buildpackBindings@2023-03-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      bindingType = "string"
      launchProperties = {
        properties = {
        secrets = {}
      }
    }
  })
}

```

### Spring/buildServices/builders/buildpackBindings

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:builders |
| properties | Properties of a buildpack binding | BuildpackBindingProperties |


### BuildpackBindingProperties

| Name | Description | Value |
|-|-|-|
| bindingType | Buildpack Binding Type | 'ApacheSkyWalking''AppDynamics''ApplicationInsights''CACertificates''Dynatrace''ElasticAPM''NewRelic' |
| launchProperties | The object describes the buildpack binding launch properties | BuildpackBindingLaunchProperties |


### BuildpackBindingLaunchProperties

| Name | Description | Value |
|-|-|-|
| properties | Non-sensitive properties for launchProperties | BuildpackBindingLaunchProperties |
| secrets | Sensitive properties for launchProperties | object |
## Microsoft.AppPlatform/Spring/buildServices/builds@2023-03-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AppPlatform/Spring/buildServices/builds@2023-03-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      agentPool = "string"
      builder = "string"
      env = {}
      relativePath = "string"
      resourceRequests = {
        cpu = "string"
        memory = "string"
      }
    }
  })
}

```

### Spring/buildServices/builds

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type: buildServices |
| properties | Properties of the build resource | BuildProperties |


### BuildProperties

| Name | Description | Value |
|-|-|-|
| agentPool | The resource id of agent pool | string |
| builder | The resource id of builder to build the source code | string |
| env | The environment variables for this build | object |
| relativePath | The relative path of source code | string |
| resourceRequests | The customized build resource for this build | BuildResourceRequests |


### BuildResourceRequests

| Name | Description | Value |
|-|-|-|
| cpu | Optional Cpu allocated to the build resource. 1 core can be represented by 1 or 1000m.The default value is 1, this should not exceed build service agent pool cpu size. | string |
| memory | Optional Memory allocated to the build resource. 1 GB can be represented by 1Gi or 1024Mi.The default value is 2Gi, this should not exceed build service agent pool memory size. | string |
## Microsoft.AppPlatform/Spring/certificates@2023-03-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AppPlatform/Spring/certificates@2023-03-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      type = "string"
      // For remaining properties, see CertificateProperties objects
    }
  })
}

```

### Spring/certificates

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:Spring |
| properties | Properties of the certificate resource payload. | CertificateProperties |


### CertificateProperties

| Name | Description | Value |
|-|-|-|
| type | Set the object type | ContentCertificateKeyVaultCertificate(required) |


### ContentCertificateProperties

| Name | Description | Value |
|-|-|-|
| type | The type of the certificate source. | 'ContentCertificate' (required) |
| content | The content of uploaded certificate. | string |


### KeyVaultCertificateProperties

| Name | Description | Value |
|-|-|-|
| type | The type of the certificate source. | 'KeyVaultCertificate' (required) |
| certVersion | The certificate version of key vault. | string |
| excludePrivateKey | Optional. If set to true, it will not import private key from key vault. | bool |
| keyVaultCertName | The certificate name of key vault. | string (required) |
| vaultUri | The vault uri of user key vault. | string (required) |
## Microsoft.AppPlatform/Spring/configServers@2023-03-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AppPlatform/Spring/configServers@2023-03-01-preview"
  name = "default"
  parent_id = "string"
  body = jsonencode({
    properties = {
      configServer = {
        gitProperty = {
          hostKey = "string"
          hostKeyAlgorithm = "string"
          label = "string"
          password = "string"
          privateKey = "string"
          repositories = [
            {
              hostKey = "string"
              hostKeyAlgorithm = "string"
              label = "string"
              name = "string"
              password = "string"
              pattern = [
                "string"
              ]
              privateKey = "string"
              searchPaths = [
                "string"
              ]
              strictHostKeyChecking = bool
              uri = "string"
              username = "string"
            }
          ]
          searchPaths = [
            "string"
          ]
          strictHostKeyChecking = bool
          uri = "string"
          username = "string"
        }
      }
      error = {
        code = "string"
        message = "string"
      }
    }
  })
}

```

### Spring/configServers

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'default' |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:Spring |
| properties | Properties of the Config Server resource | ConfigServerProperties |


### ConfigServerProperties

| Name | Description | Value |
|-|-|-|
| configServer | Settings of config server. | ConfigServerSettings |
| error | Error when apply config server settings. | Error |


### ConfigServerSettings

| Name | Description | Value |
|-|-|-|
| gitProperty | Property of git environment. | ConfigServerGitProperty |


### ConfigServerGitProperty

| Name | Description | Value |
|-|-|-|
| hostKey | Public sshKey of git repository. | string |
| hostKeyAlgorithm | SshKey algorithm of git repository. | string |
| label | Label of the repository | string |
| password | Password of git repository basic auth. | string |
| privateKey | Private sshKey algorithm of git repository. | string |
| repositories | Repositories of git. | GitPatternRepository[] |
| searchPaths | Searching path of the repository | string[] |
| strictHostKeyChecking | Strict host key checking or not. | bool |
| uri | URI of the repository | string (required) |
| username | Username of git repository basic auth. | string |


### GitPatternRepository

| Name | Description | Value |
|-|-|-|
| hostKey | Public sshKey of git repository. | string |
| hostKeyAlgorithm | SshKey algorithm of git repository. | string |
| label | Label of the repository | string |
| name | Name of the repository | string (required) |
| password | Password of git repository basic auth. | string |
| pattern | Collection of pattern of the repository | string[] |
| privateKey | Private sshKey algorithm of git repository. | string |
| searchPaths | Searching path of the repository | string[] |
| strictHostKeyChecking | Strict host key checking or not. | bool |
| uri | URI of the repository | string (required) |
| username | Username of git repository basic auth. | string |


### Error

| Name | Description | Value |
|-|-|-|
| code | The code of error. | string |
| message | The message of error. | string |
## Microsoft.AppPlatform/Spring/configurationServices@2023-03-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AppPlatform/Spring/configurationServices@2023-03-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      settings = {
        gitProperty = {
          repositories = [
            {
              hostKey = "string"
              hostKeyAlgorithm = "string"
              label = "string"
              name = "string"
              password = "string"
              patterns = [
                "string"
              ]
              privateKey = "string"
              searchPaths = [
                "string"
              ]
              strictHostKeyChecking = bool
              uri = "string"
              username = "string"
            }
          ]
        }
      }
    }
  })
}

```

### Spring/configurationServices

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:Spring |
| properties | Application Configuration Service properties payload | ConfigurationServiceProperties |


### ConfigurationServiceProperties

| Name | Description | Value |
|-|-|-|
| settings | The settings of Application Configuration Service. | ConfigurationServiceSettings |


### ConfigurationServiceSettings

| Name | Description | Value |
|-|-|-|
| gitProperty | Property of git environment. | ConfigurationServiceGitProperty |


### ConfigurationServiceGitProperty

| Name | Description | Value |
|-|-|-|
| repositories | Repositories of Application Configuration Service git property. | ConfigurationServiceGitRepository[] |


### ConfigurationServiceGitRepository

| Name | Description | Value |
|-|-|-|
| hostKey | Public sshKey of git repository. | string |
| hostKeyAlgorithm | SshKey algorithm of git repository. | string |
| label | Label of the repository | string (required) |
| name | Name of the repository | string (required) |
| password | Password of git repository basic auth. | string |
| patterns | Collection of patterns of the repository | string[] (required) |
| privateKey | Private sshKey algorithm of git repository. | string |
| searchPaths | Searching path of the repository | string[] |
| strictHostKeyChecking | Strict host key checking or not. | bool |
| uri | URI of the repository | string (required) |
| username | Username of git repository basic auth. | string |
## Microsoft.AppPlatform/Spring/containerRegistries@2023-03-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AppPlatform/Spring/containerRegistries@2023-03-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      credentials = {
        type = "string"
        // For remaining properties, see ContainerRegistryCredentials objects
      }
    }
  })
}

```

### Spring/containerRegistries

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:Spring |
| properties | Properties of the container registry resource payload. | ContainerRegistryProperties |


### ContainerRegistryProperties

| Name | Description | Value |
|-|-|-|
| credentials | The credentials of the container registry resource. | ContainerRegistryCredentials(required) |


### ContainerRegistryCredentials

| Name | Description | Value |
|-|-|-|
| type | Set the object type | BasicAuth(required) |


### ContainerRegistryBasicCredentials

| Name | Description | Value |
|-|-|-|
| type | The credential type of the container registry credentials. | 'BasicAuth' (required) |
| password | The password of the Container Registry. | string (required) |
| server | The login server of the Container Registry. | string (required) |
| username | The username of the Container Registry. | string (required) |
## Microsoft.AppPlatform/Spring/DevToolPortals@2023-03-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AppPlatform/Spring/DevToolPortals@2023-03-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      features = {
        applicationAccelerator = {
          state = "string"
        }
        applicationLiveView = {
          state = "string"
        }
      }
      public = bool
      ssoProperties = {
        clientId = "string"
        clientSecret = "string"
        metadataUrl = "string"
        scopes = [
          "string"
        ]
      }
    }
  })
}

```

### Spring/DevToolPortals

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:Spring |
| properties | Dev Tool Portal properties payload | DevToolPortalProperties |


### DevToolPortalProperties

| Name | Description | Value |
|-|-|-|
| features | Settings for Dev Tool Portal | DevToolPortalFeatureSettings |
| public | Indicates whether the resource exposes public endpoint | bool |
| ssoProperties | Single sign-on related configuration | DevToolPortalSsoProperties |


### DevToolPortalFeatureSettings

| Name | Description | Value |
|-|-|-|
| applicationAccelerator | Detail of Accelerator plugin | DevToolPortalFeatureDetail |
| applicationLiveView | Detail of App Live View plugin | DevToolPortalFeatureDetail |


### DevToolPortalFeatureDetail

| Name | Description | Value |
|-|-|-|
| state | State of the plugin | 'Disabled''Enabled' |


### DevToolPortalSsoProperties

| Name | Description | Value |
|-|-|-|
| clientId | The public identifier for the application | string |
| clientSecret | The secret known only to the application and the authorization server | string |
| metadataUrl | The URI of a JSON file with generic OIDC provider configuration. | string |
| scopes | It defines the specific actions applications can be allowed to do on a user's behalf | string[] |
## Microsoft.AppPlatform/Spring/gateways@2023-03-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AppPlatform/Spring/gateways@2023-03-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      apiMetadataProperties = {
        description = "string"
        documentation = "string"
        serverUrl = "string"
        title = "string"
        version = "string"
      }
      apmTypes = [
        "string"
      ]
      clientAuth = {
        certificates = [
          "string"
        ]
        certificateVerification = "string"
      }
      corsProperties = {
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
        exposedHeaders = [
          "string"
        ]
        maxAge = int
      }
      environmentVariables = {
        properties = {}
        secrets = {}
      }
      httpsOnly = bool
      public = bool
      resourceRequests = {
        cpu = "string"
        memory = "string"
      }
      ssoProperties = {
        clientId = "string"
        clientSecret = "string"
        issuerUri = "string"
        scope = [
          "string"
        ]
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

### Spring/gateways

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| sku | Sku of the Spring Cloud Gateway resource | Sku |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:Spring |
| properties | Spring Cloud Gateway properties payload | GatewayProperties |


### GatewayProperties

| Name | Description | Value |
|-|-|-|
| apiMetadataProperties | API metadata property for Spring Cloud Gateway | GatewayApiMetadataProperties |
| apmTypes | Collection of APM type used in Spring Cloud Gateway | String array containing any of:'AppDynamics''ApplicationInsights''Dynatrace''ElasticAPM''NewRelic' |
| clientAuth | Client-Certification Authentication. | GatewayPropertiesClientAuth |
| corsProperties | Cross-Origin Resource Sharing property | GatewayCorsProperties |
| environmentVariables | Environment variables of Spring Cloud Gateway | GatewayPropertiesEnvironmentVariables |
| httpsOnly | Indicate if only https is allowed. | bool |
| public | Indicates whether the Spring Cloud Gateway exposes endpoint. | bool |
| resourceRequests | The requested resource quantity for required CPU and Memory. | GatewayResourceRequests |
| ssoProperties | Single sign-on related configuration | SsoProperties |


### GatewayApiMetadataProperties

| Name | Description | Value |
|-|-|-|
| description | Detailed description of the APIs available on the Gateway instance (default:Generated OpenAPI 3 document that describes the API routes configured.) | string |
| documentation | Location of additional documentation for the APIs available on the Gateway instance | string |
| serverUrl | Base URL that API consumers will use to access APIs on the Gateway instance. | string |
| title | Title describing the context of the APIs available on the Gateway instance (default:Spring Cloud Gateway for K8S) | string |
| version | Version of APIs available on this Gateway instance (default:unspecified). | string |


### GatewayPropertiesClientAuth

| Name | Description | Value |
|-|-|-|
| certificates | Collection of certificate resource Ids in Azure Spring Apps. | string[] |
| certificateVerification | Whether to enable certificate verification or not | 'Disabled''Enabled' |


### GatewayCorsProperties

| Name | Description | Value |
|-|-|-|
| allowCredentials | Whether user credentials are supported on cross-site requests. Valid values:true,false. | bool |
| allowedHeaders | Allowed headers in cross-site requests. The special value*allows actual requests to send any header. | string[] |
| allowedMethods | Allowed HTTP methods on cross-site requests. The special value*allows all methods. If not set,GETandHEADare allowed by default. | string[] |
| allowedOrigins | Allowed origins to make cross-site requests. The special value*allows all domains. | string[] |
| exposedHeaders | HTTP response headers to expose for cross-site requests. | string[] |
| maxAge | How long, in seconds, the response from a pre-flight request can be cached by clients. | int |


### GatewayPropertiesEnvironmentVariables

| Name | Description | Value |
|-|-|-|
| properties | Non-sensitive properties | object |
| secrets | Sensitive properties | object |


### GatewayResourceRequests

| Name | Description | Value |
|-|-|-|
| cpu | Cpu allocated to each Spring Cloud Gateway instance. | string |
| memory | Memory allocated to each Spring Cloud Gateway instance. | string |


### SsoProperties

| Name | Description | Value |
|-|-|-|
| clientId | The public identifier for the application | string |
| clientSecret | The secret known only to the application and the authorization server | string |
| issuerUri | The URI of Issuer Identifier | string |
| scope | It defines the specific actions applications can be allowed to do on a user's behalf | string[] |


### Sku

| Name | Description | Value |
|-|-|-|
| capacity | Current capacity of the target resource | int |
| name | Name of the Sku | string |
| tier | Tier of the Sku | string |
## Microsoft.AppPlatform/Spring/gateways/domains@2023-03-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AppPlatform/Spring/gateways/domains@2023-03-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      thumbprint = "string"
    }
  })
}

```

### Spring/gateways/domains

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:gateways |
| properties | The properties of custom domain for Spring Cloud Gateway | GatewayCustomDomainProperties |


### GatewayCustomDomainProperties

| Name | Description | Value |
|-|-|-|
| thumbprint | The thumbprint of bound certificate. | string |
## Microsoft.AppPlatform/Spring/gateways/routeConfigs@2023-03-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AppPlatform/Spring/gateways/routeConfigs@2023-03-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      appResourceId = "string"
      filters = [
        "string"
      ]
      openApi = {
        uri = "string"
      }
      predicates = [
        "string"
      ]
      protocol = "string"
      routes = [
        {
          description = "string"
          filters = [
            "string"
          ]
          order = int
          predicates = [
            "string"
          ]
          ssoEnabled = bool
          tags = [
            "string"
          ]
          title = "string"
          tokenRelay = bool
          uri = "string"
        }
      ]
      ssoEnabled = bool
    }
  })
}

```

### Spring/gateways/routeConfigs

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:gateways |
| properties | API route config of the Spring Cloud Gateway | GatewayRouteConfigProperties |


### GatewayRouteConfigProperties

| Name | Description | Value |
|-|-|-|
| appResourceId | The resource Id of the Azure Spring Apps app, required unless route definesuri. | string |
| filters | To modify the request before sending it to the target endpoint, or the received response in app level. | string[] |
| openApi | OpenAPI properties of Spring Cloud Gateway route config. | GatewayRouteConfigOpenApiProperties |
| predicates | A number of conditions to evaluate a route for each request in app level. Each predicate may be evaluated against request headers and parameter values. All of the predicates associated with a route must evaluate to true for the route to be matched to the request. | string[] |
| protocol | Protocol of routed Azure Spring Apps applications. | 'HTTP''HTTPS' |
| routes | Array of API routes, each route contains properties such astitle,uri,ssoEnabled,predicates,filters. | GatewayApiRoute[] |
| ssoEnabled | Enable Single Sign-On in app level. | bool |


### GatewayRouteConfigOpenApiProperties

| Name | Description | Value |
|-|-|-|
| uri | The URI of OpenAPI specification. | string |


### GatewayApiRoute

| Name | Description | Value |
|-|-|-|
| description | A description, will be applied to methods in the generated OpenAPI documentation. | string |
| filters | To modify the request before sending it to the target endpoint, or the received response. | string[] |
| order | Route processing order. | int |
| predicates | A number of conditions to evaluate a route for each request. Each predicate may be evaluated against request headers and parameter values. All of the predicates associated with a route must evaluate to true for the route to be matched to the request. | string[] |
| ssoEnabled | Enable sso validation. | bool |
| tags | Classification tags, will be applied to methods in the generated OpenAPI documentation. | string[] |
| title | A title, will be applied to methods in the generated OpenAPI documentation. | string |
| tokenRelay | Pass currently-authenticated user's identity token to application service, default is 'false' | bool |
| uri | Full uri, will overrideappName. | string |
## Microsoft.AppPlatform/Spring/monitoringSettings@2023-03-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AppPlatform/Spring/monitoringSettings@2023-03-01-preview"
  name = "default"
  parent_id = "string"
  body = jsonencode({
    properties = {
      appInsightsAgentVersions = {}
      appInsightsInstrumentationKey = "string"
      appInsightsSamplingRate = int
      error = {
        code = "string"
        message = "string"
      }
      traceEnabled = bool
    }
  })
}

```

### Spring/monitoringSettings

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'default' |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:Spring |
| properties | Properties of the Monitoring Setting resource | MonitoringSettingProperties |


### MonitoringSettingProperties

| Name | Description | Value |
|-|-|-|
| appInsightsAgentVersions | Indicates the versions of application insight agent | ApplicationInsightsAgentVersions |
| appInsightsInstrumentationKey | Target application insight instrumentation key, null or whitespace include empty will disable monitoringSettings | string |
| appInsightsSamplingRate | Indicates the sampling rate of application insight agent, should be in range [0.0, 100.0] | int |
| error | Error when apply Monitoring Setting changes. | Error |
| traceEnabled | Indicates whether enable the trace functionality, which will be deprecated since api version 2020-11-01-preview. Please leverage appInsightsInstrumentationKey to indicate if monitoringSettings enabled or not | bool |


### Error

| Name | Description | Value |
|-|-|-|
| code | The code of error. | string |
| message | The message of error. | string |
## Microsoft.AppPlatform/Spring/serviceRegistries@2023-03-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AppPlatform/Spring/serviceRegistries@2023-03-01-preview"
  name = "string"
  parent_id = "string"
}

```

### Spring/serviceRegistries

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:Spring |
## Microsoft.AppPlatform/Spring/storages@2023-03-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AppPlatform/Spring/storages@2023-03-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      storageType = "string"
      // For remaining properties, see StorageProperties objects
    }
  })
}

```

### Spring/storages

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:Spring |
| properties | Properties of the storage resource payload. | StorageProperties |


### StorageProperties

| Name | Description | Value |
|-|-|-|
| storageType | Set the object type | StorageAccount(required) |


### StorageAccount

| Name | Description | Value |
|-|-|-|
| storageType | The type of the storage. | 'StorageAccount' (required) |
| accountKey | The account key of the Azure Storage Account. | string (required) |
| accountName | The account name of the Azure Storage Account. | string (required) |
