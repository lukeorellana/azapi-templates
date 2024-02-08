```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DataBoxEdge/dataBoxEdgeDevices/diagnosticProactiveLogCollectionSettings@2022-12-01-preview"
  name = "default"
  parent_id = "string"
  body = jsonencode({
    properties = {
      userConsent = "string"
    }
  })
}

```

### dataBoxEdgeDevices/diagnosticProactiveLogCollectionS...

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'default' |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:dataBoxEdgeDevices |
| properties | Properties of the diagnostic proactive log collection settings. | ProactiveLogCollectionSettingsProperties(required) |


### ProactiveLogCollectionSettingsProperties

| Name | Description | Value |
|-|-|-|
| userConsent | Proactive diagnostic collection consent flag | 'Disabled''Enabled' (required) |


