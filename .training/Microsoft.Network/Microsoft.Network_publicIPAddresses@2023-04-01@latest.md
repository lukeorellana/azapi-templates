```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/publicIPAddresses@2023-04-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      ddosSettings = {
        ddosProtectionPlan = {
          id = "string"
        }
        protectionMode = "string"
      }
      deleteOption = "string"
      dnsSettings = {
        domainNameLabel = "string"
        domainNameLabelScope = "string"
        fqdn = "string"
        reverseFqdn = "string"
      }
      idleTimeoutInMinutes = int
      ipAddress = "string"
      ipTags = [
        {
          ipTagType = "string"
          tag = "string"
        }
      ]
      linkedPublicIPAddress = {
        public-ip-address-object
      }
        extendedLocation = {
          name = "string"
          type = "EdgeZone"
        }
        id = "string"
        location = "string"
        properties = {
        sku = {
          name = "string"
          tier = "string"
        }
        tags = {}
        zones = [
          "string"
        ]
      }
      migrationPhase = "string"
      natGateway = {
        id = "string"
        location = "string"
        properties = {
          idleTimeoutInMinutes = int
          publicIpAddresses = [
            {
              id = "string"
            }
          ]
          publicIpPrefixes = [
            {
              id = "string"
            }
          ]
        }
        sku = {
          name = "Standard"
        }
        tags = {}
        zones = [
          "string"
        ]
      }
      publicIPAddressVersion = "string"
      publicIPAllocationMethod = "string"
      publicIPPrefix = {
        id = "string"
      }
      servicePublicIPAddress = {
        public-ip-address-object
      }
        extendedLocation = {
          name = "string"
          type = "EdgeZone"
        }
        id = "string"
        location = "string"
        properties = {
        sku = {
          name = "string"
          tier = "string"
        }
        tags = {}
        zones = [
          "string"
        ]
      }
    }
    zones = [
      "string"
    ]
    sku = {
      name = "string"
      tier = "string"
    }
    extendedLocation = {
      name = "string"
      type = "EdgeZone"
    }
  })
}

```

### publicIPAddresses

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 1-80Valid characters:Alphanumerics, underscores, periods, and hyphens.Start with alphanumeric. End alphanumeric or underscore. |
| location | Resource location. | string |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| sku | The public IP address SKU. | PublicIPAddressSku |
| extendedLocation | The extended location of the public ip address. | ExtendedLocation |
| properties | Public IP address properties. | PublicIPAddressPropertiesFormat |
| zones | A list of availability zones denoting the IP allocated for the resource needs to come from. | string[] |


### ExtendedLocation

| Name | Description | Value |
|-|-|-|
| name | The name of the extended location. | string |
| type | The type of the extended location. | 'EdgeZone' |


### PublicIPAddressPropertiesFormat

| Name | Description | Value |
|-|-|-|
| ddosSettings | The DDoS protection custom policy associated with the public IP address. | DdosSettings |
| deleteOption | Specify what happens to the public IP address when the VM using it is deleted | 'Delete''Detach' |
| dnsSettings | The FQDN of the DNS record associated with the public IP address. | PublicIPAddressDnsSettings |
| idleTimeoutInMinutes | The idle timeout of the public IP address. | int |
| ipAddress | The IP address associated with the public IP address resource. | string |
| ipTags | The list of tags associated with the public IP address. | IpTag[] |
| linkedPublicIPAddress | The linked public IP address of the public IP address resource. | PublicIPAddress |
| migrationPhase | Migration phase of Public IP Address. | 'Abort''Commit''Committed''None''Prepare' |
| natGateway | The NatGateway for the Public IP address. | NatGateway |
| publicIPAddressVersion | The public IP address version. | 'IPv4''IPv6' |
| publicIPAllocationMethod | The public IP address allocation method. | 'Dynamic''Static' |
| publicIPPrefix | The Public IP Prefix this Public IP Address should be allocated from. | SubResource |
| servicePublicIPAddress | The service public IP address of the public IP address resource. | PublicIPAddress |


### DdosSettings

| Name | Description | Value |
|-|-|-|
| ddosProtectionPlan | The DDoS protection plan associated with the public IP. Can only be set if ProtectionMode is Enabled | SubResource |
| protectionMode | The DDoS protection mode of the public IP | 'Disabled''Enabled''VirtualNetworkInherited' |


### SubResource

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |


### PublicIPAddressDnsSettings

| Name | Description | Value |
|-|-|-|
| domainNameLabel | The domain name label. The concatenation of the domain name label and the regionalized DNS zone make up the fully qualified domain name associated with the public IP address. If a domain name label is specified, an A DNS record is created for the public IP in the Microsoft Azure DNS system. | string |
| domainNameLabelScope | The domain name label scope. If a domain name label and a domain name label scope are specified, an A DNS record is created for the public IP in the Microsoft Azure DNS system with a hashed value includes in FQDN. | 'NoReuse''ResourceGroupReuse''SubscriptionReuse''TenantReuse' |
| fqdn | The Fully Qualified Domain Name of the A DNS record associated with the public IP. This is the concatenation of the domainNameLabel and the regionalized DNS zone. | string |
| reverseFqdn | The reverse FQDN. A user-visible, fully qualified domain name that resolves to this public IP address. If the reverseFqdn is specified, then a PTR DNS record is created pointing from the IP address in the in-addr.arpa domain to the reverse FQDN. | string |


### IpTag

| Name | Description | Value |
|-|-|-|
| ipTagType | The IP tag type. Example: FirstPartyUsage. | string |
| tag | The value of the IP tag associated with the public IP. Example: SQL. | string |


### PublicIPAddress

| Name | Description | Value |
|-|-|-|
| extendedLocation | The extended location of the public ip address. | ExtendedLocation |
| id | Resource ID. | string |
| location | Resource location. | string |
| properties | Public IP address properties. | PublicIPAddressPropertiesFormat |
| sku | The public IP address SKU. | PublicIPAddressSku |
| tags | Resource tags. | object |
| zones | A list of availability zones denoting the IP allocated for the resource needs to come from. | string[] |


### PublicIPAddressSku

| Name | Description | Value |
|-|-|-|
| name | Name of a public IP address SKU. | 'Basic''Standard' |
| tier | Tier of a public IP address SKU. | 'Global''Regional' |


### NatGateway

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| location | Resource location. | string |
| properties | Nat Gateway properties. | NatGatewayPropertiesFormat |
| sku | The nat gateway SKU. | NatGatewaySku |
| tags | Resource tags. | object |
| zones | A list of availability zones denoting the zone in which Nat Gateway should be deployed. | string[] |


### NatGatewayPropertiesFormat

| Name | Description | Value |
|-|-|-|
| idleTimeoutInMinutes | The idle timeout of the nat gateway. | int |
| publicIpAddresses | An array of public ip addresses associated with the nat gateway resource. | SubResource[] |
| publicIpPrefixes | An array of public ip prefixes associated with the nat gateway resource. | SubResource[] |


### NatGatewaySku

| Name | Description | Value |
|-|-|-|
| name | Name of Nat Gateway SKU. | 'Standard' |


