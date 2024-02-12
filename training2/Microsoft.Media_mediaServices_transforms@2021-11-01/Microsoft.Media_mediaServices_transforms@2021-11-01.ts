import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface Props extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:mediaServices;

/**
   * An optional verbose description of the Transform.
   */
readonly description?: string;

/**
   * An array of one or more TransformOutputs that the Transform should generate.
   */
readonly outputs: TransformOutput[];

/**
   * A Transform can define more than one outputs. This property defines what the service should do when one output fails - either continue to produce other outputs, or, stop the other outputs. The overall Job state will not reflect failures of outputs that are specified with 'ContinueJob'. The default is 'StopProcessingJob'.
   */
readonly onError?: 'ContinueJob''StopProcessingJob';

/**
   * Preset that describes the operations that will be used to modify, transcode, or extract insights from the source file to generate the output.
   */
readonly preset: Preset;

/**
   * Sets the relative priority of the TransformOutputs within a Transform. This sets the priority that the service uses for processing TransformOutputs. The default priority is Normal.
   */
readonly relativePriority?: 'High''Low''Normal';

/**
   * Set the object type
   */
readonly @odata.type: #Microsoft.Media.BuiltInStandardEncoderPreset#Microsoft.Media.FaceDetectorPreset#Microsoft.Media.StandardEncoderPreset#Microsoft.Media.VideoAnalyzerPreset;

/**
   * The discriminator for derived types.
   */
readonly @odata.type: '#Microsoft.Media.BuiltInStandardEncoderPreset';

/**
   * Optional configuration settings for encoder. Configurations is only supported for ContentAwareEncoding and H265ContentAwareEncoding BuiltInStandardEncoderPreset.
   */
readonly configurations?: PresetConfigurations;

/**
   * The built-in preset to be used for encoding videos.
   */
readonly presetName: 'AACGoodQualityAudio''AdaptiveStreaming''ContentAwareEncoding''ContentAwareEncodingExperimental''CopyAllBitrateNonInterleaved''H264MultipleBitrate1080p''H264MultipleBitrate720p''H264MultipleBitrateSD''H264SingleBitrate1080p''H264SingleBitrate720p''H264SingleBitrateSD''H265AdaptiveStreaming''H265ContentAwareEncoding''H265SingleBitrate1080p''H265SingleBitrate4K''H265SingleBitrate720p';

/**
   * Allows you to configure the encoder settings to control the balance between speed and quality. Example: set Complexity as Speed for faster encoding but less compression efficiency.
   */
readonly complexity?: 'Balanced''Quality''Speed';

/**
   * Sets the interleave mode of the output to control how audio and video are stored in the container format. Example: set InterleavedOutput as NonInterleavedOutput to produce audio-only and video-only outputs in separate MP4 files.
   */
readonly interleaveOutput?: 'InterleavedOutput''NonInterleavedOutput';

/**
   * The key frame interval in seconds. Example: set KeyFrameIntervalInSeconds as 2 to reduce the playback buffering for some players.
   */
readonly keyFrameIntervalInSeconds?: number;

/**
   * The maximum bitrate in bits per second (threshold for the top video layer). Example: set MaxBitrateBps as 6000000 to avoid producing very high bitrate outputs for contents with high complexity.
   */
readonly maxBitrateBps?: number;

/**
   * The maximum height of output video layers. Example: set MaxHeight as 720 to produce output layers up to 720P even if the input is 4K.
   */
readonly maxHeight?: number;

/**
   * The maximum number of output video layers. Example: set MaxLayers as 4 to make sure at most 4 output layers are produced to control the overall cost of the encoding job.
   */
readonly maxLayers?: number;

/**
   * The minimum bitrate in bits per second (threshold for the bottom video layer). Example: set MinBitrateBps as 200000 to have a bottom layer that covers users with low network bandwidth.
   */
readonly minBitrateBps?: number;

/**
   * The minimum height of output video layers. Example: set MinHeight as 360 to avoid output layers of smaller resolutions like 180P.
   */
readonly minHeight?: number;

/**
   * The discriminator for derived types.
   */
readonly @odata.type: '#Microsoft.Media.FaceDetectorPreset';

/**
   * Blur type
   */
readonly blurType?: 'Black''Box''High''Low''Med';

/**
   * Dictionary containing key value pairs for parameters not exposed in the preset itself
   */
