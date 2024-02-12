import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface MediaMediaservicesLiveeventsProps extends IAzAPIBaseProps {

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
