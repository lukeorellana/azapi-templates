## Microsoft.Web/certificates@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/certificates@2022-09-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      canonicalName = "string"
      domainValidationMethod = "string"
      hostNames = [
        "string"
      ]
      keyVaultId = "string"
      keyVaultSecretName = "string"
      password = "string"
      serverFarmId = "string"
    }
    kind = "string"
  })
}

```

### certificates

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 1-260Valid characters:Can't use:/Can't end with space or period. |
| location | Resource Location. | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| kind | Kind of resource. | string |
| properties | Certificate resource specific properties | CertificateProperties |


### CertificateProperties

| Name | Description | Value |
|-|-|-|
| canonicalName | CNAME of the certificate to be issued via free certificate | string |
| domainValidationMethod | Method of domain validation for free cert | string |
| hostNames | Host names the certificate applies to. | string[] |
| keyVaultId | Key Vault Csm resource Id. | string |
| keyVaultSecretName | Key Vault secret name. | string |
| password | Certificate password. | string |
| pfxBlob | Pfx blob. | For Bicep, you can use theany()function. |
| serverFarmId | Resource ID of the associated App Service plan, formatted as: "/subscriptions/{subscriptionID}/resourceGroups/{groupName}/providers/Microsoft.Web/serverfarms/{appServicePlanName}". | string |
## Microsoft.Web/connectionGateways@2016-06-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/connectionGateways@2016-06-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      backendUri = "string"
      connectionGatewayInstallation = {
        id = "string"
        location = "string"
        name = "string"
        type = "string"
      }
      contactInformation = [
        "string"
      ]
      description = "string"
      displayName = "string"
      machineName = "string"
    }
    etag = "string"
  })
}

```

### connectionGateways

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | Resource location | string |
| tags | Resource tags | Dictionary of tag names and values. SeeTags in templates |
| etag | Resource ETag | string |
| properties |  | ConnectionGatewayDefinitionProperties |


### ConnectionGatewayDefinitionProperties

| Name | Description | Value |
|-|-|-|
| backendUri | The URI of the backend | string |
| connectionGatewayInstallation | The gateway installation reference | ConnectionGatewayReference |
| contactInformation | The gateway admin | string[] |
| description | The gateway description | string |
| displayName | The gateway display name | string |
| machineName | The machine name of the gateway | string |
| status | The gateway status | For Bicep, you can use theany()function. |


### ConnectionGatewayReference

| Name | Description | Value |
|-|-|-|
| id | Resource reference id | string |
| location | Resource reference location | string |
| name | Resource reference name | string |
| type | Resource reference type | string |
## Microsoft.Web/connections@2016-06-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/connections@2016-06-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      api = {
        brandColor = "string"
        description = "string"
        displayName = "string"
        iconUri = "string"
        id = "string"
        name = "string"
        type = "string"
      }
      changedTime = "string"
      createdTime = "string"
      customParameterValues = {}
      displayName = "string"
      nonSecretParameterValues = {}
      parameterValues = {}
      statuses = [
        {
          error = {
            etag = "string"
            location = "string"
            properties = {
              code = "string"
              message = "string"
            }
            tags = {}
          }
          status = "string"
          target = "string"
        }
      ]
      testLinks = [
        {
          method = "string"
          requestUri = "string"
        }
      ]
    }
    etag = "string"
  })
}

```

### connections

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | Resource location | string |
| tags | Resource tags | Dictionary of tag names and values. SeeTags in templates |
| etag | Resource ETag | string |
| properties |  | ApiConnectionDefinitionProperties |


### ApiConnectionDefinitionProperties

| Name | Description | Value |
|-|-|-|
| api |  | ApiReference |
| changedTime | Timestamp of last connection change | string |
| createdTime | Timestamp of the connection creation | string |
| customParameterValues | Dictionary of custom parameter values | object |
| displayName | Display name | string |
| nonSecretParameterValues | Dictionary of nonsecret parameter values | object |
| parameterValues | Dictionary of parameter values | object |
| statuses | Status of the connection | ConnectionStatusDefinition[] |
| testLinks | Links to test the API connection | ApiConnectionTestLink[] |


### ApiReference

| Name | Description | Value |
|-|-|-|
| brandColor | Brand color | string |
| description | The custom API description | string |
| displayName | The display name | string |
| iconUri | The icon URI | string |
| id | Resource reference id | string |
| name | The name of the API | string |
| swagger | The JSON representation of the swagger | For Bicep, you can use theany()function. |
| type | Resource reference type | string |


### ConnectionStatusDefinition

| Name | Description | Value |
|-|-|-|
| error | Connection error | ConnectionError |
| status | The gateway status | string |
| target | Target of the error | string |


### ConnectionError

| Name | Description | Value |
|-|-|-|
| etag | Resource ETag | string |
| location | Resource location | string |
| properties |  | ConnectionErrorProperties |
| tags | Resource tags | object |


### ConnectionErrorProperties

| Name | Description | Value |
|-|-|-|
| code | Code of the status | string |
| message | Description of the status | string |


### ApiConnectionTestLink

| Name | Description | Value |
|-|-|-|
| method | HTTP Method | string |
| requestUri | Test link request URI | string |
## Microsoft.Web/containerApps@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/containerApps@2022-09-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      configuration = {
        activeRevisionsMode = "string"
        ingress = {
          allowInsecure = bool
          external = bool
          targetPort = int
          traffic = [
            {
              latestRevision = bool
              revisionName = "string"
              weight = int
            }
          ]
          transport = "string"
        }
        registries = [
          {
            passwordSecretRef = "string"
            server = "string"
            username = "string"
          }
        ]
        secrets = [
          {
            name = "string"
            value = "string"
          }
        ]
      }
      kubeEnvironmentId = "string"
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
            resources = {
              cpu = int
              memory = "string"
            }
          }
        ]
        dapr = {
          appId = "string"
          appPort = int
          components = [
            {
              metadata = [
                {
                  name = "string"
                  secretRef = "string"
                  value = "string"
                }
              ]
              name = "string"
              type = "string"
              version = "string"
            }
          ]
          enabled = bool
        }
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
            }
          ]
        }
      }
    }
    kind = "string"
  })
}

```

### containerApps

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | Resource Location. | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| kind | Kind of resource. | string |
| properties | ContainerApp resource specific properties | ContainerAppProperties |


### ContainerAppProperties

| Name | Description | Value |
|-|-|-|
| configuration | Non versioned Container App configuration properties. | Configuration |
| kubeEnvironmentId | Resource ID of the Container App's KubeEnvironment. | string |
| template | Container App versioned application definition. | Template |


### Configuration

| Name | Description | Value |
|-|-|-|
| activeRevisionsMode | ActiveRevisionsMode controls how active revisions are handled for the Container app:{list}{item}Multiple: multiple revisions can be active. If no value if provided, this is the default{/item}{item}Single: Only one revision can be active at a time. Revision weights can not be used in this mode{/item}{/list} | 'multiple''single' |
| ingress | Ingress configurations. | Ingress |
| registries | Collection of private container registry credentials for containers used by the Container app | RegistryCredentials[] |
| secrets | Collection of secrets used by a Container app | Secret[] |


### Ingress

| Name | Description | Value |
|-|-|-|
| allowInsecure | Bool indicating if HTTP connections to is allowed. If set to false HTTP connections are automatically redirected to HTTPS connections | bool |
| external | Bool indicating if app exposes an external http endpoint | bool |
| targetPort | Target Port in containers for traffic from ingress | int |
| traffic |  | TrafficWeight[] |
| transport | Ingress transport protocol | 'auto''http''http2' |


### TrafficWeight

| Name | Description | Value |
|-|-|-|
| latestRevision | Indicates that the traffic weight belongs to a latest stable revision | bool |
| revisionName | Name of a revision | string |
| weight | Traffic weight assigned to a revision | int |


### RegistryCredentials

| Name | Description | Value |
|-|-|-|
| passwordSecretRef | The name of the Secret that contains the registry login password | string |
| server | Container Registry Server | string |
| username | Container Registry Username | string |


### Secret

| Name | Description | Value |
|-|-|-|
| name | Secret Name. | string |
| value | Secret Value. | string |


### Template

| Name | Description | Value |
|-|-|-|
| containers | List of container definitions for the Container App. | Container[] |
| dapr | Dapr configuration for the Container App. | Dapr |
| revisionSuffix | User friendly suffix that is appended to the revision name | string |
| scale | Scaling properties for the Container App. | Scale |


### Container

| Name | Description | Value |
|-|-|-|
| args | Container start command arguments. | string[] |
| command | Container start command. | string[] |
| env | Container environment variables. | EnvironmentVar[] |
| image | Container image tag. | string |
| name | Custom container name. | string |
| resources | Container resource requirements. | ContainerResources |


### EnvironmentVar

| Name | Description | Value |
|-|-|-|
| name | Environment variable name. | string |
| secretRef | Name of the Container App secret from which to pull the environment variable value. | string |
| value | Non-secret environment variable value. | string |


### ContainerResources

| Name | Description | Value |
|-|-|-|
| cpu | Required CPU in cores, e.g. 0.5 | int |
| memory | Required memory, e.g. "250Mb" | string |


### Dapr

| Name | Description | Value |
|-|-|-|
| appId | Dapr application identifier | string |
| appPort | Port on which the Dapr side car | int |
| components | Collection of Dapr components | DaprComponent[] |
| enabled | Boolean indicating if the Dapr side car is enabled | bool |


### DaprComponent

| Name | Description | Value |
|-|-|-|
| metadata | Component metadata | DaprMetadata[] |
| name | Component name | string |
| type | Component type | string |
| version | Component version | string |


### DaprMetadata

| Name | Description | Value |
|-|-|-|
| name | Metadata property name. | string |
| secretRef | Name of the Container App secret from which to pull the metadata property value. | string |
| value | Metadata property value. | string |


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


### QueueScaleRule

| Name | Description | Value |
|-|-|-|
| auth | Authentication secrets for the queue scale rule. | ScaleRuleAuth[] |
| queueLength | Queue length. | int |
| queueName | Queue name. | string |


### ScaleRuleAuth

| Name | Description | Value |
|-|-|-|
| secretRef | Name of the Container App secret from which to pull the auth params. | string |
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
## Microsoft.Web/customApis@2016-06-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/customApis@2016-06-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      apiDefinitions = {
        modifiedSwaggerUrl = "string"
        originalSwaggerUrl = "string"
      }
      apiType = "string"
      backendService = {
        serviceUrl = "string"
      }
      brandColor = "string"
      capabilities = [
        "string"
      ]
      connectionParameters = {}
      description = "string"
      displayName = "string"
      iconUri = "string"
      runtimeUrls = [
        "string"
      ]
      wsdlDefinition = {
        content = "string"
        importMethod = "string"
        service = {
          endpointQualifiedNames = [
            "string"
          ]
          qualifiedName = "string"
        }
        url = "string"
        content = "string"
        importMethod = "string"
        service = {
          endpointQualifiedNames = [
            "string"
          ]
          qualifiedName = "string"
        }
        url = "string"
      }
    }
    etag = "string"
  })
}

```

### customApis

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | Resource location | string |
| tags | Resource tags | Dictionary of tag names and values. SeeTags in templates |
| etag | Resource ETag | string |
| properties | Custom API properties | CustomApiPropertiesDefinition |


### CustomApiPropertiesDefinition

| Name | Description | Value |
|-|-|-|
| apiDefinitions | API Definitions | ApiResourceDefinitions |
| apiType | The API type | 'NotSpecified''Rest''Soap' |
| backendService | The API backend service | ApiResourceBackendService |
| brandColor | Brand color | string |
| capabilities | The custom API capabilities | string[] |
| connectionParameters | Connection parameters | object |
| description | The custom API description | string |
| displayName | The display name | string |
| iconUri | The icon URI | string |
| runtimeUrls | Runtime URLs | string[] |
| swagger | The JSON representation of the swagger | For Bicep, you can use theany()function. |
| wsdlDefinition | The WSDL definition | WsdlDefinition |


### ApiResourceDefinitions

| Name | Description | Value |
|-|-|-|
| modifiedSwaggerUrl | The modified swagger URL | string |
| originalSwaggerUrl | The original swagger URL | string |


### ApiResourceBackendService

| Name | Description | Value |
|-|-|-|
| serviceUrl | The service URL | string |


### WsdlDefinition

| Name | Description | Value |
|-|-|-|
| content | The WSDL content | string |
| importMethod | The WSDL import method | 'NotSpecified''SoapPassThrough''SoapToRest' |
| service | The service with name and endpoint names | WsdlService |
| url | The WSDL URL | string |
| content | The WSDL content | string |
| importMethod | The WSDL import method | 'NotSpecified''SoapPassThrough''SoapToRest' |
| service | The service with name and endpoint names | WsdlService |
| url | The WSDL URL | string |


### WsdlService

| Name | Description | Value |
|-|-|-|
| endpointQualifiedNames | List of the endpoints' qualified names | string[] |
| qualifiedName | The service's qualified name | string (required) |
## Microsoft.Web/hostingEnvironments@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/hostingEnvironments@2022-09-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      clusterSettings = [
        {
          name = "string"
          value = "string"
        }
      ]
      customDnsSuffixConfiguration = {
        kind = "string"
        properties = {
          certificateUrl = "string"
          dnsSuffix = "string"
          keyVaultReferenceIdentity = "string"
        }
      }
      dedicatedHostCount = int
      dnsSuffix = "string"
      frontEndScaleFactor = int
      internalLoadBalancingMode = "string"
      ipsslAddressCount = int
      multiSize = "string"
      networkingConfiguration = {
        kind = "string"
        properties = {
          allowNewPrivateEndpointConnections = bool
          ftpEnabled = bool
          inboundIpAddressOverride = "string"
          remoteDebugEnabled = bool
        }
      }
      upgradePreference = "string"
      userWhitelistedIpRanges = [
        "string"
      ]
      virtualNetwork = {
        id = "string"
        subnet = "string"
      }
      zoneRedundant = bool
    }
    kind = "string"
  })
}

```

### hostingEnvironments

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | Resource Location. | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| kind | Kind of resource. | string |
| properties | Core resource properties | AppServiceEnvironment |


### AppServiceEnvironment

| Name | Description | Value |
|-|-|-|
| clusterSettings | Custom settings for changing the behavior of the App Service Environment. | NameValuePair[] |
| customDnsSuffixConfiguration | Full view of the custom domain suffix configuration for ASEv3. | CustomDnsSuffixConfiguration |
| dedicatedHostCount | Dedicated Host Count | int |
| dnsSuffix | DNS suffix of the App Service Environment. | string |
| frontEndScaleFactor | Scale factor for front-ends. | int |
| internalLoadBalancingMode | Specifies which endpoints to serve internally in the Virtual Network for the App Service Environment. | 'None''Publishing''Web''Web, Publishing' |
| ipsslAddressCount | Number of IP SSL addresses reserved for the App Service Environment. | int |
| multiSize | Front-end VM size, e.g. "Medium", "Large". | string |
| networkingConfiguration | Full view of networking configuration for an ASE. | AseV3NetworkingConfiguration |
| upgradePreference | Upgrade Preference | 'Early''Late''Manual''None' |
| userWhitelistedIpRanges | User added ip ranges to allow on ASE db | string[] |
| virtualNetwork | Description of the Virtual Network. | VirtualNetworkProfile(required) |
| zoneRedundant | Whether or not this App Service Environment is zone-redundant. | bool |


### NameValuePair

| Name | Description | Value |
|-|-|-|
| name | Pair name. | string |
| value | Pair value. | string |


### CustomDnsSuffixConfiguration

| Name | Description | Value |
|-|-|-|
| kind | Kind of resource. | string |
| properties | CustomDnsSuffixConfiguration resource specific properties | CustomDnsSuffixConfigurationProperties |


### CustomDnsSuffixConfigurationProperties

| Name | Description | Value |
|-|-|-|
| certificateUrl | The URL referencing the Azure Key Vault certificate secret that should be used as the default SSL/TLS certificate for sites with the custom domain suffix. | string |
| dnsSuffix | The default custom domain suffix to use for all sites deployed on the ASE. | string |
| keyVaultReferenceIdentity | The user-assigned identity to use for resolving the key vault certificate reference. If not specified, the system-assigned ASE identity will be used if available. | string |


### AseV3NetworkingConfiguration

| Name | Description | Value |
|-|-|-|
| kind | Kind of resource. | string |
| properties | AseV3NetworkingConfiguration resource specific properties | AseV3NetworkingConfigurationProperties |


### AseV3NetworkingConfigurationProperties

| Name | Description | Value |
|-|-|-|
| allowNewPrivateEndpointConnections | Property to enable and disable new private endpoint connection creation on ASE | bool |
| ftpEnabled | Property to enable and disable FTP on ASEV3 | bool |
| inboundIpAddressOverride | Customer provided Inbound IP Address. Only able to be set on Ase create. | string |
| remoteDebugEnabled | Property to enable and disable Remote Debug on ASEV3 | bool |


### VirtualNetworkProfile

| Name | Description | Value |
|-|-|-|
| id | Resource id of the Virtual Network. | string (required) |
| subnet | Subnet within the Virtual Network. | string |
## Microsoft.Web/hostingEnvironments/configurations@2021-03-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/hostingEnvironments/configurations@2021-03-01"
  name = "networking"
  parent_id = "string"
  body = jsonencode({
    properties = {
      allowNewPrivateEndpointConnections = bool
    }
    kind = "string"
  })
}

```

### hostingEnvironments/configurations

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'networking' |
| kind | Kind of resource. | string |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:hostingEnvironments |
| properties | AseV3NetworkingConfiguration resource specific properties | AseV3NetworkingConfigurationProperties |


### AseV3NetworkingConfigurationProperties

| Name | Description | Value |
|-|-|-|
| allowNewPrivateEndpointConnections | Property to enable and disable new private endpoint connection creation on ASE | bool |
## Microsoft.Web/hostingEnvironments/configurations@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/hostingEnvironments/configurations@2022-09-01"
  name = "customdnssuffix"
  parent_id = "string"
  body = jsonencode({
    properties = {
      certificateUrl = "string"
      dnsSuffix = "string"
      keyVaultReferenceIdentity = "string"
    }
    kind = "string"
  })
}

```

### hostingEnvironments/configurations-customdnssuffix

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'customdnssuffix' |
| kind | Kind of resource. | string |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:hostingEnvironments |
| properties | CustomDnsSuffixConfiguration resource specific properties | CustomDnsSuffixConfigurationProperties |


### CustomDnsSuffixConfigurationProperties

| Name | Description | Value |
|-|-|-|
| certificateUrl | The URL referencing the Azure Key Vault certificate secret that should be used as the default SSL/TLS certificate for sites with the custom domain suffix. | string |
| dnsSuffix | The default custom domain suffix to use for all sites deployed on the ASE. | string |
| keyVaultReferenceIdentity | The user-assigned identity to use for resolving the key vault certificate reference. If not specified, the system-assigned ASE identity will be used if available. | string |
## Microsoft.Web/hostingEnvironments/configurations@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/hostingEnvironments/configurations@2022-09-01"
  name = "networking"
  parent_id = "string"
  body = jsonencode({
    properties = {
      allowNewPrivateEndpointConnections = bool
      ftpEnabled = bool
      inboundIpAddressOverride = "string"
      remoteDebugEnabled = bool
    }
    kind = "string"
  })
}

```

### hostingEnvironments/configurations-networking

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'networking' |
| kind | Kind of resource. | string |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:hostingEnvironments |
| properties | AseV3NetworkingConfiguration resource specific properties | AseV3NetworkingConfigurationProperties |


### AseV3NetworkingConfigurationProperties

| Name | Description | Value |
|-|-|-|
| allowNewPrivateEndpointConnections | Property to enable and disable new private endpoint connection creation on ASE | bool |
| ftpEnabled | Property to enable and disable FTP on ASEV3 | bool |
| inboundIpAddressOverride | Customer provided Inbound IP Address. Only able to be set on Ase create. | string |
| remoteDebugEnabled | Property to enable and disable Remote Debug on ASEV3 | bool |
## Microsoft.Web/hostingEnvironments/multiRolePools@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/hostingEnvironments/multiRolePools@2022-09-01"
  name = "default"
  parent_id = "string"
  body = jsonencode({
    properties = {
      computeMode = "string"
      workerCount = int
      workerSize = "string"
      workerSizeId = int
    }
    sku = {
      capabilities = [
        {
          name = "string"
          reason = "string"
          value = "string"
        }
      ]
      capacity = int
      family = "string"
      locations = [
        "string"
      ]
      name = "string"
      size = "string"
      skuCapacity = {
        default = int
        elasticMaximum = int
        maximum = int
        minimum = int
        scaleType = "string"
      }
      tier = "string"
    }
    kind = "string"
  })
}

```

### hostingEnvironments/multiRolePools

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'default' |
| sku | Description of a SKU for a scalable resource. | SkuDescription |
| kind | Kind of resource. | string |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:hostingEnvironments |
| properties | Core resource properties | WorkerPool |


### WorkerPool

| Name | Description | Value |
|-|-|-|
| computeMode | Shared or dedicated app hosting. | 'Dedicated''Dynamic''Shared' |
| workerCount | Number of instances in the worker pool. | int |
| workerSize | VM size of the worker pool instances. | string |
| workerSizeId | Worker size ID for referencing this worker pool. | int |


### SkuDescription

| Name | Description | Value |
|-|-|-|
| capabilities | Capabilities of the SKU, e.g., is traffic manager enabled? | Capability[] |
| capacity | Current number of instances assigned to the resource. | int |
| family | Family code of the resource SKU. | string |
| locations | Locations of the SKU. | string[] |
| name | Name of the resource SKU. | string |
| size | Size specifier of the resource SKU. | string |
| skuCapacity | Min, max, and default scale values of the SKU. | SkuCapacity |
| tier | Service tier of the resource SKU. | string |


### Capability

| Name | Description | Value |
|-|-|-|
| name | Name of the SKU capability. | string |
| reason | Reason of the SKU capability. | string |
| value | Value of the SKU capability. | string |


### SkuCapacity

| Name | Description | Value |
|-|-|-|
| default | Default number of workers for this App Service plan SKU. | int |
| elasticMaximum | Maximum number of Elastic workers for this App Service plan SKU. | int |
| maximum | Maximum number of workers for this App Service plan SKU. | int |
| minimum | Minimum number of workers for this App Service plan SKU. | int |
| scaleType | Available scale configurations for an App Service plan. | string |
## Microsoft.Web/hostingEnvironments/privateEndpointConnections@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/hostingEnvironments/privateEndpointConnections@2022-09-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      privateLinkServiceConnectionState = {
        actionsRequired = "string"
        description = "string"
        status = "string"
      }
    }
    kind = "string"
  })
}

```

### hostingEnvironments/privateEndpointConnections

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| kind | Kind of resource. | string |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:hostingEnvironments |
| properties | Core resource properties | PrivateLinkConnectionApprovalRequestOrRemotePrivateE... |


### PrivateLinkConnectionApprovalRequestOrRemotePrivateE...

| Name | Description | Value |
|-|-|-|
| privateLinkServiceConnectionState | The state of a private link connection | PrivateLinkConnectionState |


### PrivateLinkConnectionState

| Name | Description | Value |
|-|-|-|
| actionsRequired | ActionsRequired for a private link connection | string |
| description | Description of a private link connection | string |
| status | Status of a private link connection | string |
## Microsoft.Web/hostingEnvironments/workerPools@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/hostingEnvironments/workerPools@2022-09-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      computeMode = "string"
      workerCount = int
      workerSize = "string"
      workerSizeId = int
    }
    sku = {
      capabilities = [
        {
          name = "string"
          reason = "string"
          value = "string"
        }
      ]
      capacity = int
      family = "string"
      locations = [
        "string"
      ]
      name = "string"
      size = "string"
      skuCapacity = {
        default = int
        elasticMaximum = int
        maximum = int
        minimum = int
        scaleType = "string"
      }
      tier = "string"
    }
    kind = "string"
  })
}

```

### hostingEnvironments/workerPools

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| sku | Description of a SKU for a scalable resource. | SkuDescription |
| kind | Kind of resource. | string |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:hostingEnvironments |
| properties | Core resource properties | WorkerPool |


### WorkerPool

| Name | Description | Value |
|-|-|-|
| computeMode | Shared or dedicated app hosting. | 'Dedicated''Dynamic''Shared' |
| workerCount | Number of instances in the worker pool. | int |
| workerSize | VM size of the worker pool instances. | string |
| workerSizeId | Worker size ID for referencing this worker pool. | int |


### SkuDescription

| Name | Description | Value |
|-|-|-|
| capabilities | Capabilities of the SKU, e.g., is traffic manager enabled? | Capability[] |
| capacity | Current number of instances assigned to the resource. | int |
| family | Family code of the resource SKU. | string |
| locations | Locations of the SKU. | string[] |
| name | Name of the resource SKU. | string |
| size | Size specifier of the resource SKU. | string |
| skuCapacity | Min, max, and default scale values of the SKU. | SkuCapacity |
| tier | Service tier of the resource SKU. | string |


### Capability

| Name | Description | Value |
|-|-|-|
| name | Name of the SKU capability. | string |
| reason | Reason of the SKU capability. | string |
| value | Value of the SKU capability. | string |


### SkuCapacity

| Name | Description | Value |
|-|-|-|
| default | Default number of workers for this App Service plan SKU. | int |
| elasticMaximum | Maximum number of Elastic workers for this App Service plan SKU. | int |
| maximum | Maximum number of workers for this App Service plan SKU. | int |
| minimum | Minimum number of workers for this App Service plan SKU. | int |
| scaleType | Available scale configurations for an App Service plan. | string |
## Microsoft.Web/kubeEnvironments@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/kubeEnvironments@2022-09-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      aksResourceID = "string"
      appLogsConfiguration = {
        destination = "string"
        logAnalyticsConfiguration = {
          customerId = "string"
          sharedKey = "string"
        }
      }
      arcConfiguration = {
        artifactsStorageType = "string"
        artifactStorageAccessMode = "string"
        artifactStorageClassName = "string"
        artifactStorageMountPath = "string"
        artifactStorageNodeName = "string"
        frontEndServiceConfiguration = {
          kind = "string"
        }
        kubeConfig = "string"
      }
      containerAppsConfiguration = {
        appSubnetResourceId = "string"
        controlPlaneSubnetResourceId = "string"
        daprAIInstrumentationKey = "string"
        dockerBridgeCidr = "string"
        platformReservedCidr = "string"
        platformReservedDnsIP = "string"
      }
      environmentType = "string"
      internalLoadBalancerEnabled = bool
      staticIp = "string"
    }
    kind = "string"
    extendedLocation = {
      name = "string"
    }
  })
}

```

### kubeEnvironments

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | Resource Location. | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| kind | Kind of resource. | string |
| extendedLocation | Extended Location. | ExtendedLocation |
| properties | KubeEnvironment resource specific properties | KubeEnvironmentProperties |


### ExtendedLocation

| Name | Description | Value |
|-|-|-|
| name | Name of extended location. | string |


### KubeEnvironmentProperties

| Name | Description | Value |
|-|-|-|
| aksResourceID |  | string |
| appLogsConfiguration | Cluster configuration which enables the log daemon to exportapp logs to a destination. Currently only "log-analytics" issupported | AppLogsConfiguration |
| arcConfiguration | Cluster configuration which determines the ARC clustercomponents types. Eg: Choosing between BuildService kind,FrontEnd Service ArtifactsStorageType etc. | ArcConfiguration |
| containerAppsConfiguration | Cluster configuration for Container Apps Environments to configure Dapr Instrumentation Key and VNET Configuration | ContainerAppsConfiguration |
| environmentType | Type of Kubernetes Environment. Only supported for Container App Environments with value as Managed | string |
| internalLoadBalancerEnabled | Only visible within Vnet/Subnet | bool |
| staticIp | Static IP of the KubeEnvironment | string |


### AppLogsConfiguration

| Name | Description | Value |
|-|-|-|
| destination |  | string |
| logAnalyticsConfiguration |  | LogAnalyticsConfiguration |


### LogAnalyticsConfiguration

| Name | Description | Value |
|-|-|-|
| customerId |  | string |
| sharedKey |  | string |


### ArcConfiguration

| Name | Description | Value |
|-|-|-|
| artifactsStorageType |  | 'LocalNode''NetworkFileSystem' |
| artifactStorageAccessMode |  | string |
| artifactStorageClassName |  | string |
| artifactStorageMountPath |  | string |
| artifactStorageNodeName |  | string |
| frontEndServiceConfiguration |  | FrontEndConfiguration |
| kubeConfig |  | string |


### FrontEndConfiguration

| Name | Description | Value |
|-|-|-|
| kind |  | 'LoadBalancer''NodePort' |


### ContainerAppsConfiguration

| Name | Description | Value |
|-|-|-|
| appSubnetResourceId | Resource ID of a subnet for control plane infrastructure components. This subnet must be in the same VNET as the subnet defined in appSubnetResourceId. Must not overlap with the IP range defined in platformReservedCidr, if defined. | string |
| controlPlaneSubnetResourceId | Resource ID of a subnet for control plane infrastructure components. This subnet must be in the same VNET as the subnet defined in appSubnetResourceId. Must not overlap with the IP range defined in platformReservedCidr, if defined. | string |
| daprAIInstrumentationKey | Azure Monitor instrumentation key used by Dapr to export Service to Service communication telemetry | string |
| dockerBridgeCidr | CIDR notation IP range assigned to the Docker bridge network. It must not overlap with any Subnet IP ranges or the IP range defined in platformReservedCidr, if defined. | string |
| platformReservedCidr | IP range in CIDR notation that can be reserved for environment infrastructure IP addresses. It must not overlap with any other Subnet IP ranges. | string |
| platformReservedDnsIP | An IP address from the IP range defined by platformReservedCidr that will be reserved for the internal DNS server | string |
## Microsoft.Web/publishingUsers@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/publishingUsers@2022-09-01"
  name = "web"
  parent_id = "string"
  body = jsonencode({
    properties = {
      publishingPassword = "string"
      publishingPasswordHash = "string"
      publishingPasswordHashSalt = "string"
      publishingUserName = "string"
      scmUri = "string"
    }
    kind = "string"
  })
}

```

