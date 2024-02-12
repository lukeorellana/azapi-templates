import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DeploymentmanagerRolloutsProps extends IAzAPIBaseProps {
/**
   * Identity for the resource.
   */
readonly identity: Identity;

/**
   * The list of identities.
   */
readonly identityIds: string[];

/**
   * The identity type.
   */
readonly type: string;

/**
   * The reference to the artifact source resource Id where the payload is located.
   */
readonly artifactSourceId?: string;

/**
   * The version of the build being deployed.
   */
readonly buildVersion: string;

/**
   * The list of step groups that define the orchestration.
   */
readonly stepGroups: StepGroup[];

/**
   * The resource Id of the service topology from which service units are being referenced in step groups to be deployed.
   */
readonly targetServiceTopologyId: string;

/**
   * The list of step group names on which this step group depends on.
   */
readonly dependsOnStepGroups?: string[];

/**
   * The resource Id of service unit to be deployed. The service unit should be from the service topology referenced in targetServiceTopologyId
   */
readonly deploymentTargetId: string;

/**
   * The list of steps to be run after deploying the target.
   */
readonly postDeploymentSteps?: PrePostStep[];

/**
   * The list of steps to be run before deploying the target.
   */
readonly preDeploymentSteps?: PrePostStep[];

/**
   * The resource Id of the step to be run.
   */
readonly stepId: string;
}

/**
 * DeploymentmanagerRollouts resource
 */
export class DeploymentmanagerRollouts extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DeploymentmanagerRolloutsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DeploymentManager/rollouts@2019-11-01-preview";
  }

  protected getResourceBody(props: DeploymentmanagerRolloutsProps): string {
    return JSON.stringify(
        {properties: {artifactSourceId: "string", buildVersion: "string", stepGroups: [{dependsOnStepGroups: ["string"], deploymentTargetId: "string", name: "string", postDeploymentSteps: [{stepId: "string"}], preDeploymentSteps: [{stepId: "string"}]}], targetServiceTopologyId: "string"}}
    );
  }
}
