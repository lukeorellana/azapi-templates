```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.CostManagement/costAllocationRules@2020-03-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      description = "string"
      details = {
        sourceResources = [
          {
            name = "string"
            resourceType = "string"
            values = [
              "string"
            ]
          }
        ]
        targetResources = [
          {
            name = "string"
            policyType = "FixedProportion"
            resourceType = "string"
            values = [
              {
                name = "string"
                percentage = int
              }
            ]
          }
        ]
      }
      status = "string"
    }
  })
}

```

### costAllocationRules

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| properties | Cost allocation rule properties | CostAllocationRuleProperties |


### CostAllocationRuleProperties

| Name | Description | Value |
|-|-|-|
| description | Description of a cost allocation rule. | string |
| details | Resource information for the cost allocation rule | CostAllocationRuleDetails(required) |
| status | Status of the rule | 'Active''NotActive''Processing' (required) |


### CostAllocationRuleDetails

| Name | Description | Value |
|-|-|-|
| sourceResources | Source resources for cost allocation. At this time, this list can contain no more than one element. | SourceCostAllocationResource[] |
| targetResources | Target resources for cost allocation. At this time, this list can contain no more than one element. | TargetCostAllocationResource[] |


### SourceCostAllocationResource

| Name | Description | Value |
|-|-|-|
| name | If resource type is dimension, this must be either ResourceGroupName or SubscriptionId. If resource type is tag, this must be a valid Azure tag | string (required) |
| resourceType | Type of resources contained in this cost allocation rule | 'Dimension''Tag' (required) |
| values | Source Resources for cost allocation. This list cannot contain more than 25 values. | string[] (required) |


### TargetCostAllocationResource

| Name | Description | Value |
|-|-|-|
| name | If resource type is dimension, this must be either ResourceGroupName or SubscriptionId. If resource type is tag, this must be a valid Azure tag | string (required) |
| policyType | Method of cost allocation for the rule | 'FixedProportion' (required) |
| resourceType | Type of resources contained in this cost allocation rule | 'Dimension''Tag' (required) |
| values | Target resources for cost allocation. This list cannot contain more than 25 values. | CostAllocationProportion[] (required) |


### CostAllocationProportion

| Name | Description | Value |
|-|-|-|
| name | Target resource for cost allocation | string (required) |
| percentage | Percentage of source cost to allocate to this resource. This value can be specified to two decimal places and the total percentage of all resources in this rule must sum to 100.00. | int (required) |


