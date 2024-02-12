```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DataBoxEdge/dataBoxEdgeDevices/orders@2022-12-01-preview"
  name = "default"
  parent_id = "string"
  body = jsonencode({
    properties = {
      contactInformation = {
        companyName = "string"
        contactPerson = "string"
        emailList = [
          "string"
        ]
        phone = "string"
      }
      shipmentType = "string"
      shippingAddress = {
        addressLine1 = "string"
        addressLine2 = "string"
        addressLine3 = "string"
        city = "string"
        country = "string"
        postalCode = "string"
        state = "string"
      }
    }
  })
}

```

### dataBoxEdgeDevices/orders

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'default' |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:dataBoxEdgeDevices |
| properties | The order properties. | OrderProperties |


### OrderProperties

| Name | Description | Value |
|-|-|-|
| contactInformation | The contact details. | ContactDetails(required) |
| shipmentType | ShipmentType of the order | 'NotApplicable''SelfPickup''ShippedToCustomer' |
| shippingAddress | The shipping address. | Address |


### ContactDetails

| Name | Description | Value |
|-|-|-|
| companyName | The name of the company. | string (required) |
| contactPerson | The contact person name. | string (required) |
| emailList | The email list. | string[] (required) |
| phone | The phone number. | string (required) |


### Address

| Name | Description | Value |
|-|-|-|
| addressLine1 | The address line1. | string |
| addressLine2 | The address line2. | string |
| addressLine3 | The address line3. | string |
| city | The city name. | string |
| country | The country name. | string (required) |
| postalCode | The postal code. | string |
| state | The state name. | string |


