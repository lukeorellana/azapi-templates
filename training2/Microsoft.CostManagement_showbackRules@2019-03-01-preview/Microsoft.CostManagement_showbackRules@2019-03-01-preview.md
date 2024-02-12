```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.CostManagement/showbackRules@2019-03-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      description = "string"
      scopes = [
        {
          childScope = {
          id = "string"
          name = "string"
          type = "string"
        }
      ]
      status = "string"
      ruleType = "string"
      // For remaining properties, see ShowbackRuleProperties objects
    }
  })
}

```

### showbackRules

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| properties | Showback rule properties | ShowbackRuleProperties |


### ShowbackRuleProperties

| Name | Description | Value |
|-|-|-|
| description | Description of a showback rule. | string |
| scopes | List of authorized assigned scopes. | Scope[] |
| status | The current status of the showback rule. | 'Active''NotActive' |
| ruleType | Set the object type | CostAllocationCustomPrice(required) |


### Scope

| Name | Description | Value |
|-|-|-|
| childScope | The Scope model definition | Scope |
| id | Scope id | string |
| name | Scope name | string |
| type | Scope type | string |


### CostAllocationDetailsKind

| Name | Description | Value |
|-|-|-|
| ruleType | The rule type of the showback rule solution. | 'CostAllocation' (required) |
| details | The CostAllocation properties to validate. | CostAllocationDetails |


### CostAllocationDetails

| Name | Description | Value |
|-|-|-|
| policy | Cost allocation policy. | 'Evenly''Fixed''Proportional' |


### CustomPriceDetailsKind

| Name | Description | Value |
|-|-|-|
| ruleType | The rule type of the showback rule solution. | 'CustomPrice' (required) |
| details | The Custom price properties to validate. | CustomPriceDetails |


### CustomPriceDetails

| Name | Description | Value |
|-|-|-|
| benefits | Array of benefits. | String array containing any of:'AHUB''All''None''Reservations''Sum' |
| markups | List of markups. | Markup[] |
| pricesheet |  | string |


### Markup

| Name | Description | Value |
|-|-|-|
| percentage |  | string |


