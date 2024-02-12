```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Automation/automationAccounts/connectionTypes@2023-11-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      fieldDefinitions = {
        {customized property} = {
          isEncrypted = bool
          isOptional = bool
          type = "string"
        }
      }
      isGlobal = bool
    }
  })
}

```

### automationAccounts/connectionTypes

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:automationAccounts |
| properties | Gets or sets the value of the connection type. | ConnectionTypeCreateOrUpdatePropertiesOrConnectionTy...(required) |


### ConnectionTypeCreateOrUpdatePropertiesOrConnectionTy...

| Name | Description | Value |
|-|-|-|
| fieldDefinitions | Gets or sets the field definitions of the connection type. | ConnectionTypeCreateOrUpdatePropertiesFieldDefinitio...(required) |
| isGlobal | Gets or sets a Boolean value to indicate if the connection type is global. | bool |


### ConnectionTypeCreateOrUpdatePropertiesFieldDefinitio...

| Name | Description | Value |
|-|-|-|
| {customized property} |  | FieldDefinition |


### FieldDefinition

| Name | Description | Value |
|-|-|-|
| isEncrypted | Gets or sets the isEncrypted flag of the connection field definition. | bool |
| isOptional | Gets or sets the isOptional flag of the connection field definition. | bool |
| type | Gets or sets the type of the connection field definition. | string (required) |


