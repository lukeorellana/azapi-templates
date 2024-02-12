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


