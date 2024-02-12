import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface MediaMediaservicesStreamingpoliciesProps extends IAzAPIBaseProps {

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
