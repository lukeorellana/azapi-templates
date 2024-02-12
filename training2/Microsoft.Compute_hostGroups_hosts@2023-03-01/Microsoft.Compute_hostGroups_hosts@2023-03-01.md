```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Compute/hostGroups/hosts@2023-03-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      autoReplaceOnFailure = bool
      licenseType = "string"
      platformFaultDomain = int
    }
    sku = {
      capacity = int
      name = "string"
      tier = "string"
    }
  })
}

```

### hostGroups/hosts

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | Resource location | string (required) |
| tags | Resource tags | Dictionary of tag names and values. SeeTags in templates |
| sku | SKU of the dedicated host for Hardware Generation and VM family. Only name is required to be set. List Microsoft.Compute SKUs for a list of possible values. | Sku(required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:hostGroups |
| properties | Properties of the dedicated host. | DedicatedHostProperties |


### DedicatedHostProperties

| Name | Description | Value |
|-|-|-|
| autoReplaceOnFailure | Specifies whether the dedicated host should be replaced automatically in case of a failure. The value is defaulted to 'true' when not provided. | bool |
| licenseType | Specifies the software license type that will be applied to the VMs deployed on the dedicated host. Possible values are:None,Windows_Server_Hybrid,Windows_Server_Perpetual.The default value is:None. | 'None''Windows_Server_Hybrid''Windows_Server_Perpetual' |
| platformFaultDomain | Fault domain of the dedicated host within a dedicated host group. | int |


### Sku

| Name | Description | Value |
|-|-|-|
| capacity | Specifies the number of virtual machines in the scale set. | int |
| name | The sku name. | string |
| tier | Specifies the tier of virtual machines in a scale set.Possible Values:StandardBasic | string |


