import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface MediaMediaservicesLiveeventsLiveoutputsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:liveEvents;

/**
   * ISO 8601 time between 1 minute to 25 hours to indicate the maximum content length that can be archived in the asset for this live output. This also sets the maximum content length for the rewind window. For example, use PT1H30M to indicate 1 hour and 30 minutes of archive window.
   */
readonly archiveWindowLength: string;

/**
   * The asset that the live output will write to.
   */
readonly assetName: string;

/**
   * The description of the live output.
   */
readonly description?: string;

/**
   * HTTP Live Streaming (HLS) packing setting for the live output.
   */
readonly hls?: Hls;

/**
   * The manifest file name. If not provided, the service will generate one automatically.
   */
readonly manifestName?: string;

/**
   * The initial timestamp that the live output will start at, any content before this value will not be archived.
   */
readonly outputSnapTime?: number;

/**
   * ISO 8601 time between 1 minute to the duration of archiveWindowLength to control seek-able window length during Live. The service won't use this property once LiveOutput stops. The archived VOD will have full content with original ArchiveWindowLength. For example, use PT1H30M to indicate 1 hour and 30 minutes of rewind window length. Service will use implicit default value 30m only if Live Event enables LL.
   */
readonly rewindWindowLength?: string;

/**
   * The number of fragments in an HTTP Live Streaming (HLS) TS segment in the output of the live event. This value does not affect the packing ratio for HLS CMAF output.
   */
readonly fragmentsPerTsSegment?: number;
}

/**
 * MediaMediaservicesLiveeventsLiveoutputs resource
 */
export class MediaMediaservicesLiveeventsLiveoutputs extends AzAPIBase {
  constructor(scope: Construct, id: string, props: MediaMediaservicesLiveeventsLiveoutputsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Media/mediaservices/liveEvents/liveOutputs@2022-08-01";
  }

  protected getResourceBody(props: MediaMediaservicesLiveeventsLiveoutputsProps): string {
    return JSON.stringify(
        {properties: {archiveWindowLength: "string", assetName: "string", description: "string", hls: {fragmentsPerTsSegment: "${int}"}, manifestName: "string", outputSnapTime: "${int}", rewindWindowLength: "string"}}
    );
  }
}
