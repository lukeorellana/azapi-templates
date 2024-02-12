```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/networkSecurityPerimeters/profiles/accessRules@2021-02-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      addressPrefixes = [
        "string"
      ]
      direction = "string"
      emailAddresses = [
        "string"
      ]
      fullyQualifiedDomainNames = [
        "string"
      ]
      phoneNumbers = [
        "string"
      ]
      subscriptions = [
        {
          id = "string"
        }
      ]
    }
  })
}

```

### networkSecurityPerimeters/profiles/accessRules

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | Resource location. | string |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:profiles |
| properties | Properties of the NSP access rule. | NspAccessRuleProperties |


### NspAccessRuleProperties

| Name | Description | Value |
|-|-|-|
| addressPrefixes | Inbound address prefixes (IPv4/IPv6) | string[] |
| direction | Direction that specifies whether the access rules is inbound/outbound. | 'Inbound''Outbound' |
| emailAddresses | Outbound rules email address format. | string[] |
| fullyQualifiedDomainNames | Outbound rules fully qualified domain name format. | string[] |
| phoneNumbers | Outbound rules phone number format. | string[] |
| subscriptions | List of subscription ids | SubscriptionId[] |


### SubscriptionId

| Name | Description | Value |
|-|-|-|
| id | Subscription id in the ARM id format. | string |


