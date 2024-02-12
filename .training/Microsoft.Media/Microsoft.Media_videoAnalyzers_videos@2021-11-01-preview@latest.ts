import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface MediaVideoanalyzersVideosProps extends IAzAPIBaseProps {

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
