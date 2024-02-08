```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/customIpPrefixes@2023-04-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      asn = "string"
      authorizationMessage = "string"
      cidr = "string"
      commissionedState = "string"
      customIpPrefixParent = {
        id = "string"
      }
      expressRouteAdvertise = bool
      geo = "string"
      noInternetAdvertise = bool
      prefixType = "string"
      signedMessage = "string"
    }
    zones = [
      "string"
    ]
    extendedLocation = {
      name = "string"
      type = "EdgeZone"
    }
  })
}

```

### customIpPrefixes

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | Resource location. | string |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| extendedLocation | The extended location of the custom IP prefix. | ExtendedLocation |
| properties | Custom IP prefix properties. | CustomIpPrefixPropertiesFormat |
| zones | A list of availability zones denoting the IP allocated for the resource needs to come from. | string[] |


### ExtendedLocation

| Name | Description | Value |
|-|-|-|
| name | The name of the extended location. | string |
| type | The type of the extended location. | 'EdgeZone' |


### CustomIpPrefixPropertiesFormat

| Name | Description | Value |
|-|-|-|
| asn | The ASN for CIDR advertising. Should be an integer as string. | string |
| authorizationMessage | Authorization message for WAN validation. | string |
| cidr | The prefix range in CIDR notation. Should include the start address and the prefix length. | string |
| commissionedState | The commissioned state of the Custom IP Prefix. | 'Commissioned''CommissionedNoInternetAdvertise''Commissioning''Decommissioning''Deprovisioned''Deprovisioning''Provisioned''Provisioning' |
| customIpPrefixParent | The Parent CustomIpPrefix for IPv6 /64 CustomIpPrefix. | SubResource |
| expressRouteAdvertise | Whether to do express route advertise. | bool |
| geo | The Geo for CIDR advertising. Should be an Geo code. | 'AFRI''APAC''AQ''EURO''GLOBAL''LATAM''ME''NAM''OCEANIA' |
| noInternetAdvertise | Whether to Advertise the range to Internet. | bool |
| prefixType | Type of custom IP prefix. Should be Singular, Parent, or Child. | 'Child''Parent''Singular' |
| signedMessage | Signed message for WAN validation. | string |


### SubResource

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |


