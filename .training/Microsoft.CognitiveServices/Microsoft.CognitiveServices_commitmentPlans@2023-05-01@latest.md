```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.CognitiveServices/commitmentPlans@2023-05-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      autoRenew = bool
      commitmentPlanGuid = "string"
      current = {
        count = int
        tier = "string"
      }
      hostingModel = "string"
      next = {
        count = int
        tier = "string"
      }
      planType = "string"
    }
    sku = {
      capacity = int
      family = "string"
      name = "string"
      size = "string"
      tier = "string"
    }
    kind = "string"
  })
}

```

### commitmentPlans

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | The geo-location where the resource lives | string |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| sku | The resource model definition representing SKU | Sku |
| kind | The Kind of the resource. | string |
| properties | Properties of Cognitive Services account commitment plan. | CommitmentPlanProperties |


### CommitmentPlanProperties

| Name | Description | Value |
|-|-|-|
| autoRenew | AutoRenew commitment plan. | bool |
| commitmentPlanGuid | Commitment plan guid. | string |
| current | Cognitive Services account commitment period. | CommitmentPeriod |
| hostingModel | Account hosting model. | 'ConnectedContainer''DisconnectedContainer''ProvisionedWeb''Web' |
| next | Cognitive Services account commitment period. | CommitmentPeriod |
| planType | Commitment plan type. | string |


### CommitmentPeriod

| Name | Description | Value |
|-|-|-|
| count | Commitment period commitment count. | int |
| tier | Commitment period commitment tier. | string |


### Sku

| Name | Description | Value |
|-|-|-|
| capacity | If the SKU supports scale out/in then the capacity integer should be included. If scale out/in is not possible for the resource this may be omitted. | int |
| family | If the service has different generations of hardware, for the same SKU, then that can be captured here. | string |
| name | The name of the SKU. Ex - P3. It is typically a letter+number code | string (required) |
| size | The SKU size. When the name field is the combination of tier and some other value, this would be the standalone code. | string |
| tier | This field is required to be implemented by the Resource Provider if the service has more than one tier, but is not required on a PUT. | 'Basic''Enterprise''Free''Premium''Standard' |


