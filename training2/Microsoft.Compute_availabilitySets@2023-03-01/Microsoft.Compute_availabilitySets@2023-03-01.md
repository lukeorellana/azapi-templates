```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Compute/availabilitySets@2023-03-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      platformFaultDomainCount = int
      platformUpdateDomainCount = int
      proximityPlacementGroup = {
        id = "string"
      }
      virtualMachines = [
        {
          id = "string"
        }
      ]
    }
    sku = {
      capacity = int
      name = "string"
      tier = "string"
    }
  })
}

```

### availabilitySets

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 1-80Valid characters:Alphanumerics, underscores, periods, and hyphens.Start with alphanumeric. End with alphanumeric or underscore. |
| location | Resource location | string (required) |
| tags | Resource tags | Dictionary of tag names and values. SeeTags in templates |
| sku | Sku of the availability set, only name is required to be set. See AvailabilitySetSkuTypes for possible set of values. Use 'Aligned' for virtual machines with managed disks and 'Classic' for virtual machines with unmanaged disks. Default value is 'Classic'. | Sku |
| properties | The instance view of a resource. | AvailabilitySetProperties |


### AvailabilitySetProperties

| Name | Description | Value |
|-|-|-|
| platformFaultDomainCount | Fault Domain count. | int |
| platformUpdateDomainCount | Update Domain count. | int |
| proximityPlacementGroup | Specifies information about the proximity placement group that the availability set should be assigned to. Minimum api-version: 2018-04-01. | SubResource |
| virtualMachines | A list of references to all virtual machines in the availability set. | SubResource[] |


### SubResource

| Name | Description | Value |
|-|-|-|
| id | Resource Id | string |


### Sku

| Name | Description | Value |
|-|-|-|
| capacity | Specifies the number of virtual machines in the scale set. | int |
| name | The sku name. | string |
| tier | Specifies the tier of virtual machines in a scale set.Possible Values:StandardBasic | string |


