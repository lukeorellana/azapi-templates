```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.StreamAnalytics/clusters/privateEndpoints@2020-03-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      manualPrivateLinkServiceConnections = [
        {
          properties = {
            groupIds = [
              "string"
            ]
            privateLinkServiceConnectionState = {}
            privateLinkServiceId = "string"
          }
        }
      ]
    }
  })
}

```

### clusters/privateEndpoints

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:clusters |
| properties | The properties associated with a private endpoint. | PrivateEndpointProperties |


### PrivateEndpointProperties

| Name | Description | Value |
|-|-|-|
| manualPrivateLinkServiceConnections | A list of connections to the remote resource. Immutable after it is set. | PrivateLinkServiceConnection[] |


### PrivateLinkServiceConnection

| Name | Description | Value |
|-|-|-|
| properties | Bag of properties defining a privatelinkServiceConnection. | PrivateLinkServiceConnectionProperties |


### PrivateLinkServiceConnectionProperties

| Name | Description | Value |
|-|-|-|
| groupIds | The ID(s) of the group(s) obtained from the remote resource that this private endpoint should connect to. Required on PUT (CreateOrUpdate) requests. | string[] |
| privateLinkServiceConnectionState | A collection of read-only information about the state of the connection to the private remote resource. | PrivateLinkConnectionState |
| privateLinkServiceId | The resource id of the private link service. Required on PUT (CreateOrUpdate) requests. | string |


