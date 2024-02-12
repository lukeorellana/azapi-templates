```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Security/sensitivitySettings@2023-02-15-preview"
  name = "current"
  parent_id = "string"
  body = jsonencode({
    sensitiveInfoTypesIds = [
      "string"
    ]
    sensitivityThresholdLabelId = "string"
    sensitivityThresholdLabelOrder = int
  })
}

```

### sensitivitySettings

| Name | Description | Value |
|-|-|-|
| name | The resource name | 'current' |
| sensitiveInfoTypesIds | List of selected sensitive info types' IDs. | string[] (required)Constraints:Min length = 36Max length = 36Pattern =^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$ |
| sensitivityThresholdLabelId | The id of the sensitivity threshold label. Any label at or above this rank will be considered sensitive. | stringConstraints:Min length = 36Max length = 36Pattern =^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$ |
| sensitivityThresholdLabelOrder | The order of the sensitivity threshold label. Any label at or above this order will be considered sensitive. If set to -1, sensitivity by labels is turned off | int |


