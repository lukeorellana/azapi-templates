```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/networkWatchers/connectionMonitors@2023-04-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      autoStart = bool
      destination = {
        address = "string"
        port = int
        resourceId = "string"
      }
      endpoints = [
        {
          address = "string"
          coverageLevel = "string"
          filter = {
            items = [
              {
                address = "string"
                type = "AgentAddress"
              }
            ]
            type = "Include"
          }
          name = "string"
          resourceId = "string"
          scope = {
            exclude = [
              {
                address = "string"
              }
            ]
            include = [
              {
                address = "string"
              }
            ]
          }
          type = "string"
        }
      ]
      monitoringIntervalInSeconds = int
      notes = "string"
      outputs = [
        {
          type = "Workspace"
          workspaceSettings = {
            workspaceResourceId = "string"
          }
        }
      ]
      source = {
        port = int
        resourceId = "string"
      }
      testConfigurations = [
        {
          httpConfiguration = {
            method = "string"
            path = "string"
            port = int
            preferHTTPS = bool
            requestHeaders = [
              {
                name = "string"
                value = "string"
              }
            ]
            validStatusCodeRanges = [
              "string"
            ]
          }
          icmpConfiguration = {
            disableTraceRoute = bool
          }
          name = "string"
          preferredIPVersion = "string"
          protocol = "string"
          successThreshold = {
            checksFailedPercent = int
            roundTripTimeMs = int
          }
          tcpConfiguration = {
            destinationPortBehavior = "string"
            disableTraceRoute = bool
            port = int
          }
          testFrequencySec = int
        }
      ]
      testGroups = [
        {
          destinations = [
            "string"
          ]
          disable = bool
          name = "string"
          sources = [
            "string"
          ]
          testConfigurations = [
            "string"
          ]
        }
      ]
    }
  })
}

```

### networkWatchers/connectionMonitors

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | Connection monitor location. | string |
| tags | Connection monitor tags. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:networkWatchers |
| properties | Properties of the connection monitor. | ConnectionMonitorParametersOrConnectionMonitorResult...(required) |


### ConnectionMonitorParametersOrConnectionMonitorResult...

| Name | Description | Value |
|-|-|-|
| autoStart | Determines if the connection monitor will start automatically once created. | bool |
| destination | Describes the destination of connection monitor. | ConnectionMonitorDestination |
| endpoints | List of connection monitor endpoints. | ConnectionMonitorEndpoint[] |
| monitoringIntervalInSeconds | Monitoring interval in seconds. | int |
| notes | Optional notes to be associated with the connection monitor. | string |
| outputs | List of connection monitor outputs. | ConnectionMonitorOutput[] |
| source | Describes the source of connection monitor. | ConnectionMonitorSource |
| testConfigurations | List of connection monitor test configurations. | ConnectionMonitorTestConfiguration[] |
| testGroups | List of connection monitor test groups. | ConnectionMonitorTestGroup[] |


### ConnectionMonitorDestination

| Name | Description | Value |
|-|-|-|
| address | Address of the connection monitor destination (IP or domain name). | string |
| port | The destination port used by connection monitor. | int |
| resourceId | The ID of the resource used as the destination by connection monitor. | string |


### ConnectionMonitorEndpoint

| Name | Description | Value |
|-|-|-|
| address | Address of the connection monitor endpoint (IP or domain name). | string |
| coverageLevel | Test coverage for the endpoint. | 'AboveAverage''Average''BelowAverage''Default''Full''Low' |
| filter | Filter for sub-items within the endpoint. | ConnectionMonitorEndpointFilter |
| name | The name of the connection monitor endpoint. | string (required) |
| resourceId | Resource ID of the connection monitor endpoint. | string |
| scope | Endpoint scope. | ConnectionMonitorEndpointScope |
| type | The endpoint type. | 'AzureArcVM''AzureSubnet''AzureVM''AzureVMSS''AzureVNet''ExternalAddress''MMAWorkspaceMachine''MMAWorkspaceNetwork' |


### ConnectionMonitorEndpointFilter

| Name | Description | Value |
|-|-|-|
| items | List of items in the filter. | ConnectionMonitorEndpointFilterItem[] |
| type | The behavior of the endpoint filter. Currently only 'Include' is supported. | 'Include' |


### ConnectionMonitorEndpointFilterItem

