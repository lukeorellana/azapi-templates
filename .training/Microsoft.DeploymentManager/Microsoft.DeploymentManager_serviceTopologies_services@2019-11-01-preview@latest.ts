import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DeploymentmanagerServicetopologiesServicesProps extends IAzAPIBaseProps {

}

/**
 * DeploymentmanagerServicetopologiesServices resource
 */
export class DeploymentmanagerServicetopologiesServices extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DeploymentmanagerServicetopologiesServicesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DeploymentManager/serviceTopologies/services@2019-11-01-preview";
  }

  protected getResourceBody(props: DeploymentmanagerServicetopologiesServicesProps): string {
    return JSON.stringify(
        {properties: {targetLocation: "string", targetSubscriptionId: "string"}}
    );
  }
}
