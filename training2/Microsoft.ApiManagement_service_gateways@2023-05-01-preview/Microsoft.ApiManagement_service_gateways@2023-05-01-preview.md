```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ApiManagement/service/gateways@2023-05-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      description = "string"
      locationData = {
        city = "string"
        countryOrRegion = "string"
        district = "string"
        name = "string"
      }
    }
  })
}

```

### service/gateways

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:service |
| properties | Gateway details. | GatewayContractProperties |


### GatewayContractProperties

| Name | Description | Value |
|-|-|-|
| description | Gateway description | string |
| locationData | Gateway location. | ResourceLocationDataContract |


### ResourceLocationDataContract

| Name | Description | Value |
|-|-|-|
| city | The city or locality where the resource is located. | string |
| countryOrRegion | The country or region where the resource is located. | string |
| district | The district, state, or province where the resource is located. | string |
| name | A canonical name for the geographic or physical location. | string (required) |


