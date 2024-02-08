```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/dnsZones/CNAME@2018-05-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      AAAARecords = [
        {
          ipv6Address = "string"
        }
      ]
      ARecords = [
        {
          ipv4Address = "string"
        }
      ]
      caaRecords = [
        {
          flags = int
          tag = "string"
          value = "string"
        }
      ]
      CNAMERecord = {
        cname = "string"
      }
      metadata = {}
      MXRecords = [
        {
          exchange = "string"
          preference = int
        }
      ]
      NSRecords = [
        {
          nsdname = "string"
        }
      ]
      PTRRecords = [
        {
          ptrdname = "string"
        }
      ]
      SOARecord = {
        email = "string"
        expireTime = int
        host = "string"
        minimumTTL = int
        refreshTime = int
        retryTime = int
        serialNumber = int
      }
      SRVRecords = [
        {
          port = int
          priority = int
          target = "string"
          weight = int
        }
      ]
      targetResource = {
        id = "string"
      }
      TTL = int
      TXTRecords = [
        {
          value = [
            "string"
          ]
        }
      ]
    }
    etag = "string"
  })
}

```

### dnsZones/CNAME

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:dnsZones |
| etag | The etag of the record set. | string |
| properties | The properties of the record set. | RecordSetProperties |


### RecordSetProperties

| Name | Description | Value |
|-|-|-|
| AAAARecords | The list of AAAA records in the record set. | AaaaRecord[] |
| ARecords | The list of A records in the record set. | ARecord[] |
| caaRecords | The list of CAA records in the record set. | CaaRecord[] |
| CNAMERecord | The CNAME record in the  record set. | CnameRecord |
| metadata | The metadata attached to the record set. | object |
| MXRecords | The list of MX records in the record set. | MxRecord[] |
| NSRecords | The list of NS records in the record set. | NsRecord[] |
| PTRRecords | The list of PTR records in the record set. | PtrRecord[] |
| SOARecord | The SOA record in the record set. | SoaRecord |
| SRVRecords | The list of SRV records in the record set. | SrvRecord[] |
| targetResource | A reference to an azure resource from where the dns resource value is taken. | SubResource |
| TTL | The TTL (time-to-live) of the records in the record set. | int |
| TXTRecords | The list of TXT records in the record set. | TxtRecord[] |


### AaaaRecord

| Name | Description | Value |
|-|-|-|
| ipv6Address | The IPv6 address of this AAAA record. | string |


### ARecord

| Name | Description | Value |
|-|-|-|
| ipv4Address | The IPv4 address of this A record. | string |


### CaaRecord

| Name | Description | Value |
|-|-|-|
| flags | The flags for this CAA record as an integer between 0 and 255. | int |
| tag | The tag for this CAA record. | string |
| value | The value for this CAA record. | string |


### CnameRecord

| Name | Description | Value |
|-|-|-|
| cname | The canonical name for this CNAME record. | string |


### MxRecord

| Name | Description | Value |
|-|-|-|
| exchange | The domain name of the mail host for this MX record. | string |
| preference | The preference value for this MX record. | int |


### NsRecord

| Name | Description | Value |
|-|-|-|
| nsdname | The name server name for this NS record. | string |


### PtrRecord

| Name | Description | Value |
|-|-|-|
| ptrdname | The PTR target domain name for this PTR record. | string |


### SoaRecord

| Name | Description | Value |
|-|-|-|
| email | The email contact for this SOA record. | string |
| expireTime | The expire time for this SOA record. | int |
| host | The domain name of the authoritative name server for this SOA record. | string |
| minimumTTL | The minimum value for this SOA record. By convention this is used to determine the negative caching duration. | int |
| refreshTime | The refresh value for this SOA record. | int |
| retryTime | The retry time for this SOA record. | int |
| serialNumber | The serial number for this SOA record. | int |


### SrvRecord

| Name | Description | Value |
|-|-|-|
| port | The port value for this SRV record. | int |
| priority | The priority value for this SRV record. | int |
| target | The target domain name for this SRV record. | string |
| weight | The weight value for this SRV record. | int |


### SubResource

| Name | Description | Value |
|-|-|-|
| id | Resource Id. | string |


### TxtRecord

| Name | Description | Value |
|-|-|-|
| value | The text value of this TXT record. | string[] |


