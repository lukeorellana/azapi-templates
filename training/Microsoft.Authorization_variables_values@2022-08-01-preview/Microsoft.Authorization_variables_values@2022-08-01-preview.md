```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Authorization/variables/values@2022-08-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      values = [
        {
          columnName = "string"
        }
      ]
    }
  })
}

```

### variables/values

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:variables |
| properties | Properties for the variable value. | PolicyVariableValueProperties(required) |


### PolicyVariableValueProperties

| Name | Description | Value |
|-|-|-|
| values | Variable value column value array. | PolicyVariableValueColumnValue[] (required) |


### PolicyVariableValueColumnValue

| Name | Description | Value |
|-|-|-|
| columnName | Column name for the variable value | string (required) |
| columnValue | Column value for the variable value; this can be an integer, double, boolean, null or a string. | For Bicep, you can use theany()function.(required) |


