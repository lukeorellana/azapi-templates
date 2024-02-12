import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface MediaVideoanalyzersLivepipelinesProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:videoAnalyzers;

/**
   * Maximum bitrate capacity in Kbps reserved for the live pipeline. The allowed range is from 500 to 3000 Kbps in increments of 100 Kbps. If the RTSP camera exceeds this capacity, then the service will disconnect temporarily from the camera. It will retry to re-establish connection (with exponential backoff), checking to see if the camera bitrate is now below the reserved capacity. Doing so will ensure that one 'noisy neighbor' does not affect other live pipelines in your account.
   */
readonly bitrateKbps: number;

/**
   * An optional description for the pipeline.
   */
readonly description?: string;

/**
   * List of the instance level parameter values for the user-defined topology parameters. A pipeline can only define or override parameters values for parameters which have been declared in the referenced topology. Topology parameters without a default value must be defined. Topology parameters with a default value can be optionally be overridden.
   */
readonly parameters?: ParameterDefinition[];

/**
   * The reference to an existing pipeline topology defined for real-time content processing. When activated, this live pipeline will process content according to the pipeline topology definition.
   */
readonly topologyName: string;

/**
   * Parameter value to be applied on this specific pipeline.
   */
readonly value?: string;
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
