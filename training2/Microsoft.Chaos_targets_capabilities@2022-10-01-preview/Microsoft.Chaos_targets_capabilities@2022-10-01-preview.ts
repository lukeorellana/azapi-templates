import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ChaosTargetsCapabilitiesProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:targets;
}

/**
 * ChaosTargetsCapabilities resource
 */
export class ChaosTargetsCapabilities extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ChaosTargetsCapabilitiesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Chaos/targets/capabilities@2022-10-01-preview";
  }

  protected getResourceBody(props: ChaosTargetsCapabilitiesProps): string {
    return JSON.stringify(
        
    );
  }
}
