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


