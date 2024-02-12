```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Media/mediaservices/liveEvents/liveOutputs@2022-08-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      archiveWindowLength = "string"
      assetName = "string"
      description = "string"
      hls = {
        fragmentsPerTsSegment = int
      }
      manifestName = "string"
      outputSnapTime = int
      rewindWindowLength = "string"
    }
  })
}

```

### mediaservices/liveEvents/liveOutputs

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-256Valid characters:Alphanumerics and hyphens.Start with alphanumeric. |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:liveEvents |
| properties | Live output properties. | LiveOutputProperties |


### LiveOutputProperties

| Name | Description | Value |
|-|-|-|
| archiveWindowLength | ISO 8601 time between 1 minute to 25 hours to indicate the maximum content length that can be archived in the asset for this live output. This also sets the maximum content length for the rewind window. For example, use PT1H30M to indicate 1 hour and 30 minutes of archive window. | string (required) |
| assetName | The asset that the live output will write to. | string (required) |
| description | The description of the live output. | string |
| hls | HTTP Live Streaming (HLS) packing setting for the live output. | Hls |
| manifestName | The manifest file name. If not provided, the service will generate one automatically. | string |
| outputSnapTime | The initial timestamp that the live output will start at, any content before this value will not be archived. | int |
| rewindWindowLength | ISO 8601 time between 1 minute to the duration of archiveWindowLength to control seek-able window length during Live. The service won't use this property once LiveOutput stops. The archived VOD will have full content with original ArchiveWindowLength. For example, use PT1H30M to indicate 1 hour and 30 minutes of rewind window length. Service will use implicit default value 30m only if Live Event enables LL. | string |


### Hls

| Name | Description | Value |
|-|-|-|
| fragmentsPerTsSegment | The number of fragments in an HTTP Live Streaming (HLS) TS segment in the output of the live event. This value does not affect the packing ratio for HLS CMAF output. | int |


