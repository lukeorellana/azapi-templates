```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AVS/privateClouds/workloadNetworks/dnsServices@2022-05-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      defaultDnsZone = "string"
      displayName = "string"
      dnsServiceIp = "string"
      fqdnZones = [
        "string"
      ]
      logLevel = "string"
      revision = int
    }
  })
}

```

### privateClouds/workloadNetworks/dnsServices

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type: workloadNetworks |
| properties | DNS Service properties | WorkloadNetworkDnsServiceProperties |


### WorkloadNetworkDnsServiceProperties

| Name | Description | Value |
|-|-|-|
| defaultDnsZone | Default DNS zone of the DNS Service. | string |
| displayName | Display name of the DNS Service. | string |
| dnsServiceIp | DNS service IP of the DNS Service. | string |
| fqdnZones | FQDN zones of the DNS Service. | string[] |
| logLevel | DNS Service log level. | 'DEBUG''ERROR''FATAL''INFO''WARNING' |
| revision | NSX revision number. | int |


