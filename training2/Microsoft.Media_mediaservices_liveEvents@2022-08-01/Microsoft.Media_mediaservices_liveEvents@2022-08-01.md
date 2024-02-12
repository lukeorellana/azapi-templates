```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Media/mediaservices/liveEvents@2022-08-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      crossSiteAccessPolicies = {
        clientAccessPolicy = "string"
        crossDomainPolicy = "string"
      }
      description = "string"
      encoding = {
        encodingType = "string"
        keyFrameInterval = "string"
        presetName = "string"
        stretchMode = "string"
      }
      hostnamePrefix = "string"
      input = {
        accessControl = {
          ip = {
            allow = [
              {
                address = "string"
                name = "string"
                subnetPrefixLength = int
              }
            ]
          }
        }
        accessToken = "string"
        endpoints = [
          {
            protocol = "string"
            url = "string"
          }
        ]
        keyFrameIntervalDuration = "string"
        streamingProtocol = "string"
      }
      preview = {
        accessControl = {
          ip = {
            allow = [
              {
                address = "string"
                name = "string"
                subnetPrefixLength = int
              }
            ]
          }
        }
        alternativeMediaId = "string"
        endpoints = [
          {
            protocol = "string"
            url = "string"
          }
        ]
        previewLocator = "string"
        streamingPolicyName = "string"
      }
      streamOptions = [
        "string"
      ]
      transcriptions = [
        {
          inputTrackSelection = [
            {
              operation = "string"
              property = "string"
              value = "string"
            }
          ]
          language = "string"
          outputTranscriptionTrack = {
            trackName = "string"
          }
        }
      ]
      useStaticHostname = bool
    }
  })
}

```

### mediaservices/liveEvents

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-32Valid characters:Alphanumerics and hyphens.Start with alphanumeric. |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:mediaservices |
| properties | The live event properties. | LiveEventProperties |


### LiveEventProperties

| Name | Description | Value |
|-|-|-|
| crossSiteAccessPolicies | Live event cross site access policies. | CrossSiteAccessPolicies |
| description | A description for the live event. | string |
| encoding | Encoding settings for the live event. It configures whether a live encoder is used for the live event and settings for the live encoder if it is used. | LiveEventEncoding |
| hostnamePrefix | When useStaticHostname is set to true, the hostnamePrefix specifies the first part of the hostname assigned to the live event preview and ingest endpoints. The final hostname would be a combination of this prefix, the media service account name and a short code for the Azure Media Services data center. | string |
| input | Live event input settings. It defines how the live event receives input from a contribution encoder. | LiveEventInput(required) |
| preview | Live event preview settings. Preview allows live event producers to preview the live streaming content without creating any live output. | LiveEventPreview |
| streamOptions | The options to use for the LiveEvent. This value is specified at creation time and cannot be updated. The valid values for the array entry values are 'Default' and 'LowLatency'. | String array containing any of:'Default''LowLatency''LowLatencyV2' |
| transcriptions | Live transcription settings for the live event. Seehttps://go.microsoft.com/fwlink/?linkid=2133742for more information about the live transcription feature. | LiveEventTranscription[] |
| useStaticHostname | Specifies whether a static hostname would be assigned to the live event preview and ingest endpoints. This value can only be updated if the live event is in Standby state | bool |


### CrossSiteAccessPolicies

| Name | Description | Value |
|-|-|-|
| clientAccessPolicy | The content of clientaccesspolicy.xml used by Silverlight. | string |
| crossDomainPolicy | The content of crossdomain.xml used by Silverlight. | string |


### LiveEventEncoding

| Name | Description | Value |
|-|-|-|
| encodingType | Live event type. When encodingType is set to PassthroughBasic or PassthroughStandard, the service simply passes through the incoming video and audio layer(s) to the output. When encodingType is set to Standard or Premium1080p, a live encoder transcodes the incoming stream into multiple bitrates or layers. Seehttps://go.microsoft.com/fwlink/?linkid=2095101for more information. This property cannot be modified after the live event is created. | 'None''PassthroughBasic''PassthroughStandard''Premium1080p''Standard' |
| keyFrameInterval | Use an ISO 8601 time value between 0.5 to 20 seconds to specify the output fragment length for the video and audio tracks of an encoding live event. For example, use PT2S to indicate 2 seconds. For the video track it also defines the key frame interval, or the length of a GoP (group of pictures).   If this value is not set for an encoding live event, the fragment duration defaults to 2 seconds. The value cannot be set for pass-through live events. | string |
| presetName | The optional encoding preset name, used when encodingType is not None. This value is specified at creation time and cannot be updated. If the encodingType is set to Standard, then the default preset name is âDefault720pâ. Else if the encodingType is set to Premium1080p, the default preset is âDefault1080pâ. | string |
| stretchMode | Specifies how the input video will be resized to fit the desired output resolution(s). Default is None | 'AutoFit''AutoSize''None' |


