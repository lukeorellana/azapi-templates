import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface MediaMediaservicesStreamingpoliciesProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:mediaServices;

/**
   * Configuration of CommonEncryptionCbcs
   */
readonly commonEncryptionCbcs?: CommonEncryptionCbcs;

/**
   * Configuration of CommonEncryptionCenc
   */
readonly commonEncryptionCenc?: CommonEncryptionCenc;

/**
   * Default ContentKey used by current Streaming Policy
   */
readonly defaultContentKeyPolicyName?: string;

/**
   * Configuration of EnvelopeEncryption
   */
readonly envelopeEncryption?: EnvelopeEncryption;

/**
   * Configurations of NoEncryption
   */
readonly noEncryption?: NoEncryption;

/**
   * Optional configuration supporting ClearKey in CommonEncryptionCbcs encryption scheme.
   */
readonly clearKeyEncryptionConfiguration?: ClearKeyEncryptionConfiguration;

/**
   * Representing which tracks should not be encrypted
   */
readonly clearTracks?: TrackSelection[];

/**
   * Representing default content key for each encryption scheme and separate content keys for specific tracks
   */
readonly contentKeys?: StreamingPolicyContentKeys;

/**
   * Configuration of DRMs for current encryption scheme
   */
readonly drm?: CbcsDrmConfiguration;

/**
   * Representing supported protocols
   */
readonly enabledProtocols?: EnabledProtocols;

/**
   * Template for the URL of the custom service delivering content keys to end user players. Not required when using Azure Media Services for issuing licenses. The template supports replaceable tokens that the service will update at runtime with the value specific to the request.  The currently supported token value is {AlternativeMediaId}, which is replaced with the value of StreamingLocatorId.AlternativeMediaId.
   */
readonly customKeysAcquisitionUrlTemplate?: string;

/**
   * TrackSelections is a track property condition list which can specify track(s)
   */
readonly trackSelections?: TrackPropertyCondition[];

/**
   * Track property condition operation
   */
readonly operation: 'Equal''Unknown';

/**
   * Track property type
   */
readonly property: 'FourCC''Unknown';

/**
   * Track property value
   */
readonly value?: string;

/**
   * Default content key for an encryption scheme
   */
readonly defaultKey?: DefaultKey;

/**
   * Representing tracks needs separate content key
   */
readonly keyToTrackMappings?: StreamingPolicyContentKey[];

/**
   * Label can be used to specify Content Key when creating a Streaming Locator
   */
readonly label?: string;

/**
   * Policy used by Default Key
   */
readonly policyName?: string;

/**
   * Label can be used to specify Content Key when creating a Streaming Locator
   */
readonly label?: string;

/**
   * Policy used by Content Key
   */
readonly policyName?: string;

/**
   * Tracks which use this content key
   */
readonly tracks?: TrackSelection[];

/**
   * FairPlay configurations
   */
readonly fairPlay?: StreamingPolicyFairPlayConfiguration;

/**
   * PlayReady configurations
   */
readonly playReady?: StreamingPolicyPlayReadyConfiguration;

/**
   * Widevine configurations
   */
readonly widevine?: StreamingPolicyWidevineConfiguration;

/**
   * All license to be persistent or not
   */
readonly allowPersistentLicense: bool;

/**
   * Template for the URL of the custom service delivering licenses to end user players.  Not required when using Azure Media Services for issuing licenses.  The template supports replaceable tokens that the service will update at runtime with the value specific to the request.  The currently supported token values are {AlternativeMediaId}, which is replaced with the value of StreamingLocatorId.AlternativeMediaId, and {ContentKeyId}, which is replaced with the value of identifier of the key being requested.
   */
readonly customLicenseAcquisitionUrlTemplate?: string;

/**
   * Template for the URL of the custom service delivering licenses to end user players.  Not required when using Azure Media Services for issuing licenses.  The template supports replaceable tokens that the service will update at runtime with the value specific to the request.  The currently supported token values are {AlternativeMediaId}, which is replaced with the value of StreamingLocatorId.AlternativeMediaId, and {ContentKeyId}, which is replaced with the value of identifier of the key being requested.
   */
readonly customLicenseAcquisitionUrlTemplate?: string;

/**
   * Custom attributes for PlayReady
   */
readonly playReadyCustomAttributes?: string;

/**
   * Template for the URL of the custom service delivering licenses to end user players.  Not required when using Azure Media Services for issuing licenses.  The template supports replaceable tokens that the service will update at runtime with the value specific to the request.  The currently supported token values are {AlternativeMediaId}, which is replaced with the value of StreamingLocatorId.AlternativeMediaId, and {ContentKeyId}, which is replaced with the value of identifier of the key being requested.
   */
readonly customLicenseAcquisitionUrlTemplate?: string;

/**
   * Enable DASH protocol or not
   */
readonly dash: bool;

/**
   * Enable Download protocol or not
   */
