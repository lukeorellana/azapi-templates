```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AVS/privateClouds/clusters/placementPolicies@2022-05-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      displayName = "string"
      state = "string"
      type = "string"
      // For remaining properties, see PlacementPolicyProperties objects
    }
  })
}

```

### privateClouds/clusters/placementPolicies

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:clusters |
| properties | placement policy properties | PlacementPolicyProperties |


### PlacementPolicyProperties

| Name | Description | Value |
|-|-|-|
| displayName | Display name of the placement policy | string |
| state | Whether the placement policy is enabled or disabled | 'Disabled''Enabled' |
| type | Set the object type | VmHostVmVm(required) |


### VmHostPlacementPolicyProperties

| Name | Description | Value |
|-|-|-|
| type | placement policy type | 'VmHost' (required) |
| affinityStrength | vm-host placement policy affinity strength (should/must) | 'Must''Should' |
| affinityType | placement policy affinity type | 'Affinity''AntiAffinity' (required) |
| azureHybridBenefitType | placement policy azure hybrid benefit opt-in type | 'None''SqlHost' |
| hostMembers | Host members list | string[] (required) |
| vmMembers | Virtual machine members list | string[] (required) |


### VmPlacementPolicyProperties

| Name | Description | Value |
|-|-|-|
| type | placement policy type | 'VmVm' (required) |
| affinityType | placement policy affinity type | 'Affinity''AntiAffinity' (required) |
| vmMembers | Virtual machine members list | string[] (required) |


