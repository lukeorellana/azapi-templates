```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AVS/privateClouds/workloadNetworks/publicIPs@2022-05-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      displayName = "string"
      numberOfPublicIPs = int
    }
  })
}

```

### privateClouds/workloadNetworks/publicIPs

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type: workloadNetworks |
| properties | Public IP Block properties | WorkloadNetworkPublicIPProperties |


### WorkloadNetworkPublicIPProperties

| Name | Description | Value |
|-|-|-|
| displayName | Display name of the Public IP Block. | string |
| numberOfPublicIPs | Number of Public IPs requested. | int |


