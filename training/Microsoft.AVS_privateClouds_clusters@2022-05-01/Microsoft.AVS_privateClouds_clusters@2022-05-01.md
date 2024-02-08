```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AVS/privateClouds/clusters@2022-05-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      clusterSize = int
      hosts = [
        "string"
      ]
    }
    sku = {
      name = "string"
    }
  })
}

```

### privateClouds/clusters

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| sku | The cluster SKU | Sku(required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:privateClouds |
| properties | The properties of a cluster resource | ClusterProperties |


### ClusterProperties

| Name | Description | Value |
|-|-|-|
| clusterSize | The cluster size | int |
| hosts | The hosts | string[] |


### Sku

| Name | Description | Value |
|-|-|-|
| name | The name of the SKU. | string (required) |


