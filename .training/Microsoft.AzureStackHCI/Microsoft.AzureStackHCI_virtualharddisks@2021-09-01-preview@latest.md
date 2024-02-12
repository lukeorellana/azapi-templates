```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AzureStackHCI/virtualharddisks@2021-09-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      blockSizeBytes = int
      containerId = "string"
      diskFileFormat = "string"
      diskSizeBytes = int
      dynamic = bool
      hyperVGeneration = "string"
      logicalSectorBytes = int
      physicalSectorBytes = int
      resourceName = "string"
    }
    extendedLocation = {
      name = "string"
      type = "CustomLocation"
    }
  })
}

```

### virtualharddisks

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| extendedLocation | The extendedLocation of the resource. | ExtendedLocation |
| properties | Properties of a virtual hard disk resource | VirtualharddisksProperties |


### ExtendedLocation

| Name | Description | Value |
|-|-|-|
| name | The name of the extended location. | string |
| type | The type of the extended location. | 'CustomLocation' |


### VirtualharddisksProperties

| Name | Description | Value |
|-|-|-|
| blockSizeBytes |  | int |
| containerId | Storage ContainerID of the storage container to be used for VHD | string |
| diskFileFormat | The format of the actual VHD file [vhd, vhdx] | 'vhd''vhdx' |
| diskSizeBytes | diskSizeBytes - size of the disk in GB | int |
| dynamic | Boolean for enabling dynamic sizing on the virtual hard disk | bool |
| hyperVGeneration | The hypervisor generation of the Virtual Machine [V1, V2] | 'V1''V2' |
| logicalSectorBytes |  | int |
| physicalSectorBytes |  | int |
| resourceName | name of the object to be used in moc | string |


