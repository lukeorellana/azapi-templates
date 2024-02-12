```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Blockchain/blockchainMembers@2018-06-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      consortium = "string"
      consortiumManagementAccountPassword = "string"
      consortiumMemberDisplayName = "string"
      consortiumRole = "string"
      firewallRules = [
        {
          endIpAddress = "string"
          ruleName = "string"
          startIpAddress = "string"
        }
      ]
      password = "string"
      protocol = "string"
      validatorNodesSku = {
        capacity = int
      }
    }
    sku = {
      name = "string"
      tier = "string"
    }
  })
}

```

### blockchainMembers

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 2-20Valid characters:Lowercase letters and numbers.Start with lowercase letter.Resource name must be unique across Azure. |
| location | The GEO location of the blockchain service. | string |
| tags | Tags of the service which is a list of key value pairs that describes the resource. | Dictionary of tag names and values. SeeTags in templates |
| sku | Gets or sets the blockchain member Sku. | Sku |
| properties | Gets or sets the blockchain member properties. | BlockchainMemberProperties |


### BlockchainMemberProperties

| Name | Description | Value |
|-|-|-|
| consortium | Gets or sets the consortium for the blockchain member. | string |
| consortiumManagementAccountPassword | Sets the managed consortium management account password. | string |
| consortiumMemberDisplayName | Gets the display name of the member in the consortium. | string |
| consortiumRole | Gets the role of the member in the consortium. | string |
| firewallRules | Gets or sets firewall rules | FirewallRule[] |
| password | Sets the basic auth password of the blockchain member. | string |
| protocol | Gets or sets the blockchain protocol. | 'Corda''NotSpecified''Parity''Quorum' |
| validatorNodesSku | Gets or sets the blockchain validator nodes Sku. | BlockchainMemberNodesSku |


### FirewallRule

| Name | Description | Value |
|-|-|-|
| endIpAddress | Gets or sets the end IP address of the firewall rule range. | string |
| ruleName | Gets or sets the name of the firewall rules. | string |
| startIpAddress | Gets or sets the start IP address of the firewall rule range. | string |


### BlockchainMemberNodesSku

| Name | Description | Value |
|-|-|-|
| capacity | Gets or sets the nodes capacity. | int |


### Sku

| Name | Description | Value |
|-|-|-|
| name | Gets or sets Sku name | string |
| tier | Gets or sets Sku tier | string |