### publishingUsers

| Name | Description | Value |
|-|-|-|
| name | The resource name | 'web' |
| kind | Kind of resource. | string |
| properties | User resource specific properties | UserProperties |


### UserProperties

| Name | Description | Value |
|-|-|-|
| publishingPassword | Password used for publishing. | string |
| publishingPasswordHash | Password hash used for publishing. | string |
| publishingPasswordHashSalt | Password hash salt used for publishing. | string |
| publishingUserName | Username used for publishing. | string (required) |
| scmUri | Url of SCM site. | string |
## Microsoft.Web/serverfarms@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/serverfarms@2022-09-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      elasticScaleEnabled = bool
      freeOfferExpirationTime = "string"
      hostingEnvironmentProfile = {
        id = "string"
      }
      hyperV = bool
      isSpot = bool
      isXenon = bool
      kubeEnvironmentProfile = {
        id = "string"
      }
      maximumElasticWorkerCount = int
      perSiteScaling = bool
      reserved = bool
      spotExpirationTime = "string"
      targetWorkerCount = int
      targetWorkerSizeId = int
      workerTierName = "string"
      zoneRedundant = bool
    }
    sku = {
      capabilities = [
        {
          name = "string"
          reason = "string"
          value = "string"
        }
      ]
      capacity = int
      family = "string"
      locations = [
        "string"
      ]
      name = "string"
      size = "string"
      skuCapacity = {
        default = int
        elasticMaximum = int
        maximum = int
        minimum = int
        scaleType = "string"
      }
      tier = "string"
    }
    kind = "string"
    extendedLocation = {
      name = "string"
    }
  })
}

```

### serverfarms

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 1-60Valid characters:Alphanumeric, hyphens and Unicode characters that can be mapped to Punycode |
| location | Resource Location. | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| sku | Description of a SKU for a scalable resource. | SkuDescription |
| kind | Kind of resource. | string |
| extendedLocation | Extended Location. | ExtendedLocation |
| properties | AppServicePlan resource specific properties | AppServicePlanProperties |


### ExtendedLocation

| Name | Description | Value |
|-|-|-|
| name | Name of extended location. | string |


### AppServicePlanProperties

| Name | Description | Value |
|-|-|-|
| elasticScaleEnabled | ServerFarm supports ElasticScale. Apps in this plan will scale as if the ServerFarm was ElasticPremium sku | bool |
| freeOfferExpirationTime | The time when the server farm free offer expires. | string |
| hostingEnvironmentProfile | Specification for the App Service Environment to use for the App Service plan. | HostingEnvironmentProfile |
| hyperV | If Hyper-V container app service plantrue,falseotherwise. | bool |
| isSpot | Iftrue, this App Service Plan owns spot instances. | bool |
| isXenon | Obsolete: If Hyper-V container app service plantrue,falseotherwise. | bool |
| kubeEnvironmentProfile | Specification for the Kubernetes Environment to use for the App Service plan. | KubeEnvironmentProfile |
| maximumElasticWorkerCount | Maximum number of total workers allowed for this ElasticScaleEnabled App Service Plan | int |
| perSiteScaling | Iftrue, apps assigned to this App Service plan can be scaled independently.Iffalse, apps assigned to this App Service plan will scale to all instances of the plan. | bool |
| reserved | If Linux app service plantrue,falseotherwise. | bool |
| spotExpirationTime | The time when the server farm expires. Valid only if it is a spot server farm. | string |
| targetWorkerCount | Scaling worker count. | int |
| targetWorkerSizeId | Scaling worker size ID. | int |
| workerTierName | Target worker tier assigned to the App Service plan. | string |
| zoneRedundant | Iftrue, this App Service Plan will perform availability zone balancing.Iffalse, this App Service Plan will not perform availability zone balancing. | bool |


### HostingEnvironmentProfile

| Name | Description | Value |
|-|-|-|
| id | Resource ID of the App Service Environment. | string |


### KubeEnvironmentProfile

| Name | Description | Value |
|-|-|-|
| id | Resource ID of the Kubernetes Environment. | string |


### SkuDescription

| Name | Description | Value |
|-|-|-|
| capabilities | Capabilities of the SKU, e.g., is traffic manager enabled? | Capability[] |
| capacity | Current number of instances assigned to the resource. | int |
| family | Family code of the resource SKU. | string |
| locations | Locations of the SKU. | string[] |
| name | Name of the resource SKU. | string |
| size | Size specifier of the resource SKU. | string |
| skuCapacity | Min, max, and default scale values of the SKU. | SkuCapacity |
| tier | Service tier of the resource SKU. | string |


### Capability

| Name | Description | Value |
|-|-|-|
| name | Name of the SKU capability. | string |
| reason | Reason of the SKU capability. | string |
| value | Value of the SKU capability. | string |


### SkuCapacity

| Name | Description | Value |
|-|-|-|
| default | Default number of workers for this App Service plan SKU. | int |
| elasticMaximum | Maximum number of Elastic workers for this App Service plan SKU. | int |
| maximum | Maximum number of workers for this App Service plan SKU. | int |
| minimum | Minimum number of workers for this App Service plan SKU. | int |
| scaleType | Available scale configurations for an App Service plan. | string |
## Microsoft.Web/serverfarms/virtualNetworkConnections/gateways@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/serverfarms/virtualNetworkConnections/gateways@2022-09-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      vnetName = "string"
      vpnPackageUri = "string"
    }
    kind = "string"
  })
}

```

### serverfarms/virtualNetworkConnections/gateways

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| kind | Kind of resource. | string |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type: virtualNetworkConnections |
| properties | VnetGateway resource specific properties | VnetGatewayProperties |


### VnetGatewayProperties

| Name | Description | Value |
|-|-|-|
| vnetName | The Virtual Network name. | string |
| vpnPackageUri | The URI where the VPN package can be downloaded. | string (required) |
## Microsoft.Web/serverfarms/virtualNetworkConnections/routes@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/serverfarms/virtualNetworkConnections/routes@2022-09-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      endAddress = "string"
      routeType = "string"
      startAddress = "string"
    }
    kind = "string"
  })
}

```

### serverfarms/virtualNetworkConnections/routes

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| kind | Kind of resource. | string |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type: virtualNetworkConnections |
| properties | VnetRoute resource specific properties | VnetRouteProperties |


### VnetRouteProperties

| Name | Description | Value |
|-|-|-|
| endAddress | The ending address for this route. If the start address is specified in CIDR notation, this must be omitted. | string |
| routeType | The type of route this is:DEFAULT - By default, every app has routes to the local address ranges specified by RFC1918INHERITED - Routes inherited from the real Virtual Network routesSTATIC - Static route set on the app onlyThese values will be used for syncing an app's routes with those from a Virtual Network. | 'DEFAULT''INHERITED''STATIC' |
| startAddress | The starting address for this route. This may also include a CIDR notation, in which case the end address must not be specified. | string |
## Microsoft.Web/sites@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/sites@2022-09-01"
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
      clientAffinityEnabled = bool
      clientCertEnabled = bool
      clientCertExclusionPaths = "string"
      clientCertMode = "string"
      cloningInfo = {
        appSettingsOverrides = {}
        cloneCustomHostNames = bool
        cloneSourceControl = bool
        configureLoadBalancing = bool
        correlationId = "string"
        hostingEnvironment = "string"
        overwrite = bool
        sourceWebAppId = "string"
        sourceWebAppLocation = "string"
        trafficManagerProfileId = "string"
        trafficManagerProfileName = "string"
      }
      containerSize = int
      customDomainVerificationId = "string"
      dailyMemoryTimeQuota = int
      enabled = bool
      hostingEnvironmentProfile = {
        id = "string"
      }
      hostNamesDisabled = bool
      hostNameSslStates = [
        {
          hostType = "string"
          name = "string"
          sslState = "string"
          thumbprint = "string"
          toUpdate = bool
          virtualIP = "string"
        }
      ]
      httpsOnly = bool
      hyperV = bool
      isXenon = bool
      keyVaultReferenceIdentity = "string"
      managedEnvironmentId = "string"
      publicNetworkAccess = "string"
      redundancyMode = "string"
      reserved = bool
      scmSiteAlsoStopped = bool
      serverFarmId = "string"
      siteConfig = {
        acrUseManagedIdentityCreds = bool
        acrUserManagedIdentityID = "string"
        alwaysOn = bool
        apiDefinition = {
          url = "string"
        }
        apiManagementConfig = {
          id = "string"
        }
        appCommandLine = "string"
        appSettings = [
          {
            name = "string"
            value = "string"
          }
        ]
        autoHealEnabled = bool
        autoHealRules = {
          actions = {
            actionType = "string"
            customAction = {
              exe = "string"
              parameters = "string"
            }
            minProcessExecutionTime = "string"
          }
          triggers = {
            privateBytesInKB = int
            requests = {
              count = int
              timeInterval = "string"
            }
            slowRequests = {
              count = int
              path = "string"
              timeInterval = "string"
              timeTaken = "string"
            }
            slowRequestsWithPath = [
              {
                count = int
                path = "string"
                timeInterval = "string"
                timeTaken = "string"
              }
            ]
            statusCodes = [
              {
                count = int
                path = "string"
                status = int
                subStatus = int
                timeInterval = "string"
                win32Status = int
              }
            ]
            statusCodesRange = [
              {
                count = int
                path = "string"
                statusCodes = "string"
                timeInterval = "string"
              }
            ]
          }
        }
        autoSwapSlotName = "string"
        azureStorageAccounts = {}
        connectionStrings = [
          {
            connectionString = "string"
            name = "string"
            type = "string"
          }
        ]
        cors = {
          allowedOrigins = [
            "string"
          ]
          supportCredentials = bool
        }
        defaultDocuments = [
          "string"
        ]
        detailedErrorLoggingEnabled = bool
        documentRoot = "string"
        elasticWebAppScaleLimit = int
        experiments = {
          rampUpRules = [
            {
              actionHostName = "string"
              changeDecisionCallbackUrl = "string"
              changeIntervalInMinutes = int
              changeStep = int
              maxReroutePercentage = int
              minReroutePercentage = int
              name = "string"
              reroutePercentage = int
            }
          ]
        }
        ftpsState = "string"
        functionAppScaleLimit = int
        functionsRuntimeScaleMonitoringEnabled = bool
        handlerMappings = [
          {
            arguments = "string"
            extension = "string"
            scriptProcessor = "string"
          }
        ]
        healthCheckPath = "string"
        http20Enabled = bool
        httpLoggingEnabled = bool
        ipSecurityRestrictions = [
          {
            action = "string"
            description = "string"
            headers = {}
            ipAddress = "string"
            name = "string"
            priority = int
            subnetMask = "string"
            subnetTrafficTag = int
            tag = "string"
            vnetSubnetResourceId = "string"
            vnetTrafficTag = int
          }
        ]
        ipSecurityRestrictionsDefaultAction = "string"
        javaContainer = "string"
        javaContainerVersion = "string"
        javaVersion = "string"
        keyVaultReferenceIdentity = "string"
        limits = {
          maxDiskSizeInMb = int
          maxMemoryInMb = int
          maxPercentageCpu = int
        }
        linuxFxVersion = "string"
        loadBalancing = "string"
        localMySqlEnabled = bool
        logsDirectorySizeLimit = int
        managedPipelineMode = "string"
        managedServiceIdentityId = int
        metadata = [
          {
            name = "string"
            value = "string"
          }
        ]
        minimumElasticInstanceCount = int
        minTlsVersion = "string"
        netFrameworkVersion = "string"
        nodeVersion = "string"
        numberOfWorkers = int
        phpVersion = "string"
        powerShellVersion = "string"
        preWarmedInstanceCount = int
        publicNetworkAccess = "string"
        publishingUsername = "string"
        push = {
          kind = "string"
          properties = {
            dynamicTagsJson = "string"
            isPushEnabled = bool
            tagsRequiringAuth = "string"
            tagWhitelistJson = "string"
          }
        }
        pythonVersion = "string"
        remoteDebuggingEnabled = bool
        remoteDebuggingVersion = "string"
        requestTracingEnabled = bool
        requestTracingExpirationTime = "string"
        scmIpSecurityRestrictions = [
          {
            action = "string"
            description = "string"
            headers = {}
            ipAddress = "string"
            name = "string"
            priority = int
            subnetMask = "string"
            subnetTrafficTag = int
            tag = "string"
            vnetSubnetResourceId = "string"
            vnetTrafficTag = int
          }
        ]
        scmIpSecurityRestrictionsDefaultAction = "string"
        scmIpSecurityRestrictionsUseMain = bool
        scmMinTlsVersion = "string"
        scmType = "string"
        tracingOptions = "string"
        use32BitWorkerProcess = bool
        virtualApplications = [
          {
            physicalPath = "string"
            preloadEnabled = bool
            virtualDirectories = [
              {
                physicalPath = "string"
                virtualPath = "string"
              }
            ]
            virtualPath = "string"
          }
        ]
        vnetName = "string"
        vnetPrivatePortsCount = int
        vnetRouteAllEnabled = bool
        websiteTimeZone = "string"
        webSocketsEnabled = bool
        windowsFxVersion = "string"
        xManagedServiceIdentityId = int
      }
      storageAccountRequired = bool
      virtualNetworkSubnetId = "string"
      vnetContentShareEnabled = bool
      vnetImagePullEnabled = bool
      vnetRouteAllEnabled = bool
    }
    kind = "string"
    extendedLocation = {
      name = "string"
    }
  })
}

```

### sites

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 2-60Valid characters:Alphanumeric, hyphens and Unicode characters that can be mapped to PunycodeCan't start or end with hyphen. |
| location | Resource Location. | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| kind | Kind of resource. | string |
| extendedLocation | Extended Location. | ExtendedLocation |
| identity | Managed service identity. | ManagedServiceIdentity |
| properties | Site resource specific properties | SiteProperties |


### ExtendedLocation

| Name | Description | Value |
|-|-|-|
| name | Name of extended location. | string |


### ManagedServiceIdentity

| Name | Description | Value |
|-|-|-|
| type | Type of managed service identity. | 'None''SystemAssigned''SystemAssigned, UserAssigned''UserAssigned' |
| userAssignedIdentities | The list of user assigned identities associated with the resource. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName} | object |


### SiteProperties

| Name | Description | Value |
|-|-|-|
| clientAffinityEnabled | trueto enable client affinity;falseto stop sending session affinity cookies, which route client requests in the same session to the same instance. Default istrue. | bool |
| clientCertEnabled | trueto enable client certificate authentication (TLS mutual authentication); otherwise,false. Default isfalse. | bool |
| clientCertExclusionPaths | client certificate authentication comma-separated exclusion paths | string |
| clientCertMode | This composes with ClientCertEnabled setting.- ClientCertEnabled: false means ClientCert is ignored.- ClientCertEnabled: true and ClientCertMode: Required means ClientCert is required.- ClientCertEnabled: true and ClientCertMode: Optional means ClientCert is optional or accepted. | 'Optional''OptionalInteractiveUser''Required' |
| cloningInfo | If specified during app creation, the app is cloned from a source app. | CloningInfo |
| containerSize | Size of the function container. | int |
| customDomainVerificationId | Unique identifier that verifies the custom domains assigned to the app. Customer will add this id to a txt record for verification. | string |
| dailyMemoryTimeQuota | Maximum allowed daily memory-time quota (applicable on dynamic apps only). | int |
| enabled | trueif the app is enabled; otherwise,false. Setting this value to false disables the app (takes the app offline). | bool |
| hostingEnvironmentProfile | App Service Environment to use for the app. | HostingEnvironmentProfile |
| hostNamesDisabled | trueto disable the public hostnames of the app; otherwise,false.Iftrue, the app is only accessible via API management process. | bool |
| hostNameSslStates | Hostname SSL states are used to manage the SSL bindings for app's hostnames. | HostNameSslState[] |
| httpsOnly | HttpsOnly: configures a web site to accept only https requests. Issues redirect forhttp requests | bool |
| hyperV | Hyper-V sandbox. | bool |
| isXenon | Obsolete: Hyper-V sandbox. | bool |
| keyVaultReferenceIdentity | Identity to use for Key Vault Reference authentication. | string |
| managedEnvironmentId | Azure Resource Manager ID of the customer's selected Managed Environment on which to host this app. This must be of the form /subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.App/managedEnvironments/{managedEnvironmentName} | string |
| publicNetworkAccess | Property to allow or block all public traffic. Allowed Values: 'Enabled', 'Disabled' or an empty string. | string |
| redundancyMode | Site redundancy mode | 'ActiveActive''Failover''GeoRedundant''Manual''None' |
| reserved | trueif reserved; otherwise,false. | bool |
| scmSiteAlsoStopped | trueto stop SCM (KUDU) site when the app is stopped; otherwise,false. The default isfalse. | bool |
| serverFarmId | Resource ID of the associated App Service plan, formatted as: "/subscriptions/{subscriptionID}/resourceGroups/{groupName}/providers/Microsoft.Web/serverfarms/{appServicePlanName}". | string |
| siteConfig | Configuration of the app. | SiteConfig |
| storageAccountRequired | Checks if Customer provided storage account is required | bool |
| virtualNetworkSubnetId | Azure Resource Manager ID of the Virtual network and subnet to be joined by Regional VNET Integration.This must be of the form /subscriptions/{subscriptionName}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualNetworks/{vnetName}/subnets/{subnetName} | string |
| vnetContentShareEnabled | To enable accessing content over virtual network | bool |
| vnetImagePullEnabled | To enable pulling image over Virtual Network | bool |
| vnetRouteAllEnabled | Virtual Network Route All enabled. This causes all outbound traffic to have Virtual Network Security Groups and User Defined Routes applied. | bool |


### CloningInfo

