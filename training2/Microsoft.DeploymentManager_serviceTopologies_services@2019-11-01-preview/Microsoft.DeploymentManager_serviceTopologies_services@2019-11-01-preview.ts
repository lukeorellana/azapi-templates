import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DeploymentmanagerServicetopologiesServicesProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:serviceTopologies;

/**
   * The Azure location to which the resources in the service belong to or should be deployed to.
   */
readonly targetLocation: string;

/**
   * The subscription to which the resources in the service belong to or should be deployed to.
   */
readonly targetSubscriptionId: string;
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
