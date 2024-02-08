```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Datadog/monitors/singleSignOnConfigurations@2022-06-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      enterpriseAppId = "string"
      singleSignOnState = "string"
    }
  })
}

```

### monitors/singleSignOnConfigurations

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:monitors |
| properties |  | DatadogSingleSignOnProperties |


### DatadogSingleSignOnProperties

| Name | Description | Value |
|-|-|-|
| enterpriseAppId | The Id of the Enterprise App used for Single sign-on. | string |
| singleSignOnState | Various states of the SSO resource | 'Disable''Enable''Existing''Initial' |


