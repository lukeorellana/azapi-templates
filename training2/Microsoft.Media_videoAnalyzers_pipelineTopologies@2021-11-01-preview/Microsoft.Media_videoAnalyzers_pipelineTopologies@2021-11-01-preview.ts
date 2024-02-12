import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface Props extends IAzAPIBaseProps {
/**
   * Describes the properties of a SKU.
   */
readonly sku: Sku;

/**
   * Topology kind.
   */
readonly kind: 'Batch''Live';

/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:videoAnalyzers;

/**
   * An optional description of the pipeline topology. It is recommended that the expected use of the topology to be described here.
   */
readonly description?: string;

/**
   * List of the topology parameter declarations. Parameters declared here can be referenced throughout the topology nodes through the use of "${PARAMETER_NAME}" string pattern. Parameters can have optional default values and can later be defined in individual instances of the pipeline.
   */
readonly parameters?: ParameterDeclaration[];

/**
   * List of the topology processor nodes. Processor nodes enable pipeline data to be analyzed, processed or transformed.
   */
readonly processors?: ProcessorNodeBase[];

/**
   * List of the topology sink nodes. Sink nodes allow pipeline data to be stored or exported.
   */
readonly sinks: SinkNodeBase[];

/**
   * List of the topology source nodes. Source nodes enable external data to be ingested by the pipeline.
   */
readonly sources: SourceNodeBase[];

/**
   * The default value for the parameter to be used if the pipeline does not specify a value.
   */
readonly default?: string;

/**
   * Description of the parameter.
   */
readonly description?: string;

/**
   * Type of the parameter.
   */
readonly type: 'Bool''Double''Int''SecretString''String';

/**
   * An array of upstream node references within the topology to be used as inputs for this node.
   */
readonly inputs: NodeInput[];

/**
   * Set the object type
   */
readonly @type: #Microsoft.VideoAnalyzer.EncoderProcessor;

/**
   * The name of the upstream node in the pipeline which output is used as input of the current node.
   */
readonly nodeName: string;

/**
   * The discriminator for derived types.
   */
readonly @type: '#Microsoft.VideoAnalyzer.EncoderProcessor';

/**
   * The encoder preset, which defines the recipe or instructions on how the input content should be processed.
   */
readonly preset: EncoderPresetBase;

/**
   * Set the object type
   */
readonly @type: #Microsoft.VideoAnalyzer.EncoderCustomPreset#Microsoft.VideoAnalyzer.EncoderSystemPreset;

/**
   * The discriminator for derived types.
   */
readonly @type: '#Microsoft.VideoAnalyzer.EncoderCustomPreset';

/**
   * Describes a custom preset for encoding audio.
   */
readonly audioEncoder?: AudioEncoderBase;

/**
   * Describes a custom preset for encoding video.
   */
readonly videoEncoder?: VideoEncoderBase;

/**
   * Bitrate, in kilobits per second or Kbps, at which audio should be encoded (2-channel stereo audio at a sampling rate of 48 kHz). Allowed values are 96, 112, 128, 160, 192, 224, and 256. If omitted, the bitrate of the input audio is used.
   */
readonly bitrateKbps?: string;

/**
   * Set the object type
   */
readonly @type: #Microsoft.VideoAnalyzer.AudioEncoderAac;

/**
   * The discriminator for derived types.
   */
readonly @type: '#Microsoft.VideoAnalyzer.AudioEncoderAac';

/**
   * The maximum bitrate, in kilobits per second or Kbps, at which video should be encoded. If omitted, encoder sets it automatically to try and match the quality of the input video.
   */
readonly bitrateKbps?: string;

/**
   * The frame rate (in frames per second) of the encoded video. The value must be greater than zero, and less than or equal to 300. If omitted, the encoder uses the average frame rate of the input video.
   */
readonly frameRate?: string;

/**
   * Describes the resolution of the encoded video. If omitted, the encoder uses the resolution of the input video.
   */
readonly scale?: VideoScale;

/**
   * Set the object type
   */
readonly @type: #Microsoft.VideoAnalyzer.VideoEncoderH264;

/**
   * The desired output video height.
   */
readonly height?: string;

/**
   * Describes the video scaling mode to be applied. Default mode is 'Pad'. If the mode is 'Pad' or 'Stretch' then both width and height must be specified. Else if the mode is 'PreserveAspectRatio' then only one of width or height need be provided.
   */
readonly mode?: 'Pad''PreserveAspectRatio''Stretch';

/**
   * The desired output video width.
   */
readonly width?: string;

/**
   * The discriminator for derived types.
   */
readonly @type: '#Microsoft.VideoAnalyzer.VideoEncoderH264';

/**
   * The discriminator for derived types.
   */
readonly @type: '#Microsoft.VideoAnalyzer.EncoderSystemPreset';

/**
   * An array of upstream node references within the topology to be used as inputs for this node.
   */
readonly inputs: NodeInput[];

/**
   * Set the object type
   */
readonly @type: #Microsoft.VideoAnalyzer.VideoSink;

/**
   * The discriminator for derived types.
   */
readonly @type: '#Microsoft.VideoAnalyzer.VideoSink';

/**
   * Optional video properties to be used in case a new video resource needs to be created on the service.
   */
readonly videoCreationProperties?: VideoCreationProperties;

/**
   * Name of a new or existing video resource used to capture and publish content. Note: if downstream of RTSP source, and if disableArchive is set to true, then no content is archived.
   */
readonly videoName: string;

/**
   * Options to change how the video sink publishes content via the video resource. This property is only allowed for topologies where "kind" is set to "live".
   */
readonly videoPublishingOptions?: VideoPublishingOptions;

/**
   * Optional description provided by the user. Value can be up to 2048 characters long.
   */
readonly description?: string;

/**
   * Video retention period indicates how long the video is kept in storage. Value must be specified in ISO8601 duration format (i.e. "P1D" equals 1 day) and can vary between 1 day to 10 years, in 1 day increments. When absent (null), all video content is retained indefinitely. This property is only allowed for topologies where "kind" is set to "live".
   */
readonly retentionPeriod?: string;

/**
   * Segment length indicates the length of individual content files (segments) which are persisted to storage. Smaller segments provide lower archive playback latency but generate larger volume of storage transactions. Larger segments reduce the amount of storage transactions while increasing the archive playback latency. Value must be specified in ISO8601 duration format (i.e. "PT30S" equals 30 seconds) and can vary between 30 seconds to 5 minutes, in 30 seconds increments. Changing this value after the initial call to create the video resource can lead to errors when uploading content to the archive. Default value is 30 seconds. This property is only allowed for topologies where "kind" is set to "live".
   */
readonly segmentLength?: string;

/**
   * Optional title provided by the user. Value can be up to 256 characters long.
   */
readonly title?: string;

/**
   * When set to 'true' content will not be archived or recorded. This is used, for example, when the topology is used only for low latency video streaming. Default is 'false'.  If set to 'true', then "disableRtspPublishing" must be set to 'false'.
   */
readonly disableArchive?: string;

/**
   * When set to 'true' the RTSP playback URL will not be published, disabling low latency streaming. This is used, for example, when the topology is used only for archiving content. Default is 'false'.  If set to 'true', then "disableArchive" must be set to 'false'.
   */
readonly disableRtspPublishing?: string;

/**
   * Set the object type
   */
readonly @type: #Microsoft.VideoAnalyzer.RtspSource#Microsoft.VideoAnalyzer.VideoSource;

/**
   * The discriminator for derived types.
   */
readonly @type: '#Microsoft.VideoAnalyzer.RtspSource';

/**
   * RTSP endpoint information for Video Analyzer to connect to. This contains the required information for Video Analyzer to connect to RTSP cameras and/or generic RTSP servers.
   */
readonly endpoint: EndponumberBase;

/**
   * Network transport utilized by the RTSP and RTP exchange: TCP or HTTP. When using TCP, the RTP packets are interleaved on the TCP RTSP connection. When using HTTP, the RTSP messages are exchanged through long lived HTTP connections, and the RTP packages are interleaved in the HTTP connections alongside the RTSP messages.
   */
readonly transport?: 'Http''Tcp';

/**
   * Credentials to be presented to the endpoint.
   */
readonly credentials: CredentialsBase;

/**
   * Describes the tunnel through which Video Analyzer can connect to the endpoint URL. This is an optional property, typically used when the endpoint is behind a firewall.
   */
readonly tunnel?: TunnelBase;

/**
   * The endpoint URL for Video Analyzer to connect to.
   */
readonly url: string;

/**
   * Set the object type
   */
readonly @type: #Microsoft.VideoAnalyzer.TlsEndponumber#Microsoft.VideoAnalyzer.UnsecuredEndponumber;

/**
   * Set the object type
   */
readonly @type: #Microsoft.VideoAnalyzer.UsernamePasswordCredentials;

/**
   * The discriminator for derived types.
   */
readonly @type: '#Microsoft.VideoAnalyzer.UsernamePasswordCredentials';

/**
   * Password to be presented as part of the credentials. It is recommended that this value is parameterized as a secret string in order to prevent this value to be returned as part of the resource on API requests.
   */
readonly password: string;

/**
   * Username to be presented as part of the credentials.
   */
readonly username: string;

/**
   * Set the object type
   */
readonly @type: #Microsoft.VideoAnalyzer.SecureIotDeviceRemoteTunnel;

/**
   * The discriminator for derived types.
   */
readonly @type: '#Microsoft.VideoAnalyzer.SecureIotDeviceRemoteTunnel';

/**
   * The IoT device id to use when establishing the remote tunnel. This string is case-sensitive.
   */
readonly deviceId: string;

/**
   * Name of the IoT Hub.
   */
readonly iotHubName: string;

/**
   * The discriminator for derived types.
   */
readonly @type: '#Microsoft.VideoAnalyzer.TlsEndponumber';

/**
   * List of trusted certificate authorities when authenticating a TLS connection. A null list designates that Azure Video Analyzer's list of trusted authorities should be used.
   */
readonly trustedCertificates?: CertificateSource;

/**
   * Validation options to use when authenticating a TLS connection. By default, strict validation is used.
   */
readonly validationOptions?: TlsValidationOptions;

/**
   * Set the object type
   */
readonly @type: #Microsoft.VideoAnalyzer.PemCertificateList;

/**
   * The discriminator for derived types.
   */
readonly @type: '#Microsoft.VideoAnalyzer.PemCertificateList';

/**
   * PEM formatted public certificates. One certificate per entry.
   */
readonly certificates: string[];

/**
   * When set to 'true' causes the certificate subject name validation to be skipped. Default is 'false'.
   */
readonly ignoreHostname?: string;

/**
   * When set to 'true' causes the certificate chain trust validation to be skipped. Default is 'false'.
   */
readonly ignoreSignature?: string;

/**
   * The discriminator for derived types.
   */
readonly @type: '#Microsoft.VideoAnalyzer.UnsecuredEndponumber';

/**
   * The discriminator for derived types.
   */
readonly @type: '#Microsoft.VideoAnalyzer.VideoSource';

/**
   * Describes a sequence of datetime ranges. The video source only picks up recorded media within these ranges.
   */
readonly timeSequences: TimeSequenceBase;

/**
   * Name of the Video Analyzer video resource to be used as the source.
   */
readonly videoName: string;

/**
   * Set the object type
   */
readonly @type: #Microsoft.VideoAnalyzer.VideoSequenceAbsoluteTimeMarkers;

/**
   * The discriminator for derived types.
   */
readonly @type: '#Microsoft.VideoAnalyzer.VideoSequenceAbsoluteTimeMarkers';

/**
   * The sequence of datetime ranges. Example: '[["2021-10-05T03:30:00Z", "2021-10-05T03:40:00Z"]]'.
   */
readonly ranges: string;
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
