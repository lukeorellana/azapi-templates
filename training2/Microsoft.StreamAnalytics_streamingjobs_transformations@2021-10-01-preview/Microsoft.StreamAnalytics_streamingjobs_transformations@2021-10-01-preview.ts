import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface StreamanalyticsStreamingjobsTransformationsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:streamingjobs;

/**
   * Specifies the query that will be run in the streaming job. You can learn more about the Stream Analytics Query Language (SAQL) here:https://msdn.microsoft.com/library/azure/dn834998. Required on PUT (CreateOrReplace) requests.
   */
readonly query?: string;

/**
   * Specifies the number of streaming units that the streaming job uses.
   */
readonly streamingUnits?: number;

/**
   * Specifies the valid streaming units a streaming job can scale to.
   */
readonly validStreamingUnits?: number[];
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
