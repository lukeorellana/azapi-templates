```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Kubernetes/connectedClusters@2022-10-01-preview"
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
      agentPublicKeyCertificate = "string"
      azureHybridBenefit = "string"
      distribution = "string"
      distributionVersion = "string"
      infrastructure = "string"
      privateLinkScopeResourceId = "string"
      privateLinkState = "string"
      provisioningState = "string"
    }
  })
}

```

### connectedClusters

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| identity | The identity of the connected cluster. | ConnectedClusterIdentity(required) |
| properties | Describes the connected cluster resource properties. | ConnectedClusterProperties(required) |


### ConnectedClusterIdentity

| Name | Description | Value |
|-|-|-|
| type | The type of identity used for the connected cluster. The type 'SystemAssigned, includes a system created identity. The type 'None' means no identity is assigned to the connected cluster. | 'None''SystemAssigned' (required) |


### ConnectedClusterProperties

| Name | Description | Value |
|-|-|-|
| agentPublicKeyCertificate | Base64 encoded public certificate used by the agent to do the initial handshake to the backend services in Azure. | string (required) |
| azureHybridBenefit | Indicates whether Azure Hybrid Benefit is opted in | 'False''NotApplicable''True' |
| distribution | The Kubernetes distribution running on this connected cluster. | string |
| distributionVersion | The Kubernetes distribution version on this connected cluster. | string |
| infrastructure | The infrastructure on which the Kubernetes cluster represented by this connected cluster is running on. | string |
| privateLinkScopeResourceId | The resource id of the private link scope this connected cluster is assigned to, if any. | string |
| privateLinkState | Property which describes the state of private link on a connected cluster resource. | 'Disabled''Enabled' |
| provisioningState | Provisioning state of the connected cluster resource. | 'Accepted''Canceled''Deleting''Failed''Provisioning''Succeeded''Updating' |


