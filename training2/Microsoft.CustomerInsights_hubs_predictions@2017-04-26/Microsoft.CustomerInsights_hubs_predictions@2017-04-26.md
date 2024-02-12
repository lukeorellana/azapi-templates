```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.CustomerInsights/hubs/predictions@2017-04-26"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      autoAnalyze = bool
      description = {}
      displayName = {}
      grades = [
        {
          gradeName = "string"
          maxScoreThreshold = int
          minScoreThreshold = int
        }
      ]
      involvedInteractionTypes = [
        "string"
      ]
      involvedKpiTypes = [
        "string"
      ]
      involvedRelationships = [
        "string"
      ]
      mappings = {
        grade = "string"
        reason = "string"
        score = "string"
      }
      negativeOutcomeExpression = "string"
      positiveOutcomeExpression = "string"
      predictionName = "string"
      primaryProfileType = "string"
      scopeExpression = "string"
      scoreLabel = "string"
    }
  })
}

```

### hubs/predictions

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-512Valid characters:Alphanumerics and underscores.Start with letter. |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:hubs |
| properties | The prediction definition. | Prediction |


### Prediction

| Name | Description | Value |
|-|-|-|
| autoAnalyze | Whether do auto analyze. | bool (required) |
| description | Description of the prediction. | object |
| displayName | Display name of the prediction. | object |
| grades | The prediction grades. | PredictionGradesItem[] |
| involvedInteractionTypes | Interaction types involved in the prediction. | string[] |
| involvedKpiTypes | KPI types involved in the prediction. | string[] |
| involvedRelationships | Relationships involved in the prediction. | string[] |
| mappings | Definition of the link mapping of prediction. | PredictionMappings(required) |
| negativeOutcomeExpression | Negative outcome expression. | string (required) |
| positiveOutcomeExpression | Positive outcome expression. | string (required) |
| predictionName | Name of the prediction. | string |
| primaryProfileType | Primary profile type. | string (required) |
| scopeExpression | Scope expression. | string (required) |
| scoreLabel | Score label. | string (required) |


### PredictionGradesItem

| Name | Description | Value |
|-|-|-|
| gradeName | Name of the grade. | string |
| maxScoreThreshold | Maximum score threshold. | int |
| minScoreThreshold | Minimum score threshold. | int |


### PredictionMappings

| Name | Description | Value |
|-|-|-|
| grade | The grade of the link mapping. | string (required) |
| reason | The reason of the link mapping. | string (required) |
| score | The score of the link mapping. | string (required) |


