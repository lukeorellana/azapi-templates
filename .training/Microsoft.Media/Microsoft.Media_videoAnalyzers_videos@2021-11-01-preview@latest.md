```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Media/videoAnalyzers/videos@2021-11-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      archival = {
        retentionPeriod = "string"
      }
      description = "string"
      mediaInfo = {
        segmentLength = "string"
      }
      title = "string"
    }
  })
}

```

### videoAnalyzers/videos

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:videoAnalyzers |
| properties | The resource properties. | VideoProperties |


### VideoProperties

| Name | Description | Value |
|-|-|-|
| archival | Video archival properties. | VideoArchival |
| description | Optional video description provided by the user. Value can be up to 2048 characters long. | string |
| mediaInfo | Contains information about the video and audio content. | VideoMediaInfo |
| title | Optional video title provided by the user. Value can be up to 256 characters long. | string |


### VideoArchival

| Name | Description | Value |
|-|-|-|
| retentionPeriod | Video retention period indicates the maximum age of the video archive segments which are intended to be kept in storage. It must be provided in the ISO8601 duration format in the granularity of days, up to a maximum of 10 years. For example, if this is set to P30D (30 days), content older than 30 days will be periodically deleted. This value can be updated at any time and the new desired retention period will be effective within 24 hours. | string |


### VideoMediaInfo

| Name | Description | Value |
|-|-|-|
| segmentLength | Video segment length indicates the length of individual video files (segments) which are persisted to storage. Smaller segments provide lower archive playback latency but generate larger volume of storage transactions. Larger segments reduce the amount of storage transactions while increasing the archive playback latency. Value must be specified in ISO8601 duration format (i.e. "PT30S" equals 30 seconds) and can vary between 30 seconds to 5 minutes, in 30 seconds increments. | string |


