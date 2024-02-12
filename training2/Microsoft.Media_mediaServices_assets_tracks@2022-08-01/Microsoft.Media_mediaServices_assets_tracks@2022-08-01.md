```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Media/mediaServices/assets/tracks@2022-08-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      track = {
        @odata.type = "string"
        // For remaining properties, see TrackBase objects
      }
    }
  })
}

```

### mediaServices/assets/tracks

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:assets |
| properties | The resource properties. | AssetTrackProperties |


### AssetTrackProperties

| Name | Description | Value |
|-|-|-|
| track | Detailed information about a track in the asset. | TrackBase |


### TrackBase

| Name | Description | Value |
|-|-|-|
| @odata.type | Set the object type | #Microsoft.Media.AudioTrack#Microsoft.Media.TextTrack#Microsoft.Media.VideoTrack(required) |


### AudioTrack

| Name | Description | Value |
|-|-|-|
| @odata.type | The discriminator for derived types. | '#Microsoft.Media.AudioTrack' (required) |
| dashSettings | The DASH specific setting for the audio track. | DashSettings |
| displayName | The display name of the audio track on a video player. In HLS, this maps to the NAME attribute of EXT-X-MEDIA. | string |
| fileName | The file name to the source file. This file is located in the storage container of the asset. | string |
| hlsSettings | The HLS specific setting for the audio track. | HlsSettings |
| languageCode | The RFC5646 language code for the audio track. | string |
| mpeg4TrackId | The MPEG-4 audio track ID for the audio track. | int |


### DashSettings

| Name | Description | Value |
|-|-|-|
| role | The role for the DASH setting. | string |


### HlsSettings

| Name | Description | Value |
|-|-|-|
| characteristics | The characteristics for the HLS setting. | string |
| default | The default for the HLS setting. | bool |
| forced | The forced for the HLS setting. | bool |


### TextTrack

| Name | Description | Value |
|-|-|-|
| @odata.type | The discriminator for derived types. | '#Microsoft.Media.TextTrack' (required) |
| displayName | The display name of the text track on a video player. In HLS, this maps to the NAME attribute of EXT-X-MEDIA. | string |
| fileName | The file name to the source file. This file is located in the storage container of the asset. | string |
| hlsSettings | The HLS specific setting for the text track. | HlsSettings |
| playerVisibility | When PlayerVisibility is set to "Visible", the text track will be present in the DASH manifest or HLS playlist when requested by a client. When the PlayerVisibility is set to "Hidden", the text will not be available to the client. The default value is "Visible". | 'Hidden''Visible' |


### VideoTrack

| Name | Description | Value |
|-|-|-|
| @odata.type | The discriminator for derived types. | '#Microsoft.Media.VideoTrack' (required) |


