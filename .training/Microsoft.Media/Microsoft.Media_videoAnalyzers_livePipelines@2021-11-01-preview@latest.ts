import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface MediaVideoanalyzersLivepipelinesProps extends IAzAPIBaseProps {

}

/**
 * MediaVideoanalyzersLivepipelines resource
 */
export class MediaVideoanalyzersLivepipelines extends AzAPIBase {
  constructor(scope: Construct, id: string, props: MediaVideoanalyzersLivepipelinesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Media/videoAnalyzers/livePipelines@2021-11-01-preview";
  }

  protected getResourceBody(props: MediaVideoanalyzersLivepipelinesProps): string {
    return JSON.stringify(
        {properties: {bitrateKbps: "${int}", description: "string", parameters: [{name: "string", value: "string"}], topologyName: "string"}}
    );
  }
}
