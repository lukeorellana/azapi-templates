```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.SecurityInsights/alertRules/actions@2023-02-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      logicAppResourceId = "string"
      triggerUri = "string"
    }
    etag = "string"
  })
}

```

### alertRules/actions

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:alertRules |
| etag | Etag of the azure resource | string |
| properties | Action properties for put request | ActionRequestPropertiesOrActionResponseProperties |


### ActionRequestPropertiesOrActionResponseProperties

| Name | Description | Value |
|-|-|-|
| logicAppResourceId | Logic App Resource Id, /subscriptions/{my-subscription}/resourceGroups/{my-resource-group}/providers/Microsoft.Logic/workflows/{my-workflow-id}. | string (required) |
| triggerUri | Logic App Callback URL for this specific workflow. | string (required) |


