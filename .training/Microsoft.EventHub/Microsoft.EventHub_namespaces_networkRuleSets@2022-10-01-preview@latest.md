```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.EventHub/namespaces/networkRuleSets@2022-10-01-preview"
  name = "default"
  parent_id = "string"
  body = jsonencode({
    properties = {
      defaultAction = "string"
      ipRules = [
        {
          action = "Allow"
          ipMask = "string"
        }
      ]
      publicNetworkAccess = "string"
      trustedServiceAccessEnabled = bool
      virtualNetworkRules = [
        {
          ignoreMissingVnetServiceEndpoint = bool
          subnet = {
            id = "string"
          }
        }
      ]
    }
  })
}

```

### namespaces/networkRuleSets

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'default' |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:namespaces |
| properties | NetworkRuleSet properties | NetworkRuleSetProperties |


### NetworkRuleSetProperties

| Name | Description | Value |
|-|-|-|
| defaultAction | Default Action for Network Rule Set | 'Allow''Deny' |
| ipRules | List of IpRules | NWRuleSetIpRules[] |
| publicNetworkAccess | This determines if traffic is allowed over public network. By default it is enabled. If value is SecuredByPerimeter then Inbound and Outbound communication is controlled by the network security perimeter and profile's access rules. | 'Disabled''Enabled''SecuredByPerimeter' |
| trustedServiceAccessEnabled | Value that indicates whether Trusted Service Access is Enabled or not. | bool |
| virtualNetworkRules | List VirtualNetwork Rules | NWRuleSetVirtualNetworkRules[] |


### NWRuleSetIpRules

| Name | Description | Value |
|-|-|-|
| action | The IP Filter Action | 'Allow' |
| ipMask | IP Mask | string |


### NWRuleSetVirtualNetworkRules

| Name | Description | Value |
|-|-|-|
| ignoreMissingVnetServiceEndpoint | Value that indicates whether to ignore missing Vnet Service Endpoint | bool |
| subnet | Subnet properties | Subnet |


### Subnet

| Name | Description | Value |
|-|-|-|
| id | Resource ID of Virtual Network Subnet | string |


