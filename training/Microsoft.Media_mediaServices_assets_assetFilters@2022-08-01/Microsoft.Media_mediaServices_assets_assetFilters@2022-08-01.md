```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Media/mediaServices/assets/assetFilters@2022-08-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      firstQuality = {
        bitrate = int
      }
      presentationTimeRange = {
        endTimestamp = int
        forceEndTimestamp = bool
        liveBackoffDuration = int
        presentationWindowDuration = int
        startTimestamp = int
        timescale = int
      }
      tracks = [
        {
          trackSelections = [
            {
              operation = "string"
              property = "string"
              value = "string"
            }
          ]
        }
      ]
    }
  })
}

```

### mediaServices/assets/assetFilters

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:assets |
| properties | The Media Filter properties. | MediaFilterProperties |


### MediaFilterProperties

| Name | Description | Value |
|-|-|-|
| firstQuality | The first quality. | FirstQuality |
| presentationTimeRange | The presentation time range. | PresentationTimeRange |
| tracks | The tracks selection conditions. | FilterTrackSelection[] |


### FirstQuality

| Name | Description | Value |
|-|-|-|
| bitrate | The first quality bitrate. | int (required) |


### PresentationTimeRange

| Name | Description | Value |
|-|-|-|
| endTimestamp | The absolute end time boundary. | int |
| forceEndTimestamp | The indicator of forcing existing of end time stamp. | bool |
| liveBackoffDuration | The relative to end right edge. | int |
| presentationWindowDuration | The relative to end sliding window. | int |
| startTimestamp | The absolute start time boundary. | int |
| timescale | The time scale of time stamps. | int |


### FilterTrackSelection

| Name | Description | Value |
|-|-|-|
| trackSelections | The track selections. | FilterTrackPropertyCondition[] (required) |


### FilterTrackPropertyCondition

| Name | Description | Value |
|-|-|-|
| operation | The track property condition operation. | 'Equal''NotEqual' (required) |
| property | The track property type. | 'Bitrate''FourCC''Language''Name''Type''Unknown' (required) |
| value | The track property value. | string (required) |


