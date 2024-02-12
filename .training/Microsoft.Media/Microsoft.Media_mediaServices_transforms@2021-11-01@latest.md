```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Media/mediaServices/transforms@2021-11-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      description = "string"
      outputs = [
        {
          onError = "string"
          preset = {
            @odata.type = "string"
            // For remaining properties, see Preset objects
          }
          relativePriority = "string"
        }
      ]
    }
  })
}

```

### mediaServices/transforms

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:mediaServices |
| properties | The resource properties. | TransformProperties |


### TransformProperties

| Name | Description | Value |
|-|-|-|
| description | An optional verbose description of the Transform. | string |
| outputs | An array of one or more TransformOutputs that the Transform should generate. | TransformOutput[] (required) |


### TransformOutput

| Name | Description | Value |
|-|-|-|
| onError | A Transform can define more than one outputs. This property defines what the service should do when one output fails - either continue to produce other outputs, or, stop the other outputs. The overall Job state will not reflect failures of outputs that are specified with 'ContinueJob'. The default is 'StopProcessingJob'. | 'ContinueJob''StopProcessingJob' |
| preset | Preset that describes the operations that will be used to modify, transcode, or extract insights from the source file to generate the output. | Preset(required) |
| relativePriority | Sets the relative priority of the TransformOutputs within a Transform. This sets the priority that the service uses for processing TransformOutputs. The default priority is Normal. | 'High''Low''Normal' |


### Preset

| Name | Description | Value |
|-|-|-|
| @odata.type | Set the object type | #Microsoft.Media.BuiltInStandardEncoderPreset#Microsoft.Media.FaceDetectorPreset#Microsoft.Media.StandardEncoderPreset#Microsoft.Media.VideoAnalyzerPreset(required) |


### BuiltInStandardEncoderPreset

| Name | Description | Value |
|-|-|-|
| @odata.type | The discriminator for derived types. | '#Microsoft.Media.BuiltInStandardEncoderPreset' (required) |
| configurations | Optional configuration settings for encoder. Configurations is only supported for ContentAwareEncoding and H265ContentAwareEncoding BuiltInStandardEncoderPreset. | PresetConfigurations |
| presetName | The built-in preset to be used for encoding videos. | 'AACGoodQualityAudio''AdaptiveStreaming''ContentAwareEncoding''ContentAwareEncodingExperimental''CopyAllBitrateNonInterleaved''H264MultipleBitrate1080p''H264MultipleBitrate720p''H264MultipleBitrateSD''H264SingleBitrate1080p''H264SingleBitrate720p''H264SingleBitrateSD''H265AdaptiveStreaming''H265ContentAwareEncoding''H265SingleBitrate1080p''H265SingleBitrate4K''H265SingleBitrate720p' (required) |


### PresetConfigurations

| Name | Description | Value |
|-|-|-|
| complexity | Allows you to configure the encoder settings to control the balance between speed and quality. Example: set Complexity as Speed for faster encoding but less compression efficiency. | 'Balanced''Quality''Speed' |
| interleaveOutput | Sets the interleave mode of the output to control how audio and video are stored in the container format. Example: set InterleavedOutput as NonInterleavedOutput to produce audio-only and video-only outputs in separate MP4 files. | 'InterleavedOutput''NonInterleavedOutput' |
| keyFrameIntervalInSeconds | The key frame interval in seconds. Example: set KeyFrameIntervalInSeconds as 2 to reduce the playback buffering for some players. | int |
| maxBitrateBps | The maximum bitrate in bits per second (threshold for the top video layer). Example: set MaxBitrateBps as 6000000 to avoid producing very high bitrate outputs for contents with high complexity. | int |
| maxHeight | The maximum height of output video layers. Example: set MaxHeight as 720 to produce output layers up to 720P even if the input is 4K. | int |
| maxLayers | The maximum number of output video layers. Example: set MaxLayers as 4 to make sure at most 4 output layers are produced to control the overall cost of the encoding job. | int |
| minBitrateBps | The minimum bitrate in bits per second (threshold for the bottom video layer). Example: set MinBitrateBps as 200000 to have a bottom layer that covers users with low network bandwidth. | int |
| minHeight | The minimum height of output video layers. Example: set MinHeight as 360 to avoid output layers of smaller resolutions like 180P. | int |


