## Microsoft.PowerBI/privateLinkServicesForPowerBI@2020-06-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.PowerBI/privateLinkServicesForPowerBI@2020-06-01"
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
              actionsRequired = "string"
              description = "string"
              status = "string"
            }
            provisioningState = "string"
          }
        }
      ]
      tenantId = "string"
    }
  })
}

```

### privateLinkServicesForPowerBI

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | Specifies the location of the resource. | string |
| tags | Specifies the tags of the resource. | Dictionary of tag names and values. SeeTags in templates |
| properties | Specifies the properties of the resource. | TenantProperties |


### TenantProperties

| Name | Description | Value |
|-|-|-|
| privateEndpointConnections | Specifies the private endpoint connections of the resource. | PrivateEndpointConnection[] |
| tenantId | Specifies the tenant id of the resource. | string |


### PrivateEndpointConnection

| Name | Description | Value |
|-|-|-|
| properties | Specifies the properties of the private endpoint connection. | PrivateEndpointConnectionProperties |


### PrivateEndpointConnectionProperties

| Name | Description | Value |
|-|-|-|
| privateEndpoint | Specifies the private endpoint. | PrivateEndpoint |
| privateLinkServiceConnectionState | Specifies the connection state. | ConnectionState |
| provisioningState | Provisioning state of the Private Endpoint Connection. | 'Canceled''Creating''Deleting''Failed''Succeeded''Updating' |


### PrivateEndpoint

| Name | Description | Value |
|-|-|-|
| id | Specifies the id of private endpoint. | string |


### ConnectionState

| Name | Description | Value |
|-|-|-|
| actionsRequired | Actions required (if any). | string |
| description | Description of the connection state. | string |
| status | Status of the connection. | 'Approved''Disconnected''Pending''Rejected' |
## Microsoft.PowerBI/privateLinkServicesForPowerBI/privateEndpointConnections@2020-06-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.PowerBI/privateLinkServicesForPowerBI/privateEndpointConnections@2020-06-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
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

### privateLinkServicesForPowerBI/privateEndpointConnect...

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:privateLinkServicesForPowerBI |
| properties | Specifies the properties of the private endpoint connection. | PrivateEndpointConnectionProperties |


### PrivateEndpointConnectionProperties

| Name | Description | Value |
|-|-|-|
| privateEndpoint | Specifies the private endpoint. | PrivateEndpoint |
| privateLinkServiceConnectionState | Specifies the connection state. | ConnectionState |
| provisioningState | Provisioning state of the Private Endpoint Connection. | 'Canceled''Creating''Deleting''Failed''Succeeded''Updating' |


### PrivateEndpoint

| Name | Description | Value |
|-|-|-|
| id | Specifies the id of private endpoint. | string |


### ConnectionState

| Name | Description | Value |
|-|-|-|
| actionsRequired | Actions required (if any). | string |
| description | Description of the connection state. | string |
| status | Status of the connection. | 'Approved''Disconnected''Pending''Rejected' |
## Microsoft.PowerBI/workspaceCollections@2016-01-29

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.PowerBI/workspaceCollections@2016-01-29"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    sku = {
      name = "S1"
      tier = "Standard"
    }
  })
}

```

### workspaceCollections

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 3-63Valid characters:Alphanumerics and hyphens.Can't start with hyphen. Can't use consecutive hyphens. |
| location | Azure location | string |
| tags | Dictionary of {string} | Dictionary of tag names and values. SeeTags in templates |
| sku |  | AzureSku |


### AzureSku

| Name | Description | Value |
|-|-|-|
| name | SKU name | 'S1' (required) |
| tier | SKU tier | 'Standard' (required) |
