import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DeploymentmanagerStepsProps extends IAzAPIBaseProps {
/**
   * Set the object type
   */
readonly stepType: HealthCheckWait;

/**
   * The type of step.
   */
readonly stepType: 'HealthCheck';

/**
   * The health check step attributes
   */
readonly attributes: HealthCheckStepAttributes;

/**
   * The duration in ISO 8601 format for which the resource is expected to be continuously healthy. If maxElasticDuration is specified, healthy state duration is enforced after the detection of first healthy signal.
   */
readonly healthyStateDuration: string;

/**
   * The duration in ISO 8601 format for which the health check waits for the resource to become healthy. Health check fails if it doesn't. Health check starts to enforce healthyStateDuration once resource becomes healthy.
   */
readonly maxElasticDuration?: string;

/**
   * The duration in ISO 8601 format for which health check waits idly without any checks.
   */
readonly waitDuration?: string;

/**
   * Set the object type
   */
readonly type: REST;

/**
   * The type of health check.
   */
readonly type: 'REST';

/**
   * The list of checks that form the health check step.
   */
readonly healthChecks: RestHealthCheck[];

/**
   * The request to the health provider.
   */
readonly request: RestRequest;

/**
   * The expected response from the health provider. If no expected response is provided, the default is to expect the received response to have an HTTP status code of 200 OK.
   */
readonly response?: RestResponse;

/**
   * The authentication information required in the request to the health provider.
   */
readonly authentication: RestRequestAuthentication;

/**
   * The HTTP method to use for the request.
   */
readonly method: 'GET''POST';

/**
   * The HTTP URI to use for the request.
   */
readonly uri: string;

/**
   * Set the object type
   */
readonly type: ApiKeyRolloutIdentity;

/**
   * The authentication type.
   */
readonly type: 'ApiKey';

/**
   * The location of the authentication key/value pair in the request.
   */
readonly in: 'Header''Query';

/**
   * The value of the authentication key/value pair.
   */
readonly value: string;

/**
   * The authentication type.
   */
readonly type: 'RolloutIdentity';

/**
   * The regular expressions to match the response content with.
   */
readonly regex?: RestResponseRegex;

/**
   * The HTTP status codes expected in a successful health check response. The response is expected to match one of the given status codes. If no expected status codes are provided, default expected status code is 200 OK.
   */
readonly successStatusCodes?: string[];

/**
   * The list of regular expressions.
   */
readonly matches?: string[];

/**
   * Indicates whether any or all of the expressions should match with the response content.
   */
readonly matchQuantifier?: 'All''Any';

/**
   * The type of step.
   */
readonly stepType: 'Wait';

/**
   * The Wait attributes
   */
readonly attributes: WaitStepAttributes;

/**
   * The duration in ISO 8601 format of how long the wait should be.
   */
readonly duration: string;
}

/**
 * DeploymentmanagerSteps resource
 */
export class DeploymentmanagerSteps extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DeploymentmanagerStepsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DeploymentManager/steps@2019-11-01-preview";
  }

  protected getResourceBody(props: DeploymentmanagerStepsProps): string {
    return JSON.stringify(
        {properties: {stepType: "string"}}
    );
  }
}
