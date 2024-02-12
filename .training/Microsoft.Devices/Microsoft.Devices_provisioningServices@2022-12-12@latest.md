```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Devices/provisioningServices@2022-12-12"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      allocationPolicy = "string"
      authorizationPolicies = [
        {
          keyName = "string"
          primaryKey = "string"
          rights = "string"
          secondaryKey = "string"
          keyName = "string"
          primaryKey = "string"
          rights = "string"
          secondaryKey = "string"
        }
      ]
      enableDataResidency = bool
      iotHubs = [
        {
          allocationWeight = int
          applyAllocationPolicy = bool
          connectionString = "string"
          location = "string"
        }
      ]
      ipFilterRules = [
        {
          action = "string"
          filterName = "string"
          ipMask = "string"
          target = "string"
        }
      ]
      portalOperationsHostName = "string"
      privateEndpointConnections = [
        {
          properties = {
            privateEndpoint = {}
            privateLinkServiceConnectionState = {
              actionsRequired = "string"
              description = "string"
              status = "string"
            }
          }
        }
      ]
      provisioningState = "string"
      publicNetworkAccess = "string"
      state = "string"
    }
    resourcegroup = "string"
    subscriptionid = "string"
    sku = {
      capacity = int
      name = "S1"
    }
    etag = "string"
  })
}

```

### provisioningServices

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 3-64Valid characters:Alphanumerics and hyphens.End with alphanumeric. |
| location | The resource location. | string (required) |
| tags | The resource tags. | Dictionary of tag names and values. SeeTags in templates |
| sku | Sku info for a provisioning Service. | IotDpsSkuInfo(required) |
| etag | The Etag field isnotrequired. If it is provided in the response body, it must also be provided as a header per the normal ETag convention. | string |
| properties | Service specific properties for a provisioning service | IotDpsPropertiesDescription(required) |
| resourcegroup | The resource group of the resource. | string |
| subscriptionid | The subscription id of the resource. | string |


### IotDpsPropertiesDescription

| Name | Description | Value |
|-|-|-|
| allocationPolicy | Allocation policy to be used by this provisioning service. | 'GeoLatency''Hashed''Static' |
| authorizationPolicies | List of authorization keys for a provisioning service. | SharedAccessSignatureAuthorizationRuleAccessRightsDe...[] |
| enableDataResidency | Optional.Indicates if the DPS instance has Data Residency enabled, removing the cross geo-pair disaster recovery. | bool |
| iotHubs | List of IoT hubs associated with this provisioning service. | IotHubDefinitionDescription[] |
| ipFilterRules | The IP filter rules. | IpFilterRule[] |
| portalOperationsHostName | Portal endpoint to enable CORS for this provisioning service. | string |
| privateEndpointConnections | Private endpoint connections created on this IotHub | PrivateEndpointConnection[] |
| provisioningState | The ARM provisioning state of the provisioning service. | string |
| publicNetworkAccess | Whether requests from Public Network are allowed | 'Disabled''Enabled' |
| state | Current state of the provisioning service. | 'Activating''ActivationFailed''Active''Deleted''Deleting''DeletionFailed''FailingOver''FailoverFailed''Resuming''Suspended''Suspending''Transitioning' |


### SharedAccessSignatureAuthorizationRuleAccessRightsDe...

| Name | Description | Value |
|-|-|-|
| keyName | Name of the key. | string (required) |
| primaryKey | Primary SAS key value. | string |
| rights | Rights that this key has. | 'DeviceConnect''EnrollmentRead''EnrollmentWrite''RegistrationStatusRead''RegistrationStatusWrite''ServiceConfig' (required) |
| secondaryKey | Secondary SAS key value. | string |
| keyName | Name of the key. | string (required) |
| primaryKey | Primary SAS key value. | string |
| rights | Rights that this key has. | 'DeviceConnect''EnrollmentRead''EnrollmentWrite''RegistrationStatusRead''RegistrationStatusWrite''ServiceConfig' (required) |
| secondaryKey | Secondary SAS key value. | string |


### IotHubDefinitionDescription

| Name | Description | Value |
|-|-|-|
| allocationWeight | weight to apply for a given iot h. | int |
| applyAllocationPolicy | flag for applying allocationPolicy or not for a given iot hub. | bool |
| connectionString | Connection string of the IoT hub. | string (required) |
| location | ARM region of the IoT hub. | string (required) |


### IpFilterRule

| Name | Description | Value |
|-|-|-|
| action | The desired action for requests captured by this rule. | 'Accept''Reject' (required) |
| filterName | The name of the IP filter rule. | string (required) |
| ipMask | A string that contains the IP address range in CIDR notation for the rule. | string (required) |
| target | Target for requests captured by this rule. | 'all''deviceApi''serviceApi' |


### PrivateEndpointConnection

| Name | Description | Value |
|-|-|-|
| properties | The properties of a private endpoint connection | PrivateEndpointConnectionProperties(required) |


### PrivateEndpointConnectionProperties

| Name | Description | Value |
|-|-|-|
| privateEndpoint | The private endpoint property of a private endpoint connection | PrivateEndpoint |
| privateLinkServiceConnectionState | The current state of a private endpoint connection | PrivateLinkServiceConnectionState(required) |


### PrivateLinkServiceConnectionState

| Name | Description | Value |
|-|-|-|
| actionsRequired | Actions required for a private endpoint connection | string |
| description | The description for the current state of a private endpoint connection | string (required) |
| status | The status of a private endpoint connection | 'Approved''Disconnected''Pending''Rejected' (required) |


### IotDpsSkuInfo

| Name | Description | Value |
|-|-|-|
| capacity | The number of units to provision | int |
| name | Sku name. | 'S1' |


