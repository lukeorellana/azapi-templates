import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface MediaMediaservicesAssetsAssetfiltersProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:assets;

/**
   * The first quality.
   */
readonly firstQuality?: FirstQuality;

/**
   * The presentation time range.
   */
readonly presentationTimeRange?: PresentationTimeRange;

/**
   * The tracks selection conditions.
   */
readonly tracks?: FilterTrackSelection[];

/**
   * The first quality bitrate.
   */
readonly bitrate: number;

/**
   * The absolute end time boundary.
   */
readonly endTimestamp?: number;

/**
   * The indicator of forcing existing of end time stamp.
   */
readonly forceEndTimestamp?: bool;

/**
   * The relative to end right edge.
   */
readonly liveBackoffDuration?: number;

/**
   * The relative to end sliding window.
   */
readonly presentationWindowDuration?: number;

/**
   * The absolute start time boundary.
   */
readonly startTimestamp?: number;

/**
   * The time scale of time stamps.
   */
readonly timescale?: number;

/**
   * The track selections.
   */
readonly trackSelections: FilterTrackPropertyCondition[];

/**
   * The track property condition operation.
   */
readonly operation: 'Equal''NotEqual';

/**
   * The track property type.
   */
readonly property: 'Bitrate''FourCC''Language''Name''Type''Unknown';

/**
   * The track property value.
   */
readonly value: string;
}

/**
 * MediaMediaservicesAssetsAssetfilters resource
 */
export class MediaMediaservicesAssetsAssetfilters extends AzAPIBase {
  constructor(scope: Construct, id: string, props: MediaMediaservicesAssetsAssetfiltersProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Media/mediaServices/assets/assetFilters@2022-08-01";
  }

  protected getResourceBody(props: MediaMediaservicesAssetsAssetfiltersProps): string {
    return JSON.stringify(
        {properties: {firstQuality: {bitrate: "${int}"}, presentationTimeRange: {endTimestamp: "${int}", forceEndTimestamp: "${bool}", liveBackoffDuration: "${int}", presentationWindowDuration: "${int}", startTimestamp: "${int}", timescale: "${int}"}, tracks: [{trackSelections: [{operation: "string", property: "string", value: "string"}]}]}}
    );
  }
}