| Name | Description | Value |
|-|-|-|
| appSettingsOverrides | Application setting overrides for cloned app. If specified, these settings override the settings clonedfrom source app. Otherwise, application settings from source app are retained. | object |
| cloneCustomHostNames | trueto clone custom hostnames from source app; otherwise,false. | bool |
| cloneSourceControl | trueto clone source control from source app; otherwise,false. | bool |
| configureLoadBalancing | trueto configure load balancing for source and destination app. | bool |
| correlationId | Correlation ID of cloning operation. This ID ties multiple cloning operationstogether to use the same snapshot. | string |
| hostingEnvironment | App Service Environment. | string |
| overwrite | trueto overwrite destination app; otherwise,false. | bool |
| sourceWebAppId | ARM resource ID of the source app. App resource ID is of the form/subscriptions/{subId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{siteName} for production slots and/subscriptions/{subId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{siteName}/slots/{slotName} for other slots. | string (required) |
| sourceWebAppLocation | Location of source app ex: West US or North Europe | string |
| trafficManagerProfileId | ARM resource ID of the Traffic Manager profile to use, if it exists. Traffic Manager resource ID is of the form/subscriptions/{subId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/trafficManagerProfiles/{profileName}. | string |
| trafficManagerProfileName | Name of Traffic Manager profile to create. This is only needed if Traffic Manager profile does not already exist. | string |


### HostingEnvironmentProfile

| Name | Description | Value |
|-|-|-|
| id | Resource ID of the App Service Environment. | string |


### HostNameSslState

| Name | Description | Value |
|-|-|-|
| hostType | Indicates whether the hostname is a standard or repository hostname. | 'Repository''Standard' |
| name | Hostname. | string |
| sslState | SSL type. | 'Disabled''IpBasedEnabled''SniEnabled' |
| thumbprint | SSL certificate thumbprint. | string |
| toUpdate | Set totrueto update existing hostname. | bool |
| virtualIP | Virtual IP address assigned to the hostname if IP based SSL is enabled. | string |


### SiteConfig

| Name | Description | Value |
|-|-|-|
| acrUseManagedIdentityCreds | Flag to use Managed Identity Creds for ACR pull | bool |
| acrUserManagedIdentityID | If using user managed identity, the user managed identity ClientId | string |
| alwaysOn | trueif Always On is enabled; otherwise,false. | bool |
| apiDefinition | Information about the formal API definition for the app. | ApiDefinitionInfo |
| apiManagementConfig | Azure API management settings linked to the app. | ApiManagementConfig |
| appCommandLine | App command line to launch. | string |
| appSettings | Application settings. | NameValuePair[] |
| autoHealEnabled | trueif Auto Heal is enabled; otherwise,false. | bool |
| autoHealRules | Auto Heal rules. | AutoHealRules |
| autoSwapSlotName | Auto-swap slot name. | string |
| azureStorageAccounts | List of Azure Storage Accounts. | object |
| connectionStrings | Connection strings. | ConnStringInfo[] |
| cors | Cross-Origin Resource Sharing (CORS) settings. | CorsSettings |
| defaultDocuments | Default documents. | string[] |
| detailedErrorLoggingEnabled | trueif detailed error logging is enabled; otherwise,false. | bool |
| documentRoot | Document root. | string |
| elasticWebAppScaleLimit | Maximum number of workers that a site can scale out to.This setting only applies to apps in plans where ElasticScaleEnabled istrue | int |
| experiments | This is work around for polymorphic types. | Experiments |
| ftpsState | State of FTP / FTPS service | 'AllAllowed''Disabled''FtpsOnly' |
| functionAppScaleLimit | Maximum number of workers that a site can scale out to.This setting only applies to the Consumption and Elastic Premium Plans | int |
| functionsRuntimeScaleMonitoringEnabled | Gets or sets a value indicating whether functions runtime scale monitoring is enabled. When enabled,the ScaleController will not monitor event sources directly, but will instead call to theruntime to get scale status. | bool |
| handlerMappings | Handler mappings. | HandlerMapping[] |
| healthCheckPath | Health check path | string |
| http20Enabled | Http20Enabled: configures a web site to allow clients to connect over http2.0 | bool |
| httpLoggingEnabled | trueif HTTP logging is enabled; otherwise,false. | bool |
| ipSecurityRestrictions | IP security restrictions for main. | IpSecurityRestriction[] |
| ipSecurityRestrictionsDefaultAction | Default action for main access restriction if no rules are matched. | 'Allow''Deny' |
| javaContainer | Java container. | string |
| javaContainerVersion | Java container version. | string |
| javaVersion | Java version. | string |
| keyVaultReferenceIdentity | Identity to use for Key Vault Reference authentication. | string |
| limits | Site limits. | SiteLimits |
| linuxFxVersion | Linux App Framework and version | string |
| loadBalancing | Site load balancing. | 'LeastRequests''LeastResponseTime''PerSiteRoundRobin''RequestHash''WeightedRoundRobin''WeightedTotalTraffic' |
| localMySqlEnabled | trueto enable local MySQL; otherwise,false. | bool |
| logsDirectorySizeLimit | HTTP logs directory size limit. | int |
| managedPipelineMode | Managed pipeline mode. | 'Classic''Integrated' |
| managedServiceIdentityId | Managed Service Identity Id | int |
| metadata | Application metadata. This property cannot be retrieved, since it may contain secrets. | NameValuePair[] |
| minimumElasticInstanceCount | Number of minimum instance count for a siteThis setting only applies to the Elastic Plans | int |
| minTlsVersion | MinTlsVersion: configures the minimum version of TLS required for SSL requests | '1.0''1.1''1.2' |
| netFrameworkVersion | .NET Framework version. | string |
| nodeVersion | Version of Node.js. | string |
| numberOfWorkers | Number of workers. | int |
| phpVersion | Version of PHP. | string |
| powerShellVersion | Version of PowerShell. | string |
| preWarmedInstanceCount | Number of preWarmed instances.This setting only applies to the Consumption and Elastic Plans | int |
| publicNetworkAccess | Property to allow or block all public traffic. | string |
| publishingUsername | Publishing user name. | string |
| push | Push endpoint settings. | PushSettings |
| pythonVersion | Version of Python. | string |
| remoteDebuggingEnabled | trueif remote debugging is enabled; otherwise,false. | bool |
| remoteDebuggingVersion | Remote debugging version. | string |
| requestTracingEnabled | trueif request tracing is enabled; otherwise,false. | bool |
| requestTracingExpirationTime | Request tracing expiration time. | string |
| scmIpSecurityRestrictions | IP security restrictions for scm. | IpSecurityRestriction[] |
| scmIpSecurityRestrictionsDefaultAction | Default action for scm access restriction if no rules are matched. | 'Allow''Deny' |
| scmIpSecurityRestrictionsUseMain | IP security restrictions for scm to use main. | bool |
| scmMinTlsVersion | ScmMinTlsVersion: configures the minimum version of TLS required for SSL requests for SCM site | '1.0''1.1''1.2' |
| scmType | SCM type. | 'BitbucketGit''BitbucketHg''CodePlexGit''CodePlexHg''Dropbox''ExternalGit''ExternalHg''GitHub''LocalGit''None''OneDrive''Tfs''VSO''VSTSRM' |
| tracingOptions | Tracing options. | string |
| use32BitWorkerProcess | trueto use 32-bit worker process; otherwise,false. | bool |
| virtualApplications | Virtual applications. | VirtualApplication[] |
| vnetName | Virtual Network name. | string |
| vnetPrivatePortsCount | The number of private ports assigned to this app. These will be assigned dynamically on runtime. | int |
| vnetRouteAllEnabled | Virtual Network Route All enabled. This causes all outbound traffic to have Virtual Network Security Groups and User Defined Routes applied. | bool |
| websiteTimeZone | Sets the time zone a site uses for generating timestamps. Compatible with Linux and Windows App Service. Setting the WEBSITE_TIME_ZONE app setting takes precedence over this config. For Linux, expects tz database valueshttps://www.iana.org/time-zones(for a quick reference seehttps://en.wikipedia.org/wiki/List_of_tz_database_time_zones). For Windows, expects one of the time zones listed under HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Time Zones | string |
| webSocketsEnabled | trueif WebSocket is enabled; otherwise,false. | bool |
| windowsFxVersion | Xenon App Framework and version | string |
| xManagedServiceIdentityId | Explicit Managed Service Identity Id | int |


### ApiDefinitionInfo

| Name | Description | Value |
|-|-|-|
| url | The URL of the API definition. | string |


### ApiManagementConfig

| Name | Description | Value |
|-|-|-|
| id | APIM-Api Identifier. | string |


### NameValuePair

| Name | Description | Value |
|-|-|-|
| name | Pair name. | string |
| value | Pair value. | string |


### AutoHealRules

| Name | Description | Value |
|-|-|-|
| actions | Actions to be executed when a rule is triggered. | AutoHealActions |
| triggers | Conditions that describe when to execute the auto-heal actions. | AutoHealTriggers |


### AutoHealActions

| Name | Description | Value |
|-|-|-|
| actionType | Predefined action to be taken. | 'CustomAction''LogEvent''Recycle' |
| customAction | Custom action to be taken. | AutoHealCustomAction |
| minProcessExecutionTime | Minimum time the process must executebefore taking the action | string |


### AutoHealCustomAction

| Name | Description | Value |
|-|-|-|
| exe | Executable to be run. | string |
| parameters | Parameters for the executable. | string |


### AutoHealTriggers

| Name | Description | Value |
|-|-|-|
| privateBytesInKB | A rule based on private bytes. | int |
| requests | A rule based on total requests. | RequestsBasedTrigger |
| slowRequests | A rule based on request execution time. | SlowRequestsBasedTrigger |
| slowRequestsWithPath | A rule based on multiple Slow Requests Rule with path | SlowRequestsBasedTrigger[] |
| statusCodes | A rule based on status codes. | StatusCodesBasedTrigger[] |
| statusCodesRange | A rule based on status codes ranges. | StatusCodesRangeBasedTrigger[] |


### RequestsBasedTrigger

| Name | Description | Value |
|-|-|-|
| count | Request Count. | int |
| timeInterval | Time interval. | string |


### SlowRequestsBasedTrigger

| Name | Description | Value |
|-|-|-|
| count | Request Count. | int |
| path | Request Path. | string |
| timeInterval | Time interval. | string |
| timeTaken | Time taken. | string |


### StatusCodesBasedTrigger

| Name | Description | Value |
|-|-|-|
| count | Request Count. | int |
| path | Request Path | string |
| status | HTTP status code. | int |
| subStatus | Request Sub Status. | int |
| timeInterval | Time interval. | string |
| win32Status | Win32 error code. | int |


### StatusCodesRangeBasedTrigger

| Name | Description | Value |
|-|-|-|
| count | Request Count. | int |
| path |  | string |
| statusCodes | HTTP status code. | string |
| timeInterval | Time interval. | string |


### ConnStringInfo

| Name | Description | Value |
|-|-|-|
| connectionString | Connection string value. | string |
| name | Name of connection string. | string |
| type | Type of database. | 'ApiHub''Custom''DocDb''EventHub''MySql''NotificationHub''PostgreSQL''RedisCache''SQLAzure''SQLServer''ServiceBus' |


### CorsSettings

| Name | Description | Value |
|-|-|-|
| allowedOrigins | Gets or sets the list of origins that should be allowed to make cross-origincalls (for example:http://example.com:12345). Use "*" to allow all. | string[] |
| supportCredentials | Gets or sets whether CORS requests with credentials are allowed. Seehttps://developer.mozilla.org/en-US/docs/Web/HTTP/CORS#Requests_with_credentialsfor more details. | bool |


### Experiments

| Name | Description | Value |
|-|-|-|
| rampUpRules | List of ramp-up rules. | RampUpRule[] |


### RampUpRule

| Name | Description | Value |
|-|-|-|
| actionHostName | Hostname of a slot to which the traffic will be redirected if decided to. E.g. myapp-stage.azurewebsites.net. | string |
| changeDecisionCallbackUrl | Custom decision algorithm can be provided in TiPCallback site extension which URL can be specified. See TiPCallback site extension for the scaffold and contracts.https://www.siteextensions.net/packages/TiPCallback/ | string |
| changeIntervalInMinutes | Specifies interval in minutes to reevaluate ReroutePercentage. | int |
| changeStep | In auto ramp up scenario this is the step to add/remove fromReroutePercentageuntil it reaches \nMinReroutePercentageorMaxReroutePercentage. Site metrics are checked every N minutes specified inChangeIntervalInMinutes.\nCustom decision algorithmcan be provided in TiPCallback site extension which URL can be specified inChangeDecisionCallbackUrl. | int |
| maxReroutePercentage | Specifies upper boundary below which ReroutePercentage will stay. | int |
| minReroutePercentage | Specifies lower boundary above which ReroutePercentage will stay. | int |
| name | Name of the routing rule. The recommended name would be to point to the slot which will receive the traffic in the experiment. | string |
| reroutePercentage | Percentage of the traffic which will be redirected toActionHostName. | int |


### HandlerMapping

| Name | Description | Value |
|-|-|-|
| arguments | Command-line arguments to be passed to the script processor. | string |
| extension | Requests with this extension will be handled using the specified FastCGI application. | string |
| scriptProcessor | The absolute path to the FastCGI application. | string |


### IpSecurityRestriction

| Name | Description | Value |
|-|-|-|
| action | Allow or Deny access for this IP range. | string |
| description | IP restriction rule description. | string |
| headers | IP restriction rule headers.X-Forwarded-Host (https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Forwarded-Host#Examples).The matching logic is ..- If the property is null or empty (default), all hosts(or lack of) are allowed.- A value is compared using ordinal-ignore-case (excluding port number).- Subdomain wildcards are permitted but don't match the root domain. For example, *.contoso.com matches the subdomain foo.contoso.combut not the root domain contoso.com or multi-level foo.bar.contoso.com- Unicode host names are allowed but are converted to Punycode for matching.X-Forwarded-For (https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Forwarded-For#Examples).The matching logic is ..- If the property is null or empty (default), any forwarded-for chains (or lack of) are allowed.- If any address (excluding port number) in the chain (comma separated) matches the CIDR defined by the property.X-Azure-FDID and X-FD-HealthProbe.The matching logic is exact match. | object |
| ipAddress | IP address the security restriction is valid for.It can be in form of pure ipv4 address (required SubnetMask property) orCIDR notation such as ipv4/mask (leading bit match). For CIDR,SubnetMask property must not be specified. | string |
| name | IP restriction rule name. | string |
| priority | Priority of IP restriction rule. | int |
| subnetMask | Subnet mask for the range of IP addresses the restriction is valid for. | string |
| subnetTrafficTag | (internal) Subnet traffic tag | int |
| tag | Defines what this IP filter will be used for. This is to support IP filtering on proxies. | 'Default''ServiceTag''XffProxy' |
| vnetSubnetResourceId | Virtual network resource id | string |
| vnetTrafficTag | (internal) Vnet traffic tag | int |


### SiteLimits

| Name | Description | Value |
|-|-|-|
| maxDiskSizeInMb | Maximum allowed disk size usage in MB. | int |
| maxMemoryInMb | Maximum allowed memory usage in MB. | int |
| maxPercentageCpu | Maximum allowed CPU usage percentage. | int |


### PushSettings

| Name | Description | Value |
|-|-|-|
| kind | Kind of resource. | string |
| properties | PushSettings resource specific properties | PushSettingsProperties |


### PushSettingsProperties

| Name | Description | Value |
|-|-|-|
| dynamicTagsJson | Gets or sets a JSON string containing a list of dynamic tags that will be evaluated from user claims in the push registration endpoint. | string |
| isPushEnabled | Gets or sets a flag indicating whether the Push endpoint is enabled. | bool (required) |
| tagsRequiringAuth | Gets or sets a JSON string containing a list of tags that require user authentication to be used in the push registration endpoint.Tags can consist of alphanumeric characters and the following:'_', '@', '#', '.', ':', '-'.Validation should be performed at the PushRequestHandler. | string |
| tagWhitelistJson | Gets or sets a JSON string containing a list of tags that are allowed for use by the push registration endpoint. | string |


### VirtualApplication

| Name | Description | Value |
|-|-|-|
| physicalPath | Physical path. | string |
| preloadEnabled | trueif preloading is enabled; otherwise,false. | bool |
| virtualDirectories | Virtual directories for virtual application. | VirtualDirectory[] |
| virtualPath | Virtual path. | string |


### VirtualDirectory

| Name | Description | Value |
|-|-|-|
| physicalPath | Physical path. | string |
| virtualPath | Path to virtual application. | string |
## Microsoft.Web/sites/basicPublishingCredentialsPolicies@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/sites/basicPublishingCredentialsPolicies@2022-09-01"
  name = "ftp"
  parent_id = "string"
  body = jsonencode({
    properties = {
      allow = bool
    }
    kind = "string"
  })
}

```

### sites/basicPublishingCredentialsPolicies-ftp

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'ftp' |
| kind | Kind of resource. | string |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:sites |
| properties | CsmPublishingCredentialsPoliciesEntity resource specific properties | CsmPublishingCredentialsPoliciesEntityProperties |


### CsmPublishingCredentialsPoliciesEntityProperties

| Name | Description | Value |
|-|-|-|
| allow | trueto allow access to a publishing method; otherwise,false. | bool (required) |
## Microsoft.Web/sites/basicPublishingCredentialsPolicies@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/sites/basicPublishingCredentialsPolicies@2022-09-01"
  name = "scm"
  parent_id = "string"
  body = jsonencode({
    properties = {
      allow = bool
    }
    kind = "string"
  })
}

```

### sites/basicPublishingCredentialsPolicies-scm

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'scm' |
| kind | Kind of resource. | string |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:sites |
| properties | CsmPublishingCredentialsPoliciesEntity resource specific properties | CsmPublishingCredentialsPoliciesEntityProperties |


### CsmPublishingCredentialsPoliciesEntityProperties

| Name | Description | Value |
|-|-|-|
| allow | trueto allow access to a publishing method; otherwise,false. | bool (required) |
## Microsoft.Web/sites/config@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/sites/config@2022-09-01"
  name = "appsettings"
  parent_id = "string"
  body = jsonencode({
    properties = {}
    kind = "string"
  })
}

```

### sites/config-appsettings

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'appsettings' |
| kind | Kind of resource. | string |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:sites |
| properties | Settings. | object |
## Microsoft.Web/sites/config@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/sites/config@2022-09-01"
  name = "authsettings"
  parent_id = "string"
  body = jsonencode({
    properties = {
      aadClaimsAuthorization = "string"
      additionalLoginParams = [
        "string"
      ]
      allowedAudiences = [
        "string"
      ]
      allowedExternalRedirectUrls = [
        "string"
      ]
      authFilePath = "string"
      clientId = "string"
      clientSecret = "string"
      clientSecretCertificateThumbprint = "string"
      clientSecretSettingName = "string"
      configVersion = "string"
      defaultProvider = "string"
      enabled = bool
      facebookAppId = "string"
      facebookAppSecret = "string"
      facebookAppSecretSettingName = "string"
      facebookOAuthScopes = [
        "string"
      ]
      gitHubClientId = "string"
      gitHubClientSecret = "string"
      gitHubClientSecretSettingName = "string"
      gitHubOAuthScopes = [
        "string"
      ]
      googleClientId = "string"
      googleClientSecret = "string"
      googleClientSecretSettingName = "string"
      googleOAuthScopes = [
        "string"
      ]
      isAuthFromFile = "string"
      issuer = "string"
      microsoftAccountClientId = "string"
      microsoftAccountClientSecret = "string"
      microsoftAccountClientSecretSettingName = "string"
      microsoftAccountOAuthScopes = [
        "string"
      ]
      runtimeVersion = "string"
      tokenRefreshExtensionHours = int
      tokenStoreEnabled = bool
      twitterConsumerKey = "string"
      twitterConsumerSecret = "string"
      twitterConsumerSecretSettingName = "string"
      unauthenticatedClientAction = "string"
      validateIssuer = bool
    }
    kind = "string"
  })
}

```

### sites/config-authsettings

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'authsettings' |
| kind | Kind of resource. | string |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:sites |
| properties | SiteAuthSettings resource specific properties | SiteAuthSettingsProperties |


### SiteAuthSettingsProperties

| Name | Description | Value |
|-|-|-|
| aadClaimsAuthorization | Gets a JSON string containing the Azure AD Acl settings. | string |
| additionalLoginParams | Login parameters to send to the OpenID Connect authorization endpoint whena user logs in. Each parameter must be in the form "key=value". | string[] |
| allowedAudiences | Allowed audience values to consider when validating JSON Web Tokens issued byAzure Active Directory. Note that theClientIDvalue is always considered anallowed audience, regardless of this setting. | string[] |
| allowedExternalRedirectUrls | External URLs that can be redirected to as part of logging in or logging out of the app. Note that the query string part of the URL is ignored.This is an advanced setting typically only needed by Windows Store application backends.Note that URLs within the current domain are always implicitly allowed. | string[] |
| authFilePath | The path of the config file containing auth settings.If the path is relative, base will the site's root directory. | string |
| clientId | The Client ID of this relying party application, known as the client_id.This setting is required for enabling OpenID Connection authentication with Azure Active Directory orother 3rd party OpenID Connect providers.More information on OpenID Connect:http://openid.net/specs/openid-connect-core-1_0.html | string |
| clientSecret | The Client Secret of this relying party application (in Azure Active Directory, this is also referred to as the Key).This setting is optional. If no client secret is configured, the OpenID Connect implicit auth flow is used to authenticate end users.Otherwise, the OpenID Connect Authorization Code Flow is used to authenticate end users.More information on OpenID Connect:http://openid.net/specs/openid-connect-core-1_0.html | string |
| clientSecretCertificateThumbprint | An alternative to the client secret, that is the thumbprint of a certificate used for signing purposes. This property acts asa replacement for the Client Secret. It is also optional. | string |
| clientSecretSettingName | The app setting name that contains the client secret of the relying party application. | string |
| configVersion | The ConfigVersion of the Authentication / Authorization feature in use for the current app.The setting in this value can control the behavior of the control plane for Authentication / Authorization. | string |
| defaultProvider | The default authentication provider to use when multiple providers are configured.This setting is only needed if multiple providers are configured and the unauthenticated clientaction is set to "RedirectToLoginPage". | 'AzureActiveDirectory''Facebook''Github''Google''MicrosoftAccount''Twitter' |
| enabled | trueif the Authentication / Authorization feature is enabled for the current app; otherwise,false. | bool |
| facebookAppId | The App ID of the Facebook app used for login.This setting is required for enabling Facebook Login.Facebook Login documentation:https://developers.facebook.com/docs/facebook-login | string |
| facebookAppSecret | The App Secret of the Facebook app used for Facebook Login.This setting is required for enabling Facebook Login.Facebook Login documentation:https://developers.facebook.com/docs/facebook-login | string |
| facebookAppSecretSettingName | The app setting name that contains the app secret used for Facebook Login. | string |
| facebookOAuthScopes | The OAuth 2.0 scopes that will be requested as part of Facebook Login authentication.This setting is optional.Facebook Login documentation:https://developers.facebook.com/docs/facebook-login | string[] |
| gitHubClientId | The Client Id of the GitHub app used for login.This setting is required for enabling Github login | string |
| gitHubClientSecret | The Client Secret of the GitHub app used for Github Login.This setting is required for enabling Github login. | string |
| gitHubClientSecretSettingName | The app setting name that contains the client secret of the Githubapp used for GitHub Login. | string |
| gitHubOAuthScopes | The OAuth 2.0 scopes that will be requested as part of GitHub Login authentication.This setting is optional | string[] |
| googleClientId | The OpenID Connect Client ID for the Google web application.This setting is required for enabling Google Sign-In.Google Sign-In documentation:https://developers.google.com/identity/sign-in/web/ | string |
| googleClientSecret | The client secret associated with the Google web application.This setting is required for enabling Google Sign-In.Google Sign-In documentation:https://developers.google.com/identity/sign-in/web/ | string |
| googleClientSecretSettingName | The app setting name that contains the client secret associated withthe Google web application. | string |
| googleOAuthScopes | The OAuth 2.0 scopes that will be requested as part of Google Sign-In authentication.This setting is optional. If not specified, "openid", "profile", and "email" are used as default scopes.Google Sign-In documentation:https://developers.google.com/identity/sign-in/web/ | string[] |
| isAuthFromFile | "true" if the auth config settings should be read from a file,"false" otherwise | string |
| issuer | The OpenID Connect Issuer URI that represents the entity which issues access tokens for this application.When using Azure Active Directory, this value is the URI of the directory tenant, e.g.https://sts.windows.net/{tenant-guid}/.This URI is a case-sensitive identifier for the token issuer.More information on OpenID Connect Discovery:http://openid.net/specs/openid-connect-discovery-1_0.html | string |
| microsoftAccountClientId | The OAuth 2.0 client ID that was created for the app used for authentication.This setting is required for enabling Microsoft Account authentication.Microsoft Account OAuth documentation:https://dev.onedrive.com/auth/msa_oauth.htm | string |
| microsoftAccountClientSecret | The OAuth 2.0 client secret that was created for the app used for authentication.This setting is required for enabling Microsoft Account authentication.Microsoft Account OAuth documentation:https://dev.onedrive.com/auth/msa_oauth.htm | string |
| microsoftAccountClientSecretSettingName | The app setting name containing the OAuth 2.0 client secret that was created for theapp used for authentication. | string |
| microsoftAccountOAuthScopes | The OAuth 2.0 scopes that will be requested as part of Microsoft Account authentication.This setting is optional. If not specified, "wl.basic" is used as the default scope.Microsoft Account Scopes and permissions documentation:https://msdn.microsoft.com/library/dn631845.aspx | string[] |
| runtimeVersion | The RuntimeVersion of the Authentication / Authorization feature in use for the current app.The setting in this value can control the behavior of certain features in the Authentication / Authorization module. | string |
| tokenRefreshExtensionHours | The number of hours after session token expiration that a session token can be used tocall the token refresh API. The default is 72 hours. | int |
| tokenStoreEnabled | trueto durably store platform-specific security tokens that are obtained during login flows; otherwise,false.The default isfalse. | bool |
| twitterConsumerKey | The OAuth 1.0a consumer key of the Twitter application used for sign-in.This setting is required for enabling Twitter Sign-In.Twitter Sign-In documentation:https://dev.twitter.com/web/sign-in | string |
| twitterConsumerSecret | The OAuth 1.0a consumer secret of the Twitter application used for sign-in.This setting is required for enabling Twitter Sign-In.Twitter Sign-In documentation:https://dev.twitter.com/web/sign-in | string |
| twitterConsumerSecretSettingName | The app setting name that contains the OAuth 1.0a consumer secret of the Twitterapplication used for sign-in. | string |
| unauthenticatedClientAction | The action to take when an unauthenticated client attempts to access the app. | 'AllowAnonymous''RedirectToLoginPage' |
| validateIssuer | Gets a value indicating whether the issuer should be a valid HTTPS url and be validated as such. | bool |
## Microsoft.Web/sites/config@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/sites/config@2022-09-01"
  name = "authsettingsV2"
  parent_id = "string"
  body = jsonencode({
    properties = {
      globalValidation = {
        excludedPaths = [
          "string"
        ]
        redirectToProvider = "string"
        requireAuthentication = bool
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
        legacyMicrosoftAccount = {
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
        tokenStore = {
          azureBlobStorage = {
            sasUrlSettingName = "string"
          }
          enabled = bool
          fileSystem = {
            directory = "string"
          }
          tokenRefreshExtensionHours = int
        }
      }
      platform = {
        configFilePath = "string"
        enabled = bool
        runtimeVersion = "string"
      }
    }
    kind = "string"
  })
}

```

### sites/config-authsettingsV2

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'authsettingsV2' |
| kind | Kind of resource. | string |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:sites |
| properties | SiteAuthSettingsV2 resource specific properties | SiteAuthSettingsV2Properties |


### SiteAuthSettingsV2Properties

| Name | Description | Value |
|-|-|-|
| globalValidation | The configuration settings that determines the validation flow of users using App Service Authentication/Authorization. | GlobalValidation |
| httpSettings | The configuration settings of the HTTP requests for authentication and authorization requests made against App Service Authentication/Authorization. | HttpSettings |
| identityProviders | The configuration settings of each of the identity providers used to configure App Service Authentication/Authorization. | IdentityProviders |
| login | The configuration settings of the login flow of users using App Service Authentication/Authorization. | Login |
| platform | The configuration settings of the platform of App Service Authentication/Authorization. | AuthPlatform |


### GlobalValidation

| Name | Description | Value |
|-|-|-|
| excludedPaths | The paths for which unauthenticated flow would not be redirected to the login page. | string[] |
| redirectToProvider | The default authentication provider to use when multiple providers are configured.This setting is only needed if multiple providers are configured and the unauthenticated clientaction is set to "RedirectToLoginPage". | string |
| requireAuthentication | trueif the authentication flow is required any request is made; otherwise,false. | bool |
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
| legacyMicrosoftAccount | The configuration settings of the legacy Microsoft Account provider. | LegacyMicrosoftAccount |
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


### LegacyMicrosoftAccount

| Name | Description | Value |
|-|-|-|
| enabled | falseif the legacy Microsoft Account provider should not be enabled despite the set registration; otherwise,true. | bool |
| login | The configuration settings of the login flow. | LoginScopes |
| registration | The configuration settings of the app registration for the legacy Microsoft Account provider. | ClientRegistration |
| validation | The configuration settings of the legacy Microsoft Account provider token validation flow. | AllowedAudiencesValidation |


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
| tokenStore | The configuration settings of the token store. | TokenStore |


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


### TokenStore

| Name | Description | Value |
|-|-|-|
| azureBlobStorage | The configuration settings of the storage of the tokens if blob storage is used. | BlobStorageTokenStore |
| enabled | trueto durably store platform-specific security tokens that are obtained during login flows; otherwise,false.The default isfalse. | bool |
| fileSystem | The configuration settings of the storage of the tokens if a file system is used. | FileSystemTokenStore |
| tokenRefreshExtensionHours | The number of hours after session token expiration that a session token can be used tocall the token refresh API. The default is 72 hours. | int |


### BlobStorageTokenStore

| Name | Description | Value |
|-|-|-|
| sasUrlSettingName | The name of the app setting containing the SAS URL of the blob storage containing the tokens. | string |


### FileSystemTokenStore

| Name | Description | Value |
|-|-|-|
| directory | The directory in which the tokens will be stored. | string |


### AuthPlatform

| Name | Description | Value |
|-|-|-|
| configFilePath | The path of the config file containing auth settings if they come from a file.If the path is relative, base will the site's root directory. | string |
| enabled | trueif the Authentication / Authorization feature is enabled for the current app; otherwise,false. | bool |
| runtimeVersion | The RuntimeVersion of the Authentication / Authorization feature in use for the current app.The setting in this value can control the behavior of certain features in the Authentication / Authorization module. | string |
## Microsoft.Web/sites/config@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/sites/config@2022-09-01"
  name = "azurestorageaccounts"
  parent_id = "string"
  body = jsonencode({
    properties = {}
    kind = "string"
  })
}

```

### sites/config-azurestorageaccounts

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'azurestorageaccounts' |
| kind | Kind of resource. | string |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:sites |
| properties | Azure storage accounts. | object |
## Microsoft.Web/sites/config@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/sites/config@2022-09-01"
  name = "backup"
  parent_id = "string"
  body = jsonencode({
    properties = {
      backupName = "string"
      backupSchedule = {
        frequencyInterval = int
        frequencyUnit = "string"
        keepAtLeastOneBackup = bool
        retentionPeriodInDays = int
        startTime = "string"
      }
      databases = [
        {
          connectionString = "string"
          connectionStringName = "string"
          databaseType = "string"
          name = "string"
        }
      ]
      enabled = bool
      storageAccountUrl = "string"
    }
    kind = "string"
  })
}

```

### sites/config-backup

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'backup' |
| kind | Kind of resource. | string |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:sites |
| properties | BackupRequest resource specific properties | BackupRequestProperties |


### BackupRequestProperties

| Name | Description | Value |
|-|-|-|
| backupName | Name of the backup. | string |
| backupSchedule | Schedule for the backup if it is executed periodically. | BackupSchedule |
| databases | Databases included in the backup. | DatabaseBackupSetting[] |
| enabled | True if the backup schedule is enabled (must be included in that case), false if the backup schedule should be disabled. | bool |
| storageAccountUrl | SAS URL to the container. | string (required) |


### BackupSchedule

| Name | Description | Value |
|-|-|-|
| frequencyInterval | How often the backup should be executed (e.g. for weekly backup, this should be set to 7 and FrequencyUnit should be set to Day) | int (required) |
| frequencyUnit | The unit of time for how often the backup should be executed (e.g. for weekly backup, this should be set to Day and FrequencyInterval should be set to 7) | 'Day''Hour' (required) |
| keepAtLeastOneBackup | True if the retention policy should always keep at least one backup in the storage account, regardless how old it is; false otherwise. | bool (required) |
| retentionPeriodInDays | After how many days backups should be deleted. | int (required) |
| startTime | When the schedule should start working. | string |


### DatabaseBackupSetting

| Name | Description | Value |
|-|-|-|
| connectionString | Contains a connection string to a database which is being backed up or restored. If the restore should happen to a new database, the database name inside is the new one. | string |
| connectionStringName | Contains a connection string name that is linked to the SiteConfig.ConnectionStrings.This is used during restore with overwrite connection strings options. | string |
| databaseType | Database type (e.g. SqlAzure / MySql). | 'LocalMySql''MySql''PostgreSql''SqlAzure' (required) |
| name |  | string |
## Microsoft.Web/sites/config@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/sites/config@2022-09-01"
  name = "connectionstrings"
  parent_id = "string"
  body = jsonencode({
    properties = {}
    kind = "string"
  })
}

```

### sites/config-connectionstrings

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'connectionstrings' |
| kind | Kind of resource. | string |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:sites |
| properties | Connection strings. | object |
## Microsoft.Web/sites/config@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/sites/config@2022-09-01"
  name = "logs"
  parent_id = "string"
  body = jsonencode({
    properties = {
      applicationLogs = {
        azureBlobStorage = {
          level = "string"
          retentionInDays = int
          sasUrl = "string"
        }
        azureTableStorage = {
          level = "string"
          sasUrl = "string"
        }
        fileSystem = {
          level = "string"
        }
      }
      detailedErrorMessages = {
        enabled = bool
      }
      failedRequestsTracing = {
        enabled = bool
      }
      httpLogs = {
        azureBlobStorage = {
          enabled = bool
          retentionInDays = int
          sasUrl = "string"
        }
        fileSystem = {
          enabled = bool
          retentionInDays = int
          retentionInMb = int
        }
      }
    }
    kind = "string"
  })
}

```

### sites/config-logs

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'logs' |
| kind | Kind of resource. | string |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:sites |
| properties | SiteLogsConfig resource specific properties | SiteLogsConfigProperties |


### SiteLogsConfigProperties

| Name | Description | Value |
|-|-|-|
| applicationLogs | Application logs configuration. | ApplicationLogsConfig |
| detailedErrorMessages | Detailed error messages configuration. | EnabledConfig |
| failedRequestsTracing | Failed requests tracing configuration. | EnabledConfig |
| httpLogs | HTTP logs configuration. | HttpLogsConfig |


### ApplicationLogsConfig

| Name | Description | Value |
|-|-|-|
| azureBlobStorage | Application logs to blob storage configuration. | AzureBlobStorageApplicationLogsConfig |
| azureTableStorage | Application logs to azure table storage configuration. | AzureTableStorageApplicationLogsConfig |
| fileSystem | Application logs to file system configuration. | FileSystemApplicationLogsConfig |


### AzureBlobStorageApplicationLogsConfig

| Name | Description | Value |
|-|-|-|
| level | Log level. | 'Error''Information''Off''Verbose''Warning' |
| retentionInDays | Retention in days.Remove blobs older than X days.0 or lower means no retention. | int |
| sasUrl | SAS url to a azure blob container with read/write/list/delete permissions. | string |


### AzureTableStorageApplicationLogsConfig

| Name | Description | Value |
|-|-|-|
| level | Log level. | 'Error''Information''Off''Verbose''Warning' |
| sasUrl | SAS URL to an Azure table with add/query/delete permissions. | string (required) |


### FileSystemApplicationLogsConfig

| Name | Description | Value |
|-|-|-|
| level | Log level. | 'Error''Information''Off''Verbose''Warning' |


### EnabledConfig

| Name | Description | Value |
|-|-|-|
| enabled | True if configuration is enabled, false if it is disabled and null if configuration is not set. | bool |


### HttpLogsConfig

| Name | Description | Value |
|-|-|-|
| azureBlobStorage | Http logs to azure blob storage configuration. | AzureBlobStorageHttpLogsConfig |
| fileSystem | Http logs to file system configuration. | FileSystemHttpLogsConfig |


### AzureBlobStorageHttpLogsConfig

| Name | Description | Value |
|-|-|-|
| enabled | True if configuration is enabled, false if it is disabled and null if configuration is not set. | bool |
| retentionInDays | Retention in days.Remove blobs older than X days.0 or lower means no retention. | int |
| sasUrl | SAS url to a azure blob container with read/write/list/delete permissions. | string |


### FileSystemHttpLogsConfig

| Name | Description | Value |
|-|-|-|
| enabled | True if configuration is enabled, false if it is disabled and null if configuration is not set. | bool |
| retentionInDays | Retention in days.Remove files older than X days.0 or lower means no retention. | int |
| retentionInMb | Maximum size in megabytes that http log files can use.When reached old log files will be removed to make space for new ones.Value can range between 25 and 100. | int |
## Microsoft.Web/sites/config@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/sites/config@2022-09-01"
  name = "metadata"
  parent_id = "string"
  body = jsonencode({
    properties = {}
    kind = "string"
  })
}

```

### sites/config-metadata

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'metadata' |
| kind | Kind of resource. | string |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:sites |
| properties | Settings. | object |
## Microsoft.Web/sites/config@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/sites/config@2022-09-01"
  name = "pushsettings"
  parent_id = "string"
  body = jsonencode({
    properties = {
      dynamicTagsJson = "string"
      isPushEnabled = bool
      tagsRequiringAuth = "string"
      tagWhitelistJson = "string"
    }
    kind = "string"
  })
}

