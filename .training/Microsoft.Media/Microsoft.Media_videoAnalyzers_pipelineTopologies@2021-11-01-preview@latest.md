```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Media/videoAnalyzers/pipelineTopologies@2021-11-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      description = "string"
      parameters = [
        {
          default = "string"
          description = "string"
          name = "string"
          type = "string"
        }
      ]
      processors = [
        {
          inputs = [
            {
              nodeName = "string"
            }
          ]
          name = "string"
          @type = "string"
          // For remaining properties, see ProcessorNodeBase objects
        }
      ]
      sinks = [
        {
          inputs = [
            {
              nodeName = "string"
            }
          ]
          name = "string"
          @type = "string"
          // For remaining properties, see SinkNodeBase objects
        }
      ]
      sources = [
        {
          name = "string"
          @type = "string"
          // For remaining properties, see SourceNodeBase objects
        }
      ]
    }
    sku = {
      name = "string"
    }
    kind = "string"
  })
}

```

### videoAnalyzers/pipelineTopologies

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| sku | Describes the properties of a SKU. | Sku(required) |
| kind | Topology kind. | 'Batch''Live' (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:videoAnalyzers |
| properties | The resource properties. | PipelineTopologyProperties |


### PipelineTopologyProperties

| Name | Description | Value |
|-|-|-|
| description | An optional description of the pipeline topology. It is recommended that the expected use of the topology to be described here. | string |
| parameters | List of the topology parameter declarations. Parameters declared here can be referenced throughout the topology nodes through the use of "${PARAMETER_NAME}" string pattern. Parameters can have optional default values and can later be defined in individual instances of the pipeline. | ParameterDeclaration[] |
| processors | List of the topology processor nodes. Processor nodes enable pipeline data to be analyzed, processed or transformed. | ProcessorNodeBase[] |
| sinks | List of the topology sink nodes. Sink nodes allow pipeline data to be stored or exported. | SinkNodeBase[] (required) |
| sources | List of the topology source nodes. Source nodes enable external data to be ingested by the pipeline. | SourceNodeBase[] (required) |


### ParameterDeclaration

| Name | Description | Value |
|-|-|-|
| default | The default value for the parameter to be used if the pipeline does not specify a value. | string |
| description | Description of the parameter. | string |
| name | Name of the parameter. | string (required) |
| type | Type of the parameter. | 'Bool''Double''Int''SecretString''String' (required) |


### ProcessorNodeBase

| Name | Description | Value |
|-|-|-|
| inputs | An array of upstream node references within the topology to be used as inputs for this node. | NodeInput[] (required) |
| name | Node name. Must be unique within the topology. | string (required) |
| @type | Set the object type | #Microsoft.VideoAnalyzer.EncoderProcessor(required) |


### NodeInput

| Name | Description | Value |
|-|-|-|
| nodeName | The name of the upstream node in the pipeline which output is used as input of the current node. | string (required) |


### EncoderProcessor

| Name | Description | Value |
|-|-|-|
| @type | The discriminator for derived types. | '#Microsoft.VideoAnalyzer.EncoderProcessor' (required) |
| preset | The encoder preset, which defines the recipe or instructions on how the input content should be processed. | EncoderPresetBase(required) |


### EncoderPresetBase

| Name | Description | Value |
|-|-|-|
| @type | Set the object type | #Microsoft.VideoAnalyzer.EncoderCustomPreset#Microsoft.VideoAnalyzer.EncoderSystemPreset(required) |


### EncoderCustomPreset

| Name | Description | Value |
|-|-|-|
| @type | The discriminator for derived types. | '#Microsoft.VideoAnalyzer.EncoderCustomPreset' (required) |
| audioEncoder | Describes a custom preset for encoding audio. | AudioEncoderBase |
| videoEncoder | Describes a custom preset for encoding video. | VideoEncoderBase |


### AudioEncoderBase

| Name | Description | Value |
|-|-|-|
| bitrateKbps | Bitrate, in kilobits per second or Kbps, at which audio should be encoded (2-channel stereo audio at a sampling rate of 48 kHz). Allowed values are 96, 112, 128, 160, 192, 224, and 256. If omitted, the bitrate of the input audio is used. | string |
| @type | Set the object type | #Microsoft.VideoAnalyzer.AudioEncoderAac(required) |


### AudioEncoderAac

| Name | Description | Value |
|-|-|-|
| @type | The discriminator for derived types. | '#Microsoft.VideoAnalyzer.AudioEncoderAac' (required) |


### VideoEncoderBase

| Name | Description | Value |
|-|-|-|
| bitrateKbps | The maximum bitrate, in kilobits per second or Kbps, at which video should be encoded. If omitted, encoder sets it automatically to try and match the quality of the input video. | string |
| frameRate | The frame rate (in frames per second) of the encoded video. The value must be greater than zero, and less than or equal to 300. If omitted, the encoder uses the average frame rate of the input video. | string |
| scale | Describes the resolution of the encoded video. If omitted, the encoder uses the resolution of the input video. | VideoScale |
| @type | Set the object type | #Microsoft.VideoAnalyzer.VideoEncoderH264(required) |


### VideoScale

| Name | Description | Value |
|-|-|-|
| height | The desired output video height. | string |
| mode | Describes the video scaling mode to be applied. Default mode is 'Pad'. If the mode is 'Pad' or 'Stretch' then both width and height must be specified. Else if the mode is 'PreserveAspectRatio' then only one of width or height need be provided. | 'Pad''PreserveAspectRatio''Stretch' |
| width | The desired output video width. | string |


### VideoEncoderH264

| Name | Description | Value |
|-|-|-|
| @type | The discriminator for derived types. | '#Microsoft.VideoAnalyzer.VideoEncoderH264' (required) |


### EncoderSystemPreset

| Name | Description | Value |
|-|-|-|
| @type | The discriminator for derived types. | '#Microsoft.VideoAnalyzer.EncoderSystemPreset' (required) |
| name | Name of the built-in encoding preset. | 'SingleLayer_1080p_H264_AAC''SingleLayer_2160p_H264_AAC''SingleLayer_540p_H264_AAC''SingleLayer_720p_H264_AAC' (required) |


### SinkNodeBase

| Name | Description | Value |
|-|-|-|
| inputs | An array of upstream node references within the topology to be used as inputs for this node. | NodeInput[] (required) |
| name | Node name. Must be unique within the topology. | string (required) |
| @type | Set the object type | #Microsoft.VideoAnalyzer.VideoSink(required) |


### VideoSink

| Name | Description | Value |
|-|-|-|
| @type | The discriminator for derived types. | '#Microsoft.VideoAnalyzer.VideoSink' (required) |
| videoCreationProperties | Optional video properties to be used in case a new video resource needs to be created on the service. | VideoCreationProperties |
| videoName | Name of a new or existing video resource used to capture and publish content. Note: if downstream of RTSP source, and if disableArchive is set to true, then no content is archived. | string (required) |
| videoPublishingOptions | Options to change how the video sink publishes content via the video resource. This property is only allowed for topologies where "kind" is set to "live". | VideoPublishingOptions |


### VideoCreationProperties

| Name | Description | Value |
|-|-|-|
| description | Optional description provided by the user. Value can be up to 2048 characters long. | string |
| retentionPeriod | Video retention period indicates how long the video is kept in storage. Value must be specified in ISO8601 duration format (i.e. "P1D" equals 1 day) and can vary between 1 day to 10 years, in 1 day increments. When absent (null), all video content is retained indefinitely. This property is only allowed for topologies where "kind" is set to "live". | string |
| segmentLength | Segment length indicates the length of individual content files (segments) which are persisted to storage. Smaller segments provide lower archive playback latency but generate larger volume of storage transactions. Larger segments reduce the amount of storage transactions while increasing the archive playback latency. Value must be specified in ISO8601 duration format (i.e. "PT30S" equals 30 seconds) and can vary between 30 seconds to 5 minutes, in 30 seconds increments. Changing this value after the initial call to create the video resource can lead to errors when uploading content to the archive. Default value is 30 seconds. This property is only allowed for topologies where "kind" is set to "live". | string |
| title | Optional title provided by the user. Value can be up to 256 characters long. | string |


### VideoPublishingOptions

| Name | Description | Value |
|-|-|-|
| disableArchive | When set to 'true' content will not be archived or recorded. This is used, for example, when the topology is used only for low latency video streaming. Default is 'false'.  If set to 'true', then "disableRtspPublishing" must be set to 'false'. | string |
| disableRtspPublishing | When set to 'true' the RTSP playback URL will not be published, disabling low latency streaming. This is used, for example, when the topology is used only for archiving content. Default is 'false'.  If set to 'true', then "disableArchive" must be set to 'false'. | string |


### SourceNodeBase

| Name | Description | Value |
|-|-|-|
| name | Node name. Must be unique within the topology. | string (required) |
| @type | Set the object type | #Microsoft.VideoAnalyzer.RtspSource#Microsoft.VideoAnalyzer.VideoSource(required) |


### RtspSource

| Name | Description | Value |
|-|-|-|
| @type | The discriminator for derived types. | '#Microsoft.VideoAnalyzer.RtspSource' (required) |
| endpoint | RTSP endpoint information for Video Analyzer to connect to. This contains the required information for Video Analyzer to connect to RTSP cameras and/or generic RTSP servers. | EndpointBase(required) |
| transport | Network transport utilized by the RTSP and RTP exchange: TCP or HTTP. When using TCP, the RTP packets are interleaved on the TCP RTSP connection. When using HTTP, the RTSP messages are exchanged through long lived HTTP connections, and the RTP packages are interleaved in the HTTP connections alongside the RTSP messages. | 'Http''Tcp' |


### EndpointBase

| Name | Description | Value |
|-|-|-|
| credentials | Credentials to be presented to the endpoint. | CredentialsBase(required) |
| tunnel | Describes the tunnel through which Video Analyzer can connect to the endpoint URL. This is an optional property, typically used when the endpoint is behind a firewall. | TunnelBase |
| url | The endpoint URL for Video Analyzer to connect to. | string (required) |
| @type | Set the object type | #Microsoft.VideoAnalyzer.TlsEndpoint#Microsoft.VideoAnalyzer.UnsecuredEndpoint(required) |


### CredentialsBase

| Name | Description | Value |
|-|-|-|
| @type | Set the object type | #Microsoft.VideoAnalyzer.UsernamePasswordCredentials(required) |


### UsernamePasswordCredentials

| Name | Description | Value |
|-|-|-|
| @type | The discriminator for derived types. | '#Microsoft.VideoAnalyzer.UsernamePasswordCredentials' (required) |
| password | Password to be presented as part of the credentials. It is recommended that this value is parameterized as a secret string in order to prevent this value to be returned as part of the resource on API requests. | string (required) |
| username | Username to be presented as part of the credentials. | string (required) |


### TunnelBase

| Name | Description | Value |
|-|-|-|
| @type | Set the object type | #Microsoft.VideoAnalyzer.SecureIotDeviceRemoteTunnel(required) |


### SecureIotDeviceRemoteTunnel

| Name | Description | Value |
|-|-|-|
| @type | The discriminator for derived types. | '#Microsoft.VideoAnalyzer.SecureIotDeviceRemoteTunnel' (required) |
| deviceId | The IoT device id to use when establishing the remote tunnel. This string is case-sensitive. | string (required) |
| iotHubName | Name of the IoT Hub. | string (required) |


### TlsEndpoint

| Name | Description | Value |
|-|-|-|
| @type | The discriminator for derived types. | '#Microsoft.VideoAnalyzer.TlsEndpoint' (required) |
| trustedCertificates | List of trusted certificate authorities when authenticating a TLS connection. A null list designates that Azure Video Analyzer's list of trusted authorities should be used. | CertificateSource |
| validationOptions | Validation options to use when authenticating a TLS connection. By default, strict validation is used. | TlsValidationOptions |


### CertificateSource

| Name | Description | Value |
|-|-|-|
| @type | Set the object type | #Microsoft.VideoAnalyzer.PemCertificateList(required) |


### PemCertificateList

| Name | Description | Value |
|-|-|-|
| @type | The discriminator for derived types. | '#Microsoft.VideoAnalyzer.PemCertificateList' (required) |
| certificates | PEM formatted public certificates. One certificate per entry. | string[] (required) |


### TlsValidationOptions

| Name | Description | Value |
|-|-|-|
| ignoreHostname | When set to 'true' causes the certificate subject name validation to be skipped. Default is 'false'. | string |
| ignoreSignature | When set to 'true' causes the certificate chain trust validation to be skipped. Default is 'false'. | string |


### UnsecuredEndpoint

| Name | Description | Value |
|-|-|-|
| @type | The discriminator for derived types. | '#Microsoft.VideoAnalyzer.UnsecuredEndpoint' (required) |


### VideoSource

| Name | Description | Value |
|-|-|-|
| @type | The discriminator for derived types. | '#Microsoft.VideoAnalyzer.VideoSource' (required) |
| timeSequences | Describes a sequence of datetime ranges. The video source only picks up recorded media within these ranges. | TimeSequenceBase(required) |
| videoName | Name of the Video Analyzer video resource to be used as the source. | string (required) |


### TimeSequenceBase

| Name | Description | Value |
|-|-|-|
| @type | Set the object type | #Microsoft.VideoAnalyzer.VideoSequenceAbsoluteTimeMarkers(required) |


### VideoSequenceAbsoluteTimeMarkers

| Name | Description | Value |
|-|-|-|
| @type | The discriminator for derived types. | '#Microsoft.VideoAnalyzer.VideoSequenceAbsoluteTimeMarkers' (required) |
| ranges | The sequence of datetime ranges. Example: '[["2021-10-05T03:30:00Z", "2021-10-05T03:40:00Z"]]'. | string (required) |


### Sku

| Name | Description | Value |
|-|-|-|
| name | The SKU name. | 'Batch_S1''Live_S1' (required) |


