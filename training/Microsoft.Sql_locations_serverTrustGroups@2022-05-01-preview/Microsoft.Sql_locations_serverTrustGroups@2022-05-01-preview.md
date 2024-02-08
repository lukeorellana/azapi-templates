```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Sql/locations/serverTrustGroups@2022-05-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      groupMembers = [
        {
          serverId = "string"
        }
      ]
      trustScopes = [
        "string"
      ]
    }
  })
}

```

### locations/serverTrustGroups

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type: locations |
| properties | Resource properties. | ServerTrustGroupProperties |


### ServerTrustGroupProperties

| Name | Description | Value |
|-|-|-|
| groupMembers | Group members information for the server trust group. | ServerInfo[] (required) |
| trustScopes | Trust scope of the server trust group. | String array containing any of:'GlobalTransactions''ServiceBroker' (required) |


### ServerInfo

| Name | Description | Value |
|-|-|-|
| serverId | Server Id. | string (required) |