readonly experimentalOptions?: object;

/**
   * This mode provides the ability to choose between the following settings: 1) Analyze - For detection only.This mode generates a metadata JSON file marking appearances of faces throughout the video.Where possible, appearances of the same person are assigned the same ID. 2) Combined - Additionally redacts(blurs) detected faces. 3) Redact - This enables a 2-pass process, allowing for selective redaction of a subset of detected faces.It takes in the metadata file from a prior analyze pass, along with the source video, and a user-selected subset of IDs that require redaction.
   */
readonly mode?: 'Analyze''Combined''Redact';

/**
   * Specifies the maximum resolution at which your video is analyzed. The default behavior is "SourceResolution," which will keep the input video at its original resolution when analyzed. Using "StandardDefinition" will resize input videos to standard definition while preserving the appropriate aspect ratio. It will only resize if the video is of higher resolution. For example, a 1920x1080 input would be scaled to 640x360 before processing. Switching to "StandardDefinition" will reduce the time it takes to process high resolution video. It may also reduce the cost of using this component (seehttps://azure.microsoft.com/pricing/details/media-services/#analyticsfor details). However, faces that end up being too small in the resized video may not be detected.
   */
readonly resolution?: 'SourceResolution''StandardDefinition';

/**
   * The discriminator for derived types.
   */
readonly @odata.type: '#Microsoft.Media.StandardEncoderPreset';

/**
   * The list of codecs to be used when encoding the input video.
   */
readonly codecs: Codec[];

/**
   * One or more filtering operations that are applied to the input media before encoding.
   */
readonly filters?: Filters;

/**
   * The list of outputs to be produced by the encoder.
   */
readonly formats: Format[];

/**
   * An optional label for the codec. The label can be used to control muxing behavior.
   */
readonly label?: string;

/**
   * Set the object type
   */
readonly @odata.type: #Microsoft.Media.AacAudio#Microsoft.Media.CopyAudio#Microsoft.Media.CopyVideo#Microsoft.Media.H264Video#Microsoft.Media.H265Video#Microsoft.Media.JpgImage#Microsoft.Media.PngImage;

/**
   * The discriminator for derived types.
   */
readonly @odata.type: '#Microsoft.Media.AacAudio';

/**
   * The bitrate, in bits per second, of the output encoded audio.
   */
readonly bitrate?: number;

/**
   * The number of channels in the audio.
   */
readonly channels?: number;

/**
   * The encoding profile to be used when encoding audio with AAC.
   */
readonly profile?: 'AacLc''HeAacV1''HeAacV2';

/**
   * The sampling rate to use for encoding in hertz.
   */
readonly samplingRate?: number;

/**
   * The discriminator for derived types.
   */
readonly @odata.type: '#Microsoft.Media.CopyAudio';

/**
   * The discriminator for derived types.
   */
readonly @odata.type: '#Microsoft.Media.CopyVideo';

/**
   * The discriminator for derived types.
   */
readonly @odata.type: '#Microsoft.Media.H264Video';

/**
   * Tells the encoder how to choose its encoding settings. The default value is Balanced.
   */
readonly complexity?: 'Balanced''Quality''Speed';

/**
   * The distance between two key frames. The value should be non-zero in the range [0.5, 20] seconds, specified in ISO 8601 format. The default is 2 seconds(PT2S). Note that this setting is ignored if VideoSyncMode.Passthrough is set, where the KeyFrameInterval value will follow the input source setting.
   */
readonly keyFrameInterval?: string;

/**
   * The collection of output H.264 layers to be produced by the encoder.
   */
readonly layers?: H264Layer[];

/**
   * The video rate control mode
   */
readonly rateControlMode?: 'ABR''CBR''CRF';

/**
   * Whether or not the encoder should insert key frames at scene changes. If not specified, the default is false. This flag should be set to true only when the encoder is being configured to produce a single output video.
   */
readonly sceneChangeDetection?: bool;

/**
   * The resizing mode - how the input video will be resized to fit the desired output resolution(s). Default is AutoSize
   */
readonly stretchMode?: 'AutoFit''AutoSize''None';

/**
   * The Video Sync Mode
   */
readonly syncMode?: 'Auto''Cfr''Passthrough''Vfr';

/**
   * Whether or not adaptive B-frames are to be used when encoding this layer. If not specified, the encoder will turn it on whenever the video profile permits its use.
   */
