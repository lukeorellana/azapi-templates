import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface StreamanalyticsStreamingjobsOutputsProps extends IAzAPIBaseProps {

}

/**
 * StreamanalyticsStreamingjobsOutputs resource
 */
export class StreamanalyticsStreamingjobsOutputs extends AzAPIBase {
  constructor(scope: Construct, id: string, props: StreamanalyticsStreamingjobsOutputsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.StreamAnalytics/streamingjobs/outputs@2021-10-01-preview";
  }

  protected getResourceBody(props: StreamanalyticsStreamingjobsOutputsProps): string {
    return JSON.stringify(
        {properties: {datasource: {type: "string"}, serialization: {type: "string"}, sizeWindow: "${int}", timeWindow: "string", watermarkSettings: {maxWatermarkDifferenceAcrossPartitions: "string", watermarkMode: "string"}}}
    );
  }
}
