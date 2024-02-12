```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Blockchain/blockchainMembers/transactionNodes@2018-06-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      firewallRules = [
        {
          endIpAddress = "string"
          ruleName = "string"
          startIpAddress = "string"
        }
      ]
      password = "string"
    }
  })
}

```

### blockchainMembers/transactionNodes

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | Gets or sets the transaction node location. | string |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:blockchainMembers |
| properties | Gets or sets the blockchain member properties. | TransactionNodeProperties |


### TransactionNodeProperties

| Name | Description | Value |
|-|-|-|
| firewallRules | Gets or sets the firewall rules. | FirewallRule[] |
| password | Sets the transaction node dns endpoint basic auth password. | string |


### FirewallRule

| Name | Description | Value |
|-|-|-|
| endIpAddress | Gets or sets the end IP address of the firewall rule range. | string |
| ruleName | Gets or sets the name of the firewall rules. | string |
| startIpAddress | Gets or sets the start IP address of the firewall rule range. | string |


