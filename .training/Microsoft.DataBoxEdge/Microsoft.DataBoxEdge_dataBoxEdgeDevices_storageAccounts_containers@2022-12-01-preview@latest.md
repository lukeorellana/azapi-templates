```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DataBoxEdge/dataBoxEdgeDevices/storageAccounts/containers@2022-12-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      dataFormat = "string"
    }
  })
}

```

### dataBoxEdgeDevices/storageAccounts/containers

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:storageAccounts |
| properties | The container properties. | ContainerProperties(required) |


### ContainerProperties

| Name | Description | Value |
|-|-|-|
| dataFormat | DataFormat for Container | 'AzureFile''BlockBlob''PageBlob' (required) |


