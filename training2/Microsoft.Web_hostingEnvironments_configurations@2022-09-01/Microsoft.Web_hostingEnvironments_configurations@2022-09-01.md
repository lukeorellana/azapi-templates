```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/hostingEnvironments/configurations@2022-09-01"
  name = "customdnssuffix"
  parent_id = "string"
  body = jsonencode({
    properties = {
      certificateUrl = "string"
      dnsSuffix = "string"
      keyVaultReferenceIdentity = "string"
    }
    kind = "string"
  })
}

```

### hostingEnvironments/configurations-customdnssuffix

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'customdnssuffix' |
| kind | Kind of resource. | string |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:hostingEnvironments |
| properties | CustomDnsSuffixConfiguration resource specific properties | CustomDnsSuffixConfigurationProperties |


### CustomDnsSuffixConfigurationProperties

| Name | Description | Value |
|-|-|-|
| certificateUrl | The URL referencing the Azure Key Vault certificate secret that should be used as the default SSL/TLS certificate for sites with the custom domain suffix. | string |
| dnsSuffix | The default custom domain suffix to use for all sites deployed on the ASE. | string |
| keyVaultReferenceIdentity | The user-assigned identity to use for resolving the key vault certificate reference. If not specified, the system-assigned ASE identity will be used if available. | string |


```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/hostingEnvironments/configurations@2022-09-01"
  name = "networking"
  parent_id = "string"
  body = jsonencode({
    properties = {
      allowNewPrivateEndpointConnections = bool
      ftpEnabled = bool
      inboundIpAddressOverride = "string"
      remoteDebugEnabled = bool
    }
    kind = "string"
  })
}

```

### hostingEnvironments/configurations-networking

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'networking' |
| kind | Kind of resource. | string |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:hostingEnvironments |
| properties | AseV3NetworkingConfiguration resource specific properties | AseV3NetworkingConfigurationProperties |


### AseV3NetworkingConfigurationProperties

| Name | Description | Value |
|-|-|-|
| allowNewPrivateEndpointConnections | Property to enable and disable new private endpoint connection creation on ASE | bool |
| ftpEnabled | Property to enable and disable FTP on ASEV3 | bool |
| inboundIpAddressOverride | Customer provided Inbound IP Address. Only able to be set on Ase create. | string |
| remoteDebugEnabled | Property to enable and disable Remote Debug on ASEV3 | bool |


