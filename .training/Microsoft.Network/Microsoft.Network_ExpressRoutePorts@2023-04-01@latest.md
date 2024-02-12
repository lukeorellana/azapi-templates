```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/ExpressRoutePorts@2023-04-01"
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
      bandwidthInGbps = int
      billingType = "string"
      encapsulation = "string"
      links = [
        {
          id = "string"
          name = "string"
          properties = {
            adminState = "string"
            macSecConfig = {
              cakSecretIdentifier = "string"
              cipher = "string"
              cknSecretIdentifier = "string"
              sciState = "string"
            }
          }
        }
      ]
      peeringLocation = "string"
    }
  })
}

```

### ExpressRoutePorts

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | Resource location. | string |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| identity | The identity of ExpressRoutePort, if configured. | ManagedServiceIdentity |
| properties | ExpressRoutePort properties. | ExpressRoutePortPropertiesFormat |


### ManagedServiceIdentity

| Name | Description | Value |
|-|-|-|
| type | The type of identity used for the resource. The type 'SystemAssigned, UserAssigned' includes both an implicitly created identity and a set of user assigned identities. The type 'None' will remove any identities from the virtual machine. | 'None''SystemAssigned''SystemAssigned, UserAssigned''UserAssigned' |
| userAssignedIdentities | The list of user identities associated with resource. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'. | object |


### ExpressRoutePortPropertiesFormat

| Name | Description | Value |
|-|-|-|
| bandwidthInGbps | Bandwidth of procured ports in Gbps. | int |
| billingType | The billing type of the ExpressRoutePort resource. | 'MeteredData''UnlimitedData' |
| encapsulation | Encapsulation method on physical ports. | 'Dot1Q''QinQ' |
| links | The set of physical links of the ExpressRoutePort resource. | ExpressRouteLink[] |
| peeringLocation | The name of the peering location that the ExpressRoutePort is mapped to physically. | string |


### ExpressRouteLink

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | Name of child port resource that is unique among child port resources of the parent. | string |
| properties | ExpressRouteLink properties. | ExpressRouteLinkPropertiesFormat |


### ExpressRouteLinkPropertiesFormat

| Name | Description | Value |
|-|-|-|
| adminState | Administrative state of the physical port. | 'Disabled''Enabled' |
| macSecConfig | MacSec configuration. | ExpressRouteLinkMacSecConfig |


### ExpressRouteLinkMacSecConfig

| Name | Description | Value |
|-|-|-|
| cakSecretIdentifier | Keyvault Secret Identifier URL containing Mac security CAK key. | string |
| cipher | Mac security cipher. | 'GcmAes128''GcmAes256''GcmAesXpn128''GcmAesXpn256' |
| cknSecretIdentifier | Keyvault Secret Identifier URL containing Mac security CKN key. | string |
| sciState | Sci mode enabled/disabled. | 'Disabled''Enabled' |


