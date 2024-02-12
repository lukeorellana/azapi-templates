import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DeploymentmanagerRolloutsProps extends IAzAPIBaseProps {

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
