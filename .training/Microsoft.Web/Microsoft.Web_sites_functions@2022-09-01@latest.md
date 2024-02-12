```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/sites/functions@2022-09-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      config_href = "string"
      files = {}
      function_app_id = "string"
      href = "string"
      invoke_url_template = "string"
      isDisabled = bool
      language = "string"
      script_href = "string"
      script_root_path_href = "string"
      secrets_file_href = "string"
      test_data = "string"
      test_data_href = "string"
    }
    kind = "string"
  })
}

```

### sites/functions

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| kind | Kind of resource. | string |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:sites |
| properties | FunctionEnvelope resource specific properties | FunctionEnvelopeProperties |


### FunctionEnvelopeProperties

| Name | Description | Value |
|-|-|-|
| config | Config information. | For Bicep, you can use theany()function. |
| config_href | Config URI. | string |
| files | File list. | object |
| function_app_id | Function App ID. | string |
| href | Function URI. | string |
| invoke_url_template | The invocation URL | string |
| isDisabled | Gets or sets a value indicating whether the function is disabled | bool |
| language | The function language | string |
| script_href | Script URI. | string |
| script_root_path_href | Script root path URI. | string |
| secrets_file_href | Secrets file URI. | string |
| test_data | Test data used when testing via the Azure Portal. | string |
| test_data_href | Test data URI. | string |


