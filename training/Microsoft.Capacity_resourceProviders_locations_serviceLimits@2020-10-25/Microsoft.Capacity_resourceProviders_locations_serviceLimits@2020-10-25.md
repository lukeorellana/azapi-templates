```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Capacity/resourceProviders/locations/serviceLimits@2020-10-25"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      limit = int
      name = {
        value = "string"
      }
      resourceType = "string"
      unit = "string"
    }
  })
}

```

### resourceProviders/locations/serviceLimits

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type: locations |
| properties | Quota properties for the resource. | QuotaProperties |


### QuotaProperties

| Name | Description | Value |
|-|-|-|
| limit | Quota properties. | int |
| name | Name of the resource provide by the resource provider. Use this property for quotaRequests resource operations. | ResourceName |
| properties | Additional properties for the specified resource provider. | For Bicep, you can use theany()function. |
| resourceType | The name of the resource type. | 'dedicated''lowPriority''serviceSpecific''shared''standard' |
| unit | The limit units, such ascountandbytes. Use the unit field provided in the response of the GET quota operation. | string |


### ResourceName

| Name | Description | Value |
|-|-|-|
| value | Resource name. | string |


