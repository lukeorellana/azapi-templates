import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface StreamanalyticsStreamingjobsFunctionsProps extends IAzAPIBaseProps {

}

/**
 * StreamanalyticsStreamingjobsFunctions resource
 */
export class StreamanalyticsStreamingjobsFunctions extends AzAPIBase {
  constructor(scope: Construct, id: string, props: StreamanalyticsStreamingjobsFunctionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.StreamAnalytics/streamingjobs/functions@2021-10-01-preview";
  }

  protected getResourceBody(props: StreamanalyticsStreamingjobsFunctionsProps): string {
    return JSON.stringify(
        {properties: {properties: {binding: {type: "string"}, inputs: [{dataType: "string", isConfigurationParameter: "${bool}"}], output: {dataType: "string"}}, type: "string"}}
    );
  }
}
