```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/trafficmanagerprofiles/AzureEndpoints@2022-04-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      alwaysServe = "string"
      customHeaders = [
        {
          name = "string"
          value = "string"
        }
      ]
      endpointLocation = "string"
      endpointMonitorStatus = "string"
      endpointStatus = "string"
      geoMapping = [
        "string"
      ]
      minChildEndpoints = int
      minChildEndpointsIPv4 = int
      minChildEndpointsIPv6 = int
      priority = int
      subnets = [
        {
          first = "string"
          last = "string"
          scope = int
        }
      ]
      target = "string"
      targetResourceId = "string"
      weight = int
    }
  })
}

```

### trafficmanagerprofiles/AzureEndpoints

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:trafficmanagerprofiles |
| properties | The properties of the Traffic Manager endpoint. | EndpointProperties |


### EndpointProperties

| Name | Description | Value |
|-|-|-|
| alwaysServe | If Always Serve is enabled, probing for endpoint health will be disabled and endpoints will be included in the traffic routing method. | 'Disabled''Enabled' |
| customHeaders | List of custom headers. | EndpointPropertiesCustomHeadersItem[] |
| endpointLocation | Specifies the location of the external or nested endpoints when using the 'Performance' traffic routing method. | string |
| endpointMonitorStatus | The monitoring status of the endpoint. | 'CheckingEndpoint''Degraded''Disabled''Inactive''Online''Stopped''Unmonitored' |
| endpointStatus | The status of the endpoint. If the endpoint is Enabled, it is probed for endpoint health and is included in the traffic routing method. | 'Disabled''Enabled' |
| geoMapping | The list of countries/regions mapped to this endpoint when using the 'Geographic' traffic routing method. Please consult Traffic Manager Geographic documentation for a full list of accepted values. | string[] |
| minChildEndpoints | The minimum number of endpoints that must be available in the child profile in order for the parent profile to be considered available. Only applicable to endpoint of type 'NestedEndpoints'. | int |
| minChildEndpointsIPv4 | The minimum number of IPv4 (DNS record type A) endpoints that must be available in the child profile in order for the parent profile to be considered available. Only applicable to endpoint of type 'NestedEndpoints'. | int |
| minChildEndpointsIPv6 | The minimum number of IPv6 (DNS record type AAAA) endpoints that must be available in the child profile in order for the parent profile to be considered available. Only applicable to endpoint of type 'NestedEndpoints'. | int |
| priority | The priority of this endpoint when using the 'Priority' traffic routing method. Possible values are from 1 to 1000, lower values represent higher priority. This is an optional parameter.  If specified, it must be specified on all endpoints, and no two endpoints can share the same priority value. | int |
| subnets | The list of subnets, IP addresses, and/or address ranges mapped to this endpoint when using the 'Subnet' traffic routing method. An empty list will match all ranges not covered by other endpoints. | EndpointPropertiesSubnetsItem[] |
| target | The fully-qualified DNS name or IP address of the endpoint. Traffic Manager returns this value in DNS responses to direct traffic to this endpoint. | string |
| targetResourceId | The Azure Resource URI of the of the endpoint. Not applicable to endpoints of type 'ExternalEndpoints'. | string |
| weight | The weight of this endpoint when using the 'Weighted' traffic routing method. Possible values are from 1 to 1000. | int |


### EndpointPropertiesCustomHeadersItem

| Name | Description | Value |
|-|-|-|
| name | Header name. | string |
| value | Header value. | string |


### EndpointPropertiesSubnetsItem

| Name | Description | Value |
|-|-|-|
| first | First address in the subnet. | string |
| last | Last address in the subnet. | string |
| scope | Block size (number of leading bits in the subnet mask). | int |


