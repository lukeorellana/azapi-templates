import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface MediaMediaservicesLiveeventsLiveoutputsProps extends IAzAPIBaseProps {

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
