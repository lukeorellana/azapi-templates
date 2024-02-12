import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface MediaVideoanalyzersEdgemodulesProps extends IAzAPIBaseProps {

}

/**
 * MediaVideoanalyzersEdgemodules resource
 */
export class MediaVideoanalyzersEdgemodules extends AzAPIBase {
  constructor(scope: Construct, id: string, props: MediaVideoanalyzersEdgemodulesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Media/videoAnalyzers/edgeModules@2021-11-01-preview";
  }

  protected getResourceBody(props: MediaVideoanalyzersEdgemodulesProps): string {
    return JSON.stringify(
        {properties: {}}
    );
  }
}
