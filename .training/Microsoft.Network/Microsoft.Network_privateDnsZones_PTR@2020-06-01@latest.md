```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/privateDnsZones/PTR@2020-06-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      aaaaRecords = [
        {
          ipv6Address = "string"
        }
      ]
      aRecords = [
        {
          ipv4Address = "string"
        }
      ]
      cnameRecord = {
        cname = "string"
      }
      metadata = {}
      mxRecords = [
        {
          exchange = "string"
          preference = int
        }
      ]
      ptrRecords = [
        {
          ptrdname = "string"
        }
      ]
      soaRecord = {
        email = "string"
        expireTime = int
        host = "string"
        minimumTtl = int
        refreshTime = int
        retryTime = int
        serialNumber = int
      }
      srvRecords = [
        {
          port = int
          priority = int
          target = "string"
          weight = int
        }
      ]
      ttl = int
      txtRecords = [
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

### privateDnsZones/PTR

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:privateDnsZones |
| etag | The ETag of the record set. | string |
| properties | The properties of the record set. | RecordSetProperties |


### RecordSetProperties

| Name | Description | Value |
|-|-|-|
| aaaaRecords | The list of AAAA records in the record set. | AaaaRecord[] |
| aRecords | The list of A records in the record set. | ARecord[] |
| cnameRecord | The CNAME record in the record set. | CnameRecord |
| metadata | The metadata attached to the record set. | object |
| mxRecords | The list of MX records in the record set. | MxRecord[] |
| ptrRecords | The list of PTR records in the record set. | PtrRecord[] |
| soaRecord | The SOA record in the record set. | SoaRecord |
| srvRecords | The list of SRV records in the record set. | SrvRecord[] |
| ttl | The TTL (time-to-live) of the records in the record set. | int |
| txtRecords | The list of TXT records in the record set. | TxtRecord[] |


### AaaaRecord

| Name | Description | Value |
|-|-|-|
| ipv6Address | The IPv6 address of this AAAA record. | string |


### ARecord

| Name | Description | Value |
|-|-|-|
| ipv4Address | The IPv4 address of this A record. | string |


### CnameRecord

| Name | Description | Value |
|-|-|-|
| cname | The canonical name for this CNAME record. | string |


### MxRecord

| Name | Description | Value |
|-|-|-|
| exchange | The domain name of the mail host for this MX record. | string |
| preference | The preference value for this MX record. | int |


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
| minimumTtl | The minimum value for this SOA record. By convention this is used to determine the negative caching duration. | int |
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


### TxtRecord

| Name | Description | Value |
|-|-|-|
| value | The text value of this TXT record. | string[] |


