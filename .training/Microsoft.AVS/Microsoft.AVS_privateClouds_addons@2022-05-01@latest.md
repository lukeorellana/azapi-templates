```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AVS/privateClouds/addons@2022-05-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      addonType = "string"
      // For remaining properties, see AddonProperties objects
    }
  })
}

```

### privateClouds/addons

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:privateClouds |
| properties | The properties of an addon resource | AddonProperties |


### AddonProperties

| Name | Description | Value |
|-|-|-|
| addonType | Set the object type | ArcHCXSRMVR(required) |


### AddonArcProperties

| Name | Description | Value |
|-|-|-|
| addonType | The type of private cloud addon | 'Arc' (required) |
| vCenter | The VMware vCenter resource ID | string |


### AddonHcxProperties

| Name | Description | Value |
|-|-|-|
| addonType | The type of private cloud addon | 'HCX' (required) |
| offer | The HCX offer, example VMware MaaS Cloud Provider (Enterprise) | string (required) |


### AddonSrmProperties

| Name | Description | Value |
|-|-|-|
| addonType | The type of private cloud addon | 'SRM' (required) |
| licenseKey | The Site Recovery Manager (SRM) license | string |


### AddonVrProperties

| Name | Description | Value |
|-|-|-|
| addonType | The type of private cloud addon | 'VR' (required) |
| vrsCount | The vSphere Replication Server (VRS) count | int (required) |


