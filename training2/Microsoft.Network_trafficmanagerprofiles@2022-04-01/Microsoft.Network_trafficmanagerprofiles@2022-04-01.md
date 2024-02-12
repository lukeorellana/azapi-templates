```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/trafficmanagerprofiles@2022-04-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      allowedEndpointRecordTypes = [
        "string"
      ]
      dnsConfig = {
        relativeName = "string"
        ttl = int
      }
      endpoints = [
        {
          id = "string"
          name = "string"
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
          type = "string"
        }
      ]
      maxReturn = int
      monitorConfig = {
        customHeaders = [
          {
            name = "string"
            value = "string"
          }
        ]
        expectedStatusCodeRanges = [
          {
            max = int
            min = int
          }
        ]
        intervalInSeconds = int
        path = "string"
        port = int
        profileMonitorStatus = "string"
        protocol = "string"
        timeoutInSeconds = int
        toleratedNumberOfFailures = int
      }
      profileStatus = "string"
      trafficRoutingMethod = "string"
      trafficViewEnrollmentStatus = "string"
    }
  })
}

```

### trafficmanagerprofiles

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 1-63Valid characters:Alphanumerics, hyphens, and periods.Start and end with alphanumeric.Resource name must be unique across Azure. |
| location | The Azure Region where the resource lives | string |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| properties | The properties of the Traffic Manager profile. | ProfileProperties |


### ProfileProperties

| Name | Description | Value |
|-|-|-|
| allowedEndpointRecordTypes | The list of allowed endpoint record types. | String array containing any of:'Any''DomainName''IPv4Address''IPv6Address' |
| dnsConfig | The DNS settings of the Traffic Manager profile. | DnsConfig |
| endpoints | The list of endpoints in the Traffic Manager profile. | Endpoint[] |
| maxReturn | Maximum number of endpoints to be returned for MultiValue routing type. | int |
| monitorConfig | The endpoint monitoring settings of the Traffic Manager profile. | MonitorConfig |
| profileStatus | The status of the Traffic Manager profile. | 'Disabled''Enabled' |
| trafficRoutingMethod | The traffic routing method of the Traffic Manager profile. | 'Geographic''MultiValue''Performance''Priority''Subnet''Weighted' |
| trafficViewEnrollmentStatus | Indicates whether Traffic View is 'Enabled' or 'Disabled' for the Traffic Manager profile. Null, indicates 'Disabled'. Enabling this feature will increase the cost of the Traffic Manage profile. | 'Disabled''Enabled' |


### DnsConfig

| Name | Description | Value |
|-|-|-|
| relativeName | The relative DNS name provided by this Traffic Manager profile. This value is combined with the DNS domain name used by Azure Traffic Manager to form the fully-qualified domain name (FQDN) of the profile. | string |
| ttl | The DNS Time-To-Live (TTL), in seconds. This informs the local DNS resolvers and DNS clients how long to cache DNS responses provided by this Traffic Manager profile. | int |


### Endpoint

| Name | Description | Value |
|-|-|-|
| id | Fully qualified resource Id for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/trafficManagerProfiles/{resourceName} | string |
| name | The name of the resource | string |
| properties | The properties of the Traffic Manager endpoint. | EndpointProperties |
| type | The type of the resource. Ex- Microsoft.Network/trafficManagerProfiles. | string |


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


### MonitorConfig

| Name | Description | Value |
|-|-|-|
| customHeaders | List of custom headers. | MonitorConfigCustomHeadersItem[] |
| expectedStatusCodeRanges | List of expected status code ranges. | MonitorConfigExpectedStatusCodeRangesItem[] |
| intervalInSeconds | The monitor interval for endpoints in this profile. This is the interval at which Traffic Manager will check the health of each endpoint in this profile. | int |
| path | The path relative to the endpoint domain name used to probe for endpoint health. | string |
| port | The TCP port used to probe for endpoint health. | int |
| profileMonitorStatus | The profile-level monitoring status of the Traffic Manager profile. | 'CheckingEndpoints''Degraded''Disabled''Inactive''Online' |
| protocol | The protocol (HTTP, HTTPS or TCP) used to probe for endpoint health. | 'HTTP''HTTPS''TCP' |
| timeoutInSeconds | The monitor timeout for endpoints in this profile. This is the time that Traffic Manager allows endpoints in this profile to response to the health check. | int |
| toleratedNumberOfFailures | The number of consecutive failed health check that Traffic Manager tolerates before declaring an endpoint in this profile Degraded after the next failed health check. | int |


### MonitorConfigCustomHeadersItem

| Name | Description | Value |
|-|-|-|
| name | Header name. | string |
| value | Header value. | string |


### MonitorConfigExpectedStatusCodeRangesItem

| Name | Description | Value |
|-|-|-|
| max | Max status code. | int |
| min | Min status code. | int |


