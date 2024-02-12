import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface MediaVideoanalyzersVideosProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:videoAnalyzers;

/**
   * Video archival properties.
   */
readonly archival?: VideoArchival;

/**
   * Optional video description provided by the user. Value can be up to 2048 characters long.
   */
readonly description?: string;

/**
   * Contains information about the video and audio content.
   */
readonly mediaInfo?: VideoMediaInfo;

/**
   * Optional video title provided by the user. Value can be up to 256 characters long.
   */
readonly title?: string;

/**
   * Video retention period indicates the maximum age of the video archive segments which are intended to be kept in storage. It must be provided in the ISO8601 duration format in the granularity of days, up to a maximum of 10 years. For example, if this is set to P30D (30 days), content older than 30 days will be periodically deleted. This value can be updated at any time and the new desired retention period will be effective within 24 hours.
   */
readonly retentionPeriod?: string;

/**
   * Video segment length indicates the length of individual video files (segments) which are persisted to storage. Smaller segments provide lower archive playback latency but generate larger volume of storage transactions. Larger segments reduce the amount of storage transactions while increasing the archive playback latency. Value must be specified in ISO8601 duration format (i.e. "PT30S" equals 30 seconds) and can vary between 30 seconds to 5 minutes, in 30 seconds increments.
   */
readonly segmentLength?: string;
}

/**
 * MediaVideoanalyzersVideos resource
 */
export class MediaVideoanalyzersVideos extends AzAPIBase {
  constructor(scope: Construct, id: string, props: MediaVideoanalyzersVideosProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Media/videoAnalyzers/videos@2021-11-01-preview";
  }

  protected getResourceBody(props: MediaVideoanalyzersVideosProps): string {
    return JSON.stringify(
        {properties: {archival: {retentionPeriod: "string"}, description: "string", mediaInfo: {segmentLength: "string"}, title: "string"}}
    );
  }
}
