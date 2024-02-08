```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AppPlatform/Spring/applicationAccelerators@2023-03-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {}
    sku = {
      capacity = int
      name = "string"
      tier = "string"
    }
  })
}

```

### Spring/applicationAccelerators

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| sku | Sku of the application accelerator resource | Sku |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:Spring |
| properties | Application accelerator properties payload | ApplicationAcceleratorProperties |


### Sku

| Name | Description | Value |
|-|-|-|
| capacity | Current capacity of the target resource | int |
| name | Name of the Sku | string |
| tier | Tier of the Sku | string |


