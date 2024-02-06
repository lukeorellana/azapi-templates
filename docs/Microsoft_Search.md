## Microsoft.Search/searchServices@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Search/searchServices@2022-09-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  identity {
    type =  "SystemAssigned"
  }
  body = jsonencode({
    properties = {
      authOptions = {
        aadOrApiKey = {
          aadAuthFailureMode = "string"
        }
      }
      disableLocalAuth = bool
      encryptionWithCmk = {
        enforcement = "string"
      }
      hostingMode = "string"
      networkRuleSet = {
        ipRules = [
          {
            value = "string"
          }
        ]
      }
      partitionCount = int
      publicNetworkAccess = "string"
      replicaCount = int
    }
    sku = {
      name = "string"
    }
  })
}

```

### searchServices

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| sku | The SKU of the Search Service, which determines price tier and capacity limits. This property is required when creating a new Search Service. | Sku |
| identity | The identity of the resource. | Identity |
| properties | Properties of the search service. | SearchServiceProperties |


### Identity

| Name | Description | Value |
|-|-|-|
| type | The identity type. | 'None''SystemAssigned' (required) |


### SearchServiceProperties

| Name | Description | Value |
|-|-|-|
| authOptions | Defines the options for how the data plane API of a search service authenticates requests. This cannot be set if 'disableLocalAuth' is set to true. | DataPlaneAuthOptions |
| disableLocalAuth | When set to true, calls to the search service will not be permitted to utilize API keys for authentication. This cannot be set to true if 'dataPlaneAuthOptions' are defined. | bool |
| encryptionWithCmk | Specifies any policy regarding encryption of resources (such as indexes) using customer manager keys within a search service. | EncryptionWithCmk |
| hostingMode | Applicable only for the standard3 SKU. You can set this property to enable up to 3 high density partitions that allow up to 1000 indexes, which is much higher than the maximum indexes allowed for any other SKU. For the standard3 SKU, the value is either 'default' or 'highDensity'. For all other SKUs, this value must be 'default'. | 'default''highDensity' |
| networkRuleSet | Network specific rules that determine how the Azure Cognitive Search service may be reached. | NetworkRuleSet |
| partitionCount | The number of partitions in the search service; if specified, it can be 1, 2, 3, 4, 6, or 12. Values greater than 1 are only valid for standard SKUs. For 'standard3' services with hostingMode set to 'highDensity', the allowed values are between 1 and 3. | int |
| publicNetworkAccess | This value can be set to 'enabled' to avoid breaking changes on existing customer resources and templates. If set to 'disabled', traffic over public interface is not allowed, and private endpoint connections would be the exclusive access method. | 'disabled''enabled' |
| replicaCount | The number of replicas in the search service. If specified, it must be a value between 1 and 12 inclusive for standard SKUs or between 1 and 3 inclusive for basic SKU. | int |


### DataPlaneAuthOptions

| Name | Description | Value |
|-|-|-|
| aadOrApiKey | Indicates that either the API key or an access token from Azure Active Directory can be used for authentication. | DataPlaneAadOrApiKeyAuthOption |
| apiKeyOnly | Indicates that only the API key needs to be used for authentication. | For Bicep, you can use theany()function. |


### DataPlaneAadOrApiKeyAuthOption

| Name | Description | Value |
|-|-|-|
| aadAuthFailureMode | Describes what response the data plane API of a Search service would send for requests that failed authentication. | 'http401WithBearerChallenge''http403' |


### EncryptionWithCmk

| Name | Description | Value |
|-|-|-|
| enforcement | Describes how a search service should enforce having one or more non customer encrypted resources. | 'Disabled''Enabled''Unspecified' |


### NetworkRuleSet

| Name | Description | Value |
|-|-|-|
| ipRules | A list of IP restriction rules that defines the inbound network(s) with allowing access to the search service endpoint. At the meantime, all other public IP networks are blocked by the firewall. These restriction rules are applied only when the 'publicNetworkAccess' of the search service is 'enabled'; otherwise, traffic over public interface is not allowed even with any public IP rules, and private endpoint connections would be the exclusive access method. | IpRule[] |


### IpRule

| Name | Description | Value |
|-|-|-|
| value | Value corresponding to a single IPv4 address (eg., 123.1.2.3) or an IP range in CIDR format (eg., 123.1.2.3/24) to be allowed. | string |


### Sku

| Name | Description | Value |
|-|-|-|
| name | The SKU of the search service. Valid values include: 'free': Shared service. 'basic': Dedicated service with up to 3 replicas. 'standard': Dedicated service with up to 12 partitions and 12 replicas. 'standard2': Similar to standard, but with more capacity per search unit. 'standard3': The largest Standard offering with up to 12 partitions and 12 replicas (or up to 3 partitions with more indexes if you also set the hostingMode property to 'highDensity'). 'storage_optimized_l1': Supports 1TB per partition, up to 12 partitions. 'storage_optimized_l2': Supports 2TB per partition, up to 12 partitions.' | 'basic''free''standard''standard2''standard3''storage_optimized_l1''storage_optimized_l2' |
## Microsoft.Search/searchServices/privateEndpointConnections@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Search/searchServices/privateEndpointConnections@2022-09-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      groupId = "string"
      privateEndpoint = {
        id = "string"
      }
      privateLinkServiceConnectionState = {
        actionsRequired = "string"
        description = "string"
        status = "string"
      }
      provisioningState = "string"
    }
  })
}

```

