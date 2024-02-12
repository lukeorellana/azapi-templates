```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AVS/privateClouds/workloadNetworks/vmGroups@2022-05-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      displayName = "string"
      members = [
        "string"
      ]
      revision = int
    }
  })
}

```

### privateClouds/workloadNetworks/vmGroups

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type: workloadNetworks |
| properties | VM Group properties. | WorkloadNetworkVMGroupProperties |


### WorkloadNetworkVMGroupProperties

| Name | Description | Value |
|-|-|-|
| displayName | Display name of the VM group. | string |
| members | Virtual machine members of this group. | string[] |
| revision | NSX revision number. | int |


