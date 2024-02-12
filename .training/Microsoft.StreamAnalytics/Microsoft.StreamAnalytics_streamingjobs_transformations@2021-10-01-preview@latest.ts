import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface StreamanalyticsStreamingjobsTransformationsProps extends IAzAPIBaseProps {

}

/**
 * StreamanalyticsStreamingjobsTransformations resource
 */
export class StreamanalyticsStreamingjobsTransformations extends AzAPIBase {
  constructor(scope: Construct, id: string, props: StreamanalyticsStreamingjobsTransformationsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.StreamAnalytics/streamingjobs/transformations@2021-10-01-preview";
  }

  protected getResourceBody(props: StreamanalyticsStreamingjobsTransformationsProps): string {
    return JSON.stringify(
        {properties: {query: "string", streamingUnits: "${int}", validStreamingUnits: ["${int}"]}}
    );
  }
}