### searchServices/privateEndpointConnections

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:searchServices |
| properties | Describes the properties of an existing Private Endpoint connection to the Azure Cognitive Search service. | PrivateEndpointConnectionProperties |


### PrivateEndpointConnectionProperties

| Name | Description | Value |
|-|-|-|
| groupId | The group id from the provider of resource the private link service connection is for. | string |
| privateEndpoint | The private endpoint resource from Microsoft.Network provider. | PrivateEndpointConnectionPropertiesPrivateEndpoint |
| privateLinkServiceConnectionState | Describes the current state of an existing Private Link Service connection to the Azure Private Endpoint. | PrivateEndpointConnectionPropertiesPrivateLinkServic... |
| provisioningState | The provisioning state of the private link service connection. Can be Updating, Deleting, Failed, Succeeded, or Incomplete | 'Canceled''Deleting''Failed''Incomplete''Succeeded''Updating' |


### PrivateEndpointConnectionPropertiesPrivateEndpoint

| Name | Description | Value |
|-|-|-|
| id | The resource id of the private endpoint resource from Microsoft.Network provider. | string |


### PrivateEndpointConnectionPropertiesPrivateLinkServic...

| Name | Description | Value |
|-|-|-|
| actionsRequired | A description of any extra actions that may be required. | string |
| description | The description for the private link service connection state. | string |
| status | Status of the the private link service connection. Can be Pending, Approved, Rejected, or Disconnected. | 'Approved''Disconnected''Pending''Rejected' |
## Microsoft.Search/searchServices/sharedPrivateLinkResources@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Search/searchServices/sharedPrivateLinkResources@2022-09-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      groupId = "string"
      privateLinkResourceId = "string"
      provisioningState = "string"
      requestMessage = "string"
      resourceRegion = "string"
      status = "string"
    }
  })
}

```

### searchServices/sharedPrivateLinkResources

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:searchServices |
| properties | Describes the properties of a Shared Private Link Resource managed by the Azure Cognitive Search service. | SharedPrivateLinkResourceProperties |


### SharedPrivateLinkResourceProperties

| Name | Description | Value |
|-|-|-|
| groupId | The group id from the provider of resource the shared private link resource is for. | string |
| privateLinkResourceId | The resource id of the resource the shared private link resource is for. | string |
| provisioningState | The provisioning state of the shared private link resource. Can be Updating, Deleting, Failed, Succeeded or Incomplete. | 'Deleting''Failed''Incomplete''Succeeded''Updating' |
| requestMessage | The request message for requesting approval of the shared private link resource. | string |
| resourceRegion | Optional. Can be used to specify the Azure Resource Manager location of the resource to which a shared private link is to be created. This is only required for those resources whose DNS configuration are regional (such as Azure Kubernetes Service). | string |
| status | Status of the shared private link resource. Can be Pending, Approved, Rejected or Disconnected. | 'Approved''Disconnected''Pending''Rejected' |
