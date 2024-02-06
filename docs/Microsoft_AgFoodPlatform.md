## Microsoft.AgFoodPlatform/farmBeats@2021-09-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AgFoodPlatform/farmBeats@2021-09-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  identity {
    type = "SystemAssigned"
  }
  body = jsonencode({
    properties = {
      publicNetworkAccess = "string"
      sensorIntegration = {
        enabled = "string"
        provisioningInfo = {
          error = {}
        }
      }
    }
  })
}

```

### farmBeats

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| identity | Identity for the resource. | Identity |
| properties | FarmBeats ARM Resource properties. | FarmBeatsProperties |


### Identity

| Name | Description | Value |
|-|-|-|
| type | The identity type. | 'SystemAssigned' |


### FarmBeatsProperties

| Name | Description | Value |
|-|-|-|
| publicNetworkAccess | Property to allow or block public traffic for an Azure FarmBeats resource. | 'Enabled''Hybrid' |
| sensorIntegration | Sensor integration request model. | SensorIntegration |


### SensorIntegration

| Name | Description | Value |
|-|-|-|
| enabled | Sensor integration enable state. Allowed values are True, None | string |
| provisioningInfo | Common error response for all Azure Resource Manager APIs to return error details for failed operations. (This also follows the OData error response format.). | ErrorResponse |


### ErrorResponse

| Name | Description | Value |
|-|-|-|
| error | The error object. | ErrorDetail |
## Microsoft.AgFoodPlatform/farmBeats/extensions@2021-09-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AgFoodPlatform/farmBeats/extensions@2021-09-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    additionalApiProperties = {}
    extensionVersion = "string"
  })
}

```

### farmBeats/extensions

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:farmBeats |
| additionalApiProperties | Additional Api Properties. | object |
| extensionVersion | Extension Version. | string |
## Microsoft.AgFoodPlatform/farmBeats/privateEndpointConnections@2021-09-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AgFoodPlatform/farmBeats/privateEndpointConnections@2021-09-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      privateEndpoint = {}
      privateLinkServiceConnectionState = {
        actionsRequired = "string"
        description = "string"
        status = "string"
      }
    }
  })
}

```

### farmBeats/privateEndpointConnections

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:farmBeats |
| properties | Resource properties. | PrivateEndpointConnectionProperties |


### PrivateEndpointConnectionProperties

| Name | Description | Value |
|-|-|-|
| privateEndpoint | The private endpoint resource. | PrivateEndpoint |
| privateLinkServiceConnectionState | A collection of information about the state of the connection between service consumer and provider. | PrivateLinkServiceConnectionState(required) |


### PrivateLinkServiceConnectionState

| Name | Description | Value |
|-|-|-|
| actionsRequired | A message indicating if changes on the service provider require any updates on the consumer. | string |
| description | The reason for approval/rejection of the connection. | string |
| status | Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service. | 'Approved''Pending''Rejected' |
## Microsoft.AgFoodPlatform/farmBeats/solutions@2021-09-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AgFoodPlatform/farmBeats/solutions@2021-09-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      marketplacePublisherId = "string"
      offerId = "string"
      planId = "string"
      saasSubscriptionId = "string"
      saasSubscriptionName = "string"
      termId = "string"
    }
  })
}

```

### farmBeats/solutions

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:farmBeats |
| properties | Solution resource properties. | SolutionProperties |


### SolutionProperties

| Name | Description | Value |
|-|-|-|
| marketplacePublisherId | SaaS application Publisher Id. | string (required) |
| offerId | SaaS application Offer Id. | string (required) |
| planId | SaaS application Plan Id. | string (required) |
| saasSubscriptionId | SaaS subscriptionId of the installed SaaS application. | string (required) |
| saasSubscriptionName | SaaS subscription name of the installed SaaS application. | string (required) |
| termId | SaaS application Term Id. | string (required) |
