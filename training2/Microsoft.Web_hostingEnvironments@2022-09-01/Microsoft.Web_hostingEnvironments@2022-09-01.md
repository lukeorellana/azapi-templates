```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/hostingEnvironments@2022-09-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      clusterSettings = [
        {
          name = "string"
          value = "string"
        }
      ]
      customDnsSuffixConfiguration = {
        kind = "string"
        properties = {
          certificateUrl = "string"
          dnsSuffix = "string"
          keyVaultReferenceIdentity = "string"
        }
      }
      dedicatedHostCount = int
      dnsSuffix = "string"
      frontEndScaleFactor = int
      internalLoadBalancingMode = "string"
      ipsslAddressCount = int
      multiSize = "string"
      networkingConfiguration = {
        kind = "string"
        properties = {
          allowNewPrivateEndpointConnections = bool
          ftpEnabled = bool
          inboundIpAddressOverride = "string"
          remoteDebugEnabled = bool
        }
      }
      upgradePreference = "string"
      userWhitelistedIpRanges = [
        "string"
      ]
      virtualNetwork = {
        id = "string"
        subnet = "string"
      }
      zoneRedundant = bool
    }
    kind = "string"
  })
}

```

### hostingEnvironments

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | Resource Location. | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| kind | Kind of resource. | string |
| properties | Core resource properties | AppServiceEnvironment |


### AppServiceEnvironment

| Name | Description | Value |
|-|-|-|
| clusterSettings | Custom settings for changing the behavior of the App Service Environment. | NameValuePair[] |
| customDnsSuffixConfiguration | Full view of the custom domain suffix configuration for ASEv3. | CustomDnsSuffixConfiguration |
| dedicatedHostCount | Dedicated Host Count | int |
| dnsSuffix | DNS suffix of the App Service Environment. | string |
| frontEndScaleFactor | Scale factor for front-ends. | int |
| internalLoadBalancingMode | Specifies which endpoints to serve internally in the Virtual Network for the App Service Environment. | 'None''Publishing''Web''Web, Publishing' |
| ipsslAddressCount | Number of IP SSL addresses reserved for the App Service Environment. | int |
| multiSize | Front-end VM size, e.g. "Medium", "Large". | string |
| networkingConfiguration | Full view of networking configuration for an ASE. | AseV3NetworkingConfiguration |
| upgradePreference | Upgrade Preference | 'Early''Late''Manual''None' |
| userWhitelistedIpRanges | User added ip ranges to allow on ASE db | string[] |
| virtualNetwork | Description of the Virtual Network. | VirtualNetworkProfile(required) |
| zoneRedundant | Whether or not this App Service Environment is zone-redundant. | bool |


### NameValuePair

| Name | Description | Value |
|-|-|-|
| name | Pair name. | string |
| value | Pair value. | string |


### CustomDnsSuffixConfiguration

| Name | Description | Value |
|-|-|-|
| kind | Kind of resource. | string |
| properties | CustomDnsSuffixConfiguration resource specific properties | CustomDnsSuffixConfigurationProperties |


### CustomDnsSuffixConfigurationProperties

| Name | Description | Value |
|-|-|-|
| certificateUrl | The URL referencing the Azure Key Vault certificate secret that should be used as the default SSL/TLS certificate for sites with the custom domain suffix. | string |
| dnsSuffix | The default custom domain suffix to use for all sites deployed on the ASE. | string |
| keyVaultReferenceIdentity | The user-assigned identity to use for resolving the key vault certificate reference. If not specified, the system-assigned ASE identity will be used if available. | string |


### AseV3NetworkingConfiguration

| Name | Description | Value |
|-|-|-|
| kind | Kind of resource. | string |
| properties | AseV3NetworkingConfiguration resource specific properties | AseV3NetworkingConfigurationProperties |


### AseV3NetworkingConfigurationProperties

| Name | Description | Value |
|-|-|-|
| allowNewPrivateEndpointConnections | Property to enable and disable new private endpoint connection creation on ASE | bool |
| ftpEnabled | Property to enable and disable FTP on ASEV3 | bool |
| inboundIpAddressOverride | Customer provided Inbound IP Address. Only able to be set on Ase create. | string |
| remoteDebugEnabled | Property to enable and disable Remote Debug on ASEV3 | bool |


### VirtualNetworkProfile

| Name | Description | Value |
|-|-|-|
| id | Resource id of the Virtual Network. | string (required) |
| subnet | Subnet within the Virtual Network. | string |


