import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ContainerregistryRegistriesBuildtasksStepsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:buildTasks;

/**
   * Set the object type
   */
readonly type: Docker;

/**
   * The type of the step.
   */
readonly type: 'Docker';

/**
   * The type of the auto trigger for base image dependency updates.
   */
readonly baseImageTrigger?: 'All''None''Runtime';

/**
   * The repository branch name.
   */
readonly branch?: string;

/**
   * The custom arguments for building this build step.
   */
readonly buildArguments?: BuildArgument[];

/**
   * The relative context path for a docker build in the source.
   */
readonly contextPath?: string;

/**
   * The Docker file path relative to the source control root.
   */
readonly dockerFilePath?: string;

/**
   * The fully qualified image names including the repository and tag.
   */
readonly imageNames?: string[];

/**
   * The value of this property indicates whether the image built should be pushed to the registry or not.
   */
readonly isPushEnabled?: bool;

/**
   * The value of this property indicates whether the image cache is enabled or not.
   */
readonly noCache?: bool;

/**
   * Flag to indicate whether the argument represents a secret and want to be removed from build logs.
   */
readonly isSecret?: bool;

/**
   * The type of the argument.
   */
readonly type: 'DockerBuildArgument';

/**
   * The value of the argument.
   */
readonly value: string;
}

/**
 * ContainerregistryRegistriesBuildtasksSteps resource
 */
export class ContainerregistryRegistriesBuildtasksSteps extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ContainerregistryRegistriesBuildtasksStepsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ContainerRegistry/registries/buildTasks/steps@2018-02-01-preview";
  }

  protected getResourceBody(props: ContainerregistryRegistriesBuildtasksStepsProps): string {
    return JSON.stringify(
        {properties: {type: "string"}}
    );
  }
}
