```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ConnectedVMwarevSphere/virtualMachines/hybridIdentityMetadata@2022-07-15-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      publicKey = "string"
      vmId = "string"
    }
  })
}

```

### virtualMachines/hybridIdentityMetadata

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:virtualMachines |
| properties | Resource properties. | HybridIdentityMetadataProperties(required) |


### HybridIdentityMetadataProperties

| Name | Description | Value |
|-|-|-|
| publicKey | Gets or sets the Public Key. | string |
| vmId | Gets or sets the Vm Id. | string |


