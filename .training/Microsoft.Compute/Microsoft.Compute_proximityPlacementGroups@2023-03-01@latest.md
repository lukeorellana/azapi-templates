```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Compute/proximityPlacementGroups@2023-03-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      colocationStatus = {
        code = "string"
        displayStatus = "string"
        level = "string"
        message = "string"
        time = "string"
      }
      intent = {
        vmSizes = [
          "string"
        ]
      }
      proximityPlacementGroupType = "string"
    }
    zones = [
      "string"
    ]
  })
}

```

### proximityPlacementGroups

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | Resource location | string (required) |
| tags | Resource tags | Dictionary of tag names and values. SeeTags in templates |
| properties | Describes the properties of a Proximity Placement Group. | ProximityPlacementGroupProperties |
| zones | Specifies the Availability Zone where virtual machine, virtual machine scale set or availability set associated with the  proximity placement group can be created. | string[] |


### ProximityPlacementGroupProperties

| Name | Description | Value |
|-|-|-|
| colocationStatus | Describes colocation status of the Proximity Placement Group. | InstanceViewStatus |
| intent | Specifies the user intent of the proximity placement group. | ProximityPlacementGroupPropertiesIntent |
| proximityPlacementGroupType | Specifies the type of the proximity placement group. Possible values are:Standard: Co-locate resources within an Azure region or Availability Zone.Ultra: For future use. | 'Standard''Ultra' |


### InstanceViewStatus

| Name | Description | Value |
|-|-|-|
| code | The status code. | string |
| displayStatus | The short localizable label for the status. | string |
| level | The level code. | 'Error''Info''Warning' |
| message | The detailed status message, including for alerts and error messages. | string |
| time | The time of the status. | string |


### ProximityPlacementGroupPropertiesIntent

| Name | Description | Value |
|-|-|-|
| vmSizes | Specifies possible sizes of virtual machines that can be created in the proximity placement group. | string[] |