readonly adaptiveBFrame?: bool;

/**
   * The number of B-frames to be used when encoding this layer.  If not specified, the encoder chooses an appropriate number based on the video profile and level.
   */
readonly bFrames?: number;

/**
   * The average bitrate in bits per second at which to encode the input video when generating this layer. This is a required field.
   */
readonly bitrate: number;

/**
   * The VBV buffer window length. The value should be in ISO 8601 format. The value should be in the range [0.1-100] seconds. The default is 5 seconds (for example, PT5S).
   */
readonly bufferWindow?: string;

/**
   * The value of CRF to be used when encoding this layer. This setting takes effect when RateControlMode of video codec is set at CRF mode. The range of CRF value is between 0 and 51, where lower values would result in better quality, at the expense of higher file sizes. Higher values mean more compression, but at some point quality degradation will be noticed. Default value is 23.
   */
readonly crf?: number;

/**
   * The entropy mode to be used for this layer. If not specified, the encoder chooses the mode that is appropriate for the profile and level.
   */
readonly entropyMode?: 'Cabac''Cavlc';

/**
   * The frame rate (in frames per second) at which to encode this layer. The value can be in the form of M/N where M and N are integers (For example, 30000/1001), or in the form of a number (For example, 30, or 29.97). The encoder enforces constraints on allowed frame rates based on the profile and level. If it is not specified, the encoder will use the same frame rate as the input video.
   */
readonly frameRate?: string;

/**
   * The height of the output video for this layer. The value can be absolute (in pixels) or relative (in percentage). For example 50% means the output video has half as many pixels in height as the input.
   */
readonly height?: string;

/**
   * The alphanumeric label for this layer, which can be used in multiplexing different video and audio layers, or in naming the output file.
   */
readonly label?: string;

/**
   * We currently support Level up to 6.2. The value can be Auto, or a number that matches the H.264 profile. If not specified, the default is Auto, which lets the encoder choose the Level that is appropriate for this layer.
   */
readonly level?: string;

/**
   * The maximum bitrate (in bits per second), at which the VBV buffer should be assumed to refill. If not specified, defaults to the same value as bitrate.
   */
readonly maxBitrate?: number;

/**
   * We currently support Baseline, Main, High, High422, High444. Default is Auto.
   */
readonly profile?: 'Auto''Baseline''High''High422''High444''Main';

/**
   * The number of reference frames to be used when encoding this layer. If not specified, the encoder determines an appropriate number based on the encoder complexity setting.
   */
readonly referenceFrames?: number;

/**
   * The number of slices to be used when encoding this layer. If not specified, default is zero, which means that encoder will use a single slice for each frame.
   */
readonly slices?: number;

/**
   * The width of the output video for this layer. The value can be absolute (in pixels) or relative (in percentage). For example 50% means the output video has half as many pixels in width as the input.
   */
readonly width?: string;

/**
   * The discriminator for derived types.
   */
readonly @odata.type: '#Microsoft.Media.H265Video';

/**
   * Tells the encoder how to choose its encoding settings.  Quality will provide for a higher compression ratio but at a higher cost and longer compute time.  Speed will produce a relatively larger file but is faster and more economical. The default value is Balanced.
   */
readonly complexity?: 'Balanced''Quality''Speed';

/**
   * The distance between two key frames. The value should be non-zero in the range [0.5, 20] seconds, specified in ISO 8601 format. The default is 2 seconds(PT2S). Note that this setting is ignored if VideoSyncMode.Passthrough is set, where the KeyFrameInterval value will follow the input source setting.
   */
readonly keyFrameInterval?: string;

/**
   * The collection of output H.265 layers to be produced by the encoder.
   */
readonly layers?: H265Layer[];

/**
   * Specifies whether or not the encoder should insert key frames at scene changes. If not specified, the default is false. This flag should be set to true only when the encoder is being configured to produce a single output video.
   */
readonly sceneChangeDetection?: bool;

/**
   * The resizing mode - how the input video will be resized to fit the desired output resolution(s). Default is AutoSize
   */
readonly stretchMode?: 'AutoFit''AutoSize''None';

/**
   * The Video Sync Mode
   */
readonly syncMode?: 'Auto''Cfr''Passthrough''Vfr';

