```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/sites/hybridConnectionNamespaces/relays@2022-09-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      hostname = "string"
      port = int
      relayArmUri = "string"
      relayName = "string"
      sendKeyName = "string"
      sendKeyValue = "string"
      serviceBusNamespace = "string"
      serviceBusSuffix = "string"
    }
    kind = "string"
  })
}

```

### sites/hybridConnectionNamespaces/relays

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| kind | Kind of resource. | string |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type: hybridConnectionNamespaces |
| properties | HybridConnection resource specific properties | HybridConnectionProperties |


### HybridConnectionProperties

| Name | Description | Value |
|-|-|-|
| hostname | The hostname of the endpoint. | string |
| port | The port of the endpoint. | int |
| relayArmUri | The ARM URI to the Service Bus relay. | string |
| relayName | The name of the Service Bus relay. | string |
| sendKeyName | The name of the Service Bus key which has Send permissions. This is used to authenticate to Service Bus. | string |
| sendKeyValue | The value of the Service Bus key. This is used to authenticate to Service Bus. In ARM this key will not be returnednormally, use the POST /listKeys API instead. | string |
| serviceBusNamespace | The name of the Service Bus namespace. | string |
| serviceBusSuffix | The suffix for the service bus endpoint. By default this is .servicebus.windows.net | string |


