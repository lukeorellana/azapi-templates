import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface Props extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:environments;

/**
   * Defines if image needs to be rebuilt based on base image changes.
   */
readonly autoRebuild?: 'Disabled''OnBaseImageUpdate';

/**
   * Configuration settings for Docker build context.
   */
readonly build?: BuildContext;

/**
   * Standard configuration file used by Conda that lets you install any kind of package, including Python, R, and C/C++ packages.{see href="https://repo2docker.readthedocs.io/en/latest/config_files.html#environment-yml-install-a-conda-environment" /}
   */
readonly condaFile?: string;

/**
   * The asset description text.
   */
readonly description?: string;

/**
   * Name of the image that will be used for the environment.{seealso href="https://docs.microsoft.com/azure/machine-learning/how-to-deploy-custom-docker-image#use-a-custom-base-image" /}
   */
readonly image?: string;

/**
   * Defines configuration specific to inference.
   */
readonly inferenceConfig?: InferenceContainerProperties;

/**
   * If the name version are system generated (anonymous registration).
   */
readonly isAnonymous?: bool;

/**
   * Is the asset archived?
   */
readonly isArchived?: bool;

/**
   * The OS type of the environment.
   */
readonly osType?: 'Linux''Windows';

/**
   * Stage in the environment lifecycle assigned to this environment
   */
readonly stage?: string;

/**
   * [Required] URI of the Docker build context used to build the image. Supports blob URIs on environment creation and may return blob or Git URIs.{seealso href="https://docs.docker.com/engine/reference/commandline/build/#extended-description" /}
   */
readonly contextUri: string Constranumbers:Min length = 1Pattern =[a-zA-Z0-9_];

/**
   * Path to the Dockerfile in the build context.{seealso href="https://docs.docker.com/engine/reference/builder/" /}
   */
readonly dockerfilePath?: string;

/**
   * The route to check the liveness of the inference server container.
   */
readonly livenessRoute?: Route;

/**
   * The route to check the readiness of the inference server container.
   */
readonly readinessRoute?: Route;

/**
   * The port to send the scoring requests to, within the inference server container.
   */
readonly scoringRoute?: Route;

/**
   * [Required] The path for the route.
   */
readonly path: string Constranumbers:Min length = 1Pattern =[a-zA-Z0-9_];

/**
   * [Required] The port for the route.
   */
readonly port: number;

/**
   * 
   */
readonly {customized property}?: string;

/**
   * 
   */
readonly {customized property}?: string;

/**
   * 
   */
readonly {customized property}?: string;

/**
   * 
   */
readonly {customized property}?: string;

/**
   * 
   */
readonly {customized property}?: string;

/**
   * 
   */
readonly {customized property}?: string;

/**
   * 
   */
readonly {customized property}?: string;

/**
   * 
   */
readonly {customized property}?: string;

/**
   * 
   */
readonly {customized property}?: string;

/**
   * 
   */
readonly {customized property}?: string;

/**
   * 
   */
readonly {customized property}?: string;

/**
   * 
   */
readonly {customized property}?: string;

/**
   * 
   */
readonly {customized property}?: string;

/**
   * 
   */
readonly {customized property}?: string;

/**
   * 
   */
readonly {customized property}?: string;

/**
   * 
   */
readonly {customized property}?: string;

/**
   * 
   */
readonly {customized property}?: string;

/**
   * 
   */
readonly {customized property}?: string;
}

/**
 *  resource
 */
export class  extends AzAPIBase {
  constructor(scope: Construct, id: string, props: Props) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "";
  }

  protected getResourceBody(props: Props): string {
    return JSON.stringify(
        
    );
  }
}
