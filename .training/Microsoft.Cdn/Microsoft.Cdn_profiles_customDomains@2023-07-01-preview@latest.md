```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Cdn/profiles/customDomains@2023-07-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      azureDnsZone = {
        id = "string"
      }
      extendedProperties = {
        {customized property} = "string"
      }
      hostName = "string"
      preValidatedCustomDomainResourceId = {
        id = "string"
      }
      tlsSettings = {
        certificateType = "string"
        minimumTlsVersion = "string"
        secret = {
          id = "string"
        }
      }
    }
  })
}

```

### profiles/customDomains

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:profiles |
| properties | The JSON object that contains the properties of the domain to create. | AFDDomainProperties |


### AFDDomainProperties

| Name | Description | Value |
|-|-|-|
| azureDnsZone | Resource reference to the Azure DNS zone | ResourceReference |
| extendedProperties | Key-Value pair representing migration properties for domains. | AFDDomainPropertiesExtendedProperties |
| hostName | The host name of the domain. Must be a domain name. | string (required) |
| preValidatedCustomDomainResourceId | Resource reference to the Azure resource where custom domain ownership was prevalidated | ResourceReference |
| tlsSettings | The configuration specifying how to enable HTTPS for the domain - using AzureFrontDoor managed certificate or user's own certificate. If not specified, enabling ssl uses AzureFrontDoor managed certificate by default. | AFDDomainHttpsParameters |


### ResourceReference

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |


### AFDDomainPropertiesExtendedProperties

| Name | Description | Value |
|-|-|-|
| {customized property} |  | string |


### AFDDomainHttpsParameters

| Name | Description | Value |
|-|-|-|
| certificateType | Defines the source of the SSL certificate. | 'AzureFirstPartyManagedCertificate''CustomerCertificate''ManagedCertificate' (required) |
| minimumTlsVersion | TLS protocol version that will be used for Https | 'TLS10''TLS12' |
| secret | Resource reference to the secret. ie. subs/rg/profile/secret | ResourceReference |


