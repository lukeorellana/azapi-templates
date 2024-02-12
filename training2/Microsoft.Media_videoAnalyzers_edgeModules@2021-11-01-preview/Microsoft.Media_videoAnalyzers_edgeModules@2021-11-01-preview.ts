import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface MediaVideoanalyzersEdgemodulesProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:videoAnalyzers;
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
