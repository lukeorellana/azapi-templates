import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ContainerregistryRegistriesPipelinerunsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:registries;

/**
   * How the pipeline run should be forced to recreate even if the pipeline run configuration has not changed.
   */
readonly forceUpdateTag?: string;

/**
   * The request parameters for a pipeline run.
   */
readonly request?: PipelineRunRequest;

/**
   * List of source artifacts to be transferred by the pipeline.Specify an image by repository ('hello-world'). This will use the 'latest' tag.Specify an image by tag ('hello-world:latest').Specify an image by sha256-based manifest digest ('hello-world@sha256:abc123').
   */
readonly artifacts?: string[];

/**
   * The digest of the tar used to transfer the artifacts.
   */
readonly catalogDigest?: string;

/**
   * The resource ID of the pipeline to run.
   */
readonly pipelineResourceId?: string;

/**
   * The source properties of the pipeline run.
   */
readonly source?: PipelineRunSourceProperties;

/**
   * The target properties of the pipeline run.
   */
readonly target?: PipelineRunTargetProperties;

/**
   * The type of the source.
   */
readonly type?: 'AzureStorageBlob';

/**
   * The type of the target.
   */
readonly type?: 'AzureStorageBlob';
}

/**
 * ContainerregistryRegistriesPipelineruns resource
 */
export class ContainerregistryRegistriesPipelineruns extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ContainerregistryRegistriesPipelinerunsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ContainerRegistry/registries/pipelineRuns@2023-01-01-preview";
  }

  protected getResourceBody(props: ContainerregistryRegistriesPipelinerunsProps): string {
    return JSON.stringify(
        {properties: {forceUpdateTag: "string", request: {artifacts: ["string"], catalogDigest: "string", pipelineResourceId: "string", source: {name: "string", type: "AzureStorageBlob"}, target: {name: "string", type: "AzureStorageBlob"}}}}
    );
  }
}
