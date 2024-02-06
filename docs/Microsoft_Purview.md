## Microsoft.Purview/accounts@2021-12-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Purview/accounts@2021-12-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  identity {
    type = "string"
    identity_ids = []
  }
  body = jsonencode({
    properties = {
      cloudConnectors = {}
      managedEventHubState = "string"
      managedResourceGroupName = "string"
      managedResourcesPublicNetworkAccess = "string"
      publicNetworkAccess = "string"
    }
  })
}

```

### accounts

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | Gets or sets the location. | string |
| tags | Tags on the azure resource. | Dictionary of tag names and values. SeeTags in templates |
| identity | Identity Info on the tracked resource | Identity |
| properties | Gets or sets the properties. | AccountProperties |


### Identity

| Name | Description | Value |
|-|-|-|
| type | Identity Type | 'None''SystemAssigned''UserAssigned' |
| userAssignedIdentities | User Assigned Identities | object |


### AccountProperties

| Name | Description | Value |
|-|-|-|
| cloudConnectors | Cloud connectors.External cloud identifier used as part of scanning configuration. | CloudConnectors |
| managedEventHubState | Gets or sets the state of managed eventhub. If enabled managed eventhub will be created, if disabled the managed eventhub will be removed. | 'Disabled''Enabled''NotSpecified' |
| managedResourceGroupName | Gets or sets the managed resource group name | string |
| managedResourcesPublicNetworkAccess | Gets or sets the public network access for managed resources. | 'Disabled''Enabled''NotSpecified' |
| publicNetworkAccess | Gets or sets the public network access. | 'Disabled''Enabled''NotSpecified' |
## Microsoft.Purview/accounts/kafkaConfigurations@2021-12-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Purview/accounts/kafkaConfigurations@2021-12-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      consumerGroup = "string"
      credentials = {
        identityId = "string"
        type = "string"
      }
      eventHubPartitionId = "string"
      eventHubResourceId = "string"
      eventHubType = "string"
      eventStreamingState = "string"
      eventStreamingType = "string"
    }
  })
}

```

### accounts/kafkaConfigurations

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:accounts |
| properties | Gets or sets the kafka configuration properties. | KafkaConfigurationProperties |


### KafkaConfigurationProperties

| Name | Description | Value |
|-|-|-|
| consumerGroup | Consumer group for hook event hub. | string |
| credentials | Credentials to access event hub. | Credentials |
| eventHubPartitionId | Optional partition Id for notification event hub. If not set, all partitions will be leveraged. | string |
| eventHubResourceId |  | string |
| eventHubType | The event hub type. | 'Hook''Notification' |
| eventStreamingState | The state of the event streaming service | 'Disabled''Enabled' |
| eventStreamingType | The event streaming service type | 'Azure''Managed''None' |


### Credentials

| Name | Description | Value |
|-|-|-|
| identityId | Identity identifier for UserAssign type. | string |
| type | Identity Type. | 'None''SystemAssigned''UserAssigned' |
## Microsoft.Purview/accounts/privateEndpointConnections@2021-12-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Purview/accounts/privateEndpointConnections@2021-12-01"
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
    }
  })
}

```

### accounts/privateEndpointConnections

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:accounts |
| properties | The connection identifier. | PrivateEndpointConnectionProperties |


### PrivateEndpointConnectionProperties

| Name | Description | Value |
|-|-|-|
| privateEndpoint | The private endpoint information. | PrivateEndpoint |
| privateLinkServiceConnectionState | The private link service connection state. | PrivateLinkServiceConnectionState |


### PrivateEndpoint

| Name | Description | Value |
|-|-|-|
| id | The private endpoint identifier. | string |


### PrivateLinkServiceConnectionState

| Name | Description | Value |
|-|-|-|
| actionsRequired | The required actions. | string |
| description | The description. | string |
| status | The status. | 'Approved''Disconnected''Pending''Rejected''Unknown' |
