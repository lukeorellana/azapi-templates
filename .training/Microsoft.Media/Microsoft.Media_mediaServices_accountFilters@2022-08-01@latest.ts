import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface MediaMediaservicesAccountfiltersProps extends IAzAPIBaseProps {

}

/**
 * MediaMediaservicesAccountfilters resource
 */
export class MediaMediaservicesAccountfilters extends AzAPIBase {
  constructor(scope: Construct, id: string, props: MediaMediaservicesAccountfiltersProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Media/mediaServices/accountFilters@2022-08-01";
  }

  protected getResourceBody(props: MediaMediaservicesAccountfiltersProps): string {
    return JSON.stringify(
        {properties: {firstQuality: {bitrate: "${int}"}, presentationTimeRange: {endTimestamp: "${int}", forceEndTimestamp: "${bool}", liveBackoffDuration: "${int}", presentationWindowDuration: "${int}", startTimestamp: "${int}", timescale: "${int}"}, tracks: [{trackSelections: [{operation: "string", property: "string", value: "string"}]}]}}
    );
  }
}
