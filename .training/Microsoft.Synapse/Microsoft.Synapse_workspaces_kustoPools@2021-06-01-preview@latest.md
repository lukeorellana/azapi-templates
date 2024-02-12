```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Synapse/workspaces/kustoPools@2021-06-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      enablePurge = bool
      enableStreamingIngest = bool
      optimizedAutoscale = {
        isEnabled = bool
        maximum = int
        minimum = int
        version = int
      }
      workspaceUID = "string"
    }
    sku = {
      capacity = int
      name = "string"
      size = "string"
    }
  })
}

```

### workspaces/kustoPools

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| sku | The SKU of the kusto pool. | AzureSku(required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:workspaces |
| properties | The kusto pool properties. | KustoPoolProperties |


### KustoPoolProperties

| Name | Description | Value |
|-|-|-|
| enablePurge | A boolean value that indicates if the purge operations are enabled. | bool |
| enableStreamingIngest | A boolean value that indicates if the streaming ingest is enabled. | bool |
| optimizedAutoscale | Optimized auto scale definition. | OptimizedAutoscale |
| workspaceUID | The workspace unique identifier. | string |


### OptimizedAutoscale

| Name | Description | Value |
|-|-|-|
| isEnabled | A boolean value that indicate if the optimized autoscale feature is enabled or not. | bool (required) |
| maximum | Maximum allowed instances count. | int (required) |
| minimum | Minimum allowed instances count. | int (required) |
| version | The version of the template defined, for instance 1. | int (required) |


### AzureSku

| Name | Description | Value |
|-|-|-|
| capacity | The number of instances of the cluster. | int |
| name | SKU name. | 'Compute optimized''Storage optimized' (required) |
| size | SKU size. | 'Extra small''Large''Medium''Small' (required) |


