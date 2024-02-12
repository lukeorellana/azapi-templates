import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface MediaVideoanalyzersPipelinejobsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:videoAnalyzers;

/**
   * An optional description for the pipeline.
   */
readonly description?: string;

/**
   * List of the instance level parameter values for the user-defined topology parameters. A pipeline can only define or override parameters values for parameters which have been declared in the referenced topology. Topology parameters without a default value must be defined. Topology parameters with a default value can be optionally be overridden.
   */
readonly parameters?: ParameterDefinition[];

/**
   * Reference to an existing pipeline topology. When activated, this pipeline job will process content according to the pipeline topology definition.
   */
readonly topologyName: string;

/**
   * Parameter value to be applied on this specific pipeline.
   */
readonly value?: string;
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
