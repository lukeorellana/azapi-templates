```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Synapse/workspaces/sqlPools/dataMaskingPolicies/rules@2021-06-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      aliasName = "string"
      columnName = "string"
      maskingFunction = "string"
      numberFrom = "string"
      numberTo = "string"
      prefixSize = "string"
      replacementString = "string"
      ruleState = "string"
      schemaName = "string"
      suffixSize = "string"
      tableName = "string"
    }
  })
}

```

### workspaces/sqlPools/dataMaskingPolicies/rules

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:dataMaskingPolicies |
| properties | The properties of the resource. | DataMaskingRuleProperties |


### DataMaskingRuleProperties

| Name | Description | Value |
|-|-|-|
| aliasName | The alias name. This is a legacy parameter and is no longer used. | string |
| columnName | The column name on which the data masking rule is applied. | string (required) |
| maskingFunction | The masking function that is used for the data masking rule. | 'CCN''Default''Email''Number''SSN''Text' (required) |
| numberFrom | The numberFrom property of the masking rule. Required if maskingFunction is set to Number, otherwise this parameter will be ignored. | string |
| numberTo | The numberTo property of the data masking rule. Required if maskingFunction is set to Number, otherwise this parameter will be ignored. | string |
| prefixSize | If maskingFunction is set to Text, the number of characters to show unmasked in the beginning of the string. Otherwise, this parameter will be ignored. | string |
| replacementString | If maskingFunction is set to Text, the character to use for masking the unexposed part of the string. Otherwise, this parameter will be ignored. | string |
| ruleState | The rule state. Used to delete a rule. To delete an existing rule, specify the schemaName, tableName, columnName, maskingFunction, and specify ruleState as disabled. However, if the rule doesn't already exist, the rule will be created with ruleState set to enabled, regardless of the provided value of ruleState. | 'Disabled''Enabled' |
| schemaName | The schema name on which the data masking rule is applied. | string (required) |
| suffixSize | If maskingFunction is set to Text, the number of characters to show unmasked at the end of the string. Otherwise, this parameter will be ignored. | string |
| tableName | The table name on which the data masking rule is applied. | string (required) |