```

### sites/config-pushsettings

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'pushsettings' |
| kind | Kind of resource. | string |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:sites |
| properties | PushSettings resource specific properties | PushSettingsProperties |


### PushSettingsProperties

| Name | Description | Value |
|-|-|-|
| dynamicTagsJson | Gets or sets a JSON string containing a list of dynamic tags that will be evaluated from user claims in the push registration endpoint. | string |
| isPushEnabled | Gets or sets a flag indicating whether the Push endpoint is enabled. | bool (required) |
| tagsRequiringAuth | Gets or sets a JSON string containing a list of tags that require user authentication to be used in the push registration endpoint.Tags can consist of alphanumeric characters and the following:'_', '@', '#', '.', ':', '-'.Validation should be performed at the PushRequestHandler. | string |
| tagWhitelistJson | Gets or sets a JSON string containing a list of tags that are allowed for use by the push registration endpoint. | string |
## Microsoft.Web/sites/config@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/sites/config@2022-09-01"
  name = "slotConfigNames"
  parent_id = "string"
  body = jsonencode({
    properties = {
      appSettingNames = [
        "string"
      ]
      azureStorageConfigNames = [
        "string"
      ]
      connectionStringNames = [
        "string"
      ]
    }
    kind = "string"
  })
}

```

### sites/config-slotConfigNames

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'slotConfigNames' |
| kind | Kind of resource. | string |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:sites |
| properties | Core resource properties | SlotConfigNames |


### SlotConfigNames

| Name | Description | Value |
|-|-|-|
| appSettingNames | List of application settings names. | string[] |
| azureStorageConfigNames | List of external Azure storage account identifiers. | string[] |
| connectionStringNames | List of connection string names. | string[] |
## Microsoft.Web/sites/config@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/sites/config@2022-09-01"
  name = "web"
  parent_id = "string"
  body = jsonencode({
    properties = {
      acrUseManagedIdentityCreds = bool
      acrUserManagedIdentityID = "string"
      alwaysOn = bool
      apiDefinition = {
        url = "string"
      }
      apiManagementConfig = {
        id = "string"
      }
      appCommandLine = "string"
      appSettings = [
        {
          name = "string"
          value = "string"
        }
      ]
      autoHealEnabled = bool
      autoHealRules = {
        actions = {
          actionType = "string"
          customAction = {
            exe = "string"
            parameters = "string"
          }
          minProcessExecutionTime = "string"
        }
        triggers = {
          privateBytesInKB = int
          requests = {
            count = int
            timeInterval = "string"
          }
          slowRequests = {
            count = int
            path = "string"
            timeInterval = "string"
            timeTaken = "string"
          }
          slowRequestsWithPath = [
            {
              count = int
              path = "string"
              timeInterval = "string"
              timeTaken = "string"
            }
          ]
          statusCodes = [
            {
              count = int
              path = "string"
              status = int
              subStatus = int
              timeInterval = "string"
              win32Status = int
            }
          ]
          statusCodesRange = [
            {
              count = int
              path = "string"
              statusCodes = "string"
              timeInterval = "string"
            }
          ]
        }
      }
      autoSwapSlotName = "string"
      azureStorageAccounts = {}
      connectionStrings = [
        {
          connectionString = "string"
          name = "string"
          type = "string"
        }
      ]
      cors = {
        allowedOrigins = [
          "string"
        ]
        supportCredentials = bool
      }
      defaultDocuments = [
        "string"
      ]
      detailedErrorLoggingEnabled = bool
      documentRoot = "string"
      elasticWebAppScaleLimit = int
      experiments = {
        rampUpRules = [
          {
            actionHostName = "string"
            changeDecisionCallbackUrl = "string"
            changeIntervalInMinutes = int
            changeStep = int
            maxReroutePercentage = int
            minReroutePercentage = int
            name = "string"
            reroutePercentage = int
          }
        ]
      }
      ftpsState = "string"
      functionAppScaleLimit = int
      functionsRuntimeScaleMonitoringEnabled = bool
      handlerMappings = [
        {
          arguments = "string"
          extension = "string"
          scriptProcessor = "string"
        }
      ]
      healthCheckPath = "string"
      http20Enabled = bool
      httpLoggingEnabled = bool
      ipSecurityRestrictions = [
        {
          action = "string"
          description = "string"
          headers = {}
          ipAddress = "string"
          name = "string"
          priority = int
          subnetMask = "string"
          subnetTrafficTag = int
          tag = "string"
          vnetSubnetResourceId = "string"
          vnetTrafficTag = int
        }
      ]
      ipSecurityRestrictionsDefaultAction = "string"
      javaContainer = "string"
      javaContainerVersion = "string"
      javaVersion = "string"
      keyVaultReferenceIdentity = "string"
      limits = {
        maxDiskSizeInMb = int
        maxMemoryInMb = int
        maxPercentageCpu = int
      }
      linuxFxVersion = "string"
      loadBalancing = "string"
      localMySqlEnabled = bool
      logsDirectorySizeLimit = int
      managedPipelineMode = "string"
      managedServiceIdentityId = int
      metadata = [
        {
          name = "string"
          value = "string"
        }
      ]
      minimumElasticInstanceCount = int
      minTlsVersion = "string"
      netFrameworkVersion = "string"
      nodeVersion = "string"
      numberOfWorkers = int
      phpVersion = "string"
      powerShellVersion = "string"
      preWarmedInstanceCount = int
      publicNetworkAccess = "string"
      publishingUsername = "string"
      push = {
        kind = "string"
        properties = {
          dynamicTagsJson = "string"
          isPushEnabled = bool
          tagsRequiringAuth = "string"
          tagWhitelistJson = "string"
        }
      }
      pythonVersion = "string"
      remoteDebuggingEnabled = bool
      remoteDebuggingVersion = "string"
      requestTracingEnabled = bool
      requestTracingExpirationTime = "string"
      scmIpSecurityRestrictions = [
        {
          action = "string"
          description = "string"
          headers = {}
          ipAddress = "string"
          name = "string"
          priority = int
          subnetMask = "string"
          subnetTrafficTag = int
          tag = "string"
          vnetSubnetResourceId = "string"
          vnetTrafficTag = int
        }
      ]
      scmIpSecurityRestrictionsDefaultAction = "string"
      scmIpSecurityRestrictionsUseMain = bool
      scmMinTlsVersion = "string"
      scmType = "string"
      tracingOptions = "string"
      use32BitWorkerProcess = bool
      virtualApplications = [
        {
          physicalPath = "string"
          preloadEnabled = bool
          virtualDirectories = [
            {
              physicalPath = "string"
              virtualPath = "string"
            }
          ]
          virtualPath = "string"
        }
      ]
      vnetName = "string"
      vnetPrivatePortsCount = int
      vnetRouteAllEnabled = bool
      websiteTimeZone = "string"
      webSocketsEnabled = bool
      windowsFxVersion = "string"
      xManagedServiceIdentityId = int
    }
    kind = "string"
  })
}

```

### sites/config-web

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'web' |
| kind | Kind of resource. | string |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:sites |
| properties | Core resource properties | SiteConfig |


### SiteConfig

| Name | Description | Value |
|-|-|-|
| acrUseManagedIdentityCreds | Flag to use Managed Identity Creds for ACR pull | bool |
| acrUserManagedIdentityID | If using user managed identity, the user managed identity ClientId | string |
| alwaysOn | trueif Always On is enabled; otherwise,false. | bool |
| apiDefinition | Information about the formal API definition for the app. | ApiDefinitionInfo |
| apiManagementConfig | Azure API management settings linked to the app. | ApiManagementConfig |
| appCommandLine | App command line to launch. | string |
| appSettings | Application settings. | NameValuePair[] |
| autoHealEnabled | trueif Auto Heal is enabled; otherwise,false. | bool |
| autoHealRules | Auto Heal rules. | AutoHealRules |
| autoSwapSlotName | Auto-swap slot name. | string |
| azureStorageAccounts | List of Azure Storage Accounts. | object |
| connectionStrings | Connection strings. | ConnStringInfo[] |
| cors | Cross-Origin Resource Sharing (CORS) settings. | CorsSettings |
| defaultDocuments | Default documents. | string[] |
| detailedErrorLoggingEnabled | trueif detailed error logging is enabled; otherwise,false. | bool |
| documentRoot | Document root. | string |
| elasticWebAppScaleLimit | Maximum number of workers that a site can scale out to.This setting only applies to apps in plans where ElasticScaleEnabled istrue | int |
| experiments | This is work around for polymorphic types. | Experiments |
| ftpsState | State of FTP / FTPS service | 'AllAllowed''Disabled''FtpsOnly' |
| functionAppScaleLimit | Maximum number of workers that a site can scale out to.This setting only applies to the Consumption and Elastic Premium Plans | int |
| functionsRuntimeScaleMonitoringEnabled | Gets or sets a value indicating whether functions runtime scale monitoring is enabled. When enabled,the ScaleController will not monitor event sources directly, but will instead call to theruntime to get scale status. | bool |
| handlerMappings | Handler mappings. | HandlerMapping[] |
| healthCheckPath | Health check path | string |
| http20Enabled | Http20Enabled: configures a web site to allow clients to connect over http2.0 | bool |
| httpLoggingEnabled | trueif HTTP logging is enabled; otherwise,false. | bool |
| ipSecurityRestrictions | IP security restrictions for main. | IpSecurityRestriction[] |
| ipSecurityRestrictionsDefaultAction | Default action for main access restriction if no rules are matched. | 'Allow''Deny' |
| javaContainer | Java container. | string |
| javaContainerVersion | Java container version. | string |
| javaVersion | Java version. | string |
| keyVaultReferenceIdentity | Identity to use for Key Vault Reference authentication. | string |
| limits | Site limits. | SiteLimits |
| linuxFxVersion | Linux App Framework and version | string |
| loadBalancing | Site load balancing. | 'LeastRequests''LeastResponseTime''PerSiteRoundRobin''RequestHash''WeightedRoundRobin''WeightedTotalTraffic' |
| localMySqlEnabled | trueto enable local MySQL; otherwise,false. | bool |
| logsDirectorySizeLimit | HTTP logs directory size limit. | int |
| managedPipelineMode | Managed pipeline mode. | 'Classic''Integrated' |
| managedServiceIdentityId | Managed Service Identity Id | int |
| metadata | Application metadata. This property cannot be retrieved, since it may contain secrets. | NameValuePair[] |
| minimumElasticInstanceCount | Number of minimum instance count for a siteThis setting only applies to the Elastic Plans | int |
| minTlsVersion | MinTlsVersion: configures the minimum version of TLS required for SSL requests | '1.0''1.1''1.2' |
| netFrameworkVersion | .NET Framework version. | string |
| nodeVersion | Version of Node.js. | string |
| numberOfWorkers | Number of workers. | int |
| phpVersion | Version of PHP. | string |
| powerShellVersion | Version of PowerShell. | string |
| preWarmedInstanceCount | Number of preWarmed instances.This setting only applies to the Consumption and Elastic Plans | int |
| publicNetworkAccess | Property to allow or block all public traffic. | string |
| publishingUsername | Publishing user name. | string |
| push | Push endpoint settings. | PushSettings |
| pythonVersion | Version of Python. | string |
| remoteDebuggingEnabled | trueif remote debugging is enabled; otherwise,false. | bool |
| remoteDebuggingVersion | Remote debugging version. | string |
| requestTracingEnabled | trueif request tracing is enabled; otherwise,false. | bool |
| requestTracingExpirationTime | Request tracing expiration time. | string |
| scmIpSecurityRestrictions | IP security restrictions for scm. | IpSecurityRestriction[] |
| scmIpSecurityRestrictionsDefaultAction | Default action for scm access restriction if no rules are matched. | 'Allow''Deny' |
| scmIpSecurityRestrictionsUseMain | IP security restrictions for scm to use main. | bool |
| scmMinTlsVersion | ScmMinTlsVersion: configures the minimum version of TLS required for SSL requests for SCM site | '1.0''1.1''1.2' |
| scmType | SCM type. | 'BitbucketGit''BitbucketHg''CodePlexGit''CodePlexHg''Dropbox''ExternalGit''ExternalHg''GitHub''LocalGit''None''OneDrive''Tfs''VSO''VSTSRM' |
| tracingOptions | Tracing options. | string |
| use32BitWorkerProcess | trueto use 32-bit worker process; otherwise,false. | bool |
| virtualApplications | Virtual applications. | VirtualApplication[] |
| vnetName | Virtual Network name. | string |
| vnetPrivatePortsCount | The number of private ports assigned to this app. These will be assigned dynamically on runtime. | int |
| vnetRouteAllEnabled | Virtual Network Route All enabled. This causes all outbound traffic to have Virtual Network Security Groups and User Defined Routes applied. | bool |
| websiteTimeZone | Sets the time zone a site uses for generating timestamps. Compatible with Linux and Windows App Service. Setting the WEBSITE_TIME_ZONE app setting takes precedence over this config. For Linux, expects tz database valueshttps://www.iana.org/time-zones(for a quick reference seehttps://en.wikipedia.org/wiki/List_of_tz_database_time_zones). For Windows, expects one of the time zones listed under HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Time Zones | string |
| webSocketsEnabled | trueif WebSocket is enabled; otherwise,false. | bool |
| windowsFxVersion | Xenon App Framework and version | string |
| xManagedServiceIdentityId | Explicit Managed Service Identity Id | int |


### ApiDefinitionInfo

| Name | Description | Value |
|-|-|-|
| url | The URL of the API definition. | string |


### ApiManagementConfig

| Name | Description | Value |
|-|-|-|
| id | APIM-Api Identifier. | string |


### NameValuePair

| Name | Description | Value |
|-|-|-|
| name | Pair name. | string |
| value | Pair value. | string |


### AutoHealRules

| Name | Description | Value |
|-|-|-|
| actions | Actions to be executed when a rule is triggered. | AutoHealActions |
| triggers | Conditions that describe when to execute the auto-heal actions. | AutoHealTriggers |


### AutoHealActions

| Name | Description | Value |
|-|-|-|
| actionType | Predefined action to be taken. | 'CustomAction''LogEvent''Recycle' |
| customAction | Custom action to be taken. | AutoHealCustomAction |
| minProcessExecutionTime | Minimum time the process must executebefore taking the action | string |


### AutoHealCustomAction

| Name | Description | Value |
|-|-|-|
| exe | Executable to be run. | string |
| parameters | Parameters for the executable. | string |


### AutoHealTriggers

| Name | Description | Value |
|-|-|-|
| privateBytesInKB | A rule based on private bytes. | int |
| requests | A rule based on total requests. | RequestsBasedTrigger |
| slowRequests | A rule based on request execution time. | SlowRequestsBasedTrigger |
| slowRequestsWithPath | A rule based on multiple Slow Requests Rule with path | SlowRequestsBasedTrigger[] |
| statusCodes | A rule based on status codes. | StatusCodesBasedTrigger[] |
| statusCodesRange | A rule based on status codes ranges. | StatusCodesRangeBasedTrigger[] |


### RequestsBasedTrigger

| Name | Description | Value |
|-|-|-|
| count | Request Count. | int |
| timeInterval | Time interval. | string |


### SlowRequestsBasedTrigger

| Name | Description | Value |
|-|-|-|
| count | Request Count. | int |
| path | Request Path. | string |
| timeInterval | Time interval. | string |
| timeTaken | Time taken. | string |


### StatusCodesBasedTrigger

| Name | Description | Value |
|-|-|-|
| count | Request Count. | int |
| path | Request Path | string |
| status | HTTP status code. | int |
| subStatus | Request Sub Status. | int |
| timeInterval | Time interval. | string |
| win32Status | Win32 error code. | int |


### StatusCodesRangeBasedTrigger

| Name | Description | Value |
|-|-|-|
| count | Request Count. | int |
| path |  | string |
| statusCodes | HTTP status code. | string |
| timeInterval | Time interval. | string |


### ConnStringInfo

| Name | Description | Value |
|-|-|-|
| connectionString | Connection string value. | string |
| name | Name of connection string. | string |
| type | Type of database. | 'ApiHub''Custom''DocDb''EventHub''MySql''NotificationHub''PostgreSQL''RedisCache''SQLAzure''SQLServer''ServiceBus' |


### CorsSettings

| Name | Description | Value |
|-|-|-|
| allowedOrigins | Gets or sets the list of origins that should be allowed to make cross-origincalls (for example:http://example.com:12345). Use "*" to allow all. | string[] |
| supportCredentials | Gets or sets whether CORS requests with credentials are allowed. Seehttps://developer.mozilla.org/en-US/docs/Web/HTTP/CORS#Requests_with_credentialsfor more details. | bool |


### Experiments

| Name | Description | Value |
|-|-|-|
| rampUpRules | List of ramp-up rules. | RampUpRule[] |


### RampUpRule

| Name | Description | Value |
|-|-|-|
| actionHostName | Hostname of a slot to which the traffic will be redirected if decided to. E.g. myapp-stage.azurewebsites.net. | string |
| changeDecisionCallbackUrl | Custom decision algorithm can be provided in TiPCallback site extension which URL can be specified. See TiPCallback site extension for the scaffold and contracts.https://www.siteextensions.net/packages/TiPCallback/ | string |
| changeIntervalInMinutes | Specifies interval in minutes to reevaluate ReroutePercentage. | int |
| changeStep | In auto ramp up scenario this is the step to add/remove fromReroutePercentageuntil it reaches \nMinReroutePercentageorMaxReroutePercentage. Site metrics are checked every N minutes specified inChangeIntervalInMinutes.\nCustom decision algorithmcan be provided in TiPCallback site extension which URL can be specified inChangeDecisionCallbackUrl. | int |
| maxReroutePercentage | Specifies upper boundary below which ReroutePercentage will stay. | int |
| minReroutePercentage | Specifies lower boundary above which ReroutePercentage will stay. | int |
| name | Name of the routing rule. The recommended name would be to point to the slot which will receive the traffic in the experiment. | string |
| reroutePercentage | Percentage of the traffic which will be redirected toActionHostName. | int |


### HandlerMapping

| Name | Description | Value |
|-|-|-|
| arguments | Command-line arguments to be passed to the script processor. | string |
| extension | Requests with this extension will be handled using the specified FastCGI application. | string |
| scriptProcessor | The absolute path to the FastCGI application. | string |


### IpSecurityRestriction

| Name | Description | Value |
|-|-|-|
| action | Allow or Deny access for this IP range. | string |
| description | IP restriction rule description. | string |
| headers | IP restriction rule headers.X-Forwarded-Host (https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Forwarded-Host#Examples).The matching logic is ..- If the property is null or empty (default), all hosts(or lack of) are allowed.- A value is compared using ordinal-ignore-case (excluding port number).- Subdomain wildcards are permitted but don't match the root domain. For example, *.contoso.com matches the subdomain foo.contoso.combut not the root domain contoso.com or multi-level foo.bar.contoso.com- Unicode host names are allowed but are converted to Punycode for matching.X-Forwarded-For (https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Forwarded-For#Examples).The matching logic is ..- If the property is null or empty (default), any forwarded-for chains (or lack of) are allowed.- If any address (excluding port number) in the chain (comma separated) matches the CIDR defined by the property.X-Azure-FDID and X-FD-HealthProbe.The matching logic is exact match. | object |
| ipAddress | IP address the security restriction is valid for.It can be in form of pure ipv4 address (required SubnetMask property) orCIDR notation such as ipv4/mask (leading bit match). For CIDR,SubnetMask property must not be specified. | string |
| name | IP restriction rule name. | string |
| priority | Priority of IP restriction rule. | int |
| subnetMask | Subnet mask for the range of IP addresses the restriction is valid for. | string |
| subnetTrafficTag | (internal) Subnet traffic tag | int |
| tag | Defines what this IP filter will be used for. This is to support IP filtering on proxies. | 'Default''ServiceTag''XffProxy' |
| vnetSubnetResourceId | Virtual network resource id | string |
| vnetTrafficTag | (internal) Vnet traffic tag | int |


### SiteLimits

| Name | Description | Value |
|-|-|-|
| maxDiskSizeInMb | Maximum allowed disk size usage in MB. | int |
| maxMemoryInMb | Maximum allowed memory usage in MB. | int |
| maxPercentageCpu | Maximum allowed CPU usage percentage. | int |


### PushSettings

| Name | Description | Value |
|-|-|-|
| kind | Kind of resource. | string |
| properties | PushSettings resource specific properties | PushSettingsProperties |


### PushSettingsProperties

| Name | Description | Value |
|-|-|-|
| dynamicTagsJson | Gets or sets a JSON string containing a list of dynamic tags that will be evaluated from user claims in the push registration endpoint. | string |
| isPushEnabled | Gets or sets a flag indicating whether the Push endpoint is enabled. | bool (required) |
| tagsRequiringAuth | Gets or sets a JSON string containing a list of tags that require user authentication to be used in the push registration endpoint.Tags can consist of alphanumeric characters and the following:'_', '@', '#', '.', ':', '-'.Validation should be performed at the PushRequestHandler. | string |
| tagWhitelistJson | Gets or sets a JSON string containing a list of tags that are allowed for use by the push registration endpoint. | string |


### VirtualApplication

| Name | Description | Value |
|-|-|-|
| physicalPath | Physical path. | string |
| preloadEnabled | trueif preloading is enabled; otherwise,false. | bool |
| virtualDirectories | Virtual directories for virtual application. | VirtualDirectory[] |
| virtualPath | Virtual path. | string |


### VirtualDirectory

| Name | Description | Value |
|-|-|-|
| physicalPath | Physical path. | string |
| virtualPath | Path to virtual application. | string |
## Microsoft.Web/sites/deployments@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/sites/deployments@2022-09-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      active = bool
      author = "string"
      author_email = "string"
      deployer = "string"
      details = "string"
      end_time = "string"
      message = "string"
      start_time = "string"
      status = int
    }
    kind = "string"
  })
}

```

### sites/deployments

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| kind | Kind of resource. | string |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:sites |
| properties | Deployment resource specific properties | DeploymentProperties |


### DeploymentProperties

| Name | Description | Value |
|-|-|-|
| active | True if deployment is currently active, false if completed and null if not started. | bool |
| author | Who authored the deployment. | string |
| author_email | Author email. | string |
| deployer | Who performed the deployment. | string |
| details | Details on deployment. | string |
| end_time | End time. | string |
| message | Details about deployment status. | string |
| start_time | Start time. | string |
| status | Deployment status. | int |
## Microsoft.Web/sites/domainOwnershipIdentifiers@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/sites/domainOwnershipIdentifiers@2022-09-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      id = "string"
    }
    kind = "string"
  })
}

```

### sites/domainOwnershipIdentifiers

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| kind | Kind of resource. | string |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:sites |
| properties | Identifier resource specific properties | IdentifierProperties |


### IdentifierProperties

| Name | Description | Value |
|-|-|-|
| id | String representation of the identity. | string |
## Microsoft.Web/sites/extensions@2021-02-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/sites/extensions@2021-02-01"
  name = "MSDeploy"
  parent_id = "string"
  body = jsonencode({
    properties = {
      appOffline = bool
      connectionString = "string"
      dbType = "string"
      packageUri = "string"
      setParameters = {}
      setParametersXmlFileUri = "string"
      skipAppData = bool
    }
    kind = "string"
  })
}

```

### sites/extensions

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'MSDeploy' |
| kind | Kind of resource. | string |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:sites |
| properties | Core resource properties | MSDeployCoreOrMSDeployStatusProperties |


### MSDeployCoreOrMSDeployStatusProperties

| Name | Description | Value |
|-|-|-|
| appOffline | Sets the AppOffline rule while the MSDeploy operation executes.Setting isfalseby default. | bool |
| connectionString | SQL Connection String | string |
| dbType | Database Type | string |
| packageUri | Package URI | string |
| setParameters | MSDeploy Parameters. Must not be set if SetParametersXmlFileUri is used. | object |
| setParametersXmlFileUri | URI of MSDeploy Parameters file. Must not be set if SetParameters is used. | string |
| skipAppData | Controls whether the MSDeploy operation skips the App_Data directory.If set totrue, the existing App_Data directory on the destinationwill not be deleted, and any App_Data directory in the source will be ignored.Setting isfalseby default. | bool |
## Microsoft.Web/sites/extensions@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/sites/extensions@2022-09-01"
  name = "MSDeploy"
  parent_id = "string"
  body = jsonencode({
    properties = {
      appOffline = bool
      connectionString = "string"
      dbType = "string"
      packageUri = "string"
      setParameters = {}
      setParametersXmlFileUri = "string"
      skipAppData = bool
    }
    kind = "string"
  })
}

```

### sites/extensions-MSDeploy

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'MSDeploy' |
| kind | Kind of resource. | string |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:sites |
| properties | Core resource properties | MSDeployCoreOrMSDeployStatusProperties |


### MSDeployCoreOrMSDeployStatusProperties

| Name | Description | Value |
|-|-|-|
| appOffline | Sets the AppOffline rule while the MSDeploy operation executes.Setting isfalseby default. | bool |
| connectionString | SQL Connection String | string |
| dbType | Database Type | string |
| packageUri | Package URI | string |
| setParameters | MSDeploy Parameters. Must not be set if SetParametersXmlFileUri is used. | object |
| setParametersXmlFileUri | URI of MSDeploy Parameters file. Must not be set if SetParameters is used. | string |
| skipAppData | Controls whether the MSDeploy operation skips the App_Data directory.If set totrue, the existing App_Data directory on the destinationwill not be deleted, and any App_Data directory in the source will be ignored.Setting isfalseby default. | bool |
## Microsoft.Web/sites/extensions@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/sites/extensions@2022-09-01"
  name = "onedeploy"
  parent_id = "string"
}

```

### sites/extensions-onedeploy

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'onedeploy' |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:sites |
## Microsoft.Web/sites/functions@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/sites/functions@2022-09-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      config_href = "string"
      files = {}
      function_app_id = "string"
      href = "string"
      invoke_url_template = "string"
      isDisabled = bool
      language = "string"
      script_href = "string"
      script_root_path_href = "string"
      secrets_file_href = "string"
      test_data = "string"
      test_data_href = "string"
    }
    kind = "string"
  })
}

```

### sites/functions

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| kind | Kind of resource. | string |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:sites |
| properties | FunctionEnvelope resource specific properties | FunctionEnvelopeProperties |


### FunctionEnvelopeProperties

| Name | Description | Value |
|-|-|-|
| config | Config information. | For Bicep, you can use theany()function. |
| config_href | Config URI. | string |
| files | File list. | object |
| function_app_id | Function App ID. | string |
| href | Function URI. | string |
| invoke_url_template | The invocation URL | string |
| isDisabled | Gets or sets a value indicating whether the function is disabled | bool |
| language | The function language | string |
| script_href | Script URI. | string |
| script_root_path_href | Script root path URI. | string |
| secrets_file_href | Secrets file URI. | string |
| test_data | Test data used when testing via the Azure Portal. | string |
| test_data_href | Test data URI. | string |
## Microsoft.Web/sites/functions/keys@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/sites/functions/keys@2022-09-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    value = "string"
  })
}

```

### sites/functions/keys

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:functions |
| value | Key value | string |
## Microsoft.Web/sites/hostNameBindings@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/sites/hostNameBindings@2022-09-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      azureResourceName = "string"
      azureResourceType = "string"
      customHostNameDnsRecordType = "string"
      domainId = "string"
      hostNameType = "string"
      siteName = "string"
      sslState = "string"
      thumbprint = "string"
    }
    kind = "string"
  })
}

```

### sites/hostNameBindings

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| kind | Kind of resource. | string |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:sites |
| properties | HostNameBinding resource specific properties | HostNameBindingProperties |


### HostNameBindingProperties

| Name | Description | Value |
|-|-|-|
| azureResourceName | Azure resource name. | string |
| azureResourceType | Azure resource type. | 'TrafficManager''Website' |
| customHostNameDnsRecordType | Custom DNS record type. | 'A''CName' |
| domainId | Fully qualified ARM domain resource URI. | string |
| hostNameType | Hostname type. | 'Managed''Verified' |
| siteName | App Service app name. | string |
| sslState | SSL type | 'Disabled''IpBasedEnabled''SniEnabled' |
| thumbprint | SSL certificate thumbprint | string |
## Microsoft.Web/sites/hybridconnection@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/sites/hybridconnection@2022-09-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      biztalkUri = "string"
      entityConnectionString = "string"
      entityName = "string"
      hostname = "string"
      port = int
      resourceConnectionString = "string"
      resourceType = "string"
    }
    kind = "string"
  })
}

```

