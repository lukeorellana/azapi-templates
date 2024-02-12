```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Cdn/profiles/originGroups/origins@2023-07-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      azureOrigin = {
        id = "string"
      }
      enabledState = "string"
      enforceCertificateNameCheck = bool
      hostName = "string"
      httpPort = int
      httpsPort = int
      originHostHeader = "string"
      priority = int
      sharedPrivateLinkResource = {
        groupId = "string"
        privateLink = {
          id = "string"
        }
        privateLinkLocation = "string"
        requestMessage = "string"
        status = "string"
      }
      weight = int
    }
  })
}

```

### profiles/originGroups/origins

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-50Valid characters:Alphanumerics and hyphens.Start and end with alphanumeric.Resource name must be unique across Azure. |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:originGroups |
| properties | The JSON object that contains the properties of the origin. | AFDOriginProperties |


### AFDOriginProperties

| Name | Description | Value |
|-|-|-|
| azureOrigin | Resource reference to the Azure origin resource. | ResourceReference |
| enabledState | Whether to enable health probes to be made against backends defined under backendPools. Health probes can only be disabled if there is a single enabled backend in single enabled backend pool. | 'Disabled''Enabled' |
| enforceCertificateNameCheck | Whether to enable certificate name check at origin level | bool |
| hostName | The address of the origin. Domain names, IPv4 addresses, and IPv6 addresses are supported.This should be unique across all origins in an endpoint. | string |
| httpPort | The value of the HTTP port. Must be between 1 and 65535. | intConstraints:Min value = 1Max value = 65535 |
| httpsPort | The value of the HTTPS port. Must be between 1 and 65535. | intConstraints:Min value = 1Max value = 65535 |
| originHostHeader | The host header value sent to the origin with each request. If you leave this blank, the request hostname determines this value. Azure Front Door origins, such as Web Apps, Blob Storage, and Cloud Services require this host header value to match the origin hostname by default. This overrides the host header defined at Endpoint | string |
| priority | Priority of origin in given origin group for load balancing. Higher priorities will not be used for load balancing if any lower priority origin is healthy.Must be between 1 and 5 | intConstraints:Min value = 1Max value = 5 |
| sharedPrivateLinkResource | The properties of the private link resource for private origin. | SharedPrivateLinkResourceProperties |
| weight | Weight of the origin in given origin group for load balancing. Must be between 1 and 1000 | intConstraints:Min value = 1Max value = 1000 |


### ResourceReference

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |


### SharedPrivateLinkResourceProperties

| Name | Description | Value |
|-|-|-|
| groupId | The group id from the provider of resource the shared private link resource is for. | string |
| privateLink | The resource id of the resource the shared private link resource is for. | ResourceReference |
| privateLinkLocation | The location of the shared private link resource | string |
| requestMessage | The request message for requesting approval of the shared private link resource. | string |
| status | Status of the shared private link resource. Can be Pending, Approved, Rejected, Disconnected, or Timeout. | 'Approved''Disconnected''Pending''Rejected''Timeout' |