/**
   * Specifies whether or not adaptive B-frames are to be used when encoding this layer. If not specified, the encoder will turn it on whenever the video profile permits its use.
   */
readonly adaptiveBFrame?: bool;

/**
   * The number of B-frames to be used when encoding this layer.  If not specified, the encoder chooses an appropriate number based on the video profile and level.
   */
readonly bFrames?: number;

/**
   * The average bitrate in bits per second at which to encode the input video when generating this layer. For example: a target bitrate of 3000Kbps or 3Mbps means this value should be 3000000 This is a required field.
   */
readonly bitrate: number;

/**
   * The VBV buffer window length. The value should be in ISO 8601 format. The value should be in the range [0.1-100] seconds. The default is 5 seconds (for example, PT5S).
   */
readonly bufferWindow?: string;

/**
   * The value of CRF to be used when encoding this layer. This setting takes effect when RateControlMode of video codec is set at CRF mode. The range of CRF value is between 0 and 51, where lower values would result in better quality, at the expense of higher file sizes. Higher values mean more compression, but at some point quality degradation will be noticed. Default value is 28.
   */
readonly crf?: number;

/**
   * The frame rate (in frames per second) at which to encode this layer. The value can be in the form of M/N where M and N are integers (For example, 30000/1001), or in the form of a number (For example, 30, or 29.97). The encoder enforces constraints on allowed frame rates based on the profile and level. If it is not specified, the encoder will use the same frame rate as the input video.
   */
readonly frameRate?: string;

/**
   * The height of the output video for this layer. The value can be absolute (in pixels) or relative (in percentage). For example 50% means the output video has half as many pixels in height as the input.
   */
readonly height?: string;

/**
   * The alphanumeric label for this layer, which can be used in multiplexing different video and audio layers, or in naming the output file.
   */
readonly label?: string;

/**
   * We currently support Level up to 6.2. The value can be Auto, or a number that matches the H.265 profile. If not specified, the default is Auto, which lets the encoder choose the Level that is appropriate for this layer.
   */
readonly level?: string;

/**
   * The maximum bitrate (in bits per second), at which the VBV buffer should be assumed to refill. If not specified, defaults to the same value as bitrate.
   */
readonly maxBitrate?: number;

/**
   * We currently support Main. Default is Auto.
   */
readonly profile?: 'Auto''Main''Main10';

/**
   * The number of reference frames to be used when encoding this layer. If not specified, the encoder determines an appropriate number based on the encoder complexity setting.
   */
readonly referenceFrames?: number;

/**
   * The number of slices to be used when encoding this layer. If not specified, default is zero, which means that encoder will use a single slice for each frame.
   */
readonly slices?: number;

/**
   * The width of the output video for this layer. The value can be absolute (in pixels) or relative (in percentage). For example 50% means the output video has half as many pixels in width as the input.
   */
readonly width?: string;

/**
   * The discriminator for derived types.
   */
readonly @odata.type: '#Microsoft.Media.JpgImage';

/**
   * The distance between two key frames. The value should be non-zero in the range [0.5, 20] seconds, specified in ISO 8601 format. The default is 2 seconds(PT2S). Note that this setting is ignored if VideoSyncMode.Passthrough is set, where the KeyFrameInterval value will follow the input source setting.
   */
readonly keyFrameInterval?: string;

/**
   * A collection of output JPEG image layers to be produced by the encoder.
   */
readonly layers?: JpgLayer[];

/**
   * The position relative to transform preset start time in the input video at which to stop generating thumbnails. The value can be in ISO 8601 format (For example, PT5M30S to stop at 5 minutes and 30 seconds from start time), or a frame count (For example, 300 to stop at the 300th frame from the frame at start time. If this value is 1, it means only producing one thumbnail at start time), or a relative value to the stream duration (For example, 50% to stop at half of stream duration from start time). The default value is 100%, which means to stop at the end of the stream.
   */
readonly range?: string;

/**
   * Sets the number of columns used in thumbnail sprite image.  The number of rows are automatically calculated and a VTT file is generated with the coordinate mappings for each thumbnail in the sprite. Note: this value should be a positive integer and a proper value is recommended so that the output image resolution will not go beyond JPEG maximum pixel resolution limit 65535x65535.
   */
readonly spriteColumn?: number;

