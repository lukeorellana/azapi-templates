import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DevopsPipelinesProps extends IAzAPIBaseProps {
/**
   * Configuration used to bootstrap the Pipeline.
   */
readonly bootstrapConfiguration: BootstrapConfiguration;

/**
   * Set the object type
   */
readonly pipelineType: azurePipelinegithubWorkflow;

/**
   * Repository containing the source code for the pipeline. Currently only 'azurePipeline' pipeline type supports this.
   */
readonly sourceRepository?: CodeRepository;

/**
   * Template used to bootstrap the pipeline.
   */
readonly template: PipelineTemplate;

/**
   * Authorization info to access the code repository.
   */
readonly authorization?: Authorization;

/**
   * Default branch used to configure Continuous Integration (CI) in the pipeline.
   */
readonly defaultBranch: string;

/**
   * Unique immutable identifier of the code repository.
   */
readonly id: string;

/**
   * Type of code repository.
   */
readonly repositoryType: 'gitHub''vstsGit';

/**
   * Type of authorization.
   */
readonly authorizationType: 'personalAccessToken';

/**
   * Authorization parameters corresponding to the authorization type.
   */
readonly parameters?: object;

/**
   * Unique identifier of the pipeline template.
   */
readonly id: string;

/**
   * Dictionary of input parameters used in the pipeline template.
   */
readonly parameters?: object;

/**
   * Specifies which CI/CD provider to use. Valid options are 'azurePipeline', 'githubWorkflow'.
   */
readonly pipelineType: 'azurePipeline';

/**
   * Reference to the Azure DevOps Organization containing the Pipeline. Required for 'azurePipeline' pipeline type.
   */
readonly organization: OrganizationReference;

/**
   * Reference to the Azure DevOps Project containing the Pipeline. Required for 'azurePipeline' pipeline type.
   */
readonly project: ProjectReference;

/**
   * Specifies which CI/CD provider to use. Valid options are 'azurePipeline', 'githubWorkflow'.
   */
readonly pipelineType: 'githubWorkflow';

/**
   * Contains the specifications of the repository to be created for generating the workflow. Required for 'githubWorkflow' pipeline type.
   */
readonly repository: CodeRepository;
}

/**
 * DevopsPipelines resource
 */
export class DevopsPipelines extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DevopsPipelinesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DevOps/pipelines@2020-07-13-preview";
  }

  protected getResourceBody(props: DevopsPipelinesProps): string {
    return JSON.stringify(
        {properties: {bootstrapConfiguration: {sourceRepository: {authorization: {authorizationType: "personalAccessToken", parameters: {}}, defaultBranch: "string", id: "string", properties: {}, repositoryType: "string"}, template: {id: "string", parameters: {}}}, pipelineType: "string"}}
    );
  }
}
