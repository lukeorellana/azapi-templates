```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.EventGrid/partnerNamespaces@2023-12-15-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      disableLocalAuth = bool
      inboundIpRules = [
        {
          action = "Allow"
          ipMask = "string"
        }
      ]
      minimumTlsVersionAllowed = "string"
      partnerRegistrationFullyQualifiedId = "string"
      partnerTopicRoutingMode = "string"
      publicNetworkAccess = "string"
    }
  })
}

```

### partnerNamespaces

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | Location of the resource. | string (required) |
| tags | Tags of the resource. | Dictionary of tag names and values. SeeTags in templates |
| properties | Properties of the Partner Namespace. | PartnerNamespaceProperties |


### PartnerNamespaceProperties

| Name | Description | Value |
|-|-|-|
| disableLocalAuth | This boolean is used to enable or disable local auth. Default value is false. When the property is set to true, only AAD token will be used to authenticate if user is allowed to publish to the partner namespace. | bool |
| inboundIpRules | This can be used to restrict traffic from specific IPs instead of all IPs. Note: These are considered only if PublicNetworkAccess is enabled. | InboundIpRule[] |
| minimumTlsVersionAllowed | Minimum TLS version of the publisher allowed to publish to this partner namespace | '1.0''1.1''1.2' |
| partnerRegistrationFullyQualifiedId | The fully qualified ARM Id of the partner registration that should be associated with this partner namespace. This takes the following format:/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/partnerRegistrations/{partnerRegistrationName}. | string |
| partnerTopicRoutingMode | This determines if events published to this partner namespace should use the source attribute in the event payloador use the channel name in the header when matching to the partner topic. If none is specified, source attribute routing will be used to match the partner topic. | 'ChannelNameHeader''SourceEventAttribute' |
| publicNetworkAccess | This determines if traffic is allowed over public network. By default it is enabled.You can further restrict to specific IPs by configuring {seealso cref="P:Microsoft.Azure.Events.ResourceProvider.Common.Contracts.PartnerNamespaceProperties.InboundIpRules" /} | 'Disabled''Enabled''SecuredByPerimeter' |


### InboundIpRule

| Name | Description | Value |
|-|-|-|
| action | Action to perform based on the match or no match of the IpMask. | 'Allow' |
| ipMask | IP Address in CIDR notation e.g., 10.0.0.0/8. | string |