/**
   * The position in the input video from where to start generating thumbnails. The value can be in ISO 8601 format (For example, PT05S to start at 5 seconds), or a frame count (For example, 10 to start at the 10th frame), or a relative value to stream duration (For example, 10% to start at 10% of stream duration). Also supports a macro {Best}, which tells the encoder to select the best thumbnail from the first few seconds of the video and will only produce one thumbnail, no matter what other settings are for Step and Range. The default value is macro {Best}.
   */
readonly start: string;

/**
   * The intervals at which thumbnails are generated. The value can be in ISO 8601 format (For example, PT05S for one image every 5 seconds), or a frame count (For example, 30 for one image every 30 frames), or a relative value to stream duration (For example, 10% for one image every 10% of stream duration). Note: Step value will affect the first generated thumbnail, which may not be exactly the one specified at transform preset start time. This is due to the encoder, which tries to select the best thumbnail between start time and Step position from start time as the first output. As the default value is 10%, it means if stream has long duration, the first generated thumbnail might be far away from the one specified at start time. Try to select reasonable value for Step if the first thumbnail is expected close to start time, or set Range value at 1 if only one thumbnail is needed at start time.
   */
readonly step?: string;

/**
   * The resizing mode - how the input video will be resized to fit the desired output resolution(s). Default is AutoSize
   */
readonly stretchMode?: 'AutoFit''AutoSize''None';

/**
   * The Video Sync Mode
   */
readonly syncMode?: 'Auto''Cfr''Passthrough''Vfr';

/**
   * The height of the output video for this layer. The value can be absolute (in pixels) or relative (in percentage). For example 50% means the output video has half as many pixels in height as the input.
   */
readonly height?: string;

/**
   * The alphanumeric label for this layer, which can be used in multiplexing different video and audio layers, or in naming the output file.
   */
readonly label?: string;

/**
   * The compression quality of the JPEG output. Range is from 0-100 and the default is 70.
   */
readonly quality?: number;

/**
   * The width of the output video for this layer. The value can be absolute (in pixels) or relative (in percentage). For example 50% means the output video has half as many pixels in width as the input.
   */
readonly width?: string;

/**
   * The discriminator for derived types.
   */
readonly @odata.type: '#Microsoft.Media.PngImage';

/**
   * The distance between two key frames. The value should be non-zero in the range [0.5, 20] seconds, specified in ISO 8601 format. The default is 2 seconds(PT2S). Note that this setting is ignored if VideoSyncMode.Passthrough is set, where the KeyFrameInterval value will follow the input source setting.
   */
readonly keyFrameInterval?: string;

/**
   * A collection of output PNG image layers to be produced by the encoder.
   */
readonly layers?: PngLayer[];

/**
   * The position relative to transform preset start time in the input video at which to stop generating thumbnails. The value can be in ISO 8601 format (For example, PT5M30S to stop at 5 minutes and 30 seconds from start time), or a frame count (For example, 300 to stop at the 300th frame from the frame at start time. If this value is 1, it means only producing one thumbnail at start time), or a relative value to the stream duration (For example, 50% to stop at half of stream duration from start time). The default value is 100%, which means to stop at the end of the stream.
   */
readonly range?: string;

/**
   * The position in the input video from where to start generating thumbnails. The value can be in ISO 8601 format (For example, PT05S to start at 5 seconds), or a frame count (For example, 10 to start at the 10th frame), or a relative value to stream duration (For example, 10% to start at 10% of stream duration). Also supports a macro {Best}, which tells the encoder to select the best thumbnail from the first few seconds of the video and will only produce one thumbnail, no matter what other settings are for Step and Range. The default value is macro {Best}.
   */
readonly start: string;

/**
   * The intervals at which thumbnails are generated. The value can be in ISO 8601 format (For example, PT05S for one image every 5 seconds), or a frame count (For example, 30 for one image every 30 frames), or a relative value to stream duration (For example, 10% for one image every 10% of stream duration). Note: Step value will affect the first generated thumbnail, which may not be exactly the one specified at transform preset start time. This is due to the encoder, which tries to select the best thumbnail between start time and Step position from start time as the first output. As the default value is 10%, it means if stream has long duration, the first generated thumbnail might be far away from the one specified at start time. Try to select reasonable value for Step if the first thumbnail is expected close to start time, or set Range value at 1 if only one thumbnail is needed at start time.
   */
readonly step?: string;

/**
   * The resizing mode - how the input video will be resized to fit the desired output resolution(s). Default is AutoSize
   */
