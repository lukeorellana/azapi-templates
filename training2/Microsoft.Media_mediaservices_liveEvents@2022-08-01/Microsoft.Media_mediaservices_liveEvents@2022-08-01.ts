import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface MediaMediaservicesLiveeventsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:mediaservices;

/**
   * Live event cross site access policies.
   */
readonly crossSiteAccessPolicies?: CrossSiteAccessPolicies;

/**
   * A description for the live event.
   */
readonly description?: string;

/**
   * Encoding settings for the live event. It configures whether a live encoder is used for the live event and settings for the live encoder if it is used.
   */
readonly encoding?: LiveEventEncoding;

/**
   * When useStaticHostname is set to true, the hostnamePrefix specifies the first part of the hostname assigned to the live event preview and ingest endpoints. The final hostname would be a combination of this prefix, the media service account name and a short code for the Azure Media Services data center.
   */
readonly hostnamePrefix?: string;

/**
   * Live event input settings. It defines how the live event receives input from a contribution encoder.
   */
readonly input: LiveEventInput;

/**
   * Live event preview settings. Preview allows live event producers to preview the live streaming content without creating any live output.
   */
readonly preview?: LiveEventPreview;

/**
   * The options to use for the LiveEvent. This value is specified at creation time and cannot be updated. The valid values for the array entry values are 'Default' and 'LowLatency'.
   */
readonly streamOptions?: String array containing any of:'Default''LowLatency''LowLatencyV2';

/**
   * Live transcription settings for the live event. Seehttps://go.microsoft.com/fwlink/?linkid=2133742for more information about the live transcription feature.
   */
readonly transcriptions?: LiveEventTranscription[];

/**
   * Specifies whether a static hostname would be assigned to the live event preview and ingest endpoints. This value can only be updated if the live event is in Standby state
   */
readonly useStaticHostname?: bool;

/**
   * The content of clientaccesspolicy.xml used by Silverlight.
   */
readonly clientAccessPolicy?: string;

/**
   * The content of crossdomain.xml used by Silverlight.
   */
readonly crossDomainPolicy?: string;

/**
   * Live event type. When encodingType is set to PassthroughBasic or PassthroughStandard, the service simply passes through the incoming video and audio layer(s) to the output. When encodingType is set to Standard or Premium1080p, a live encoder transcodes the incoming stream into multiple bitrates or layers. Seehttps://go.microsoft.com/fwlink/?linkid=2095101for more information. This property cannot be modified after the live event is created.
   */
readonly encodingType?: 'None''PassthroughBasic''PassthroughStandard''Premium1080p''Standard';

/**
   * Use an ISO 8601 time value between 0.5 to 20 seconds to specify the output fragment length for the video and audio tracks of an encoding live event. For example, use PT2S to indicate 2 seconds. For the video track it also defines the key frame interval, or the length of a GoP (group of pictures).   If this value is not set for an encoding live event, the fragment duration defaults to 2 seconds. The value cannot be set for pass-through live events.
   */
readonly keyFrameInterval?: string;

/**
   * The optional encoding preset name, used when encodingType is not None. This value is specified at creation time and cannot be updated. If the encodingType is set to Standard, then the default preset name is âDefault720pâ. Else if the encodingType is set to Premium1080p, the default preset is âDefault1080pâ.
   */
readonly presetName?: string;

/**
   * Specifies how the input video will be resized to fit the desired output resolution(s). Default is None
   */
readonly stretchMode?: 'AutoFit''AutoSize''None';

/**
   * Access control for live event input.
   */
readonly accessControl?: LiveEventInputAccessControl;

/**
   * A UUID in string form to uniquely identify the stream. This can be specified at creation time but cannot be updated. If omitted, the service will generate a unique value.
   */
readonly accessToken?: string;

/**
   * The input endpoints for the live event.
   */
readonly endpoints?: LiveEventEndponumber[];

/**
   * ISO 8601 time duration of the key frame interval duration of the input. This value sets the EXT-X-TARGETDURATION property in the HLS output. For example, use PT2S to indicate 2 seconds. Leave the value empty for encoding live events.
   */
readonly keyFrameIntervalDuration?: string;

/**
   * The input protocol for the live event. This is specified at creation time and cannot be updated.
   */
readonly streamingProtocol: 'FragmentedMP4''RTMP';