### LiveEventInput

| Name | Description | Value |
|-|-|-|
| accessControl | Access control for live event input. | LiveEventInputAccessControl |
| accessToken | A UUID in string form to uniquely identify the stream. This can be specified at creation time but cannot be updated. If omitted, the service will generate a unique value. | string |
| endpoints | The input endpoints for the live event. | LiveEventEndpoint[] |
| keyFrameIntervalDuration | ISO 8601 time duration of the key frame interval duration of the input. This value sets the EXT-X-TARGETDURATION property in the HLS output. For example, use PT2S to indicate 2 seconds. Leave the value empty for encoding live events. | string |
| streamingProtocol | The input protocol for the live event. This is specified at creation time and cannot be updated. | 'FragmentedMP4''RTMP' (required) |


### LiveEventInputAccessControl

| Name | Description | Value |
|-|-|-|
| ip | The IP access control properties. | IPAccessControl |


### IPAccessControl

| Name | Description | Value |
|-|-|-|
| allow | The IP allow list. | IPRange[] |


### IPRange

| Name | Description | Value |
|-|-|-|
| address | The IP address. | string |
| name | The friendly name for the IP address range. | string |
| subnetPrefixLength | The subnet mask prefix length (see CIDR notation). | int |


### LiveEventEndpoint

| Name | Description | Value |
|-|-|-|
| protocol | The endpoint protocol. | string |
| url | The endpoint URL. | string |


### LiveEventPreview

| Name | Description | Value |
|-|-|-|
| accessControl | The access control for live event preview. | LiveEventPreviewAccessControl |
| alternativeMediaId | An alternative media identifier associated with the streaming locator created for the preview. This value is specified at creation time and cannot be updated. The identifier can be used in the CustomLicenseAcquisitionUrlTemplate or the CustomKeyAcquisitionUrlTemplate of the StreamingPolicy specified in the StreamingPolicyName field. | string |
| endpoints | The endpoints for preview. Do not share the preview URL with the live event audience. | LiveEventEndpoint[] |
| previewLocator | The identifier of the preview locator in Guid format. Specifying this at creation time allows the caller to know the preview locator url before the event is created. If omitted, the service will generate a random identifier. This value cannot be updated once the live event is created. | string |
| streamingPolicyName | The name of streaming policy used for the live event preview. This value is specified at creation time and cannot be updated. | string |


### LiveEventPreviewAccessControl

| Name | Description | Value |
|-|-|-|
| ip | The IP access control properties. | IPAccessControl |


### LiveEventTranscription

| Name | Description | Value |
|-|-|-|
| inputTrackSelection | Provides a mechanism to select the audio track in the input live feed, to which speech-to-text transcription is applied. This property is reserved for future use, any value set on this property will be ignored. | LiveEventInputTrackSelection[] |
| language | Specifies the language (locale) to be used for speech-to-text transcription â it should match the spoken language in the audio track. The value should be in BCP-47 format (e.g: 'en-US'). Seehttps://go.microsoft.com/fwlink/?linkid=2133742for more information about the live transcription feature and the list of supported languages. | string |
| outputTranscriptionTrack | Describes a transcription track in the output of a live event, generated using speech-to-text transcription. This property is reserved for future use, any value set on this property will be ignored. | LiveEventOutputTranscriptionTrack |


### LiveEventInputTrackSelection

| Name | Description | Value |
|-|-|-|
| operation | Comparing operation. This property is reserved for future use, any value set on this property will be ignored. | string |
| property | Property name to select. This property is reserved for future use, any value set on this property will be ignored. | string |
| value | Property value to select. This property is reserved for future use, any value set on this property will be ignored. | string |


### LiveEventOutputTranscriptionTrack

| Name | Description | Value |
|-|-|-|
| trackName | The output track name. This property is reserved for future use, any value set on this property will be ignored. | string (required) |


