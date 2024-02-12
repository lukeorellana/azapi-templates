```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Relay/namespaces@2021-11-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      privateEndpointConnections = [
        {
          properties = {
            privateEndpoint = {
              id = "string"
            }
            privateLinkServiceConnectionState = {
              description = "string"
              status = "string"
            }
            provisioningState = "string"
          }
        }
      ]
      publicNetworkAccess = "string"
    }
    sku = {
      name = "Standard"
      tier = "Standard"
    }
  })
}

```

### namespaces

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 6-50Valid characters:Alphanumerics and hyphens.Start with a letter. End with a letter or number.Resource name must be unique across Azure. |
| location | Resource location. | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| sku | SKU of the namespace. | Sku |
| properties | Description of Relay namespace | RelayNamespaceProperties |


### RelayNamespaceProperties

| Name | Description | Value |
|-|-|-|
| privateEndpointConnections | List of private endpoint connections. | PrivateEndpointConnection[] |
| publicNetworkAccess | This determines if traffic is allowed over public network. By default it is enabled. | 'Disabled''Enabled''SecuredByPerimeter' |


### PrivateEndpointConnection

| Name | Description | Value |
|-|-|-|
| properties | Properties of the PrivateEndpointConnection. | PrivateEndpointConnectionProperties |


### PrivateEndpointConnectionProperties

| Name | Description | Value |
|-|-|-|
| privateEndpoint | The Private Endpoint resource for this Connection. | PrivateEndpoint |
| privateLinkServiceConnectionState | Details about the state of the connection. | ConnectionState |
| provisioningState | Provisioning state of the Private Endpoint Connection. | 'Canceled''Creating''Deleting''Failed''Succeeded''Updating' |


### PrivateEndpoint

| Name | Description | Value |
|-|-|-|
| id | The ARM identifier for Private Endpoint. | string |


### ConnectionState

| Name | Description | Value |
|-|-|-|
| description | Description of the connection state. | string |
| status | Status of the connection. | 'Approved''Disconnected''Pending''Rejected' |


### Sku

| Name | Description | Value |
|-|-|-|
| name | Name of this SKU. | 'Standard' (required) |
| tier | The tier of this SKU. | 'Standard' |