### FaceDetectorPreset

| Name | Description | Value |
|-|-|-|
| @odata.type | The discriminator for derived types. | '#Microsoft.Media.FaceDetectorPreset' (required) |
| blurType | Blur type | 'Black''Box''High''Low''Med' |
| experimentalOptions | Dictionary containing key value pairs for parameters not exposed in the preset itself | object |
| mode | This mode provides the ability to choose between the following settings: 1) Analyze - For detection only.This mode generates a metadata JSON file marking appearances of faces throughout the video.Where possible, appearances of the same person are assigned the same ID. 2) Combined - Additionally redacts(blurs) detected faces. 3) Redact - This enables a 2-pass process, allowing for selective redaction of a subset of detected faces.It takes in the metadata file from a prior analyze pass, along with the source video, and a user-selected subset of IDs that require redaction. | 'Analyze''Combined''Redact' |
| resolution | Specifies the maximum resolution at which your video is analyzed. The default behavior is "SourceResolution," which will keep the input video at its original resolution when analyzed. Using "StandardDefinition" will resize input videos to standard definition while preserving the appropriate aspect ratio. It will only resize if the video is of higher resolution. For example, a 1920x1080 input would be scaled to 640x360 before processing. Switching to "StandardDefinition" will reduce the time it takes to process high resolution video. It may also reduce the cost of using this component (seehttps://azure.microsoft.com/pricing/details/media-services/#analyticsfor details). However, faces that end up being too small in the resized video may not be detected. | 'SourceResolution''StandardDefinition' |


### StandardEncoderPreset

| Name | Description | Value |
|-|-|-|
| @odata.type | The discriminator for derived types. | '#Microsoft.Media.StandardEncoderPreset' (required) |
| codecs | The list of codecs to be used when encoding the input video. | Codec[] (required) |
| filters | One or more filtering operations that are applied to the input media before encoding. | Filters |
| formats | The list of outputs to be produced by the encoder. | Format[] (required) |


### Codec

| Name | Description | Value |
|-|-|-|
| label | An optional label for the codec. The label can be used to control muxing behavior. | string |
| @odata.type | Set the object type | #Microsoft.Media.AacAudio#Microsoft.Media.CopyAudio#Microsoft.Media.CopyVideo#Microsoft.Media.H264Video#Microsoft.Media.H265Video#Microsoft.Media.JpgImage#Microsoft.Media.PngImage(required) |


### AacAudio

| Name | Description | Value |
|-|-|-|
| @odata.type | The discriminator for derived types. | '#Microsoft.Media.AacAudio' (required) |
| bitrate | The bitrate, in bits per second, of the output encoded audio. | int |
| channels | The number of channels in the audio. | int |
| profile | The encoding profile to be used when encoding audio with AAC. | 'AacLc''HeAacV1''HeAacV2' |
| samplingRate | The sampling rate to use for encoding in hertz. | int |


### CopyAudio

| Name | Description | Value |
|-|-|-|
| @odata.type | The discriminator for derived types. | '#Microsoft.Media.CopyAudio' (required) |


### CopyVideo

| Name | Description | Value |
|-|-|-|
| @odata.type | The discriminator for derived types. | '#Microsoft.Media.CopyVideo' (required) |


### H264Video

| Name | Description | Value |
|-|-|-|
| @odata.type | The discriminator for derived types. | '#Microsoft.Media.H264Video' (required) |
| complexity | Tells the encoder how to choose its encoding settings. The default value is Balanced. | 'Balanced''Quality''Speed' |
| keyFrameInterval | The distance between two key frames. The value should be non-zero in the range [0.5, 20] seconds, specified in ISO 8601 format. The default is 2 seconds(PT2S). Note that this setting is ignored if VideoSyncMode.Passthrough is set, where the KeyFrameInterval value will follow the input source setting. | string |
| layers | The collection of output H.264 layers to be produced by the encoder. | H264Layer[] |
| rateControlMode | The video rate control mode | 'ABR''CBR''CRF' |
| sceneChangeDetection | Whether or not the encoder should insert key frames at scene changes. If not specified, the default is false. This flag should be set to true only when the encoder is being configured to produce a single output video. | bool |
| stretchMode | The resizing mode - how the input video will be resized to fit the desired output resolution(s). Default is AutoSize | 'AutoFit''AutoSize''None' |
| syncMode | The Video Sync Mode | 'Auto''Cfr''Passthrough''Vfr' |


### H264Layer

| Name | Description | Value |
|-|-|-|
| adaptiveBFrame | Whether or not adaptive B-frames are to be used when encoding this layer. If not specified, the encoder will turn it on whenever the video profile permits its use. | bool |
| bFrames | The number of B-frames to be used when encoding this layer.  If not specified, the encoder chooses an appropriate number based on the video profile and level. | int |
| bitrate | The average bitrate in bits per second at which to encode the input video when generating this layer. This is a required field. | int (required) |
| bufferWindow | The VBV buffer window length. The value should be in ISO 8601 format. The value should be in the range [0.1-100] seconds. The default is 5 seconds (for example, PT5S). | string |
| crf | The value of CRF to be used when encoding this layer. This setting takes effect when RateControlMode of video codec is set at CRF mode. The range of CRF value is between 0 and 51, where lower values would result in better quality, at the expense of higher file sizes. Higher values mean more compression, but at some point quality degradation will be noticed. Default value is 23. | int |
| entropyMode | The entropy mode to be used for this layer. If not specified, the encoder chooses the mode that is appropriate for the profile and level. | 'Cabac''Cavlc' |
| frameRate | The frame rate (in frames per second) at which to encode this layer. The value can be in the form of M/N where M and N are integers (For example, 30000/1001), or in the form of a number (For example, 30, or 29.97). The encoder enforces constraints on allowed frame rates based on the profile and level. If it is not specified, the encoder will use the same frame rate as the input video. | string |
| height | The height of the output video for this layer. The value can be absolute (in pixels) or relative (in percentage). For example 50% means the output video has half as many pixels in height as the input. | string |
| label | The alphanumeric label for this layer, which can be used in multiplexing different video and audio layers, or in naming the output file. | string |
| level | We currently support Level up to 6.2. The value can be Auto, or a number that matches the H.264 profile. If not specified, the default is Auto, which lets the encoder choose the Level that is appropriate for this layer. | string |
| maxBitrate | The maximum bitrate (in bits per second), at which the VBV buffer should be assumed to refill. If not specified, defaults to the same value as bitrate. | int |
| profile | We currently support Baseline, Main, High, High422, High444. Default is Auto. | 'Auto''Baseline''High''High422''High444''Main' |
| referenceFrames | The number of reference frames to be used when encoding this layer. If not specified, the encoder determines an appropriate number based on the encoder complexity setting. | int |
| slices | The number of slices to be used when encoding this layer. If not specified, default is zero, which means that encoder will use a single slice for each frame. | int |
| width | The width of the output video for this layer. The value can be absolute (in pixels) or relative (in percentage). For example 50% means the output video has half as many pixels in width as the input. | string |


### H265Video

| Name | Description | Value |
|-|-|-|
| @odata.type | The discriminator for derived types. | '#Microsoft.Media.H265Video' (required) |
| complexity | Tells the encoder how to choose its encoding settings.  Quality will provide for a higher compression ratio but at a higher cost and longer compute time.  Speed will produce a relatively larger file but is faster and more economical. The default value is Balanced. | 'Balanced''Quality''Speed' |
| keyFrameInterval | The distance between two key frames. The value should be non-zero in the range [0.5, 20] seconds, specified in ISO 8601 format. The default is 2 seconds(PT2S). Note that this setting is ignored if VideoSyncMode.Passthrough is set, where the KeyFrameInterval value will follow the input source setting. | string |
| layers | The collection of output H.265 layers to be produced by the encoder. | H265Layer[] |
| sceneChangeDetection | Specifies whether or not the encoder should insert key frames at scene changes. If not specified, the default is false. This flag should be set to true only when the encoder is being configured to produce a single output video. | bool |
| stretchMode | The resizing mode - how the input video will be resized to fit the desired output resolution(s). Default is AutoSize | 'AutoFit''AutoSize''None' |
| syncMode | The Video Sync Mode | 'Auto''Cfr''Passthrough''Vfr' |


### H265Layer

| Name | Description | Value |
|-|-|-|
| adaptiveBFrame | Specifies whether or not adaptive B-frames are to be used when encoding this layer. If not specified, the encoder will turn it on whenever the video profile permits its use. | bool |
| bFrames | The number of B-frames to be used when encoding this layer.  If not specified, the encoder chooses an appropriate number based on the video profile and level. | int |
| bitrate | The average bitrate in bits per second at which to encode the input video when generating this layer. For example: a target bitrate of 3000Kbps or 3Mbps means this value should be 3000000 This is a required field. | int (required) |
| bufferWindow | The VBV buffer window length. The value should be in ISO 8601 format. The value should be in the range [0.1-100] seconds. The default is 5 seconds (for example, PT5S). | string |
| crf | The value of CRF to be used when encoding this layer. This setting takes effect when RateControlMode of video codec is set at CRF mode. The range of CRF value is between 0 and 51, where lower values would result in better quality, at the expense of higher file sizes. Higher values mean more compression, but at some point quality degradation will be noticed. Default value is 28. | int |
| frameRate | The frame rate (in frames per second) at which to encode this layer. The value can be in the form of M/N where M and N are integers (For example, 30000/1001), or in the form of a number (For example, 30, or 29.97). The encoder enforces constraints on allowed frame rates based on the profile and level. If it is not specified, the encoder will use the same frame rate as the input video. | string |
| height | The height of the output video for this layer. The value can be absolute (in pixels) or relative (in percentage). For example 50% means the output video has half as many pixels in height as the input. | string |
| label | The alphanumeric label for this layer, which can be used in multiplexing different video and audio layers, or in naming the output file. | string |
| level | We currently support Level up to 6.2. The value can be Auto, or a number that matches the H.265 profile. If not specified, the default is Auto, which lets the encoder choose the Level that is appropriate for this layer. | string |
| maxBitrate | The maximum bitrate (in bits per second), at which the VBV buffer should be assumed to refill. If not specified, defaults to the same value as bitrate. | int |
| profile | We currently support Main. Default is Auto. | 'Auto''Main''Main10' |
| referenceFrames | The number of reference frames to be used when encoding this layer. If not specified, the encoder determines an appropriate number based on the encoder complexity setting. | int |
| slices | The number of slices to be used when encoding this layer. If not specified, default is zero, which means that encoder will use a single slice for each frame. | int |
| width | The width of the output video for this layer. The value can be absolute (in pixels) or relative (in percentage). For example 50% means the output video has half as many pixels in width as the input. | string |


### JpgImage

| Name | Description | Value |
|-|-|-|
| @odata.type | The discriminator for derived types. | '#Microsoft.Media.JpgImage' (required) |
| keyFrameInterval | The distance between two key frames. The value should be non-zero in the range [0.5, 20] seconds, specified in ISO 8601 format. The default is 2 seconds(PT2S). Note that this setting is ignored if VideoSyncMode.Passthrough is set, where the KeyFrameInterval value will follow the input source setting. | string |
| layers | A collection of output JPEG image layers to be produced by the encoder. | JpgLayer[] |
| range | The position relative to transform preset start time in the input video at which to stop generating thumbnails. The value can be in ISO 8601 format (For example, PT5M30S to stop at 5 minutes and 30 seconds from start time), or a frame count (For example, 300 to stop at the 300th frame from the frame at start time. If this value is 1, it means only producing one thumbnail at start time), or a relative value to the stream duration (For example, 50% to stop at half of stream duration from start time). The default value is 100%, which means to stop at the end of the stream. | string |
| spriteColumn | Sets the number of columns used in thumbnail sprite image.  The number of rows are automatically calculated and a VTT file is generated with the coordinate mappings for each thumbnail in the sprite. Note: this value should be a positive integer and a proper value is recommended so that the output image resolution will not go beyond JPEG maximum pixel resolution limit 65535x65535. | int |
| start | The position in the input video from where to start generating thumbnails. The value can be in ISO 8601 format (For example, PT05S to start at 5 seconds), or a frame count (For example, 10 to start at the 10th frame), or a relative value to stream duration (For example, 10% to start at 10% of stream duration). Also supports a macro {Best}, which tells the encoder to select the best thumbnail from the first few seconds of the video and will only produce one thumbnail, no matter what other settings are for Step and Range. The default value is macro {Best}. | string (required) |
| step | The intervals at which thumbnails are generated. The value can be in ISO 8601 format (For example, PT05S for one image every 5 seconds), or a frame count (For example, 30 for one image every 30 frames), or a relative value to stream duration (For example, 10% for one image every 10% of stream duration). Note: Step value will affect the first generated thumbnail, which may not be exactly the one specified at transform preset start time. This is due to the encoder, which tries to select the best thumbnail between start time and Step position from start time as the first output. As the default value is 10%, it means if stream has long duration, the first generated thumbnail might be far away from the one specified at start time. Try to select reasonable value for Step if the first thumbnail is expected close to start time, or set Range value at 1 if only one thumbnail is needed at start time. | string |
| stretchMode | The resizing mode - how the input video will be resized to fit the desired output resolution(s). Default is AutoSize | 'AutoFit''AutoSize''None' |
| syncMode | The Video Sync Mode | 'Auto''Cfr''Passthrough''Vfr' |


### JpgLayer

| Name | Description | Value |
|-|-|-|
| height | The height of the output video for this layer. The value can be absolute (in pixels) or relative (in percentage). For example 50% means the output video has half as many pixels in height as the input. | string |
| label | The alphanumeric label for this layer, which can be used in multiplexing different video and audio layers, or in naming the output file. | string |
| quality | The compression quality of the JPEG output. Range is from 0-100 and the default is 70. | int |
| width | The width of the output video for this layer. The value can be absolute (in pixels) or relative (in percentage). For example 50% means the output video has half as many pixels in width as the input. | string |


### PngImage

| Name | Description | Value |
|-|-|-|
| @odata.type | The discriminator for derived types. | '#Microsoft.Media.PngImage' (required) |
| keyFrameInterval | The distance between two key frames. The value should be non-zero in the range [0.5, 20] seconds, specified in ISO 8601 format. The default is 2 seconds(PT2S). Note that this setting is ignored if VideoSyncMode.Passthrough is set, where the KeyFrameInterval value will follow the input source setting. | string |
| layers | A collection of output PNG image layers to be produced by the encoder. | PngLayer[] |
| range | The position relative to transform preset start time in the input video at which to stop generating thumbnails. The value can be in ISO 8601 format (For example, PT5M30S to stop at 5 minutes and 30 seconds from start time), or a frame count (For example, 300 to stop at the 300th frame from the frame at start time. If this value is 1, it means only producing one thumbnail at start time), or a relative value to the stream duration (For example, 50% to stop at half of stream duration from start time). The default value is 100%, which means to stop at the end of the stream. | string |
| start | The position in the input video from where to start generating thumbnails. The value can be in ISO 8601 format (For example, PT05S to start at 5 seconds), or a frame count (For example, 10 to start at the 10th frame), or a relative value to stream duration (For example, 10% to start at 10% of stream duration). Also supports a macro {Best}, which tells the encoder to select the best thumbnail from the first few seconds of the video and will only produce one thumbnail, no matter what other settings are for Step and Range. The default value is macro {Best}. | string (required) |
| step | The intervals at which thumbnails are generated. The value can be in ISO 8601 format (For example, PT05S for one image every 5 seconds), or a frame count (For example, 30 for one image every 30 frames), or a relative value to stream duration (For example, 10% for one image every 10% of stream duration). Note: Step value will affect the first generated thumbnail, which may not be exactly the one specified at transform preset start time. This is due to the encoder, which tries to select the best thumbnail between start time and Step position from start time as the first output. As the default value is 10%, it means if stream has long duration, the first generated thumbnail might be far away from the one specified at start time. Try to select reasonable value for Step if the first thumbnail is expected close to start time, or set Range value at 1 if only one thumbnail is needed at start time. | string |
| stretchMode | The resizing mode - how the input video will be resized to fit the desired output resolution(s). Default is AutoSize | 'AutoFit''AutoSize''None' |
| syncMode | The Video Sync Mode | 'Auto''Cfr''Passthrough''Vfr' |


### PngLayer

| Name | Description | Value |
|-|-|-|
| height | The height of the output video for this layer. The value can be absolute (in pixels) or relative (in percentage). For example 50% means the output video has half as many pixels in height as the input. | string |
| label | The alphanumeric label for this layer, which can be used in multiplexing different video and audio layers, or in naming the output file. | string |
| width | The width of the output video for this layer. The value can be absolute (in pixels) or relative (in percentage). For example 50% means the output video has half as many pixels in width as the input. | string |


### Filters

| Name | Description | Value |
|-|-|-|
| crop | The parameters for the rectangular window with which to crop the input video. | Rectangle |
| deinterlace | The de-interlacing settings. | Deinterlace |
| overlays | The properties of overlays to be applied to the input video. These could be audio, image or video overlays. | Overlay[] |
| rotation | The rotation, if any, to be applied to the input video, before it is encoded. Default is Auto | 'Auto''None''Rotate0''Rotate180''Rotate270''Rotate90' |


### Rectangle

| Name | Description | Value |
|-|-|-|
| height | The height of the rectangular region in pixels. This can be absolute pixel value (e.g 100), or relative to the size of the video (For example, 50%). | string |
| left | The number of pixels from the left-margin. This can be absolute pixel value (e.g 100), or relative to the size of the video (For example, 50%). | string |
| top | The number of pixels from the top-margin. This can be absolute pixel value (e.g 100), or relative to the size of the video (For example, 50%). | string |
| width | The width of the rectangular region in pixels. This can be absolute pixel value (e.g 100), or relative to the size of the video (For example, 50%). | string |


### Deinterlace

| Name | Description | Value |
|-|-|-|
| mode | The deinterlacing mode. Defaults to AutoPixelAdaptive. | 'AutoPixelAdaptive''Off' |
| parity | The field parity for de-interlacing, defaults to Auto. | 'Auto''BottomFieldFirst''TopFieldFirst' |


### Overlay

| Name | Description | Value |
|-|-|-|
| audioGainLevel | The gain level of audio in the overlay. The value should be in the range [0, 1.0]. The default is 1.0. | int |
| end | The end position, with reference to the input video, at which the overlay ends. The value should be in ISO 8601 format. For example, PT30S to end the overlay at 30 seconds into the input video. If not specified or the value is greater than the input video duration, the overlay will be applied until the end of the input video if the overlay media duration is greater than the input video duration, else the overlay will last as long as the overlay media duration. | string |
| fadeInDuration | The duration over which the overlay fades in onto the input video. The value should be in ISO 8601 duration format. If not specified the default behavior is to have no fade in (same as PT0S). | string |
| fadeOutDuration | The duration over which the overlay fades out of the input video. The value should be in ISO 8601 duration format. If not specified the default behavior is to have no fade out (same as PT0S). | string |
| inputLabel | The label of the job input which is to be used as an overlay. The Input must specify exactly one file. You can specify an image file in JPG, PNG, GIF or BMP format, or an audio file (such as a WAV, MP3, WMA or M4A file), or a video file. Seehttps://aka.ms/mesformatsfor the complete list of supported audio and video file formats. | string (required) |
| start | The start position, with reference to the input video, at which the overlay starts. The value should be in ISO 8601 format. For example, PT05S to start the overlay at 5 seconds into the input video. If not specified the overlay starts from the beginning of the input video. | string |
| @odata.type | Set the object type | #Microsoft.Media.AudioOverlay#Microsoft.Media.VideoOverlay(required) |


### AudioOverlay

| Name | Description | Value |
|-|-|-|
| @odata.type | The discriminator for derived types. | '#Microsoft.Media.AudioOverlay' (required) |


### VideoOverlay

| Name | Description | Value |
|-|-|-|
| @odata.type | The discriminator for derived types. | '#Microsoft.Media.VideoOverlay' (required) |
| cropRectangle | An optional rectangular window used to crop the overlay image or video. | Rectangle |
| opacity | The opacity of the overlay. This is a value in the range [0 - 1.0]. Default is 1.0 which mean the overlay is opaque. | int |
| position | The location in the input video where the overlay is applied. | Rectangle |


### Format

| Name | Description | Value |
|-|-|-|
| filenamePattern | The pattern of the file names for the generated output files. The following macros are supported in the file name: {Basename} - An expansion macro that will use the name of the input video file. If the base name(the file suffix is not included) of the input video file is less than 32 characters long, the base name of input video files will be used. If the length of base name of the input video file exceeds 32 characters, the base name is truncated to the first 32 characters in total length. {Extension} - The appropriate extension for this format. {Label} - The label assigned to the codec/layer. {Index} - A unique index for thumbnails. Only applicable to thumbnails. {Bitrate} - The audio/video bitrate. Not applicable to thumbnails. {Codec} - The type of the audio/video codec. {Resolution} - The video resolution. Any unsubstituted macros will be collapsed and removed from the filename. | string (required) |
| @odata.type | Set the object type | #Microsoft.Media.JpgFormat#Microsoft.Media.Mp4Format#Microsoft.Media.PngFormat#Microsoft.Media.TransportStreamFormat(required) |


### JpgFormat

| Name | Description | Value |
|-|-|-|
| @odata.type | The discriminator for derived types. | '#Microsoft.Media.JpgFormat' (required) |


### Mp4Format

| Name | Description | Value |
|-|-|-|
| @odata.type | The discriminator for derived types. | '#Microsoft.Media.Mp4Format' (required) |
| outputFiles | The list of output files to produce.  Each entry in the list is a set of audio and video layer labels to be muxed together . | OutputFile[] |


### OutputFile

| Name | Description | Value |
|-|-|-|
| labels | The list of labels that describe how the encoder should multiplex video and audio into an output file. For example, if the encoder is producing two video layers with labels v1 and v2, and one audio layer with label a1, then an array like '[v1, a1]' tells the encoder to produce an output file with the video track represented by v1 and the audio track represented by a1. | string[] (required) |


### PngFormat

| Name | Description | Value |
|-|-|-|
| @odata.type | The discriminator for derived types. | '#Microsoft.Media.PngFormat' (required) |


### TransportStreamFormat

| Name | Description | Value |
|-|-|-|
| @odata.type | The discriminator for derived types. | '#Microsoft.Media.TransportStreamFormat' (required) |
| outputFiles | The list of output files to produce.  Each entry in the list is a set of audio and video layer labels to be muxed together . | OutputFile[] |


### VideoAnalyzerPreset

| Name | Description | Value |
|-|-|-|
| @odata.type | The discriminator for derived types. | '#Microsoft.Media.VideoAnalyzerPreset' (required) |
| audioLanguage | The language for the audio payload in the input using the BCP-47 format of 'language tag-region' (e.g: 'en-US').  If you know the language of your content, it is recommended that you specify it. The language must be specified explicitly for AudioAnalysisMode::Basic, since automatic language detection is not included in basic mode. If the language isn't specified or set to null, automatic language detection will choose the first language detected and process with the selected language for the duration of the file. It does not currently support dynamically switching between languages after the first language is detected. The automatic detection works best with audio recordings with clearly discernable speech. If automatic detection fails to find the language, transcription would fallback to 'en-US'." The list of supported languages is available here:https://go.microsoft.com/fwlink/?linkid=2109463 | string |
| experimentalOptions | Dictionary containing key value pairs for parameters not exposed in the preset itself | object |
| insightsToExtract | Defines the type of insights that you want the service to generate. The allowed values are 'AudioInsightsOnly', 'VideoInsightsOnly', and 'AllInsights'. The default is AllInsights. If you set this to AllInsights and the input is audio only, then only audio insights are generated. Similarly if the input is video only, then only video insights are generated. It is recommended that you not use AudioInsightsOnly if you expect some of your inputs to be video only; or use VideoInsightsOnly if you expect some of your inputs to be audio only. Your Jobs in such conditions would error out. | 'AllInsights''AudioInsightsOnly''VideoInsightsOnly' |
| mode | Determines the set of audio analysis operations to be performed. If unspecified, the Standard AudioAnalysisMode would be chosen. | 'Basic''Standard' |


