import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ResourcesDeploymentscriptsProps extends IAzAPIBaseProps {

}

/**
 * ResourcesDeploymentscripts resource
 */
export class ResourcesDeploymentscripts extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ResourcesDeploymentscriptsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Resources/deploymentScripts@2020-10-01";
  }

  protected getResourceBody(props: ResourcesDeploymentscriptsProps): string {
    return JSON.stringify(
        {kind: "string"}
    );
  }
}
