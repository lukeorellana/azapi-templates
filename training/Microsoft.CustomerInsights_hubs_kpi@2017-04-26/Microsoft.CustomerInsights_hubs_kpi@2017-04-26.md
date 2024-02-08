```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.CustomerInsights/hubs/kpi@2017-04-26"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      aliases = [
        {
          aliasName = "string"
          expression = "string"
        }
      ]
      calculationWindow = "string"
      calculationWindowFieldName = "string"
      description = {}
      displayName = {}
      entityType = "string"
      entityTypeName = "string"
      expression = "string"
      extracts = [
        {
          expression = "string"
          extractName = "string"
        }
      ]
      filter = "string"
      function = "string"
      groupBy = [
        "string"
      ]
      thresHolds = {
        increasingKpi = bool
        lowerLimit = int
        upperLimit = int
      }
      unit = "string"
    }
  })
}

```

### hubs/kpi

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-512Valid characters:Alphanumerics and underscores.Start with letter. |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:hubs |
| properties | Defines the KPI Threshold limits. | KpiDefinition |


### KpiDefinition

| Name | Description | Value |
|-|-|-|
| aliases | The aliases. | KpiAlias[] |
| calculationWindow | The calculation window. | 'Day''Hour''Lifetime''Month''Week' (required) |
| calculationWindowFieldName | Name of calculation window field. | string |
| description | Localized description for the KPI. | object |
| displayName | Localized display name for the KPI. | object |
| entityType | The mapping entity type. | 'Interaction''None''Profile''Relationship' (required) |
| entityTypeName | The mapping entity name. | string (required) |
| expression | The computation expression for the KPI. | string (required) |
| extracts | The KPI extracts. | KpiExtract[] |
| filter | The filter expression for the KPI. | string |
| function | The computation function for the KPI. | 'Avg''Count''CountDistinct''Last''Max''Min''None''Sum' (required) |
| groupBy | the group by properties for the KPI. | string[] |
| thresHolds | The KPI thresholds. | KpiThresholds |
| unit | The unit of measurement for the KPI. | string |


### KpiAlias

| Name | Description | Value |
|-|-|-|
| aliasName | KPI alias name. | string (required) |
| expression | The expression. | string (required) |


### KpiExtract

| Name | Description | Value |
|-|-|-|
| expression | The expression. | string (required) |
| extractName | KPI extract name. | string (required) |


### KpiThresholds

| Name | Description | Value |
|-|-|-|
| increasingKpi | Whether or not the KPI is an increasing KPI. | bool (required) |
| lowerLimit | The lower threshold limit. | int (required) |
| upperLimit | The upper threshold limit. | int (required) |


