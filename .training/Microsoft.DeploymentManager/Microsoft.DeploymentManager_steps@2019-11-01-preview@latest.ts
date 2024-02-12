import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DeploymentmanagerStepsProps extends IAzAPIBaseProps {

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
