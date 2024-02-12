```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/cloudServiceSlots@2023-04-01"
  name = "swap"
  parent_id = "string"
  body = jsonencode({
    properties = {
      slotType = "string"
    }
  })
}

```

### cloudServiceSlots

| Name | Description | Value |
|-|-|-|
| name | The resource name | 'swap' |
| scope | Use when creating an extension resource at a scope that is different than the deployment scope. | Target resourceFor Bicep, set this property to the symbolic name of the resource to apply theextension resource. |
| properties | Swap resource properties | SwapResourceProperties |


### SwapResourceProperties

| Name | Description | Value |
|-|-|-|
| slotType | Specifies slot info on a cloud service | 'Production''Staging' |


