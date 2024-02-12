import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface RedhatopenshiftOpenshiftclustersMachinepoolProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:openshiftclusters;

/**
   * 
   */
readonly resources?: string;
}

/**
 * RedhatopenshiftOpenshiftclustersMachinepool resource
 */
export class RedhatopenshiftOpenshiftclustersMachinepool extends AzAPIBase {
  constructor(scope: Construct, id: string, props: RedhatopenshiftOpenshiftclustersMachinepoolProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.RedHatOpenShift/openshiftclusters/machinePool@2023-07-01-preview";
  }

  protected getResourceBody(props: RedhatopenshiftOpenshiftclustersMachinepoolProps): string {
    return JSON.stringify(
        {properties: {resources: "string"}}
    );
  }
}