/**
   * The IP access control properties.
   */
readonly ip?: IPAccessControl;

/**
   * The IP allow list.
   */
readonly allow?: IPRange[];

/**
   * The IP address.
   */
readonly address?: string;

/**
   * The subnet mask prefix length (see CIDR notation).
   */
readonly subnetPrefixLength?: number;

/**
   * The endpoint protocol.
   */
readonly protocol?: string;

/**
   * The endpoint URL.
   */
readonly url?: string;

/**
   * The access control for live event preview.
   */
readonly accessControl?: LiveEventPreviewAccessControl;

/**
   * An alternative media identifier associated with the streaming locator created for the preview. This value is specified at creation time and cannot be updated. The identifier can be used in the CustomLicenseAcquisitionUrlTemplate or the CustomKeyAcquisitionUrlTemplate of the StreamingPolicy specified in the StreamingPolicyName field.
   */
readonly alternativeMediaId?: string;

/**
   * The endpoints for preview. Do not share the preview URL with the live event audience.
   */
readonly endpoints?: LiveEventEndponumber[];

/**
   * The identifier of the preview locator in Guid format. Specifying this at creation time allows the caller to know the preview locator url before the event is created. If omitted, the service will generate a random identifier. This value cannot be updated once the live event is created.
   */
readonly previewLocator?: string;

/**
   * The name of streaming policy used for the live event preview. This value is specified at creation time and cannot be updated.
   */
readonly streamingPolicyName?: string;

/**
   * The IP access control properties.
   */
readonly ip?: IPAccessControl;

/**
   * Provides a mechanism to select the audio track in the input live feed, to which speech-to-text transcription is applied. This property is reserved for future use, any value set on this property will be ignored.
   */
readonly inputTrackSelection?: LiveEventInputTrackSelection[];

/**
   * Specifies the language (locale) to be used for speech-to-text transcription â it should match the spoken language in the audio track. The value should be in BCP-47 format (e.g: 'en-US'). Seehttps://go.microsoft.com/fwlink/?linkid=2133742for more information about the live transcription feature and the list of supported languages.
   */
readonly language?: string;

/**
   * Describes a transcription track in the output of a live event, generated using speech-to-text transcription. This property is reserved for future use, any value set on this property will be ignored.
   */
readonly outputTranscriptionTrack?: LiveEventOutputTranscriptionTrack;

/**
   * Comparing operation. This property is reserved for future use, any value set on this property will be ignored.
   */
readonly operation?: string;

/**
   * Property name to select. This property is reserved for future use, any value set on this property will be ignored.
   */
readonly property?: string;

/**
   * Property value to select. This property is reserved for future use, any value set on this property will be ignored.
   */
readonly value?: string;

/**
   * The output track name. This property is reserved for future use, any value set on this property will be ignored.
   */
readonly trackName: string;
}

/**
 * MediaMediaservicesLiveevents resource
 */
export class MediaMediaservicesLiveevents extends AzAPIBase {
  constructor(scope: Construct, id: string, props: MediaMediaservicesLiveeventsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Media/mediaservices/liveEvents@2022-08-01";
  }

  protected getResourceBody(props: MediaMediaservicesLiveeventsProps): string {
    return JSON.stringify(
        {properties: {crossSiteAccessPolicies: {clientAccessPolicy: "string", crossDomainPolicy: "string"}, description: "string", encoding: {encodingType: "string", keyFrameInterval: "string", presetName: "string", stretchMode: "string"}, hostnamePrefix: "string", input: {accessControl: {ip: {allow: [{address: "string", name: "string", subnetPrefixLength: "${int}"}]}}, accessToken: "string", endpoints: [{protocol: "string", url: "string"}], keyFrameIntervalDuration: "string", streamingProtocol: "string"}, preview: {accessControl: {ip: {allow: [{address: "string", name: "string", subnetPrefixLength: "${int}"}]}}, alternativeMediaId: "string", endpoints: [{protocol: "string", url: "string"}], previewLocator: "string", streamingPolicyName: "string"}, streamOptions: ["string"], transcriptions: [{inputTrackSelection: [{operation: "string", property: "string", value: "string"}], language: "string", outputTranscriptionTrack: {trackName: "string"}}], useStaticHostname: "${bool}"}}
    );
  }
}
