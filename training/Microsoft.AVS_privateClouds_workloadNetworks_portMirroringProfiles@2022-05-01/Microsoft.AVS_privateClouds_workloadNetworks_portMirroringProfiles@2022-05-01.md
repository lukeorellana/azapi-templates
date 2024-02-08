```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AVS/privateClouds/workloadNetworks/portMirroringProfiles@2022-05-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      destination = "string"
      direction = "string"
      displayName = "string"
      revision = int
      source = "string"
    }
  })
}

```

### privateClouds/workloadNetworks/portMirroringProfiles

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type: workloadNetworks |
| properties | Port Mirroring Properties. | WorkloadNetworkPortMirroringProperties |


### WorkloadNetworkPortMirroringProperties

| Name | Description | Value |
|-|-|-|
| destination | Destination VM Group. | string |
| direction | Direction of port mirroring profile. | 'BIDIRECTIONAL''EGRESS''INGRESS' |
| displayName | Display name of the port mirroring profile. | string |
| revision | NSX revision number. | int |
| source | Source VM Group. | string |