readonly stretchMode?: 'AutoFit''AutoSize''None';

/**
   * The Video Sync Mode
   */
readonly syncMode?: 'Auto''Cfr''Passthrough''Vfr';

/**
   * The height of the output video for this layer. The value can be absolute (in pixels) or relative (in percentage). For example 50% means the output video has half as many pixels in height as the input.
   */
readonly height?: string;

/**
   * The alphanumeric label for this layer, which can be used in multiplexing different video and audio layers, or in naming the output file.
   */
readonly label?: string;

/**
   * The width of the output video for this layer. The value can be absolute (in pixels) or relative (in percentage). For example 50% means the output video has half as many pixels in width as the input.
   */
readonly width?: string;

/**
   * The parameters for the rectangular window with which to crop the input video.
   */
readonly crop?: Rectangle;

/**
   * The de-interlacing settings.
   */
readonly deinterlace?: Denumbererlace;

/**
   * The properties of overlays to be applied to the input video. These could be audio, image or video overlays.
   */
readonly overlays?: Overlay[];

/**
   * The rotation, if any, to be applied to the input video, before it is encoded. Default is Auto
   */
readonly rotation?: 'Auto''None''Rotate0''Rotate180''Rotate270''Rotate90';

/**
   * The height of the rectangular region in pixels. This can be absolute pixel value (e.g 100), or relative to the size of the video (For example, 50%).
   */
readonly height?: string;

/**
   * The number of pixels from the left-margin. This can be absolute pixel value (e.g 100), or relative to the size of the video (For example, 50%).
   */
readonly left?: string;

/**
   * The number of pixels from the top-margin. This can be absolute pixel value (e.g 100), or relative to the size of the video (For example, 50%).
   */
readonly top?: string;

/**
   * The width of the rectangular region in pixels. This can be absolute pixel value (e.g 100), or relative to the size of the video (For example, 50%).
   */
readonly width?: string;

/**
   * The deinterlacing mode. Defaults to AutoPixelAdaptive.
   */
readonly mode?: 'AutoPixelAdaptive''Off';

/**
   * The field parity for de-interlacing, defaults to Auto.
   */
readonly parity?: 'Auto''BottomFieldFirst''TopFieldFirst';

/**
   * The gain level of audio in the overlay. The value should be in the range [0, 1.0]. The default is 1.0.
   */
readonly audioGainLevel?: number;

/**
   * The end position, with reference to the input video, at which the overlay ends. The value should be in ISO 8601 format. For example, PT30S to end the overlay at 30 seconds into the input video. If not specified or the value is greater than the input video duration, the overlay will be applied until the end of the input video if the overlay media duration is greater than the input video duration, else the overlay will last as long as the overlay media duration.
   */
readonly end?: string;

/**
   * The duration over which the overlay fades in onto the input video. The value should be in ISO 8601 duration format. If not specified the default behavior is to have no fade in (same as PT0S).
   */
readonly fadeInDuration?: string;

/**
   * The duration over which the overlay fades out of the input video. The value should be in ISO 8601 duration format. If not specified the default behavior is to have no fade out (same as PT0S).
   */
readonly fadeOutDuration?: string;

/**
   * The label of the job input which is to be used as an overlay. The Input must specify exactly one file. You can specify an image file in JPG, PNG, GIF or BMP format, or an audio file (such as a WAV, MP3, WMA or M4A file), or a video file. Seehttps://aka.ms/mesformatsfor the complete list of supported audio and video file formats.
   */
readonly inputLabel: string;

/**
   * The start position, with reference to the input video, at which the overlay starts. The value should be in ISO 8601 format. For example, PT05S to start the overlay at 5 seconds into the input video. If not specified the overlay starts from the beginning of the input video.
   */
readonly start?: string;

/**
   * Set the object type
   */
readonly @odata.type: #Microsoft.Media.AudioOverlay#Microsoft.Media.VideoOverlay;

/**
   * The discriminator for derived types.
   */
readonly @odata.type: '#Microsoft.Media.AudioOverlay';

/**
   * The discriminator for derived types.
   */
readonly @odata.type: '#Microsoft.Media.VideoOverlay';

/**
   * An optional rectangular window used to crop the overlay image or video.
   */
readonly cropRectangle?: Rectangle;

