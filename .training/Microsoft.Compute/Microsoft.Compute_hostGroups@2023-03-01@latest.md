```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Compute/hostGroups@2023-03-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      additionalCapabilities = {
        ultraSSDEnabled = bool
      }
      platformFaultDomainCount = int
      supportAutomaticPlacement = bool
    }
    zones = [
      "string"
    ]
  })
}

```

### hostGroups

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | Resource location | string (required) |
| tags | Resource tags | Dictionary of tag names and values. SeeTags in templates |
| properties | Dedicated Host Group Properties. | DedicatedHostGroupProperties |
| zones | Availability Zone to use for this host group. Only single zone is supported. The zone can be assigned only during creation. If not provided, the group supports all zones in the region. If provided, enforces each host in the group to be in the same zone. | string[] |


### DedicatedHostGroupProperties

| Name | Description | Value |
|-|-|-|
| additionalCapabilities | Enables or disables a capability on the dedicated host group. Minimum api-version: 2022-03-01. | DedicatedHostGroupPropertiesAdditionalCapabilities |
| platformFaultDomainCount | Number of fault domains that the host group can span. | int (required) |
| supportAutomaticPlacement | Specifies whether virtual machines or virtual machine scale sets can be placed automatically on the dedicated host group. Automatic placement means resources are allocated on dedicated hosts, that are chosen by Azure, under the dedicated host group. The value is defaulted to 'false' when not provided. Minimum api-version: 2020-06-01. | bool |


### DedicatedHostGroupPropertiesAdditionalCapabilities

| Name | Description | Value |
|-|-|-|
| ultraSSDEnabled | The flag that enables or disables a capability to have UltraSSD Enabled Virtual Machines on Dedicated Hosts of the Dedicated Host Group. For the Virtual Machines to be UltraSSD Enabled, UltraSSDEnabled flag for the resource needs to be set true as well. The value is defaulted to 'false' when not provided. Please refer to /azure/virtual-machines/disks-enable-ultra-ssd for more details on Ultra SSD feature.Note:The ultraSSDEnabled setting can only be enabled for Host Groups that are created as zonal. Minimum api-version: 2022-03-01. | bool |


