```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AVS/privateClouds/workloadNetworks/dnsZones@2022-05-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      displayName = "string"
      dnsServerIps = [
        "string"
      ]
      dnsServices = int
      domain = [
        "string"
      ]
      revision = int
      sourceIp = "string"
    }
  })
}

```

### privateClouds/workloadNetworks/dnsZones

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type: workloadNetworks |
| properties | DNS Zone properties | WorkloadNetworkDnsZoneProperties |


### WorkloadNetworkDnsZoneProperties

| Name | Description | Value |
|-|-|-|
| displayName | Display name of the DNS Zone. | string |
| dnsServerIps | DNS Server IP array of the DNS Zone. | string[] |
| dnsServices | Number of DNS Services using the DNS zone. | int |
| domain | Domain names of the DNS Zone. | string[] |
| revision | NSX revision number. | int |
| sourceIp | Source IP of the DNS Zone. | string |


