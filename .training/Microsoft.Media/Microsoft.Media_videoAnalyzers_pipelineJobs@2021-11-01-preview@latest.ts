import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface MediaVideoanalyzersPipelinejobsProps extends IAzAPIBaseProps {

}

/**
 * MediaVideoanalyzersPipelinejobs resource
 */
export class MediaVideoanalyzersPipelinejobs extends AzAPIBase {
  constructor(scope: Construct, id: string, props: MediaVideoanalyzersPipelinejobsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Media/videoAnalyzers/pipelineJobs@2021-11-01-preview";
  }

  protected getResourceBody(props: MediaVideoanalyzersPipelinejobsProps): string {
    return JSON.stringify(
        {properties: {description: "string", parameters: [{name: "string", value: "string"}], topologyName: "string"}}
    );
  }
}
