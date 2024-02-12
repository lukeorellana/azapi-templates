```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Peering/peerAsns@2022-10-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      peerAsn = int
      peerContactDetail = [
        {
          email = "string"
          phone = "string"
          role = "string"
        }
      ]
      peerName = "string"
    }
  })
}

```

### peerAsns

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| properties | The properties that define a peer's ASN. | PeerAsnProperties |


### PeerAsnProperties

| Name | Description | Value |
|-|-|-|
| peerAsn | The Autonomous System Number (ASN) of the peer. | int |
| peerContactDetail | The contact details of the peer. | ContactDetail[] |
| peerName | The name of the peer. | string |


### ContactDetail

| Name | Description | Value |
|-|-|-|
| email | The e-mail address of the contact. | string |
| phone | The phone number of the contact. | string |
| role | The role of the contact. | 'Escalation''Noc''Other''Policy''Service''Technical' |


