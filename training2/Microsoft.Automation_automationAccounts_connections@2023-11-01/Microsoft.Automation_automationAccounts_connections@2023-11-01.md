```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Automation/automationAccounts/connections@2023-11-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      connectionType = {
        name = "string"
      }
      description = "string"
      fieldDefinitionValues = {
        {customized property} = "string"
      }
    }
  })
}

```

### automationAccounts/connections

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-128Valid characters:Can't use:<>*%&:\?.+/or control charactersCan't end with space. |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:automationAccounts |
| properties | Gets or sets the properties of the connection. | ConnectionCreateOrUpdatePropertiesOrConnectionProper...(required) |


### ConnectionCreateOrUpdatePropertiesOrConnectionProper...

| Name | Description | Value |
|-|-|-|
| connectionType | Gets or sets the connectionType of the connection. | ConnectionTypeAssociationProperty(required) |
| description | Gets or sets the description of the connection. | string |
| fieldDefinitionValues | Gets or sets the field definition properties of the connection. | ConnectionCreateOrUpdatePropertiesFieldDefinitionVal... |


### ConnectionTypeAssociationProperty

| Name | Description | Value |
|-|-|-|
| name | Gets or sets the name of the connection type. | string |


### ConnectionCreateOrUpdatePropertiesFieldDefinitionVal...

| Name | Description | Value |
|-|-|-|
| {customized property} |  | string |


