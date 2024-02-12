import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface StreamanalyticsStreamingjobsInputsProps extends IAzAPIBaseProps {

}

/**
 * StreamanalyticsStreamingjobsInputs resource
 */
export class StreamanalyticsStreamingjobsInputs extends AzAPIBase {
  constructor(scope: Construct, id: string, props: StreamanalyticsStreamingjobsInputsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.StreamAnalytics/streamingjobs/inputs@2021-10-01-preview";
  }

  protected getResourceBody(props: StreamanalyticsStreamingjobsInputsProps): string {
    return JSON.stringify(
        {properties: {compression: {type: "string"}, partitionKey: "string", serialization: {type: "string"}, watermarkSettings: {watermarkMode: "string"}, type: "string"}}
    );
  }
}
