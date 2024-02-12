```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.MachineLearningServices/workspaces/outboundRules@2023-10-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      category = "string"
      status = "string"
      type = "string"
      // For remaining properties, see OutboundRule objects
    }
  })
}

```

### workspaces/outboundRules

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:workspaces |
| properties | Outbound Rule for the managed network of a machine learning workspace. | OutboundRule(required) |


### OutboundRule

| Name | Description | Value |
|-|-|-|
| category | Category of a managed network Outbound Rule of a machine learning workspace. | 'Recommended''Required''UserDefined' |
| status | Type of a managed network Outbound Rule of a machine learning workspace. | 'Active''Inactive' |
| type | Set the object type | FQDNPrivateEndpointServiceTag(required) |


### FqdnOutboundRule

| Name | Description | Value |
|-|-|-|
| type | Type of a managed network Outbound Rule of a machine learning workspace. | 'FQDN' (required) |
| destination |  | string |


### PrivateEndpointOutboundRule

| Name | Description | Value |
|-|-|-|
| type | Type of a managed network Outbound Rule of a machine learning workspace. | 'PrivateEndpoint' (required) |
| destination | Private Endpoint destination for a Private Endpoint Outbound Rule for the managed network of a machine learning workspace. | PrivateEndpointDestination |


### PrivateEndpointDestination

| Name | Description | Value |
|-|-|-|
| serviceResourceId |  | string |
| sparkEnabled |  | bool |
| sparkStatus | Type of a managed network Outbound Rule of a machine learning workspace. | 'Active''Inactive' |
| subresourceTarget |  | string |


### ServiceTagOutboundRule

| Name | Description | Value |
|-|-|-|
| type | Type of a managed network Outbound Rule of a machine learning workspace. | 'ServiceTag' (required) |
| destination | Service Tag destination for a Service Tag Outbound Rule for the managed network of a machine learning workspace. | ServiceTagDestination |


### ServiceTagDestination

| Name | Description | Value |
|-|-|-|
| action | The action enum for networking rule. | 'Allow''Deny' |
| portRanges |  | string |
| protocol |  | string |
| serviceTag |  | string |


