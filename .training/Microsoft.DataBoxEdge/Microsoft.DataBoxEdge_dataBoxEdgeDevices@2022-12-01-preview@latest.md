```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DataBoxEdge/dataBoxEdgeDevices@2022-12-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  identity {
    type = "string"
  }
  body = jsonencode({
    properties = {
      dataResidency = {
        type = "string"
      }
    }
    sku = {
      name = "string"
      tier = "Standard"
    }
    etag = "string"
  })
}

```

### dataBoxEdgeDevices

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | The location of the device. This is a supported and registered Azure geographical region (for example, West US, East US, or Southeast Asia). The geographical region of a device cannot be changed once it is created, but if an identical geographical region is specified on update, the request will succeed. | string (required) |
| tags | The list of tags that describe the device. These tags can be used to view and group this device (across resource groups). | Dictionary of tag names and values. SeeTags in templates |
| sku | The SKU type. | Sku |
| etag | The etag for the devices. | string |
| identity | Msi identity of the resource | ResourceIdentity |
| properties | The properties of the Data Box Edge/Gateway device. | DataBoxEdgeDeviceProperties |


### ResourceIdentity

| Name | Description | Value |
|-|-|-|
| type | Identity type | 'None''SystemAssigned''UserAssigned' |


### DataBoxEdgeDeviceProperties

| Name | Description | Value |
|-|-|-|
| dataResidency | The details of data-residency related properties for this resource | DataResidency |


### DataResidency

| Name | Description | Value |
|-|-|-|
| type | DataResidencyType enum | 'GeoZoneReplication''ZoneReplication' |


### Sku

| Name | Description | Value |
|-|-|-|
| name | SKU name. | 'EP2_128_1T4_Mx1_W''EP2_128_GPU1_Mx1_W''EP2_256_2T4_W''EP2_256_GPU2_Mx1''EP2_64_1VPU_W''EP2_64_Mx1_W''Edge''EdgeMR_Mini''EdgeMR_TCP''EdgePR_Base''EdgePR_Base_UPS''EdgeP_Base''EdgeP_High''GPU''Gateway''Management''RCA_Large''RCA_Small''RDC''TCA_Large''TCA_Small''TDC''TEA_1Node''TEA_1Node_Heater''TEA_1Node_UPS''TEA_1Node_UPS_Heater''TEA_4Node_Heater''TEA_4Node_UPS_Heater''TMA' |
| tier | The SKU tier. This is based on the SKU name. | 'Standard' |


