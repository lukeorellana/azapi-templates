```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/networkWatchers/flowLogs@2023-04-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      enabled = bool
      flowAnalyticsConfiguration = {
        networkWatcherFlowAnalyticsConfiguration = {
          enabled = bool
          trafficAnalyticsInterval = int
          workspaceId = "string"
          workspaceRegion = "string"
          workspaceResourceId = "string"
        }
      }
      format = {
        type = "JSON"
        version = int
      }
      retentionPolicy = {
        days = int
        enabled = bool
      }
      storageId = "string"
      targetResourceId = "string"
    }
  })
}

```

### networkWatchers/flowLogs

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | Resource location. | string |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:networkWatchers |
| properties | Properties of the flow log. | FlowLogPropertiesFormat |


### FlowLogPropertiesFormat

| Name | Description | Value |
|-|-|-|
| enabled | Flag to enable/disable flow logging. | bool |
| flowAnalyticsConfiguration | Parameters that define the configuration of traffic analytics. | TrafficAnalyticsProperties |
| format | Parameters that define the flow log format. | FlowLogFormatParameters |
| retentionPolicy | Parameters that define the retention policy for flow log. | RetentionPolicyParameters |
| storageId | ID of the storage account which is used to store the flow log. | string (required) |
| targetResourceId | ID of network security group to which flow log will be applied. | string (required) |


### TrafficAnalyticsProperties

| Name | Description | Value |
|-|-|-|
| networkWatcherFlowAnalyticsConfiguration | Parameters that define the configuration of traffic analytics. | TrafficAnalyticsConfigurationProperties |


### TrafficAnalyticsConfigurationProperties

| Name | Description | Value |
|-|-|-|
| enabled | Flag to enable/disable traffic analytics. | bool |
| trafficAnalyticsInterval | The interval in minutes which would decide how frequently TA service should do flow analytics. | int |
| workspaceId | The resource guid of the attached workspace. | string |
| workspaceRegion | The location of the attached workspace. | string |
| workspaceResourceId | Resource Id of the attached workspace. | string |


### FlowLogFormatParameters

| Name | Description | Value |
|-|-|-|
| type | The file type of flow log. | 'JSON' |
| version | The version (revision) of the flow log. | int |


### RetentionPolicyParameters

| Name | Description | Value |
|-|-|-|
| days | Number of days to retain flow log records. | int |
| enabled | Flag to enable/disable retention. | bool |


