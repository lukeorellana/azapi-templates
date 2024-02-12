```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.LabServices/labPlans/images@2022-08-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      availableRegions = [
        "string"
      ]
      enabledState = "string"
    }
  })
}

```

### labPlans/images

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:labPlans |
| properties | Image resource properties | ImageProperties(required) |


### ImageProperties

| Name | Description | Value |
|-|-|-|
| availableRegions | The available regions of the image in the shared gallery. | string[] |
| enabledState | Is the image enabled | 'Disabled''Enabled' |


