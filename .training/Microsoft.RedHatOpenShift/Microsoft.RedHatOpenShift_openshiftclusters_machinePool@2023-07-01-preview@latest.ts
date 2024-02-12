import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface RedhatopenshiftOpenshiftclustersMachinepoolProps extends IAzAPIBaseProps {

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
