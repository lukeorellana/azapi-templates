```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/sites/slots/hostNameBindings@2022-09-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      azureResourceName = "string"
      azureResourceType = "string"
      customHostNameDnsRecordType = "string"
      domainId = "string"
      hostNameType = "string"
      siteName = "string"
      sslState = "string"
      thumbprint = "string"
    }
    kind = "string"
  })
}

```

### sites/slots/hostNameBindings

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| kind | Kind of resource. | string |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:slots |
| properties | HostNameBinding resource specific properties | HostNameBindingProperties |


### HostNameBindingProperties

| Name | Description | Value |
|-|-|-|
| azureResourceName | Azure resource name. | string |
| azureResourceType | Azure resource type. | 'TrafficManager''Website' |
| customHostNameDnsRecordType | Custom DNS record type. | 'A''CName' |
| domainId | Fully qualified ARM domain resource URI. | string |
| hostNameType | Hostname type. | 'Managed''Verified' |
| siteName | App Service app name. | string |
| sslState | SSL type | 'Disabled''IpBasedEnabled''SniEnabled' |
| thumbprint | SSL certificate thumbprint | string |