### sites/hybridconnection

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| kind | Kind of resource. | string |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:sites |
| properties | RelayServiceConnectionEntity resource specific properties | RelayServiceConnectionEntityProperties |


### RelayServiceConnectionEntityProperties

| Name | Description | Value |
|-|-|-|
| biztalkUri |  | string |
| entityConnectionString |  | string |
| entityName |  | string |
| hostname |  | string |
| port |  | int |
| resourceConnectionString |  | string |
| resourceType |  | string |
## Microsoft.Web/sites/hybridConnectionNamespaces/relays@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/sites/hybridConnectionNamespaces/relays@2022-09-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      hostname = "string"
      port = int
      relayArmUri = "string"
      relayName = "string"
      sendKeyName = "string"
      sendKeyValue = "string"
      serviceBusNamespace = "string"
      serviceBusSuffix = "string"
    }
    kind = "string"
  })
}

```

### sites/hybridConnectionNamespaces/relays

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| kind | Kind of resource. | string |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type: hybridConnectionNamespaces |
| properties | HybridConnection resource specific properties | HybridConnectionProperties |


### HybridConnectionProperties

| Name | Description | Value |
|-|-|-|
| hostname | The hostname of the endpoint. | string |
| port | The port of the endpoint. | int |
| relayArmUri | The ARM URI to the Service Bus relay. | string |
| relayName | The name of the Service Bus relay. | string |
| sendKeyName | The name of the Service Bus key which has Send permissions. This is used to authenticate to Service Bus. | string |
| sendKeyValue | The value of the Service Bus key. This is used to authenticate to Service Bus. In ARM this key will not be returnednormally, use the POST /listKeys API instead. | string |
| serviceBusNamespace | The name of the Service Bus namespace. | string |
| serviceBusSuffix | The suffix for the service bus endpoint. By default this is .servicebus.windows.net | string |
## Microsoft.Web/sites/instances/extensions@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/sites/instances/extensions@2022-09-01"
  name = "MSDeploy"
  parent_id = "string"
  body = jsonencode({
    properties = {
      appOffline = bool
      connectionString = "string"
      dbType = "string"
      packageUri = "string"
      setParameters = {}
      setParametersXmlFileUri = "string"
      skipAppData = bool
    }
    kind = "string"
  })
}

```

### sites/instances/extensions

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'MSDeploy' |
| kind | Kind of resource. | string |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type: instances |
| properties | Core resource properties | MSDeployCoreOrMSDeployStatusProperties |


### MSDeployCoreOrMSDeployStatusProperties

| Name | Description | Value |
|-|-|-|
| appOffline | Sets the AppOffline rule while the MSDeploy operation executes.Setting isfalseby default. | bool |
| connectionString | SQL Connection String | string |
| dbType | Database Type | string |
| packageUri | Package URI | string |
| setParameters | MSDeploy Parameters. Must not be set if SetParametersXmlFileUri is used. | object |
| setParametersXmlFileUri | URI of MSDeploy Parameters file. Must not be set if SetParameters is used. | string |
| skipAppData | Controls whether the MSDeploy operation skips the App_Data directory.If set totrue, the existing App_Data directory on the destinationwill not be deleted, and any App_Data directory in the source will be ignored.Setting isfalseby default. | bool |
## Microsoft.Web/sites/networkConfig@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/sites/networkConfig@2022-09-01"
  name = "virtualNetwork"
  parent_id = "string"
  body = jsonencode({
    properties = {
      subnetResourceId = "string"
      swiftSupported = bool
    }
    kind = "string"
  })
}

```

### sites/networkConfig

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'virtualNetwork' |
| kind | Kind of resource. | string |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:sites |
| properties | SwiftVirtualNetwork resource specific properties | SwiftVirtualNetworkProperties |


### SwiftVirtualNetworkProperties

| Name | Description | Value |
|-|-|-|
| subnetResourceId | The Virtual Network subnet's resource ID. This is the subnet that this Web App will join. This subnet must have a delegation to Microsoft.Web/serverFarms defined first. | string |
| swiftSupported | A flag that specifies if the scale unit this Web App is on supports Swift integration. | bool |
## Microsoft.Web/sites/premieraddons@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/sites/premieraddons@2022-09-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      marketplaceOffer = "string"
      marketplacePublisher = "string"
      product = "string"
      sku = "string"
      vendor = "string"
    }
    kind = "string"
  })
}

```

### sites/premieraddons

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | Resource Location. | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| kind | Kind of resource. | string |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:sites |
| properties | PremierAddOn resource specific properties | PremierAddOnProperties |


### PremierAddOnProperties

| Name | Description | Value |
|-|-|-|
| marketplaceOffer | Premier add on Marketplace offer. | string |
| marketplacePublisher | Premier add on Marketplace publisher. | string |
| product | Premier add on Product. | string |
| sku | Premier add on SKU. | string |
| vendor | Premier add on Vendor. | string |
## Microsoft.Web/sites/privateAccess@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/sites/privateAccess@2022-09-01"
  name = "virtualNetworks"
  parent_id = "string"
  body = jsonencode({
    properties = {
      enabled = bool
      virtualNetworks = [
        {
          key = int
          name = "string"
          resourceId = "string"
          subnets = [
            {
              key = int
              name = "string"
            }
          ]
        }
      ]
    }
    kind = "string"
  })
}

```

### sites/privateAccess

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'virtualNetworks' |
| kind | Kind of resource. | string |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:sites |
| properties | PrivateAccess resource specific properties | PrivateAccessProperties |


### PrivateAccessProperties

| Name | Description | Value |
|-|-|-|
| enabled | Whether private access is enabled or not. | bool |
| virtualNetworks | The Virtual Networks (and subnets) allowed to access the site privately. | PrivateAccessVirtualNetwork[] |


### PrivateAccessVirtualNetwork

| Name | Description | Value |
|-|-|-|
| key | The key (ID) of the Virtual Network. | int |
| name | The name of the Virtual Network. | string |
| resourceId | The ARM uri of the Virtual Network | string |
| subnets | A List of subnets that access is allowed to on this Virtual Network. An empty array (but not null) is interpreted to mean that all subnets are allowed within this Virtual Network. | PrivateAccessSubnet[] |


### PrivateAccessSubnet

| Name | Description | Value |
|-|-|-|
| key | The key (ID) of the subnet. | int |
| name | The name of the subnet. | string |
## Microsoft.Web/sites/privateEndpointConnections@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/sites/privateEndpointConnections@2022-09-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      privateLinkServiceConnectionState = {
        actionsRequired = "string"
        description = "string"
        status = "string"
      }
    }
    kind = "string"
  })
}

```

### sites/privateEndpointConnections

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| kind | Kind of resource. | string |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:sites |
| properties | Core resource properties | PrivateLinkConnectionApprovalRequestOrRemotePrivateE... |


### PrivateLinkConnectionApprovalRequestOrRemotePrivateE...

| Name | Description | Value |
|-|-|-|
| privateLinkServiceConnectionState | The state of a private link connection | PrivateLinkConnectionState |


### PrivateLinkConnectionState

| Name | Description | Value |
|-|-|-|
| actionsRequired | ActionsRequired for a private link connection | string |
| description | Description of a private link connection | string |
| status | Status of a private link connection | string |
## Microsoft.Web/sites/publicCertificates@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/sites/publicCertificates@2022-09-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      publicCertificateLocation = "string"
    }
    kind = "string"
  })
}

```

### sites/publicCertificates

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| kind | Kind of resource. | string |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:sites |
| properties | PublicCertificate resource specific properties | PublicCertificateProperties |


### PublicCertificateProperties

| Name | Description | Value |
|-|-|-|
| blob | Public Certificate byte array | For Bicep, you can use theany()function. |
| publicCertificateLocation | Public Certificate Location | 'CurrentUserMy''LocalMachineMy''Unknown' |
## Microsoft.Web/sites/siteextensions@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/sites/siteextensions@2022-09-01"
  name = "string"
  parent_id = "string"
}

```

### sites/siteextensions

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:sites |
## Microsoft.Web/sites/slots@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/sites/slots@2022-09-01"
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
      clientAffinityEnabled = bool
      clientCertEnabled = bool
      clientCertExclusionPaths = "string"
      clientCertMode = "string"
      cloningInfo = {
        appSettingsOverrides = {}
        cloneCustomHostNames = bool
        cloneSourceControl = bool
        configureLoadBalancing = bool
        correlationId = "string"
        hostingEnvironment = "string"
        overwrite = bool
        sourceWebAppId = "string"
        sourceWebAppLocation = "string"
        trafficManagerProfileId = "string"
        trafficManagerProfileName = "string"
      }
      containerSize = int
      customDomainVerificationId = "string"
      dailyMemoryTimeQuota = int
      enabled = bool
      hostingEnvironmentProfile = {
        id = "string"
      }
      hostNamesDisabled = bool
      hostNameSslStates = [
        {
          hostType = "string"
          name = "string"
          sslState = "string"
          thumbprint = "string"
          toUpdate = bool
          virtualIP = "string"
        }
      ]
      httpsOnly = bool
      hyperV = bool
      isXenon = bool
      keyVaultReferenceIdentity = "string"
      managedEnvironmentId = "string"
      publicNetworkAccess = "string"
      redundancyMode = "string"
      reserved = bool
      scmSiteAlsoStopped = bool
      serverFarmId = "string"
      siteConfig = {
        acrUseManagedIdentityCreds = bool
        acrUserManagedIdentityID = "string"
        alwaysOn = bool
        apiDefinition = {
          url = "string"
        }
        apiManagementConfig = {
          id = "string"
        }
        appCommandLine = "string"
        appSettings = [
          {
            name = "string"
            value = "string"
          }
        ]
        autoHealEnabled = bool
        autoHealRules = {
          actions = {
            actionType = "string"
            customAction = {
              exe = "string"
              parameters = "string"
            }
            minProcessExecutionTime = "string"
          }
          triggers = {
            privateBytesInKB = int
            requests = {
              count = int
              timeInterval = "string"
            }
            slowRequests = {
              count = int
              path = "string"
              timeInterval = "string"
              timeTaken = "string"
            }
            slowRequestsWithPath = [
              {
                count = int
                path = "string"
                timeInterval = "string"
                timeTaken = "string"
              }
            ]
            statusCodes = [
              {
                count = int
                path = "string"
                status = int
                subStatus = int
                timeInterval = "string"
                win32Status = int
              }
            ]
            statusCodesRange = [
              {
                count = int
                path = "string"
                statusCodes = "string"
                timeInterval = "string"
              }
            ]
          }
        }
        autoSwapSlotName = "string"
        azureStorageAccounts = {}
        connectionStrings = [
          {
            connectionString = "string"
            name = "string"
            type = "string"
          }
        ]
        cors = {
          allowedOrigins = [
            "string"
          ]
          supportCredentials = bool
        }
        defaultDocuments = [
          "string"
        ]
        detailedErrorLoggingEnabled = bool
        documentRoot = "string"
        elasticWebAppScaleLimit = int
        experiments = {
          rampUpRules = [
            {
              actionHostName = "string"
              changeDecisionCallbackUrl = "string"
              changeIntervalInMinutes = int
              changeStep = int
              maxReroutePercentage = int
              minReroutePercentage = int
              name = "string"
              reroutePercentage = int
            }
          ]
        }
        ftpsState = "string"
        functionAppScaleLimit = int
        functionsRuntimeScaleMonitoringEnabled = bool
        handlerMappings = [
          {
            arguments = "string"
            extension = "string"
            scriptProcessor = "string"
          }
        ]
        healthCheckPath = "string"
        http20Enabled = bool
        httpLoggingEnabled = bool
        ipSecurityRestrictions = [
          {
            action = "string"
            description = "string"
            headers = {}
            ipAddress = "string"
            name = "string"
            priority = int
            subnetMask = "string"
            subnetTrafficTag = int
            tag = "string"
            vnetSubnetResourceId = "string"
            vnetTrafficTag = int
          }
        ]
        ipSecurityRestrictionsDefaultAction = "string"
        javaContainer = "string"
        javaContainerVersion = "string"
        javaVersion = "string"
        keyVaultReferenceIdentity = "string"
        limits = {
          maxDiskSizeInMb = int
          maxMemoryInMb = int
          maxPercentageCpu = int
        }
        linuxFxVersion = "string"
        loadBalancing = "string"
        localMySqlEnabled = bool
        logsDirectorySizeLimit = int
        managedPipelineMode = "string"
        managedServiceIdentityId = int
        metadata = [
          {
            name = "string"
            value = "string"
          }
        ]
        minimumElasticInstanceCount = int
        minTlsVersion = "string"
        netFrameworkVersion = "string"
        nodeVersion = "string"
        numberOfWorkers = int
        phpVersion = "string"
        powerShellVersion = "string"
        preWarmedInstanceCount = int
        publicNetworkAccess = "string"
        publishingUsername = "string"
        push = {
          kind = "string"
          properties = {
            dynamicTagsJson = "string"
            isPushEnabled = bool
            tagsRequiringAuth = "string"
            tagWhitelistJson = "string"
          }
        }
        pythonVersion = "string"
        remoteDebuggingEnabled = bool
        remoteDebuggingVersion = "string"
        requestTracingEnabled = bool
        requestTracingExpirationTime = "string"
        scmIpSecurityRestrictions = [
          {
            action = "string"
            description = "string"
            headers = {}
            ipAddress = "string"
            name = "string"
            priority = int
            subnetMask = "string"
            subnetTrafficTag = int
            tag = "string"
            vnetSubnetResourceId = "string"
            vnetTrafficTag = int
          }
        ]
        scmIpSecurityRestrictionsDefaultAction = "string"
        scmIpSecurityRestrictionsUseMain = bool
        scmMinTlsVersion = "string"
        scmType = "string"
        tracingOptions = "string"
        use32BitWorkerProcess = bool
        virtualApplications = [
          {
            physicalPath = "string"
            preloadEnabled = bool
            virtualDirectories = [
              {
                physicalPath = "string"
                virtualPath = "string"
              }
            ]
            virtualPath = "string"
          }
        ]
        vnetName = "string"
        vnetPrivatePortsCount = int
        vnetRouteAllEnabled = bool
        websiteTimeZone = "string"
        webSocketsEnabled = bool
        windowsFxVersion = "string"
        xManagedServiceIdentityId = int
      }
      storageAccountRequired = bool
      virtualNetworkSubnetId = "string"
      vnetContentShareEnabled = bool
      vnetImagePullEnabled = bool
      vnetRouteAllEnabled = bool
    }
    kind = "string"
    extendedLocation = {
      name = "string"
    }
  })
}

```

### sites/slots

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 2-59Valid characters:Alphanumeric, hyphens and Unicode characters that can be mapped to Punycode |
| location | Resource Location. | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| kind | Kind of resource. | string |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:sites |
| extendedLocation | Extended Location. | ExtendedLocation |
| identity | Managed service identity. | ManagedServiceIdentity |
| properties | Site resource specific properties | SiteProperties |


### ExtendedLocation

| Name | Description | Value |
|-|-|-|
| name | Name of extended location. | string |


### ManagedServiceIdentity

| Name | Description | Value |
|-|-|-|
| type | Type of managed service identity. | 'None''SystemAssigned''SystemAssigned, UserAssigned''UserAssigned' |
| userAssignedIdentities | The list of user assigned identities associated with the resource. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName} | object |


### SiteProperties

| Name | Description | Value |
|-|-|-|
| clientAffinityEnabled | trueto enable client affinity;falseto stop sending session affinity cookies, which route client requests in the same session to the same instance. Default istrue. | bool |
| clientCertEnabled | trueto enable client certificate authentication (TLS mutual authentication); otherwise,false. Default isfalse. | bool |
| clientCertExclusionPaths | client certificate authentication comma-separated exclusion paths | string |
| clientCertMode | This composes with ClientCertEnabled setting.- ClientCertEnabled: false means ClientCert is ignored.- ClientCertEnabled: true and ClientCertMode: Required means ClientCert is required.- ClientCertEnabled: true and ClientCertMode: Optional means ClientCert is optional or accepted. | 'Optional''OptionalInteractiveUser''Required' |
| cloningInfo | If specified during app creation, the app is cloned from a source app. | CloningInfo |
| containerSize | Size of the function container. | int |
| customDomainVerificationId | Unique identifier that verifies the custom domains assigned to the app. Customer will add this id to a txt record for verification. | string |
| dailyMemoryTimeQuota | Maximum allowed daily memory-time quota (applicable on dynamic apps only). | int |
| enabled | trueif the app is enabled; otherwise,false. Setting this value to false disables the app (takes the app offline). | bool |
| hostingEnvironmentProfile | App Service Environment to use for the app. | HostingEnvironmentProfile |
| hostNamesDisabled | trueto disable the public hostnames of the app; otherwise,false.Iftrue, the app is only accessible via API management process. | bool |
| hostNameSslStates | Hostname SSL states are used to manage the SSL bindings for app's hostnames. | HostNameSslState[] |
| httpsOnly | HttpsOnly: configures a web site to accept only https requests. Issues redirect forhttp requests | bool |
| hyperV | Hyper-V sandbox. | bool |
| isXenon | Obsolete: Hyper-V sandbox. | bool |
| keyVaultReferenceIdentity | Identity to use for Key Vault Reference authentication. | string |
| managedEnvironmentId | Azure Resource Manager ID of the customer's selected Managed Environment on which to host this app. This must be of the form /subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.App/managedEnvironments/{managedEnvironmentName} | string |
| publicNetworkAccess | Property to allow or block all public traffic. Allowed Values: 'Enabled', 'Disabled' or an empty string. | string |
| redundancyMode | Site redundancy mode | 'ActiveActive''Failover''GeoRedundant''Manual''None' |
| reserved | trueif reserved; otherwise,false. | bool |
| scmSiteAlsoStopped | trueto stop SCM (KUDU) site when the app is stopped; otherwise,false. The default isfalse. | bool |
| serverFarmId | Resource ID of the associated App Service plan, formatted as: "/subscriptions/{subscriptionID}/resourceGroups/{groupName}/providers/Microsoft.Web/serverfarms/{appServicePlanName}". | string |
| siteConfig | Configuration of the app. | SiteConfig |
| storageAccountRequired | Checks if Customer provided storage account is required | bool |
| virtualNetworkSubnetId | Azure Resource Manager ID of the Virtual network and subnet to be joined by Regional VNET Integration.This must be of the form /subscriptions/{subscriptionName}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualNetworks/{vnetName}/subnets/{subnetName} | string |
| vnetContentShareEnabled | To enable accessing content over virtual network | bool |
| vnetImagePullEnabled | To enable pulling image over Virtual Network | bool |
| vnetRouteAllEnabled | Virtual Network Route All enabled. This causes all outbound traffic to have Virtual Network Security Groups and User Defined Routes applied. | bool |


### CloningInfo

| Name | Description | Value |
|-|-|-|
| appSettingsOverrides | Application setting overrides for cloned app. If specified, these settings override the settings clonedfrom source app. Otherwise, application settings from source app are retained. | object |
| cloneCustomHostNames | trueto clone custom hostnames from source app; otherwise,false. | bool |
| cloneSourceControl | trueto clone source control from source app; otherwise,false. | bool |
| configureLoadBalancing | trueto configure load balancing for source and destination app. | bool |
| correlationId | Correlation ID of cloning operation. This ID ties multiple cloning operationstogether to use the same snapshot. | string |
| hostingEnvironment | App Service Environment. | string |
| overwrite | trueto overwrite destination app; otherwise,false. | bool |
| sourceWebAppId | ARM resource ID of the source app. App resource ID is of the form/subscriptions/{subId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{siteName} for production slots and/subscriptions/{subId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{siteName}/slots/{slotName} for other slots. | string (required) |
| sourceWebAppLocation | Location of source app ex: West US or North Europe | string |
| trafficManagerProfileId | ARM resource ID of the Traffic Manager profile to use, if it exists. Traffic Manager resource ID is of the form/subscriptions/{subId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/trafficManagerProfiles/{profileName}. | string |
| trafficManagerProfileName | Name of Traffic Manager profile to create. This is only needed if Traffic Manager profile does not already exist. | string |


### HostingEnvironmentProfile

| Name | Description | Value |
|-|-|-|
| id | Resource ID of the App Service Environment. | string |


### HostNameSslState

| Name | Description | Value |
|-|-|-|
| hostType | Indicates whether the hostname is a standard or repository hostname. | 'Repository''Standard' |
| name | Hostname. | string |
| sslState | SSL type. | 'Disabled''IpBasedEnabled''SniEnabled' |
| thumbprint | SSL certificate thumbprint. | string |
| toUpdate | Set totrueto update existing hostname. | bool |
| virtualIP | Virtual IP address assigned to the hostname if IP based SSL is enabled. | string |


### SiteConfig

| Name | Description | Value |
|-|-|-|
| acrUseManagedIdentityCreds | Flag to use Managed Identity Creds for ACR pull | bool |
| acrUserManagedIdentityID | If using user managed identity, the user managed identity ClientId | string |
| alwaysOn | trueif Always On is enabled; otherwise,false. | bool |
| apiDefinition | Information about the formal API definition for the app. | ApiDefinitionInfo |
| apiManagementConfig | Azure API management settings linked to the app. | ApiManagementConfig |
| appCommandLine | App command line to launch. | string |
| appSettings | Application settings. | NameValuePair[] |
| autoHealEnabled | trueif Auto Heal is enabled; otherwise,false. | bool |
| autoHealRules | Auto Heal rules. | AutoHealRules |
| autoSwapSlotName | Auto-swap slot name. | string |
| azureStorageAccounts | List of Azure Storage Accounts. | object |
| connectionStrings | Connection strings. | ConnStringInfo[] |
| cors | Cross-Origin Resource Sharing (CORS) settings. | CorsSettings |
| defaultDocuments | Default documents. | string[] |
| detailedErrorLoggingEnabled | trueif detailed error logging is enabled; otherwise,false. | bool |
| documentRoot | Document root. | string |
| elasticWebAppScaleLimit | Maximum number of workers that a site can scale out to.This setting only applies to apps in plans where ElasticScaleEnabled istrue | int |
| experiments | This is work around for polymorphic types. | Experiments |
| ftpsState | State of FTP / FTPS service | 'AllAllowed''Disabled''FtpsOnly' |
| functionAppScaleLimit | Maximum number of workers that a site can scale out to.This setting only applies to the Consumption and Elastic Premium Plans | int |
| functionsRuntimeScaleMonitoringEnabled | Gets or sets a value indicating whether functions runtime scale monitoring is enabled. When enabled,the ScaleController will not monitor event sources directly, but will instead call to theruntime to get scale status. | bool |
| handlerMappings | Handler mappings. | HandlerMapping[] |
| healthCheckPath | Health check path | string |
| http20Enabled | Http20Enabled: configures a web site to allow clients to connect over http2.0 | bool |
| httpLoggingEnabled | trueif HTTP logging is enabled; otherwise,false. | bool |
| ipSecurityRestrictions | IP security restrictions for main. | IpSecurityRestriction[] |
| ipSecurityRestrictionsDefaultAction | Default action for main access restriction if no rules are matched. | 'Allow''Deny' |
| javaContainer | Java container. | string |
| javaContainerVersion | Java container version. | string |
| javaVersion | Java version. | string |
| keyVaultReferenceIdentity | Identity to use for Key Vault Reference authentication. | string |
| limits | Site limits. | SiteLimits |
| linuxFxVersion | Linux App Framework and version | string |
| loadBalancing | Site load balancing. | 'LeastRequests''LeastResponseTime''PerSiteRoundRobin''RequestHash''WeightedRoundRobin''WeightedTotalTraffic' |
| localMySqlEnabled | trueto enable local MySQL; otherwise,false. | bool |
| logsDirectorySizeLimit | HTTP logs directory size limit. | int |
| managedPipelineMode | Managed pipeline mode. | 'Classic''Integrated' |
| managedServiceIdentityId | Managed Service Identity Id | int |
| metadata | Application metadata. This property cannot be retrieved, since it may contain secrets. | NameValuePair[] |
| minimumElasticInstanceCount | Number of minimum instance count for a siteThis setting only applies to the Elastic Plans | int |
| minTlsVersion | MinTlsVersion: configures the minimum version of TLS required for SSL requests | '1.0''1.1''1.2' |
| netFrameworkVersion | .NET Framework version. | string |
| nodeVersion | Version of Node.js. | string |
| numberOfWorkers | Number of workers. | int |
| phpVersion | Version of PHP. | string |
| powerShellVersion | Version of PowerShell. | string |
| preWarmedInstanceCount | Number of preWarmed instances.This setting only applies to the Consumption and Elastic Plans | int |
| publicNetworkAccess | Property to allow or block all public traffic. | string |
| publishingUsername | Publishing user name. | string |
| push | Push endpoint settings. | PushSettings |
| pythonVersion | Version of Python. | string |
| remoteDebuggingEnabled | trueif remote debugging is enabled; otherwise,false. | bool |
| remoteDebuggingVersion | Remote debugging version. | string |
| requestTracingEnabled | trueif request tracing is enabled; otherwise,false. | bool |
| requestTracingExpirationTime | Request tracing expiration time. | string |
| scmIpSecurityRestrictions | IP security restrictions for scm. | IpSecurityRestriction[] |
| scmIpSecurityRestrictionsDefaultAction | Default action for scm access restriction if no rules are matched. | 'Allow''Deny' |
| scmIpSecurityRestrictionsUseMain | IP security restrictions for scm to use main. | bool |
| scmMinTlsVersion | ScmMinTlsVersion: configures the minimum version of TLS required for SSL requests for SCM site | '1.0''1.1''1.2' |
| scmType | SCM type. | 'BitbucketGit''BitbucketHg''CodePlexGit''CodePlexHg''Dropbox''ExternalGit''ExternalHg''GitHub''LocalGit''None''OneDrive''Tfs''VSO''VSTSRM' |
| tracingOptions | Tracing options. | string |
| use32BitWorkerProcess | trueto use 32-bit worker process; otherwise,false. | bool |
| virtualApplications | Virtual applications. | VirtualApplication[] |
| vnetName | Virtual Network name. | string |
| vnetPrivatePortsCount | The number of private ports assigned to this app. These will be assigned dynamically on runtime. | int |
| vnetRouteAllEnabled | Virtual Network Route All enabled. This causes all outbound traffic to have Virtual Network Security Groups and User Defined Routes applied. | bool |
| websiteTimeZone | Sets the time zone a site uses for generating timestamps. Compatible with Linux and Windows App Service. Setting the WEBSITE_TIME_ZONE app setting takes precedence over this config. For Linux, expects tz database valueshttps://www.iana.org/time-zones(for a quick reference seehttps://en.wikipedia.org/wiki/List_of_tz_database_time_zones). For Windows, expects one of the time zones listed under HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Time Zones | string |
| webSocketsEnabled | trueif WebSocket is enabled; otherwise,false. | bool |
| windowsFxVersion | Xenon App Framework and version | string |
| xManagedServiceIdentityId | Explicit Managed Service Identity Id | int |


### ApiDefinitionInfo

| Name | Description | Value |
|-|-|-|
| url | The URL of the API definition. | string |


### ApiManagementConfig

| Name | Description | Value |
|-|-|-|
| id | APIM-Api Identifier. | string |


### NameValuePair

| Name | Description | Value |
|-|-|-|
| name | Pair name. | string |
| value | Pair value. | string |


### AutoHealRules

| Name | Description | Value |
|-|-|-|
| actions | Actions to be executed when a rule is triggered. | AutoHealActions |
| triggers | Conditions that describe when to execute the auto-heal actions. | AutoHealTriggers |


### AutoHealActions

| Name | Description | Value |
|-|-|-|
| actionType | Predefined action to be taken. | 'CustomAction''LogEvent''Recycle' |
| customAction | Custom action to be taken. | AutoHealCustomAction |
| minProcessExecutionTime | Minimum time the process must executebefore taking the action | string |


### AutoHealCustomAction

| Name | Description | Value |
|-|-|-|
| exe | Executable to be run. | string |
| parameters | Parameters for the executable. | string |


### AutoHealTriggers

| Name | Description | Value |
|-|-|-|
| privateBytesInKB | A rule based on private bytes. | int |
| requests | A rule based on total requests. | RequestsBasedTrigger |
| slowRequests | A rule based on request execution time. | SlowRequestsBasedTrigger |
| slowRequestsWithPath | A rule based on multiple Slow Requests Rule with path | SlowRequestsBasedTrigger[] |
| statusCodes | A rule based on status codes. | StatusCodesBasedTrigger[] |
| statusCodesRange | A rule based on status codes ranges. | StatusCodesRangeBasedTrigger[] |


### RequestsBasedTrigger

| Name | Description | Value |
|-|-|-|
| count | Request Count. | int |
| timeInterval | Time interval. | string |


### SlowRequestsBasedTrigger

| Name | Description | Value |
|-|-|-|
| count | Request Count. | int |
| path | Request Path. | string |
| timeInterval | Time interval. | string |
| timeTaken | Time taken. | string |


### StatusCodesBasedTrigger

| Name | Description | Value |
|-|-|-|
| count | Request Count. | int |
| path | Request Path | string |
| status | HTTP status code. | int |
| subStatus | Request Sub Status. | int |
| timeInterval | Time interval. | string |
| win32Status | Win32 error code. | int |


### StatusCodesRangeBasedTrigger

| Name | Description | Value |
|-|-|-|
| count | Request Count. | int |
| path |  | string |
| statusCodes | HTTP status code. | string |
| timeInterval | Time interval. | string |


### ConnStringInfo

| Name | Description | Value |
|-|-|-|
| connectionString | Connection string value. | string |
| name | Name of connection string. | string |
| type | Type of database. | 'ApiHub''Custom''DocDb''EventHub''MySql''NotificationHub''PostgreSQL''RedisCache''SQLAzure''SQLServer''ServiceBus' |


### CorsSettings

| Name | Description | Value |
|-|-|-|
| allowedOrigins | Gets or sets the list of origins that should be allowed to make cross-origincalls (for example:http://example.com:12345). Use "*" to allow all. | string[] |
| supportCredentials | Gets or sets whether CORS requests with credentials are allowed. Seehttps://developer.mozilla.org/en-US/docs/Web/HTTP/CORS#Requests_with_credentialsfor more details. | bool |


### Experiments

| Name | Description | Value |
|-|-|-|
| rampUpRules | List of ramp-up rules. | RampUpRule[] |


### RampUpRule

| Name | Description | Value |
|-|-|-|
| actionHostName | Hostname of a slot to which the traffic will be redirected if decided to. E.g. myapp-stage.azurewebsites.net. | string |
| changeDecisionCallbackUrl | Custom decision algorithm can be provided in TiPCallback site extension which URL can be specified. See TiPCallback site extension for the scaffold and contracts.https://www.siteextensions.net/packages/TiPCallback/ | string |
| changeIntervalInMinutes | Specifies interval in minutes to reevaluate ReroutePercentage. | int |
| changeStep | In auto ramp up scenario this is the step to add/remove fromReroutePercentageuntil it reaches \nMinReroutePercentageorMaxReroutePercentage. Site metrics are checked every N minutes specified inChangeIntervalInMinutes.\nCustom decision algorithmcan be provided in TiPCallback site extension which URL can be specified inChangeDecisionCallbackUrl. | int |
| maxReroutePercentage | Specifies upper boundary below which ReroutePercentage will stay. | int |
| minReroutePercentage | Specifies lower boundary above which ReroutePercentage will stay. | int |
| name | Name of the routing rule. The recommended name would be to point to the slot which will receive the traffic in the experiment. | string |
| reroutePercentage | Percentage of the traffic which will be redirected toActionHostName. | int |


### HandlerMapping

| Name | Description | Value |
|-|-|-|
| arguments | Command-line arguments to be passed to the script processor. | string |
| extension | Requests with this extension will be handled using the specified FastCGI application. | string |
| scriptProcessor | The absolute path to the FastCGI application. | string |


### IpSecurityRestriction

| Name | Description | Value |
|-|-|-|
| action | Allow or Deny access for this IP range. | string |
| description | IP restriction rule description. | string |
| headers | IP restriction rule headers.X-Forwarded-Host (https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Forwarded-Host#Examples).The matching logic is ..- If the property is null or empty (default), all hosts(or lack of) are allowed.- A value is compared using ordinal-ignore-case (excluding port number).- Subdomain wildcards are permitted but don't match the root domain. For example, *.contoso.com matches the subdomain foo.contoso.combut not the root domain contoso.com or multi-level foo.bar.contoso.com- Unicode host names are allowed but are converted to Punycode for matching.X-Forwarded-For (https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Forwarded-For#Examples).The matching logic is ..- If the property is null or empty (default), any forwarded-for chains (or lack of) are allowed.- If any address (excluding port number) in the chain (comma separated) matches the CIDR defined by the property.X-Azure-FDID and X-FD-HealthProbe.The matching logic is exact match. | object |
| ipAddress | IP address the security restriction is valid for.It can be in form of pure ipv4 address (required SubnetMask property) orCIDR notation such as ipv4/mask (leading bit match). For CIDR,SubnetMask property must not be specified. | string |
| name | IP restriction rule name. | string |
| priority | Priority of IP restriction rule. | int |
| subnetMask | Subnet mask for the range of IP addresses the restriction is valid for. | string |
| subnetTrafficTag | (internal) Subnet traffic tag | int |
| tag | Defines what this IP filter will be used for. This is to support IP filtering on proxies. | 'Default''ServiceTag''XffProxy' |
| vnetSubnetResourceId | Virtual network resource id | string |
| vnetTrafficTag | (internal) Vnet traffic tag | int |


### SiteLimits

| Name | Description | Value |
|-|-|-|
| maxDiskSizeInMb | Maximum allowed disk size usage in MB. | int |
| maxMemoryInMb | Maximum allowed memory usage in MB. | int |
| maxPercentageCpu | Maximum allowed CPU usage percentage. | int |


### PushSettings

| Name | Description | Value |
|-|-|-|
| kind | Kind of resource. | string |
| properties | PushSettings resource specific properties | PushSettingsProperties |


### PushSettingsProperties

| Name | Description | Value |
|-|-|-|
| dynamicTagsJson | Gets or sets a JSON string containing a list of dynamic tags that will be evaluated from user claims in the push registration endpoint. | string |
| isPushEnabled | Gets or sets a flag indicating whether the Push endpoint is enabled. | bool (required) |
| tagsRequiringAuth | Gets or sets a JSON string containing a list of tags that require user authentication to be used in the push registration endpoint.Tags can consist of alphanumeric characters and the following:'_', '@', '#', '.', ':', '-'.Validation should be performed at the PushRequestHandler. | string |
| tagWhitelistJson | Gets or sets a JSON string containing a list of tags that are allowed for use by the push registration endpoint. | string |


### VirtualApplication

| Name | Description | Value |
|-|-|-|
| physicalPath | Physical path. | string |
| preloadEnabled | trueif preloading is enabled; otherwise,false. | bool |
| virtualDirectories | Virtual directories for virtual application. | VirtualDirectory[] |
| virtualPath | Virtual path. | string |


### VirtualDirectory

| Name | Description | Value |
|-|-|-|
| physicalPath | Physical path. | string |
| virtualPath | Path to virtual application. | string |
## Microsoft.Web/sites/slots/basicPublishingCredentialsPolicies@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/sites/slots/basicPublishingCredentialsPolicies@2022-09-01"
  name = "ftp"
  parent_id = "string"
  body = jsonencode({
    properties = {
      allow = bool
    }
    kind = "string"
  })
}

```

