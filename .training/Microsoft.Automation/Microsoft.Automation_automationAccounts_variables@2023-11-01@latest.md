```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Automation/automationAccounts/variables@2023-11-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      description = "string"
      isEncrypted = bool
      value = "string"
    }
  })
}

```

### automationAccounts/variables

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-128Valid characters:Can't use:<>*%&:\?.+/or control charactersCan't end with space. |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:automationAccounts |
| properties | Gets or sets the properties of the variable. | VariableCreateOrUpdatePropertiesOrVariableProperties(required) |


### VariableCreateOrUpdatePropertiesOrVariableProperties

| Name | Description | Value |
|-|-|-|
| description | Gets or sets the description of the variable. | string |
| isEncrypted | Gets or sets the encrypted flag of the variable. | bool |
| value | Gets or sets the value of the variable. | string |