readonly download: bool;

/**
   * Enable HLS protocol or not
   */
readonly hls: bool;

/**
   * Enable SmoothStreaming protocol or not
   */
readonly smoothStreaming: bool;

/**
   * Optional configuration supporting ClearKey in CommonEncryptionCenc encryption scheme.
   */
readonly clearKeyEncryptionConfiguration?: ClearKeyEncryptionConfiguration;

/**
   * Representing which tracks should not be encrypted
   */
readonly clearTracks?: TrackSelection[];

/**
   * Representing default content key for each encryption scheme and separate content keys for specific tracks
   */
readonly contentKeys?: StreamingPolicyContentKeys;

/**
   * Configuration of DRMs for CommonEncryptionCenc encryption scheme
   */
readonly drm?: CencDrmConfiguration;

/**
   * Representing supported protocols
   */
readonly enabledProtocols?: EnabledProtocols;

/**
   * PlayReady configurations
   */
readonly playReady?: StreamingPolicyPlayReadyConfiguration;

/**
   * Widevine configurations
   */
readonly widevine?: StreamingPolicyWidevineConfiguration;

/**
   * Representing which tracks should not be encrypted
   */
readonly clearTracks?: TrackSelection[];

/**
   * Representing default content key for each encryption scheme and separate content keys for specific tracks
   */
readonly contentKeys?: StreamingPolicyContentKeys;

/**
   * Template for the URL of the custom service delivering keys to end user players.  Not required when using Azure Media Services for issuing keys.  The template supports replaceable tokens that the service will update at runtime with the value specific to the request.  The currently supported token values are {AlternativeMediaId}, which is replaced with the value of StreamingLocatorId.AlternativeMediaId, and {ContentKeyId}, which is replaced with the value of identifier of the key being requested.
   */
readonly customKeyAcquisitionUrlTemplate?: string;

/**
   * Representing supported protocols
   */
readonly enabledProtocols?: EnabledProtocols;

/**
   * Representing supported protocols
   */
readonly enabledProtocols?: EnabledProtocols;
}

/**
 * MediaMediaservicesStreamingpolicies resource
 */
export class MediaMediaservicesStreamingpolicies extends AzAPIBase {
  constructor(scope: Construct, id: string, props: MediaMediaservicesStreamingpoliciesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Media/mediaServices/streamingPolicies@2022-08-01";
  }

  protected getResourceBody(props: MediaMediaservicesStreamingpoliciesProps): string {
    return JSON.stringify(
        {properties: {commonEncryptionCbcs: {clearKeyEncryptionConfiguration: {customKeysAcquisitionUrlTemplate: "string"}, clearTracks: [{trackSelections: [{operation: "string", property: "string", value: "string"}]}], contentKeys: {defaultKey: {label: "string", policyName: "string"}, keyToTrackMappings: [{label: "string", policyName: "string", tracks: [{trackSelections: [{operation: "string", property: "string", value: "string"}]}]}]}, drm: {fairPlay: {allowPersistentLicense: "${bool}", customLicenseAcquisitionUrlTemplate: "string"}, playReady: {customLicenseAcquisitionUrlTemplate: "string", playReadyCustomAttributes: "string"}, widevine: {customLicenseAcquisitionUrlTemplate: "string"}}, enabledProtocols: {dash: "${bool}", download: "${bool}", hls: "${bool}", smoothStreaming: "${bool}"}}, commonEncryptionCenc: {clearKeyEncryptionConfiguration: {customKeysAcquisitionUrlTemplate: "string"}, clearTracks: [{trackSelections: [{operation: "string", property: "string", value: "string"}]}], contentKeys: {defaultKey: {label: "string", policyName: "string"}, keyToTrackMappings: [{label: "string", policyName: "string", tracks: [{trackSelections: [{operation: "string", property: "string", value: "string"}]}]}]}, drm: {playReady: {customLicenseAcquisitionUrlTemplate: "string", playReadyCustomAttributes: "string"}, widevine: {customLicenseAcquisitionUrlTemplate: "string"}}, enabledProtocols: {dash: "${bool}", download: "${bool}", hls: "${bool}", smoothStreaming: "${bool}"}}, defaultContentKeyPolicyName: "string", envelopeEncryption: {clearTracks: [{trackSelections: [{operation: "string", property: "string", value: "string"}]}], contentKeys: {defaultKey: {label: "string", policyName: "string"}, keyToTrackMappings: [{label: "string", policyName: "string", tracks: [{trackSelections: [{operation: "string", property: "string", value: "string"}]}]}]}, customKeyAcquisitionUrlTemplate: "string", enabledProtocols: {dash: "${bool}", download: "${bool}", hls: "${bool}", smoothStreaming: "${bool}"}}, noEncryption: {enabledProtocols: {dash: "${bool}", download: "${bool}", hls: "${bool}", smoothStreaming: "${bool}"}}}}
    );
  }
}