### sites/slots/basicPublishingCredentialsPolicies-ftp

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'ftp' |
| kind | Kind of resource. | string |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:slots |
| properties | CsmPublishingCredentialsPoliciesEntity resource specific properties | CsmPublishingCredentialsPoliciesEntityProperties |


### CsmPublishingCredentialsPoliciesEntityProperties

| Name | Description | Value |
|-|-|-|
| allow | trueto allow access to a publishing method; otherwise,false. | bool (required) |
## Microsoft.Web/sites/slots/basicPublishingCredentialsPolicies@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/sites/slots/basicPublishingCredentialsPolicies@2022-09-01"
  name = "scm"
  parent_id = "string"
  body = jsonencode({
    properties = {
      allow = bool
    }
    kind = "string"
  })
}

```

### sites/slots/basicPublishingCredentialsPolicies-scm

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'scm' |
| kind | Kind of resource. | string |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:slots |
| properties | CsmPublishingCredentialsPoliciesEntity resource specific properties | CsmPublishingCredentialsPoliciesEntityProperties |


### CsmPublishingCredentialsPoliciesEntityProperties

| Name | Description | Value |
|-|-|-|
| allow | trueto allow access to a publishing method; otherwise,false. | bool (required) |
## Microsoft.Web/sites/slots/config@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/sites/slots/config@2022-09-01"
  name = "appsettings"
  parent_id = "string"
  body = jsonencode({
    properties = {}
    kind = "string"
  })
}

```

### sites/slots/config-appsettings

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'appsettings' |
| kind | Kind of resource. | string |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:slots |
| properties | Settings. | object |
## Microsoft.Web/sites/slots/config@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/sites/slots/config@2022-09-01"
  name = "authsettings"
  parent_id = "string"
  body = jsonencode({
    properties = {
      aadClaimsAuthorization = "string"
      additionalLoginParams = [
        "string"
      ]
      allowedAudiences = [
        "string"
      ]
      allowedExternalRedirectUrls = [
        "string"
      ]
      authFilePath = "string"
      clientId = "string"
      clientSecret = "string"
      clientSecretCertificateThumbprint = "string"
      clientSecretSettingName = "string"
      configVersion = "string"
      defaultProvider = "string"
      enabled = bool
      facebookAppId = "string"
      facebookAppSecret = "string"
      facebookAppSecretSettingName = "string"
      facebookOAuthScopes = [
        "string"
      ]
      gitHubClientId = "string"
      gitHubClientSecret = "string"
      gitHubClientSecretSettingName = "string"
      gitHubOAuthScopes = [
        "string"
      ]
      googleClientId = "string"
      googleClientSecret = "string"
      googleClientSecretSettingName = "string"
      googleOAuthScopes = [
        "string"
      ]
      isAuthFromFile = "string"
      issuer = "string"
      microsoftAccountClientId = "string"
      microsoftAccountClientSecret = "string"
      microsoftAccountClientSecretSettingName = "string"
      microsoftAccountOAuthScopes = [
        "string"
      ]
      runtimeVersion = "string"
      tokenRefreshExtensionHours = int
      tokenStoreEnabled = bool
      twitterConsumerKey = "string"
      twitterConsumerSecret = "string"
      twitterConsumerSecretSettingName = "string"
      unauthenticatedClientAction = "string"
      validateIssuer = bool
    }
    kind = "string"
  })
}

```

### sites/slots/config-authsettings

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'authsettings' |
| kind | Kind of resource. | string |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:slots |
| properties | SiteAuthSettings resource specific properties | SiteAuthSettingsProperties |


### SiteAuthSettingsProperties

| Name | Description | Value |
|-|-|-|
| aadClaimsAuthorization | Gets a JSON string containing the Azure AD Acl settings. | string |
| additionalLoginParams | Login parameters to send to the OpenID Connect authorization endpoint whena user logs in. Each parameter must be in the form "key=value". | string[] |
| allowedAudiences | Allowed audience values to consider when validating JSON Web Tokens issued byAzure Active Directory. Note that theClientIDvalue is always considered anallowed audience, regardless of this setting. | string[] |
| allowedExternalRedirectUrls | External URLs that can be redirected to as part of logging in or logging out of the app. Note that the query string part of the URL is ignored.This is an advanced setting typically only needed by Windows Store application backends.Note that URLs within the current domain are always implicitly allowed. | string[] |
| authFilePath | The path of the config file containing auth settings.If the path is relative, base will the site's root directory. | string |
| clientId | The Client ID of this relying party application, known as the client_id.This setting is required for enabling OpenID Connection authentication with Azure Active Directory orother 3rd party OpenID Connect providers.More information on OpenID Connect:http://openid.net/specs/openid-connect-core-1_0.html | string |
| clientSecret | The Client Secret of this relying party application (in Azure Active Directory, this is also referred to as the Key).This setting is optional. If no client secret is configured, the OpenID Connect implicit auth flow is used to authenticate end users.Otherwise, the OpenID Connect Authorization Code Flow is used to authenticate end users.More information on OpenID Connect:http://openid.net/specs/openid-connect-core-1_0.html | string |
| clientSecretCertificateThumbprint | An alternative to the client secret, that is the thumbprint of a certificate used for signing purposes. This property acts asa replacement for the Client Secret. It is also optional. | string |
| clientSecretSettingName | The app setting name that contains the client secret of the relying party application. | string |
| configVersion | The ConfigVersion of the Authentication / Authorization feature in use for the current app.The setting in this value can control the behavior of the control plane for Authentication / Authorization. | string |
| defaultProvider | The default authentication provider to use when multiple providers are configured.This setting is only needed if multiple providers are configured and the unauthenticated clientaction is set to "RedirectToLoginPage". | 'AzureActiveDirectory''Facebook''Github''Google''MicrosoftAccount''Twitter' |
| enabled | trueif the Authentication / Authorization feature is enabled for the current app; otherwise,false. | bool |
| facebookAppId | The App ID of the Facebook app used for login.This setting is required for enabling Facebook Login.Facebook Login documentation:https://developers.facebook.com/docs/facebook-login | string |
| facebookAppSecret | The App Secret of the Facebook app used for Facebook Login.This setting is required for enabling Facebook Login.Facebook Login documentation:https://developers.facebook.com/docs/facebook-login | string |
| facebookAppSecretSettingName | The app setting name that contains the app secret used for Facebook Login. | string |
| facebookOAuthScopes | The OAuth 2.0 scopes that will be requested as part of Facebook Login authentication.This setting is optional.Facebook Login documentation:https://developers.facebook.com/docs/facebook-login | string[] |
| gitHubClientId | The Client Id of the GitHub app used for login.This setting is required for enabling Github login | string |
| gitHubClientSecret | The Client Secret of the GitHub app used for Github Login.This setting is required for enabling Github login. | string |
| gitHubClientSecretSettingName | The app setting name that contains the client secret of the Githubapp used for GitHub Login. | string |
| gitHubOAuthScopes | The OAuth 2.0 scopes that will be requested as part of GitHub Login authentication.This setting is optional | string[] |
| googleClientId | The OpenID Connect Client ID for the Google web application.This setting is required for enabling Google Sign-In.Google Sign-In documentation:https://developers.google.com/identity/sign-in/web/ | string |
| googleClientSecret | The client secret associated with the Google web application.This setting is required for enabling Google Sign-In.Google Sign-In documentation:https://developers.google.com/identity/sign-in/web/ | string |
| googleClientSecretSettingName | The app setting name that contains the client secret associated withthe Google web application. | string |
| googleOAuthScopes | The OAuth 2.0 scopes that will be requested as part of Google Sign-In authentication.This setting is optional. If not specified, "openid", "profile", and "email" are used as default scopes.Google Sign-In documentation:https://developers.google.com/identity/sign-in/web/ | string[] |
| isAuthFromFile | "true" if the auth config settings should be read from a file,"false" otherwise | string |
| issuer | The OpenID Connect Issuer URI that represents the entity which issues access tokens for this application.When using Azure Active Directory, this value is the URI of the directory tenant, e.g.https://sts.windows.net/{tenant-guid}/.This URI is a case-sensitive identifier for the token issuer.More information on OpenID Connect Discovery:http://openid.net/specs/openid-connect-discovery-1_0.html | string |
| microsoftAccountClientId | The OAuth 2.0 client ID that was created for the app used for authentication.This setting is required for enabling Microsoft Account authentication.Microsoft Account OAuth documentation:https://dev.onedrive.com/auth/msa_oauth.htm | string |
| microsoftAccountClientSecret | The OAuth 2.0 client secret that was created for the app used for authentication.This setting is required for enabling Microsoft Account authentication.Microsoft Account OAuth documentation:https://dev.onedrive.com/auth/msa_oauth.htm | string |
| microsoftAccountClientSecretSettingName | The app setting name containing the OAuth 2.0 client secret that was created for theapp used for authentication. | string |
| microsoftAccountOAuthScopes | The OAuth 2.0 scopes that will be requested as part of Microsoft Account authentication.This setting is optional. If not specified, "wl.basic" is used as the default scope.Microsoft Account Scopes and permissions documentation:https://msdn.microsoft.com/library/dn631845.aspx | string[] |
| runtimeVersion | The RuntimeVersion of the Authentication / Authorization feature in use for the current app.The setting in this value can control the behavior of certain features in the Authentication / Authorization module. | string |
| tokenRefreshExtensionHours | The number of hours after session token expiration that a session token can be used tocall the token refresh API. The default is 72 hours. | int |
| tokenStoreEnabled | trueto durably store platform-specific security tokens that are obtained during login flows; otherwise,false.The default isfalse. | bool |
| twitterConsumerKey | The OAuth 1.0a consumer key of the Twitter application used for sign-in.This setting is required for enabling Twitter Sign-In.Twitter Sign-In documentation:https://dev.twitter.com/web/sign-in | string |
| twitterConsumerSecret | The OAuth 1.0a consumer secret of the Twitter application used for sign-in.This setting is required for enabling Twitter Sign-In.Twitter Sign-In documentation:https://dev.twitter.com/web/sign-in | string |
| twitterConsumerSecretSettingName | The app setting name that contains the OAuth 1.0a consumer secret of the Twitterapplication used for sign-in. | string |
| unauthenticatedClientAction | The action to take when an unauthenticated client attempts to access the app. | 'AllowAnonymous''RedirectToLoginPage' |
| validateIssuer | Gets a value indicating whether the issuer should be a valid HTTPS url and be validated as such. | bool |
## Microsoft.Web/sites/slots/config@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/sites/slots/config@2022-09-01"
  name = "authsettingsV2"
  parent_id = "string"
  body = jsonencode({
    properties = {
      globalValidation = {
        excludedPaths = [
          "string"
        ]
        redirectToProvider = "string"
        requireAuthentication = bool
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
        legacyMicrosoftAccount = {
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
        tokenStore = {
          azureBlobStorage = {
            sasUrlSettingName = "string"
          }
          enabled = bool
          fileSystem = {
            directory = "string"
          }
          tokenRefreshExtensionHours = int
        }
      }
      platform = {
        configFilePath = "string"
        enabled = bool
        runtimeVersion = "string"
      }
    }
    kind = "string"
  })
}

```

### sites/slots/config-authsettingsV2

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'authsettingsV2' |
| kind | Kind of resource. | string |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:slots |
| properties | SiteAuthSettingsV2 resource specific properties | SiteAuthSettingsV2Properties |


### SiteAuthSettingsV2Properties

| Name | Description | Value |
|-|-|-|
| globalValidation | The configuration settings that determines the validation flow of users using App Service Authentication/Authorization. | GlobalValidation |
| httpSettings | The configuration settings of the HTTP requests for authentication and authorization requests made against App Service Authentication/Authorization. | HttpSettings |
| identityProviders | The configuration settings of each of the identity providers used to configure App Service Authentication/Authorization. | IdentityProviders |
| login | The configuration settings of the login flow of users using App Service Authentication/Authorization. | Login |
| platform | The configuration settings of the platform of App Service Authentication/Authorization. | AuthPlatform |


### GlobalValidation

| Name | Description | Value |
|-|-|-|
| excludedPaths | The paths for which unauthenticated flow would not be redirected to the login page. | string[] |
| redirectToProvider | The default authentication provider to use when multiple providers are configured.This setting is only needed if multiple providers are configured and the unauthenticated clientaction is set to "RedirectToLoginPage". | string |
| requireAuthentication | trueif the authentication flow is required any request is made; otherwise,false. | bool |
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
| legacyMicrosoftAccount | The configuration settings of the legacy Microsoft Account provider. | LegacyMicrosoftAccount |
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


### LegacyMicrosoftAccount

| Name | Description | Value |
|-|-|-|
| enabled | falseif the legacy Microsoft Account provider should not be enabled despite the set registration; otherwise,true. | bool |
| login | The configuration settings of the login flow. | LoginScopes |
| registration | The configuration settings of the app registration for the legacy Microsoft Account provider. | ClientRegistration |
| validation | The configuration settings of the legacy Microsoft Account provider token validation flow. | AllowedAudiencesValidation |


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
| tokenStore | The configuration settings of the token store. | TokenStore |


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


### TokenStore

| Name | Description | Value |
|-|-|-|
| azureBlobStorage | The configuration settings of the storage of the tokens if blob storage is used. | BlobStorageTokenStore |
| enabled | trueto durably store platform-specific security tokens that are obtained during login flows; otherwise,false.The default isfalse. | bool |
| fileSystem | The configuration settings of the storage of the tokens if a file system is used. | FileSystemTokenStore |
| tokenRefreshExtensionHours | The number of hours after session token expiration that a session token can be used tocall the token refresh API. The default is 72 hours. | int |


### BlobStorageTokenStore

| Name | Description | Value |
|-|-|-|
| sasUrlSettingName | The name of the app setting containing the SAS URL of the blob storage containing the tokens. | string |


### FileSystemTokenStore

| Name | Description | Value |
|-|-|-|
| directory | The directory in which the tokens will be stored. | string |


### AuthPlatform

| Name | Description | Value |
|-|-|-|
| configFilePath | The path of the config file containing auth settings if they come from a file.If the path is relative, base will the site's root directory. | string |
| enabled | trueif the Authentication / Authorization feature is enabled for the current app; otherwise,false. | bool |
| runtimeVersion | The RuntimeVersion of the Authentication / Authorization feature in use for the current app.The setting in this value can control the behavior of certain features in the Authentication / Authorization module. | string |
## Microsoft.Web/sites/slots/config@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/sites/slots/config@2022-09-01"
  name = "azurestorageaccounts"
  parent_id = "string"
  body = jsonencode({
    properties = {}
    kind = "string"
  })
}

```

### sites/slots/config-azurestorageaccounts

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'azurestorageaccounts' |
| kind | Kind of resource. | string |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:slots |
| properties | Azure storage accounts. | object |
## Microsoft.Web/sites/slots/config@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/sites/slots/config@2022-09-01"
  name = "backup"
  parent_id = "string"
  body = jsonencode({
    properties = {
      backupName = "string"
      backupSchedule = {
        frequencyInterval = int
        frequencyUnit = "string"
        keepAtLeastOneBackup = bool
        retentionPeriodInDays = int
        startTime = "string"
      }
      databases = [
        {
          connectionString = "string"
          connectionStringName = "string"
          databaseType = "string"
          name = "string"
        }
      ]
      enabled = bool
      storageAccountUrl = "string"
    }
    kind = "string"
  })
}

```

### sites/slots/config-backup

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'backup' |
| kind | Kind of resource. | string |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:slots |
| properties | BackupRequest resource specific properties | BackupRequestProperties |


### BackupRequestProperties

| Name | Description | Value |
|-|-|-|
| backupName | Name of the backup. | string |
| backupSchedule | Schedule for the backup if it is executed periodically. | BackupSchedule |
| databases | Databases included in the backup. | DatabaseBackupSetting[] |
| enabled | True if the backup schedule is enabled (must be included in that case), false if the backup schedule should be disabled. | bool |
| storageAccountUrl | SAS URL to the container. | string (required) |


### BackupSchedule

| Name | Description | Value |
|-|-|-|
| frequencyInterval | How often the backup should be executed (e.g. for weekly backup, this should be set to 7 and FrequencyUnit should be set to Day) | int (required) |
| frequencyUnit | The unit of time for how often the backup should be executed (e.g. for weekly backup, this should be set to Day and FrequencyInterval should be set to 7) | 'Day''Hour' (required) |
| keepAtLeastOneBackup | True if the retention policy should always keep at least one backup in the storage account, regardless how old it is; false otherwise. | bool (required) |
| retentionPeriodInDays | After how many days backups should be deleted. | int (required) |
| startTime | When the schedule should start working. | string |


### DatabaseBackupSetting

| Name | Description | Value |
|-|-|-|
| connectionString | Contains a connection string to a database which is being backed up or restored. If the restore should happen to a new database, the database name inside is the new one. | string |
| connectionStringName | Contains a connection string name that is linked to the SiteConfig.ConnectionStrings.This is used during restore with overwrite connection strings options. | string |
| databaseType | Database type (e.g. SqlAzure / MySql). | 'LocalMySql''MySql''PostgreSql''SqlAzure' (required) |
| name |  | string |
## Microsoft.Web/sites/slots/config@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/sites/slots/config@2022-09-01"
  name = "connectionstrings"
  parent_id = "string"
  body = jsonencode({
    properties = {}
    kind = "string"
  })
}

```

### sites/slots/config-connectionstrings

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'connectionstrings' |
| kind | Kind of resource. | string |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:slots |
| properties | Connection strings. | object |
## Microsoft.Web/sites/slots/config@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/sites/slots/config@2022-09-01"
  name = "logs"
  parent_id = "string"
  body = jsonencode({
    properties = {
      applicationLogs = {
        azureBlobStorage = {
          level = "string"
          retentionInDays = int
          sasUrl = "string"
        }
        azureTableStorage = {
          level = "string"
          sasUrl = "string"
        }
        fileSystem = {
          level = "string"
        }
      }
      detailedErrorMessages = {
        enabled = bool
      }
      failedRequestsTracing = {
        enabled = bool
      }
      httpLogs = {
        azureBlobStorage = {
          enabled = bool
          retentionInDays = int
          sasUrl = "string"
        }
        fileSystem = {
          enabled = bool
          retentionInDays = int
          retentionInMb = int
        }
      }
    }
    kind = "string"
  })
}

```

### sites/slots/config-logs

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'logs' |
| kind | Kind of resource. | string |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:slots |
| properties | SiteLogsConfig resource specific properties | SiteLogsConfigProperties |


### SiteLogsConfigProperties

| Name | Description | Value |
|-|-|-|
| applicationLogs | Application logs configuration. | ApplicationLogsConfig |
| detailedErrorMessages | Detailed error messages configuration. | EnabledConfig |
| failedRequestsTracing | Failed requests tracing configuration. | EnabledConfig |
| httpLogs | HTTP logs configuration. | HttpLogsConfig |


### ApplicationLogsConfig

| Name | Description | Value |
|-|-|-|
| azureBlobStorage | Application logs to blob storage configuration. | AzureBlobStorageApplicationLogsConfig |
| azureTableStorage | Application logs to azure table storage configuration. | AzureTableStorageApplicationLogsConfig |
| fileSystem | Application logs to file system configuration. | FileSystemApplicationLogsConfig |


### AzureBlobStorageApplicationLogsConfig

| Name | Description | Value |
|-|-|-|
| level | Log level. | 'Error''Information''Off''Verbose''Warning' |
| retentionInDays | Retention in days.Remove blobs older than X days.0 or lower means no retention. | int |
| sasUrl | SAS url to a azure blob container with read/write/list/delete permissions. | string |


### AzureTableStorageApplicationLogsConfig

| Name | Description | Value |
|-|-|-|
| level | Log level. | 'Error''Information''Off''Verbose''Warning' |
| sasUrl | SAS URL to an Azure table with add/query/delete permissions. | string (required) |


### FileSystemApplicationLogsConfig

| Name | Description | Value |
|-|-|-|
| level | Log level. | 'Error''Information''Off''Verbose''Warning' |


### EnabledConfig

| Name | Description | Value |
|-|-|-|
| enabled | True if configuration is enabled, false if it is disabled and null if configuration is not set. | bool |


### HttpLogsConfig

| Name | Description | Value |
|-|-|-|
| azureBlobStorage | Http logs to azure blob storage configuration. | AzureBlobStorageHttpLogsConfig |
| fileSystem | Http logs to file system configuration. | FileSystemHttpLogsConfig |


### AzureBlobStorageHttpLogsConfig

| Name | Description | Value |
|-|-|-|
| enabled | True if configuration is enabled, false if it is disabled and null if configuration is not set. | bool |
| retentionInDays | Retention in days.Remove blobs older than X days.0 or lower means no retention. | int |
| sasUrl | SAS url to a azure blob container with read/write/list/delete permissions. | string |


### FileSystemHttpLogsConfig

| Name | Description | Value |
|-|-|-|
| enabled | True if configuration is enabled, false if it is disabled and null if configuration is not set. | bool |
| retentionInDays | Retention in days.Remove files older than X days.0 or lower means no retention. | int |
| retentionInMb | Maximum size in megabytes that http log files can use.When reached old log files will be removed to make space for new ones.Value can range between 25 and 100. | int |
## Microsoft.Web/sites/slots/config@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/sites/slots/config@2022-09-01"
  name = "metadata"
  parent_id = "string"
  body = jsonencode({
    properties = {}
    kind = "string"
  })
}

```

### sites/slots/config-metadata

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'metadata' |
| kind | Kind of resource. | string |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:slots |
| properties | Settings. | object |
## Microsoft.Web/sites/slots/config@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/sites/slots/config@2022-09-01"
  name = "pushsettings"
  parent_id = "string"
  body = jsonencode({
    properties = {
      dynamicTagsJson = "string"
      isPushEnabled = bool
      tagsRequiringAuth = "string"
      tagWhitelistJson = "string"
    }
    kind = "string"
  })
}

```

