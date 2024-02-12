```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.KubernetesConfiguration/sourceControlConfigurations@2022-11-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      configurationProtectedSettings = {}
      enableHelmOperator = bool
      helmOperatorProperties = {
        chartValues = "string"
        chartVersion = "string"
      }
      operatorInstanceName = "string"
      operatorNamespace = "string"
      operatorParams = "string"
      operatorScope = "string"
      operatorType = "Flux"
      repositoryUrl = "string"
      sshKnownHostsContents = "string"
    }
  })
}

```

### sourceControlConfigurations

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| scope | Use when creating an extension resource at a scope that is different than the deployment scope. | Target resourceFor Bicep, set this property to the symbolic name of the resource to apply theextension resource. |
| properties | Properties to create a Source Control Configuration resource | SourceControlConfigurationProperties |


### SourceControlConfigurationProperties

| Name | Description | Value |
|-|-|-|
| configurationProtectedSettings | Name-value pairs of protected configuration settings for the configuration | object |
| enableHelmOperator | Option to enable Helm Operator for this git configuration. | bool |
| helmOperatorProperties | Properties for Helm operator. | HelmOperatorProperties |
| operatorInstanceName | Instance name of the operator - identifying the specific configuration. | string |
| operatorNamespace | The namespace to which this operator is installed to. Maximum of 253 lower case alphanumeric characters, hyphen and period only. | string |
| operatorParams | Any Parameters for the Operator instance in string format. | string |
| operatorScope | Scope at which the operator will be installed. | 'cluster''namespace' |
| operatorType | Type of the operator | 'Flux' |
| repositoryUrl | Url of the SourceControl Repository. | string |
| sshKnownHostsContents | Base64-encoded known_hosts contents containing public SSH keys required to access private Git instances | string |


### HelmOperatorProperties

| Name | Description | Value |
|-|-|-|
| chartValues | Values override for the operator Helm chart. | string |
| chartVersion | Version of the operator Helm chart. | string |