/**
   * The opacity of the overlay. This is a value in the range [0 - 1.0]. Default is 1.0 which mean the overlay is opaque.
   */
readonly opacity?: number;

/**
   * The location in the input video where the overlay is applied.
   */
readonly position?: Rectangle;

/**
   * The pattern of the file names for the generated output files. The following macros are supported in the file name: {Basename} - An expansion macro that will use the name of the input video file. If the base name(the file suffix is not included) of the input video file is less than 32 characters long, the base name of input video files will be used. If the length of base name of the input video file exceeds 32 characters, the base name is truncated to the first 32 characters in total length. {Extension} - The appropriate extension for this format. {Label} - The label assigned to the codec/layer. {Index} - A unique index for thumbnails. Only applicable to thumbnails. {Bitrate} - The audio/video bitrate. Not applicable to thumbnails. {Codec} - The type of the audio/video codec. {Resolution} - The video resolution. Any unsubstituted macros will be collapsed and removed from the filename.
   */
readonly filenamePattern: string;

/**
   * Set the object type
   */
readonly @odata.type: #Microsoft.Media.JpgFormat#Microsoft.Media.Mp4Format#Microsoft.Media.PngFormat#Microsoft.Media.TransportStreamFormat;

/**
   * The discriminator for derived types.
   */
readonly @odata.type: '#Microsoft.Media.JpgFormat';

/**
   * The discriminator for derived types.
   */
readonly @odata.type: '#Microsoft.Media.Mp4Format';

/**
   * The list of output files to produce.  Each entry in the list is a set of audio and video layer labels to be muxed together .
   */
readonly outputFiles?: OutputFile[];

/**
   * The list of labels that describe how the encoder should multiplex video and audio into an output file. For example, if the encoder is producing two video layers with labels v1 and v2, and one audio layer with label a1, then an array like '[v1, a1]' tells the encoder to produce an output file with the video track represented by v1 and the audio track represented by a1.
   */
readonly labels: string[];

/**
   * The discriminator for derived types.
   */
readonly @odata.type: '#Microsoft.Media.PngFormat';

/**
   * The discriminator for derived types.
   */
readonly @odata.type: '#Microsoft.Media.TransportStreamFormat';

/**
   * The list of output files to produce.  Each entry in the list is a set of audio and video layer labels to be muxed together .
   */
readonly outputFiles?: OutputFile[];

/**
   * The discriminator for derived types.
   */
readonly @odata.type: '#Microsoft.Media.VideoAnalyzerPreset';

/**
   * The language for the audio payload in the input using the BCP-47 format of 'language tag-region' (e.g: 'en-US').  If you know the language of your content, it is recommended that you specify it. The language must be specified explicitly for AudioAnalysisMode::Basic, since automatic language detection is not included in basic mode. If the language isn't specified or set to null, automatic language detection will choose the first language detected and process with the selected language for the duration of the file. It does not currently support dynamically switching between languages after the first language is detected. The automatic detection works best with audio recordings with clearly discernable speech. If automatic detection fails to find the language, transcription would fallback to 'en-US'." The list of supported languages is available here:https://go.microsoft.com/fwlink/?linkid=2109463
   */
readonly audioLanguage?: string;

/**
   * Dictionary containing key value pairs for parameters not exposed in the preset itself
   */
readonly experimentalOptions?: object;

/**
   * Defines the type of insights that you want the service to generate. The allowed values are 'AudioInsightsOnly', 'VideoInsightsOnly', and 'AllInsights'. The default is AllInsights. If you set this to AllInsights and the input is audio only, then only audio insights are generated. Similarly if the input is video only, then only video insights are generated. It is recommended that you not use AudioInsightsOnly if you expect some of your inputs to be video only; or use VideoInsightsOnly if you expect some of your inputs to be audio only. Your Jobs in such conditions would error out.
   */
readonly insightsToExtract?: 'AllInsights''AudioInsightsOnly''VideoInsightsOnly';

/**
   * Determines the set of audio analysis operations to be performed. If unspecified, the Standard AudioAnalysisMode would be chosen.
   */
readonly mode?: 'Basic''Standard';
}

/**
 *  resource
 */
export class  extends AzAPIBase {
  constructor(scope: Construct, id: string, props: Props) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "";
  }

  protected getResourceBody(props: Props): string {
    return JSON.stringify(
        
    );
  }
}