### sites/slots/config-pushsettings

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'pushsettings' |
| kind | Kind of resource. | string |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:slots |
| properties | PushSettings resource specific properties | PushSettingsProperties |


### PushSettingsProperties

| Name | Description | Value |
|-|-|-|
| dynamicTagsJson | Gets or sets a JSON string containing a list of dynamic tags that will be evaluated from user claims in the push registration endpoint. | string |
| isPushEnabled | Gets or sets a flag indicating whether the Push endpoint is enabled. | bool (required) |
| tagsRequiringAuth | Gets or sets a JSON string containing a list of tags that require user authentication to be used in the push registration endpoint.Tags can consist of alphanumeric characters and the following:'_', '@', '#', '.', ':', '-'.Validation should be performed at the PushRequestHandler. | string |
| tagWhitelistJson | Gets or sets a JSON string containing a list of tags that are allowed for use by the push registration endpoint. | string |
## Microsoft.Web/sites/slots/config@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/sites/slots/config@2022-09-01"
  name = "web"
  parent_id = "string"
  body = jsonencode({
    properties = {
      acrUseManagedIdentityCreds = bool
      acrUserManagedIdentityID = "string"
      alwaysOn = bool
      apiDefinition = {
        url = "string"
      }
      apiManagementConfig = {
        id = "string"
      }
      appCommandLine = "string"
      appSettings = [
        {
          name = "string"
          value = "string"
        }
      ]
      autoHealEnabled = bool
      autoHealRules = {
        actions = {
          actionType = "string"
          customAction = {
            exe = "string"
            parameters = "string"
          }
          minProcessExecutionTime = "string"
        }
        triggers = {
          privateBytesInKB = int
          requests = {
            count = int
            timeInterval = "string"
          }
          slowRequests = {
            count = int
            path = "string"
            timeInterval = "string"
            timeTaken = "string"
          }
          slowRequestsWithPath = [
            {
              count = int
              path = "string"
              timeInterval = "string"
              timeTaken = "string"
            }
          ]
          statusCodes = [
            {
              count = int
              path = "string"
              status = int
              subStatus = int
              timeInterval = "string"
              win32Status = int
            }
          ]
          statusCodesRange = [
            {
              count = int
              path = "string"
              statusCodes = "string"
              timeInterval = "string"
            }
          ]
        }
      }
      autoSwapSlotName = "string"
      azureStorageAccounts = {}
      connectionStrings = [
        {
          connectionString = "string"
          name = "string"
          type = "string"
        }
      ]
      cors = {
        allowedOrigins = [
          "string"
        ]
        supportCredentials = bool
      }
      defaultDocuments = [
        "string"
      ]
      detailedErrorLoggingEnabled = bool
      documentRoot = "string"
      elasticWebAppScaleLimit = int
      experiments = {
        rampUpRules = [
          {
            actionHostName = "string"
            changeDecisionCallbackUrl = "string"
            changeIntervalInMinutes = int
            changeStep = int
            maxReroutePercentage = int
            minReroutePercentage = int
            name = "string"
            reroutePercentage = int
          }
        ]
      }
      ftpsState = "string"
      functionAppScaleLimit = int
      functionsRuntimeScaleMonitoringEnabled = bool
      handlerMappings = [
        {
          arguments = "string"
          extension = "string"
          scriptProcessor = "string"
        }
      ]
      healthCheckPath = "string"
      http20Enabled = bool
      httpLoggingEnabled = bool
      ipSecurityRestrictions = [
        {
          action = "string"
          description = "string"
          headers = {}
          ipAddress = "string"
          name = "string"
          priority = int
          subnetMask = "string"
          subnetTrafficTag = int
          tag = "string"
          vnetSubnetResourceId = "string"
          vnetTrafficTag = int
        }
      ]
      ipSecurityRestrictionsDefaultAction = "string"
      javaContainer = "string"
      javaContainerVersion = "string"
      javaVersion = "string"
      keyVaultReferenceIdentity = "string"
      limits = {
        maxDiskSizeInMb = int
        maxMemoryInMb = int
        maxPercentageCpu = int
      }
      linuxFxVersion = "string"
      loadBalancing = "string"
      localMySqlEnabled = bool
      logsDirectorySizeLimit = int
      managedPipelineMode = "string"
      managedServiceIdentityId = int
      metadata = [
        {
          name = "string"
          value = "string"
        }
      ]
      minimumElasticInstanceCount = int
      minTlsVersion = "string"
      netFrameworkVersion = "string"
      nodeVersion = "string"
      numberOfWorkers = int
      phpVersion = "string"
      powerShellVersion = "string"
      preWarmedInstanceCount = int
      publicNetworkAccess = "string"
      publishingUsername = "string"
      push = {
        kind = "string"
        properties = {
          dynamicTagsJson = "string"
          isPushEnabled = bool
          tagsRequiringAuth = "string"
          tagWhitelistJson = "string"
        }
      }
      pythonVersion = "string"
      remoteDebuggingEnabled = bool
      remoteDebuggingVersion = "string"
      requestTracingEnabled = bool
      requestTracingExpirationTime = "string"
      scmIpSecurityRestrictions = [
        {
          action = "string"
          description = "string"
          headers = {}
          ipAddress = "string"
          name = "string"
          priority = int
          subnetMask = "string"
          subnetTrafficTag = int
          tag = "string"
          vnetSubnetResourceId = "string"
          vnetTrafficTag = int
        }
      ]
      scmIpSecurityRestrictionsDefaultAction = "string"
      scmIpSecurityRestrictionsUseMain = bool
      scmMinTlsVersion = "string"
      scmType = "string"
      tracingOptions = "string"
      use32BitWorkerProcess = bool
      virtualApplications = [
        {
          physicalPath = "string"
          preloadEnabled = bool
          virtualDirectories = [
            {
              physicalPath = "string"
              virtualPath = "string"
            }
          ]
          virtualPath = "string"
        }
      ]
      vnetName = "string"
      vnetPrivatePortsCount = int
      vnetRouteAllEnabled = bool
      websiteTimeZone = "string"
      webSocketsEnabled = bool
      windowsFxVersion = "string"
      xManagedServiceIdentityId = int
    }
    kind = "string"
  })
}

```

### sites/slots/config-web

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'web' |
| kind | Kind of resource. | string |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:slots |
| properties | Core resource properties | SiteConfig |


### SiteConfig

| Name | Description | Value |
|-|-|-|
| acrUseManagedIdentityCreds | Flag to use Managed Identity Creds for ACR pull | bool |
| acrUserManagedIdentityID | If using user managed identity, the user managed identity ClientId | string |
| alwaysOn | trueif Always On is enabled; otherwise,false. | bool |
| apiDefinition | Information about the formal API definition for the app. | ApiDefinitionInfo |
| apiManagementConfig | Azure API management settings linked to the app. | ApiManagementConfig |
| appCommandLine | App command line to launch. | string |
| appSettings | Application settings. | NameValuePair[] |
| autoHealEnabled | trueif Auto Heal is enabled; otherwise,false. | bool |
| autoHealRules | Auto Heal rules. | AutoHealRules |
| autoSwapSlotName | Auto-swap slot name. | string |
| azureStorageAccounts | List of Azure Storage Accounts. | object |
| connectionStrings | Connection strings. | ConnStringInfo[] |
| cors | Cross-Origin Resource Sharing (CORS) settings. | CorsSettings |
| defaultDocuments | Default documents. | string[] |
| detailedErrorLoggingEnabled | trueif detailed error logging is enabled; otherwise,false. | bool |
| documentRoot | Document root. | string |
| elasticWebAppScaleLimit | Maximum number of workers that a site can scale out to.This setting only applies to apps in plans where ElasticScaleEnabled istrue | int |
| experiments | This is work around for polymorphic types. | Experiments |
| ftpsState | State of FTP / FTPS service | 'AllAllowed''Disabled''FtpsOnly' |
| functionAppScaleLimit | Maximum number of workers that a site can scale out to.This setting only applies to the Consumption and Elastic Premium Plans | int |
| functionsRuntimeScaleMonitoringEnabled | Gets or sets a value indicating whether functions runtime scale monitoring is enabled. When enabled,the ScaleController will not monitor event sources directly, but will instead call to theruntime to get scale status. | bool |
| handlerMappings | Handler mappings. | HandlerMapping[] |
| healthCheckPath | Health check path | string |
| http20Enabled | Http20Enabled: configures a web site to allow clients to connect over http2.0 | bool |
| httpLoggingEnabled | trueif HTTP logging is enabled; otherwise,false. | bool |
| ipSecurityRestrictions | IP security restrictions for main. | IpSecurityRestriction[] |
| ipSecurityRestrictionsDefaultAction | Default action for main access restriction if no rules are matched. | 'Allow''Deny' |
| javaContainer | Java container. | string |
| javaContainerVersion | Java container version. | string |
| javaVersion | Java version. | string |
| keyVaultReferenceIdentity | Identity to use for Key Vault Reference authentication. | string |
| limits | Site limits. | SiteLimits |
| linuxFxVersion | Linux App Framework and version | string |
| loadBalancing | Site load balancing. | 'LeastRequests''LeastResponseTime''PerSiteRoundRobin''RequestHash''WeightedRoundRobin''WeightedTotalTraffic' |
| localMySqlEnabled | trueto enable local MySQL; otherwise,false. | bool |
| logsDirectorySizeLimit | HTTP logs directory size limit. | int |
| managedPipelineMode | Managed pipeline mode. | 'Classic''Integrated' |
| managedServiceIdentityId | Managed Service Identity Id | int |
| metadata | Application metadata. This property cannot be retrieved, since it may contain secrets. | NameValuePair[] |
| minimumElasticInstanceCount | Number of minimum instance count for a siteThis setting only applies to the Elastic Plans | int |
| minTlsVersion | MinTlsVersion: configures the minimum version of TLS required for SSL requests | '1.0''1.1''1.2' |
| netFrameworkVersion | .NET Framework version. | string |
| nodeVersion | Version of Node.js. | string |
| numberOfWorkers | Number of workers. | int |
| phpVersion | Version of PHP. | string |
| powerShellVersion | Version of PowerShell. | string |
| preWarmedInstanceCount | Number of preWarmed instances.This setting only applies to the Consumption and Elastic Plans | int |
| publicNetworkAccess | Property to allow or block all public traffic. | string |
| publishingUsername | Publishing user name. | string |
| push | Push endpoint settings. | PushSettings |
| pythonVersion | Version of Python. | string |
| remoteDebuggingEnabled | trueif remote debugging is enabled; otherwise,false. | bool |
| remoteDebuggingVersion | Remote debugging version. | string |
| requestTracingEnabled | trueif request tracing is enabled; otherwise,false. | bool |
| requestTracingExpirationTime | Request tracing expiration time. | string |
| scmIpSecurityRestrictions | IP security restrictions for scm. | IpSecurityRestriction[] |
| scmIpSecurityRestrictionsDefaultAction | Default action for scm access restriction if no rules are matched. | 'Allow''Deny' |
| scmIpSecurityRestrictionsUseMain | IP security restrictions for scm to use main. | bool |
| scmMinTlsVersion | ScmMinTlsVersion: configures the minimum version of TLS required for SSL requests for SCM site | '1.0''1.1''1.2' |
| scmType | SCM type. | 'BitbucketGit''BitbucketHg''CodePlexGit''CodePlexHg''Dropbox''ExternalGit''ExternalHg''GitHub''LocalGit''None''OneDrive''Tfs''VSO''VSTSRM' |
| tracingOptions | Tracing options. | string |
| use32BitWorkerProcess | trueto use 32-bit worker process; otherwise,false. | bool |
| virtualApplications | Virtual applications. | VirtualApplication[] |
| vnetName | Virtual Network name. | string |
| vnetPrivatePortsCount | The number of private ports assigned to this app. These will be assigned dynamically on runtime. | int |
| vnetRouteAllEnabled | Virtual Network Route All enabled. This causes all outbound traffic to have Virtual Network Security Groups and User Defined Routes applied. | bool |
| websiteTimeZone | Sets the time zone a site uses for generating timestamps. Compatible with Linux and Windows App Service. Setting the WEBSITE_TIME_ZONE app setting takes precedence over this config. For Linux, expects tz database valueshttps://www.iana.org/time-zones(for a quick reference seehttps://en.wikipedia.org/wiki/List_of_tz_database_time_zones). For Windows, expects one of the time zones listed under HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Time Zones | string |
| webSocketsEnabled | trueif WebSocket is enabled; otherwise,false. | bool |
| windowsFxVersion | Xenon App Framework and version | string |
| xManagedServiceIdentityId | Explicit Managed Service Identity Id | int |


### ApiDefinitionInfo

| Name | Description | Value |
|-|-|-|
| url | The URL of the API definition. | string |


### ApiManagementConfig

| Name | Description | Value |
|-|-|-|
| id | APIM-Api Identifier. | string |


### NameValuePair

| Name | Description | Value |
|-|-|-|
| name | Pair name. | string |
| value | Pair value. | string |


### AutoHealRules

| Name | Description | Value |
|-|-|-|
| actions | Actions to be executed when a rule is triggered. | AutoHealActions |
| triggers | Conditions that describe when to execute the auto-heal actions. | AutoHealTriggers |


### AutoHealActions

| Name | Description | Value |
|-|-|-|
| actionType | Predefined action to be taken. | 'CustomAction''LogEvent''Recycle' |
| customAction | Custom action to be taken. | AutoHealCustomAction |
| minProcessExecutionTime | Minimum time the process must executebefore taking the action | string |


### AutoHealCustomAction

| Name | Description | Value |
|-|-|-|
| exe | Executable to be run. | string |
| parameters | Parameters for the executable. | string |


### AutoHealTriggers

| Name | Description | Value |
|-|-|-|
| privateBytesInKB | A rule based on private bytes. | int |
| requests | A rule based on total requests. | RequestsBasedTrigger |
| slowRequests | A rule based on request execution time. | SlowRequestsBasedTrigger |
| slowRequestsWithPath | A rule based on multiple Slow Requests Rule with path | SlowRequestsBasedTrigger[] |
| statusCodes | A rule based on status codes. | StatusCodesBasedTrigger[] |
| statusCodesRange | A rule based on status codes ranges. | StatusCodesRangeBasedTrigger[] |


### RequestsBasedTrigger

| Name | Description | Value |
|-|-|-|
| count | Request Count. | int |
| timeInterval | Time interval. | string |


### SlowRequestsBasedTrigger

| Name | Description | Value |
|-|-|-|
| count | Request Count. | int |
| path | Request Path. | string |
| timeInterval | Time interval. | string |
| timeTaken | Time taken. | string |


### StatusCodesBasedTrigger

| Name | Description | Value |
|-|-|-|
| count | Request Count. | int |
| path | Request Path | string |
| status | HTTP status code. | int |
| subStatus | Request Sub Status. | int |
| timeInterval | Time interval. | string |
| win32Status | Win32 error code. | int |


### StatusCodesRangeBasedTrigger

| Name | Description | Value |
|-|-|-|
| count | Request Count. | int |
| path |  | string |
| statusCodes | HTTP status code. | string |
| timeInterval | Time interval. | string |


### ConnStringInfo

| Name | Description | Value |
|-|-|-|
| connectionString | Connection string value. | string |
| name | Name of connection string. | string |
| type | Type of database. | 'ApiHub''Custom''DocDb''EventHub''MySql''NotificationHub''PostgreSQL''RedisCache''SQLAzure''SQLServer''ServiceBus' |


### CorsSettings

| Name | Description | Value |
|-|-|-|
| allowedOrigins | Gets or sets the list of origins that should be allowed to make cross-origincalls (for example:http://example.com:12345). Use "*" to allow all. | string[] |
| supportCredentials | Gets or sets whether CORS requests with credentials are allowed. Seehttps://developer.mozilla.org/en-US/docs/Web/HTTP/CORS#Requests_with_credentialsfor more details. | bool |


### Experiments

| Name | Description | Value |
|-|-|-|
| rampUpRules | List of ramp-up rules. | RampUpRule[] |


### RampUpRule

| Name | Description | Value |
|-|-|-|
| actionHostName | Hostname of a slot to which the traffic will be redirected if decided to. E.g. myapp-stage.azurewebsites.net. | string |
| changeDecisionCallbackUrl | Custom decision algorithm can be provided in TiPCallback site extension which URL can be specified. See TiPCallback site extension for the scaffold and contracts.https://www.siteextensions.net/packages/TiPCallback/ | string |
| changeIntervalInMinutes | Specifies interval in minutes to reevaluate ReroutePercentage. | int |
| changeStep | In auto ramp up scenario this is the step to add/remove fromReroutePercentageuntil it reaches \nMinReroutePercentageorMaxReroutePercentage. Site metrics are checked every N minutes specified inChangeIntervalInMinutes.\nCustom decision algorithmcan be provided in TiPCallback site extension which URL can be specified inChangeDecisionCallbackUrl. | int |
| maxReroutePercentage | Specifies upper boundary below which ReroutePercentage will stay. | int |
| minReroutePercentage | Specifies lower boundary above which ReroutePercentage will stay. | int |
| name | Name of the routing rule. The recommended name would be to point to the slot which will receive the traffic in the experiment. | string |
| reroutePercentage | Percentage of the traffic which will be redirected toActionHostName. | int |


### HandlerMapping

| Name | Description | Value |
|-|-|-|
| arguments | Command-line arguments to be passed to the script processor. | string |
| extension | Requests with this extension will be handled using the specified FastCGI application. | string |
| scriptProcessor | The absolute path to the FastCGI application. | string |


### IpSecurityRestriction

| Name | Description | Value |
|-|-|-|
| action | Allow or Deny access for this IP range. | string |
| description | IP restriction rule description. | string |
| headers | IP restriction rule headers.X-Forwarded-Host (https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Forwarded-Host#Examples).The matching logic is ..- If the property is null or empty (default), all hosts(or lack of) are allowed.- A value is compared using ordinal-ignore-case (excluding port number).- Subdomain wildcards are permitted but don't match the root domain. For example, *.contoso.com matches the subdomain foo.contoso.combut not the root domain contoso.com or multi-level foo.bar.contoso.com- Unicode host names are allowed but are converted to Punycode for matching.X-Forwarded-For (https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Forwarded-For#Examples).The matching logic is ..- If the property is null or empty (default), any forwarded-for chains (or lack of) are allowed.- If any address (excluding port number) in the chain (comma separated) matches the CIDR defined by the property.X-Azure-FDID and X-FD-HealthProbe.The matching logic is exact match. | object |
| ipAddress | IP address the security restriction is valid for.It can be in form of pure ipv4 address (required SubnetMask property) orCIDR notation such as ipv4/mask (leading bit match). For CIDR,SubnetMask property must not be specified. | string |
| name | IP restriction rule name. | string |
| priority | Priority of IP restriction rule. | int |
| subnetMask | Subnet mask for the range of IP addresses the restriction is valid for. | string |
| subnetTrafficTag | (internal) Subnet traffic tag | int |
| tag | Defines what this IP filter will be used for. This is to support IP filtering on proxies. | 'Default''ServiceTag''XffProxy' |
| vnetSubnetResourceId | Virtual network resource id | string |
| vnetTrafficTag | (internal) Vnet traffic tag | int |


### SiteLimits

| Name | Description | Value |
|-|-|-|
| maxDiskSizeInMb | Maximum allowed disk size usage in MB. | int |
| maxMemoryInMb | Maximum allowed memory usage in MB. | int |
| maxPercentageCpu | Maximum allowed CPU usage percentage. | int |


### PushSettings

| Name | Description | Value |
|-|-|-|
| kind | Kind of resource. | string |
| properties | PushSettings resource specific properties | PushSettingsProperties |


### PushSettingsProperties

| Name | Description | Value |
|-|-|-|
| dynamicTagsJson | Gets or sets a JSON string containing a list of dynamic tags that will be evaluated from user claims in the push registration endpoint. | string |
| isPushEnabled | Gets or sets a flag indicating whether the Push endpoint is enabled. | bool (required) |
| tagsRequiringAuth | Gets or sets a JSON string containing a list of tags that require user authentication to be used in the push registration endpoint.Tags can consist of alphanumeric characters and the following:'_', '@', '#', '.', ':', '-'.Validation should be performed at the PushRequestHandler. | string |
| tagWhitelistJson | Gets or sets a JSON string containing a list of tags that are allowed for use by the push registration endpoint. | string |


### VirtualApplication

| Name | Description | Value |
|-|-|-|
| physicalPath | Physical path. | string |
| preloadEnabled | trueif preloading is enabled; otherwise,false. | bool |
| virtualDirectories | Virtual directories for virtual application. | VirtualDirectory[] |
| virtualPath | Virtual path. | string |


### VirtualDirectory

| Name | Description | Value |
|-|-|-|
| physicalPath | Physical path. | string |
| virtualPath | Path to virtual application. | string |
## Microsoft.Web/sites/slots/deployments@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/sites/slots/deployments@2022-09-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      active = bool
      author = "string"
      author_email = "string"
      deployer = "string"
      details = "string"
      end_time = "string"
      message = "string"
      start_time = "string"
      status = int
    }
    kind = "string"
  })
}

```

### sites/slots/deployments

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| kind | Kind of resource. | string |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:slots |
| properties | Deployment resource specific properties | DeploymentProperties |


### DeploymentProperties

| Name | Description | Value |
|-|-|-|
| active | True if deployment is currently active, false if completed and null if not started. | bool |
| author | Who authored the deployment. | string |
| author_email | Author email. | string |
| deployer | Who performed the deployment. | string |
| details | Details on deployment. | string |
| end_time | End time. | string |
| message | Details about deployment status. | string |
| start_time | Start time. | string |
| status | Deployment status. | int |
## Microsoft.Web/sites/slots/domainOwnershipIdentifiers@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/sites/slots/domainOwnershipIdentifiers@2022-09-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      id = "string"
    }
    kind = "string"
  })
}

```

### sites/slots/domainOwnershipIdentifiers

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| kind | Kind of resource. | string |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:slots |
| properties | Identifier resource specific properties | IdentifierProperties |


### IdentifierProperties

| Name | Description | Value |
|-|-|-|
| id | String representation of the identity. | string |
## Microsoft.Web/sites/slots/extensions@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/sites/slots/extensions@2022-09-01"
  name = "MSDeploy"
  parent_id = "string"
  body = jsonencode({
    properties = {
      appOffline = bool
      connectionString = "string"
      dbType = "string"
      packageUri = "string"
      setParameters = {}
      setParametersXmlFileUri = "string"
      skipAppData = bool
    }
    kind = "string"
  })
}

```

### sites/slots/extensions

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'MSDeploy' |
| kind | Kind of resource. | string |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:slots |
| properties | Core resource properties | MSDeployCoreOrMSDeployStatusProperties |


### MSDeployCoreOrMSDeployStatusProperties

| Name | Description | Value |
|-|-|-|
| appOffline | Sets the AppOffline rule while the MSDeploy operation executes.Setting isfalseby default. | bool |
| connectionString | SQL Connection String | string |
| dbType | Database Type | string |
| packageUri | Package URI | string |
| setParameters | MSDeploy Parameters. Must not be set if SetParametersXmlFileUri is used. | object |
| setParametersXmlFileUri | URI of MSDeploy Parameters file. Must not be set if SetParameters is used. | string |
| skipAppData | Controls whether the MSDeploy operation skips the App_Data directory.If set totrue, the existing App_Data directory on the destinationwill not be deleted, and any App_Data directory in the source will be ignored.Setting isfalseby default. | bool |
## Microsoft.Web/sites/slots/functions@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/sites/slots/functions@2022-09-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      config_href = "string"
      files = {}
      function_app_id = "string"
      href = "string"
      invoke_url_template = "string"
      isDisabled = bool
      language = "string"
      script_href = "string"
      script_root_path_href = "string"
      secrets_file_href = "string"
      test_data = "string"
      test_data_href = "string"
    }
    kind = "string"
  })
}

```

### sites/slots/functions

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| kind | Kind of resource. | string |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:slots |
| properties | FunctionEnvelope resource specific properties | FunctionEnvelopeProperties |


### FunctionEnvelopeProperties

| Name | Description | Value |
|-|-|-|
| config | Config information. | For Bicep, you can use theany()function. |
| config_href | Config URI. | string |
| files | File list. | object |
| function_app_id | Function App ID. | string |
| href | Function URI. | string |
| invoke_url_template | The invocation URL | string |
| isDisabled | Gets or sets a value indicating whether the function is disabled | bool |
| language | The function language | string |
| script_href | Script URI. | string |
| script_root_path_href | Script root path URI. | string |
| secrets_file_href | Secrets file URI. | string |
| test_data | Test data used when testing via the Azure Portal. | string |
| test_data_href | Test data URI. | string |
## Microsoft.Web/sites/slots/functions/keys@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/sites/slots/functions/keys@2022-09-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    value = "string"
  })
}

```

### sites/slots/functions/keys

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:functions |
| value | Key value | string |
## Microsoft.Web/sites/slots/hostNameBindings@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/sites/slots/hostNameBindings@2022-09-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      azureResourceName = "string"
      azureResourceType = "string"
      customHostNameDnsRecordType = "string"
      domainId = "string"
      hostNameType = "string"
      siteName = "string"
      sslState = "string"
      thumbprint = "string"
    }
    kind = "string"
  })
}

```

### sites/slots/hostNameBindings

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| kind | Kind of resource. | string |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:slots |
| properties | HostNameBinding resource specific properties | HostNameBindingProperties |


### HostNameBindingProperties

| Name | Description | Value |
|-|-|-|
| azureResourceName | Azure resource name. | string |
| azureResourceType | Azure resource type. | 'TrafficManager''Website' |
| customHostNameDnsRecordType | Custom DNS record type. | 'A''CName' |
| domainId | Fully qualified ARM domain resource URI. | string |
| hostNameType | Hostname type. | 'Managed''Verified' |
| siteName | App Service app name. | string |
| sslState | SSL type | 'Disabled''IpBasedEnabled''SniEnabled' |
| thumbprint | SSL certificate thumbprint | string |
## Microsoft.Web/sites/slots/hybridconnection@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/sites/slots/hybridconnection@2022-09-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      biztalkUri = "string"
      entityConnectionString = "string"
      entityName = "string"
      hostname = "string"
      port = int
      resourceConnectionString = "string"
      resourceType = "string"
    }
    kind = "string"
  })
}

```

### sites/slots/hybridconnection

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| kind | Kind of resource. | string |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:slots |
| properties | RelayServiceConnectionEntity resource specific properties | RelayServiceConnectionEntityProperties |


### RelayServiceConnectionEntityProperties

| Name | Description | Value |
|-|-|-|
| biztalkUri |  | string |
| entityConnectionString |  | string |
| entityName |  | string |
| hostname |  | string |
| port |  | int |
| resourceConnectionString |  | string |
| resourceType |  | string |
## Microsoft.Web/sites/slots/hybridConnectionNamespaces/relays@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/sites/slots/hybridConnectionNamespaces/relays@2022-09-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      hostname = "string"
      port = int
      relayArmUri = "string"
      relayName = "string"
      sendKeyName = "string"
      sendKeyValue = "string"
      serviceBusNamespace = "string"
      serviceBusSuffix = "string"
    }
    kind = "string"
  })
}

```

### sites/slots/hybridConnectionNamespaces/relays

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| kind | Kind of resource. | string |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type: hybridConnectionNamespaces |
| properties | HybridConnection resource specific properties | HybridConnectionProperties |


### HybridConnectionProperties

| Name | Description | Value |
|-|-|-|
| hostname | The hostname of the endpoint. | string |
| port | The port of the endpoint. | int |
| relayArmUri | The ARM URI to the Service Bus relay. | string |
| relayName | The name of the Service Bus relay. | string |
| sendKeyName | The name of the Service Bus key which has Send permissions. This is used to authenticate to Service Bus. | string |
| sendKeyValue | The value of the Service Bus key. This is used to authenticate to Service Bus. In ARM this key will not be returnednormally, use the POST /listKeys API instead. | string |
| serviceBusNamespace | The name of the Service Bus namespace. | string |
| serviceBusSuffix | The suffix for the service bus endpoint. By default this is .servicebus.windows.net | string |
## Microsoft.Web/sites/slots/instances/extensions@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/sites/slots/instances/extensions@2022-09-01"
  name = "MSDeploy"
  parent_id = "string"
  body = jsonencode({
    properties = {
      appOffline = bool
      connectionString = "string"
      dbType = "string"
      packageUri = "string"
      setParameters = {}
      setParametersXmlFileUri = "string"
      skipAppData = bool
    }
    kind = "string"
  })
}

```

