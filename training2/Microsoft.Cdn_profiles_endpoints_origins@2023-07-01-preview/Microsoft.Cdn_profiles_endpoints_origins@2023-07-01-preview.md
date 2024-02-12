```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Cdn/profiles/endpoints/origins@2023-07-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      enabled = bool
      hostName = "string"
      httpPort = int
      httpsPort = int
      originHostHeader = "string"
      priority = int
      privateLinkAlias = "string"
      privateLinkApprovalMessage = "string"
      privateLinkLocation = "string"
      privateLinkResourceId = "string"
      weight = int
    }
  })
}

```

### profiles/endpoints/origins

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:endpoints |
| properties | The JSON object that contains the properties of the origin. | OriginProperties |


### OriginProperties

| Name | Description | Value |
|-|-|-|
| enabled | Origin is enabled for load balancing or not | bool |
| hostName | The address of the origin. Domain names, IPv4 addresses, and IPv6 addresses are supported.This should be unique across all origins in an endpoint. | string |
| httpPort | The value of the HTTP port. Must be between 1 and 65535. | intConstraints:Min value = 1Max value = 65535 |
| httpsPort | The value of the HTTPS port. Must be between 1 and 65535. | intConstraints:Min value = 1Max value = 65535 |
| originHostHeader | The host header value sent to the origin with each request. If you leave this blank, the request hostname determines this value. Azure CDN origins, such as Web Apps, Blob Storage, and Cloud Services require this host header value to match the origin hostname by default. This overrides the host header defined at Endpoint | string |
| priority | Priority of origin in given origin group for load balancing. Higher priorities will not be used for load balancing if any lower priority origin is healthy.Must be between 1 and 5 | intConstraints:Min value = 1Max value = 5 |
| privateLinkAlias | The Alias of the Private Link resource. Populating this optional field indicates that this origin is 'Private' | string |
| privateLinkApprovalMessage | A custom message to be included in the approval request to connect to the Private Link. | string |
| privateLinkLocation | The location of the Private Link resource. Required only if 'privateLinkResourceId' is populated | string |
| privateLinkResourceId | The Resource Id of the Private Link resource. Populating this optional field indicates that this backend is 'Private' | string |
| weight | Weight of the origin in given origin group for load balancing. Must be between 1 and 1000 | intConstraints:Min value = 1Max value = 1000 |


