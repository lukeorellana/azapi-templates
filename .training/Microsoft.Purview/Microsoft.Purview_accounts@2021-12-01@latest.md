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