| Name | Description | Value |
|-|-|-|
| address | The address of the filter item. | string |
| type | The type of item included in the filter. Currently only 'AgentAddress' is supported. | 'AgentAddress' |


### ConnectionMonitorEndpointScope

| Name | Description | Value |
|-|-|-|
| exclude | List of items which needs to be excluded from the endpoint scope. | ConnectionMonitorEndpointScopeItem[] |
| include | List of items which needs to be included to the endpoint scope. | ConnectionMonitorEndpointScopeItem[] |


### ConnectionMonitorEndpointScopeItem

| Name | Description | Value |
|-|-|-|
| address | The address of the endpoint item. Supported types are IPv4/IPv6 subnet mask or IPv4/IPv6 IP address. | string |


### ConnectionMonitorOutput

| Name | Description | Value |
|-|-|-|
| type | Connection monitor output destination type. Currently, only "Workspace" is supported. | 'Workspace' |
| workspaceSettings | Describes the settings for producing output into a log analytics workspace. | ConnectionMonitorWorkspaceSettings |


### ConnectionMonitorWorkspaceSettings

| Name | Description | Value |
|-|-|-|
| workspaceResourceId | Log analytics workspace resource ID. | string |


### ConnectionMonitorSource

| Name | Description | Value |
|-|-|-|
| port | The source port used by connection monitor. | int |
| resourceId | The ID of the resource used as the source by connection monitor. | string (required) |


### ConnectionMonitorTestConfiguration

| Name | Description | Value |
|-|-|-|
| httpConfiguration | The parameters used to perform test evaluation over HTTP. | ConnectionMonitorHttpConfiguration |
| icmpConfiguration | The parameters used to perform test evaluation over ICMP. | ConnectionMonitorIcmpConfiguration |
| name | The name of the connection monitor test configuration. | string (required) |
| preferredIPVersion | The preferred IP version to use in test evaluation. The connection monitor may choose to use a different version depending on other parameters. | 'IPv4''IPv6' |
| protocol | The protocol to use in test evaluation. | 'Http''Icmp''Tcp' (required) |
| successThreshold | The threshold for declaring a test successful. | ConnectionMonitorSuccessThreshold |
| tcpConfiguration | The parameters used to perform test evaluation over TCP. | ConnectionMonitorTcpConfiguration |
| testFrequencySec | The frequency of test evaluation, in seconds. | int |


### ConnectionMonitorHttpConfiguration

| Name | Description | Value |
|-|-|-|
| method | The HTTP method to use. | 'Get''Post' |
| path | The path component of the URI. For instance, "/dir1/dir2". | string |
| port | The port to connect to. | int |
| preferHTTPS | Value indicating whether HTTPS is preferred over HTTP in cases where the choice is not explicit. | bool |
| requestHeaders | The HTTP headers to transmit with the request. | HttpHeader[] |
| validStatusCodeRanges | HTTP status codes to consider successful. For instance, "2xx,301-304,418". | string[] |


### HttpHeader

| Name | Description | Value |
|-|-|-|
| name | The name in HTTP header. | string |
| value | The value in HTTP header. | string |


### ConnectionMonitorIcmpConfiguration

| Name | Description | Value |
|-|-|-|
| disableTraceRoute | Value indicating whether path evaluation with trace route should be disabled. | bool |


### ConnectionMonitorSuccessThreshold

| Name | Description | Value |
|-|-|-|
| checksFailedPercent | The maximum percentage of failed checks permitted for a test to evaluate as successful. | int |
| roundTripTimeMs | The maximum round-trip time in milliseconds permitted for a test to evaluate as successful. | int |


### ConnectionMonitorTcpConfiguration

| Name | Description | Value |
|-|-|-|
| destinationPortBehavior | Destination port behavior. | 'ListenIfAvailable''None' |
| disableTraceRoute | Value indicating whether path evaluation with trace route should be disabled. | bool |
| port | The port to connect to. | int |


### ConnectionMonitorTestGroup

| Name | Description | Value |
|-|-|-|
| destinations | List of destination endpoint names. | string[] (required) |
| disable | Value indicating whether test group is disabled. | bool |
| name | The name of the connection monitor test group. | string (required) |
| sources | List of source endpoint names. | string[] (required) |
| testConfigurations | List of test configuration names. | string[] (required) |


