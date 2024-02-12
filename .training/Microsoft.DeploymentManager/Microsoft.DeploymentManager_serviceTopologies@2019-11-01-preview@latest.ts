import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DeploymentmanagerServicetopologiesProps extends IAzAPIBaseProps {

}

/**
 * DeploymentmanagerServicetopologies resource
 */
export class DeploymentmanagerServicetopologies extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DeploymentmanagerServicetopologiesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DeploymentManager/serviceTopologies@2019-11-01-preview";
  }

  protected getResourceBody(props: DeploymentmanagerServicetopologiesProps): string {
    return JSON.stringify(
        {properties: {artifactSourceId: "string"}}
    );
  }
}