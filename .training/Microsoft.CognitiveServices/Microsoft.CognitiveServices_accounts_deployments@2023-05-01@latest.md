```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.CognitiveServices/accounts/deployments@2023-05-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      model = {
        format = "string"
        name = "string"
        source = "string"
        version = "string"
      }
      raiPolicyName = "string"
      scaleSettings = {
        capacity = int
        scaleType = "string"
      }
      versionUpgradeOption = "string"
    }
    sku = {
      capacity = int
      family = "string"
      name = "string"
      size = "string"
      tier = "string"
    }
  })
}

```

### accounts/deployments

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| sku | The resource model definition representing SKU | Sku |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:accounts |
| properties | Properties of Cognitive Services account deployment. | DeploymentProperties |


### DeploymentProperties

| Name | Description | Value |
|-|-|-|
| model | Properties of Cognitive Services account deployment model. | DeploymentModel |
| raiPolicyName | The name of RAI policy. | string |
| scaleSettings | Properties of Cognitive Services account deployment model. | DeploymentScaleSettings |
| versionUpgradeOption | Deployment model version upgrade option. | 'NoAutoUpgrade''OnceCurrentVersionExpired''OnceNewDefaultVersionAvailable' |


### DeploymentModel

| Name | Description | Value |
|-|-|-|
| format | Deployment model format. | string |
| name | Deployment model name. | string |
| source | Optional. Deployment model source ARM resource ID. | string |
| version | Optional. Deployment model version. If version is not specified, a default version will be assigned. The default version is different for different models and might change when there is new version available for a model. Default version for a model could be found from list models API. | string |


### DeploymentScaleSettings

| Name | Description | Value |
|-|-|-|
| capacity | Deployment capacity. | int |
| scaleType | Deployment scale type. | 'Manual''Standard' |


### Sku

| Name | Description | Value |
|-|-|-|
| capacity | If the SKU supports scale out/in then the capacity integer should be included. If scale out/in is not possible for the resource this may be omitted. | int |
| family | If the service has different generations of hardware, for the same SKU, then that can be captured here. | string |
| name | The name of the SKU. Ex - P3. It is typically a letter+number code | string (required) |
| size | The SKU size. When the name field is the combination of tier and some other value, this would be the standalone code. | string |
| tier | This field is required to be implemented by the Resource Provider if the service has more than one tier, but is not required on a PUT. | 'Basic''Enterprise''Free''Premium''Standard' |


