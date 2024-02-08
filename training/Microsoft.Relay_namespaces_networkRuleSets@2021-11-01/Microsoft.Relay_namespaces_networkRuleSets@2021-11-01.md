```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Relay/namespaces/networkRuleSets@2021-11-01"
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
| publicNetworkAccess | This determines if traffic is allowed over public network. By default it is enabled | 'Disabled''Enabled''SecuredByPerimeter' |


### NWRuleSetIpRules

| Name | Description | Value |
|-|-|-|
| action | The IP Filter Action | 'Allow' |
| ipMask | IP Mask | string |


