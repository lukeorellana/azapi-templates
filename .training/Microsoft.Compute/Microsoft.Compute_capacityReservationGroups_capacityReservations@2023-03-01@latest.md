```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Compute/capacityReservationGroups/capacityReservations@2023-03-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {}
    zones = [
      "string"
    ]
    sku = {
      capacity = int
      name = "string"
      tier = "string"
    }
  })
}

```

### capacityReservationGroups/capacityReservations

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | Resource location | string (required) |
| tags | Resource tags | Dictionary of tag names and values. SeeTags in templates |
| sku | SKU of the resource for which capacity needs be reserved. The SKU name and capacity is required to be set. Currently VM Skus with the capability called 'CapacityReservationSupported' set to true are supported. Refer to List Microsoft.Compute SKUs in a region (/rest/api/compute/resourceskus/list) for supported values. | Sku(required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:capacityReservationGroups |
| properties | Properties of the Capacity reservation. | CapacityReservationProperties |
| zones | Availability Zone to use for this capacity reservation. The zone has to be single value and also should be part for the list of zones specified during the capacity reservation group creation. The zone can be assigned only during creation. If not provided, the reservation supports only non-zonal deployments. If provided, enforces VM/VMSS using this capacity reservation to be in same zone. | string[] |


### Sku

| Name | Description | Value |
|-|-|-|
| capacity | Specifies the number of virtual machines in the scale set. | int |
| name | The sku name. | string |
| tier | Specifies the tier of virtual machines in a scale set.Possible Values:StandardBasic | string |


