import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface MediaMediaservicesAssetsAssetfiltersProps extends IAzAPIBaseProps {

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
