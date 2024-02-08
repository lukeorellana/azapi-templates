```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AppPlatform/Spring@2023-03-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      infraResourceGroup = "string"
      managedEnvironmentId = "string"
      marketplaceResource = {
        plan = "string"
        product = "string"
        publisher = "string"
      }
      networkProfile = {
        appNetworkResourceGroup = "string"
        appSubnetId = "string"
        ingressConfig = {
          readTimeoutInSeconds = int
        }
        outboundType = "string"
        serviceCidr = "string"
        serviceRuntimeNetworkResourceGroup = "string"
        serviceRuntimeSubnetId = "string"
      }
      vnetAddons = {
        dataPlanePublicEndpoint = bool
        logStreamPublicEndpoint = bool
      }
      zoneRedundant = bool
    }
    sku = {
      capacity = int
      name = "string"
      tier = "string"
    }
  })
}

```

### Spring

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 4-32Valid characters:Lowercase letters, numbers, and hyphens.Resource name must be unique across Azure. |
| location | The GEO location of the resource. | string |
| tags | Tags of the service which is a list of key value pairs that describe the resource. | Dictionary of tag names and values. SeeTags in templates |
| sku | Sku of the Service resource | Sku |
| properties | Properties of the Service resource | ClusterResourceProperties |


### ClusterResourceProperties

| Name | Description | Value |
|-|-|-|
| infraResourceGroup | The name of the resource group that contains the infrastructure resources | string |
| managedEnvironmentId | The resource Id of the Managed Environment that the Spring Apps instance builds on | string |
| marketplaceResource | Purchasing 3rd party product of the Service resource. | MarketplaceResource |
| networkProfile | Network profile of the Service | NetworkProfile |
| vnetAddons | Additional Service settings in vnet injection instance | ServiceVNetAddons |
| zoneRedundant |  | bool |


### MarketplaceResource

| Name | Description | Value |
|-|-|-|
| plan | The plan id of the 3rd Party Artifact that is being procured. | string |
| product | The 3rd Party artifact that is being procured. | string |
| publisher | The publisher id of the 3rd Party Artifact that is being bought. | string |


### NetworkProfile

| Name | Description | Value |
|-|-|-|
| appNetworkResourceGroup | Name of the resource group containing network resources for customer apps in Azure Spring Apps | string |
| appSubnetId | Fully qualified resource Id of the subnet to host customer apps in Azure Spring Apps | string |
| ingressConfig | Ingress configuration payload for Azure Spring Apps resource. | IngressConfig |
| outboundType | The egress traffic type of Azure Spring Apps VNet instances. | string |
| serviceCidr | Azure Spring Apps service reserved CIDR | string |
| serviceRuntimeNetworkResourceGroup | Name of the resource group containing network resources of Azure Spring Apps Service Runtime | string |
| serviceRuntimeSubnetId | Fully qualified resource Id of the subnet to host Azure Spring Apps Service Runtime | string |


### IngressConfig

| Name | Description | Value |
|-|-|-|
| readTimeoutInSeconds | Ingress read time out in seconds. | int |


### ServiceVNetAddons

| Name | Description | Value |
|-|-|-|
| dataPlanePublicEndpoint | Indicates whether the data plane components(log stream, app connect, remote debugging) in vnet injection instance could be accessed from internet. | bool |
| logStreamPublicEndpoint | Indicates whether the log stream in vnet injection instance could be accessed from internet. | bool |


### Sku

| Name | Description | Value |
|-|-|-|
| capacity | Current capacity of the target resource | int |
| name | Name of the Sku | string |
| tier | Tier of the Sku | string |


