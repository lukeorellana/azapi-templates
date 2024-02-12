```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ApiManagement/service/gateways/hostnameConfigurations@2023-05-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      certificateId = "string"
      hostname = "string"
      http2Enabled = bool
      negotiateClientCertificate = bool
      tls10Enabled = bool
      tls11Enabled = bool
    }
  })
}

```

### service/gateways/hostnameConfigurations

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:gateways |
| properties | Gateway hostname configuration details. | GatewayHostnameConfigurationContractProperties |


### GatewayHostnameConfigurationContractProperties

| Name | Description | Value |
|-|-|-|
| certificateId | Identifier of Certificate entity that will be used for TLS connection establishment | string |
| hostname | Hostname value. Supports valid domain name, partial or full wildcard | string |
| http2Enabled | Specifies if HTTP/2.0 is supported | bool |
| negotiateClientCertificate | Determines whether gateway requests client certificate | bool |
| tls10Enabled | Specifies if TLS 1.0 is supported | bool |
| tls11Enabled | Specifies if TLS 1.1 is supported | bool |


