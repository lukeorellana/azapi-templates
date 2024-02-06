## Microsoft.ContainerInstance/containerGroups@2023-05-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ContainerInstance/containerGroups@2023-05-01"
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
      confidentialComputeProperties = {
        ccePolicy = "string"
      }
      containers = [
        {
          name = "string"
          properties = {
            command = [
              "string"
            ]
            environmentVariables = [
              {
                name = "string"
                secureValue = "string"
                value = "string"
              }
            ]
            image = "string"
            livenessProbe = {
              exec = {
                command = [
                  "string"
                ]
              }
              failureThreshold = int
              httpGet = {
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
              timeoutSeconds = int
            }
            ports = [
              {
                port = int
                protocol = "string"
              }
            ]
            readinessProbe = {
              exec = {
                command = [
                  "string"
                ]
              }
              failureThreshold = int
              httpGet = {
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
              timeoutSeconds = int
            }
            resources = {
              limits = {
                cpu = int
                gpu = {
                  count = int
                  sku = "string"
                }
                memoryInGB = "decimal-as-string"
              }
              requests = {
                cpu = int
                gpu = {
                  count = int
                  sku = "string"
                }
                memoryInGB = "decimal-as-string"
              }
            }
            securityContext = {
              allowPrivilegeEscalation = bool
              capabilities = {
                add = [
                  "string"
                ]
                drop = [
                  "string"
                ]
              }
              privileged = bool
              runAsGroup = int
              runAsUser = int
              seccompProfile = "string"
            }
            volumeMounts = [
              {
                mountPath = "string"
                name = "string"
                readOnly = bool
              }
            ]
          }
        }
      ]
      diagnostics = {
        logAnalytics = {
          logType = "string"
          metadata = {}
          workspaceId = "string"
          workspaceKey = "string"
          workspaceResourceId = "string"
        }
      }
      dnsConfig = {
        nameServers = [
          "string"
        ]
        options = "string"
        searchDomains = "string"
      }
      encryptionProperties = {
        identity = "string"
        keyName = "string"
        keyVersion = "string"
        vaultBaseUrl = "string"
      }
      extensions = [
        {
          name = "string"
          properties = {
            extensionType = "string"
            version = "string"
          }
        }
      ]
      imageRegistryCredentials = [
        {
          identity = "string"
          identityUrl = "string"
          password = "string"
          server = "string"
          username = "string"
        }
      ]
      initContainers = [
        {
          name = "string"
          properties = {
            command = [
              "string"
            ]
            environmentVariables = [
              {
                name = "string"
                secureValue = "string"
                value = "string"
              }
            ]
            image = "string"
            securityContext = {
              allowPrivilegeEscalation = bool
              capabilities = {
                add = [
                  "string"
                ]
                drop = [
                  "string"
                ]
              }
              privileged = bool
              runAsGroup = int
              runAsUser = int
              seccompProfile = "string"
            }
            volumeMounts = [
              {
                mountPath = "string"
                name = "string"
                readOnly = bool
              }
            ]
          }
        }
      ]
      ipAddress = {
        autoGeneratedDomainNameLabelScope = "string"
        dnsNameLabel = "string"
        ip = "string"
        ports = [
          {
            port = int
            protocol = "string"
          }
        ]
        type = "string"
      }
      osType = "string"
      priority = "string"
      restartPolicy = "string"
      sku = "string"
      subnetIds = [
        {
          id = "string"
          name = "string"
        }
      ]
      volumes = [
        {
          azureFile = {
            readOnly = bool
            shareName = "string"
            storageAccountKey = "string"
            storageAccountName = "string"
          }
          gitRepo = {
            directory = "string"
            repository = "string"
            revision = "string"
          }
          name = "string"
          secret = {}
        }
      ]
    }
    zones = [
      "string"
    ]
  })
}