### sites/slots/instances/extensions

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'MSDeploy' |
| kind | Kind of resource. | string |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type: instances |
| properties | Core resource properties | MSDeployCoreOrMSDeployStatusProperties |


### MSDeployCoreOrMSDeployStatusProperties

| Name | Description | Value |
|-|-|-|
| appOffline | Sets the AppOffline rule while the MSDeploy operation executes.Setting isfalseby default. | bool |
| connectionString | SQL Connection String | string |
| dbType | Database Type | string |
| packageUri | Package URI | string |
| setParameters | MSDeploy Parameters. Must not be set if SetParametersXmlFileUri is used. | object |
| setParametersXmlFileUri | URI of MSDeploy Parameters file. Must not be set if SetParameters is used. | string |
| skipAppData | Controls whether the MSDeploy operation skips the App_Data directory.If set totrue, the existing App_Data directory on the destinationwill not be deleted, and any App_Data directory in the source will be ignored.Setting isfalseby default. | bool |
## Microsoft.Web/sites/slots/networkConfig@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/sites/slots/networkConfig@2022-09-01"
  name = "virtualNetwork"
  parent_id = "string"
  body = jsonencode({
    properties = {
      subnetResourceId = "string"
      swiftSupported = bool
    }
    kind = "string"
  })
}

```

### sites/slots/networkConfig

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'virtualNetwork' |
| kind | Kind of resource. | string |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:slots |
| properties | SwiftVirtualNetwork resource specific properties | SwiftVirtualNetworkProperties |


### SwiftVirtualNetworkProperties

| Name | Description | Value |
|-|-|-|
| subnetResourceId | The Virtual Network subnet's resource ID. This is the subnet that this Web App will join. This subnet must have a delegation to Microsoft.Web/serverFarms defined first. | string |
| swiftSupported | A flag that specifies if the scale unit this Web App is on supports Swift integration. | bool |
## Microsoft.Web/sites/slots/premieraddons@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/sites/slots/premieraddons@2022-09-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      marketplaceOffer = "string"
      marketplacePublisher = "string"
      product = "string"
      sku = "string"
      vendor = "string"
    }
    kind = "string"
  })
}

```

### sites/slots/premieraddons

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | Resource Location. | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| kind | Kind of resource. | string |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:slots |
| properties | PremierAddOn resource specific properties | PremierAddOnProperties |


### PremierAddOnProperties

| Name | Description | Value |
|-|-|-|
| marketplaceOffer | Premier add on Marketplace offer. | string |
| marketplacePublisher | Premier add on Marketplace publisher. | string |
| product | Premier add on Product. | string |
| sku | Premier add on SKU. | string |
| vendor | Premier add on Vendor. | string |
## Microsoft.Web/sites/slots/privateAccess@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/sites/slots/privateAccess@2022-09-01"
  name = "virtualNetworks"
  parent_id = "string"
  body = jsonencode({
    properties = {
      enabled = bool
      virtualNetworks = [
        {
          key = int
          name = "string"
          resourceId = "string"
          subnets = [
            {
              key = int
              name = "string"
            }
          ]
        }
      ]
    }
    kind = "string"
  })
}

```

### sites/slots/privateAccess

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'virtualNetworks' |
| kind | Kind of resource. | string |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:slots |
| properties | PrivateAccess resource specific properties | PrivateAccessProperties |


### PrivateAccessProperties

| Name | Description | Value |
|-|-|-|
| enabled | Whether private access is enabled or not. | bool |
| virtualNetworks | The Virtual Networks (and subnets) allowed to access the site privately. | PrivateAccessVirtualNetwork[] |


### PrivateAccessVirtualNetwork

| Name | Description | Value |
|-|-|-|
| key | The key (ID) of the Virtual Network. | int |
| name | The name of the Virtual Network. | string |
| resourceId | The ARM uri of the Virtual Network | string |
| subnets | A List of subnets that access is allowed to on this Virtual Network. An empty array (but not null) is interpreted to mean that all subnets are allowed within this Virtual Network. | PrivateAccessSubnet[] |


### PrivateAccessSubnet

| Name | Description | Value |
|-|-|-|
| key | The key (ID) of the subnet. | int |
| name | The name of the subnet. | string |
## Microsoft.Web/sites/slots/privateEndpointConnections@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/sites/slots/privateEndpointConnections@2022-09-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      privateLinkServiceConnectionState = {
        actionsRequired = "string"
        description = "string"
        status = "string"
      }
    }
    kind = "string"
  })
}

```

### sites/slots/privateEndpointConnections

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| kind | Kind of resource. | string |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:slots |
| properties | Core resource properties | PrivateLinkConnectionApprovalRequestOrRemotePrivateE... |


### PrivateLinkConnectionApprovalRequestOrRemotePrivateE...

| Name | Description | Value |
|-|-|-|
| privateLinkServiceConnectionState | The state of a private link connection | PrivateLinkConnectionState |


### PrivateLinkConnectionState

| Name | Description | Value |
|-|-|-|
| actionsRequired | ActionsRequired for a private link connection | string |
| description | Description of a private link connection | string |
| status | Status of a private link connection | string |
## Microsoft.Web/sites/slots/publicCertificates@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/sites/slots/publicCertificates@2022-09-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      publicCertificateLocation = "string"
    }
    kind = "string"
  })
}

```

### sites/slots/publicCertificates

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| kind | Kind of resource. | string |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:slots |
| properties | PublicCertificate resource specific properties | PublicCertificateProperties |


### PublicCertificateProperties

| Name | Description | Value |
|-|-|-|
| blob | Public Certificate byte array | For Bicep, you can use theany()function. |
| publicCertificateLocation | Public Certificate Location | 'CurrentUserMy''LocalMachineMy''Unknown' |
## Microsoft.Web/sites/slots/siteextensions@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/sites/slots/siteextensions@2022-09-01"
  name = "string"
  parent_id = "string"
}

```

### sites/slots/siteextensions

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:slots |
## Microsoft.Web/sites/slots/sourcecontrols@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/sites/slots/sourcecontrols@2022-09-01"
  name = "web"
  parent_id = "string"
  body = jsonencode({
    properties = {
      branch = "string"
      deploymentRollbackEnabled = bool
      gitHubActionConfiguration = {
        codeConfiguration = {
          runtimeStack = "string"
          runtimeVersion = "string"
        }
        containerConfiguration = {
          imageName = "string"
          password = "string"
          serverUrl = "string"
          username = "string"
        }
        generateWorkflowFile = bool
        isLinux = bool
      }
      isGitHubAction = bool
      isManualIntegration = bool
      isMercurial = bool
      repoUrl = "string"
    }
    kind = "string"
  })
}

```

### sites/slots/sourcecontrols

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'web' |
| kind | Kind of resource. | string |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:slots |
| properties | SiteSourceControl resource specific properties | SiteSourceControlProperties |


### SiteSourceControlProperties

| Name | Description | Value |
|-|-|-|
| branch | Name of branch to use for deployment. | string |
| deploymentRollbackEnabled | trueto enable deployment rollback; otherwise,false. | bool |
| gitHubActionConfiguration | If GitHub Action is selected, than the associated configuration. | GitHubActionConfiguration |
| isGitHubAction | trueif this is deployed via GitHub action. | bool |
| isManualIntegration | trueto limit to manual integration;falseto enable continuous integration (which configures webhooks into online repos like GitHub). | bool |
| isMercurial | truefor a Mercurial repository;falsefor a Git repository. | bool |
| repoUrl | Repository or source control URL. | string |


### GitHubActionConfiguration

| Name | Description | Value |
|-|-|-|
| codeConfiguration | GitHub Action code configuration. | GitHubActionCodeConfiguration |
| containerConfiguration | GitHub Action container configuration. | GitHubActionContainerConfiguration |
| generateWorkflowFile | Workflow option to determine whether the workflow file should be generated and written to the repository. | bool |
| isLinux | This will help determine the workflow configuration to select. | bool |


### GitHubActionCodeConfiguration

| Name | Description | Value |
|-|-|-|
| runtimeStack | Runtime stack is used to determine the workflow file content for code base apps. | string |
| runtimeVersion | Runtime version is used to determine what build version to set in the workflow file. | string |


### GitHubActionContainerConfiguration

| Name | Description | Value |
|-|-|-|
| imageName | The image name for the build. | string |
| password | The password used to upload the image to the container registry. | string |
| serverUrl | The server URL for the container registry where the build will be hosted. | string |
| username | The username used to upload the image to the container registry. | string |
## Microsoft.Web/sites/slots/virtualNetworkConnections@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/sites/slots/virtualNetworkConnections@2022-09-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      certBlob = "string"
      dnsServers = "string"
      isSwift = bool
      vnetResourceId = "string"
    }
    kind = "string"
  })
}

```

### sites/slots/virtualNetworkConnections

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| kind | Kind of resource. | string |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:slots |
| properties | Core resource properties | VnetInfo |


### VnetInfo

| Name | Description | Value |
|-|-|-|
| certBlob | A certificate file (.cer) blob containing the public key of the private key used to authenticate aPoint-To-Site VPN connection. | string |
| dnsServers | DNS servers to be used by this Virtual Network. This should be a comma-separated list of IP addresses. | string |
| isSwift | Flag that is used to denote if this is VNET injection | bool |
| vnetResourceId | The Virtual Network's resource ID. | string |
## Microsoft.Web/sites/slots/virtualNetworkConnections/gateways@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/sites/slots/virtualNetworkConnections/gateways@2022-09-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      vnetName = "string"
      vpnPackageUri = "string"
    }
    kind = "string"
  })
}

```

### sites/slots/virtualNetworkConnections/gateways

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| kind | Kind of resource. | string |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:virtualNetworkConnections |
| properties | VnetGateway resource specific properties | VnetGatewayProperties |


### VnetGatewayProperties

| Name | Description | Value |
|-|-|-|
| vnetName | The Virtual Network name. | string |
| vpnPackageUri | The URI where the VPN package can be downloaded. | string (required) |
## Microsoft.Web/sites/sourcecontrols@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/sites/sourcecontrols@2022-09-01"
  name = "web"
  parent_id = "string"
  body = jsonencode({
    properties = {
      branch = "string"
      deploymentRollbackEnabled = bool
      gitHubActionConfiguration = {
        codeConfiguration = {
          runtimeStack = "string"
          runtimeVersion = "string"
        }
        containerConfiguration = {
          imageName = "string"
          password = "string"
          serverUrl = "string"
          username = "string"
        }
        generateWorkflowFile = bool
        isLinux = bool
      }
      isGitHubAction = bool
      isManualIntegration = bool
      isMercurial = bool
      repoUrl = "string"
    }
    kind = "string"
  })
}

```

### sites/sourcecontrols

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'web' |
| kind | Kind of resource. | string |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:sites |
| properties | SiteSourceControl resource specific properties | SiteSourceControlProperties |


### SiteSourceControlProperties

| Name | Description | Value |
|-|-|-|
| branch | Name of branch to use for deployment. | string |
| deploymentRollbackEnabled | trueto enable deployment rollback; otherwise,false. | bool |
| gitHubActionConfiguration | If GitHub Action is selected, than the associated configuration. | GitHubActionConfiguration |
| isGitHubAction | trueif this is deployed via GitHub action. | bool |
| isManualIntegration | trueto limit to manual integration;falseto enable continuous integration (which configures webhooks into online repos like GitHub). | bool |
| isMercurial | truefor a Mercurial repository;falsefor a Git repository. | bool |
| repoUrl | Repository or source control URL. | string |


### GitHubActionConfiguration

| Name | Description | Value |
|-|-|-|
| codeConfiguration | GitHub Action code configuration. | GitHubActionCodeConfiguration |
| containerConfiguration | GitHub Action container configuration. | GitHubActionContainerConfiguration |
| generateWorkflowFile | Workflow option to determine whether the workflow file should be generated and written to the repository. | bool |
| isLinux | This will help determine the workflow configuration to select. | bool |


### GitHubActionCodeConfiguration

| Name | Description | Value |
|-|-|-|
| runtimeStack | Runtime stack is used to determine the workflow file content for code base apps. | string |
| runtimeVersion | Runtime version is used to determine what build version to set in the workflow file. | string |


### GitHubActionContainerConfiguration

| Name | Description | Value |
|-|-|-|
| imageName | The image name for the build. | string |
| password | The password used to upload the image to the container registry. | string |
| serverUrl | The server URL for the container registry where the build will be hosted. | string |
| username | The username used to upload the image to the container registry. | string |
## Microsoft.Web/sites/virtualNetworkConnections@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/sites/virtualNetworkConnections@2022-09-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      certBlob = "string"
      dnsServers = "string"
      isSwift = bool
      vnetResourceId = "string"
    }
    kind = "string"
  })
}

```

### sites/virtualNetworkConnections

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| kind | Kind of resource. | string |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:sites |
| properties | Core resource properties | VnetInfo |


### VnetInfo

| Name | Description | Value |
|-|-|-|
| certBlob | A certificate file (.cer) blob containing the public key of the private key used to authenticate aPoint-To-Site VPN connection. | string |
| dnsServers | DNS servers to be used by this Virtual Network. This should be a comma-separated list of IP addresses. | string |
| isSwift | Flag that is used to denote if this is VNET injection | bool |
| vnetResourceId | The Virtual Network's resource ID. | string |
## Microsoft.Web/sites/virtualNetworkConnections/gateways@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/sites/virtualNetworkConnections/gateways@2022-09-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      vnetName = "string"
      vpnPackageUri = "string"
    }
    kind = "string"
  })
}

```

### sites/virtualNetworkConnections/gateways

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| kind | Kind of resource. | string |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:virtualNetworkConnections |
| properties | VnetGateway resource specific properties | VnetGatewayProperties |


### VnetGatewayProperties

| Name | Description | Value |
|-|-|-|
| vnetName | The Virtual Network name. | string |
| vpnPackageUri | The URI where the VPN package can be downloaded. | string (required) |
## Microsoft.Web/sourcecontrols@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/sourcecontrols@2022-09-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      expirationTime = "string"
      refreshToken = "string"
      token = "string"
      tokenSecret = "string"
    }
    kind = "string"
  })
}

```

### sourcecontrols

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| kind | Kind of resource. | string |
| properties | SourceControl resource specific properties | SourceControlProperties |


### SourceControlProperties

| Name | Description | Value |
|-|-|-|
| expirationTime | OAuth token expiration. | string |
| refreshToken | OAuth refresh token. | string |
| token | OAuth access token. | string |
| tokenSecret | OAuth access token secret. | string |
## Microsoft.Web/staticSites@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/staticSites@2022-09-01"
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
      allowConfigFileUpdates = bool
      branch = "string"
      buildProperties = {
        apiBuildCommand = "string"
        apiLocation = "string"
        appArtifactLocation = "string"
        appBuildCommand = "string"
        appLocation = "string"
        githubActionSecretNameOverride = "string"
        outputLocation = "string"
        skipGithubActionWorkflowGeneration = bool
      }
      enterpriseGradeCdnStatus = "string"
      provider = "string"
      publicNetworkAccess = "string"
      repositoryToken = "string"
      repositoryUrl = "string"
      stagingEnvironmentPolicy = "string"
      templateProperties = {
        description = "string"
        isPrivate = bool
        owner = "string"
        repositoryName = "string"
        templateRepositoryUrl = "string"
      }
    }
    sku = {
      capabilities = [
        {
          name = "string"
          reason = "string"
          value = "string"
        }
      ]
      capacity = int
      family = "string"
      locations = [
        "string"
      ]
      name = "string"
      size = "string"
      skuCapacity = {
        default = int
        elasticMaximum = int
        maximum = int
        minimum = int
        scaleType = "string"
      }
      tier = "string"
    }
    kind = "string"
  })
}

```

### staticSites

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | Resource Location. | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| sku | Description of a SKU for a scalable resource. | SkuDescription |
| kind | Kind of resource. | string |
| identity | Managed service identity. | ManagedServiceIdentity |
| properties | Core resource properties | StaticSite |


### ManagedServiceIdentity

| Name | Description | Value |
|-|-|-|
| type | Type of managed service identity. | 'None''SystemAssigned''SystemAssigned, UserAssigned''UserAssigned' |
| userAssignedIdentities | The list of user assigned identities associated with the resource. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName} | object |


### StaticSite

| Name | Description | Value |
|-|-|-|
| allowConfigFileUpdates | falseif config file is locked for this static web app; otherwise,true. | bool |
| branch | The target branch in the repository. | string |
| buildProperties | Build properties to configure on the repository. | StaticSiteBuildProperties |
| enterpriseGradeCdnStatus | State indicating the status of the enterprise grade CDN serving traffic to the static web app. | 'Disabled''Disabling''Enabled''Enabling' |
| provider | The provider that submitted the last deployment to the primary environment of the static site. | string |
| publicNetworkAccess | State indicating whether public traffic are allowed or not for a static web app. Allowed Values: 'Enabled', 'Disabled' or an empty string. | string |
| repositoryToken | A user's github repository token. This is used to setup the Github Actions workflow file and API secrets. | string |
| repositoryUrl | URL for the repository of the static site. | string |
| stagingEnvironmentPolicy | State indicating whether staging environments are allowed or not allowed for a static web app. | 'Disabled''Enabled' |
| templateProperties | Template options for generating a new repository. | StaticSiteTemplateOptions |


### StaticSiteBuildProperties

| Name | Description | Value |
|-|-|-|
| apiBuildCommand | A custom command to run during deployment of the Azure Functions API application. | string |
| apiLocation | The path to the api code within the repository. | string |
| appArtifactLocation | Deprecated: The path of the app artifacts after building (deprecated in favor of OutputLocation) | string |
| appBuildCommand | A custom command to run during deployment of the static content application. | string |
| appLocation | The path to the app code within the repository. | string |
| githubActionSecretNameOverride | Github Action secret name override. | string |
| outputLocation | The output path of the app after building. | string |
| skipGithubActionWorkflowGeneration | Skip Github Action workflow generation. | bool |


### StaticSiteTemplateOptions

| Name | Description | Value |
|-|-|-|
| description | Description of the newly generated repository. | string |
| isPrivate | Whether or not the newly generated repository is a private repository. Defaults to false (i.e. public). | bool |
| owner | Owner of the newly generated repository. | string |
| repositoryName | Name of the newly generated repository. | string |
| templateRepositoryUrl | URL of the template repository. The newly generated repository will be based on this one. | string |


### SkuDescription

| Name | Description | Value |
|-|-|-|
| capabilities | Capabilities of the SKU, e.g., is traffic manager enabled? | Capability[] |
| capacity | Current number of instances assigned to the resource. | int |
| family | Family code of the resource SKU. | string |
| locations | Locations of the SKU. | string[] |
| name | Name of the resource SKU. | string |
| size | Size specifier of the resource SKU. | string |
| skuCapacity | Min, max, and default scale values of the SKU. | SkuCapacity |
| tier | Service tier of the resource SKU. | string |


### Capability

| Name | Description | Value |
|-|-|-|
| name | Name of the SKU capability. | string |
| reason | Reason of the SKU capability. | string |
| value | Value of the SKU capability. | string |


### SkuCapacity

| Name | Description | Value |
|-|-|-|
| default | Default number of workers for this App Service plan SKU. | int |
| elasticMaximum | Maximum number of Elastic workers for this App Service plan SKU. | int |
| maximum | Maximum number of workers for this App Service plan SKU. | int |
| minimum | Minimum number of workers for this App Service plan SKU. | int |
| scaleType | Available scale configurations for an App Service plan. | string |
## Microsoft.Web/staticSites/basicAuth@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/staticSites/basicAuth@2022-09-01"
  name = "default"
  parent_id = "string"
  body = jsonencode({
    properties = {
      applicableEnvironmentsMode = "string"
      environments = [
        "string"
      ]
      password = "string"
      secretUrl = "string"
    }
    kind = "string"
  })
}

```

### staticSites/basicAuth

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'default' |
| kind | Kind of resource. | string |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:staticSites |
| properties | StaticSiteBasicAuthPropertiesARMResource resource specific properties | StaticSiteBasicAuthPropertiesARMResourceProperties |


### StaticSiteBasicAuthPropertiesARMResourceProperties

| Name | Description | Value |
|-|-|-|
| applicableEnvironmentsMode | State indicating if basic auth is enabled and for what environments it is active. | string (required) |
| environments | The list of enabled environments for Basic Auth if ApplicableEnvironmentsMode is set to SpecifiedEnvironments. | string[] |
| password | The password for basic auth. | string |
| secretUrl | Url to the secret in Key Vault. | string |
## Microsoft.Web/staticSites/builds/config@2020-10-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/staticSites/builds/config@2020-10-01"
  name = "functionappsettings"
  parent_id = "string"
  body = jsonencode({
    properties = {}
    kind = "string"
  })
}

```

### staticSites/builds/config

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'functionappsettings' |
| kind | Kind of resource. | string |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type: builds |
| properties | Settings. | object |
## Microsoft.Web/staticSites/builds/config@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/staticSites/builds/config@2022-09-01"
  name = "appsettings"
  parent_id = "string"
  body = jsonencode({
    properties = {}
    kind = "string"
  })
}

```

### staticSites/builds/config-appsettings

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'appsettings' |
| kind | Kind of resource. | string |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type: builds |
| properties | Settings. | object |
## Microsoft.Web/staticSites/builds/config@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/staticSites/builds/config@2022-09-01"
  name = "functionappsettings"
  parent_id = "string"
  body = jsonencode({
    properties = {}
    kind = "string"
  })
}

```

### staticSites/builds/config-functionappsettings

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'functionappsettings' |
| kind | Kind of resource. | string |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type: builds |
| properties | Settings. | object |
## Microsoft.Web/staticSites/builds/databaseConnections@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/staticSites/builds/databaseConnections@2022-09-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      connectionIdentity = "string"
      connectionString = "string"
      region = "string"
      resourceId = "string"
    }
    kind = "string"
  })
}

```

### staticSites/builds/databaseConnections

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| kind | Kind of resource. | string |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type: builds |
| properties | DatabaseConnection resource specific properties | DatabaseConnectionProperties |


### DatabaseConnectionProperties

| Name | Description | Value |
|-|-|-|
| connectionIdentity | If present, the identity is used in conjunction with connection string to connect to the database. Use of the system-assigned managed identity is indicated with the string 'SystemAssigned', while use of a user-assigned managed identity is indicated with the resource id of the managed identity resource. | string |
| connectionString | The connection string to use to connect to the database. | string |
| region | The region of the database resource. | string (required) |
| resourceId | The resource id of the database. | string (required) |
## Microsoft.Web/staticSites/builds/linkedBackends@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/staticSites/builds/linkedBackends@2022-09-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      backendResourceId = "string"
      region = "string"
    }
    kind = "string"
  })
}

```

### staticSites/builds/linkedBackends

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| kind | Kind of resource. | string |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type: builds |
| properties | StaticSiteLinkedBackendARMResource resource specific properties | StaticSiteLinkedBackendARMResourceProperties |


### StaticSiteLinkedBackendARMResourceProperties

| Name | Description | Value |
|-|-|-|
| backendResourceId | The resource id of the backend linked to the static site | string |
| region | The region of the backend linked to the static site | string |
## Microsoft.Web/staticSites/builds/userProvidedFunctionApps@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/staticSites/builds/userProvidedFunctionApps@2022-09-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      functionAppRegion = "string"
      functionAppResourceId = "string"
    }
    kind = "string"
  })
}

```

### staticSites/builds/userProvidedFunctionApps

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| kind | Kind of resource. | string |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type: builds |
| properties | StaticSiteUserProvidedFunctionAppARMResource resource specific properties | StaticSiteUserProvidedFunctionAppARMResourceProperti... |


### StaticSiteUserProvidedFunctionAppARMResourceProperti...

| Name | Description | Value |
|-|-|-|
| functionAppRegion | The region of the function app registered with the static site | string |
| functionAppResourceId | The resource id of the function app registered with the static site | string |
## Microsoft.Web/staticSites/config@2020-10-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/staticSites/config@2020-10-01"
  name = "functionappsettings"
  parent_id = "string"
  body = jsonencode({
    properties = {}
    kind = "string"
  })
}

```

### staticSites/config

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'functionappsettings' |
| kind | Kind of resource. | string |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:staticSites |
| properties | Settings. | object |
## Microsoft.Web/staticSites/config@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/staticSites/config@2022-09-01"
  name = "appsettings"
  parent_id = "string"
  body = jsonencode({
    properties = {}
    kind = "string"
  })
}

```

### staticSites/config-appsettings

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'appsettings' |
| kind | Kind of resource. | string |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:staticSites |
| properties | Settings. | object |
## Microsoft.Web/staticSites/config@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/staticSites/config@2022-09-01"
  name = "functionappsettings"
  parent_id = "string"
  body = jsonencode({
    properties = {}
    kind = "string"
  })
}

```

### staticSites/config-functionappsettings

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'functionappsettings' |
| kind | Kind of resource. | string |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:staticSites |
| properties | Settings. | object |
## Microsoft.Web/staticSites/customDomains@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/staticSites/customDomains@2022-09-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      validationMethod = "string"
    }
    kind = "string"
  })
}

```

### staticSites/customDomains

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| kind | Kind of resource. | string |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:staticSites |
| properties | StaticSiteCustomDomainRequestPropertiesARMResource resource specific properties | StaticSiteCustomDomainRequestPropertiesARMResourcePr... |


### StaticSiteCustomDomainRequestPropertiesARMResourcePr...

| Name | Description | Value |
|-|-|-|
| validationMethod | Validation method for adding a custom domain | string |
## Microsoft.Web/staticSites/databaseConnections@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/staticSites/databaseConnections@2022-09-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      connectionIdentity = "string"
      connectionString = "string"
      region = "string"
      resourceId = "string"
    }
    kind = "string"
  })
}

```

### staticSites/databaseConnections

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| kind | Kind of resource. | string |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:staticSites |
| properties | DatabaseConnection resource specific properties | DatabaseConnectionProperties |


### DatabaseConnectionProperties

| Name | Description | Value |
|-|-|-|
| connectionIdentity | If present, the identity is used in conjunction with connection string to connect to the database. Use of the system-assigned managed identity is indicated with the string 'SystemAssigned', while use of a user-assigned managed identity is indicated with the resource id of the managed identity resource. | string |
| connectionString | The connection string to use to connect to the database. | string |
| region | The region of the database resource. | string (required) |
| resourceId | The resource id of the database. | string (required) |
## Microsoft.Web/staticSites/linkedBackends@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/staticSites/linkedBackends@2022-09-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      backendResourceId = "string"
      region = "string"
    }
    kind = "string"
  })
}

```

### staticSites/linkedBackends

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| kind | Kind of resource. | string |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:staticSites |
| properties | StaticSiteLinkedBackendARMResource resource specific properties | StaticSiteLinkedBackendARMResourceProperties |


### StaticSiteLinkedBackendARMResourceProperties

| Name | Description | Value |
|-|-|-|
| backendResourceId | The resource id of the backend linked to the static site | string |
| region | The region of the backend linked to the static site | string |
## Microsoft.Web/staticSites/privateEndpointConnections@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/staticSites/privateEndpointConnections@2022-09-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      privateLinkServiceConnectionState = {
        actionsRequired = "string"
        description = "string"
        status = "string"
      }
    }
    kind = "string"
  })
}

```

### staticSites/privateEndpointConnections

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| kind | Kind of resource. | string |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:staticSites |
| properties | Core resource properties | PrivateLinkConnectionApprovalRequestOrRemotePrivateE... |


### PrivateLinkConnectionApprovalRequestOrRemotePrivateE...

| Name | Description | Value |
|-|-|-|
| privateLinkServiceConnectionState | The state of a private link connection | PrivateLinkConnectionState |


### PrivateLinkConnectionState

| Name | Description | Value |
|-|-|-|
| actionsRequired | ActionsRequired for a private link connection | string |
| description | Description of a private link connection | string |
| status | Status of a private link connection | string |
## Microsoft.Web/staticSites/userProvidedFunctionApps@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/staticSites/userProvidedFunctionApps@2022-09-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      functionAppRegion = "string"
      functionAppResourceId = "string"
    }
    kind = "string"
  })
}

```

### staticSites/userProvidedFunctionApps

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| kind | Kind of resource. | string |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:staticSites |
| properties | StaticSiteUserProvidedFunctionAppARMResource resource specific properties | StaticSiteUserProvidedFunctionAppARMResourceProperti... |


### StaticSiteUserProvidedFunctionAppARMResourceProperti...

| Name | Description | Value |
|-|-|-|
| functionAppRegion | The region of the function app registered with the static site | string |
| functionAppResourceId | The resource id of the function app registered with the static site | string |