```

### containerGroups

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 1-63Valid characters:Lowercase letters, numbers, and hyphens.Can't start or end with hyphen. Consecutive hyphens aren't allowed. |
| location | The resource location. | string |
| tags | The resource tags. | Dictionary of tag names and values. SeeTags in templates |
| identity | The identity of the container group, if configured. | ContainerGroupIdentity |
| properties | The container group properties | ContainerGroupPropertiesProperties(required) |
| zones | The zones for the container group. | string[] |


### ContainerGroupIdentity

| Name | Description | Value |
|-|-|-|
| type | The type of identity used for the container group. The type 'SystemAssigned, UserAssigned' includes both an implicitly created identity and a set of user assigned identities. The type 'None' will remove any identities from the container group. | 'None''SystemAssigned''SystemAssigned, UserAssigned''UserAssigned' |
| userAssignedIdentities | The list of user identities associated with the container group. | object |


### ContainerGroupPropertiesProperties

| Name | Description | Value |
|-|-|-|
| confidentialComputeProperties | The properties for confidential container group | ConfidentialComputeProperties |
| containers | The containers within the container group. | Container[] (required) |
| diagnostics | The diagnostic information for a container group. | ContainerGroupDiagnostics |
| dnsConfig | The DNS config information for a container group. | DnsConfiguration |
| encryptionProperties | The encryption properties for a container group. | EncryptionProperties |
| extensions | extensions used by virtual kubelet | DeploymentExtensionSpec[] |
| imageRegistryCredentials | The image registry credentials by which the container group is created from. | ImageRegistryCredential[] |
| initContainers | The init containers for a container group. | InitContainerDefinition[] |
| ipAddress | The IP address type of the container group. | IpAddress |
| osType | The operating system type required by the containers in the container group. | 'Linux''Windows' (required) |
| priority | The priority of the container group. | 'Regular''Spot' |
| restartPolicy | Restart policy for all containers within the container group.-AlwaysAlways restart-OnFailureRestart on failure-NeverNever restart | 'Always''Never''OnFailure' |
| sku | The SKU for a container group. | 'Confidential''Dedicated''Standard' |
| subnetIds | The subnet resource IDs for a container group. | ContainerGroupSubnetId[] |
| volumes | The list of volumes that can be mounted by containers in this container group. | Volume[] |


### ConfidentialComputeProperties

| Name | Description | Value |
|-|-|-|
| ccePolicy | The base64 encoded confidential compute enforcement policy | string |


### Container

| Name | Description | Value |
|-|-|-|
| name | The user-provided name of the container instance. | string (required) |
| properties | The properties of the container instance. | ContainerProperties(required) |


### ContainerProperties

| Name | Description | Value |
|-|-|-|
| command | The commands to execute within the container instance in exec form. | string[] |
| environmentVariables | The environment variables to set in the container instance. | EnvironmentVariable[] |
| image | The name of the image used to create the container instance. | string (required) |
| livenessProbe | The liveness probe. | ContainerProbe |
| ports | The exposed ports on the container instance. | ContainerPort[] |
| readinessProbe | The readiness probe. | ContainerProbe |
| resources | The resource requirements of the container instance. | ResourceRequirements(required) |
| securityContext | The container security properties. | SecurityContextDefinition |
| volumeMounts | The volume mounts available to the container instance. | VolumeMount[] |


### EnvironmentVariable

| Name | Description | Value |
|-|-|-|
| name | The name of the environment variable. | string (required) |
| secureValue | The value of the secure environment variable. | string |
| value | The value of the environment variable. | string |


### ContainerProbe

| Name | Description | Value |
|-|-|-|
| exec | The execution command to probe | ContainerExec |
| failureThreshold | The failure threshold. | int |
| httpGet | The Http Get settings to probe | ContainerHttpGet |
| initialDelaySeconds | The initial delay seconds. | int |
| periodSeconds | The period seconds. | int |
| successThreshold | The success threshold. | int |
| timeoutSeconds | The timeout seconds. | int |


### ContainerExec

| Name | Description | Value |
|-|-|-|
| command | The commands to execute within the container. | string[] |


### ContainerHttpGet

| Name | Description | Value |
|-|-|-|
| httpHeaders | The HTTP headers. | HttpHeader[] |
| path | The path to probe. | string |
| port | The port number to probe. | int (required) |
| scheme | The scheme. | 'http''https' |


### HttpHeader

| Name | Description | Value |
|-|-|-|
| name | The header name. | string |
| value | The header value. | string |


### ContainerPort

| Name | Description | Value |
|-|-|-|
| port | The port number exposed within the container group. | int (required) |
| protocol | The protocol associated with the port. | 'TCP''UDP' |


### ResourceRequirements

| Name | Description | Value |
|-|-|-|
| limits | The resource limits of this container instance. | ResourceLimits |
| requests | The resource requests of this container instance. | ResourceRequests(required) |


### ResourceLimits

| Name | Description | Value |
|-|-|-|
| cpu | The CPU limit of this container instance. | int |
| gpu | The GPU limit of this container instance. | GpuResource |
| memoryInGB | The memory limit in GB of this container instance. To specify a decimal value, use thejson()function. | int or json decimal |


### GpuResource

| Name | Description | Value |
|-|-|-|
| count | The count of the GPU resource. | int (required) |
| sku | The SKU of the GPU resource. | 'K80''P100''V100' (required) |


### ResourceRequests

| Name | Description | Value |
|-|-|-|
| cpu | The CPU request of this container instance. | int (required) |
| gpu | The GPU request of this container instance. | GpuResource |
| memoryInGB | The memory request in GB of this container instance. To specify a decimal value, use thejson()function. | int or json decimal (required) |


### SecurityContextDefinition

| Name | Description | Value |
|-|-|-|
| allowPrivilegeEscalation | A boolean value indicating whether the init process can elevate its privileges | bool |
| capabilities | The capabilities to add or drop from a container. | SecurityContextCapabilitiesDefinition |
| privileged | The flag to determine if the container permissions is elevated to Privileged. | bool |
| runAsGroup | Sets the User GID for the container. | int |
| runAsUser | Sets the User UID for the container. | int |
| seccompProfile | a base64 encoded string containing the contents of the JSON in the seccomp profile | string |


### SecurityContextCapabilitiesDefinition

| Name | Description | Value |
|-|-|-|
| add | The capabilities to add to the container. | string[] |
| drop | The capabilities to drop from the container. | string[] |


### VolumeMount

| Name | Description | Value |
|-|-|-|
| mountPath | The path within the container where the volume should be mounted. Must not contain colon (:). | string (required) |
| name | The name of the volume mount. | string (required) |
| readOnly | The flag indicating whether the volume mount is read-only. | bool |


### ContainerGroupDiagnostics

| Name | Description | Value |
|-|-|-|
| logAnalytics | Container group log analytics information. | LogAnalytics |


### LogAnalytics

| Name | Description | Value |
|-|-|-|
| logType | The log type to be used. | 'ContainerInsights''ContainerInstanceLogs' |
| metadata | Metadata for log analytics. | object |
| workspaceId | The workspace id for log analytics | string (required) |
| workspaceKey | The workspace key for log analytics | string (required) |
| workspaceResourceId | The workspace resource id for log analytics | string |


### DnsConfiguration

| Name | Description | Value |
|-|-|-|
| nameServers | The DNS servers for the container group. | string[] (required) |
| options | The DNS options for the container group. | string |
| searchDomains | The DNS search domains for hostname lookup in the container group. | string |


### EncryptionProperties

| Name | Description | Value |
|-|-|-|
| identity | The keyvault managed identity. | string |
| keyName | The encryption key name. | string (required) |
| keyVersion | The encryption key version. | string (required) |
| vaultBaseUrl | The keyvault base url. | string (required) |


### DeploymentExtensionSpec

| Name | Description | Value |
|-|-|-|
| name | Name of the extension. | string (required) |
| properties | Extension specific properties | DeploymentExtensionSpecProperties |


### DeploymentExtensionSpecProperties

| Name | Description | Value |
|-|-|-|
| extensionType | Type of extension to be added. | string (required) |
| protectedSettings | Protected settings for the extension. | For Bicep, you can use theany()function. |
| settings | Settings for the extension. | For Bicep, you can use theany()function. |
| version | Version of the extension being used. | string (required) |


### ImageRegistryCredential

| Name | Description | Value |
|-|-|-|
| identity | The identity for the private registry. | string |
| identityUrl | The identity URL for the private registry. | string |
| password | The password for the private registry. | string |
| server | The Docker image registry server without a protocol such as "http" and "https". | string (required) |
| username | The username for the private registry. | string |


### InitContainerDefinition

| Name | Description | Value |
|-|-|-|
| name | The name for the init container. | string (required) |
| properties | The properties for the init container. | InitContainerPropertiesDefinition(required) |


### InitContainerPropertiesDefinition

| Name | Description | Value |
|-|-|-|
| command | The command to execute within the init container in exec form. | string[] |
| environmentVariables | The environment variables to set in the init container. | EnvironmentVariable[] |
| image | The image of the init container. | string |
| securityContext | The container security properties. | SecurityContextDefinition |
| volumeMounts | The volume mounts available to the init container. | VolumeMount[] |


### IpAddress

| Name | Description | Value |
|-|-|-|
| autoGeneratedDomainNameLabelScope | The value representing the security enum. The 'Unsecure' value is the default value if not selected and means the object's domain name label is not secured against subdomain takeover. The 'TenantReuse' value is the default value if selected and means the object's domain name label can be reused within the same tenant. The 'SubscriptionReuse' value means the object's domain name label can be reused within the same subscription. The 'ResourceGroupReuse' value means the object's domain name label can be reused within the same resource group. The 'NoReuse' value means the object's domain name label cannot be reused within the same resource group, subscription, or tenant. | 'Noreuse''ResourceGroupReuse''SubscriptionReuse''TenantReuse''Unsecure' |
| dnsNameLabel | The Dns name label for the IP. | string |
| ip | The IP exposed to the public internet. | string |
| ports | The list of ports exposed on the container group. | Port[] (required) |
| type | Specifies if the IP is exposed to the public internet or private VNET. | 'Private''Public' (required) |


### Port

| Name | Description | Value |
|-|-|-|
| port | The port number. | int (required) |
| protocol | The protocol associated with the port. | 'TCP''UDP' |


### ContainerGroupSubnetId

| Name | Description | Value |
|-|-|-|
| id | Resource ID of virtual network and subnet. | string (required) |
| name | Friendly name for the subnet. | string |


### Volume

| Name | Description | Value |
|-|-|-|
| azureFile | The Azure File volume. | AzureFileVolume |
| emptyDir | The empty directory volume. | For Bicep, you can use theany()function. |
| gitRepo | The git repo volume. | GitRepoVolume |
| name | The name of the volume. | string (required) |
| secret | The secret volume. | object |


### AzureFileVolume

| Name | Description | Value |
|-|-|-|
| readOnly | The flag indicating whether the Azure File shared mounted as a volume is read-only. | bool |
| shareName | The name of the Azure File share to be mounted as a volume. | string (required) |
| storageAccountKey | The storage account access key used to access the Azure File share. | string |
| storageAccountName | The name of the storage account that contains the Azure File share. | string (required) |


### GitRepoVolume

| Name | Description | Value |
|-|-|-|
| directory | Target directory name. Must not contain or start with '..'.  If '.' is supplied, the volume directory will be the git repository.  Otherwise, if specified, the volume will contain the git repository in the subdirectory with the given name. | string |
| repository | Repository URL | string (required) |
| revision | Commit hash for the specified revision. | string |
